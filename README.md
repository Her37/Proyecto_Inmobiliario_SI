<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Proyecto_Inmobiliario_SI - README</title>
</head>
<body>
  <h1>Proyecto_Inmobiliario_SI</h1>

  <h2>Descripción</h2>
  <p>
    Este proyecto fue desarrollado por <strong>Hernán Carrizo</strong> con el objetivo de crear una 
    plataforma web para la gestión eficiente de propiedades inmobiliarias sin intermediarios.  
    La aplicación permite a los usuarios gestionar ventas, alquileres, usuarios y más, utilizando 
    tecnologías web modernas.
  </p>

  <h2>Índice</h2>
  <ul>
    <li><a href="#tecnologias">Tecnologías utilizadas</a></li>
    <li><a href="#estructura">Estructura del repositorio</a></li>
    <li><a href="#instalacion">Instalación y configuración</a></li>
    <li><a href="#ejecucion">Cómo ejecutar</a></li>
    <li><a href="#colaboracion">Colaboración</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>

  <h2 id="tecnologias">Tecnologías utilizadas</h2>
  <ul>
    <li><strong>Frontend:</strong> JavaScript, HTML, CSS, Handlebars</li>
    <li><strong>Backend:</strong> Node.js</li>
    <li><strong>Base de datos:</strong> MySQL</li>
    <li><strong>Otras herramientas:</strong> Bootstrap, APIs</li>
  </ul>

  <h2 id="estructura">Estructura del repositorio</h2>
  <pre>
Proyecto_Inmobiliario_SI/
│
├── backend/                # Código del servidor (Backend)
│
├── frontend/               # Código del cliente (Frontend)
│
└── README.md               # Este archivo
  </pre>

  <h2 id="instalacion">Instalación y configuración</h2>
  <ol>
    <li>
      <strong>Clonar el repositorio:</strong>
      <pre>
git clone https://github.com/Her37/Proyecto_Inmobiliario_SI.git
cd Proyecto_Inmobiliario_SI
      </pre>
    </li>
    <li>
      <strong>Instalar dependencias:</strong>
      <p>Para el frontend:</p>
      <pre>
cd frontend
npm install
      </pre>
      <p>Para el backend:</p>
      <pre>
cd backend
npm install
      </pre>
    </li>
    <li>
      <strong>Configurar variables de entorno:</strong>
      <p>
        Crear un archivo <code>.env</code> en la raíz del proyecto y definir las variables necesarias, 
        como la URL de la base de datos, claves de API, etc.
      </p>
    </li>
  </ol>

  <h2 id="ejecucion">Cómo ejecutar</h2>
  <ol>
    <li>
      <strong>Iniciar el backend:</strong>
      <pre>
cd backend
npm start
      </pre>
    </li>
    <li>
      <strong>Iniciar el frontend:</strong>
      <pre>
cd frontend
npm start
      </pre>
    </li>
    <li>
      <strong>Acceder a la aplicación:</strong>
      <p>Una vez que ambos servidores estén corriendo, acceder en el navegador:</p>
      <pre>
http://localhost:3000
      </pre>
    </li>
  </ol>

  <h2 id="colaboracion">Colaboración</h2>
  <ol>
    <li>Haz un <strong>Fork</strong> del repositorio.</li>
    <li>Crea una nueva rama: <code>git checkout -b feature/nueva-funcionalidad</code></li>
    <li>Realiza tus cambios y haz commit: <code>git commit -am "Añadir nueva funcionalidad"</code></li>
    <li>Haz push a la rama: <code>git push origin feature/nueva-funcionalidad</code></li>
    <li>Abre un Pull Request en GitHub.</li>
  </ol>

  <h2 id="contacto">Contacto</h2>
  <ul>
    <li><strong>Desarrollador:</strong> Hernán Carrizo</li>
    <li><strong>GitHub:</strong> <a href="https://github.com/Her37" target="_blank">https://github.com/Her37</a></li>
    <li><strong>Correo electrónico:</strong> <a href="mailto:carrizohf35@gmail.com">carrizohf35@gmail.com</a></li>
  </ul>
</body>
</html>
