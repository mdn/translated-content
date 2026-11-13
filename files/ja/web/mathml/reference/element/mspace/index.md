---
title: <mspace>
slug: Web/MathML/Reference/Element/mspace
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

**`<mspace>`** は [MathML](/ja/docs/Web/MathML) の要素で、空間を作るために使われます。空間のサイズは属性で指定します。

## 属性

この要素の属性は、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)と共に以下の属性があります。

- `depth`
  - : {{cssxref("length-percentage")}} で、この空間の理想的な（ベースライン以下の）深さを示します。
- `height`
  - : {{cssxref("length-percentage")}} で、この空間の理想的な（ベースラインの上の）高さを示します。
- `width`
  - : {{cssxref("length-percentage")}} で、この空間の理想的な幅を示します。

> [!NOTE]
> `depth`、`height`、`width` 属性については、一部のブラウザーは[古い MathML における長さ](/ja/docs/Web/MathML/Reference/Values#古い_mathml_における長さ)も受け入れることがあります。

## 例

```html
<math display="block">
  <mn>1</mn>
  <mspace depth="40px" height="20px" width="100px" />
  <mn>2</mn>
</math>
```

```css
mspace {
  background: lightblue;
}
```

{{EmbedLiveSample('Examples')}}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
