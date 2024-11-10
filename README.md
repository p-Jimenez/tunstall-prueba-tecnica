# Tunstall Prueba Técnica

Prueba técnica simulando la gestión de un restaurante en Next.js mediante una API GraphQL.

## Arrancar el proyecto

Para inicializar el proyecto, ejecutar el siguiente comando:

```bash
npm run dev

yarn dev

pnpm dev

bun dev
```

## Funcionamiento

La aplicación se accede desde el puerto 3000 y consta de una página principal con las dos siguientes secciones:

- Sección de mesas: muestra el listado de mesas, el estado en el que se encuentran y, mediante un tooltip, el pédido que ha realizado.

- Sección de menú: permite la creación, edición y eliminación categorías. En estas, se pueden añadir, editar y eliminar los productos de cada categoría.

Para el acceso a la API GraphQL, se utiliza [Apollo Client](https://www.apollographql.com/) junto con [GraphQL WS](https://the-guild.dev/graphql/ws) para las subscripciones. Para la generación de tipos, se utiliza [GraphQL Code Generator](https://the-guild.dev/graphql/codegen/).

Para los estilos, se utiliza [Tailwind CSS](https://tailwindcss.com/).

Para los formularios, se utiliza [React Hook Form](https://react-hook-form.com/).