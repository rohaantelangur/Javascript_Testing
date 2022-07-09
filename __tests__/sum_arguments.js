const sum = require('../sum');
describe('Sum function Testing', () => { 
    test('adds 1 + 2 to equal 3',()=>{
        expect(sum(1,2)).toBe(3);
    });

    test('adds 2 + 2 to equal 4',()=>{
        expect(sum(2,2)).toBe(4);
    });

    test('Pass 1 Parameter',()=>{
        expect(sum(1)).toBe("Only 1 Parameter Pass");
    });

    test('No Parameter Pass',()=>{
        expect(sum()).toBe("No Parameter Pass");
    });
})

