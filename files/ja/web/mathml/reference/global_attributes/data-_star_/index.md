---
title: data-*
slug: Web/MathML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: 5f4ef6f614202ab1b748708d3e1d95e396f6ee63
---

**`data-*`** は MathML の属性で、カスタムデータ属性と呼ばれます。これらは、通常はスクリプト処理の目的で、標準属性では利用できない情報を MathML マークアップとその結果として生成される DOM 間で共有できるようにします。これらの独自のデータは、属性が属する要素の {{domxref("MathMLElement")}} インターフェイスを通じて、{{domxref("MathMLElement.dataset")}} プロパティによって利用できます。

`*` の部分は、[XML の命名規則](https://www.w3.org/TR/xml/#NT-Name)で許可されている任意の文字に置き換えることができますが、以下の制限があります。

- `xml` で始めることはできません。
- セミコロン (`;`, `U+003A`) は使用できません。
- 大文字の `A` から `Z` までの文字は使用できません。

> [!NOTE]
> {{domxref("MathMLElement.dataset")}} プロパティは {{domxref("DOMStringMap")}} であり、`data-test-value` 属性は `MathMLElement.dataset.testValue` から提供されます。ハイフン文字 (`-`, `U+002D`) は除去され、次の文字が大文字に変換されるので、{{Glossary("camel_case", "キャメルケース")}}で書式化されます。

この属性は、どの MathML 要素でも使用することができます。

## 例

```html
<math>
  <msup data-formula="euler" data-value="-1">
    <mi>e</mi>
    <mrow><mi>i</mi> <mi>π</mi></mrow>
  </msup>
  <mo>+</mo>
  <mn>1</mn>
  <mo>=</mo>
  <mn>0</mn>
</math>
```

```js
const msupElement = document.querySelector("msup");
console.log(msupElement.dataset.formula); // "euler"
console.log(msupElement.dataset.value); // "-1"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MathMLElement")}}
- スクリプトからこれらの属性にアクセスするために使用する {{domxref("MathMLElement.dataset")}} プロパティ
- [データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)
