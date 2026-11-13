---
title: numOctaves
slug: Web/SVG/Reference/Attribute/numOctaves
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`numOctaves`** 属性は、{{SVGElement("feTurbulence")}} プリミティブのノイズ関数におけるオクターブの数を定義します。

オクターブとは、周波数と振幅によって定義されるノイズ関数です。乱流は、周波数を徐々に上げ、振幅を徐々に下げていく複数のオクターブを積み重ねることで形成されます。
オクターブの数が多いほど、ノイズはより自然に見えます。ただし、オクターブの数が増加すると同時に計算量も要求されるため、パフォーマンスに悪影響を及ぼします。

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
    <feTurbulence baseFrequency="0.025" numOctaves="1" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" numOctaves="3" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#noise1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#noise2)" />
</svg>
```

{{EmbedLiveSample("Example 1", "420", "200")}}

### 例 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence baseFrequency="0.05" numOctaves="3" result="turbulence" />
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
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : オクターブの数値を定義します。負の値は指定できません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Understanding Perlin Noise](https://adrianb.io/2014/08/09/perlinnoise.html)
- {{SVGAttr("baseFrequency")}}
