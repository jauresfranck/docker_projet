
const request = require('supertest');
const app = require('./index');

describe('Test des routes de l\'API', () => {
  test('La route /ping doit retourner pong', async () => {
    const response = await request(app).get('/ping');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('pong');
  });
});