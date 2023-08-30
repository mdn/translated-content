---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: dadaa03da92fc616814454b761a6c783100f7e3b
---

{{JSRef}}

**`values()`** メソッドは、配列の各インデックスの値を含む新しい「配列[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)」オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/array-values.html")}}

## 構文

```js
values();
```

### 返値

新しい反復可能なイテレーターオブジェクトです。

## 解説

`Array.prototype.values()` は [`Array.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) の既定の実装です。

```js
Array.prototype.values === Array.prototype[Symbol.iterator]; // true
```

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

> **警告:** 配列イテレーターオブジェクトは、一回のみ使用可能なオブジェクトになります。再利用しないでください。

`values()` で返される反復可能オブジェクトは再利用できません。 `next().done = true` または `currentIndex > length` になった場合、 [`for...of` ループは終了](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols)し、それ以降の反復処理は効果がありません。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.values` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
