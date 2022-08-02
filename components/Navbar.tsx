import React from "react";
import {
  Box,
  Title,
  Anchor,
  Group,
  Container,
  Switch,
  useMantineColorScheme,
} from "@mantine/core";

const navList = [
  { name: "Home", href: "/" },
  { name: "Infinite Scroll", href: "/Infinite-scroll" },
  { name: "Load More", href: "/load-more" },
  { name: "Pagination", href: "/pagination" },
];

const Navbar = () => {
  return (
    <Group>
      {navList.map((item) => {
        return (
          <Anchor
            sx={(theme) => ({
              fontSize: theme.fontSizes.md,
              textTransform: "uppercase",
              fontWeight: 600,
              color: theme.colors.gray[0],
            })}
            key={item.name}
            href={item.href}
          >
            {item.name}
          </Anchor>
        );
      })}
    </Group>
  );
};

const NavWrapper = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray,
        padding: theme.spacing.md,
      })}
    >
      <Container
        size="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Title
          order={3}
          sx={(theme) => ({
            color: theme.colors.gray[0],
          })}
        >
          <Anchor href="/" color="orange">
            React Query Example
          </Anchor>
        </Title>

        <Group>
          <Navbar />
          <Switch
            checked={colorScheme === "dark"}
            color="orange"
            onChange={() => toggleColorScheme()}
          />
        </Group>
      </Container>
    </Box>
  );
};

export default NavWrapper;
