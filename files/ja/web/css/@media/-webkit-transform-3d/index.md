---
title: '-webkit-transform-3d'
slug: Web/CSS/@media/-webkit-transform-3d
tags:
  - '-webkit-transform-3d'
  - 3D
  - '@media'
  - CSS
  - 標準外
  - リファレンス
  - WebKit
  - メディア特性
  - transform
browser-compat: css.at-rules.media.-webkit-transform-3d
translation_of: Web/CSS/@media/-webkit-transform-3d
---
{{ Non-standard_header }}

**`-webkit-transform-3d`** は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で [Chrome 拡張](/ja/docs/Web/CSS/WebKit_Extensions)であり、ベンダー接頭辞付きの CSS 3D {{cssxref("transform")}} に対応していれば値が `true` になります。

> **Note:** このメディア特性は WebKit および Blink でのみ対応しています。可能であれば、 {{cssxref("@supports")}} 特性クエリーを代わりに使用してください。

## 構文

`-webkit-transform-3d` は [CSS](/ja/docs/Web/CSS) の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で [Chrome 拡張](/ja/docs/Web/CSS/WebKit_Extensions)であり、ベンダー接頭辞付きの CSS 3D {{cssxref("transform")}} に対応していれば値が `true` になります。

### Values

- `true`
  - : ブラウザーは三次元の CSS 座標変換に `-webkit` の接頭辞つきで対応しています。
- `false`
  - : 三次元の CSS 座標変換で `-webkit` の接頭辞が付いたものはブラウザーが対応していません。

## 例

### -webkit-transform-3d のメディアクエリーの例

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}

@media (-webkit-transform-3d: 1) {
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
- [Test page at quirksmode.org](http://www.quirksmode.org/css/tests/mediaqueries/animation.html)

{{ CSSRef }}
