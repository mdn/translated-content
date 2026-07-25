---
title: <mfenced>
slug: Web/MathML/Reference/Element/mfenced
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{Deprecated_Header}}{{Non-standard_Header}}

**`<mfenced>`** [MathML](/ja/docs/Web/MathML) 要素は、式に任意の開始・終了括弧（丸括弧など）や区切り文字（カンマやセミコロンなど）を追加する機能を提供します。

> [!NOTE]
> 歴史的には、 `<mfenced>` 要素はフェンス式を書くための省略記法として定義され、 {{MathMLElement("mrow")}} と {{MathMLElement("mo")}} 要素を含む展開形に等しいものでした。現在では、代わりにその等価な形式を使用することが推奨されています。

## 属性

この要素の属性には[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)があります。

- `close`
  - : 閉じ記号の文字列です。既定値は `")"` です。ホワイトスペースはすべて削除されます。
- `open`
  - : 開き記号の文字列です。既定値は `"("` です。ホワイトスペースはすべて削除されます。
- `separators`
  - : 区切り記号を表すゼロ個以上の文字の列です。ホワイトスペースで区切っても構いません（無視されます）。既定値は "," です。複数指定することにより，各子要素間に別個の区切り記号を当てることが出来ます。余分に指定した分は無視されます。少なく指定した場合は，最後のものが繰り返されます。

## 例

### 最後の区切り記号 (`,`) は繰り返される

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

```html
<math display="block">
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

レンダリング例:

![{a;b;c,d,e}](mfenced-repeated.svg)

このブラウザーでのレンダリング:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

### 余分な区切り記号 (`,`) は無視される

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

```html
<math display="block">
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

レンダリング例:

![[a|b|c|d|e]](mfenced-ignored.svg)

このブラウザーでのレンダリング:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

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

`<mfenced>` はブラウザーに向けた仕様書にはどこにも定義されていませんが、 [MathML 4](https://w3c.github.io/mathml/#presm_mfenced) に説明が見られます。

## ブラウザーの互換性

{{Compat}}
