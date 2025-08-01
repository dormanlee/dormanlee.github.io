import DynamicTable from '../components/tables/DynamicTable'
import {
  Category,
  Subcategory,
} from '../components/form/form-elements/SingleMultiSelect'
import SingleMultiSelect from '../components/form/form-elements/SingleMultiSelect'
import PageMeta from '../components/common/PageMeta'
import { teams } from '../data/Teams'

const categoryOptions: Category[] = [
  { value: 'team', label: 'Team', text: 'Team', selected: false },
  { value: 'player', label: 'Player', text: 'Player', selected: false },
]

const multiListOptions: Subcategory[] = [
  {
    category: 'team',
    value: 'teamrank',
    label: 'Team Ranking',
    text: 'Team Ranking',
  },
  {
    category: 'player',
    value: 'offense',
    label: 'Best Offenser',
    text: 'Best Offenser',
  },
  {
    category: 'player',
    value: 'defense',
    label: 'Best Defender',
    text: 'Best Defender',
  },
  {
    category: 'player',
    value: 'mvp',
    label: 'Most Valuable Player',
    text: 'Most Valuable Player',
  },
]

import { useState } from 'react'

export default function Ranking() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedMulti, setSelectedMulti] = useState<string[]>([])

  // Table data logic for multi DynamicTable
  type TableBlock = { tableData: any[]; tableName: string }
  const tableBlocks: TableBlock[] = []
  if (selectedCategory === 'team' && selectedMulti.includes('teamrank')) {
    tableBlocks.push({
      tableData: teams.map(
        ({ name, logo, win, loss, draw, points, lastMatch }) => ({
          name,
          logo,
          win,
          loss,
          draw,
          points,
          lastMatch,
        })
      ),
      tableName: 'Team Ranking',
    })
  }
  if (selectedCategory === 'player' && selectedMulti.length > 0) {
    const allPlayers = teams.flatMap((team) =>
      team.players.map((player) => ({ ...player, team: team.name }))
    )
    if (selectedMulti.includes('offense')) {
      tableBlocks.push({
        tableData: [...allPlayers]
          .sort(
            (a, b) =>
              (b.scores || 0) +
              (b.assists || 0) -
              ((a.scores || 0) + (a.assists || 0))
          )
          .slice(0, 10)
          .map(({ name, image, team, number, position, scores, assists }) => ({
            name,
            image,
            team,
            number,
            position,
            scores,
            assists,
          })),
        tableName: 'Best Offenser',
      })
    }
    if (selectedMulti.includes('defense')) {
      tableBlocks.push({
        tableData: [...allPlayers]
          .sort(
            (a, b) =>
              (b.blocks || 0) +
              (b.steals || 0) -
              ((a.blocks || 0) + (a.steals || 0))
          )
          .slice(0, 10)
          .map(
            ({
              name,
              image,
              team,
              number,
              position,
              rebounds,
              blocks,
              steals,
            }) => ({
              name,
              image,
              team,
              number,
              position,
              rebounds,
              blocks,
              steals,
            })
          ),
        tableName: 'Best Defender',
      })
    }
    if (selectedMulti.includes('mvp')) {
      tableBlocks.push({
        tableData: [...allPlayers]
          .sort(
            (a, b) =>
              (b.scores || 0) +
              (b.assists || 0) +
              (b.rebounds || 0) +
              (b.blocks || 0) +
              (b.steals || 0) -
              ((a.scores || 0) +
                (a.assists || 0) +
                (a.rebounds || 0) +
                (a.blocks || 0) +
                (a.steals || 0))
          )
          .slice(0, 10)
          .map(
            ({
              name,
              image,
              team,
              number,
              position,
              scores,
              assists,
              rebounds,
              blocks,
              steals,
            }) => ({
              name,
              image,
              team,
              number,
              position,
              scores,
              assists,
              rebounds,
              blocks,
              steals,
            })
          ),
        tableName: 'Most Valuable Player',
      })
    }
    // Add more player-based rankings as needed
  }

  return (
    <>
      <PageMeta title="Ranking Template" description="Ranking Template" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <SingleMultiSelect
            categoryLabel="Category"
            subcategoriesLabel="Subcategories"
            options={categoryOptions}
            multiOptions={multiListOptions}
            onSelectChange={setSelectedCategory}
            onMultiChange={setSelectedMulti}
          />
        </div>
        {tableBlocks.map((block, idx) => (
          <div className="col-span-12" key={block.tableName + idx}>
            <DynamicTable
              tableData={block.tableData}
              tableName={block.tableName}
            />
          </div>
        ))}
      </div>
    </>
  )
}
