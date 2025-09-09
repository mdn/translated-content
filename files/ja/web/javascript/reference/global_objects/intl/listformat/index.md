---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
---

{{JSRef}}

**`Intl.ListFormat`** オブジェクトは、言語を考慮したリストの整形ができるようにします。

{{InteractiveExample("JavaScript デモ: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## コンストラクター

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : 新しい `Intl.ListFormat` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : 指定したロケールのうち、ランタイムの既定のロケールに代替されることなく対応しているものを含む配列を返します。

## インスタンスメソッド

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : リストの要素を表す、言語を考慮して書式化された文字列を返します。
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : ロケールを考慮した方法で値のリストを書式化するために使用できる、さまざまな部分を表すオブジェクトの配列を返します。
- {{jsxref("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : 現在の {{jsxref("Intl.ListFormat")}} オブジェクトの構築時に計算されたロケールおよびスタイルの書式化オプションを反映したプロパティを持つ、新しいオブジェクトを返します。

## 例

### format の使用

次の例は、英語を使用したリストフォーマッターの作成方法です。

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// > Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// > Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// > Motorcycle Bus Car
```

### formatToParts の使用

次の例では、整形済みの部分を返すリストフォーマッターを生成する方法を示します。

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list),
);

// [ { "type": "element", "value": "Motorcycle" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Bus" },
//   { "type": "literal", "value": ", and " },
//   { "type": "element", "value": "Car" } ];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl")}}
- [FormatJS の `Intl.ListFormat` のポリフィル](https://formatjs.io/docs/polyfills/intl-listformat)
