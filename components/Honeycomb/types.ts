export interface CommonHoneycombProps<T = string> {
  size: number
  items: Array<number>
  renderItem(item: T, index: number): React.ReactElement
  className?: string
  gap?: number
}

export interface StaticHoneycombProps extends CommonHoneycombProps {
  columns: number
}

export interface ResponsiveHoneycombProps extends CommonHoneycombProps {
  defaultWidth: number
}

export interface HoneycombCellProps {
  children: any
  row: number
  column: number
}

export interface HexagonProps {
  children: any
  className?: string
  style?: React.CSSProperties
}
