var suffix = require('date-suffix');
var assert = require('assert');

describe('suffix', function(){

  it('should get the correct suffixes', function(){
    assert( suffix(new Date(2014, 1, 1)) === '1st' );
    assert( suffix(new Date(2014, 1, 2)) === '2nd' );
    assert( suffix(new Date(2014, 1, 3)) === '3rd' );
    assert( suffix(new Date(2014, 1, 4)) === '4th' );
  });

});