// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// --- Phone Number tests ---
test('isPhoneNumber returns true for (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns true for 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns false for 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber returns false for abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// --- Email Tests ---
test('isEmail returns true for test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail returns true for user_name@domain.org', () => {
  expect(isEmail('user_name@domain.org')).toBe(true);
});

test('isEmail returns false for invalid-email', () => {
  expect(isEmail('invalid-email')).toBe(false);
});

test('isEmail returns false for hello@.com', () => {
  expect(isEmail('hello@.com')).toBe(false);
});

// --- Strong Password Tests ---
test('isStrongPassword returns true for abc123', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('isStrongPassword returns true for A_password', () => {
  expect(isStrongPassword('A_password')).toBe(true);
});

test('isStrongPassword returns false for 1badpassword', () => {
  expect(isStrongPassword('1badpassword')).toBe(false); // starts with a number
});

test('isStrongPassword returns false for a', () => {
  expect(isStrongPassword('a')).toBe(false); // too short
});

// --- Date Tests ---
test('isDate returns true for 05/07/2025', () => {
  expect(isDate('05/07/2025')).toBe(true);
});

test('isDate returns true for 4/24/2003', () => {
  expect(isDate('4/24/2003')).toBe(true);
});

test('isDate returns false for 12-25-2025', () => {
  expect(isDate('12-25-2025')).toBe(false);
});

test('isDate returns false for 2025/05/07', () => {
  expect(isDate('2025/05/07')).toBe(false);
});

// --- HEX Color Tests ---
test('isHexColor returns true for #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for CCCCFF', () => {
  expect(isHexColor('CCCCFF')).toBe(true);
});

test('isHexColor returns false for #12345', () => {
  expect(isHexColor('#12345')).toBe(false); 
});

test('isHexColor returns false for zzz', () => {
  expect(isHexColor('zzz')).toBe(false); 
});

