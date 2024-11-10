---
title: dx
slug: Web/SVG/Attribute/dx
l10n:
  sourceCommit: 5f7c22deaa74973658257aeaa012ac2ec0be87ae
---

{{SVGRef}}

**`dx`** 属性は、要素やそのコンテンツの位置の x 軸方向のオフセットを示します。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement('feDropShadow')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('glyphRef')}}
- {{SVGElement('text')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

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
  <!-- Lines materialized the position of the glyphs -->
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Some reference text -->
  <text x="10%" y="50%" fill="grey">SVG</text>

  <!-- The same text with a shift along the x-axis -->
  <text dx="50%" x="10%" y="50%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample("Example", '100%', 200)}}

## feDropShadow

{{SVGElement('feDropShadow')}} の場合、`dx` はドロップシャドウの x オフセットを定義します。属性の値を解決するために使用する単位は、 {{SVGElement('filter')}} 要素の {{SVGAttr('primitiveUnits')}} 属性で設定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feOffset

{{SVGElement('feOffset')}} の場合、`dx` はフィルター入力グラフィックの x オフセットを定義します。属性の値を解決するために使用する単位は、 {{SVGElement('filter')}} 要素の {{SVGAttr('primitiveUnits')}} 属性で設定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
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

## glyphRef

> [!WARNING]
> SVG2 において、 {{SVGElement('glyphRef')}} は非推奨であり、使用しないでください。

{{SVGElement('glyphRef')}} の場合、 `dx` はグリフの x オフセットを定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
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

## text

{{SVGElement('text')}} の場合、それが単一の値を格納していれば、 `dx` はすべてのグリフに対して x 軸方向のシフト量を定義します。

複数の値がある場合、`dx` は個々のグリフに対して、直前のグリフとの相対的な x 軸方向のシフト量を定義します。値の数がグリフの数よりも少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数よりも多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        > のリスト
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lines materialized the position of the glyphs -->
  <line x1="0" x2="100%" y1="25%" y2="25%" />
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="0" x2="100%" y1="75%" y2="75%" />

  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="30%" x2="30%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Behaviors change based on the number
       of values in the attributes -->
  <text dx="20%" x="10%" y="25%">SVG</text>
  <text dx="0 10%" x="10%" y="50%">SVG</text>
  <text dx="0 10% 20%" x="10%" y="75%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample('text', '100%', 100)}}

## tref

> [!WARNING]
> SVG2 において、 {{SVGElement('tref')}} は非推奨であり、使用しないでください。

{{SVGElement('tref')}} では、 1 つの値を格納している場合、 `dx` はすべてのグリフに対する x 軸方向のシフト量を定義します。

複数の値がある場合、`dx` は個々のグリフに対して、直前のグリフとの相対的な x 軸方向のシフト量を定義します。値の数がグリフの数よりも少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数よりも多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        List of
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## tspan

{{SVGElement('tspan')}} の場合、それが 1 つの値を格納する場合、 `dx` はすべての代替グリフに対して x 軸に沿ったシフト量を定義します。

複数の値がある場合、`dx` は個々のグリフに対して、直前のグリフとの相対的な x 軸方向のシフト量を定義します。値の数がグリフの数よりも少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数よりも多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        > のリスト
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}
