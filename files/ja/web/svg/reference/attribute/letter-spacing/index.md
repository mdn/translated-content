---
title: letter-spacing
slug: Web/SVG/Reference/Attribute/letter-spacing
l10n:
  sourceCommit: da8c3171b7a7ea6694af71fac7a3194d8e9ba869
---

**`letter-spacing`** 属性は、テキスト文字間の間隔を制御します。

属性値が単位のない数値（`128` など）の場合、ブラウザーはそれを現在のユーザー座標系における {{cssxref("length")}} として処理します。

属性値に `.25em` や `1%` などの単位識別子が指定されている場合、ブラウザーは `<length>` を現在のユーザー座標系における対応する値に変換します。

> [!NOTE]
> プレゼンテーション属性であるため、 `letter-spacing` には対応する CSS プロパティ {{cssxref("letter-spacing")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

### SVG の字間の制御

```html
<svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" letter-spacing="2">字間を広く</text>
  <text x="200" y="20" letter-spacing="-0.5">字間を狭く</text>
</svg>
```

{{EmbedLiveSample}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明は、 [CSS の `letter-spacing`](/ja/docs/Web/CSS/Reference/Properties/letter-spacing#値) プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("letter-spacing")}} プロパティ
