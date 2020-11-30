import request from 'supertest';
import app from '../src/loaders';

describe('Health check API', () => {
  test('It should response status 200', () => {
    return request(app).get('/status').expect(200);
  });
});
