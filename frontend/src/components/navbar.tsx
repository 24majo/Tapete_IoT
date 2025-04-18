import { AppShell, Burger, Code, Image, Button, Tooltip, Slider, Stack, SimpleGrid, Divider } from '@mantine/core';
import { useDisclosure,useMediaQuery } from '@mantine/hooks';
import { IconHome, IconArrowBack, IconHelp, IconRefresh, IconPlayerPlayFilled, IconHeadphones, IconHeadphonesOff } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { User } from './user';
import { useState } from 'react';
import classes from '../styles/navbar.module.css'
import logo from '../images/logoLetras.png'

const data = [
    { link: '/MenuSeleccion', label: 'Inicio', icon: IconHome, Tooltip: 'Inicio' },
    { link: '/MenuNumeros', label: 'Menú números', icon: IconArrowBack, Tooltip: 'Menú números' },
    { link: '', label: 'Ayuda', icon: IconHelp, Tooltip: 'Ayuda' },
]

export function Navbar() {
    const isMobile = useMediaQuery('(max-width: 650px)')
    const [opened, { toggle }] = useDisclosure()
    const [active, setActive] = useState('Billing')
    const [restart, setRestart] = useState(true)
    const [music, setMusic]  = useDisclosure()

    const links = data.map((item) => (
        <Link
            to={item.link}
            key={item.label}
            className={`${classes.link} ${opened ? classes.linkCollapsed : ''}`}
            data-active={item.label === active || undefined}
            onClick={() => setActive(item.label)}
        >
            <Tooltip 
                label={item.Tooltip}
                position="right"
                withArrow
                disabled={!opened}
                style={{
                    backgroundColor: 'white',
                    color: '#f5a00d',
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <div>
                    <item.icon className={classes.linkIcon} size={25} stroke={1.5} />
                    {!opened && <span style={{fontSize: '15px'}}>{item.label}</span>}
                </div>
            </Tooltip>
        </Link>
    ));

    const [started, setStarted] = useState(false)

    const StartClick = () => {
        setStarted(true)
        setRestart(false)
    };

    const RestartClick = () => {
        setStarted(false)
    };

    return (
        <AppShell
            layout="alt"
            navbar={{ width: opened ? 82 : 210, breakpoint: 'sm'}}
        >
            <AppShell.Navbar p="md" hidden={!opened && isMobile}>

                <SimpleGrid cols={3} spacing="xs">
                    <Burger opened={opened} onClick={toggle} size="sm" />
                    {!opened && <Image src={logo} width={25} height={25}/>}
                    {!opened && <Code fw={600}>v1.0.0</Code>}
                </SimpleGrid>
                <Divider style={{marginTop:'3vh'}} />
                <Stack
                    h={220}
                    align="stretch"
                    justify="center"
                    gap="xs"
                >
                    {links}
                </Stack>

                <Stack
                    h={210}
                    align="stretch"
                    justify="center"
                    gap="xs"
                    style={{marginBottom: '10vh'}}
                >
                    <Button
                        justify="center"
                        leftSection={<IconPlayerPlayFilled size={25} style={{ flexShrink: 0 }} />}
                        fullWidth
                        onClick={StartClick}
                        disabled={started}
                    >
                        {!opened && 'Empezar'}
                    </Button>

                    <Button
                        style={{backgroundColor: '#f5a00d', color: 'white'}}
                        justify="center"
                        leftSection={<IconRefresh size={25} style={{ flexShrink: 0 }} />}
                        fullWidth
                        disabled={restart}
                        onClick={RestartClick}
                    >
                        {!opened && 'Reiniciar'}
                    </Button>

                    <Button 
                        fullWidth
                        justify="center"
                        variant="white" 
                        color="cyan"
                        onClick={setMusic.toggle}
                        leftSection={
                            music ? (
                            <IconHeadphonesOff size={25} style={{ flexShrink: 0 }} />
                            ) : (
                            <IconHeadphones size={25} style={{ flexShrink: 0 }} />
                            )
                        }
                    >
                        {!opened && (music ? 'Activar' : 'Desactivar')}
                    </Button>
                    
                    <Slider
                        defaultValue={100}
                        color="blue"
                        size="xs"
                        disabled={music}
                        labelTransitionProps={{
                            transition: 'skew-down',
                            duration: 150,
                            timingFunction: 'linear',
                        }}
                        marks={
                            !opened
                                ? [
                                    { value: 0, label: '0' },
                                    { value: 50, label: '50' },
                                    { value: 100, label: '100' },
                                ] : []
                        }
                    />
                </Stack>

                <div className={classes.footer}>
                    <User isNavbarOpened={opened} />
                </div>

            </AppShell.Navbar>
        </AppShell>
    )
}      
