---
title: Date.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---

{{JSRef}}

**`[@@toPrimitive]()`** メソッドは、`Date` オブジェクトをプリミティブ値に変換します。

## 構文

```
Date()[Symbol.toPrimitive](hint);
```

### 返値

与えられた {{jsxref("Date")}} オブジェクトのプリミティブ値です。引数に応じて、このメソッドは文字列と数値のどちらかを返します。

## 解説

{{jsxref("Date")}} オブジェクトの `[@@toPrimitive]()` メソッドは、プリミティブ値を返します。これは、数値型か文字列型です。

`hint` が `string` または `default` の場合、`[@@toPrimitive]()` は {{jsxref("Object.prototype.toString()", "toString")}} メソッドを呼び出そうとします。`toString` メソッドが存在しなければ、{{jsxref("Object.prototype.valueOf()", "valueOf")}} メソッドを呼び出そうとします。`valueOf` メソッドも存在しなければ、`[@@toPrimitive]()` は {{jsxref("TypeError")}} を発生させます。

`hint` が `number` の場合、`[@@toPrimitive]()` は初めに `valueOf` メソッドを呼び出そうとします。これが失敗した場合は、`toString` メソッドを呼び出します。

JavaScript は、`[@@toPrimitive]()` メソッドを呼び出してオブジェクトをプリミティブ値に変換します。`[@@toPrimitive]()` メソッドを自分で呼び出す必要はほとんどありません。JavaScript は、プリミティブ値が期待されるオブジェクトに遭遇した時、自動的にこれを呼び出します。

## 例

### 日付プリミティブの返却

```js
const testDate = new Date(1590757517834);
// "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('string');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('number');
// Returns "1590757517834"

testDate[Symbol.toPrimitive]('default');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype-@@toprimitive', 'Date.prototype.@@toPrimitive')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.@@toPrimitive")}}

## 関連情報

- {{jsxref("Symbol.toPrimitive")}}
