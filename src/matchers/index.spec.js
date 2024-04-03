// 常用的匹配器
// toBe 使用 Object.is 进行精准匹配。

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});


// toEqual 递归检查对象或者数组的每个字段
test('对象赋值', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({
    one: 1,
    two: 2,
  });
});

// not
test('adding positive numbers is not zero', () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(i + j).not.toBe(0);      
    }    
  }
});

// 真值
/**
 * toBeNull 只匹配 null
 * toBeUndefined 只匹配 undefined
 * toBeDefined 与 toBeUndefined 相反
 * toBeTruthy 匹配任何 if 语句为真
 * toBeFalsy 匹配任何 if 语句为假
 */
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// 数字
test('two plus two', () => {
  const value = 2 + 2.5;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  
  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4.5);
  expect(value).toEqual(4.5);
});

// 对于比较浮点数，使用 toBeCloseTo 而不是 toEqual
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2;

  expect(value).toBeCloseTo(0.3);
});

// 字符串
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// 数组和可迭代对象
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('shoppingList 数组中包含 milk', () => {
  expect(shoppingList).toContain('milk');

  expect(new Set(shoppingList)).toContain('milk');
});

// 抛出错误 toThrow
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow;
  expect(() => compileAndroidCode()).toThrow(Error);
  
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
})
