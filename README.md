![Logo](/tapeteiot/src/images/logoLetras.png)

# 🧩 Tapete IoT - Sistema Web Interactivo con Integración IoT

**Tapete IoT** es una plataforma educativa interactiva que conecta un sistema físico (tablero IoT) con una interfaz web para apoyar el aprendizaje de números y letras en niños de primer grado de primaria. El objetivo es crear una experiencia didáctica divertida y tecnológica.

---

## 📚 Descripción General

Este proyecto está dividido en dos partes:

| Parte     | Descripción |
|-----------|-------------|
| [`frontend/`](./frontend) | Aplicación web desarrollada en **React + Vite** con interfaz moderna usando **Mantine UI** |
| [`backend/`](./backend)   | Servidor Express en **Node.js**, conectado a **MySQL** (con XAMPP), que gestiona rutas y datos del sistema |

---

## 🚀 ¿Cómo iniciar el proyecto?

### 1. Clona el repositorio
```bash
git clone https://github.com/24majo/Tapete_IoT.git
cd Tapete_IoT
```

### 2. Acceso a frontend
```bash
cd frontend
npm install
npm run dev
```
**Acceso a la plataforma:** http://localhost:5173

### 3. Acceso a backend
```bash
cd backend
npm install
cp .env.example .env   # Aquí se deben de configurar las variables de entorno con las credenciales
node src/index.js
```
**Servidor en:** http://localhost:3000

### 4. Estructura del repositorio
```bash
Tapete_IoT/
├── backend/     # Lógica del servidor y conexión a la base de datos
├── frontend/    # Interfaz web interactiva
├── README.md    # Este archivo
```
---
**📌 Notas finales**
El sistema está pensado para integrarse con un dispositivo físico IoT, el cual puede enviar información a través del backend (API) y mostrar respuestas visuales en el frontend.
Este proyecto es de enfoque educativo, con la intención de crear un puente entre el aprendizaje tradicional y la tecnología.
