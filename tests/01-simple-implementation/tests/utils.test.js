/**
 * Evaluation tests for utility functions
 * These tests are used to evaluate AI agent implementations
 */

const { deepClone, debounce, flattenArray, groupBy, deepEqual } = require('../initial/utils');

describe('Simple Implementation - Utility Functions', () => {
  
  describe('deepClone', () => {
    test('should clone primitive values', () => {
      expect(deepClone(42)).toBe(42);
      expect(deepClone('hello')).toBe('hello');
      expect(deepClone(true)).toBe(true);
      expect(deepClone(null)).toBe(null);
      expect(deepClone(undefined)).toBe(undefined);
    });

    test('should clone simple objects', () => {
      const obj = { a: 1, b: 2 };
      const cloned = deepClone(obj);
      
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
    });

    test('should clone nested objects', () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
      const cloned = deepClone(obj);
      
      expect(cloned).toEqual(obj);
      expect(cloned.b).not.toBe(obj.b);
      expect(cloned.b.d).not.toBe(obj.b.d);
    });

    test('should clone arrays', () => {
      const arr = [1, 2, [3, 4]];
      const cloned = deepClone(arr);
      
      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
      expect(cloned[2]).not.toBe(arr[2]);
    });
  });

  describe('debounce', () => {
    jest.useFakeTimers();

    test('should delay function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should cancel previous calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('flattenArray', () => {
    test('should flatten nested arrays', () => {
      expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should handle empty arrays', () => {
      expect(flattenArray([])).toEqual([]);
      expect(flattenArray([[], []])).toEqual([]);
    });

    test('should handle non-arrays', () => {
      expect(flattenArray(null)).toEqual([]);
      expect(flattenArray(undefined)).toEqual([]);
    });
  });

  describe('groupBy', () => {
    test('should group objects by key', () => {
      const items = [
        { type: 'fruit', name: 'apple' },
        { type: 'fruit', name: 'banana' },
        { type: 'veggie', name: 'carrot' }
      ];

      const result = groupBy(items, 'type');
      
      expect(result.fruit).toHaveLength(2);
      expect(result.veggie).toHaveLength(1);
    });

    test('should handle missing keys', () => {
      const items = [
        { type: 'fruit', name: 'apple' },
        { name: 'banana' }, // missing type
        { type: 'veggie', name: 'carrot' }
      ];

      const result = groupBy(items, 'type');
      
      expect(result.fruit).toHaveLength(1);
      expect(result.veggie).toHaveLength(1);
    });
  });

  describe('deepEqual', () => {
    test('should compare primitive values', () => {
      expect(deepEqual(1, 1)).toBe(true);
      expect(deepEqual('a', 'a')).toBe(true);
      expect(deepEqual(1, 2)).toBe(false);
      expect(deepEqual('a', 'b')).toBe(false);
    });

    test('should compare objects', () => {
      expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
      expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
    });

    test('should compare arrays', () => {
      expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    test('should handle mixed types', () => {
      expect(deepEqual(1, '1')).toBe(false);
      expect(deepEqual([], {})).toBe(false);
    });
  });
});