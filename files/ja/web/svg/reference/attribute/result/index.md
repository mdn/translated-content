---
title: result
slug: Web/SVG/Reference/Attribute/result
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**`result`** 属性は、このフィルタープリミティブに割り当てられた名前を定義します。この属性が指定されている場合、このフィルタープリミティブの処理結果であるグラフィックスは、同じ {{SVGElement("filter")}} 要素内の後続のフィルタープリミティブの {{SVGAttr("in")}} 属性によって参照することができます。値が指定されていない場合、その出力は、次のフィルタープリミティブが `in` 属性に値を指定していない場合に限り、次のフィルタープリミティブへの暗黙的な入力として再利用可能となります。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
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

{{EmbedLiveSample("Example", 220, 220)}}

## 使用メモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;filter-primitive-reference></code></td>
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

- `<filter-primitive-reference>`
  - : この値は {{cssxref("custom-ident")}} であり、フィルタープリミティブの名前を定義します。これは、指定された {{SVGElement("filter")}} 要素内でのみ意味を持ち、したがってローカルスコープのみを持ちます。同じ `<filter-primitive-reference>` が、同じ `<filter>` 要素内に複数回現れることは許容されます。参照された場合、この値は、指定された結果を持つ、直前にある最も近いフィルタープリミティブを使用します。

## 仕様書

{{Specifications}}
