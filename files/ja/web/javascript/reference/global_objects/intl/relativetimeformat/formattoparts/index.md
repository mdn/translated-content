---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`formatToParts()`** は {{jsxref("Intl.RelativeTimeFormat")}} インスタンスのメソッドで、 {{jsxref("Intl/RelativeTimeFormat/format", "format()")}} が返す書式化済み文字列の各部分を表すオブジェクトの配列を返します。これは、ロケール固有のトークンからカスタム文字列を構築するのに便利です。

{{InteractiveExample("JavaScript デモ: Intl.RelativeTimeFormat.prototype.formatToParts")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("ja", { numeric: "auto" });
const parts = rtf1.formatToParts(10, "seconds");

console.log(parts[0].value);
// 予想される結果: "10"

console.log(parts[1].value);
// 予想される結果: " 秒後"
```

## 構文

```js-nolint
formatToParts(value, unit)
```

### 引数

- `value`
  - : 国際化対応の相対時間メッセージで使用する値です。
- `unit`
  - : 国際化対応の相対時間のメッセージに使用する単位です。利用可能な値は、`"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"` です。複数形も許容されています。

### 返値

書式化された相対時間を成分ごとに格納したオブジェクトの配列 ({{jsxref("Array")}}) です。各オブジェクトには、`type`、`value`、およびオプションで `unit` という 2 つまたは 3 つのプロパティがあり、それぞれに文字列が含まれています。`value` の文字列連結は、指定された順序で実行されると、{{jsxref("Intl/RelativeTimeFormat/format", "format()")}} と同じ文字列になります。各成分は、数値を引数として {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} を呼び出し、`numberingSystem` オプションのみを指定して取得し、さらに `"in "` や `" days ago"` などの追加の `type: "literal"` トークンを付加したものと考えることができます。`NumberFormat` によって生成されるすべてのトークンには、追加の `unit` プロパティがあります。これは、入力された `unit` の単数形です。これはプログラムでの使用を目的としており、ローカライズされません。ローカライズされた単位は、リテラルトークンの一部として出力されます。

`options.numeric` が `"auto"` に設定されており、値として特別な文字列が指定されている場合、返される配列は単一のリテラルトークンとなります。

## 例

### formatToParts() の使用

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
