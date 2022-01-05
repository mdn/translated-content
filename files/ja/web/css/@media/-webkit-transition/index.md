---
title: '-webkit-transition'
slug: Web/CSS/@media/-webkit-transition
tags:
  - '@media'
  - Blink
  - CSS
  - 非推奨
  - 標準外
  - リファレンス
  - WebKit
  - メディア特性
browser-compat: css.at-rules.media.-webkit-transition
translation_of: Web/CSS/@media/-webkit-transition
---
{{ CSSRef }} {{deprecated_header}} {{ Non-standard_header }}

**`-webkit-transition`** は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、 [Chrome 拡張](/ja/docs/Web/CSS/WebKit_Extensions)であり、閲覧コンテキストが [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)に対応していれば値が `true` になります。 WebKit または Blink 以外を使用したブラウザーでは対応していません。

Apple には [Safari CSS リファレンス](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3)に説明があります。ここでは `transition` と呼ばれるようになりました。

> **Note:** このメディア特性は使用しないでください。これは仕様化されておらず、広く実装されておらず、すべてのブラウザーから削除されています。代わりに {{cssxref("@supports")}} 特性クエリーを使用してください。

## 構文

```css
@media (-webkit-transition) {
  /* トランジションに対応している場合に使用される CSS */
}
```

## 例

## 代わりに @supports を使用してください

`-webkit-transition` メディア特性を使用しないでください。代わりに、次のように CSS の {{cssxref("@supports")}} [アットルール](/ja/docs/Web/CSS/At-rule)を用いてトランジションの対応を検査してください。

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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref("@supports")}}
- {{cssxref("transition")}}
