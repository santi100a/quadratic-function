/**
 * A class that represents a quadratic function of the form:
 *
 * y = ax^2 + bx + c
 *
 * where a, b, c are real numbers and a != 0.
 */
declare class QuadraticFunction {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    constructor(a: number, b: number, c: number);
    /**
     * Evaluates the `QuadraticFunction` at `x`.
     *
     * @param x The point at which to evaluate the function.
     * @returns The value of the function at input x.
     */
    evaluate(x: number): number;
    /**
     * Calculates the real roots of the `QuadraticFunction`.
     *
     * @returns An array containing the real roots of the function.
     */
    roots(): [number?, number?];
    /**
     * Returns an object containing the coordinates of the highest or lowest point the function
     * will reach.
     *
     * @returns The highest/lowest point the function will reach, as an object { x, y }.
     */
    vertex(): {
        x: number;
        y: number;
    };
}
export = QuadraticFunction;
