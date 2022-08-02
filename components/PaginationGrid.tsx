import React from "react";
import { Grid, Card, Image, Group, Text, Box } from "@mantine/core";
import HeroCard from "./Card";
const PaginationGrid = ({ hero }: any) => {
  return (
    <Grid>
      {hero.items.map((item: any) => {
        return (
          <Grid.Col span={3} key={item.id}>
            <HeroCard item={item} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default PaginationGrid;
