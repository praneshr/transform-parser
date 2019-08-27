const ignoredKeys = ['scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ'];

const parse = (transformString: string): Record<string, any> => {
  const transforms = transformString.split(/\) |\)/);
  if (transforms.length === 1) {
    return {
      [transforms[0]]: true,
    };
  }

  const parsePixelValues = (value: string): string | number => {
    if (value.endsWith('px')) return parseFloat(value);
    if (!Number.isNaN(Number(value))) return Number(value);
    return value;
  };

  return transforms.reduce((acc, transform: string) => {
    if (!transform) return acc;
    const [name, transformValue] = transform.split('(');
    const valueArray = transformValue.split(',');
    const values = valueArray.map((val) => {
      return parsePixelValues(val.endsWith(')') ? val.replace(')', '') : val.trim());
    });
    const value = values.length === 1 ? values[0] : values;
    return {
      ...acc, ...{ [name]: value },
    };
  }, {});
};

const stringify = (transformObject: Record<string, number | string | boolean | (string | number)[]>): string => {
  const resolveUnits = (key: string, val: number | string): string => {
    if (typeof val === 'number' && !ignoredKeys.includes(key)) {
      return `${val}px`;
    }
    return val.toString();
  };

  return Object.keys(transformObject).reduce((acc, key) => {
    const value = transformObject[key];
    if (value === true) return key;
    if (value === false) return acc;
    if (Array.isArray(value)) {
      return `${acc} ${key}(${value.map((val) => resolveUnits(key, val)).join(', ')})`.trim();
    }
    return `${acc} ${key}(${resolveUnits(key, value)})`.trim();
  }, '');
};

export { parse, stringify };
