---
title: <circle>
slug: Web/SVG/Element/circle
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

**`<circle>`** は [SVG](/ja/docs/Web/SVG) の要素で、[SVG 基本図形](/ja/docs/Web/SVG/Tutorial/Basic_Shapes)の一つであり、中心座標と半径を指定して円を描画します。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

### 属性

- {{SVGAttr("cx")}}
  - : 円の中心の X 軸座標です。
    _値の型_: **[\<length>](/ja/docs/Web/SVG/Content_type#length)**|**[\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)** ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("cy")}}
  - : 円の中心の Y 軸座標です。
    _値の型_: **[\<length>](/ja/docs/Web/SVG/Content_type#length)**|**[\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)** ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("r")}}
  - : 円の半径。0 以下の値は円の描画が無効となります。
    _値の型_: **[\<length>](/ja/docs/Web/SVG/Content_type#length)**|**[\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)** ; _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : 円の円周の長さの合計をユーザー単位で指定します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#number) ; _既定値_: _なし_; _アニメーション_: **可**

> [!NOTE]
> SVG2 から `cx`, `cy`, `r` はジオメトリープロパティであり、これらの属性はその要素の CSS プロパティとしても使用することができるということを意味しています。

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の SVG 基本図形: **{{ SVGElement('ellipse') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
