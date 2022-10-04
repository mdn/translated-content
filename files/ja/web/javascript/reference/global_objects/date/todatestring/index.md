---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
---

{{JSRef}}

**`toDateString()`** メソッドは、 {{jsxref("Date")}} オブジェクトの日付部分を英語の次の書式で空白区切りで返します。

1. 曜日名の最初の 3 文字
2. 月名の最初の 3 文字
3. 2 桁の日、必要であれば左に 0 埋め
4. 4 桁 (以上) の年、必要であれば左に 0 埋め

例 "Thu Jan 01 1970".

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## 構文

```
dateObj.toDateString()
```

### 返値

与えられた {{jsxref("Date")}} オブジェクトの「日付」部を表す文字列を人間が読める英語の表記で返します。

## 解説

{{jsxref("Date")}} インスタンスは、特定の時点を参照します。{{jsxref("Date.prototype.toString()", "toString()")}} を呼び出すと、人間が読める英語の表記で日付を返します。[SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では、この文字列は「日付」部 (日、月、年) と続く「時刻」部 (時、分、秒、タイムゾーン) からなります。時々、時刻の文字列を得たいことがあるでしょう。そのような場合は {{jsxref("Date.prototype.toTimeString()", "toTimeString()")}} メソッドが使えます。

[ECMA-262](/ja/docs/Web/JavaScript/Language_Resources) に従って実装されたエンジンは、{{jsxref("Date")}} オブジェクトに対して {{jsxref("Date.prototype.toString()", "toString()")}} メソッドから得られる文字列と異なることがあるため、`toDateString()` メソッドは特に役立ちます。その文字列の表記は実装依存であり、単純に文字列を切り出す方法では、複数のエンジンで一貫した結果を得られない可能性があります。

## 例

### toDateString() の基本的な使い方

```js
var d = new Date(1993, 5, 28, 14, 39, 7);

console.log(d.toString());     // logs Mon Jun 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Mon Jun 28 1993
```

> **メモ:** {{jsxref("Date")}} の引数として使用する場合、月は 0 から始まります（よって、 0 は 1 月に、 11 は 12 月 に対応します）。

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toDateString")}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
