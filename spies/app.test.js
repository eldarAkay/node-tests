const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    it('shoulf call the spy funtion', () => {
        const db = {saveUser: expect.createSpy()};
        app.__set__('db',db);

        const email = 'eldar@gmail.com';
        const password = '123456';
        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith(email, password);
    })
});