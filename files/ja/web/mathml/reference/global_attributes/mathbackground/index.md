---
title: mathbackground
slug: Web/MathML/Reference/Global_attributes/mathbackground
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Deprecated_Header}}

**`mathbackground`** は[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)で、MathML 要素の[背景色](/ja/docs/Web/CSS/Reference/Properties/background-color)を設定します。

> [!NOTE]
> 可能な限り、MathML のスタイル設定には CSS を使用してください。`mathbackground` 属性は、CSS に対応していないアプリケーションでのみ使用するべきであり、CSS の `background-color` プロパティが設定されている場合は、その値によって上書きされます。

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
<math display="block" mathbackground="wheat">
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

## 構文

```html-nolint
<!-- キーワード値 -->
<math mathbackground="red">
<math mathbackground="indigo">

<!-- 16 進値 -->
<math mathbackground="#bbff00"> <!-- 完全不透明 -->
<math mathbackground="#bf0"> <!-- 完全不透明の短縮形 -->
<math mathbackground="#11ffee00"> <!-- 完全に透明 -->
<math mathbackground="#1fe0"> <!-- 完全に透明の短縮形 -->
<math mathbackground="#11ffeeff"> <!-- 完全不透明 -->
<math mathbackground="#1fef"> <!-- 完全不透明の短縮形 -->

<!-- RGB 値 -->
<math mathbackground="rgb(255 255 128)"> <!-- 完全不透明 -->
<math mathbackground="rgb(117 190 218 / 50%)"> <!-- 50% 半透明 -->

<!-- HSL 値 -->
<math mathbackground="hsl(50 33% 25%)"> <!-- 完全不透明 -->
<math mathbackground="hsl(50 33% 25% / 75%)"> <!-- 75% 不透明、すなわち 25% 半透明 -->
```

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 背景の単一色。

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
- {{cssxref("background-color")}}
