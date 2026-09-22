---
title: <mprescripts>
slug: Web/MathML/Reference/Element/mprescripts
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<mprescripts>`** は [MathML](/ja/docs/Web/MathML) の要素で、{{ MathMLElement("mmultiscripts") }} 要素内で使用され、前置添字要素（基本式の**前**に配置される下付き文字および上付き文字）の開始を示すために用いられます。

## 属性

この要素は [MathML のグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)に対応しています。

## 例

`<mmultiscripts>` の最初の子要素が基底式となります。残りの子要素は、デフォルトで後置式要素 (a, b) となります。`<mprescripts>` は区切りとして機能し、その後に続く子要素は前置式要素 (c, d) となります。

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- base expression -->
    <mi>a</mi> <!-- post-sub-script -->
    <mi>b</mi> <!-- post-sup-script -->
    <mprescripts />
    <mi>c</mi> <!-- pre-sub-script -->
    <mi>d</mi> <!-- pre-sup-script -->
  </mmultiscripts>
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
      None
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("msub") }} （下付き文字）
- {{ MathMLElement("msup") }} （上付き文字）
- {{ MathMLElement("msubsup") }} （下付き文字と上付き文字の組）
