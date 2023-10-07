---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

{{JSRef}}

**`toLocaleString()`** メソッドは、オブジェクトを表す文字列を返します。このメソッドは、ロケール固有の目的のために派生オブジェクトによって上書きするためのものです。

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## 構文

```
obj.toLocaleString()
```

### 返値

オブジェクトを表現する文字列です。

## 解説

{{jsxref("Object")}} の `toLocaleString` は {{jsxref("Object.toString", "toString()")}} を呼び出した結果を返します。

この関数は、すべての人が使うわけではありませんが、オブジェクトに汎用的な `toLocaleString` メソッドを与えるために提供されています。以下のリストを参照してください。

### toLocaleString を上書きしているオブジェクト

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## 例

### Array における toLocaleString() の上書き

{{jsxref("Array")}} オブジェクトでは、 {{jsxref("Array.toLocaleString", "toLocaleString()")}} を使用して配列の値を文字列として表示したり、オプションでロケール固有の識別子 (通貨記号など) を付加して表示したりすることができます。

例を示します。

```js
const testArray = [4, 7, 10];

let euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date における toLocaleString() の上書き

{{jsxref("Date")}} オブジェクトでは、 {{jsxref("Date.toLocaleString", "toLocaleString()")}} を使用して、特定のロケールに適した日付表示を出力します。

例を示します。

```js
const testDate = new Date(Date.now());
// "Date Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

let deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

var frDate = testDate.toLocaleString("fr");
//"29/05/2020 à 18:04:24"
```

### Number における toLocaleString() の上書き

{{jsxref("Number")}} オブジェクトでは、 {{jsxref("Number.toLocaleString", "toLocaleString()")}} を使用して、特定のロケールに適した数値表示、例えば正しい区切り文字を使って出力します。

例を示します。

```js
const testNumber = 2901234564;
// "2901234564"

let deNumber = testNumber.toLocaleString("de");
// "2.901.234.564"

let frNumber = testNumber.toLocaleString("fr");
// "2 901 234 564"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.toLocaleString")}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
