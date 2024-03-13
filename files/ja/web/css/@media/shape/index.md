---
title: shape
slug: Web/CSS/@media/shape
---

{{CSSRef}}

`shape` は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、端末の形状が矩形であるか丸いディスプレイであるかを区別するために使用することができます。

## 構文

`shape` は識別機能であり、四角い画面を表す `rect` または丸や楕円の画面を表す `round` の二つの文字列のうちの一つで指定します。

- `rect`
  - : 形状は長方形か正方形、または角丸矩形などの軸であり、伝統的なデザインが適しています。
- `round`
  - : 形状は丸や、卵型、楕円などの円に似た形状であり、独特の丸いデザインが適しています。

## 例

### 基本的な例

<h4 id="HTML" name="HTML">HTML</h4>

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

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
