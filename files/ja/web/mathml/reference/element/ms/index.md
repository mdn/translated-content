---
title: <ms>
slug: Web/MathML/Reference/Element/ms
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<ms>`** は [MathML](/ja/docs/Web/MathML) の要素で、プログラミング言語やコンピュータ代数システムによって解釈されることを意図した**文字列**リテラルを表します。

## 属性

この要素の属性には、[MathML のグローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)があります。

## 例

### デフォルトのレンダリング

```html
<math display="block">
  <ms>Hello World!</ms>
</math>
```

{{ EmbedLiveSample('default_rendering', 700, 200, "", "") }}

### 古い quote 属性

```html
<math display="block">
  <ms lquote="„" rquote="'">abc</ms>
</math>
```

{{ EmbedLiveSample('legacy_quote_attributes', 700, 200, "", "") }}

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
