import { Card, Text, Image, Title, Button, Badge, Avatar } from '@mantine/core'
import { useNavigate } from "react-router-dom"

import '../../styles/selection.css'

import number from '../../images/Menu/ImagenesNumeros.jpg'
import letter from '../../images/Menu/ImagenesLetras.jpg'
import fondo from '../../images/Fondos/FondoMenuInicio2.jpg'
import boy from '../../images/Recursos/SesionNiño.png'

function Menu(){
    const navigate = useNavigate()

    return(
        <div
        style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
        }}
        >

            <div style={{ marginLeft: '25vh', marginTop: '10vh', width: '39%'}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title order={1}>Inicia a jugar</Title>
                    <Title order={2}>Hola, (persona). Empecemos a jugar</Title>
                </div>
                

                <Card shadow="lg" style={{ display: 'flex', flexDirection: 'row', width: '80vh', marginTop: '5vh'}}>
                <div>
                    <Image src={number} style={{width: '25vh'}}/>
                </div>
                <div style={{ flex: 1, marginLeft: '2vh' }}>
                    <Badge variant="default" color="indigo" size="xl" style={{ marginBottom: '1vh' }}> Números </Badge>
                    <Text size="lg">Juegos de identificación de números y secuencias.</Text>
                    <Button onClick={() => navigate("/MenuNumeros")} style={{marginTop: '2vh', marginLeft: '12vh', backgroundColor: '#f5a00d', width: '20vh' }}>Entrar</Button>
                </div>
                </Card>

                <Card shadow="sm" style={{ display: 'flex', flexDirection: 'row', width: '80vh', marginTop: '5vh'}}>
                <div>
                    <Image src={letter} style={{width: '25vh'}}/>
                </div>
                <div style={{ flex: 1, marginLeft: '2vh' }}>
                    <Badge variant="default" color="indigo" size="xl" style={{ marginBottom: '1vh' }}> Letras </Badge>
                    <Text size="lg">Juegos de identificación de letras y vocabulario.</Text>
                    <Button onClick={() => navigate("/MenuLetras")} style={{marginTop: '2vh', marginLeft: '12vh', backgroundColor: '#f5a00d', width: '20vh' }}>Entrar</Button>
                </div>
                </Card>
            </div>
            
            <div className="personaje" style={{marginLeft: '55%', marginTop: '-35%' }} />

            <div  style={{
                marginLeft: '75%',
                marginTop: '-42%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center', // opcional: centra los elementos horizontalmente
            }} >
                <Avatar size="lg" src={boy}/> 
                <Button variant="transparent" color="rgba(0, 0, 0, 1)" size="lg">Mi perfil</Button>
                <Button variant="transparent" color="rgba(0, 0, 0, 1)" size="lg">Cerrar sesión</Button>
            </div>
        </div>
    )
}

export default Menu