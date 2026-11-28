---
title: dy
slug: Web/SVG/Reference/Attribute/dy
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`dy`** 属性は、要素またはそのコンテンツの位置を y 軸に沿ってずらすことを示します。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement('feDropShadow')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('text')}}
- {{SVGElement('tspan')}}

## feDropShadow

{{SVGElement('feDropShadow')}} の場合、`dy` はドロップシャドウの y オフセットを定義します。属性の値を解決するために使用する単位は、 {{SVGElement('filter')}} 要素の {{SVGAttr('primitiveUnits')}} 属性で設定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feOffset

{{SVGElement('feOffset')}} の場合、`dy` はフィルター入力グラフィックの y オフセットを定義します。属性の値を解決するために使用する単位は、 {{SVGElement('filter')}} 要素の {{SVGAttr('primitiveUnits')}} 属性で設定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## text

{{SVGElement('text')}} の場合、それが単一の値を格納していれば、 `dy` はすべてのグリフに対して y 軸方向のシフト量を定義します。

複数の値がある場合、`dy` は個々のグリフに対して、直前のグリフとの相対的な y 軸方向のシフト量を定義します。値の数がグリフの数より少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数より多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        (<strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >) のリスト
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## tspan

{{SVGElement('tspan')}} の場合、それが 1 つの値を格納する場合、 `dy` はすべての代替グリフに対して y 軸に沿ったシフト量を定義します。

複数の値がある場合、`dy` は個々のグリフに対して、直前のグリフとの相対的な y 軸方向のシフト量を定義します。値の数がグリフの数より少ない場合、残りのグリフは `0` の値を使用します。値の数がグリフの数より多い場合は、余分な値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        (<strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >) のリスト
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 例

### テキストのシフト

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- グリフの位置を示す線 -->
  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="0" x2="100%" y1="30%" y2="30%" />
  <line x1="0" x2="100%" y1="80%" y2="80%" />

  <!-- 基準となるテキスト -->
  <text x="10%" y="30%" fill="grey">SVG</text>

  <!-- y 軸に沿ってシフトした同じテキスト -->
  <text dy="50%" x="10%" y="30%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample("テキストのシフト", '100%', 200)}}

### 複数値

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 水平線 -->
  <line x1="0" x2="100%" y1="30" y2="30" />
  <line x1="0" x2="100%" y1="40" y2="40" />
  <line x1="0" x2="100%" y1="50" y2="50" />
  <line x1="0" x2="100%" y1="60" y2="60" />

  <!-- 垂直線 -->
  <line x1="10" x2="10" y1="0" y2="100%" />
  <line x1="50" x2="50" y1="0" y2="100%" />
  <line x1="90" x2="90" y1="0" y2="100%" />

  <!-- 属性の値の個数に応じて動作が変わる -->
  <text dy="20" x="10" y="30">SVG</text>
  <text dy="0 10" x="50" y="30">SVG</text>
  <text dy="0 10 20" x="90" y="30">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample('複数値', '100%', 100)}}

## 仕様書

{{Specifications}}
