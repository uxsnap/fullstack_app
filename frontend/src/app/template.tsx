"use client";

import { AppShell, Burger, Text, Flex, Image, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import type { PropsWithChildren } from "react";

const NAVBAR_LINKS = [
  { href: "/controllers", text: "Controllers" },
  { href: "/providers", text: "Providers" }
];

export default function Template({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex align="center" h="100%" pl={20}>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            mr={20}
          />

          <Image h={50} w={50} src="/nest.svg" />

          <Text ml={20} fw="bold">
            Nest.js docs walkthrough
          </Text>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {NAVBAR_LINKS.map(({ href, text }) => (
          <NavLink key={href} href={href} label={text} />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
