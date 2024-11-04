import { Type } from '@sinclair/typebox';

export const UserSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  name: Type.String(),
  email: Type.String({ format: 'email' }),
  age: Type.Number({ minimum: 0 }),
});

export const CreateUserSchema = Type.Omit(UserSchema, ['id']);

export type User = typeof UserSchema.static;
export type CreateUser = typeof CreateUserSchema.static;
