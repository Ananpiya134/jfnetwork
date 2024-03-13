import type { ComponentPropsWithoutRef } from "react";

import type { Day } from "@/types";

export interface RowDataChildren {
  day: Day;
  time: {
    start: string;
    end: string;
  };
  hall: string;
}

export interface RowData {
  name: string;
  children: RowDataChildren[];
}

export interface CellHeader {
  title: string;
  span: number;
  align: "center" | "left";
}

export interface TableItems {
  headersMobile: CellHeader[];
  headersDesktop: CellHeader[];
  dataSource: RowData[];
}

export interface TableProps extends ComponentPropsWithoutRef<"table"> {
  tableItems: TableItems;
}
