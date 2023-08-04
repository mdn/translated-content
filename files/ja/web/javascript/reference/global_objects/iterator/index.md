---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: ab97df6ce8865569507bcfc884206a1ed297a690
---

{{JSRef}}

**`Iterator`** オブジェクトは、イテレーターの結果オブジェクトを返す `next()` メソッドを提供することで、[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)に準拠したオブジェクトです。`Iterator.prototype` オブジェクトは、すべての組み込みイテレーターが継承する、隠れたグローバルオブジェクトです。これは、イテレーターオブジェクト自身を返す [`@@iterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator) メソッドを提供し、イテレーターを[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)にしています。

なお、`Iterator` はグローバルオブジェクトではありませんが、将来的には[イテレーターヘルパーの提案](https://github.com/tc39/proposal-iterator-helpers)でグローバルオブジェクトになる予定です。すべての組み込みイテレーターに共通する `Iterator.prototype` オブジェクトは、以下のコードで得ることができます。

```js
const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([].values()),
);
```

## 解説

以下のものは、すべて JavaScript の組み込みイテレーターです。

- 配列イテレーター: {{jsxref("Array.prototype.values()")}}、{{jsxref("Array.prototype.keys()")}}、{{jsxref("Array.prototype.entries()")}}、[`Array.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)、{{jsxref("TypedArray.prototype.values()")}}、{{jsxref("TypedArray.prototype.keys()")}}、{{jsxref("TypedArray.prototype.entries()")}}、[`TypedArray.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)、[`arguments[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator) で返されます。
- String イテレーター: [`String.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) で返されます。
- Map イテレーター: {{jsxref("Map.prototype.values()")}}、{{jsxref("Map.prototype.keys()")}}、{{jsxref("Map.prototype.entries()")}}、[`Map.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator) で返されます。
- Set イテレーター: {{jsxref("Set.prototype.values()")}}、{{jsxref("Set.prototype.keys()")}}、{{jsxref("Set.prototype.entries()")}}、[`Set.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator) で返されます。
- RegExp String イテレーター: [`RegExp.prototype[@@matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)、{{jsxref("String.prototype.matchAll()")}} で返されます。
- {{jsxref("Generator")}} オブジェクト: [ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)で返されます。
- Segments イテレーター: [`Intl.Segmenter.prototype.segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) で返される [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) オブジェクトの [`[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/@@iterator) メソッドで返されます。

これらのイテレーターはそれぞれ個別のプロトタイプオブジェクトを持っており、特定のイテレーターが使用する `next()` メソッドを定義しています。例えば、すべての String イテレーターオブジェクトは、隠しオブジェクトである `StringIteratorPrototype` を継承しており、このオブジェクトは、その文字列をコードポイントごとに反復処理する `next()` メソッドを持っています。また、 `StringIteratorPrototype` は [`@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティを持っており、初期値は文字列 `"String Iterator"` となります。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用します。同様に、他のイテレータープロトタイプも自分自身で `@@toStringTag` の値を持ち、それは上で指定された名前と同じです。

これらのプロトタイプオブジェクトはすべて `Iterator.prototype` を継承しており、イテレーターオブジェクト自身を返す [`@@iterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドを提供し、イテレーターを[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)にもしています。

## インスタンスメソッド

- [`Iterator.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator)
  - : イテレーターオブジェクト自身を返します。これにより、イテレータオブジェクトが反復可能にもなります。

## 例

### イテレーターを反復可能オブジェクトとして使用

すべての組み込みイテレーターは反復可能でもあるので、`for...of` ループの中で使うことができます。

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("Statements/function*", "function*")}}
- [イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
