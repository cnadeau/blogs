const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const demoPromise = require('./demo-promise');

describe('login', () => {
  it('should fail', () => {
    return expect(demoPromise.login(false)).to.have.been.rejected
      .then(res => {
        expect(res).to.be.eql('Unauthorized');
      });
  });

  it('should succeed', () => {
    return expect(demoPromise.login()).to.have.been.fulfilled
      .then(res => {
        expect(res).to.be.eql('Success');
      });
  });
});
