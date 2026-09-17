import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

export default function NotFound() {
  return (
    <Empty className="min-h-svh">
      <EmptyHeader>
        <EmptyTitle>This topic is not in the harness</EmptyTitle>
        <EmptyDescription>
          The sidebar only lists allowlisted jobs. If you need a new one, add it
          to the catalog — do not invent a page with custom CSS.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link href="/" className={buttonVariants()}>
          Back to House
        </Link>
      </EmptyContent>
    </Empty>
  )
}
