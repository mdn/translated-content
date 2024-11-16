---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`Symbol.iterator`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)である `Symbol.iterator` を表します。[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)は、オブジェクトのイテレーターを返すメソッドを、このシンボルで探します。オブジェクトが反復可能であるためには、`[Symbol.iterator]` キーを持っていなければなりません。

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## 値

ウェルノウンシンボル `Symbol.iterator` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

オブジェクトを反復処理する必要がある場合（`for..of` ループの開始時など）は、その `[Symbol.iterator]()` メソッドが引数なしで呼び出され、返された**イテレーター**を使用して反復処理される値が取得されます。

一部の組み込み型には既定の反復動作がありますが、他の型（{{jsxref("Object")}} など）にはありません。`[Symbol.iterator]()` メソッドの組み込み型は次のとおりです。

- [`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)

詳細については、[反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)も参照してください。

## 例

### ユーザー定義の反復可能オブジェクト

次のように独自の反復可能オブジェクトを作成できます。

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

または、[計算プロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)を使用して、クラスやオブジェクト内で反復可能オブジェクトを直接定義できます。

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(...new Foo()); // 1, 2, 3
console.log(...someObj); // 'a', 'b'
```

### 非整形反復処理

もし反復可能項目の `[Symbol.iterator]()` メソッドがイテレーターオブジェクトを返さない場合、それは非整形反復可能項目です。それを使用すると、実行時に例外が発生したり、バグが発生したりする可能性があります。

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.iterator` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
- [`arguments[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
- [`Segments.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)
