---
title: operator
slug: Web/SVG/Reference/Attribute/operator
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`operator`** 属性には、使用するコンテキストに応じて 2 つの意味があります。合成またはモルフォロジー演算のいずれかを定義します。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("feComposite")}}
- {{SVGElement("feMorphology")}}

## feComposite

{{SVGElement("feComposite")}} において、`operator` は実行する合成演算を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>over</code> | <code>in</code> | <code>out</code> |
        <code>atop</code> | <code>xor</code> | <code>lighter</code> |
        <code>arithmetic</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>over</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `over`
  - : {{SVGAttr("in")}} 属性で定義されたソース画像を、{{SVGAttr("in2")}} 属性で定義された宛先画像の上に配置します。
- `in`
  - : `in` 属性で定義されたソース画像のうち、`in2` 属性で定義された宛先画像と重なる部分が宛先画像を置き換えます。
- `out`
  - : `in` 属性で定義されたソース画像のうち、`in2` 属性で定義された宛先画像の外側にある部分を表示します。
- `atop`
  - : `in` 属性で定義されたソース画像のうち、`in2` 属性で定義された宛先画像と重なる部分が宛先画像を置き換えます。ソース画像と重ならない宛先画像の部分は変更されません。
- `xor`
  - : `in` 属性で定義されたソース画像と `in2` 属性で定義された宛先画像のうち、重ならない領域を合成します。
- `lighter`
  - : `in` 属性で定義されたソース画像と `in2` 属性で定義された宛先画像の合計を表示します。
- `arithmetic`
  - : `in` 属性で定義されたソース画像と `in2` 属性で定義された宛先画像を、次の式を使用して合成します。

    `result = k1*i1*i2 + k2*i1 + k3*i2 + k4`

    ここで、`i1` と `i2` は入力画像に対応するピクセルチャンネル値で、それぞれ `in` と `in2` に対応します。{{SVGAttr("k1")}}、{{SVGAttr("k2")}}、{{SVGAttr("k3")}}、{{SVGAttr("k4")}} は、同名の属性の値を示します。

## feMorphology

{{SVGElement("feMorphology")}} において、`operator` はソース画像を収縮 (細くする) または膨張 (太くする) のどちらにするかを定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>erode</code> | <code>dilate</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>erode</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `erode`
  - : {{SVGAttr("in")}} 属性で定義されたソース画像を細くします。
- `dilate`
  - : `in` 属性で定義されたソース画像を太くします。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
  font:
    20px "Helvetica",
    "Arial",
    sans-serif;
}
```

```html
<svg viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
  <filter id="erode">
    <feMorphology operator="erode" radius="0.4" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="0.8" />
  </filter>

  <text x="0" y="15">通常のテキスト</text>
  <text x="0" y="40" filter="url(#erode)">細いテキスト</text>
  <text x="0" y="65" filter="url(#dilate)">太いテキスト</text>
</svg>
```

{{EmbedLiveSample("Example", "240", "200")}}

## 仕様書

{{Specifications}}
