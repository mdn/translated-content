---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

**`toTimeString()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時の地方時での時刻部分を英語で返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.toTimeString()", "shorter")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toTimeString());
// 予想される結果: "23:15:30 GMT+0200 (CEST)"
// メモ: タイムゾーンは異なる可能性があります
```

## 構文

```js-nolint
toTimeString()
```

### 引数

なし。

### 返値

指定された日時の時刻部分を表す文字列（書式については説明を参照してください）。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)の場合は "Invalid Date" を返します。

## 解説

{{jsxref("Date")}} インスタンスは特定の時点を参照します。`toTimeString()` は日付を地方時で解釈し、_時刻_ の部分を英語で整形します。これは常に `HH:mm:ss GMT±xxxx (TZ)` の形式を使用します。

| 書式文字列 | 説明                                                            |
| ---------- | --------------------------------------------------------------- |
| `HH`       | 時、2 桁（必要であれば先頭の 0 を含む）。                       |
| `mm`       | 分、2 桁（必要であれば先頭の 0 を含む）。                       |
| `ss`       | 秒、2 桁（必要であれば先頭の 0 を含む）。                       |
| `±xxxx`    | 地方時のオフセット - 時: 2 桁、分: 2 桁 (e.g. `-0500`, `+0800`) |
| `TZ`       | 地方時の名前（`PDT`, `PST` など）                               |

例: "04:42:04 GMT+0000 (Coordinated Universal Time)".

- 日付の部分を取得したい場合は、 {{jsxref("Date/toDateString", "toDateString()")}} を使用してください。
- 日付と時刻の両方を取得したい場合は、 {{jsxref("Date/toString", "toString()")}} を使用してください。
- 日時を地方時ではなく UTC として解釈したい場合は、 {{jsxref("Date/toUTCString", "toUTCString()")}} を使用してください。
- 時刻をもっとユーザーが読みやすい形式（例えばローカライズしたもの）で整形したい場合は、 {{jsxref("Date/toLocaleTimeString", "toLocaleDateString()")}} を使用してください。

## 例

### toTimeString() の基本的な使い方

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
