import ComponentCard from '../components/common/ComponentCard'
import PageBreadcrumb from '../components/common/PageBreadCrumb'
import PageMeta from '../components/common/PageMeta'
import UrlVideoPlayer from '../components/ui/videos/UrlVideoPlayer'
import { videos } from '../data/UrlVideos'

export default function Matches() {
  return (
    <>
      <PageMeta
        title="Demo | Template | Testing"
        description="This is a demo page for testing purposes."
      />
      <PageBreadcrumb pageTitle="Matches" />

      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-1">
        {videos.map((video) => (
          <div key={video.name} className="space-y-5 sm:space-y-6">
            <ComponentCard title={video.description}>
              <UrlVideoPlayer data={video} />
            </ComponentCard>
          </div>
        ))}
      </div>
    </>
  )
}
