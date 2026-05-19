---
title: Intl.RelativeTimeFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`format()`** は {{jsxref("Intl.RelativeTimeFormat")}} のメソッドで、`value` や `unit` を、この `Intl.RelativeTimeFormat` オブジェクトのロケールと書式化オプションに従って書式化します。

{{InteractiveExample("JavaScript デモ: Intl.RelativeTimeFormat.prototype.format")}}

```js interactive-example
const rtf = new Intl.RelativeTimeFormat("ja", { style: "short" });

console.log(rtf.format(3, "quarter"));
// 予想される結果: "3 四半期後"

console.log(rtf.format(-1, "day"));
// 予想される結果: "1 日前"

console.log(rtf.format(10, "seconds"));
// 予想される結果: "10 秒後"
```

## 構文

```js-nolint
format(value, unit)
```

### 引数

- `value`
  - : 国際化対応の相対時間メッセージで使用する値です。
- `unit`
  - : 国際化対応の相対時間のメッセージに使用する単位です。利用可能な値は、`"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"` です。複数形も許容されています。

## 返値

指定された `value` および `unit` を、この {{jsxref("Intl.RelativeTimeFormat")}} オブジェクトのロケールおよび書式設定オプションに従って書式化した文字列です。

> [!NOTE]
> ほとんどの場合、`format()` が返す書式化は一貫しています。しかし、同じロケール内であっても、実装によって出力は異なる場合があります。出力のばらつきは設計上のものであり、仕様でも認められています。また、期待した結果とは異なる場合もあります。例えば、文字列は、改行しない空白文字を使用したり、双方向コントロール文字で囲まれたりする場合があります。`format()` の結果を、ハードコードされた定数と比較してはいけません。

## 例

### 基本的な format の使い方

以下の例は、英語を使用した相対時間のフォーマッターの生成方法を示しています。

```js
// ロケールで既定値を明確に指定して
// 相対時間フォーマッターを作成
const rtf = new Intl.RelativeTimeFormat("ja", {
  localeMatcher: "best fit", // その他の値: "lookup"
  numeric: "always", // その他の値: "auto"
  style: "long", // その他の値: "short" や "narrow"
});

// 負の値 (-1) を使った相対時間の書式化
rtf.format(-1, "day"); // "1 日前"

// 正の値 (1) を使った相対時間の書式化
rtf.format(1, "day"); // "1 日後"
```

### auto オプションの使用

`numeric:auto` オプションが渡された場合は、 `1 日前` や `in 1 day` の代わりに `yesterday` や `tomorrow` の文字列が生成されます。これにより、出力に数値が含まれなくなることがあります。

```js
// ロケールで既定値を明確に指定して
// 相対時間フォーマッターを作成
const rtf = new Intl.RelativeTimeFormat("ja", { numeric: "auto" });

// 負の値 (-1) を使った相対時間の書式化
rtf.format(-1, "day"); // "昨日"

rtf.format(0, "day"); // "今日"

// 正の日の単位 (1) を使った相対時間の書式化
rtf.format(1, "day"); // "明日"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.RelativeTimeFormat")}}
