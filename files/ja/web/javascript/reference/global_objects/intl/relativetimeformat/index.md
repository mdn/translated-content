---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
---

{{JSRef}}

**`Intl.RelativeTimeFormat`** オブジェクトは言語に依存の相対時間の書式化を可能にします。

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## コンストラクター

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat.RelativeTimeFormat()")}}
  - : 新しい `Intl.RelativeTimeFormat` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : 指定されたロケールのうち、実行時の既定のロケールにフォールバックせずに対応されるものを配列に収めて返します。

## インスタンスメソッド

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : `value` および `unit` を、指定された {{jsxref("Intl.RelativeTimeFormat")}} オブジェクトのロケールと書式化オプションに従って書式化します。
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : ロケール固有のカスタムフォーマットに使用可能な相対時間のフォーマットを部分的に表現したオブジェクトの {{jsxref("Array")}} を返します。
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : オブジェクトの初期化中に計算されたロケールやフォーマットのオプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 例

### 基本的な `format` の使用例

以下は英語の相対時間フォーマッターの使い方の例です。

```js
// 明示的に渡された既定値を使って
// ロケールの相対時間を生成します
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// 負数の値 (-1) を使った相対時間のフォーマット
rtf.format(-1, "day");
// > "1 day ago"

// 正数の値 (1) を使った相対時間のフォーマット
rtf.format(1, "day");
// > "in 1 day"
```

### formatToParts の使用例

以下はフォーマットされた部品を返す相対時間フォーマッターの生成方法の例です。

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// 日単位の相対時間フォーマット
rtf.formatToParts(-1, "day");
// > [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// > [{ type: "literal", value: "in " },
// >  { type: "integer", value: "100", unit: "day" },
// >  { type: "literal", value: " days" }]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.RelativeTimeFormat")}}

## 関連情報

- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
