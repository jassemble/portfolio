import * as React from "react"

export const HoneycombContext = React.createContext({ gap: 0 })

export function getGridColumnsCount(
  hexagonSide: number,
  containerWidth: number
): number {
  const hexagonWidth = Math.sqrt(3) * hexagonSide
  const columns = Math.floor(containerWidth / hexagonWidth) + 2
  return columns
}
export function getGridRowsCount(
  hexagonSide: number,
  containerHeight: number
): number {
  const hexagonWidth = Math.sqrt(3) * hexagonSide
  const rows = Math.floor(containerHeight / hexagonWidth)
  return rows
}

export function getRowSize(hexagonSide: number): number {
  return hexagonSide / 2
}

export function getColumnSize(hexagonSide: number): number {
  return (Math.sqrt(3) * hexagonSide) / 4
}
