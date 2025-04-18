    import fondo from '../../images/Fondos/FondoJuegos.jpg'
    import { Navbar } from "../../components/navbar"
    import { AppShell, Image, Progress, Flex, Group, Title, SimpleGrid, ThemeIcon, Text } from '@mantine/core'

    import heart3 from '../../images/Recursos/corazon3.png'
    import unidad from '../../images/Números/Juegos/Juego5/PezUnidad.png'
    import decena from '../../images/Números/Juegos/Juego5/PezDecena.png'
    import imagen from '../../images/Números/Juegos/Juego5/1.jpg'

    function N_juego_1() {
        return (
            <AppShell>
                <AppShell.Navbar p="md">
                    <Navbar/>
                </AppShell.Navbar>

                <AppShell.Main>
                    <Flex
                        gap="sm"
                        justify="flex-start"
                        direction="column"
                        wrap="wrap"
                        style={{
                            minHeight: '100vh',
                            maxHeight: '100vh',
                            backgroundImage: `url(${fondo})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            display: 'flex',
                        }}
                    >
                        <Group gap="xl" 
                            style={{
                                marginLeft: '17vh', 
                                marginTop: '7vh', 
                                alignItems: 'center', 
                                display: 'flex', 
                                maxWidth: '82%', 
                                maxHeight: '8vh'}}>
                            <Progress radius="xl" size="xl" value={30} striped animated style={{flexGrow: 1}} />
                            <Image src={heart3} style={{width: '30vh', height: '7vh'}} />
                        </Group>
                        
                        <Title order={1} style={{marginLeft: '17vh', marginTop: '3vh'}}>¿Cuántos peces hay en la pecera?</Title>
                        
                        <SimpleGrid 
                            cols={2} 
                            style={{
                                marginTop: '3vh',
                                marginLeft: '17vh',
                                maxWidth: '82%'
                            }}
                        >
                            <Flex 
                                gap="md"
                                justify="flex-start"
                                align="center"
                                direction="column"
                            >
                                <Group justify="center" align="center">
                                    <Image src={unidad} style={{width:'17vh', height:'8vh'}}/><Title order={4}>x1</Title>
                                    <Image src={decena} style={{width:'17vh', height:'8vh'}}/><Title order={4}>x10</Title>
                                </Group>
                                <Image src={imagen} style={{width:'65vh'}}></Image>
                            </Flex>

                            <Flex 
                                gap="md"
                                justify="center"
                                align="center"
                                direction="column"
                            >
                                <ThemeIcon radius={120} size={120} color="red">
                                    <Text style={{ fontSize: 45 }}>5</Text>
                                </ThemeIcon>

                                <Flex 
                                    gap="md"
                                    justify="flex-start"
                                    align="center"
                                    direction="row"
                                >
                                    <ThemeIcon radius={120} size={120} color="yellow">
                                        <Text style={{ fontSize: 45 }}>6</Text>
                                    </ThemeIcon>
                                    <ThemeIcon radius={120} size={120} color="green">
                                        <Text style={{ fontSize: 45 }}>3</Text>
                                    </ThemeIcon>
                                    <ThemeIcon radius={120} size={120} color="blue">
                                        <Text style={{ fontSize: 45 }}>1</Text>
                                    </ThemeIcon>
                                </Flex>
                                
                            </Flex>
                        </SimpleGrid>
                    </Flex>
                </AppShell.Main>
            </AppShell>
        )
    }

    export default N_juego_1