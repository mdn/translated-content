---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.ListFormat`** オブジェクトにより、言語を考慮したリストの書式化ができます。

{{InteractiveExample("JavaScript デモ: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// 予想される結果: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// 予想される結果: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// 予想される結果: "Motorcycle Bus Car"
```

## コンストラクター

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : 新しい `Intl.ListFormat` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : 指定されたロケールのうち、実行環境のデフォルトのロケールで代替されることなく対応するものを、配列に収めて返します。

## インスタンスプロパティ

これらのプロパティは `Intl.ListFormat.prototype` で定義されており、すべての `Intl.ListFormat` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Intl.ListFormat.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Intl.ListFormat` インスタンスの場合、初期値は {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat")}} コンストラクターとなります。
- `Intl.ListFormat.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Intl.ListFormat"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : リストの要素を表す、言語を考慮して書式化された文字列を返します。
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : ロケールを考慮した方法で値のリストを書式化するために使用できる、さまざまな部分を表すオブジェクトの配列を返します。
- {{jsxref("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : 現在の `Intl.ListFormat` オブジェクトの構築時に計算されたロケールおよびスタイルの書式化オプションを反映したプロパティを持つ、新しいオブジェクトを返します。

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
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
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

- [`Intl.ListFormat` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-listformat/)
- {{jsxref("Intl")}}
