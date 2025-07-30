export interface UrlVideo {
  name: string;
  url: string;
  description: string;
}

interface UrlVideoPlayerProps {
  data: UrlVideo;
}

export default function UrlVideoPlayer({ data }: UrlVideoPlayerProps) {
  return (
    <div className="aspect-4/3 overflow-hidden rounded-lg">
      <iframe
        src={data.url}
        title={data.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
