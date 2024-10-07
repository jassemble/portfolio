import * as React from "react"
import { range } from "lodash"
import ResizeObserver from "resize-observer-polyfill"

import Honeycomb from "./Honeycomb"
import { getGridColumnsCount, getGridRowsCount } from "./helpers"
import type { ResponsiveHoneycombProps } from "./types"

const ResponsiveHoneycomb: React.FC<ResponsiveHoneycombProps> = ({
  children,
  size,
  defaultWidth,
  ...restProps
}) => {
  const containerRef = React.useRef<HTMLUListElement>(null)
  const [columns, setColumns] = React.useState(
    getGridColumnsCount(size, defaultWidth)
  )
  const [rows, setRows] = React.useState(getGridRowsCount(size, 1080))
  const items = range(columns * rows)
  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setColumns(getGridColumnsCount(size, entry.contentRect.width))
        // setRows(getGridRowsCount(size, entry.contentRect.height))
      }
    })

    setColumns(
      getGridColumnsCount(
        size,
        containerRef.current?.clientWidth ?? defaultWidth
      )
    )
    setRows(getGridRowsCount(size, containerRef.current?.clientHeight ?? 1080))
    if (containerRef.current == null) return

    const target = containerRef.current
    observer.observe(target)
    return () => observer.unobserve(target)
  }, [size])

  return (
    <Honeycomb
      ref={containerRef}
      size={size}
      {...restProps}
      items={items}
      columns={columns}
    />
  )
}

export default ResponsiveHoneycomb
