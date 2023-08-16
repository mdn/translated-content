---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toISOString()`** メソッドは、*簡潔な*拡張表記の ISO 形式 ([ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601)) の文字列を返します。これは、常に 24 文字または 27 文字の長さになります（それぞれ、`YYYY-MM-DDTHH:mm:ss.sssZ` または `±YYYYYY-MM-DDTHH:mm:ss.sssZ`）。タイムゾーンは常に 0 UTC オフセットになり、接尾辞 `Z` で表記されます。

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## 構文

```js-nolint
toISOString()
```

### 返値

協定世界時に基づき、与えられた日付を [ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601) 形式で表す文字列。 [`Date.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format) で認識するために必要な形式と同じ形式です。

## 例

### toISOString() の使用

```js
const today = new Date("05 October 2011 14:48 UTC");

console.log(today.toISOString()); // 2011-10-05T14:48:00.000Z を返す
```

上記の例は、Mozilla 以外のブラウザーでは正しく解析されない、非標準の文字列値を解析するのに使います。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/date.polyfill.js)
