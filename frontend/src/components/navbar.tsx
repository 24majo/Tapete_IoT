import { AppShell, Burger, Group, Code, Image, Button } from '@mantine/core';
import { useDisclosure,useMediaQuery } from '@mantine/hooks';
import { IconHome, IconArrowBack, IconHelp, IconRefresh, IconPlayerPlayFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { User } from './user';
import { useState } from 'react';
import classes from '../styles/navbar.module.css'
import logo from '../images/logoLetras.png'

const data = [
    { link: '/MenuSeleccion', label: 'Inicio', icon: IconHome },
    { link: '/MenuNumeros', label: 'Menú números', icon: IconArrowBack },
    { link: '', label: 'Ayuda', icon: IconHelp },
]

export function Navbar() {
    const isMobile = useMediaQuery('(max-width: 650px)')
    const [opened, { toggle }] = useDisclosure()
    const [active, setActive] = useState('Billing')
    const [restart, setRestart] = useState(true)

    const links = data.map((item) => (
        <Link
            to={item.link}
            key={item.label}
            className={`${classes.link} ${opened ? classes.linkCollapsed : ''}`}
            data-active={item.label === active || undefined}
            onClick={() => setActive(item.label)}
            style={{ textDecoration: 'none' }} // opcional, si no usas estilos
        >
          <item.icon className={classes.linkIcon} size={25} stroke={2} />
            {!opened && <span>{item.label}</span>}
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
            navbar={{ width: opened ? 80 : 230, breakpoint: 'sm'}}
        >
            <AppShell.Navbar p="md" hidden={!opened && isMobile}>
                <div className={classes.header}>
                    <Group justify="space-between">
                        <Burger opened={opened} onClick={toggle} size="sm" />
                        {!opened && <Image src={logo} width={30} height={30}/>}
                        {!opened && <Code fw={600}>v1.0.0</Code>}
                    </Group>
                </div>

                <div className={classes.linksInner}>
                    {links}
                </div>
                
                <div style={{height: '40vh'}}>
                    <Button
                        justify="center"
                        leftSection={<IconPlayerPlayFilled size={25} style={{ flexShrink: 0 }} />}
                        fullWidth
                        style={{ marginBottom: '3vh' }}
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
                </div>

                <div className={classes.footer}>
                    <User isNavbarOpened={opened} />
                </div>

            </AppShell.Navbar>
        </AppShell>
    )
}      
