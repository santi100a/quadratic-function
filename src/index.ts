/**
 * A class that represents a quadratic function of the form:
 *
 * y = ax^2 + bx + c
 *
 * where a, b, c are real numbers and a != 0.
 */

class QuadraticFunction {
	readonly a: number;
	readonly b: number;
	readonly c: number;
	constructor(a: number, b: number, c: number) {
		if (a == 0)
			throw new RangeError('a cannot be zero, invalid quadratic function');
		this.a = a;
		this.b = b;
		this.c = c;
	}
	/**
	 * Evaluates the `QuadraticFunction` at `x`.
	 *
	 * @param x The point at which to evaluate the function.
	 * @returns The value of the function at input x.
	 */
	evaluate(x: number) {
		return this.a * Math.pow(x, 2) + this.b * x + this.c;
	}
	/**
	 * Calculates the real roots of the `QuadraticFunction`.
	 *
	 * @returns An array containing the real roots of the function.
	 */
	roots(): [number?, number?] {
		const discriminant = this.b ** 2 - 4 * this.a * this.c;
		if (discriminant < 0) return [];
		if (discriminant == 0) return [this.vertex().x];
		return [
			(-this.b + Math.pow(discriminant, 0.5)) / (2 * this.a),
			(-this.b - Math.pow(discriminant, 0.5)) / (2 * this.a),
		];
	}
	/**
	 * Returns an object containing the coordinates of the highest or lowest point the function
	 * will reach.
	 *
	 * @returns The highest/lowest point the function will reach, as an object { x, y }.
	 */
	vertex(): { x: number; y: number } {
		const x = -this.b / (2 * this.a);
		const y = this.evaluate(x);
		return { x, y };
	}
}

export = QuadraticFunction;