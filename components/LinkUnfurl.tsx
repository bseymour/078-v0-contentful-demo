import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { fetchMetadata } from '@/lib/fetchMetadata'

interface LinkUnfurlProps {
  url: string
}

export async function LinkUnfurl({ url }: LinkUnfurlProps) {
  const { title, description, image } = await fetchMetadata(url)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="p-4 pb-0">
          <div className="aspect-video relative rounded-md overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <p className="text-xs text-gray-400 mt-2 truncate">{url}</p>
        </CardContent>
      </a>
    </Card>
  )
}

