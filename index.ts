
const parse = (transformString: string) => {
  const transforms = transformString.split(/\) |\)/);
  if (transforms.length === 1) {
    return {
      [transforms[0]]: true,
    };
  }

  const parsePixelValues = (value: string) => {
    if (value.endsWith('px')) {
      return parseFloat(value);
    }
    return value.trim();
  };

  return transforms.reduce((acc, transform: string) => {
    if (!transform) return acc;
    const [name, transformValue] = transform.split('(');
    const valueArray = transformValue.split(',');
    const values = valueArray.map((val) => {
      return parsePixelValues(val.endsWith(')') ? val.replace(')', '') : val);
    });
    const value = values.length === 1 ? values[0] : values
    return {
      ...acc, ...{ [name]: value }
    };
  }, {});
}

export { parse };
