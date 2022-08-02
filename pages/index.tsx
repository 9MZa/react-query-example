import type { NextPage } from "next";
import Layout from "../components/Layout";
import { Center, Title } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <Layout>
      <Center
        sx={{
          height: "80vh",
        }}
      >
        <Title
          sx={(theme) => ({
            fontSize: 60,
          })}
          order={1}
        >
          Hi.👋 Take a look around
        </Title>
      </Center>
    </Layout>
  );
};

export default Home;
