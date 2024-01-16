const QuadraticFunction = require('..');

describe('QuadraticFunction tests', () => {
    describe('error handling', () => {
        it('must throw an error if a = 0', () => {
            expect(() => {
                const fn = new QuadraticFunction(0, 2, 3);
            }).toThrow(/invalid quadratic function/);
        });
    });
    it('finds the roots of the function', () => {
        const fn = new QuadraticFunction(1, -1, -1);
        const [ root1, root2 ] = fn.roots();
        expect(root1).toBeCloseTo(1.61803398875);
        expect(root2).toBeCloseTo(-0.6180339887499);
    });
    it('finds the vertex of the function', () => {
        const fn = new QuadraticFunction(-1.5, 1, 4);
        const { x, y } = fn.vertex();
        expect(x).toBeCloseTo(0.33333333333333);
        expect(y).toBeCloseTo(4.16666666666666);
    });
    it('can evaluate the function', () => {
        const fn = new QuadraticFunction(5, 3, 1);
        expect(fn.evaluate(12))
            .toBe(757);
        expect(fn.evaluate(0))
            .toBe(1);
    });
}); 