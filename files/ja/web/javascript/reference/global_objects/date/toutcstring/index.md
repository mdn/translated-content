---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

{{JSRef}}

**`toUTCString()`** メソッドは、協定世界時 (UTC) のタイムゾーンに基づき、日付を文字列へ変換します。

[rfc7231](https://tools.ietf.org/html/rfc7231#section-7.1.1.1) と [ecma-262 toUTCString](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-date.prototype.toutcstring) の改訂に基づき、 [2021 版](https://tc39.es/ecma262/#sec-date.prototype.toutcstring)では負の数が可能になります。

{{EmbedInteractiveExample("pages/js/date-toutcstring.html","shorter")}}

## 構文

```
dateObj.toUTCString()
```

### 返値

UTC タイムゾーンに基づき、与えられた日付を表す文字列。

## 解説

`toUTCString()` から返される文字列は、 `Www, dd Mmm yyyy hh:mm:ss GMT` の形の文字列です。

| 書式文字列 | 説明                                                   |
| ---------- | ------------------------------------------------------ |
| `Www`      | 曜日、3 文字で表す (例 Sun, Mon, ...)                  |
| `dd`       | 日、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `Mmm`      | 月、3 文字で表す (例 Jan, Feb, ...)                    |
| `yyyy`     | 年、必要に応じて先頭に 0 が付いた 4 桁以上の数字で表す |
| `hh`       | 時、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `mm`       | 分、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `ss`       | 秒、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |

ECMAScript 2018 以前では、返値の書式はプラットフォームによって様々です。もっとも一般的な返値は RFC-1123 形式の日付であり、これは RFC-822 形式の日付をわずかに改訂したものでした。

## 例

### toUTCString() を使う

```js
let today = new Date('Wed, 14 Jun 2017 00:00:00 PDT');
let UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.toutcstring', 'Date.prototype.toUTCString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toUTCString")}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
