import React from "react";
import { Card, Image, Group, Text, Box } from "@mantine/core";

const HeroCard = ({ item }: any) => {
  return (
    <>
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        sx={(theme) => ({
          height: "280px",
        })}
      >
        <Card.Section>
          <Box
            sx={{
              height: "80%",
            }}
          >
            <Image
              src={item.small_thumbnail}
              alt={item.name}
              placeholder="blur"
            />
          </Box>
        </Card.Section>
        <Group position="apart" mt="md">
          <Text size="lg" weight={600} transform="uppercase">
            {item.name}
          </Text>
          <Text size="sm" color="dimmed">
            {item.hero_one_liner}
          </Text>
        </Group>
      </Card>
    </>
  );
};

export default HeroCard;
