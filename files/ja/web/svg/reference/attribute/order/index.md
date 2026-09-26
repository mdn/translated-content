---
title: order
slug: Web/SVG/Reference/Attribute/order
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`order`** 属性は {{SVGElement("feConvolveMatrix")}} 要素で使用される行列の大きさを示します。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("feConvolveMatrix")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="emboss1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
    <feConvolveMatrix kernelMatrix="3 0 0 -4" order="2" />
  </filter>
  <filter id="emboss2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
    <feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -4" order="3" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#emboss1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#emboss2)" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>3</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : この値は、カーネル行列のそれぞれの次元におけるセルの数を示します。値はゼロより大きい整数 ({{cssxref("integer")}}) でなければなりません。整数でない値は切り捨てられ、つまり、ゼロに近い最も近い整数値に丸められます。最初の数値は、行列の列数を示します。2 つ目数値は、行列の行数を示します。2 つ目の数値が指定されていない場合、デフォルトでは最初の数値と同じ値になります。

    値は小さいもの（例: 3）のみを使用することをお勧めします。大きな値を設定すると、CPU のオーバーヘッドがとても高くなることがあります。通常、パフォーマンスへの影響に見合うだけの成果は得られません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
