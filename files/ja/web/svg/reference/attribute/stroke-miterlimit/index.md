---
title: stroke-miterlimit
slug: Web/SVG/Reference/Attribute/stroke-miterlimit
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stroke-miterlimit`** 属性はプレゼンテーション属性で、制限長をマイター長とマイター接続に使用する {{ SVGAttr("stroke-width") }} の比率で定義します。制限長を超えると、接続はマイターからベベルへと変更されます。

> [!NOTE]
> プレゼンテーション属性であるため、 `stroke-miterlimit` には対応する CSS プロパティ {{cssxref("stroke-miterlimit")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
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
<svg viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg">
  <!-- 既定のマイター制限の影響 -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    id="p1"
    d="M1,9 l7   ,-3 l7   ,3
       m2,0 l3.5 ,-3 l3.5 ,3
       m2,0 l2   ,-3 l2   ,3
       m2,0 l0.75,-3 l0.75,3
       m2,0 l0.5 ,-3 l0.5 ,3" />

  <!-- 最小のマイター制限の影響 (1) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="1"
    id="p2"
    d="M1,19 l7   ,-3 l7   ,3
       m2, 0 l3.5 ,-3 l3.5 ,3
       m2, 0 l2   ,-3 l2   ,3
       m2, 0 l0.75,-3 l0.75,3
       m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- 大きなマイター制限の影響 (8) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="8"
    id="p3"
    d="M1,29 l7   ,-3 l7   ,3
       m2, 0 l3.5 ,-3 l3.5 ,3
       m2, 0 l2   ,-3 l2   ,3
       m2, 0 l0.75,-3 l0.75,3
       m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- 次のピンク色の行は、各ストロークのパスの位置をハイライトします。 -->
  <path
    stroke="pink"
    fill="none"
    stroke-width="0.05"
    d="M1, 9 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,29 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 400)}}

{{ SVGAttr("stroke-linejoin") }} で `miter` 結合が指定されている場合、マイターはパスを描く線の太さを大きく超える可能性があります。 `stroke-miterlimit` の比率は、いつ限界を超えるかを定義するために使用され、超えた場合、結合はマイターからベベルに変換されます。

マイター長（マイターの外側の先端から内側の角までの距離）と {{ SVGAttr("stroke-width") }} の比は、ユーザー空間における直線間の角度 (theta) から直接数式で求められます。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

例えば、マイター制限を 1.414 とすると、マイターが 90 度未満の場合にベベルに変換され、 4.0 とすると約 29 度未満、 10.0 とすると約 11.5 度未満の場合にベベルに変換されることになります。

## 使用コンテキスト

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

`stroke-miterlimit` の値は 1 以上でなければなりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("stroke-miterlimit")}} プロパティ
