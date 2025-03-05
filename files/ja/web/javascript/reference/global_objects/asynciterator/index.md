---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: ab97df6ce8865569507bcfc884206a1ed297a690
---

{{JSRef}}

**`AsyncIterator`** オブジェクトは [非同期イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル) に準拠したオブジェクトで、 `next()` メソッドを提供することでイテレーターの結果オブジェクトに履行されるプロミスを返します。 `AsyncIterator.prototype` オブジェクトは、すべての組み込み非同期イテレーターが継承する非表示のグローバルオブジェクトです。これは、非同期イテレーターオブジェクト自身を返す [`@@asyncIterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator) メソッドを提供し、非同期イテレーターを[非同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)にもします。

なお、`AsyncIterator` はグローバルオブジェクトではありませんが、将来的には [async iterator helpers proposal](https://github.com/tc39/proposal-async-iterator-helpers) でグローバルオブジェクトになる予定です。すべての組み込み非同期イテレーターで共有される `AsyncIterator.prototype` オブジェクトは以下のコードで取得できます。

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## 解説

現在、 JavaScript の組み込み非同期イテレーターは、[非同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)が返す {{jsxref("AsyncGenerator")}} オブジェクトだけです。ウェブ API には他にも {{domxref("ReadableStream")}} のような組み込みの非同期イテレーターがあります。

これらの非同期イテレーターはそれぞれ個別のプロトタイプオブジェクトを持っており、特定の非同期イテレーターが使用する `next()` メソッドを定義しています。これらのプロトタイプオブジェクトはすべて `AsyncIterator.prototype` を継承しています。これは非同期イテレータオブジェクト自身を返す [`@@asyncIterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) メソッドを提供し、非同期イテレーターを[非同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)にもします。

> **メモ:** `AsyncIterator.prototype` は [`@@iterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) を実装していないので、非同期イテレーターは既定では[同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)ではありません。

## インスタンスメソッド

- [`AsyncIterator.prototype[@@asyncIterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/@@asyncIterator)
  - : 非同期イテレーターオブジェクト自身を返します。これにより、非同期イテレーターオブジェクトも非同期反復可能オブジェクトになります。

## 例

### 非同期イテレーターを非同期反復可能として使用

すべての組み込み非同期イテレーターも非同期反復処理可能オブジェクトなので、`for await...of` ループで使用することができます。

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

- {{JSxRef("Statements/async_function*", "async function*")}}
- [イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
