const convertingTime = require('../convertingTime');

describe('ConvertingTime function Testing', () => { 
    test('5200 ms to 00:00:05',()=>{
        expect(convertingTime(5200)).toBe("00:00:05");
    });

    test('60000 ms to 00:01:00',()=>{
        expect(convertingTime(60000)).toBe("00:01:00");
    });

    test('18,000 ms to 00:03:00',()=>{
        expect(convertingTime(180000)).toBe("00:03:00");
    });

    test('20,000 ms to 00:03:20',()=>{
        expect(convertingTime(200000)).toBe("00:03:20");
    });
})