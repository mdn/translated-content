---
title: shape
slug: Web/CSS/Reference/At-rules/@media/shape
original_slug: Web/CSS/@media/shape
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{SeeCompatTable}}

`shape` は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、端末の形状が矩形であるか丸いディスプレイであるかを区別するために使用することができます。

## 構文

`shape` は識別機能であり、受付可能な 2 つの文字列のうちのどちらか指定します。`rect` は四角い画面を表し、`round` は円形、楕円形の画面を表します。

- `rect`
  - : 形状は長方形か正方形、または角丸矩形などの軸であり、伝統的なデザインが適しています。
- `round`
  - : 形状は丸や、卵型、楕円などの円に似た形状であり、独特の丸いデザインが適しています。

## 例

### 基本的な例

#### HTML

```html
<h1>Hello World!</h1>
```

#### CSS

```css
h1 {
  text-align: left;
}

@media (shape: rect) {
  h1 {
    text-align: left;
  }
}

@media (shape: round) {
  h1 {
    text-align: center;
  }
}
```

### カスタムスタイルシート

この HTML は、丸い画面を持つ端末に特殊なスタイルシートを適用します。

```html
<head>
  <link rel="stylesheet" href="default.css" />
  <link
    media="screen and (shape: rect)"
    rel="stylesheet"
    href="rectangle.css" />
  <link media="screen and (shape: round)" rel="stylesheet" href="round.css" />
</head>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

この機能を実装しているブラウザーはありません。

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
