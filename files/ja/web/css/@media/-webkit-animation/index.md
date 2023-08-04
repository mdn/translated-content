---
title: "-webkit-animation"
slug: Web/CSS/@media/-webkit-animation
---

{{ CSSRef }} {{ Non-standard_header }}

**`-webkit-transition`** は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、 [Chrome 拡張](/ja/docs/Web/CSS/WebKit_Extensions)であり、ベンダー接頭辞つきの CSS {{cssxref("animation")}} に対応していれば値が `true` になります。

Apple には [Safari CSS リファレンス](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3)に説明があります。eference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> **メモ:** このメディア特性は WebKit のみが対応しています。可能であれば、代わりに {{cssxref("@supports")}} 機能クエリーを使用してください。

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
  /* CSS to use if animations are supported */
}
```

## 仕様書

どの標準でも定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`-webkit-transform-3d`](/ja/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/ja/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transition`](/ja/docs/Web/CSS/@media/-webkit-transition)
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
