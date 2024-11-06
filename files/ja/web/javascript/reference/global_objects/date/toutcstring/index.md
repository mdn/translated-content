---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toUTCString()`** メソッドは、協定世界時 (UTC) のタイムゾーンに基づき、日付を文字列へ変換します。

[rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) と [ECMA-262 toUTCString](https://tc39.es/ecma262/#sec-date.prototype.toutcstring) の改訂に基づくと、負の数が可能です。

{{EmbedInteractiveExample("pages/js/date-toutcstring.html","shorter")}}

## 構文

```js-nolint
toUTCString()
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

## 例

### toUTCString() の使用

```js
const today = new Date("Wed, 14 Jun 2017 00:00:00 PDT");
const UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
