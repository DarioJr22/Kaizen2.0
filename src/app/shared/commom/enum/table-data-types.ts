export class TableBuilder{
  columns!:Columns[]

}

export class Columns{
  columnName!:string;
  columnTitle!:string;
  columnType!:ColumnTypes
}

export enum ColumnTypes{
DATE,
STRING,
BOOLEAN,
NUMBER,
ACTIONS
}
