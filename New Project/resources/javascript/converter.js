document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('convert-btn');
	const outputEl = document.getElementById('output-value');

	btn.addEventListener('click', () => {
		const raw = document.getElementById('input-value').value;
		const inputValue = parseFloat(raw);
		const fromUnit = document.getElementById('from-unit').value;
		const toUnit = document.getElementById('to-unit').value;

		if (isNaN(inputValue)) {
			outputEl.textContent = 'Enter a valid number';
			return;
		}

		const result = convertUnits(fromUnit, toUnit, inputValue);

		if (typeof result === 'number') {
			const fromLabel = unitLabels[fromUnit] || fromUnit;
			const toLabel = unitLabels[toUnit] || toUnit;
			outputEl.textContent = `${formatResult(inputValue)} ${fromLabel} = ${formatResult(result)} ${toLabel}`;
		} else {
			outputEl.textContent = result;
		}
	});
});

const unitCategory = {
	inches: 'length', centimeters: 'length', miles: 'length', kilometers: 'length', feet: 'length', yards: 'length', meters: 'length',
	pounds: 'mass', kilograms: 'mass', ounces: 'mass', grams: 'mass',
	floz: 'volume', ml: 'volume', gallon: 'volume', liter: 'volume',
	fahrenheit: 'temperature', celsius: 'temperature'
};

const baseFactors = {
	length: { inches: 0.0254, centimeters: 0.01, miles: 1609.34, kilometers: 1000, feet: 0.3048, yards: 0.9144, meters: 1 },
	mass: { pounds: 0.45359237, kilograms: 1, ounces: 0.028349523125, grams: 0.001 },
	volume: { floz: 0.0295735, ml: 0.001, gallon: 3.78541, liter: 1 }
};

const unitLabels = {
	inches: 'in', feet: 'ft', yards: 'yd', centimeters: 'cm', meters: 'm', miles: 'mi', kilometers: 'km',
	pounds: 'lb', kilograms: 'kg', ounces: 'oz', grams: 'g',
	floz: 'fl oz', ml: 'ml', gallon: 'gal', liter: 'L',
	fahrenheit: '°F', celsius: '°C'
};

function convertUnits(from, to, value) {
	if (from === to) return value;

	const fromCat = unitCategory[from];
	const toCat = unitCategory[to];

	if (!fromCat || !toCat || fromCat !== toCat) return 'Invalid conversion';

	if (fromCat === 'temperature') {
		if (from === 'fahrenheit' && to === 'celsius') return (value - 32) * (5/9);
		if (from === 'celsius' && to === 'fahrenheit') return (value * (9/5)) + 32;
		return 'Invalid temperature conversion';
	}

	const factors = baseFactors[fromCat];
	const fromFactor = factors[from];
	const toFactor = factors[to];

	if (fromFactor == null || toFactor == null) return 'Invalid conversion';

	const valueInBase = value * fromFactor; // convert to base unit (meters/kg/liters)
	const converted = valueInBase / toFactor;
	return converted;
}

function formatResult(n) {
	if (!isFinite(n)) return 'Result not representable';
	// show up to 4 decimal places, but trim trailing zeros
	return parseFloat(n.toFixed(4)).toString();
}

