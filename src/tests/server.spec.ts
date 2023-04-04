import { server } from '../server';
import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Hello world from server', () => {
  it('should return Hello World response when called', () => {
    chai
        .request(server)
        .get('/')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Hello world');
         });
  })

  it('should return other message response when called', () => {
    chai
        .request(server)
        .get('/other-message')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'this is other message');
         });
  })
})
