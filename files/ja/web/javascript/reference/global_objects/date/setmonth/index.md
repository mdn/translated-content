---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{JSRef}}

**`setMonth()`** は {{jsxref("Date")}} インスタンスのメソッドで、現在設定されている年に基づき、指定された日時の「月」を設定します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setMonth()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMonth(3);

console.log(event.getMonth());
// 予想される結果: 3

console.log(event);
// 予想される結果: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary
```

## 構文

```js-nolint
setMonth(monthValue)
setMonth(monthValue, dateValue)
```

### 引数

- `monthValue`
  - : 月を表す整数で、 0 は 1 月、 1 を 2 月、というようになります。
- `dateValue` {{optional_inline}}
  - : 「日」を表す 1 から 31 までの間の整数値。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`dateValue` 引数を指定しなかった場合、{{jsxref("Date/getDate", "getDate()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setMonth()` が {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthValue` に 15 を指定した場合、年に 1 が加算され、月が 3 になります。

このメソッドの動作は、ある特定の月の日にちに影響を与えます。
概念上は、その月の日数を、引数として与えた新しい月の初日に加え、新しい日付を返します。
例えば、現在の値が 2016 年 1 月 31 日である場合、1 を引数として setMonth を呼び出すと 2016 年 3 月 2 日が返ってきます。
これは、2016 年の 2 月が 29 日間しかないからです。

## 例

### setMonth() の使用

```js
const theBigDay = new Date();
theBigDay.setMonth(6);

// 月末の移行にご注意ください
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); // Wed Mar 02 2016 00:00:00
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
