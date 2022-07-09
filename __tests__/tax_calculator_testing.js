const tax_calculator = require('../tax_calculator');

describe('Tax Function Testing', () => { 
    test('No parameter pass',()=>{
        expect(tax_calculator()).toBe("Missing Parameter");
    });

    test('Pass only one parameter',()=>{
        expect(tax_calculator(500000)).toBe("Only one Parameter Pass");
    });

    test('245000 No Tax',()=>{
        expect(tax_calculator(245000,50000)).toBe("No Tax");
    });


    test('Saving > income',()=>{
        expect(tax_calculator(500000,600000)).toBe("Saving > income");
    });
    test('5L & 50K Tax 22,500',()=>{
        expect(tax_calculator(500000,50000)).toBe(22500);
    });

    test('7.5L & 80K Tax 67,700',()=>{
        expect(tax_calculator(750000,80000)).toBe(67700);
    });

    test('12L & 1L Tax 2,04,500',()=>{
        expect(tax_calculator(1200000,100000)).toBe(204500);
    });

    test('18L & 50K Tax 3,86,000',()=>{
        expect(tax_calculator(1800000, 50000)).toBe(386000);
    });
})
