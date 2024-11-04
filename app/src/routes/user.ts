import { FastifyInstance } from 'fastify';
import { Type } from '@sinclair/typebox';
import { CreateUserSchema, User, UserSchema } from '../schemas/user.js';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import type { ServerInstance } from '../index.js';

export async function userRoutes(server: ServerInstance) {
  //  const typedServer = server.withTypeProvider<TypeBoxTypeProvider>();

  server.get('/users', {

    schema: {
      description: 'Get all users',
      tags: ['users'],
      response: {
        200: Type.Array(UserSchema)
      }
    }}, async () => {
      // Sample response
      return [
        {
          id: '123e4567-e89b-12d3-a456-426614174000',
          name: 'John Doe',
          email: 'john@example.com',
          age: 30,
        }
      ];
    
  });

  server.post('/users', {
    schema: {
      description: 'Create a new user',
      tags: ['users'],
      body: CreateUserSchema,
      response: {
        201: UserSchema
      }
    },
    handler: async (request) => {
      const user = request.body; // typescript resolves body as unknown
      // Handle user creation
      return {
        ...user,

        id: '123e4567-e89b-12d3-a456-426614174000',
      };
    }
  });
}
