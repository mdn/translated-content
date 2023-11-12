---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
---

{{JSRef}}

**`Intl.RelativeTimeFormat.prototype.formatToParts()`** メソッドは、ロケールを考慮したカスタム書式設定に使用できる相対時間書式を部品単位で表すオブジェクトの配列 ({{jsxref("Array")}}) を返します。

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}

## 構文

```js
RelativeTimeFormat.formatToParts(value, unit);
```

### 引数

- `value`
  - : 国際化された相対時間のメッセージに使用する数値です。

<!---->

- `unit`
  - : 国際化された相対時間のメッセージに使用する単位です。利用可能な値は、 "`year`", "`quarter`", "`month`", "`week`", "`day`", "`hour`", "`minute`", "`second`" です。複数形も許容されています。

### 返値

書式化された相対時間を部品単位で含むオブジェクトの配列 ({{jsxref("Array")}}) です。

## 解説

`Intl.RelativeTimeFormat.prototype.formatToParts` メソッドは、書式化メソッドのバージョンの一つで、書式化された数値を他の周囲のテキストから分離し、それぞれの構成部品に分解した、オブジェクトの「部分」を表すオブジェクトの配列を返すものです。これらのオブジェクトには二つのプロパティがあります。 type は `NumberFormat` の formatToParts 型で、値は出力の構成要素である文字列です。もし "part" が `NumberFormat` から来たものであれば、書式化された単位を示す unit プロパティを持ちます。

## 例

### formatToParts の使用

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit
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

{{Compat}}

## 関連情報

- {{jsxref("Intl.RelativeTimeFormat")}}
