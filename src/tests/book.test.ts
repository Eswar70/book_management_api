import request from 'supertest';
import app from '../app';

describe('GET /books', () => {
  it('should return an empty list initially', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });
});
