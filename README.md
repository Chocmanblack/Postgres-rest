# Nodejs - PostgreSQL RestApi

Este proyecto es una API REST construida con Node.js y Express que utiliza una base de datos PostgreSQL.

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Configura las variables de entorno en el archivo [.env](http://_vscodecontentref_/1):
    ```env
    DB_USER=postgres
    DB_PASSWORD=chocman
    DB_HOST=localhost
    DB_DATABASE=nodepg
    DB_PORT=5432
    PORT=4000
    ```

5. Inicia el servidor:
    ```sh
    npm run dev
    ```

## Uso

La API estará disponible en `http://localhost:4000`.

### Endpoints

- `GET /users`: Obtiene todos los usuarios.
- `GET /users/:id`: Obtiene un usuario por ID.
- `POST /users`: Crea un nuevo usuario.
- `DELETE /users/:id`: Elimina un usuario por ID.
- `PUT /users/:id`: Actualiza un usuario por ID.