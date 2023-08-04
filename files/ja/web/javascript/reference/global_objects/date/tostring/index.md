---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toString()`** メソッドは、指定した {{jsxref("Date")}} オブジェクトをローカルタイムゾーンで解釈したものを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/date-tostring.html","shorter")}}

## 構文

```js-nolint
toString()
```

### 返値

与えられた日付を表す文字列。

## 解説

{{jsxref("Date")}} オブジェクトは、 {{jsxref("Object")}} の `toString()` メソッドを上書きします。`Date.prototype.toString()` は、日付と時刻の両方を含む、ローカルタイムゾーンで解釈される Date の文字列表現を返します。これは [`toDateString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString) と [`toTimeString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString) で指定した文字列表現を結合し、間に空白を追加したものです。

例: "Thu Jan 01 1970 04:42:04 GMT+0000 (Coordinated Universal Time)"

`toString()` メソッドは、`const today = 'Today is ' + new Date()` のように、日付を文字列に変換する際に自動的に呼び出されます。

`Date.prototype.toString()` は {{jsxref("Date")}} インスタンスに対して呼び出されなければなりません。もし `this` 値が `Date.prototype` を継承していない場合、 {{jsxref("TypeError")}} が発生します。

- _日付_ の部分を取得したい場合は、 [`toDateString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString) を使用してください。
- _時刻_ の部分を取得したい場合は、 [`toTimeString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString) を使用してください。
- 日付をローカルタイムゾーンではなく UTC として解釈したい場合は、 [`toUTCString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString) を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズ）で整形したい場合は、 [`toLocaleString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) を使用してください。

## 例

### toString() の使用

```js
const x = new Date();
console.log(x.toString()); // Mon Sep 08 1998 14:36:22 GMT-0700 (PDT)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
