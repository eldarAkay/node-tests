const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('SERVER.js', function () {
  describe('GET user', function () {
    it('should return not found', function (done) {
      request(app)
        .get('/user')
        .expect(404, done);
    });
  });

  describe('GET users', function () {
    it('should return users', function (done) {
      request(app)
        .get('/users')
        .expect(function (res) {
          expect(res.body).toInclude({name: 'eldar'})
        })
        .end(done)
    });
  });
});