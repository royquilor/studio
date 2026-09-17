import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

export default function HouseNotFound() {
  return (
    <Empty className="flex-1">
      <EmptyHeader>
        <EmptyTitle>This topic is not in the harness</EmptyTitle>
        <EmptyDescription>
          Add it to the catalog if it is a real job. Do not invent a one-off page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back to House
        </Link>
      </EmptyContent>
    </Empty>
  )
}
