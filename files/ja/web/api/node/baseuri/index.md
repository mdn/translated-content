---
title: "Node: baseURI プロパティ"
slug: Web/API/Node/baseURI
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`baseURI`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、このノードを含む文書の絶対的なベース URL を返します。

ベース URL はブラウザーが絶対 URL を必要とするときに、相対 URL を解決するために使用されます。例えば、 HTML の {{HTMLElement("img")}} 要素の `src` 属性や、 SVG の `xlink:href` や `href` 属性を処理する場合などです。

このプロパティは読み取り専用ですが、値はプロパティがアクセスされるたびにアルゴリズムで決まりますので、状況が変化すると変化することがあります。

ベース URL は次のように決まります。

1. 既定で、ベース URL は文書の位置（{{domxref("window.location")}} で指定された通り）となります。
2. これが HTML 文書であり、文書に {{HTMLElement("Base")}} 要素があった場合、_最初の_ `Base` 要素の `href` の値があれば、代わりに使用されます。

## 値

{{domxref("Node")}} のベース URL を表す文字列です。

## 例

### \<base> なし

```html
<output>Not calculated</output>
```

```js
const output = document.querySelector("output");
output.value = output.baseURI;
```

{{EmbedLiveSample("Without_base", "100%", 40)}}

### \<base> あり

```html
<base href="https://developer.mozilla.org/modified_base_uri/" />
<output>Not calculated</output>
```

```js
const output = document.querySelector("output");
output.value = output.baseURI;
```

{{EmbedLiveSample("With_base", "100%", 40)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("base")}} 要素
