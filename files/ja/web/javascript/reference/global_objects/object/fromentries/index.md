---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
---

{{JSRef}}

**`Object.fromEntries()`** メソッドは、キーと値の組み合わせのリストをオブジェクトに変換します。

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## 構文

```
Object.fromEntries(iterable);
```

### 引数

- `iterable`
  - : [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)を実装している {{jsxref("Array")}} や {{jsxref("Map")}} やその他の反復処理可能なオブジェクトです。

### 返値

反復可能な項目から作成されたプロパティを持つ新しいオブジェクト。

## 説明

`Object.fromEntries()` メソッドは、キーと値のリストを取り、これらの項目から作成されたプロパティを持つ新しいオブジェクトを返します。引数の _iterable_ は `@@iterator` メソッドを実装しており、オブジェクトのような二つの要素を持ち、最初の要素がプロパティキーとして使われる値であり、次の要素がプロパティのキーに関連付けられる値であるようなオブジェクトであることが求められます。

`Object.fromEntries()` は {{jsxref("Object.entries()")}} の逆の動作をします。

## 例

### Map から Object への変換

`Object.fromEntries` では、 {{jsxref("Map")}} を {{jsxref("Object")}} に変換することができます。

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Array から Object への変換

`Object.fromEntries` では、 {{jsxref("Array")}} を {{jsxref("Object")}} に変換することができます。

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### オブジェクトの変形

`Object.fromEntries`、逆のメソッド {{jsxref("Object.entries()")}}、[配列操作メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#インスタンスメソッド)を使用して、以下のようにオブジェクトを変形することができます。

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.fromEntries")}}

## 関連情報

- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
