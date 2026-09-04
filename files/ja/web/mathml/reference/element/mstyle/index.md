---
title: <mstyle>
slug: Web/MathML/Reference/Element/mstyle
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

**`<mstyle>`** [MathML](/ja/docs/Web/MathML) 要素は、その子要素のスタイルを変更するために使用されます。

> [!NOTE]
> 従来、この要素はほぼすべての MathML 属性を受け入れており、子要素のデフォルト値を上書きするために使用されていました。その後、既存のウェブページで使用されていた、関連するごくいくつかのスタイル属性のみに制限されることになりました。現在では、これらのスタイル属性は[すべての MathML 要素に共通](/ja/docs/Web/MathML/Reference/Global_attributes)となっているため、`<mstyle>` は事実上、[`<mrow>`](/ja/docs/Web/MathML/Reference/Element/mrow) 要素と同等です。ただし、ブラウザー以外の MathML 実装との互換性を確保する上で、`<mstyle>` は引き続き有用である可能性があります。

## 属性

この要素の属性には、[グローバルな MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加え、以下の非推奨の属性があります。

- `background` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 代わりに CSS の {{cssxref("color")}} プロパティを使用してください。
- `fontsize` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 代わりに CSS の {{cssxref("font-size")}} プロパティを使用してください。
- `fontstyle` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 代わりに CSS の {{cssxref("font-style")}} プロパティを使用してください。
- `fontweight` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 代わりに CSS の {{cssxref("font-weight")}} プロパティを使用してください。

## 例

### CSS に対応づけられた属性

次の例では、[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes) の `displaystyle` および `mathcolor` を使用して、それぞれ子要素の `<munder>` および `<munderover>` の {{cssxref("math-style")}} および {{cssxref("color")}} を上書きしています。

```html
<math display="block">
  <mstyle displaystyle="false" mathcolor="teal">
    <munder>
      <mo>∑</mo>
      <mi>I</mi>
    </munder>
    <munderover>
      <mo>∏</mo>
      <mrow>
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mi>N</mi>
    </munderover>
  </mstyle>
</math>
```

{{EmbedLiveSample('Attributes mapped to CSS')}}

### 古い添字属性

次の例は、{{cssxref("font-size")}} が `128pt` に設定された数式を表示しています。この数式には、入れ子になった上付き文字で表記された数値に加え、古い属性である `scriptsizemultiplier` および `scriptminsize` を持つ `<mstyle>` 要素が含まれています。それぞれの上付き文字を入力する際、`font-size` に `0.5` が乗算されますが、これにより文字サイズが `16pt` 未満にならない限り、この処理が行われます。

```html
<math display="block">
  <mstyle scriptsizemultiplier="0.5" scriptminsize="16pt">
    <msup>
      <mn>2</mn>
      <msup>
        <mn>2</mn>
        <msup>
          <mn>2</mn>
          <msup>
            <mn>2</mn>
            <msup>
              <mn>2</mn>
              <msup>
                <mn>2</mn>
                <mn>2</mn>
              </msup>
            </msup>
          </msup>
        </msup>
      </msup>
    </msup>
  </mstyle>
</math>
```

```css
math {
  font-size: 128pt;
}
```

{{EmbedLiveSample('Legacy script attributes', 700, 400)}}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
