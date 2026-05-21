---
title: type
slug: Web/SVG/Reference/Attribute/type
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

`type` 属性は汎用的な属性であり、使用されるコンテキストによって意味が異なります。

- {{SVGElement("animateTransform")}} 要素では、これは時間経過に伴う値の変化を伴う座標変換の型を定義するものです。
- {{SVGElement("feColorMatrix")}} 要素では、これは行列演算の種類を示しています。キーワード `matrix` は、5x4 の完全な行列が指定されることを示しています。その他のキーワードは、完全な行列を指定することなく、よく使用されている色操作を実行することができる便利な近道を表します。
- {{SVGElement("feFuncR")}}、{{SVGElement("feFuncG")}}、{{SVGElement("feFuncB")}}、{{SVGElement("feFuncA")}} の各要素では、成分の変換関数の種類を示します。
- {{SVGElement("feTurbulence")}} 要素では、これはフィルタープリミティブがノイズ関数を実行すべきか、それとも乱流関数を実行すべきかを示します。
- {{SVGElement("style")}} および {{SVGElement("script")}} 要素については、その要素のコンテンツタイプを定義します。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("script")}}
- {{SVGElement("style")}}

## 使用コンテキスト

### &lt;animateTransform&gt; 要素の場合

SVG 要素: {{SVGElement("animateTransform")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">カテゴリー</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong><code>translate</code></strong> | <code>scale</code> |
        <code>rotate</code> | <code>skewX</code> | <code>skewY</code>
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">規格文書</th>
      <td>
        <a
          href="https://svgwg.org/specs/animations/#AnimateTransformElementTypeAttribute"
          >Scalable Vector Graphics (SVG) 2</a
        >
      </td>
    </tr>
  </tbody>
</table>

### &lt;feColorMatrix&gt; 要素の場合

SVG 要素: {{SVGElement("feColorMatrix")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">カテゴリー</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong><code>matrix</code></strong> | <code>saturate</code> |
        <code>hueRotate</code> | <code>luminanceToAlpha</code>
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">規格文書</th>
      <td>
        <a
          href="https://drafts.csswg.org/filter-effects-1/#element-attrdef-fecolormatrix-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### &lt;feFuncR&gt;, &lt;feFuncG&gt;, &lt;feFuncB&gt;, &lt;feFuncA&gt; 要素の場合

SVG 要素: {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">カテゴリー</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>identity</code> | <code>table</code> | <code>discrete</code> |
        <code>linear</code> | <code>gamma</code>
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">規格文書</th>
      <td>
        <a
          href="https://drafts.csswg.org/filter-effects-1/#element-attrdef-fecomponenttransfer-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### &lt;feTurbulence&gt; 要素の場合

SVG 要素: {{SVGElement("feTurbulence")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">カテゴリー</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>fractalNoise</code> | <strong><code>turbulence</code></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">規格文書</th>
      <td>
        <a
          href="https://drafts.csswg.org/filter-effects-1/#element-attrdef-feturbulence-type"
          rel="external"
          >Filter Effects Module Level 1</a
        >
      </td>
    </tr>
  </tbody>
</table>

### &lt;style&gt; and &lt;script&gt; 要素の場合

SVG 要素: {{SVGElement("style")}}, {{SVGElement("script")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">カテゴリー</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>&#x3C;media-type></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">規格文書</th>
      <td>
        <a
          href="https://svgwg.org/svg2-draft/interact.html#ScriptElementTypeAttribute"
          rel="external"
          >Scalable Vector Graphics (SVG) 2</a
        ><br /><a
          href="https://svgwg.org/svg2-draft/styling.html#StyleElementTypeAttribute"
          rel="external"
          >Scalable Vector Graphics (SVG) 2</a
        >
      </td>
    </tr>
  </tbody>
</table>
