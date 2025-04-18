import fondo from '../../images/Fondos/FondoPerfilUsuario.jpg';
import person from '../../images/Recursos/SesionNiño.png'

import { useDisclosure } from '@mantine/hooks'
import { Flex, Tabs, Anchor, Group, Progress, Table, Text, Image, Button, Badge, Paper, RingProgress, Title } from '@mantine/core';
import { IconDialpad, IconLetterCase, IconLock, IconLogin } from '@tabler/icons-react';
import { ChangePassword } from '../../modals/password'

import classes from '../../styles/tables.module.css';

function PerfilAlumn() {
    const [opened, { open, close }] = useDisclosure(false)
    const data = [
        {
            name: 'Identificar números',
            progress: { positive: 2223, negative: 259 },
            nota: 9,
        
        },
        {
            name: 'Secuencias',
            progress: { positive: 2223, negative: 259 },
            nota: 8,
        },
        {
            name: 'Sumas',
            progress: { positive: 2223, negative: 259 },
            nota: 7,
        },
        {
            name: 'Restas',
            progress: { positive: 2223, negative: 259 },
            nota: 9,
        },
        {
            name: 'Completar decenas',
            progress: { positive: 2223, negative: 259 },
            nota: 10,
        },
    ]

    const renderTableRows = () => {
        return data.map((row) => {
        const totalReviews = row.progress.positive + row.progress.negative;
        const positiveReviews = (row.progress.positive / totalReviews) * 100;
        const negativeReviews = (row.progress.negative / totalReviews) * 100;

        return (
            <Table.Tr key={row.name}>
                <Table.Td>
                    <Anchor component="button" fz="sm">
                    {row.name}
                    </Anchor>
                </Table.Td>
                <Table.Td>
                    <Group justify="space-between">
                    <Text fz="xs" c="teal" fw={700}>
                        {positiveReviews.toFixed(0)}%
                    </Text>
                    <Text fz="xs" c="red" fw={700}>
                        {negativeReviews.toFixed(0)}%
                    </Text>
                    </Group>
                    <Progress.Root>
                    <Progress.Section
                        className={classes.progressSection}
                        value={positiveReviews}
                        color="teal"
                    />
                    <Progress.Section
                        className={classes.progressSection}
                        value={negativeReviews}
                        color="red"
                    />
                    </Progress.Root>
                </Table.Td>
                <Table.Td style={{ textAlign: 'center' }}>{row.nota}</Table.Td>
            </Table.Tr>
        )
        })
    }

    return (
        <Flex
        gap="sm"
        justify="flex-start"
        direction="column"
        style={{
            minHeight: '100vh',
            maxHeight: '100vh',
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
            <ChangePassword opened={opened} close={close} />
            
            <Group 
                justify="space-between" 
                style={{marginLeft: '20vh', marginTop: '5vh', marginRight: '23vh'}}
            >
                <Group>
                    <Image src={person} style={{width: '8vh'}}/>
                    <Badge variant="dot" color="blue" size="xl">Juan Pérez</Badge>
                </Group>

                <Group>
                    <Button leftSection={<IconLock size={14} />} variant="light" onClick={open}>Cambiar contraseña</Button>
                    <Button leftSection={<IconLogin size={14} />} variant="filled">Cerrar sesión</Button>
                </Group>
                
            </Group>

            <Flex justify="center" align="center">
                <Title>Promedios</Title>
            </Flex>

            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                
                <Paper shadow="xl" radius="xl" p="xl" style={{ width: '40vh', height: '18vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Badge variant="light" color="yellow" size="lg">General</Badge>
                    <RingProgress
                        size={90}
                        thickness={12}
                        roundCaps
                        sections={[
                            { value: 40, color: 'yellow' },
                        ]}
                    />
                </Paper>

                <Paper shadow="xl" radius="xl" p="xl" style={{ width: '40vh', height: '18vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Badge variant="light" color="pink" size="lg">Números</Badge>
                    <RingProgress
                        size={90}
                        thickness={12}
                        roundCaps
                        sections={[
                            { value: 40, color: 'pink' },
                        ]}
                    />
                </Paper>

                <Paper shadow="xl" radius="xl" p="xl" style={{ width: '40vh', height: '18vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Badge variant="light" color="blue" size="lg">Letras</Badge>
                    <RingProgress
                        size={90}
                        thickness={12}
                        roundCaps
                        sections={[
                            { value: 40, color: 'blue' },
                        ]}
                    />
                </Paper>
            </Flex>

            <Flex justify="center" align="center" style={{marginLeft: '20vh', marginTop: '3vh', marginRight: '20vh' }}>
                <Tabs defaultValue="number">
                    <Tabs.List>
                        <Tabs.Tab value="number" leftSection={<IconDialpad size={12} />}>
                            Juego de números
                        </Tabs.Tab>
                        <Tabs.Tab value="letter" leftSection={<IconLetterCase size={12} />}>
                            Juego de letras
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="number">
                        <Table.ScrollContainer minWidth={800}>
                        <Table verticalSpacing="xs">
                            <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Nombre</Table.Th>
                                <Table.Th>Progreso</Table.Th>
                                <Table.Th style={{ textAlign: 'center' }}>Calificación</Table.Th>
                            </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>{renderTableRows()}</Table.Tbody>
                        </Table>
                        </Table.ScrollContainer>
                    </Tabs.Panel>

                    <Tabs.Panel value="letter">
                        Messages tab content
                    </Tabs.Panel>
                </Tabs>
            </Flex>
        </Flex>
    )
}

export default PerfilAlumn
