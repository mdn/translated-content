---
title: Map.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`[Symbol.iterator]()`** は {{jsxref("Map")}} インスタンスのメソッドで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装します。これにより、 `Map` オブジェクトが反復可能プロトコルを受け入れるほとんどの構文、たとえば[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループなどで使用できるようになります。マップのキーと値のペアを挿入順に返す[イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

初期値は、 {{jsxref("Map.prototype.entries")}} メソッドの初期値と同じ関数オブジェクトです。

{{InteractiveExample("JavaScript デモ: Map.prototype[Symbol.iterator]()")}}

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map[Symbol.iterator]();

for (const item of iterator) {
  console.log(item);
}
// 予想される結果: Array ["0", "foo"]
// 予想される結果: Array [1, "bar"]
```

## 構文

```js-nolint
map[Symbol.iterator]()
```

### 引数

なし。

### 返値

返値は {{jsxref("Map.prototype.entries()")}} と同じ、マップのキーと値のペアを生成する新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

## 例

### for...of を使用した反復処理

このメソッドを直接呼び出す必要があることはめったにないことに注意してください。`[Symbol.iterator]()` メソッドが存在することで `Map` オブジェクトを[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)にし、 `for...of` ループなどの反復処理構文が、自動的にこのメソッドを呼び出してループのためのイテレーターを取得することができます。

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

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
