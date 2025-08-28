/**
 * Utility Functions - Implementation Required
 * 
 * Implement the following utility functions.
 * Each function has specific requirements and edge cases to handle.
 */

/**
 * Deep clone an object or array
 * Should handle nested objects, arrays, and primitive values
 * @param {any} obj - Object to clone
 * @returns {any} Deep cloned object
 */
function deepClone(obj) {
  // Handle primitives, null, and undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle Objects
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  
  return cloned;
}

/**
 * Debounce a function call
 * Should delay execution until after wait milliseconds have elapsed
 * @param {Function} func - Function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
  let timeoutId;
  
  return function debounced(...args) {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * Flatten a nested array
 * Should handle arrays nested to any depth
 * @param {Array} arr - Array to flatten
 * @returns {Array} Flattened array
 */
function flattenArray(arr) {
  // Handle edge cases
  if (!Array.isArray(arr)) {
    return [];
  }
  
  const result = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten nested arrays
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

/**
 * Group array of objects by a key
 * @param {Array} array - Array of objects
 * @param {string} key - Key to group by
 * @returns {Object} Grouped object
 */
function groupBy(array, key) {
  // Handle edge cases
  if (!Array.isArray(array) || !key) {
    return {};
  }
  
  const result = {};
  
  for (const item of array) {
    // Handle missing keys or non-object items
    if (typeof item !== 'object' || item === null) {
      continue;
    }
    
    const groupKey = item[key];
    
    // Skip items without the grouping key
    if (groupKey === undefined) {
      continue;
    }
    
    // Convert key to string for consistent grouping
    const keyStr = String(groupKey);
    
    if (!result[keyStr]) {
      result[keyStr] = [];
    }
    
    result[keyStr].push(item);
  }
  
  return result;
}

/**
 * Check if two objects are deeply equal
 * @param {any} obj1 - First object
 * @param {any} obj2 - Second object
 * @returns {boolean} True if deeply equal
 */
function deepEqual(obj1, obj2) {
  // Handle strict equality (primitives, same reference)
  if (obj1 === obj2) {
    return true;
  }
  
  // Handle null and undefined
  if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
    return obj1 === obj2;
  }
  
  // Handle different types
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  
  // Handle Date objects
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  
  // Handle Arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
    
    return true;
  }
  
  // Handle array vs object mismatch
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return false;
  }
  
  // Handle Objects
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
      return false;
    }
    
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    
    return true;
  }
  
  // For all other cases
  return false;
}

module.exports = {
  deepClone,
  debounce,
  flattenArray,
  groupBy,
  deepEqual
};
