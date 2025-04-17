import { IconChevronUp, IconUser, IconLogin } from '@tabler/icons-react'
import { Avatar, Group, Text, UnstyledButton, Menu } from '@mantine/core'
import person from '../images/Recursos/SesionNiño.png'
import classes from '../styles/User.module.css'

interface UserProps {
  isNavbarOpened: boolean;
}

export function User({ isNavbarOpened }: UserProps) {
    return (
        <>
            <Menu shadow="md" width={180} withArrow>
                <Menu.Target>
                    <UnstyledButton className={classes.user}>
                        <Group>
                            <Avatar
                                src={person}
                                radius="xl"
                            />

                            {isNavbarOpened && (
                                <div style={{ flex: 1 }} />
                            )}

                            {!isNavbarOpened && (
                                <div style={{ flex: 1 }}>
                                    <Text size="sm" fw={500}>
                                        Juan Pérez
                                    </Text>

                                    <Text c="dimmed" size="xs">
                                        Grupo: 1A
                                    </Text>
                                </div>
                            )}

                            {!isNavbarOpened && (
                                <IconChevronUp size={14} stroke={1.5} />
                            )}
                        </Group>
                    </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Opciones</Menu.Label>
                    <Menu.Item leftSection={<IconUser size={18} />}>
                        Ver perfil
                    </Menu.Item>
                    <Menu.Item
                        color="red"
                        leftSection={<IconLogin size={18} />}
                    >
                        Cerrar sesión
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    )
}
