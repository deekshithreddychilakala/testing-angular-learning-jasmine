import { compute } from './compute';

describe('Compute', () => {
    it('Should return 0 if number is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('Should increment if the number is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
});