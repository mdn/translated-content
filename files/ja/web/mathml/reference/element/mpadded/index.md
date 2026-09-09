---
title: <mpadded>
slug: Web/MathML/Reference/Element/mpadded
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

**`<mpadded>`** は [MathML](/ja/docs/Web/MathML) の要素で、余白を追加したり、囲まれたコンテンツの位置やサイズの全体的な調整を設定したりするために使用します。。

## 属性

この要素の属性には、[MathML のグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加え、以下の属性があります。

- `depth`
  - : {{cssxref("length-percentage")}} で、この `<mpadded>` 要素の（ベースラインからの）理想的な深さを示します。
- `height`
  - : {{cssxref("length-percentage")}} で、この `<mpadded>` 要素の理想的な高さ（ベースラインより上）を示します。
- `lspace`
  - : {{cssxref("length-percentage")}} で、この `<mpadded>` 要素の位置決め点を基準として、子コンテンツの位置決め点の水平方向の位置を示します。
- `voffset`
  - : {{cssxref("length-percentage")}} で、この `<mpadded>` 要素の位置決め点を基準として、子コンテンツの位置決め点の垂直方向の位置を示します。
- `width`
  - : {{cssxref("length-percentage")}} で、この `<mpadded>` 要素の理想的な水平方向の長さを示します。

### 古い構文

`depth`、`height`、`lspace`、`voffset`、`width` 属性については、一部のブラウザーでは、代わりに次のようなより複雑な構文を受け入れることがあります。

1. 接頭辞としてオプションで `+` または `-` 記号を指定し、対応する軸の値を増加または減少させます（指定がない場合、対応する軸に指定された値が直接設定されます）。
2. [`<unsigned-number>`](/ja/docs/Web/MathML/Reference/Values#mathml_固有の型)（以下 α と呼ぶ）が続きます。
3. 必要に応じて、値が続きます（値が指定されていない場合、指定された値は「α の 100 倍パーセント」と解釈されます）。
   - [単位](/ja/docs/Web/MathML/Reference/Values#units)。指定された値は、[古い MathML の長さ](/ja/docs/Web/MathML/Reference/Values#mathml_における古い長さ) と同様に解釈されます。
   - [名前空間定数](/ja/docs/Web/MathML/Reference/Values#定数)。指定された値は、α 倍の定数として解釈されます。
   - 擬似単位 `width`、`height`、`depth` のいずれか。指定された値は、コンテンツの対応するサイズの α 倍として解釈されます。
   - パーセント記号の後に、擬似単位 `width`、`height`、`depth` のいずれかが続くもの。指定された値は、コンテンツの対応するサイズの α% として解釈されます。

## 例

### 軸とオフセット

```html
<math display="block">
  <mpadded width="400px" height="5em" depth="4em" lspace="300px" voffset="-2em">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </mpadded>
</math>
```

```css
mpadded {
  background: lightblue;
}
```

{{ EmbedLiveSample('dimensions_and_offsets_example', 700, 200, "", "") }}

### 古い構文

```html
<math display="block">
  <!-- 長さを加算 -->
  <mpadded width="+20px">
    <mtext>+20px</mtext>
  </mpadded>

  <!-- 擬似単位に設定 -->
  <mpadded width="2width">
    <mtext>2width</mtext>
  </mpadded>

  <!-- 擬似単位のパーセントを加算 -->
  <mpadded width="+400%height">
    <mtext>+400%height</mtext>
  </mpadded>

  <!-- 名前空間の倍数まで減らす -->
  <mpadded width="-1thickmathspace">
    <mtext>-1thickmathspace</mtext>
  </mpadded>
</math>
```

```css
mpadded:nth-child(1) {
  background: lightblue;
}
mpadded:nth-child(2) {
  background: lightgreen;
}
mpadded:nth-child(3) {
  background: lightyellow;
}
mpadded:nth-child(4) {
  background: pink;
}
```

{{ EmbedLiveSample('legacy_syntax_example', 700, 200, "", "") }}

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

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
