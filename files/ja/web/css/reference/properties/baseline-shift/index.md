---
title: baseline-shift
slug: Web/CSS/Reference/Properties/baseline-shift
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

**`baseline-shift`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキスト要素の主要ベースラインを、その親テキストコンテンツ要素の主要ベースラインに対して相対的に再配置します。シフトされた要素は、下付き文字または上付き文字となることがあります。このプロパティが存在する場合、その値は要素の {{SVGAttr("baseline-shift")}} 属性を上書きします。

> [!NOTE]
> `baseline-shift` プロパティは、{{SVGElement("svg")}} の中にある {{SVGElement("textPath")}} 要素と {{SVGElement("tspan")}} 要素にのみ適用されます。その他の SVG、HTML、擬似要素には適用されません。

## 構文

```css
/* <length-percentage> 値 */
baseline-shift: -0.5px;
baseline-shift: 4%;

/* キーワード値 */
baseline-shift: sub;
baseline-shift: super;

/* グローバル値 */
baseline-shift: inherit;
baseline-shift: initial;
baseline-shift: revert;
baseline-shift: revert-layer;
baseline-shift: unset;
```

### 値

- `sub`
  - : 主要ベースラインは、下付き文字のデフォルト位置に移動します。
- `super`
  - : 主要ベースラインは、上付き文字のデフォルト位置に移動します。
- `<length-percentage>`
  - : 指定された長さまたはパーセント値（パーセント値は親テキストコンテンツ要素の {{cssxref("line-height")}} の主要ベースラインに対する相対値）で、テキストコンテンツ要素の主要ベースラインを上げたり（正の場合）下げたり（負の場合）します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### キーワード値の使用

この例は、`baseline-shift` プロパティの `sub` および `super` キーワード値の基本的な使用法、ならびに CSS の `baseline-shift` プロパティが SVG の `baseline-shift` 属性よりも優先される様子を示しています。

#### HTML

2 つの SVG の {{SVGElement("text")}} 要素で構成される SVG を定義します。それぞれの要素には、SVG の {{SVGAttr("baseline-shift")}} 属性が設定された {{SVGElement("tspan")}} 要素が含まれます。

```html hidden
<p>元の SVG</p>
```

```html
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
```

```html hidden
<p><code>baseline-shift: sub;</code></p>
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
<p><code>baseline-shift: super;</code></p>
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
```

SVG は 3 回繰り返されますが、簡潔にするために 1 つのコピーのみを表示しています。

#### CSS

3 つの SVG 画像すべてにおいて、テキストを大きくし筆記体で表示します。`<tspan>` 要素内のコンテンツを区別するため、色を追加します。

2 番目の SVG の `<tspan>` 要素では `baseline-shift` プロパティの値を `sub` に設定し、3 番目の SVG の `<tspan>` 要素では `super` に設定しました。最初の SVG には追加の CSS は適用されていません。

```css
text {
  font-family: cursive;
  font-size: 2rem;
}
[baseline-shift="sub"] {
  fill: deeppink;
}
[baseline-shift="super"] {
  fill: rebeccapurple;
}

svg:nth-of-type(2) tspan {
  baseline-shift: sub;
}
svg:nth-of-type(3) tspan {
  baseline-shift: super;
}
```

```css hidden
svg {
  border: 1px solid;
  width: 15em;
  margin-bottom: 10px;
}
@supports not (baseline-shift: sub) {
  body::before {
    content: "このブラウザーは `baseline-shift` プロパティに対応していません。";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5em;
  }
}
```

#### 結果

{{EmbedLiveSample("Using keyword values", "300", "370")}}

最初の SVG では、SVG の `baseline-shift` 属性値が使用されます。2 つ目と 3 つ目の SVG では、CSS の `baseline-shift` 値が属性値を上書きします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("baseline-shift")}} 属性
- プレゼンテーション属性: `baseline-shift`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, {{cssxref("vector-effect")}}
