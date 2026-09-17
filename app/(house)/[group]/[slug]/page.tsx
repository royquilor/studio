import { notFound } from "next/navigation"

import { catalog, findItem } from "@/lib/catalog"
import { TopicView } from "@/components/topic-view"

type TopicParams = Promise<{
  group: string
  slug: string
}>

export function generateStaticParams() {
  return catalog.flatMap((group) =>
    group.items
      .filter((item) => item.href !== "/")
      .map((item) => {
        const [, slug] = item.href.split("/").filter(Boolean)
        return { group: group.id, slug }
      })
  )
}

export async function generateMetadata({ params }: { params: TopicParams }) {
  const { group, slug } = await params
  const item = findItem(group, slug)

  return {
    title: item ? `${item.title} · House` : "House",
    description: item?.summary,
  }
}

export default async function TopicPage({ params }: { params: TopicParams }) {
  const { group: groupId, slug } = await params
  const group = catalog.find((entry) => entry.id === groupId)
  const item = findItem(groupId, slug)

  if (!group || !item) {
    notFound()
  }

  return <TopicView group={group} item={item} />
}
