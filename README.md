# WiseMed Demo

Este es un proyecto de demostración simple llamado WiseMed Demo. Aunque el componente inicial era muy sencillo, se ha añadido un pequeño layout para una mejor presentación. El proyecto incluye TypeScript, pruebas con Jest y un contenedor de Docker para facilitar su ejecución en diferentes entornos.

## Características

*   **TypeScript:** Se utiliza TypeScript para el desarrollo, lo que proporciona tipado estático y mejora la mantenibilidad del código.
*   **Pruebas con Jest:** Se han implementado pruebas unitarias con Jest para asegurar la calidad y el correcto funcionamiento del componente.
*   **Contenedor Docker:** Se incluye un Dockerfile para facilitar la creación de un contenedor y la ejecución del proyecto en cualquier sistema con Docker instalado.
*   **Gestión de Versiones de Node:** Se incluye un archivo `.nvmrc` para especificar la versión de Node.js a utilizar.

## Tecnologías Utilizadas

*   **Node.js:** v18.17.1
*   **npm:** v9.6.7
*   **TypeScript**
*   **Jest**
*   **Docker**

## Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/angelzabala/wisemed-demo
    cd WiseMed-Demo
    ```

2.  **Instalar las dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**

    ```bash
    npm run start
    ```

    Esto iniciará el servidor de desarrollo de React en `http://localhost:3000` (o el puerto que se configure).

## Gestión de Versiones de Node.js (con nvm)

Si necesitas utilizar una versión específica de Node.js, puedes usar nvm (Node Version Manager). El proyecto incluye un archivo `.nvmrc` que especifica la versión 18.17.1.

1.  **Instalar nvm (si no lo tienes):** Consulta la documentación de nvm para la instalación en tu sistema operativo: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

2.  **Usar la versión especificada en .nvmrc:**

    ```bash
    nvm use
    ```

    Este comando leerá el archivo `.nvmrc` y cambiará a la versión de Node.js especificada (18.17.1 en este caso).

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm run test
```

## Docker

Para construir y ejecutar el proyecto con Docker, se pudiese utilizar Docker Compose. Este método simplifica la gestión de los contenedores y facilita el desarrollo.

**Levantar los contenedores:**

    ```bash
    docker-compose up -d --build
    ```

    *   `up`: Crea e inicia los contenedores definidos en `docker-compose.yml`.
    *   `-d`: Ejecuta los contenedores en segundo plano (detached mode).
    *   `--build`: Reconstruye la imagen si detecta cambios en el `Dockerfile` o en los archivos del proyecto. Es importante usarlo la primera vez o cuando se modifican archivos relevantes para la construcción de la imagen.

    Esto construirá la imagen (si es necesario) e iniciará el contenedor. Podrás acceder a la aplicación en `http://localhost:3000`.

**Ver los logs de los contenedores:**

    ```bash
    docker-compose logs
    ```

    Para ver los logs de un servicio específico:

    ```bash
    docker-compose logs <wisemed-demo> # Ejemplo: docker-compose logs web
    ```
**Detener los contenedores:**

    ```bash
    docker-compose down
    ```

    Este comando detendrá y eliminará los contenedores, las redes y los volúmenes creados por `docker-compose up`.

    Otras opciones útiles de `docker-compose`:

    *   `docker-compose stop`: Detiene los contenedores sin eliminarlos.
    *   `docker-compose start`: Inicia los contenedores detenidos.
    *   `docker-compose restart`: Reinicia los contenedores.
