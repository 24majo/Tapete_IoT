import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@mantine/core/styles.css';
import './index.css'
import App from './App.tsx'
import Inicio_Alumno from './pages/sessions/session_alumn.tsx'
import Inicio_Admin from './pages/sessions/session_admin.tsx'
import PerfilAlumn from './pages/sessions/perfil_alumn.tsx';

import Menu from './pages/menus/menu_selection.tsx'
import Menu_Letters from './pages/menus/menu_letters.tsx'

import Menu_Numbers from './pages/menus/menu_numbers.tsx'
import N_juego_1 from './pages/numbers/select_number.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <MantineProvider theme={{}} defaultColorScheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/Inicio_Alumno' element = {<Inicio_Alumno />}/>
          <Route path='/Inicio_Admin' element = {<Inicio_Admin />}/>

          <Route path='/MenuSeleccion' element = {<Menu /> } />
          <Route path='/MyPerfil' element = {<PerfilAlumn /> }/>

          <Route path='/MenuNumeros' element = {<Menu_Numbers /> } />
          <Route path='/JuegoNumeros1' element = {<N_juego_1 />} />

          <Route path='/MenuLetras' element = {<Menu_Letters /> } />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
