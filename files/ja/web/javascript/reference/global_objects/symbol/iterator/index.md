---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
---

<div>{{JSRef}}</div>

**`Symbol.iterator`** はウェルノウンシンボルで、オブジェクトの既定のイテレーターを指定します。 [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) で使用されます。

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## 解説

オブジェクトを反復処理する必要がある場合（`for..of` ループの開始時など）は常に、その `@@iterator` メソッドが引数なしで呼び出され、返された**イテレーター**を使用して反復処理される値が取得されます。

一部の組み込み型には既定の反復動作がありますが、他の型（{{jsxref("Object")}} など）にはありません。`@@iterator` メソッドの組み込み型は次のとおりです。

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

詳細については、[反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)も参照してください。

{{js_property_attributes(0,0,0)}}

## 例

### ユーザー定義の反復可能項目

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

または、[計算されたプロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names)を使用して、クラスやオブジェクト内で反復可能オブジェクトを直接定義できます。

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

もし反復可能項目の `@@iterator` メソッドがイテレーターオブジェクトを返さない場合、それは非整形反復可能項目です。それを使用すると、実行時に例外が発生したり、バグが発生したりする可能性があります。

```js example-bad
const nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.iterator` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
