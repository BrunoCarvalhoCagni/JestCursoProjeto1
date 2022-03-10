const {sum} = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () =>{
    expect(sum(2,2)).toBe(4);
});

it('should sum 2 and 2 even on of them is a string and the result must be 4', () =>{
    expect(sum('2','2')).toBe(4);
});

it('should throw error', () =>{
    expect(() =>{
        sum('', '2')
    }).toThrowError();
});



