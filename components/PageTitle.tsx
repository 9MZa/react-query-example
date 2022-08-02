import React from "react";
import { Title, Center } from "@mantine/core";
const PageTitle = ({ title }: any) => {
  return (
    <Center
      sx={(theme) => ({
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.md,
      })}
    >
      <Title
        order={2}
        align="center"
        sx={(theme) => ({
          fontSize: 56,
        })}
      >
        {title}
      </Title>
    </Center>
  );
};

export default PageTitle;
