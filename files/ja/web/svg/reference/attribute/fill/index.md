---
title: fill
slug: Web/SVG/Reference/Attribute/fill
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

**`fill`** 属性には使われ方により 2 つの意味があります. 1 つは図形やテキストに使われた場合で，その要素を塗りつぶす色（またはグラデーションやパターンなどの SVG ペイントサーバー）を意味します．もう 1 つはアニメーションに使われた場合で，そのアニメーションの最終状態を定義します．

> [!NOTE]
> プレゼンテーション属性であるため、 `fill` には対応する CSS プロパティ {{cssxref("fill")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

SVG のプレゼンテーション属性の `fill` と CSS の {{cssxref("fill")}} プロパティは、次の SVG 要素で使用できます。

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

SVG の `fill` 属性は、以下の SVG 要素でアニメーションの最後の状態を定義するために使用することができます。

- {{SVGElement('animate')}}
- {{SVGElement('animateMotion')}}
- {{SVGElement('animateTransform')}}
- {{SVGElement('set')}}.

## 例

### 基本色とグラデーションの塗り潰し、およびアニメーション

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 基本色の塗り潰し -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- 円をグラデーションで塗り潰し -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
  アニメーションの円の最終状態を維持します。これは半径 40 の円です。
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

{{EmbedLiveSample("Basic color and gradient fills, and animation", '100%', 200)}}

### `context-fill` の例

この例では、 {{SVGElement('path')}} 要素を使用して 3 つの図形を定義し、それぞれに異なる [`stroke`](/ja/docs/Web/SVG/Reference/Attribute/stroke) と `fill` の色を設定しています。また、 {{SVGElement('circle')}} 要素を {{SVGElement('marker')}} 要素を介してマーカーとして定義しています。各図形には、CSS の `marker` プロパティを介してマーカーが適用されています。

{{SVGElement('circle')}} には、 `stroke="context-stroke"` および `fill="context-fill"` が設定されています。これは図形のコンテキスト内でマーカーとして設定されているため、これらの属性により、それぞれの場合で {{SVGElement('path')}} 要素に設定された `fill` および `stroke` が継承されます。

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url("#circle");
    }
  </style>
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
        stroke="red" fill="orange" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
        stroke="green" fill="lightgreen" />
  <path d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
        stroke="blue" fill="lightblue" />
  <marker id="circle" markerWidth="12" markerHeight="12"
          refX="6" refY="6" markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2"
            stroke="context-stroke" fill="context-fill"  />
  </marker>
</svg>
```

出力結果は次のようになります。

{{EmbedLiveSample("`context-stroke` example", '100%', 220)}}

> [!NOTE]
> 要素は、 `context-stroke` と `context-fill` を使用して、 {{SVGElement('use')}} 要素によって参照された際に `stroke` と `fill` の値を継承することもできます。

## animate

{{SVGElement('animate')}} において、 `fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>remove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## animateMotion

{{SVGElement('animateMotion')}} において、 `fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>remove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## animateTransform

{{SVGElement('animateTransform')}} において、 `fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>remove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## circle

{{SVGElement('circle')}} において、 `fill` は円の色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## ellipse

{{SVGElement('ellipse')}} において、 `fill` は楕円の色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## path

{{SVGElement('path')}} において、 `fill` は図形の内部の色を定義するプレゼンテーション属性です。 (_内部は {{SVGAttr('fill-rule')}} 属性によって定義されます_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## polygon

{{SVGElement('polygon')}} において、 `fill` は図形の内部の色を定義するプレゼンテーション属性です。（_内部は {{SVGAttr('fill-rule')}} 属性によって定義されます_）

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## polyline

{{SVGElement('polyline')}} において、 `fill` は図形の内部の色を定義するプレゼンテーション属性です。 (_内部は {{SVGAttr('fill-rule')}} 属性によって定義されます_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## rect

{{SVGElement('rect')}} において、 `fill` は四角形の色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## set

{{SVGElement('set')}} において、 `fill` はアニメーションの最終状態を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>freeze</code> (<em>最後のアニメーションフレームの状態を維持</em
        >) | <code>remove</code> (<em
          >最初のアニメーションフレームの状態を維持</em
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

{{SVGElement('text')}} において、 `fill` はテキストの色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## textPath

{{SVGElement('textPath')}} において、 `fill` はテキストの色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## tspan

{{SVGElement('tspan')}} において、 `fill` はテキストの色を定義するプレゼンテーション属性です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("fill")}} プロパティ
