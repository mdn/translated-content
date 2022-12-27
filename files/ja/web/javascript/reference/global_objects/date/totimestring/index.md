---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
---

{{JSRef}}

**`toTimeString()`** メソッドは、英語の人間が読める形式で {{jsxref("Date")}} オブジェクトの「時刻」部を返します。

{{EmbedInteractiveExample("pages/js/date-totimestring.html","shorter")}}

## 構文

```
dateObj.toTimeString()
```

### 返値

英語の人間が読める形式で、与えられた日付の「時刻」部を表す文字列を返します。

## 解説

{{jsxref("Date")}} インスタンスは特定の時点を参照します。{{jsxref("Date.prototype.toString()", "toString()")}} を呼び出すと、英語の人間が読める形式の日付を返します。[SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では、この文字列は「日付」部 (日、月、年) と続く「時刻」部 (時、分、秒、タイムゾーン) から成ります。時々、時刻の文字列を得たいことがあるでしょう。そのような場合に、`toTimeString()` メソッドが使えます。

[ECMA-262](/ja/docs/Web/JavaScript/Language_Resources) に従って実装されたエンジンは、{{jsxref("Date")}} オブジェクトに対して {{jsxref("Date.prototype.toString()", "toString()")}} メソッドから得られる文字列と異なることがあるため、`toTimeString()` メソッドは特に役立ちます。その文字列の表記は実装依存であり、単純に文字列を切り出す方法では、複数のエンジンで一貫した結果を得られない可能性があります。

## 例

### toTimeString() の基本的な使い方

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.totimestring', 'Date.prototype.toTimeString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toTimeString")}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
