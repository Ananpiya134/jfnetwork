import { Container } from "@components/container";
import { Table } from "@components/table";

import { headersDesktop, headersMobile, tableBody } from "@/constant/data";

function App() {
  return (
    <Container className="pb-5 px-2.5 xl:pt-1 xl:py-4">
      <Table
        headersDesktop={headersDesktop}
        headersMobile={headersMobile}
        dataSource={tableBody}
      />
    </Container>
  );
}

export default App;
