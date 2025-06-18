---
title: setter
slug: Web/JavaScript/Reference/Functions/set
---

{{jsSidebar("Functions")}}

**`set`** 語法會在物件屬性被嘗試定義時，將其屬性綁定到要呼叫的函式內。

{{InteractiveExample("JavaScript Demo: Functions Setter")}}

```js interactive-example
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// Expected output: Array ["EN", "FA"]
```

## 語法

```plain
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```

### 參數

- `prop`
  - : 要綁定到給定函式的屬性名。
- `val`
  - : 變數別名，該變數擁有要被嘗試安插到 `prop` 的數值。
- expression
  - : 從 ECMAScript 2015 開始，可以使用計算屬性名（computed property name）表達式，綁定到給定函式。

## 描述

JavaScript 的 setter 能在嘗試修改指定屬性時，執行給定函式。Setter 最常用於和 getter 一同建立虛擬屬性（pseudo-property）。你不可能給同一個屬性賦予 setter 與實際值。

使用 `set` 語法時，請注意以下情況：

- 可以擁有一個以數字或字串為代表的標示符；
- 最少要有一個參數（請參見 [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) 的詳細資料）；
- 不能以有另一個 `set` 的 object literal、或相同屬性入口（data entry）的 data 形式出現（不能使用 `{ set x(v) { }, set x(v) { } }` and `{ x: ..., set x(v) { } }`）

[`delete`](/zh-TW/docs/Web/JavaScript/Reference/Operators/delete) 操作符可移除 setter。

## 示例

### 在物件初始器的新物件定義 setter

這裡會給物件 `language` 定義稱為 `current` 的虛擬屬性。在指派數值時 `log` 會和該值一同更新：

```js
var language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
console.log(language.log); // ['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
```

請注意 `current` is not defined and any attempts to access it will result in `undefined`.

### 使用 `delete` 操作符移除 setter

若想移除 setter 的話，可以直接使用 [`delete`](/zh-TW/docs/Web/JavaScript/Reference/Operators/delete)：

```js
delete o.current;
```

### 針對已存在屬性的 setter 使用 `defineProperty`

To append a setter to an existing object later at any time, use {{jsxref("Object.defineProperty()")}}.

```js
var o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a); // 5
```

### 使用計算屬性名

```js
var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"
obj.foo = "baz"; // 跑 setter
console.log(obj.baz); // "baz"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [getter](/zh-TW/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- JavaScript 教學的[定義 Getters 與 Setters](/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
