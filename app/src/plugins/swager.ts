
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import type { ServerInstance } from '../index.js';

export async function registerSwagger(server: ServerInstance) {
  await server.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify TypeScript API',
        description: 'API documentation',
        version: '1.0.0'
      },
      servers: [
        {
          url: 'http://localhost:3000'
        }
      ]
    }
  });

  await server.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    }
  });
}
