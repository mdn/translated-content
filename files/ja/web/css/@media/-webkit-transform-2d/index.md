---
title: '-webkit-transform-2d'
slug: Web/CSS/@media/-webkit-transform-2d
tags:
  - '@media'
  - CSS
  - 標準外
  - リファレンス
  - WebKit
  - メディア特性
browser-compat: css.at-rules.media.-webkit-transform-2d
translation_of: Web/CSS/@media/-webkit-transform-2d
---
{{ Non-standard_header }}

**`-webkit-transform-2d`** は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性) で [Chrome 拡張](/ja/docs/Web/CSS/WebKit_Extensions)であり、ベンダー接頭辞付きの CSS の二次元 {{cssxref("transform")}} に対応していれば値が `true` になります。

Apple には [Safari CSS リファレンス](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3)に説明があります。

## 構文

`-webkit-transform-2d` は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性) で [Chrome 拡張](/ja/docs/Web/CSS/WebKit_Extensions)であり、 `-webkit` 接頭辞付きの CSS の二次元 {{cssxref("transform")}} に対応していれば値が `true` になります。

### 値

- `true`
  - : ブラウザーは二次元の CSS 座標変換に `-webkit` の接頭辞つきで対応しています。
- `false`
  - : 二次元の CSS 座標変換で `-webkit` の接頭辞が付いたものはブラウザーが対応していません。

## 例

### 基本的な例

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

このメディア機能は WebKit でのみ対応しています。可能であれば、代わりに {{cssxref("@supports")}} 機能クエリを使用してください。

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

{{ CSSRef }}
