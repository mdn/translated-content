---
title: text-anchor
slug: Web/CSS/text-anchor
l10n:
  sourceCommit: 58313eeb2415546be9763dc691b6d519433c6dbb
---

{{CSSRef}}

**`text-anchor`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("inline-size")}} プロパティから決定される折り返し領域にテキストの文字列を含むボックスを配置し、テキストを要素のアンカーポイントに対して相対的に配置します。アンカーポイントは、 {{SVGAttr('x')}} および {{SVGAttr('y')}} （または {{SVGAttr('dx')}} および {{SVGAttr('dy')}}）属性を使用して定義されます。 CSS プロパティの値が存在する場合、その値は要素の {{SVGAttr("text-anchor")}} 属性の値を上書きします。

要素内の個々のテキスト断片はそれぞれ独立して配置されます。したがって、複数行の {{SVGElement("text")}} 要素では、 `text-anchor` の値に従ってテキストの各行が配置されます。 `text-anchor` の値は、 SVG の {{SVGElement("text")}}、{{SVGElement("textPath")}}、{{SVGElement("tref")}}、{{SVGElement("tspan")}} の各要素にのみ効果を持ちます。 `text-anchor` は自動的に折り返されたテキストには適用されません。その場合は、 {{cssxref('text-align')}} を参照してください。

## 構文

```css
text-anchor: start;
text-anchor: middle;
text-anchor: end;

/* グローバル値 */
text-anchor: inherit;
text-anchor: initial;
text-anchor: revert;
text-anchor: revert-layer;
text-anchor: unset;
```

### 値

- `start`

  - : テキスト文字列のインライン方向の先頭位置がアンカーポイントと一致するようにテキストを配置します。この配置はテキストの書き出し方向に関連するものです。例えば、右から左へ、上から下へ書く言語では、テキストはアンカーポイントの左側に配置されます。多くのアジア言語のように、テキストのインライン方向が縦書きの場合、テキストの上端がアンカーポイントと一致します。

- `middle`

  - : テキスト文字列のインラインボックスの中央（中間）がアンカーポイントと揃うようにテキストを配置します。

- `end`

  - : テキスト文字列のインライン方向の末尾位置がアンカーポイントと一致するようにテキストを配置します。この配置はテキストの書き出し方向と相対的なものです。例えば、右から左へ、上から下へ書く言語では、テキストはアンカーポイントの右側に配置されます。多くのアジア言語のように、テキストのインライン方向が縦書きの場合、テキストの下端がアンカーポイントと一致します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

3 つの `<text>` 要素には同じ `x` 位置が指定されていますが、`text-anchor` の値はそれぞれ異なります。 3 つのアンカーポイントのすべてについて、 x 軸の位置を示す破線の赤い行が含まれます。

```html
<svg
  viewBox="0 0 200 150"
  height="150"
  width="200"
  xmlns="http://www.w3.org/2000/svg">
  <line
    x1="100"
    y1="0"
    x2="100"
    y2="150"
    stroke="red"
    stroke-dasharray="10,5" />
  <text x="100" y="40">アンカーに配置</text>
  <text x="100" y="80">アンカーに配置</text>
  <text x="100" y="120">アンカーに配置</text>
</svg>
```

```css hidden
text {
  font-size: 24px;
}
```

```css
text:nth-of-type(1) {
  text-anchor: start;
}
text:nth-of-type(2) {
  text-anchor: middle;
}
text:nth-of-type(3) {
  text-anchor: end;
}
```

{{EmbedLiveSample("Example", 200, 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('dominant-baseline')}}
- SVG の {{SVGElement("text")}} 要素
- SVG の {{SVGAttr("text-anchor")}} 属性
