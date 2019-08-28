import typescript from 'rollup-plugin-typescript2';

export default {
  input: './index.ts',
  plugins: [typescript()],
  output: {
    name: 'transform',
    file: './index.js',
    format: 'umd',
  },
};
