---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`forEach()`** メソッドは、配列の要素ごとに一度与えられた関数を実行します。このメソッドは {{jsxref("Array.prototype.forEach()")}} と同じアルゴリズムを持っています。ここで _TypedArray_ は[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)の一つです。

{{EmbedInteractiveExample("pages/js/typedarray-foreach.html")}}

## 構文

```js-nolint
// アロー関数
forEach((element) => { /* ... */ } )
forEach((element, index) => { /* ... */ } )
forEach((element, index, array) => { /* ... */ } )

// コールバック関数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// インラインコールバック関数
forEach(function(element) { /* ... */ })
forEach(function(element, index) { /* ... */ })
forEach(function(element, index, array){ /* ... */ })
forEach(function(element, index, array) { /* ... */ }, thisArg)
```

### 引数

- `callbackFn`

  - : 新しい型付き配列の要素を生成する関数。

    関数は以下の引数で呼び出されます。

    - `element`
      - : 型付き配列内で処理される現在の要素。
    - `index`
      - : 配列内で処理される現在の要素の添字。
    - `array`
      - : `forEach()` が呼び出される配列。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するとき `this` として使用する値。

### 返値

{{jsxref("undefined")}} です。

## 解説

`forEach()` メソッドは与えられた `callbackFn` を、型付き配列内に存在するそれぞれの要素に一度ずつ昇順に実行します。削除されたり、省略されたりしたインデックスに対しては呼び出されません。ただし、存在していて {{jsxref("undefined")}} の値を持つ要素に対しては実行されます。

`callbackFn` は次の **3 つの引数**で呼び出されます。

- **要素の値**
- **要素の添字**
- **走査中の型付き配列**

`thisArg` 引数が `forEach()` に与えられた場合は、 `callbackFn` の呼び出し時にそのオブジェクトが `this` の値として使用されます。与えられなかった場合は、 {{jsxref("undefined")}} が `this` の値として使用するために渡されます。 `callbackFn` によって最終的に観測可能な `this` 値は[関数から見える `this` を特定する一般規則](/ja/docs/Web/JavaScript/Reference/Operators/this)に従います。

`forEach()` によって処理される要素の範囲は `callbackFn` の最初の呼び出し前に設定されます。 `forEach()` の呼び出しが始まったあとで型付き配列に追加される要素は、 `callbackFn` によって処理されます。型付き配列内に存在している要素の値が変更されたら、 `callbackFn` に渡される値は、`forEach()`メソッドが処理する直前の値です。つまり、処理される前に削除されている要素は処理されません。

`forEach()` は型付き配列の各要素ごとに一度 `callbackFn` 関数を実行します。 {{jsxref("TypedArray.prototype.every()", "every()")}} や {{jsxref("TypedArray.prototype.some()", "some()")}} とは異なり、常に、{{jsxref("undefined")}} 値を返します。

## 例

### 型付き配列の内容をログに出力する

以下のコードは型付き配列内の各要素を 1 行ずつ出力します。

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// 出力:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.forEach` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
