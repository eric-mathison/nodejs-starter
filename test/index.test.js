/* eslint-disable no-unused-expressions */
const app = require('../src');

describe('Get /', () => {
    it('should respond with 200', (done) => {
        chai.request(app)
            .get('/')
            .set('api-key', 'oaidn203912039oindo123889757ksdik')
            .end((err, res) => {
                expect(res).to.be.status(200);
                done();
            });
    });
    it('should respond with 401 Unauthorized', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.be.status(401);
                done();
            });
    });
});
