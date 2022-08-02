import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { useInView } from "react-intersection-observer";
import { Title, Button, Box, Center, LoadingOverlay } from "@mantine/core";
import GridDisplay from "../components/InfiniteGrid";
import PageTitle from "../components/PageTitle";

const fetchHeroes = async ({ pageParam = 0 }) => {
  const url = "https://dota2-game-api.vercel.app/api/heroes?";
  const res = await axios.get(url, {
    params: {
      pageSize: 12,
      pageOffset: pageParam,
    },
  });
  return res.data;
};

const InfiniteQuery = () => {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["projects"], fetchHeroes, {
      getNextPageParam: (lastPage) => lastPage.nextPageOffset ?? undefined,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Layout>
      <Box
        sx={(theme) => ({
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
        })}
      >
        <PageTitle title="useInfiniteQuery" />
      </Box>
      {isLoading ? (
        <LoadingOverlay visible={true} overlayBlur={2} />
      ) : (
        <GridDisplay hero={data} />
      )}
      <Center
        sx={(theme) => ({
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
        })}
      >
        <Button
          ref={ref}
          loading={isFetchingNextPage}
          disabled={!hasNextPage}
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? "Loading"
            : hasNextPage
            ? "Load More"
            : "No more Hero."}
        </Button>
      </Center>
    </Layout>
  );
};

export default InfiniteQuery;
