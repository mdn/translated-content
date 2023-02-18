---
title: Map.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`@@iterator`** は `Map` オブジェクトのプロパティで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装します。これにより、マップが反復可能プロトコルを受け入れるほとんどの構文、たとえば[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループなどで使用できるようになります。マップのキーと値のペアを返すイテレーターを返します。

初期値は、 {{jsxref("Map.prototype.entries()", "entries")}} メソッドの初期値と同じ関数オブジェクトです。

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## 構文

```js-nolint
map[Symbol.iterator]()
```

### 返値

返値は {{jsxref("Map.prototype.entries()")}} と同じ、マップのキーと値のペアを生成する新しい反復可能なイテレーターオブジェクトを返します。

## 例

### for..of を使用した反復処理

このメソッドを直接呼び出す必要があることはめったにないことに注意してください。`iterator` メソッドが存在することで `Map` オブジェクトを[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能_iterable_プロトコル)にし、 `for...of` ループなどの反復処理構文が、自動的にこのメソッドを呼呼び出してループのためのイテレータを取得することができます。

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz
```

### 手動でイテレーターを手繰る

返されたイテレーターオブジェクトの `next()` メソッドを手動で呼び出すと、反復処理を最大限に制御することができます。

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
