export interface MoveObject {
  indexParent: number,
  index: number,
  action: "put" | "unset",
  color: "blanc" | "noir"
}
