---
title: Intl.RelativeTimeFormat() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
---

{{JSRef}}

**`Intl.RelativeTimeFormat()`** コンストラクターは、 {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} オブジェクトを生成します。

## 構文

```js
new Intl.RelativeTimeFormat([locales[, options]])
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグを持つ文字列か、そのような文字列の配列です。 `locales` 引数の一般的な形式と解釈については、 {{jsxref("Global_Objects/Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。
- `options` {{optional_inline}}

  - : 以下のプロパティのうち一部またはすべてを持つオブジェクトです。

    - `localeMatcher`
      - : 使用するロケールの一致アルゴリズムです。使用可能な値は "`lookup`" および "`best fit`" で、既定値は "`best fit`" です。このオプションの詳細は、 {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} のページを参照してください。
    - `numeric`

      - : メッセージを出力する書式です。使用可能な値は次の通りです。

        - "`always`" (既定値、例えば `1 日前`)
        - "`auto`" (例えば `昨日`)。 "`auto`" にすると、出力に常に数値が入るとは限りません。

    - `style`

      - : 国際化されたメッセージの長さです。使用可能な値は次の通りです。

        - "`long`" (既定値、例えば `in 1 month`)
        - "`short`" (例えば `in 1 mo.`)
        - "`narrow`" (例えば `in 1 mo.`) narrow スタイルは同じロケールでは short スタイルと同様になることがあります。

## 例

### 基本的な書式の使い方

以下の例は、英語を使用した相対時間のフォーマッターの生成方法を示しています。

```js
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// 負の値 (-1) を使った相対時間のフォーマット
rtf.format(-1, "day");
// > "1 day ago"

// 正の値 (1) を使った相対時間のフォーマット
rtf.format(1, "day");
// > "in 1 day"
```

### auto オプションの使用

`numeric:auto` オプションが渡された場合は、 `yesterday` や `tomorrow` の文字列が `1 day ago` や `in 1 day` の代わりに生成されます。これにより、出力に数値が含まれなくなることがあります。

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day");
// > "yesterday"

// Format relative time using positive day unit (1).
rtf.format(1, "day");
// > "tomorrow"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.RelativeTimeFormat.RelativeTimeFormat")}}

## 関連情報

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
