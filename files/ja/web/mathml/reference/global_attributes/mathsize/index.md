---
title: mathsize
slug: Web/MathML/Reference/Global_attributes/mathsize
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Deprecated_Header}}

**`mathsize`** は[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)で、MathML 要素の[フォントサイズ](/ja/docs/Web/CSS/Reference/Properties/font-size)を設定します。

> [!NOTE]
> 可能な限り、MathML のスタイル設定には CSS を使用してください。`mathsize` 属性は、CSS に対応していないアプリケーションでのみ使用するべきであり、CSS の `font-size` プロパティが設定されている場合は、その値によって上書きされます。

## 例

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}
```

```html
<math display="block">
  <msup mathsize="16px">
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup mathsize="24px">
    <mi>b</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <msup mathsize="32px">
    <mi>c</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

## 構文

```html-nolint
<!-- <length> 値 -->
<math mathsize="12px">
<math mathsize="0.8em">

<!-- <percentage> 値 -->
<math mathsize="80%">
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 正の {{cssxref("&lt;length&gt;")}} 値。ほとんどのフォント相対単位（`em` や `ex` など）では、フォントサイズは親要素のフォントサイズを基準とした値です。

- {{cssxref("&lt;percentage&gt;")}}
  - : 正の {{cssxref("&lt;percentage&gt;")}} 値。親要素のフォントサイズを基準とした値です。

> [!NOTE]
> ブラウザーによっては、[古い MathML の長さ](/ja/docs/Web/MathML/Reference/Values#mathml_における古い長さ)も受け入れることがあります。

## 仕様書

{{Specifications}}

- MathML 3 およびそれ以前のバージョンでは、キーワード `small`、`normal`、`big`、および MathML 3 特定の長さ指定構文が対応していました。
  MathML Core 以降、その構文は CSS の {{cssxref("&lt;length-percentage&gt;")}} の値と一致するようになりました。

- この属性は、CSS に対応していない MathML アプリケーション向けに設計されました。
  MathML Core 以降では、代わりに同等の CSS を使用することが推奨されています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)
- {{cssxref("font-size")}}
