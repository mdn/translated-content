---
title: <svg>
slug: Web/SVG/Element/svg
l10n:
  sourceCommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{SVGRef}}

`svg` 要素は、新しい座標系と[ビューポート](/ja/docs/Web/SVG/Attribute/viewBox)を定義するコンテナーです。これは SVG 文書の最も外側の要素として使用されますが、SVG または HTML 文書の中に SVG フラグメントを埋め込むためにも使用できます。

> **メモ:** `xmlns` 属性は *SVG 文書*の最も外側の `svg` 要素、または XML シリアライズによる HTML 文書内にのみ必要です。内部の `svg` 要素や HTML シリアライズによる HTML 文書の内部には不要です。

## 例

### 入れ子の `svg` 要素

この例では、入れ子になった `svg` 要素には `xmlns` 属性が必要ないことを示しています。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 300 100"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

{{EmbedLiveSample('nested_svg-elements', 300, 100)}}

### 動的なビューポートの単位の使用

この例では、 `svg` 要素の `height` 属性と `width` 属性は、ビューポートの幅または高さの小さい方の 60% に相当する動的ビューポート値 `60vmin` を使用して設定されます。

```html hidden
<div class="resizer">
  <iframe
    class="resized"
    srcdoc="
```

```html-nolint
<svg viewbox='0 0 400 400' xmlns='http://www.w3.org/2000/svg' height='60vmin' width='60vmin'>
  <rect x='0' y='0' width='50%' height='50%' fill='tomato' opacity='0.75' />
  <rect x='25%' y='25%' width='50%' height='50%' fill='slategrey' opacity='0.75' />
  <rect x='50%' y='50%' width='50%' height='50%' fill='olive' opacity='0.75' />
  <rect x='0' y='0' width='100%' height='100%' stroke='cadetblue' stroke-width='0.5%' fill='none' />
</svg>
```

```html hidden
  "></iframe>
</div>
```

```css hidden
.resizer {
  display: flex;
  margin: 1rem;
  padding: 0;
  resize: both;
  overflow: hidden;
  border: 5px dotted red;
  height: 400px;
}
.resizer > .resized {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  border: 0;
}
```

{{EmbedLiveSample('using_dynamic_viewport_lengths', '100%', 500)}}

iframe の寸法を変更するには、右下の赤い点線の枠のサイズを変更してみてください。

## 属性

- {{SVGAttr("baseProfile")}} {{deprecated_inline}}
  - : この文書が要求する最小の SVG 言語プロファイルです。
    _値の型_: **\<string>**、_既定値_: なし、_アニメーション_: **不可**
- {{SVGAttr("height")}}
  - : 矩形ビューポートで表示される高さです。（それ自身の座標系の高さではありません。）
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage)、_既定値_: `auto`、_アニメーション_: **可**
- {{SVGAttr("preserveAspectRatio")}}
  - : `svg` フラグメントが、異なる{{glossary("aspect ratio", "アスペクト比")}}での表示時にどう変形されるか。
    _値の型_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)?、_既定値_: `xMidYMid meet`、_アニメーション_: **可**
- {{SVGAttr("version")}} {{deprecated_inline}}
  - : 要素の内部の内容にどのバージョンの SVG が用いられるか。
    _値の型_: **[\<number>](/ja/docs/Web/SVG/Content_type#number)**、_既定値_: none、_アニメーション_: **不可**
- {{SVGAttr("viewBox")}}
  - : The SVG viewport coordinates for the current SVG fragment.
    _値の型_: **[\<list-of-numbers>](/ja/docs/Web/SVG/Content_type#list-of-ts)。**、_既定値_: none、_アニメーション_: **可**
- {{SVGAttr("width")}}
  - : 矩形ビューポートで表示される幅。（それ自身の座標系の幅ではありません。）
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage)、_既定値_: `auto`、_アニメーション_: **可**
- {{SVGAttr("x")}}
  - : SVG コンテナーが表示される x 座標。最も外側の `svg` 要素では効果ありません。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage)、_既定値_: `0`、_アニメーション_: **可**
- {{SVGAttr("y")}}
  - : SVG コンテナーが表示される y 座標。最も外側の `svg` 要素では効果ありません。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ja/docs/Web/SVG/Content_type#percentage)、_既定値_: `0`; _Animatable_: **yes**

> [!NOTE]
> SVG2 から、`x`, `y`, `width`, `height` は、 *幾何プロパティ*です。これは、これらの属性が CSS プロパティとして用いられることを意味します。

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
