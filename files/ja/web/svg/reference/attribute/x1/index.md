---
title: x1
slug: Web/SVG/Reference/Attribute/x1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`x1`** 属性は、二つ以上の座標を必要とする SVG 要素を描画するための一つ目の x 座標を指定するのに使います。一つしか座標を必要としない要素は、これの代わりに {{SVGAttr("x")}} 属性を使います。

## 要素

この属性は、下記で説明する SVG 要素で使用することができます。

### `<line>`

{{SVGElement('line')}} では、 `x1` は線の開始点の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
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

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="5" y1="1" y2="9" stroke="red" />
  <line x1="5" x2="5" y1="1" y2="9" stroke="green" />
  <line x1="9" x2="5" y1="1" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

### `<linearGradient>`

{{SVGElement('linearGradient')}} に関しては、`x1` は、グラデーションの色経由点をマッピングするのに使われるグラデーションベクトル (_gradient vector_) の開始点の x 座標を定めます。この属性の正確な振る舞いは、{{SVGAttr('gradientUnits')}} 属性の影響を受けます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
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

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  既定では、グラデーション・ベクトルは、適用先の形状を囲う境界の
  左端から始まります。
  -->
  <linearGradient x1="0%" id="g0">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="1" y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  ここでは、グラデーションベクトルは、適用先の形状を囲う境界の
  左端から 80% のところから始まります。
  -->
  <linearGradient x1="80%" id="g1">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="11" y="1" width="8" height="8" fill="url(#g1)" />
</svg>
```

{{EmbedLiveSample('linearGradient', '100%', 200)}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
  <line x1="2" x2="22" y1="5" y2="20" stroke="red" />
  <line x1="12" x2="22" y1="5" y2="20" stroke="green" />
  <line x1="22" x2="22" y1="5" y2="20" stroke="blue" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
