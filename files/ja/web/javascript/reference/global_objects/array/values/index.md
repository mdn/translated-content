---
title: Array.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`values()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列の各要素の値を含む新しい[配列イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.values()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.values();

for (const value of iterator) {
  console.log(value);
}

// 予想される結果: "a"
// 予想される結果: "b"
// 予想される結果: "c"
```

## 構文

```js-nolint
values()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 解説

`Array.prototype.values()` は [`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) の既定の実装です。

```js
Array.prototype.values === Array.prototype[Symbol.iterator]; // true
```

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)に使用された場合、 `values()` メソッドは空のスロットを `undefined` の値であるかのように反復処理します。

`values()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### for...of ループを用いた反復処理

`values()` は反復可能なイテレーターを返すため、 [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用して反復処理を行うことができます。

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### next() を使用した反復処理

返値はイテレーターでもあるため、直接 `next()` メソッドを呼び出すことができます。

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined
```

### 反復可能オブジェクトの再利用

> [!WARNING]
> 配列イテレーターオブジェクトは、一回のみ使用可能なオブジェクトになります。再利用しないでください。

`values()` で返される反復可能オブジェクトは再利用できません。 `next().done = true` または `currentIndex > length` になった場合、 [`for...of` ループは終了](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#言語と反復処理プロトコルの対話)し、それ以降の反復処理は効果がありません。

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// undefined
```

[`break`](/ja/docs/Web/JavaScript/Reference/Statements/break) 文を使用して早めに反復処理を終了した場合、反復処理を継続する際にイテレーターで現在の位置から再開することができます。

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"
```

### 反復処理中の書き替え

`values()` から返される配列のイテレーターオブジェクトには値が格納されていません。その代わり、生成時に使用した配列のアドレスを格納し、各反復時に現在アクセスしている位置を読み取ります。そのため、イテレーターの出力は、そのステップの実行時にその位置に格納されている値に依存します。配列の値が変化した場合は、配列イテレーターオブジェクトの値も変化します。

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)とは異なり、配列イテレーターオブジェクトは作成時に配列の長さを保存せず、反復処理のたびに一度だけ読み込みます。そのため、反復処理中に配列が大きくなった場合、イテレーターは新しい要素も処理します。これにより、無限ループが発生する可能性があります。

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError: invalid array length
```

### 疎配列の反復処理

`values()` は空のスロットを `undefined` であるかのように処理します。

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### 配列以外のオブジェクトに対する values() の呼び出し

`values()` メソッドは `this` の `length` プロパティを読み込み、そのキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // length が 3 であるため values() からは無視される
};
for (const entry of Array.prototype.values.call(arrayLike)) {
  console.log(entry);
}
// a
// b
// c
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.values` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.values` のポリフィル](https://www.npmjs.com/package/array.prototype.values)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
