---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.asyncIterator]()`** は {{jsxref("AsyncIterator")}} インスタンスのメソッドで、[非同期反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)を実装し、組み込みの非同期イテレーターを、 [`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループのような非同期反復可能オブジェクトを期待するほとんどの構文で利用できるようにします。これは [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値を返しますが、これは非同期イテレーターオブジェクトそのものです。

{{InteractiveExample("JavaScript デモ: Map.prototype[Symbol.iterator]()")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]
```

## 構文

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### 引数

なし。

### 返値

[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値で、非同期イテレーターオブジェクトそのものです。

## 例

### for await...of ループを使用した反復処理

このメソッドを直接呼び出す必要はほとんどないことに注意してください。`[Symbol.asyncIterator]()` メソッドが存在することで、すべての組み込み非同期イテレーターを[非同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期反復処理可能プロトコル)にすることができます、また、 `for await...of` ループなどの反復処理構文は、自動的にこのメソッドを呼び出し、ループ処理する非同期イテレーターを取得します。

```js
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();
(async () => {
  for await (const value of asyncIterator) {
    console.log(value);
  }
})();
// ログ: 1, 2, 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of)
