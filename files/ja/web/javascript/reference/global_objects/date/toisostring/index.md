---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`toISOString()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時を[日時文字列形式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#日時文字列形式)で表す文字列を返します。この形式は、[ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601) に基づく簡略化された形式で、常に 24 または 27 文字の長さです（`YYYY-MM-DDTHH:mm:ss.sssZ` または `±YYYYYY-MM-DDTHH:mm:ss.sssZ`）。タイムゾーンは常に 0 UTC オフセットになり、接尾辞 `Z` で表記されます。

{{InteractiveExample("JavaScript デモ: Date.toISOString()")}}

```js interactive-example
const event = new Date("05 October 2011 14:48 UTC");
console.log(event.toString());
// 予想される結果: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toISOString());
// 予想される結果: "2011-10-05T14:48:00.000Z"
```

## 構文

```js-nolint
toISOString()
```

### 引数

なし。

### 返値

協定世界時に基づき、指定された日付を[日時文字列形式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#日時文字列形式)で表す文字列。 {{jsxref("Date.parse()")}} で認識するために求められる形式と同じ形式です。

### 例外

- {{jsxref("RangeError")}}
  - : 日付が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)であるか、日時文字列形式で表せない年に相当する場合に発生します。

## 例

### toISOString() の使用

```js
const d = new Date(0);

console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
