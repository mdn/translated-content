---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toTimeString()`** メソッドは、英語の人間が読める形式で {{jsxref("Date")}} オブジェクトの「時刻」部を返します。

{{EmbedInteractiveExample("pages/js/date-totimestring.html","shorter")}}

## 構文

```js-nolint
toTimeString()
```

### 返値

英語の人間が読める形式で、与えられた日付の「時刻」部を表す文字列を返します。

## 解説

{{jsxref("Date")}} インスタンスは特定の時点を参照します。`toTimeString()` は日付をローカルのタイムゾーンで解釈し、_時刻_ の部分を英語の書式にします。これは常に `hh:mm:ss GMT±xxxx (TZ)` の形式を使用します。

| 書式文字列 | 説明                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| `hh`       | 時間、2 桁（必要であれば先頭の 0 を含む）。                                 |
| `mm`       | 分、2 桁（必要であれば先頭の 0 を含む）。                                   |
| `ss`       | 秒、2 桁（必要であれば先頭の 0 を含む）。                                   |
| `±xxxx`    | ローカルタイムゾーンのオフセット - 時：2桁、分：2桁 (e.g. `-0500`, `+0800`) |
| `TZ`       | ローカルタイムゾーンの名前（`PDT`, `PST` など）                             |

例: "04:42:04 GMT+0000 (Coordinated Universal Time)".

- _日付_ の部分を取得したい場合は、 [`toDateString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString) を使用してください。
- 日付と時刻の両方を取得したい場合は、 [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) を使用してください。
- 日付をローカルタイムゾーンではなく UTC として解釈したい場合は、 [`toUTCString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString) を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズ）で整形したい場合は、 [`toLocaleTimeString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString) を使用してください。

## 例

### toTimeString() の基本的な使い方

```js
const d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
