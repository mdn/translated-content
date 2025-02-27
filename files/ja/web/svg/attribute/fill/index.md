---
title: fill
slug: Web/SVG/Attribute/fill
l10n:
  sourceCommit: 5f7c22deaa74973658257aeaa012ac2ec0be87ae
---

{{SVGRef}}

**`fill`** 属性には使われ方により 2 つの意味があります. 1 つは図形やテキストに使われた場合で，その要素を塗りつぶす色 (_またはグラデーションやパターンなどの SVG ペイント サーバー_) を意味します．もう 1 つはアニメーションに使われた場合で，そのアニメーションの最終状態を定義します．

この属性は次の SVG 要素で使用できます。

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

アニメーションとしては次の要素で使われています: {{SVGElement('animate')}}, {{SVGElement('animateMotion')}}, {{SVGElement('animateTransform')}}, {{SVGElement('set')}}.

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
  <!-- Simple color fill -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Fill circle with a gradient -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
  Keeping the final state of an animated circle
  which is a circle with a radius of 40.
  -->
  <circle cx="250" cy="50" r="20">
    <animate
      attributeType="XML"
      attributeName="r"
      from="0"
      to="40"
      dur="5s"
      fill="freeze" />
  </circle>
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## animate

{{SVGElement('animate')}} は、`fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## animateMotion

{{SVGElement('animateMotion')}} は、`fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## animateTransform

{{SVGElement('animateTransform')}} は、`fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## circle

{{SVGElement('circle')}} は、`fill` は円の色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## ellipse

{{SVGElement('ellipse')}} は、`fill` は楕円の色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## path

{{SVGElement('path')}} は、`fill` は図形の内部の色を定義するプレゼンテーション属性です。 (_内部は {{SVGAttr('fill-rule')}} 属性によって定義されます_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## polygon

{{SVGElement('polygon')}} は、`fill` は図形の内部の色を定義するプレゼンテーション属性です。 (_内部は {{SVGAttr('fill-rule')}} 属性によって定義されます_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## polyline

{{SVGElement('polyline')}} は、`fill` は図形の内部の色を定義するプレゼンテーション属性です。 (_内部は {{SVGAttr('fill-rule')}} 属性によって定義されます_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## rect

{{SVGElement('rect')}} は、`fill` は四角形の色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## set

{{SVGElement('set')}} は、`fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## text

{{SVGElement('text')}} は、`fill` はテキストの色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## textPath

{{SVGElement('textPath')}} は、`fill` はテキストの色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## tref

> [!WARNING]
> As of SVG2 {{SVGElement('tref')}} is deprecated and shouldn't be used.

{{SVGElement('tref')}} は、`fill` はテキストの色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## tspan

{{SVGElement('tspan')}} は、`fill` はテキストの色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> プレゼンテーション属性として `fill` を CSS プロパティとして使用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
