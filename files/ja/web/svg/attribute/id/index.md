---
title: id
slug: Web/SVG/Attribute/id
---

{{SVGRef}}

**`id`** 属性は要素に固有の名前を割り当てます。

すべての要素がこの属性を使用します。

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
    <![CDATA[
      #smallRect {
        stroke: #000066;
        fill: #00cc00;
      }
    ]]>
  </style>

  <rect id="smallRect" x="10" y="10" width="100" height="100" />
</svg>
```

{{EmbedLiveSample("topExample", "120", "120")}}

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>&#x3C;id></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

- \<id>

  - : 要素の ID を指定します。 ID はノードツリー内で固有でなければならず、空文字列であってはならず、ホワイトスペース文字を含んではなりません。

    > **メモ:** URL の対象フラグメントとして使用されるときに `id` の値に SVG view 仕様書として解釈される値 (例えば `MyDrawing.svg#svgView(viewBox(0,200,1000,1000))`) や、基本メディアフラグメントを使用しないでください。

    XML 文書内で妥当でなければなりません。独立した SVG 文書は XML 1.0 の構文を使用しており、有効な ID は指定された文字 (文字、数字、いくつかの句読点) のみを含み、数字、フルストップ (.) 文字、ハイフンマイナス (-) 文字で始まらないことを指定しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML `id`](/ja/docs/Web/HTML/Global_attributes/id)
- {{SVGAttr("class")}}
