---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

**`toDateString()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時の地方時での日付部分を英語で返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.toDateString()")}}

```js interactive-example
const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// 予想される結果: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// メモ: タイムゾーンは異なる可能性があります

console.log(event.toDateString());
// 予想される結果: "Wed Jul 28 1993"
```

## 構文

```js-nolint
toDateString()
```

### 引数

なし。

### 返値

指定された日時の日付部分を表す文字列（書式については説明を参照してください）。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)の場合は "Invalid Date" を返します。

## 解説

{{jsxref("Date")}} インスタンスは、特定の時点を参照します。 `toDateString()` は日付を地方時で解釈し、_日付_ の部分を英語で整形します。英語の次の書式で空白区切りで返します。

1. 曜日名の最初の 3 文字
2. 月名の最初の 3 文字
3. 2 桁の日、必要であれば左に 0 埋め
4. 4 桁（以上）の年、必要であれば左に 0 埋め

例 "Thu Jan 01 1970".

- 時刻の部分を取得したい場合は、 {{jsxref("Date/toTimeString", "toTimeString()")}} を使用してください。
- 日付と時刻の両方を取得したい場合は、 {{jsxref("Date/toString", "toString()")}} を使用してください。
- 日時を地方時ではなく UTC として解釈したい場合は、 {{jsxref("Date/toUTCString", "toUTCString()")}} を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズしたもの）で整形したい場合は、 {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}} を使用してください。

## 例

### toDateString() の基本的な使い方

```js
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toDateString()); // "Thu Jan 01 1970"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
