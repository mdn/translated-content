---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
---

{{JSRef}}

静的な **`Reflect.set()`** メソッドは、オブジェクトにプロパティを設定するかのように動作します。

{{InteractiveExample("JavaScript デモ: Reflect.set()")}}

```js interactive-example
const object1 = {};
Reflect.set(object1, "property1", 42);

console.log(object1.property1);
// Expected output: 42

const array1 = ["duck", "duck", "duck"];
Reflect.set(array1, 2, "goose");

console.log(array1[2]);
// Expected output: "goose"
```

## 構文

```
Reflect.set(target, propertyKey, value[, receiver])
```

### 引数

- `target`
  - : プロパティを設定する対象のオブジェクト。
- `propertyKey`
  - : 設定するプロパティ名。
- `value`
  - : 設定する値。
- `receiver` {{optional_inline}}
  - : セッターによって `target` が呼び出されたときの `this` 値を提供する。

### 返値

プロパティが成功裏に設定できたかどうかを示す {{jsxref("Boolean")}} 値。

### 例外

{{jsxref("TypeError")}}: `target` が {{jsxref("Object")}} ではなかった場合。

## 解説

`Reflect.set` メソッドは、オブジェクトにプロパティを設定します。これはプロパティの割り当てを行い、機能としては [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors) 構文のようなものです。

## 例

### Reflect.set() の使用

```js
// オブジェクト
let obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// 配列
let arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// 配列を切り詰められる。
Reflect.set(arr, "length", 1); // true
arr; // ["duck"]

// 引数が1つだけだと、プロパティキーと値は "undefined" になる。
let obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Reflect")}}
- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
