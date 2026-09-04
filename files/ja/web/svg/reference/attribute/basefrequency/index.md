---
title: baseFrequency
slug: Web/SVG/Reference/Attribute/baseFrequency
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`baseFrequency`** 属性は、{{SVGElement("feTurbulence")}} フィルタープリミティブのノイズ関数における基本周波数パラメーターを表します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("feTurbulence")}}

## 例

### 例 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.05" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#noise1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#noise2)" />
</svg>
```

{{EmbedLiveSample("Example 1", "220", "220")}}

### 例 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Example 2", "220", "250")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <a href="/ja/docs/Web/SVG/Guides/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
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

- `<number-optional-number>`
  - : 2 つの数値が提供された場合、1 つ目は水平方向の基本周波数を、2 つ目は垂直方向の基本周波数を表します。1 つの数値が指定された場合は、その値が x 軸と y 軸の両方に使用されます。

    負の値は使用できません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
