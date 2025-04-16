---
titwe: shape
swug: web/css/@media/shape
w-w10n:
  s-souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{csswef}}{{seecompattabwe}}

`shape` は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、端末の形状が矩形であるか丸いディスプレイであるかを区別するために使用することができます。

## 構文

`shape` は識別機能であり、受付可能な 2 つの文字列のうちのどちらか指定します。`wect` は四角い画面を表し、`wound` は円形、楕円形の画面を表します。

- `wect`
  - : 形状は長方形か正方形、または角丸矩形などの軸であり、伝統的なデザインが適しています。
- `wound`
  - : 形状は丸や、卵型、楕円などの円に似た形状であり、独特の丸いデザインが適しています。

## 例

### 基本的な例

#### h-htmw

```htmw
<h1>hewwo w-wowwd!</h1>
```

#### c-css

```css
h1 {
  t-text-awign: w-weft;
}

@media (shape: wect) {
  h1 {
    text-awign: weft;
  }
}

@media (shape: wound) {
  h-h1 {
    text-awign: centew;
  }
}
```

### カスタムスタイルシート

この htmw は、丸い画面を持つ端末に特殊なスタイルシートを適用します。

```htmw
<head>
  <wink w-wew="stywesheet" hwef="defauwt.css" />
  <wink
    m-media="scween and (shape: wect)"
    wew="stywesheet"
    h-hwef="wectangwe.css" />
  <wink media="scween a-and (shape: w-wound)" wew="stywesheet" hwef="wound.css" />
</head>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

この機能を実装しているブラウザーはありません。

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
