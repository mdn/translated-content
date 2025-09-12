---
title: Object.fromEntries()
short-title: fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Object.fromEntries()`** は静的メソッドで、キーと値の組み合わせのリストをオブジェクトに変換します。

{{InteractiveExample("JavaScript デモ: Object.fromEntries()")}}

```js interactive-example
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// 予想される結果: Object { foo: "bar", baz: 42 }
```

## 構文

```js-nolint
Object.fromEntries(iterable)
```

### 引数

- `iterable`
  - : [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)、例えば {{jsxref("Array")}} や {{jsxref("Map")}} など、オブジェクトを含むリスト。それぞれのオブジェクトには 2 つのプロパティがあります。
    - `0`
      - : 文字列または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)で、プロパティのキーを表します。
    - `1`
      - : プロパティ値。

    通常、このオブジェクトは 2 要素の配列として実装され、最初の要素がプロパティキー、 2 つ目がプロパティ値となります。

### 返値

反復可能な項目から作成されたプロパティを持つ新しいオブジェクト。

## 説明

`Object.fromEntries()` メソッドは、キーと値のリストを取り、これらの項目から作成されたプロパティを持つ新しいオブジェクトを返します。 `iterable` 引数は `[Symbol.iterator]()` メソッドを実装しているオブジェクトであることが求められます。このメソッドは 2 つの要素を持った配列風オブジェクトを生成するイテレーターを返します。最初の要素はプロパティキーとして使われる値であり、次の要素はプロパティのキーに関連付けられる値です。

`Object.fromEntries()` は {{jsxref("Object.entries()")}} の逆の動作をしますが、 `Object.entries()` は文字列キーのプロパティしか返さないのに対し、 `Object.fromEntries()` はシンボルキーのプロパティも作成することができます。

> [!NOTE]
> {{jsxref("Array.from()")}} と異なり、 `Object.fromEntries()` は `this` の値を使用しないので、他のコンストラクターで呼び出してもその型のオブジェクトは作成されません。

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

{{Compat}}

## 関連情報

- [`Object.fromEntries` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims による `Object.fromEntries` のポリフィル](https://www.npmjs.com/package/object.fromentries)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
