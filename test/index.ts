import * as expect from 'expect';
import { parse, stringify } from '../index';

describe('Unit tests for JS transform parser', () => {
  it('Should parse transform: none', () => {
    const transform = 'none';
    expect(parse(transform)).toEqual({ none: true });
  });

  it('Should parse transform: inherit', () => {
    const transform = 'inherit';
    expect(parse(transform)).toEqual({ inherit: true });
  });

  it('Should parse transform: initial', () => {
    const transform = 'initial';
    expect(parse(transform)).toEqual({ initial: true });
  });

  it('Should parse transform: unset', () => {
    const transform = 'unset';
    expect(parse(transform)).toEqual({ unset: true });
  });

  it('Should parse function value with one pixel param', () => {
    const transform = 'perspective(17px)';
    expect(parse(transform)).toEqual({ perspective: 17 });
  });

  it('Should parse function value with one non pixel param', () => {
    const transform = 'translateX(20%)';
    expect(parse(transform)).toEqual({ translateX: '20%' });
  });

  it('Should parse function value with multiple pixel and non pixel params', () => {
    const transform = 'scale3d(2.5, 1.2, 0.3) translate3d(12px, 50%, 3em)';
    expect(parse(transform)).toEqual({ scale3d: [2.5, 1.2, 0.3], translate3d: [12, '50%', '3em'] });
  });
});

describe('Unit tests for JS transform stringify', () => {
  it('Should stringify transform: none', () => {
    const transform = 'none';
    expect(stringify({ none: true })).toEqual(transform);
  });

  it('Should stringify transform: inherit', () => {
    const transform = 'inherit';
    expect(stringify({ inherit: true })).toEqual(transform);
  });

  it('Should stringify transform: initial', () => {
    const transform = 'initial';
    expect(stringify({ initial: true })).toEqual(transform);
  });

  it('Should stringify function value with one pixel param', () => {
    const transform = 'perspective(17px)';
    expect(stringify({ perspective: 17 })).toEqual(transform);
  });

  it('Should stringify function value with one non pixel param', () => {
    const transform = 'translateX(20%)';
    expect(stringify({ translateX: '20%' })).toEqual(transform);
  });

  it('Should stringify function value with multiple pixel and non pixel params', () => {
    const transform = 'scale3d(2.5, 1.2, 0.3) translate3d(12px, 50%, 3em)';
    expect(stringify({ scale3d: [2.5, 1.2, 0.3], translate3d: [12, '50%', '3em'] }))
      .toEqual(transform);
  });
});
