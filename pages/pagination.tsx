import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Pagination,
  LoadingOverlay,
  Box,
  Stack,
  Group,
  Text,
} from "@mantine/core";

import PaginationGrid from "../components/PaginationGrid";
import PageTitle from "../components/PageTitle";
const url = "https://dota2-game-api.vercel.app/api/heroes?";
const itemPerPage = 8;
const fetchHeroes = async (page = 0) => {
  const res = await axios.get(url, {
    params: {
      pageSize: itemPerPage,
      pageOffset: page,
    },
  });
  return res.data;
};

const PaginationQuery = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();

  const { isLoading, data, isPreviousData, isFetching } = useQuery(
    ["heroes", page],
    () => fetchHeroes(page),
    {
      keepPreviousData: true,
      staleTime: 60 * 1000, // 1 minute
    }
  );

  useEffect(() => {
    axios.get(url).then((res) => setTotal(res.data.heroes.length));
  }, []);

  const totalNum = Math.ceil(Number(total) / itemPerPage);

  return (
    <Layout>
      <PageTitle title="pagination" />
      <Text
        align="center"
        sx={(theme) => ({
          paddingBottom: theme.spacing.xl,
        })}
      >
        Current Page: {page + 1}
      </Text>
      {isLoading || isFetching ? (
        <LoadingOverlay visible={true} overlayBlur={2} />
      ) : (
        <PaginationGrid hero={data} />
      )}
      {/* Button for control */}
      <Stack
        align="center"
        sx={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Group>
          <Button
            color="orange"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 0}
          >
            Previous Page
          </Button>
          <Button
            color="orange"
            onClick={() => {
              setPage((old) => (data?.nextPageOffset ? old + 1 : old));
            }}
            disabled={isPreviousData || !data?.nextPageOffset}
          >
            Next Page
          </Button>
        </Group>

        <Box>
          <Pagination
            color="orange"
            page={page + 1}
            onChange={(prev) => setPage(prev - 1)}
            total={totalNum}
          />
        </Box>
      </Stack>
    </Layout>
  );
};

export default PaginationQuery;
