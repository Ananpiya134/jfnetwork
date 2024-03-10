import { Badge } from "@components/badge";
import { Typography } from "@components/typography";

import { cn } from "@/utils/cn";

import type { TableProps } from "./types";

const Table = ({
  headersDesktop,
  headersMobile,

  className = "",
  dataSource = [],
  ...props
}: TableProps): JSX.Element => {
  return (
    <table
      {...props}
      className={cn(
        "mx-auto  w-85.25 xl:w-full xl:max-w-209.5 px-2.5",
        className
      )}
    >
      {/* Header */}
      <thead className="w-full border-b border-b-grey-900">
        <tr className="xl:hidden grid grid-cols-16">
          {headersMobile.map(({ title, span, align }) => {
            return (
              <th
                key={title}
                className={cn(`col-span-${span} flex items-center py-1 px-2`, {
                  "justify-center": align === "center",
                  "justify-start": align === "left",
                })}
              >
                <Typography className="text-black" variant="header">
                  {title}
                </Typography>
              </th>
            );
          })}
        </tr>
        <tr className="hidden xl:grid xl:grid-cols-13">
          {headersDesktop.map(({ title, span, align }) => {
            return (
              <th
                key={title}
                className={cn(
                  `col-span-${span} flex items-center xl:py-1 xl:px-4`,
                  {
                    "justify-center": align === "center",
                    "justify-start": align === "left",
                  }
                )}
              >
                <Typography className="text-black" variant="header">
                  {title}
                </Typography>
              </th>
            );
          })}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {dataSource.map(({ name, children }) => {
          return (
            <tr
              className="w-full grid grid-cols-16 xl:grid-cols-13 odd:bg-grey-200 even:bg-grey-100"
              key={name}
            >
              <td className="col-span-full xl:col-span-3 px-2 xl:px-4 xl:py-1 pt-2 pb-0 flex items-center">
                <Typography variant="name">{name}</Typography>
              </td>
              <td className="col-span-full xl:col-span-10">
                <table className="w-full">
                  <tbody>
                    {children.map(({ day, hall, time: { start, end } }) => {
                      return (
                        <tr
                          className="border-b border-b-grey-300 w-full grid grid-cols-16 xl:grid-cols-10 xl:last:border-b-0"
                          key={`${name}-${day}-${hall}-${start}-${end}`}
                        >
                          <td className="col-span-4 xl:col-span-2 px-2 py-1 flex items-center xl:py-1 xl:px-4 ">
                            <Typography variant="content">{day}</Typography>
                          </td>
                          <td className="col-span-6 xl:col-span-4 px-2 py-1 flex items-center xl:justify-center xl:py-1 xl:px-4 gap-1 xl:gap-4">
                            <Badge>
                              <Typography className="text-white" variant="date">
                                {start}
                              </Typography>
                            </Badge>
                            <Typography
                              className="text-black"
                              variant="content"
                            >
                              -
                            </Typography>
                            <Badge>
                              <Typography className="text-white" variant="date">
                                {end}
                              </Typography>
                            </Badge>
                          </td>
                          <td className="col-span-6 xl:col-span-4 px-2 py-1 flex items-center xl:py-1 xl:px-4 ">
                            <Typography variant="content">{hall}</Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
