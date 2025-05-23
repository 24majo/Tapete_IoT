  import {
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    Text,
    UnstyledButton,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import classes from '../styles/header.module.css';
  
  export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    return (
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            {/* <MantineLogo size={30} /> */}
  
            <Group visibleFrom="sm">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
  
            {/* <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" /> */}
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
              </Center>
            </UnstyledButton>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }