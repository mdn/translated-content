---
title: x
slug: Web/SVG/Attribute/x
---

{{SVGRef}}

**`x`** 属性はユーザー座標系の X 軸の座標を定義します。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("altGlyph")}}
- {{SVGElement("cursor")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("filter")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("mask")}}
- {{SVGElement("pattern")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="60" height="60" />
  <rect x="120" y="20" width="60" height="60" />
  <rect x="220" y="20" width="60" height="60" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## altGlyph

> **警告:** SVG2 では {{SVGElement('altGlyph')}} は非推奨であるため、使用しないでください。

{{SVGElement('altGlyph')}} の場合、 `x` は代替文字の X 軸の座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        のリスト
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feBlend

{{SVGElement('feBlend')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feColorMatrix

{{SVGElement('feColorMatrix')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feComponentTransfer

{{SVGElement('feComponentTransfer')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feComposite

{{SVGElement('feComposite')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feConvolveMatrix

{{SVGElement('feConvolveMatrix')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feDiffuseLighting

{{SVGElement('feDiffuseLighting')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

{{SVGElement('feDisplacementMap')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feDropShadow

{{SVGElement('feDropShadow')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feFlood

{{SVGElement('feFlood')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feFuncA

{{SVGElement('feFuncA')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feFuncB

{{SVGElement('feFuncB')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feFuncG

{{SVGElement('feFuncG')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feFuncR

{{SVGElement('feFuncR')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feGaussianBlur

{{SVGElement('feGaussianBlur')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feImage

{{SVGElement('feImage')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feMerge

{{SVGElement('feMerge')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feMergeNode

{{SVGElement('feMergeNode')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feMorphology

{{SVGElement('feMorphology')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feOffset

{{SVGElement('feOffset')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## fePointLight

{{SVGElement('fePointLight')}} の場合、 `x` は {{SVGElement("filter")}} 要素の {{SVGAttr("primitiveUnits")}} 属性で定義される座標系での光源の X 位置を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

{{SVGElement('feSpecularLighting')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feSpotLight

{{SVGElement('feSpotLight')}} の場合、 `x` は {{SVGElement("filter")}} 要素の {{SVGAttr("primitiveUnits")}} 属性で定義される座標系での光源の X 位置を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feTile

{{SVGElement('feTile')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feTurbulence

{{SVGElement('feTurbulence')}} の場合、 `x` はこのプリミティブの描画領域における最小の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## filter

{{SVGElement('filter')}} の場合、 `x` はこのフィルターの描画領域における左上隅の X 座標をを定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>-10%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## foreignObject

{{SVGElement('foreignObject')}} の場合、 `x` はこのフィルターの描画領域における左上隅の X 座標をを定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> **メモ:** SVG2 からは、`x` は*幾何プロパティ*であり、この属性は `<foreignObject>` の CSS プロパティとして使用することもできます。

## glyphRef

> **警告:** SVG2 では {{SVGElement('glyphRef')}} は非推奨であり、使用すべきではありません。

{{SVGElement('glyphRef')}} の場合、 `x` が文字の x 軸の座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td>
        最初の glyphRef では <code>0</code>、それ以降の兄弟 {{SVGElement('glyphRef')}} では直前の {{SVGElement('glyphRef')}} における末尾の X 座標。
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## image

{{SVGElement('image')}} の場合、 `x` はこの画像の左上隅の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> **メモ:** SVG2 からは、`x` は*幾何プロパティ*であり、この属性は画像用の CSS プロパティとしても使用できます。

## mask

{{SVGElement('mask')}} の場合、 `x` は、その影響する領域の左上隅の X 座標を定義します。この属性の正確な効果は、 {{SVGAttr('maskUnits')}} 属性に影響されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>-10%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## pattern

{{SVGElement('pattern')}} の場合、 `x` はタイルパターンの左上隅の x 座標を定義します。この属性の正確な効果は、 {{SVGAttr('patternUnits')}} と {{SVGAttr('patternTransform')}} 属性に影響されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## rect

{{SVGElement('rect')}} の場合、 `x` は図形の左上隅の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> **メモ:** SVG2 からは、`x` は*幾何プロパティ*であり、この属性は矩形の CSS プロパティとして使用することもできる。

## svg

{{SVGElement('svg')}} の場合、 `x` はそのビューポートの左上隅の x 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> **メモ:** SVG2 からは、`x` は*幾何プロパティ*であり、この属性は `<svg>` の CSS プロパティとして使用することもできます。

## text

{{SVGElement('text')}} にある値が 1 つの場合、 `x` は*コンテンツテキストの位置*を配置しなければならない X 座標を定義します。コンテンツテキストの位置*は、通常、テキストの最初の行のベースライン上の点です。正確な*コンテンツテキスト位置は、 {{SVGAttr('text-anchor')}} や {{cssxref('direction')}} など、他のプロパティの影響を受けます。

複数の値がある場合、`x` はテキストから個々の文字への X 座標を定義します。値が文字よりも少ない場合、残りの文字は最後に配置された文字と一直線上に配置されます。値が文字よりも多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        (<strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >) のリスト
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- horizontal line to materialized the text base line -->
  <line x1="0" y1="40%" x2="100%" y2="40%" />
  <line x1="0" y1="90%" x2="100%" y2="90%" />

  <!-- vertical line to materialized the x positioning -->
  <line x1="25%" y1="0" x2="25%" y2="100%" />
  <line x1="50%" y1="0" x2="50%" y2="100%" />
  <line x1="75%" y1="0" x2="75%" y2="100%" />

  <!-- x with a single value -->
  <text y="40%" x="50%">SVG</text>

  <!-- x with multiple values -->
  <text y="90%" x="25%, 50%, 75%">SVG</text>
</svg>
```

```css
text {
  font: 40px sans-serif;
}

line {
  fill: none;
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 2px;
}
```

{{EmbedLiveSample('text', '100%', 100)}}

## tref

> **警告:** SVG2 では {{SVGElement('tref')}} は非推奨であり、使用すべきではありません。

{{SVGElement('tref')}} にある値が 1 つの場合、 `x` は*コンテンツテキストの位置*を配置しなければならない X 座標を定義します。コンテンツテキストの位置*は、通常、テキストの最初の行のベースライン上の点です。正確な*コンテンツテキスト位置は、 {{SVGAttr('text-anchor')}} や {{cssxref('direction')}} など、他のプロパティの影響を受けます。

複数の値がある場合、`x` はテキストから個々の文字への X 座標を定義します。値が文字よりも少ない場合、残りの文字は最後に配置された文字と一直線上に配置されます。値が文字よりも多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        (<strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >) のリスト
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## tspan

{{SVGElement('tspan')}} にある値が 1 つの場合、 `x` は*コンテンツテキストの位置*を配置しなければならない X 座標を定義します。コンテンツテキストの位置*は、通常、テキストの最初の行のベースライン上の点です。正確な*コンテンツテキスト位置\*は、 {{SVGAttr('text-anchor')}} や {{cssxref('direction')}} など、他のプロパティの影響を受けます。

複数の値がある場合、`x` はテキストから個々の文字への X 座標を定義します。値が文字よりも少ない場合、残りの文字は最後に配置された文字と一直線上に配置されます。値が文字よりも多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        List of (<strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- horizontal line to materialized the text base line -->
  <line x1="0" y1="40%" x2="100%" y2="40%" />
  <line x1="0" y1="90%" x2="100%" y2="90%" />

  <!-- vertical line to materialized the x positioning -->
  <line x1="25%" y1="0" x2="25%" y2="100%" />
  <line x1="50%" y1="0" x2="50%" y2="100%" />
  <line x1="75%" y1="0" x2="75%" y2="100%" />

  <text>
    <!-- x with a single value -->
    <tspan y="40%" x="50%">SVG</tspan>

    <!-- x with multiple values -->
    <tspan y="90%" x="25%, 50%, 75%">SVG</tspan>
  </text>
</svg>
```

```css
text {
  font: 40px sans-serif;
}

line {
  fill: none;
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 2px;
}
```

{{EmbedLiveSample('tspan', '100%', 100)}}

## use

{{SVGElement('use')}} の場合， `x` は参照される要素の左上隅の x 座標を定義します．

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> **メモ:** SVG2 からは、`x` は*幾何プロパティ*であり、この属性は使用される要素の CSS プロパティとしても使用できます。

## 仕様書

{{Specifications}}
