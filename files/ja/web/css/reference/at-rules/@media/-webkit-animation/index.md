---
title: -webkit-animation
slug: Web/CSS/Reference/At-rules/@media/-webkit-animation
original_slug: Web/CSS/@media/-webkit-animation
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> すべてのブラウザーが、ベンダー接頭辞なしの [`animation`](/ja/docs/Web/CSS/Reference/Properties/animation#ブラウザーの互換性) プロパティに対応しています。Chromium ベースのブラウザーではなく、 WebKit (Safari) だけが `-webkit-animation` メディア特性に対応しています。メディアクエリーとして接頭辞なしの `animation` に対応しているブラウザーはありません。代わりに、 [`@supports (animation)`](/ja/docs/Web/CSS/Reference/At-rules/@supports) 機能クエリーを使用してください。

**`-webkit-animation`** は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、 [Chrome 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)であり、ベンダー接頭辞つきの CSS {{cssxref("animation")}} に対応していれば値が `true` になります。

Apple には [Safari CSS リファレンス](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3)に説明があります。

> [!NOTE]
> このメディア特性は WebKit のみが対応しています。可能であれば、代わりに {{cssxref("@supports")}} 機能クエリーを使用してください。

## 構文

`-webkit-animation` メディア特性は論理型で、ベンダー接頭辞つきの CSS アニメーションプロパティに対応していれば `true` になります。

### 値

- `true`
  - : ブラウザーが `-webkit` の接頭辞の付いた CSS {{cssxref("animation")}} に対応しています。
- `false`
  - : ブラウザーは接頭辞つきの CSS アニメーションに対応していません。

## 例

### -webkit-animation の例

```css
@media (-webkit-animation) {
  /* -webkit- 接頭辞が付いたアニメーションに対応しており、かつ、ブラウザーがメディアクエリーとして接頭辞付きのプロパティに対応している場合に使用する CSS */
}
```

## 仕様書

どの標準でも定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`-webkit-transform-3d`](/ja/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/ja/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-2d)
- [`-webkit-transition`](/ja/docs/Web/CSS/Reference/At-rules/@media/-webkit-transition)
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} および [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref("@media")}} および[メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} および[機能クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
