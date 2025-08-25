---
title: Object.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`toLocaleString()`** は {{jsxref("Object")}} インスタンスのメソッドで、オブジェクトを表す文字列を返します。このメソッドは、ロケール固有の目的のために派生オブジェクトによってオーバーライドするためのものです。

{{InteractiveExample("JavaScript デモ: Object.prototype.tolocalestring()")}}

```js interactive-example
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date.toLocaleString("ar-EG"));
// 予想される結果: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number = 123456.789;

console.log(number.toLocaleString("de-DE"));
// 予想される結果: "123.456,789"
```

## 構文

```js-nolint
toLocaleString()
```

### 引数

なし。ただし、このメソッドをオーバーライドするすべてのオブジェクトは、 {{jsxref("Number.prototype.toLocaleString")}} のように `locales` と `options` に対応する最大 2 つの引数を受け取ることが期待されます。これらの引数の位置は、他の目的には使用しないでください。

### 返値

`this.toString()` 呼び出しの返値です。

## 解説

`Object.prototype` 継承するすべてのオブジェクト（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてのオブジェクト）は、 `toLocaleString()` メソッドを継承します。 {{jsxref("Object")}}'s `toLocaleString` は、 {{jsxref("Object/toString", "this.toString()")}} を呼び出した結果を返します。

この関数は、オブジェクトに汎用的な `toLocaleString` メソッドを提供するために用意されています。コア言語では、これらの組み込みオブジェクトは `toLocaleString` をオーバーライドしてロケール特有の書式設定を行います。

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## 例

### 基底の toLocaleString() メソッドの使用

基底の `toLocaleString()` メソッドは、単純に `toString()` を呼び出します。

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Array における toLocaleString() のオーバーライド

{{jsxref("Array.prototype.toLocaleString()")}}は、各要素の `toLocaleString()` メソッドを呼び出して、結果をロケール特有の区切り文字で連結することで、配列の値を文字列として出力するために使用されます。例を示します。

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date における toLocaleString() の上書き

{{jsxref("Date.prototype.toLocaleString()")}} は、特定のロケールに適した日付表示を出力するために使用されます。例を示します。

```js
const testDate = new Date();
// "Date Fri May 29 2020 18:04:24 GMT+0100 （イギリス夏時間）"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number における toLocaleString() の上書き

{{jsxref("Number.prototype.toLocaleString()")}} は、特定のロケールに適した数値表示を出力するために使用されます。例を示します。

```js
const testNumber = 2901234564;
// "2901234564"

const deNumber = testNumber.toLocaleString("de");
// "2.901.234.564"

const frNumber = testNumber.toLocaleString("fr");
// "2 901 234 564"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
