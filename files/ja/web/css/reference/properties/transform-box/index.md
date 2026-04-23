---
title: transform-box
slug: Web/CSS/Reference/Properties/transform-box
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`transform-box`** は [CSS](/ja/docs/Web/CSS) のプロパティで {{cssxref("transform")}}、独立した変換プロパティである {{cssxref("translate")}}、{{cssxref("scale")}}、{{cssxref("rotate")}}、および {{cssxref("transform-origin")}} プロパティが相対するレイアウトボックスを定義します。

## 構文

```css
/* キーワード値 */
transform-box: content-box;
transform-box: border-box;
transform-box: fill-box;
transform-box: stroke-box;
transform-box: view-box;

/* グローバル値 */
transform-box: inherit;
transform-box: initial;
transform-box: revert;
transform-box: revert-layer;
transform-box: unset;
```

`transform-box` プロパティは、以下のいずれかのキーワードで指定されます。

### 値

- `content-box`
  - : コンテンツボックスを参照ボックスとして使用します。 {{htmlElement("table")}} の参照ボックスは表のボックスではなく、表を囲んでいるボックスの境界ボックスになります。
- `border-box`
  - : 境界ボックスを参照ボックスとして使用します。 {{htmlElement("table")}} の参照ボックスは表のボックスではなく、[表を囲んでいるボックス](/ja/docs/Glossary/Table_Wrapper_Box)の境界ボックスになります。
- `fill-box`
  - : そのオブジェクトのバウンディングボックスを参照ボックスとして使用します。関連付けられた CSS レイアウトボックスを持つ要素に対しては、`content-box` として機能します。
- `stroke-box`
  - : ストロークのバウンディングボックスを参照ボックスとして使用します。関連付けられた CSS レイアウトボックスを持つ要素に対しては、`border-box` として機能します。
- `view-box`
  - : 直近の {{Glossary("SVG")}} のビューポートを参照ボックスとして使用します。 SVG ビューポートに {{SVGAttr("viewBox")}} 属性が指定されていた場合、参照ボックスは `viewBox` 属性によって設定された座標系の原点に配置されます。また、参照ボックスの寸法は `viewBox` 属性の幅と高さの値に設定されます。関連する CSS レイアウトボックスを持つ要素の場合、 `border-box` として動作します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### SVG の transform-origin のスコープ

この例では、以下のような SVG があるとします。

```html
<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <g>
    <circle id="center" fill="red" r="1" transform="translate(25 25)" />
    <circle id="boxcenter" fill="blue" r=".5" transform="translate(15 15)" />
    <rect
      id="box"
      x="10"
      y="10"
      width="10"
      height="10"
      rx="1"
      ry="1"
      stroke="black"
      fill="none" />
  </g>
</svg>
```

CSS では、長方形を無限に回転させるために変換を使用するアニメーションがあります。 `transform-box: fill-box` は `transform-origin` をバウンディングボックスの中心にするために使用しているので、長方形は配置されたまま回転します。これがないと、座標変換の原点は SVG キャンバスの中心になるので、極めて異なる効果になります。

```css
svg {
  width: 80vh;
  border: 1px solid #d9d9d9;
  position: absolute;
  margin: auto;
  inset: 0;
}

#box {
  transform-origin: 50% 50%; /* 効果を見るには `0 0` 以外を指定する */
  transform-box: fill-box;
  animation: rotate-box 3s linear infinite;
}

@keyframes rotate-box {
  to {
    transform: rotate(360deg);
  }
}
```

{{EmbedLiveSample("SVG transform-origin scoping", "", 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("transform")}}, {{cssxref("transform-origin")}}
- 独立した座標変換プロパティ:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
