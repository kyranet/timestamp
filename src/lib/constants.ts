export const second = 1000;
export const minute = second * 60;
export const hour = minute * 60;
export const day = hour * 24;

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const tokens = new Map<string, number>([
	['Y', 4],
	['Q', 1],
	['M', 4],
	['D', 4],
	['d', 4],
	['X', 1],
	['x', 1],
	['H', 2],
	['h', 2],
	['a', 1],
	['A', 1],
	['m', 2],
	['s', 2],
	['S', 3],
	['Z', 2],
	['l', 4],
	['L', 4],
	['T', 1],
	['t', 1]
]);
