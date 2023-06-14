---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`at()`** メソッドは整数値を受け取り、指定したオフセットに位置する 1 つの UTF-16 コード単位からなる新しい文字列を返します。このメソッドでは、正と負の整数を扱うことができます。負の整数の場合は、文字列の最後の文字から前へ数えます。

{{EmbedInteractiveExample("pages/js/string-at.html")}}

## 構文

```js-nolint
at(index)
```

### 引数

- `index`
  - : 返す文字列のインデックス（位置）。負のインデックスを渡した場合、文字列の末尾からの相対位置指定に対応しています。つまり、負の数を使用した場合、文字列の末尾から数えて返す文字を見つけます。

### 返値

指定した位置にある単一の UTF-16 コード単位からなる文字列を返します。指定された位置が見つからない場合は {{jsxref('undefined')}} を返します。

## 例

### 文字列の最後の文字を返す

次の例は、指定した文字列の中で最後に見つかった文字を返す関数です。

```js
// 指定された文字列の最後の文字を返す関数
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'
```

### メソッドの比較

ここでは、{{jsxref('String')}} の最後から 2 番目の文字を選択する複数の方法を比較します。以下に示すどの方法も有効ですが、`at()` メソッドの簡潔さと読みやすさが際立っています。

```js
const myString = "Every green bus drives fast.";

// length プロパティと charAt() メソッドの使用
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// slice() メソッドの使用
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// at() メソッドの使用
const atWay = myString.at(-2);
console.log(atWay); // 't'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.at` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [at() メソッドのポリフィル](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
