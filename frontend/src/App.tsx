import { AppShell, Button, Image, Group, Paper, Title, Text, Card, Badge } from '@mantine/core'
import { IconSchool, IconUserStar } from '@tabler/icons-react'
import { useMediaQuery } from "@mantine/hooks"
import { useNavigate } from "react-router-dom"

import logo from './images/logoLetras.png'
import banner from './images/banner.jpg'
import trabadas from './images/Letras/Seleccion/ImgSilabasTrabadas.jpg'
import completar from './images/Letras/Seleccion/ImgCompletarLetras.jpg'
import usos from './images/Letras/Seleccion/ImgUsoDe.jpg'
import lectura from './images/Letras/Seleccion/ImgLectura.jpg'
import adivinar from './images/Números/Seleccion/ImgAdivinaNum.jpg'
import secuencia from './images/Números/Seleccion/ImgSecuencia.jpg'
import decenas from './images/Números/Seleccion/ImgCompletarDecenas.jpg'
import sum_res from './images/Números/Seleccion/ImgSumRest.jpg'
import './App.css';

function App() {
  const Mobile = useMediaQuery("(max-width: 650px)")
  const navigate = useNavigate()

  const juegos = [
    {
      imagen: trabadas,
      titulo: 'Sílabas Trabadas', 
      categoria: 'Letras',
      descripcion: '¡Descubre el mundo de las sílabas trabadas! Identifica palabras que contengan combinaciones como BL, BR, TR, TL y más.',
      color: 'pink'
    },
    {
      imagen: completar,
      titulo:'Completa la Palabra',
      categoria: 'Letras',
      descripcion: '¿Te gusta el ahorcado? Este juego es para ti. Adivina letras y vocales para completar las palabras y poner a prueba tu ingenio.',
      color: 'pink'
    },
    {
      imagen: usos,
      titulo: 'Uso de letras',
      categoria: 'Letras',
      descripcion: 'Aprende a identificar palabras que suenan parecido. Un divertido desafío para mejorar tu ortografía.',
      color: 'pink'
    },
    {
      imagen: lectura,
      titulo: 'Comprensión Lectora',
      categoria: 'Letras',
      descripcion: 'Historias para todos los niveles: fácil, medio y difícil. Lee con atención y responde preguntas para demostrar lo que aprendiste.',
      color: 'pink'
    },
    {
      imagen: adivinar,
      titulo: 'Adivina el Número',
      categoria:'Números',
      descripcion:'Cuenta los elementos en las imágenes y encuentra el número correcto. ¡Un reto visual que también es educativo!',
      color: 'indigo'
    },
    {
      imagen: secuencia,
      titulo: 'Secuencias',
      categoria:'Números',
      descripcion: '¿Puedes completar las series de números? Encuentra el número que faltante y pon a prueba tu habilidad terminando la secuencia.',
      color: 'indigo'
    },
    {
      imagen: decenas,
      titulo: 'Completar Decenas',
      categoria: 'Números',
      descripcion: 'Mira las imágenes y calcula cuántos elementos faltan para llegar a la siguiente decena. ¡Un ejercicio ideal para poner en práctica tus habilidades!',
      color: 'indigo'
    },
    {
      imagen: sum_res,
      titulo: 'Sumas y restas',
      categoria: 'Números',
      descripcion: '¿Se te dificulta las sumas y restas? Resuelve diferentes ejercicios con niveles de dificultad ajustados para aprender a tu ritmo.',
      color: 'indigo'
    }
  ]

  return (
    <>
      <AppShell 
        header={{ height: 70 }}
        footer={{height: 33 }}
        >
        <AppShell.Header style={{ backgroundColor: "#f5a00d", display: "flex" }}>
          <Group justify="space-between" style={{ width: "100%" }}>
            <Image src={logo} width={40} height={40} style={{ marginLeft: '2vh' }} />

            <Group>
              <Button leftSection={<IconSchool />} variant="transparent" style={{ color: 'white' }} onClick={() => navigate("/Inicio_Alumno")}>
                {!Mobile && "Inicio de sesión alumno"}
              </Button>

              <Button leftSection={<IconUserStar />} variant="transparent" style={{ color: 'white' }} onClick={() => navigate("/Inicio_Admin")}>
                {!Mobile && "Inicio de sesión administrativo"}
              </Button>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Main  style={{ position: 'relative' }}>
          <img
            src={banner}
            alt="Banner"
            style={{
              height: '75vh',
              width: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          <Paper  radius="xl"
            style={{
              position: 'absolute',
              top: '7%',
              left: '25%',
              transform: 'translateX(-50%)',
              width: '30%',
              height: '18%',
              padding:'5vh',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255)',
            }}>
            <Title size= '45px' style={{color: "#f5a00d", marginBottom: '1.5vh'}}>¡Bienvenido(a)!</Title>
            <Text size= '28px'>Inicia sesión y diviértete mientras aprendes. Descubre juegos interactivos para identificar números y letras de forma fácil y entretenida.</Text>
          </Paper>
          <Group
            justify="center"
            style={{
              position: 'absolute',
              top: '26%',
              left: '25%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            <Button onClick={() => navigate("/Inicio_Alumno")} style={{backgroundColor: "#f5a00d", width:'29vh' }}>Alumnos</Button>
            <Button onClick={() => navigate("/Inicio_Admin")} style={{backgroundColor: "#f5a00d", width:'29vh' }}>Administrativos</Button>
          </Group>
          
          <Title style={{marginLeft: '10vh', marginTop: '6vh'}}>Conoce los juegos con los que podrás interactuar.</Title>
          
          <Group
            style={{
              marginTop: '7vh',
              marginLeft: '10vh',
              marginRight: '5vh',
              marginBottom: '10vh'
            }}
          >

            {juegos.map((juegos, index) => (
              <Card key={index} shadow="sm" padding="lg" radius="md" withBorder className="card" style={{width:'45vh', height: '70vh'}}>
                <Card.Section>
                  <Image
                    src={juegos.imagen}
                    height={300}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{juegos.titulo}</Text>
                  <Badge color={juegos.color}>{juegos.categoria}</Badge>
                </Group>

                <Text size="sm" c="dimmed">{juegos.descripcion}</Text>
              </Card>
            ))}
          </Group>
        </AppShell.Main>

        <AppShell.Footer style={{ backgroundColor: "#f5a00d", display: "flex"}}>
          <Text style={{color: 'white', marginLeft: '2vh'}}>Instituto Tecnológico Superior de Guanjuato</Text>
        </AppShell.Footer>
      </AppShell>
    </>
  );
}

export default App;