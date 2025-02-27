---
title: color-interpolation-filters
slug: Web/SVG/Attribute/color-interpolation-filters
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`color-interpolation-filters`** 属性は、フィルター効果で行う画像操作で用いる色空間を指定します。

> [!NOTE]
> このプロパティはフィルター操作にのみ効果があります。そのため、{{SVGElement("feOffset")}}、{{SVGElement("feImage")}}、{{SVGElement("feTile")}}、{{SVGElement("feFlood")}} などのフィルタープリミティブには効果がありません。
>
> `color-interpolation-filters` のデフォルト値は、{{SVGAttr("color-interpolation")}} とは異なります。`color-interpolation-filters` のデフォルト値は `linearRGB` ですが、`color-interpolation` のデフォルト値は `sRGB` です。そのため、デフォルトでは、フィルター効果の操作は linearRGB 色空間で行われる一方、他のすべての色の補間は sRGB 色空間で行われます。
>
> この属性はフィルター関数には効果がなく、{{Glossary("sRGB")}} 色空間で処理を行います。

> [!NOTE]
> プレゼンテーション属性なので、`color-interpolation-filters` は CSS プロパティとして使用できます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("feSpotLight")}}
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

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可 (離散)</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : ユーザーエージェントが色の補間用に `sRGB` または `linearRGB` 空間を選択してよいことを表します。この値は、作成者が色の補間を特定の色空間で行うことを要求していないことを表します。
- `sRGB`
  - : 色の補間を sRGB 色空間で行うべきであることを表します。
- `linearRGB`
  - : 色の補間を [sRGB の仕様書](https://webstore.iec.ch/publication/6169)に記述されている通りの linearized RGB 色空間で行うべきであることを表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [sRGB の仕様書](https://webstore.iec.ch/publication/6169)
- {{SVGAttr("color-interpolation")}}
