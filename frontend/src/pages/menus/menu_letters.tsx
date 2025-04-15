import fondo from '../../images/Fondos/FondoMenuLetras2.jpg'
import { Card, Text, Image, Title, Button, Group } from '@mantine/core'
import { useNavigate } from "react-router-dom"

import trabadas from '../../images/Letras/Seleccion/ImgSilabasTrabadas.jpg'
import completar from '../../images/Letras/Seleccion/ImgCompletarLetras.jpg'
import usos from '../../images/Letras/Seleccion/ImgUsoDe.jpg'
import lectura from '../../images/Letras/Seleccion/ImgLectura.jpg'

function Menu_Letters(){
    const navigate = useNavigate()
    const juegos = [
        {
            image: trabadas,
            titulo: 'Sílabras trabadas'
        },
        {
            image: completar,
            titulo: 'Completa la palabra'
        },
        {
            image: usos,
            titulo: 'Uso de...'
        },
        {
            image: lectura,
            titulo: 'Comprensión lectora'
        }
    ]

    return(
        <div
        style={{
            margin:0,
            padding: 0,
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100vh',
            backgroundPosition: 'top',
            height: '100vh',
            overflowX: 'hidden',
        }}
        >
            <div>
                <div style={{
                    marginLeft: '18vh',
                    marginTop: '15vh',
                    marginBottom: '5vh',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '90vh'
                }}>
                    <Title>Juegos sobre letras</Title>
                    <Button onClick={() => navigate("/MenuSeleccion")} color="rgba(95, 42, 133, 1)" size="md" radius="xl" style={{width: '30vh'}}>Inicio</Button>
                </div>

                <div style={{
                    marginLeft: '23vh',
                    marginBottom: '8vh',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '6vh'
                }}>
                    {juegos.map((juegos, index) => (
                        <Card key={index} shadow="sm" padding="lg" radius="md" withBorder className="card" style={{width:'35vh', height: '50vh'}}>
                        <Card.Section>
                            <Image
                            src={juegos.image}
                            height={220}
                            />
                        </Card.Section>
        
                        <Group style={{
                            marginTop: '2vh',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Text fw={500} size='2.7vh'>{juegos.titulo}</Text>
                            <Button style={{ backgroundColor: '#f5a00d' }}>Jugar</Button>
                        </Group>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu_Letters