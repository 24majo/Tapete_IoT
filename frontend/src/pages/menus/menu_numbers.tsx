import fondo from '../../images/Fondos/FondoMenuNumeros2.jpg'
import { Card, Text, Image, Title, Button, Group } from '@mantine/core'
import { useNavigate } from "react-router-dom"

import adivinar from '../../images/Números/Seleccion/ImgAdivinaNum.jpg'
import secuencia from '../../images/Números/Seleccion/ImgSecuencia.jpg'
import decena from '../../images/Números/Seleccion/ImgCompletarDecenas.jpg'
import suma from '../../images/Números/Seleccion/ImgSumas.jpg'
import resta from '../../images/Números/Seleccion/ImgRestas.jpg'

function Menu_Numbers(){
    const navigate = useNavigate()
    const juegos = [
        {
            image: adivinar,
            titulo: 'Adivina el número',
            ruta: '/JuegoNumeros1'
        },
        {
            image: secuencia,
            titulo: 'Secuencias',
            ruta: '/JuegoNumeros2'
        },
        {
            image: decena,
            titulo: 'Completar decenas',
            ruta: '/JuegoNumeros3'
        },
        {
            image: suma,
            titulo: 'Sumas',
            ruta: '/JuegoNumeros4'
        },
        {
            image: resta,
            titulo: 'Restas',
            ruta: '/JuegoNumeros5'
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
                    <Title>Juegos sobre números</Title>
                    <Button onClick={() => navigate("/MenuSeleccion")} color="rgba(95, 42, 133, 1)" size="xl" radius="xl" style={{width: '30vh'}}>Inicio</Button>
                </div>

                <div style={{
                    marginLeft: '18vh',
                    marginBottom: '5vh',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '6vh'
                }}>
                    {juegos.map((juegos, index) => (
                        <Card key={index} shadow="sm" padding="lg" radius="md" withBorder className="card" style={{width:'30vh', height: '47vh'}}>
                        <Card.Section>
                            <Image
                            src={juegos.image}
                            height={200}
                            />
                        </Card.Section>
        
                        <Group style={{
                            marginTop: '2vh',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Text fw={500} size='2.5vh'>{juegos.titulo}</Text>
                            <Button onClick={() => navigate(juegos.ruta)} style={{ backgroundColor: '#f5a00d' }}>Jugar</Button>
                        </Group>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu_Numbers