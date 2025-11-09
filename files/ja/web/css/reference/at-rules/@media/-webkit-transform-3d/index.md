---
title: -webkit-transform-3d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-3d
original_slug: Web/CSS/@media/-webkit-transform-3d
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

**`-webkit-transform-3d`** は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で [WebKit 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)であり、ベンダー接頭辞付きの CSS 3D {{cssxref("transform")}} に対応していれば値が `true` になります。

> [!NOTE]
> このメディア特性は現在、[大部分のブラウザーで対応しています](#ブラウザーの互換性)が、可能であれば、代わりに {{cssxref("@supports")}} 機能クエリーを使用してください。

## 構文

`-webkit-transform-3d` は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)であり、ベンダー接頭辞付きの CSS 3D {{cssxref("transform")}} に対応していれば値が `true` になります。

### 値

- `true`
  - : ブラウザーは 3D の CSS 座標変換に `-webkit` の接頭辞つきで対応しています。
- `false`
  - : 3D の CSS 座標変換で `-webkit` の接頭辞が付いたものはブラウザーが対応していません。

## 例

### -webkit-transform-3d のメディアクエリーの例

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

ブラウザーの対応を調べるよりよい方法は、機能クエリーをすることです。

```css
@supports (transform-style) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} および [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} および[メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} および[機能クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
