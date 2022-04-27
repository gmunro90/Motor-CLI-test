import React from "react";
import { Row } from "../components";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-one/welcome-area";
import RowOne from "../containers/dashboard-one/row-one";
import RowTwo from "../containers/dashboard-one/row-two";
import RowThree from "../containers/dashboard-one/row-three";

const DashboardOne = () => {
  return (
    <Layout>
      <Content>
        <WelcomeArea />
        <Row gutters={10}>
          <RowOne />
          <RowTwo />
          <RowThree />
        </Row>
      </Content>
    </Layout>
  );
};

export default DashboardOne;