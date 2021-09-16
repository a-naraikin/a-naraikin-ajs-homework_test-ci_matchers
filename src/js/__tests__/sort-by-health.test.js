import sortHealth from '../sort-by-health';

test('should return the heroes in descending order of health', () => {
  const result = sortHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(expected);
});

test('should return the heroes in descending order of health', () => {
  const result = sortHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).not.toBe(expected);
});

test('should return the heroes in descending order of health', () => {
  const result = sortHealth([
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 80 },
  ]);

  const expected = [
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 80 },
  ];

  expect(result).toEqual(expected);
});
