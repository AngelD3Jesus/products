import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

// Log para verificar si las variables de entorno se cargaron
console.log("Variables de entorno cargadas:", process.env);

// Obtener el puerto desde el archivo .env o usar un valor por defecto
const PORT = process.env.PORT_EXPRESS || 5003;

// Log para verificar el puerto cargado desde el archivo .env
console.log(`El servidor está configurado para usar el puerto: ${PORT}`);

try {
    console.log("Intentando iniciar el servidor...");
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
} catch (error) {
    console.error("Error al iniciar el servidor:", error);
}