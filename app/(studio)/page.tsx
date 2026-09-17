import { catalog, findItemByHref } from "@/lib/catalog"
import { TopicView } from "@/components/topic-view"

export default function HomePage() {
  const group = catalog[0]
  const item = findItemByHref("/")

  if (!group || !item) {
    return null
  }

  return <TopicView group={group} item={item} />
}
