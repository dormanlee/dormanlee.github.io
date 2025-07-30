import NextEvent from '../../components/dashboard/NextEvent'
import LastEvent from '../../components/dashboard/LastEvent'

import TopFiveTeams from '../../components/dashboard/TopFiveTeams'
import PageMeta from '../../components/common/PageMeta'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Demo | Template | Testing"
        description="This is a demo page for testing purposes."
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <NextEvent />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <TopFiveTeams />
        </div>
      </div>
    </>
  )
}
