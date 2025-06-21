---
title: -webkit-transition
slug: Web/CSS/@media/-webkit-transition
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}} {{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> すべてのブラウザーが、ベンダー接頭辞なしの [`transition`](/ja/docs/Web/CSS/transition#ブラウザーの互換性) プロパティに対応しています。Chromium ベースのブラウザーではなく、 WebKit (Safari) だけが `-webkit-transition` メディア特性に対応しています。メディアクエリーとして接頭辞なしの `transition` に対応しているブラウザーはありません（ただし、一部のブラウザーは {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} には対応しています）。代わりに、 [`@supports (transition)`](/ja/docs/Web/CSS/@supports) 機能クエリーを使用してください。

**`-webkit-transition`** は [CSS](/ja/docs/Web/CSS) の標準外の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、 [WebKit 拡張](/ja/docs/Web/CSS/WebKit_Extensions)であり、閲覧コンテキストが [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)に対応していれば値が `true` になります。

Apple には [Safari CSS リファレンス](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3)に説明があります。ここでは `transition` と呼ばれるようになりました。

> [!NOTE]
> このメディア特性は使用しないでください。これは仕様化されておらず、広く実装されておらず、[大部分のブラウザーから削除されています](#ブラウザーの互換性)。代わりに {{cssxref("@supports")}} 機能クエリーを使用してください。

## 構文

```css
@media (-webkit-transition) {
  /* トランジションに対応している場合に使用される CSS */
}
```

## 例

## 代わりに @supports を使用してください

`-webkit-transition` メディア特性を使用しないでください。代わりに、次のように CSS の {{cssxref("@supports")}} [アットルール](/ja/docs/Web/CSS/CSS_syntax/At-rule)を用いてトランジションの対応を検査してください。

```css
@supports (transition: initial) {
  /* トランジションに対応している場合に使われる CSS */
}
```

### 廃止された例

廃止される以前、次のように `-webkit-transition` を使用することができました。

```css
@media (-webkit-transition) {
  /* トランジションに対応している場合に使われる CSS */
}
```

## 仕様書

どの標準でも定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transition")}} および [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("@media")}} および[メディアクエリーの使用](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} および[機能クエリーの使用](/ja/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
