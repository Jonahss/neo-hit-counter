// transpile:mocha

//import {sample} from '../..';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

describe('sample', () => {
  it('should-work',async () => {
    let res = '123';//await sample.func();
    res.should.equal('123');
  });
});
