---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
---

{{JSRef}}

**`Intl.RelativeTimeFormat.prototype.format()`** メソッドは `value` や `unit` を、この {{jsxref("Intl.RelativeTimeFormat")}} オブジェクトのロケールと整形オプションに従って整形します。

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-format.html")}}

## 構文

```js
relativeTimeFormat.format(value, unit);
```

### 引数

- `value`
  - : 国際化された相対時間のメッセージに使用する数値です。

<!---->

- `unit`
  - : 国際化された相対時間のメッセージに使用する単位です。利用可能な値は、 "`year`", "`quarter`", "`month`", "`week`", "`day`", "`hour`", "`minute`", "`second`" です。複数形も許容されています。

## 解説

`format` ゲッター関数は、この {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}} オブジェクトのロケールと整形オプションに従って値や単位を整形し、文字列に格納します。

## 例

### 基本的な format の使い方

以下の例は、英語を使用した相対時間のフォーマッターの生成方法を示しています。

```js
// ロケールで既定値を明確に指定して
// 相対時間フォーマッターを作成
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// 負の値 (-1) を使った相対時間の書式化
rtf.format(-1, "day");
// > "1 day ago"

// 正の値 (1) を使った相対時間の書式化
rtf.format(1, "day");
// > "in 1 day"
```

### auto オプションの使用

`numeric:auto` オプションが渡された場合は、 `1 day ago` や `in 1 day` の代わりに `yesterday` や `tomorrow` の文字列が生成されます。これにより、出力に数値が含まれなくなることがあります。

```js
// ロケールで既定値を明確に指定して
// 相対時間フォーマッターを作成
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// 負の値 (-1) を使った相対時間の書式化
rtf.format(-1, "day");
// > "yesterday"

// 正の値 (1) を使った相対時間の書式化
rtf.format(1, "day");
// > "tomorrow"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Intl.RelativeTimeFormat.format")}}

## 関連情報

- {{jsxref("Intl.RelativeTimeFormat")}}
