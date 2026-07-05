---
title: mathcolor
slug: Web/MathML/Reference/Global_attributes/mathcolor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Deprecated_Header}}

**`mathcolor`** は[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)で、MathML 要素の[色](/ja/docs/Web/CSS/Reference/Properties/color)を設定します。

> [!NOTE]
> 可能な限り、MathML のスタイル設定には CSS を使用してください。`mathcolor` 属性は、CSS に対応していないアプリケーションでのみ使用するべきであり、CSS の `color` プロパティが設定されている場合は、その値によって上書きされます。

## 例

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  align-items: center;
  font-size: 1.5rem;
}
```

```html
<math display="block">
  <msqrt mathcolor="tomato">
    <mi mathcolor="darkgreen">x</mi>
  </msqrt>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

## 構文

```html-nolint
<!-- キーワード値 -->
<math mathcolor="currentColor">

<!-- <named-color> 値 -->
<math mathcolor="red">
<math mathcolor="orange">
<math mathcolor="tan">
<math mathcolor="rebeccapurple">

<!-- <hex-color> 値 -->
<math mathcolor="#090">
<math mathcolor="#009900">
<math mathcolor="#090a">
<math mathcolor="#009900aa">

<!-- <rgb()> 値 -->
<math mathcolor="rgb(34, 12, 64, 0.6)">
<math mathcolor="rgb(34 12 64 / 0.6)">
<math mathcolor="rgb(34.6 12 64 / 60%)">

<!-- <hsl()> 値 -->
<math mathcolor="hsl(30, 100%, 50%, 0.6)">
<math mathcolor="hsl(30 100% 50% / 0.6)">
<math mathcolor="hsl(30.2 100% 50% / 60%)">

<!-- <hwb()> 値 -->
<math mathcolor="hwb(90 10% 10%)">
<math mathcolor="hwb(90 10% 10% / 0.5)">
<math mathcolor="hwb(90deg 10% 10%)">
<math mathcolor="hwb(1.5708rad 60% 0%)">
<math mathcolor="hwb(.25turn 0% 40% / 50%)">
```

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 要素のテキスト部分および装飾部分の色を設定します。
    これには、例えば分数線や根号記号などが含まれます。

## 仕様書

{{Specifications}}

- MathML 3 およびそれ以前のバージョンでは、対応している値の範囲はより限定的でした。
  MathML Core 以降、その構文は CSS の {{cssxref("&lt;color&gt;")}}
  の値と一致するようになりました。

- この属性は、CSS に対応していない MathML アプリケーション向けに設計されました。
  MathML Core 以降では、代わりに同等の CSS を使用することが推奨されています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)
- {{cssxref("color")}}
