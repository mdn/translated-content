---
title: text-anchor
slug: Web/SVG/Attribute/text-anchor
l10n:
  sourceCommit: 58313eeb2415546be9763dc691b6d519433c6dbb
---

{{SVGRef}}

**`text-anchor`** 属性は、整形済みテキストや、折り返し領域が指定された基準点から {{cssxref("inline-size")}} で指定された領域となる自動折り返しテキストの文字列の位置揃え（行の先頭、中央、末尾揃え）に使用されます。

この属性は、他の種類の自動折り返しテキストには適用されません。そのような場合は、 {{cssxref("text-align")}} を使用してください。複数行のテキストの場合、配置は各行に対して行われます。

`text-anchor` 属性は、指定された {{SVGElement("text")}} 要素内の個々のテキストの塊に適用されます。それぞれのテキストの塊には、現在のテキストの初期位置があり、これはユーザー座標系における点を表します。 `<text>` 要素の {{SVGAttr("x")}} および {{SVGAttr("y")}} 属性、 {{SVGElement("tspan")}} または {{SVGElement("tref")}} 要素でテキストの塊の最初に描画される文字に明示的に割り当てられた `x` 属性または `y` 属性、または {{SVGElement("textPath")}} 要素の現在のテキストの初期位置の決定（コンテキストに応じて）の結果として生じるものです。

> [!NOTE]
> プレゼンテーション属性であるため、 `text-anchor` は CSS プロパティとして使用できます。詳しくは {{cssxref('text-anchor')}} を参照してください。

この属性は次の SVG 要素で使用することができます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- アンカーの素材 -->
  <path
    d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110"
    stroke="grey" />

  <!-- アンカーの実例 -->
  <text text-anchor="start" x="60" y="40">A</text>
  <text text-anchor="middle" x="60" y="75">A</text>
  <text text-anchor="end" x="60" y="110">A</text>

  <!-- アンカーの素材 -->
  <circle cx="60" cy="40" r="3" fill="red" />
  <circle cx="60" cy="75" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
      text {
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
      ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Example", "120", "120")}}

## 使用方法のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">既定値</th>
      <td><code>start</code></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td><code>start</code> | <code>middle</code> | <code>end</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

- `start`
  - : レンダリングされる文字は、テキスト文字列の先頭が現在のテキスト位置の初期位置にくるように配置されます。 {{cssxref("direction")}} プロパティ値が `ltr` （ほとんどのヨーロッパ言語で一般的）である要素の場合、テキストの左端がテキストの初期位置に描画されます。 `direction` プロパティ値が `rtl` （アラビア語やヘブライ語で一般的）である要素の場合、テキストの右端がテキストの初期位置に描画されます。主テキスト方向が縦書き（アジアのテキストで多い）である要素の場合、テキストの上端がテキストの初期位置に描画されます。
- `middle`
  - : レンダリングされる文字は、テキスト文字列の中央が現在のテキスト位置にくるように配置されます。（パス上のテキストの場合、概念的には、まずテキスト文字列が直線上にレイアウトされます。テキスト文字列の開始位置と末尾位置の中心点が決定されます。次に、テキスト文字列は、この中心点が現在のテキスト位置に置かれた状態でパス上に割り当てられます。）
- `end`
  - : レンダリングされる文字は、レンダリングされたテキストの末尾（`text-anchor` プロパティを適用する前のテキストの最終的な現在位置）が、最初の現在位置に来るように移動されます。 `direction` プロパティ値が `ltr` （ほとんどのヨーロッパ言語で一般的）である要素の場合、テキストの右端がテキストの初期位置に描画されます。 `direction` プロパティの値が `rtl` （アラビア語やヘブライ語に多い）である要素の場合、テキストの左端がテキストの初期位置に表示されます。主テキスト方向が縦書き（アジアのテキストに多い）である要素の場合、テキストの下端が初期テキスト位置に表示されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGElement("text")}} 要素
- CSS の {{cssxref('text-anchor')}} プロパティ
