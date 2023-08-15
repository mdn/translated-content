---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`@@iterator`** メソッドは[反復プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)の一部であり、値の列を同期的に反復する方法を定義します。

{{EmbedInteractiveExample("pages/js/array-iterator.html")}}

**`@@iterator`** プロパティの初期値は {{jsxref("Array.prototype.values()", "values()")}} プロパティの初期値と同じ関数オブジェクトです。

## 構文

```js
[Symbol.iterator]();
```

### 返値

{{jsxref("Array.prototype.values()", "values()")}} **イテレーター**によって与えられる初期値です。既定では、 `arr[Symbol.iterator]` を使うと {{jsxref("Array.prototype.values()", "values()")}} を返します。

## 例

### for...of ループを用いた反復

#### HTML

```html
<ul id="letterResult"></ul>
```

#### JavaScript

```js
const arr = ["a", "b", "c"];
const arrIter = arr[Symbol.iterator]();
const letterResult = document.getElementById("letterResult");
for (const letter of arrIter) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### 結果

{{EmbedLiveSample('Iteration_using_for...of_loop')}}

### 他の反復方法

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### 括弧表記の使用法

この構文をドット記法 (`Array.prototype.values()`) よりも優先して使用する場合は、事前にどのようなオブジェクトになるのかが分からない場合です。イテレーターを受け取り、その値を反復処理する関数があるが、そのオブジェクトが \[Iterable].prototype.values メソッドを持っているかどうかわからない場合です。これは [String](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) オブジェクトのような組み込みオブジェクトや、独自オブジェクトである可能性があります。

```js
function logIterable(it) {
  if (!(Symbol.iterator in it)) {
    console.log(it, " is not an iterable object.");
    return;
  }

  const iterator = it[Symbol.iterator]();
  for (const letter of iterator) {
    console.log(letter);
  }
}

// Array
logIterable(["a", "b", "c"]);
// a
// b
// c

// string
logIterable("abc");
// a
// b
// c

logIterable(123);
// 123 is not an iterable object.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`core-js` による `Array.prototype[@@iterator]` のポリフィル](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.values()")}}
