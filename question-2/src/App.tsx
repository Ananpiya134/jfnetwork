import { Container } from "@components/container";
import { Table } from "@components/table";

import { headersDesktop, headersMobile, tableBody } from "@/constant/data";

import type { TableItems } from "@components/table";

function App() {
  const tableItems: TableItems = {
    dataSource: tableBody,
    headersDesktop,
    headersMobile,
  };
  return (
    <Container className="pb-5 px-2.5 xl:pt-1 xl:py-4">
      <Table tableItems={tableItems} />
    </Container>
  );
}

export default App;
