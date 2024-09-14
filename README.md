<h1 align="center">
  <img alt="in.orbit logo" title="InOrbit Logo" src=".github/logo.svg" width="250px" />
</h1>

This is the backend of the InOrbit application, developed with Node.js and Fastify, using Drizzle for ORM and PostgreSQL as the database.

## About 🎯

The inorbit-api provides a RESTful API that serves as the backend for the InOrbit application's frontend.

## Technologies 💻

- [Node](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org)
- [Fastify](https://fastify.dev)
- [Docker](https://www.docker.com/)
- [Zod](https://zod.dev)
- [Drizzle](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation 🛠

Follow the steps below to set up and run the project locally.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/MateusFS99/inorbit-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd inorbit-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a .env file at the root of the project and configure the environment variables as specified in the .env.example file.
5. Compose up the Docker Compose to use a container with PostgreSQL:
   ```bash
   docker compose up
   ```
6. Run the Drizzle migrations:
   ```bash
   npx drizzle-kit migrate
   ```
7. Start the server:
   ```bash
   npm run dev
   ```

## License ®️

This project is under the MIT license. Consult the [LICENSE](LICENSE) for details.
