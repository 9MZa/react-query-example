import React, { Fragment } from "react";
import { Grid, Card, Image, Box, Text, Group } from "@mantine/core";
import HeroCard from "./Card";
const GridDisplay = ({ hero }: any) => {
  return (
    <Grid>
      {hero?.pages.map((page: any) => (
        <Fragment key={page.nextPageOffset}>
          {page.items.map((item: any) => (
            <Grid.Col xs={12} sm={3} key={item.id}>
              <HeroCard item={item} />
            </Grid.Col>
          ))}
        </Fragment>
      ))}
    </Grid>
  );
};

export default GridDisplay;
