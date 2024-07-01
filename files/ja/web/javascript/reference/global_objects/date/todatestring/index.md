---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toDateString()`** メソッドは、 {{jsxref("Date")}} オブジェクトの日付部分をローカルタイムゾーンで英語で返します。

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## 構文

```
dateObj.toDateString()
```

### 返値

与えられた {{jsxref("Date")}} オブジェクトの「日付」部を表す文字列を人間が読める英語の表記で返します。

## 解説

{{jsxref("Date")}} インスタンスは、特定の時点を参照します。 `toDateString()` は日付をローカルタイムゾーンで解釈し、_日付_ の部分を英語で整形します。英語の次の書式で空白区切りで返します。

1. 曜日名の最初の 3 文字
2. 月名の最初の 3 文字
3. 2 桁の日、必要であれば左に 0 埋め
4. 4 桁 (以上) の年、必要であれば左に 0 埋め

例 "Thu Jan 01 1970".

- _時刻_ の部分を取得したい場合は、 [`toTimeString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString) を使用してください。
- 日付と時刻の両方を取得したい場合は、 [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) を使用してください。
- 日付をローカルタイムゾーンではなく UTC として解釈したい場合は、 [`toUTCString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString) を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズ）で整形したい場合は、 [`toLocaleDateString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) を使用してください。

## 例

### toDateString() の基本的な使い方

```js
var d = new Date(1993, 5, 28, 14, 39, 7);

console.log(d.toString()); // logs Mon Jun 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Mon Jun 28 1993
```

> **メモ:** {{jsxref("Date")}} の引数として使用する場合、月は 0 から始まります（よって、 0 は 1 月に、 11 は 12 月 に対応します）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
