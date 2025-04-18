import { Modal, PasswordInput, TextInput, Text, Button, Flex } from '@mantine/core'
import { IconLock } from '@tabler/icons-react'

interface ModalPass {
    opened: boolean;
    close: () => void;
  }
  

export function ChangePassword({ opened, close }: ModalPass) {
  const icon = <IconLock size={18} stroke={1.5} />

  return (
    <>
    <Modal 
        opened={opened} 
        onClose={close} 
        title="Cambiar contraseña" 
        centered
        overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
        }}
    >
        <Flex
            mih={50}
            gap="xs"
            direction="column"
            wrap="nowrap"
            style={{marginLeft: '1vh', marginRight: '1vh'}}
        >
            <PasswordInput withAsterisk leftSection={icon} label="Contraseña actual" placeholder="Escribe tu contraseña actual" />
            <PasswordInput withAsterisk leftSection={icon} label="Nueva contraseña" placeholder="Escribe tu la nueva contraseña" />
            <PasswordInput withAsterisk leftSection={icon} label="Confirmar contraseña" placeholder="Confirma la contraseña" />
            <Text>Responda a la pregunta de seguridad para continuar</Text>
            <TextInput withAsterisk label="Pregunta" placeholder="Pregunta de seguridad" readOnly/>
            <TextInput withAsterisk label="Respuesta" placeholder="Respuesta a la pregunta" readOnly/>
        </Flex>

        <Flex
            mih={70}
            gap="md"
            justify="flex-end"
            align="flex-end"
            direction="row"
            wrap="wrap"
            style={{marginLeft: '1vh', marginRight: '1vh'}}
        >
            <Button>Cambiar contraseña</Button>
        </Flex>

    </Modal>
    </>
  )
}