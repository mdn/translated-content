---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
tags:
  - Class
  - 実験的
  - 国際化
  - Intl
  - JavaScript
  - ListFormat
  - リファレンス
browser-compat: javascript.builtins.Intl.ListFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
---
{{JSRef}}

**`Intl.ListFormat`** オブジェクトは、言語を考慮したリストの整形ができるようにします。

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

<!-- このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 https://github.com/mdn/interactive-examples をクローンしてプルリクエストを送信してください。 -->

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
const list = ['Motorcycle', 'Bus', 'Car'];

 console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(list));
// > Motorcycle, Bus and Car

 console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' }).format(list));
// > Motorcycle, Bus or Car

 console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' }).format(list));
// > Motorcycle Bus Car
```

### formatToParts の使用

次の例では、整形済みの部分を返すリストフォーマッターを生成する方法を示します。

```js
const list = ['Motorcycle', 'Bus', 'Car'];
console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).formatToParts(list));

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
