---
title: <maction>
slug: Web/MathML/Reference/Element/maction
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{Deprecated_Header}}

**`<maction>`** は [MathML](/ja/docs/Web/MathML) の要素で、数式にアクションを結びつけることができます。デフォルトでまず最初の子要素のみがレンダリングされますが、一部のブラウザーでは `actiontype` および `selection` 属性を考慮して、独自の動作を実装する場合があります。

> [!NOTE]
> 過去には、この要素は MathML の数式をインタラクティブにする仕組みを提供していました。現在では、この用途を実装するには、[JavaScript](/ja/docs/Web/JavaScript) などのウェブ技術を利用することが推奨されています。

## 属性

この要素の属性には、[MathML のグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加え、以下の属性があります。

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : この要素に対してどのような動作が行われるかを指定するアクションです。一部のブラウザーでは、以下の値に対して特別な動作が実装されています。
    - `statusline`: 式がクリックされたり、読者がその上にポインターを移動したりした場合、メッセージがブラウザーのステータス行に表示されます。構文は `<maction actiontype="statusline">式のメッセージ</maction>` の形です。
    - `toggle`: 部分式をクリックすると、選択された部分式の表示が交互に切り替わります。したがって、それぞれのクリックで `selection` の値が 1 ずつ増加します。
      構文は `<maction actiontype="toggle" selection="positive-integer" > 式1 式2 式N </maction>` の形です。

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在表示されている子要素。`actiontype="toggle"` または標準外の `actiontype` 値の場合にのみ考慮されます。デフォルト値は `1` で、これはまず最初の子要素を指します。

## 例

次の例では、"toggle" という `actiontype` を使用しています。

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-content: center;
}

math {
  font-size: 1.5em;
}

maction {
  padding: 0.5em;
  cursor: pointer;
}
```

```html
<p>この式を何度かクリックしてみてください。</p>
<math display="block">
  <maction actiontype="toggle">
    <mfrac>
      <mn>6</mn>
      <mn>8</mn>
    </mfrac>

    <mfrac>
      <mrow>
        <mn>3</mn>
        <mo>×</mo>
        <mn>2</mn>
      </mrow>
      <mrow>
        <mn>4</mn>
        <mo>×</mo>
        <mn>2</mn>
      </mrow>
    </mfrac>

    <mfrac>
      <mn>3</mn>
      <mn>4</mn>
    </mfrac>
  </maction>
</math>
```

レンダリングの例です。

![MathML のトグルアクションの例](toggle.gif)

ブラウザーでの表示：

{{EmbedLiveSample('Examples', 700, 200)}}

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
