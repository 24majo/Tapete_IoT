import fondo from '../../images/Fondos/fondoInicioSesion.jpg'
import { useState } from 'react'
import { Button, PasswordInput, TextInput, Title } from '@mantine/core'
import { IconLock } from '@tabler/icons-react'
import { useNavigate } from "react-router-dom"

function Inicio_Alumno() {
  const [modoRecuperacion, setModoRecuperacion] = useState(false)
  const icon = <IconLock size={18} stroke={1.5} />
  const navigate = useNavigate()

  return (
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
      <div
        style={{
          marginTop: '15vh',
          marginLeft: '35vh',
          marginRight: '80vh'
        }}
      >
        <Title order={1} ta="center" mt="md" mb={50}>
          ¡Bienvenido(a)!
        </Title>

        <TextInput label="CURP" placeholder="CURP del alumno" size="md" withAsterisk />

        {!modoRecuperacion ? (
          <>
            <PasswordInput
              withAsterisk
              size="md"
              leftSection={icon}
              label="Contraseña"
              placeholder="8 caracteres mínimo"
              style={{ marginTop: '3vh' }}
            />
            <Button onClick={() => navigate("/MenuSeleccion")} fullWidth mt="xl" size="md" variant="filled" color="yellow">
              Ingresar
            </Button>
          </>
        ) : (
          <>
            <TextInput
              label="Pregunta"
              placeholder="Pendiente"
              size="md"
              style={{ marginTop: '3vh' }}
              withAsterisk
            />
            <TextInput
              label="Respuesta"
              placeholder="Responde la pregunta"
              size="md"
              style={{ marginTop: '2vh' }}
              withAsterisk
            />
            <Button fullWidth mt="xl" size="md" variant="filled" color="yellow">
              Verificar
            </Button>
          </>
        )}

        <div
          style={{
            marginTop: '5vh',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
          <Button
            variant="light"
            color="yellow"
            size="md"
            onClick={() => setModoRecuperacion(true)}
          >
            ¿Olvidaste tu contraseña?
          </Button>
          <Button
            variant="light"
            color="yellow"
            size="md"
            onClick={() => setModoRecuperacion(false)}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Inicio_Alumno;
