---
title: Array.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Array.of()`** 静的メソッドは、引数の数や型にかかわらず、可変長引数から、新しい `Array` インスタンスを生成します。

{{InteractiveExample("JavaScript デモ: Array.of()", "shorter")}}

```js interactive-example
console.log(Array.of("foo", 2, "bar", true));
// 予想される結果: Array ["foo", 2, "bar", true]

console.log(Array.of());
// 予想される結果: Array []
```

## 構文

```js-nolint
Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2, /* …, */ elementN)
```

### 引数

- `element1`, …, `elementN`
  - : 生成する配列の要素。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

`Array.of()` と [`Array()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) コンストラクターの違いは整数引数の扱いにあります。 `Array.of(7)` は単一の要素、`7` を持つ配列を作成しますが、 `Array(7)` は `length` プロパティが 7 の空の配列を作成します（これは {{jsxref("undefined")}} の値を持つ実在のスロットではなく、7 つの空のスロットの配列を意味します）。

```js
Array.of(7); // [7]
Array(7); // 7 つの空スロットの配列

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

`Array.of()` メソッドは汎用ファクトリーメソッドです。例えば、 `Array` のサブクラスが `of()` メソッドを継承した場合、継承した `of()` メソッドは `Array` インスタンスではなく、サブクラスの新しいインスタンスを返します。実際には、 `this` 値には新しい配列の長さを表す単一の引数を受け入れる任意のコンストラクター関数を指定することができ、コンストラクターは `of()` に渡された引数の数だけ呼び出されます。最終的な `length` は、すべての要素が代入されたときに再度設定されます。もし `this` の値がコンストラクター関数でない場合、代わりにプレーンな `Array` コンストラクターが使用されます。

## 例

### Array.of() の使用

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### 配列以外のコンストラクターに対する of() の呼び出し

`of()` メソッドは、新しい配列の長さを表す単一の引数を受け入れるコンストラクター関数で呼び出すことができます。

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

`this` の値がコンストラクターでない場合は、プレーンな `Array` オブジェクトを返します。

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.of` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.of` のポリフィル](https://www.npmjs.com/package/array.of)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
