---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{JSRef}}

**`Object.entries()`** 靜態方法回傳給定之物件自己的可枚舉字串以字串為鍵的屬性之鍵值對陣列。

{{InteractiveExample("JavaScript Demo: Object.entries()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```

## 語法

```js-nolint
Object.entries(obj)
```

### 參數

- `obj`
  - : 一個物件。

### 回傳值

給定之物件自己的可枚舉字串以字串為鍵的屬性之鍵值對陣列。每個鍵值對都是一個包含兩個元素的陣列：第一個元素是屬性鍵（總是字串），第二個元素是屬性值。

## 描述

`Object.entries()` 傳回一個陣列，其元素是與直接在 `object` 上找到的可枚舉字串以字串為鍵的屬性之鍵值對相對應的陣列。這與使用 {{jsxref("Statements/for...in", "for...in")}} 迴圈進行迭代相同，只不過 `for...in` 迴圈也會列舉原型鏈中的屬性。`Object.entries()` 傳回的陣列的順序與 {{jsxref("Statements/for...in", "for...in")}} 迴圈給的順序相同。

如果你只需要屬性鍵，可改用 {{jsxref("Object.keys()")}}。如果你只需要屬性值，可改用 {{jsxref("Object.values()")}}。

## 範例

### 使用 Object.entries()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo 是不可枚舉的屬性
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

### 在原始值上使用 Object.entries()

非物件參數會被[強制轉換為物件](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)，而 [`undefined`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/undefined) 和 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null) 不能被強制轉換為物件，且會先拋出 {{jsxref("TypeError")}}。僅字串可擁有自己的可枚舉屬性，其它所有的[原始值](/zh-TW/docs/Glossary/Primitive) 都會變成空陣列。

```js
// 字串具有作為可枚舉自身屬性的索引
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// 除 undefined 和 null 之外的其它原始型別沒有自己的屬性
console.log(Object.entries(100)); // []
```

### 將 Object 轉換為 Map

{{jsxref("Map/Map", "Map()")}} 建構子接受可迭代的 `entries`。你可以藉由 `Object.entries` 輕鬆地將 {{jsxref("Object")}} 轉換為 {{jsxref("Map")}}：

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### 迭代 Object

你可以使用[陣列解構](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring)輕鬆地迭代物件。

```js
// 使用 for...of 迴圈
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// 使用陣列方法
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Object.entries` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [屬性的可枚舉性和所有權](/zh-TW/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
