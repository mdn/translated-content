---
title: <annotation>
slug: Web/MathML/Reference/Element/annotation
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**`<annotation>`** は [MathML](/ja/docs/Web/MathML) の要素で、MathML 式に対する注釈をテキスト形式で指定します。例えば、[LaTeX](https://www.latex-project.org/) などです。

> [!NOTE]
> 注釈は本来、ブラウザーでレンダリングすることを想定されておらず、デフォルトでは非表示になっています。ただし、Firefox や Safari では、{{mathmlelement("semantics")}} 要素の最初の子要素にエラーが含まれている場合や、その要素が存在しない場合、一部の注釈書式がレンダリングされます。

## 属性

この要素の属性には、[MathMLのグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)に加え、以下の属性があります。

- `encoding`
  - : この注釈の意味情報のエンコード形式（例: `"application/x-tex"`）
- `src` {{deprecated_inline}}
  - : 意味情報の外部ソースの場所。

## 例

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<math display="block">
  <semantics>
    <!-- まず、MathML 式がデフォルトでレンダリングされる -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- 軽量マークアップ言語である LaTeX で注釈 -->
    <annotation encoding="application/x-tex">x^{2} + y</annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('example', 700, 200, "", "") }}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
