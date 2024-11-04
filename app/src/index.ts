import Fastify from 'fastify';
import { registerSwagger } from "./plugins/swager.js";
import { userRoutes } from "./routes/user.js";
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

const server = Fastify({
  logger: true,
  ajv: {
    customOptions: {
      removeAdditional: 'all',
      coerceTypes: true,
      useDefaults: true
    }
  }
}).withTypeProvider<TypeBoxTypeProvider>();

export type ServerInstance = typeof server

// Register plugins
await registerSwagger(server);

// Register routes
await server.register(userRoutes);

try {
  await server.listen({ port: 3000 });
  console.log('Server listening on http://localhost:3000');
  console.log('API documentation available on http://localhost:3000/docs');
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
