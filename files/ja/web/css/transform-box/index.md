---
title: transform-box
slug: Web/CSS/transform-box
tags:
  - CSS
  - CSS プロパティ
  - CSS Transforms
  - Experimental
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.transform-box
translation_of: Web/CSS/transform-box
---
{{CSSRef}}

CSS の **`transform-box`** プロパティは、 {{cssxref("transform")}} と {{cssxref("transform-origin")}} プロパティに関連したレイアウトボックスを定義します。

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
transform-box: unset;
```

## 構文

`transform-box` プロパティは、以下のキーワードの 1 つで指定されます。

### 値

- `content-box`
  - : コンテンツボックスを参照ボックスとして使用します。 {{htmlElement("table")}} の参照ボックスはテーブルのボックスではなく、テーブルを囲んでいるボックスの境界ボックスになります。
- `border-box`
  - : 境界ボックスを参照ボックスとして使用します。 {{htmlElement("table")}} の参照ボックスはテーブルのボックスではなく、テーブルを囲んでいるボックスの境界ボックスになります。
- `fill-box`
  - : そのオブジェクトのバウンディングボックスを参照ボックスとして使用します。
- `stroke-box`
  - : ストロークのバウンディングボックスを参照ボックスとして使用します。
- `view-box`
  - : 直近の {{Glossary("SVG")}} のビューポートを参照ボックスとして使用します。SVG ビューポートに {{SVGAttr("viewBox")}} 属性が指定されていた場合、参照ボックスは `viewBox` 属性によって設定された座標系の原点に配置されます。また、参照ボックスの寸法は `viewBox` 属性の幅と高さの値に設定されます。

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
    <rect id="box" x="10" y="10" width="10" height="10" rx="1" ry="1" stroke="black" fill="none" />
  </g>
</svg>
```

この CSS では、変換を使用して矩形を無限に回転させるアニメーションを作成しています。 `transform-box: fill-box` を使用して、変換の原点をバウンディングボックスの中心にし、矩形が所定の位置で回転するようにします。 `fill-box` がない場合、変換の原点は SVG キャンバスの中心となるため、まったく異なる効果が得られます。

```css
svg{
  width:80vh;
  border:1px solid #d9d9d9;
  position:absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#box{
  transform-origin:50% 50%;
  /*+++++++++++++++++++++++++++*/
  /* if I remove this rule the pen won't work properly on Chrome for Mac, FF, Safari
  Will still work properly on Chrome for PC & Opera*/
  transform-box: fill-box;
  /*Alternatively  I can use transform-origin:15px 15px;*/
  /*+++++++++++++++++++++++++++*/
  animation: rotateBox 3s linear infinite;
}

@keyframes rotateBox {
  to {
    transform: rotate(360deg);
  }
```

この例は [Pogany](https://codepen.io/giaco) 氏によるものです。ライブ版は[この codepen](https://codepen.io/giaco/pen/OwowJQ) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- {{cssxref("transform")}}, {{cssxref("transform-origin")}}
