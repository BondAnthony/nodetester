var request = require('supertest');
describe('Testing index response', function () {
    beforeEach(function () {
        server = require('../server');
    });
    afterEach(function () {
        server.close();
    });

    it('Checking index page', function testPath(done) {
        var checkRsp = function (res) {
            if (!res.text) throw new Error('unexpected results, we expected some text response to be returned');
            if (res.headers['content-type'] != 'text/html') throw new Error('Expected an html document');
        };
        request(server)
            .get('/')
            .expect(200)
            .expect(checkRsp)
            .end(done);
    });

    it('Checking for server1 to respond with json', function (done) {

        request(server)
            .get('/api/server1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
            .end(done);
    });

        it('Checking for server2 to respond with json', function (done) {

        request(server)
            .get('/api/server2')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
            .end(done);
    });
});