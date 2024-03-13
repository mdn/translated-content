---
title: <mspace>
slug: Web/MathML/Element/mspace
l10n:
  sourceCommit: 300849e10f993e94491937e2d1d3bca696908a95
---

{{MathMLRef}}

**`<mspace>`** は [MathML](/ja/docs/Web/MathML) の要素で、空白を作るために使われます。空白のサイズは属性で指定します。

## 属性

この要素の属性は、[グローバル MathML 属性](/ja/docs/Web/MathML/Global_attributes)と共に以下の属性があります。

- `depth`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、この空間の希望する（ベースライン以下の）空間を示します。
- `height`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、この空間の希望する（ベースラインの上の）高さを示します。
- `width`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage) で、この空間の希望の幅を示します。

> **メモ:** `depth`、`height`、`width` 属性については、一部のブラウザーは[古い MathML における長さ](/ja/docs/Web/MathML/Attribute/Values#古い_mathml_における長さ)も受け入れることがあります。

## 例

```html
<math display="block">
  <mn>1</mn>
  <mspace
    depth="40px"
    height="20px"
    width="100px"
    style="background: lightblue;" />
  <mn>2</mn>
</math>
```

{{ EmbedLiveSample('mspace_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
