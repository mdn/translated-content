---
title: -webkit-transform-2d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-2d
original_slug: Web/CSS/@media/-webkit-transform-2d
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{ Non-standard_header }}

> [!NOTE]
> すべてのブラウザーが、ベンダー接頭辞なしの [`transform`](/ja/docs/Web/CSS/Reference/Properties/transform#ブラウザーの互換性) プロパティに対応しています。Chromium ベースのブラウザーではなく、 WebKit (Safari) だけが `-webkit-transform-2d` メディア特性に対応しています。メディアクエリーとして接頭辞や `2d` なしの `transform` に対応しているブラウザーはありません代わりに、 [`@supports (transform)`](/ja/docs/Web/CSS/Reference/At-rules/@supports) 機能クエリーを使用してください。

**`-webkit-transform-2d`** は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性) で [WebKit 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)であり、ベンダー接頭辞付きの CSS の 2D {{cssxref("transform")}} に対応していれば値が `true` になります。

Apple には [Safari CSS リファレンス](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3)に説明があります。

## 構文

`-webkit-transform-2d` は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性) であり、 `-webkit` 接頭辞付きの CSS の 2D の {{cssxref("transform")}} に対応していれば値が `true` になります。

### 値

- `true`
  - : ブラウザーは 2D の CSS 座標変換に `-webkit` の接頭辞つきで対応しています。
- `false`
  - : 2D の CSS 座標変換で `-webkit` の接頭辞が付いたものはブラウザーが対応していません。

## 例

### 基本的な例

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

このメディア機能は WebKit のみが対応しています。接頭辞のない [`transform`](/ja/docs/Web/CSS/Reference/Properties/transform) プロパティは、現在のすべてのブラウザーが対応しています。可能であれば、代わりに {{cssxref("@supports")}} 機能クエリーを使用してください。

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## 仕様書

どの標準でも定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} および [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} および[メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} および[機能クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
