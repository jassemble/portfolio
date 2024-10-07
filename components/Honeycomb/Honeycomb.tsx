import * as React from "react"

import HoneycombCell from "./HoneycombCell"
import { HoneycombContext, getColumnSize, getRowSize } from "./helpers"
import type { StaticHoneycombProps } from "./types"

const Honeycomb = React.forwardRef<HTMLUListElement, StaticHoneycombProps>(
  ({ items, renderItem, size, columns, className, gap = 4 }, ref) => {
    const rowSize = getRowSize(size)
    const columnSize = getColumnSize(size)

    return (
      <HoneycombContext.Provider value={{ gap }}>
        <ul
          ref={ref}
          className={className}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns * 4}, ${columnSize}px)`,
            justifyContent: "center",
            gridAutoRows: `${rowSize}px`,
            // padding: `0 ${columnSize}px`,
            listStyle: "none",
            overflow: "hidden",
          }}
        >
          {items.map((item, index) => {
            const row = 1 + Math.floor(index / columns) * 3
            const column = 1 + (index % columns) * 4
            //@ts-ignore
            const renderedItem = renderItem(item, index)

            return (
              <HoneycombCell key={index} row={row} column={column}>
                {renderedItem}
              </HoneycombCell>
            )
          })}
        </ul>
      </HoneycombContext.Provider>
    )
  }
)
Honeycomb.displayName = "Honeycomb"
export default Honeycomb
