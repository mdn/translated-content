---
title: '-webkit-box-reflect'
slug: Web/CSS/-webkit-box-reflect
tags:
  - '-webkit-box-reflect'
  - CSS
  - CSS プロパティ
  - CSS:WebKit 拡張
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-webkit-box-reflect
translation_of: Web/CSS/-webkit-box-reflect
---
{{CSSRef}}{{Non-standard_Header}}

**`-webkit-box-reflect`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の内容を特定の方向に反射させることができます。

```css
/* 方向の値 */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* オフセット値 */
-webkit-box-reflect: below 10px;

/* マスク値 */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* グローバル値 */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: unset;
```

> **Warning:** この機能は**ウェブサイトで使うためのものではありません**。ウェブで反射効果を実現する上で、標準の方法は CSS の {{CSSxRef("element()", "element()")}} 関数を使用することです。

## 構文

### 値

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : どの方向に反射するかを示すキーワードです。
- {{CSSxRef("&lt;length&gt;")}}
  - : 反射の大きさを示します。
- {{CSSxRef("&lt;image&gt;")}}
  - : 反射に適用されるマスクを記述します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 仕様書

標準には含まれていません。反射効果を CSS で実現する標準の方法は、 CSS の {{CSSxRef("element()", "element()")}} 関数を使用することです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Apple の[ドキュメント](http://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16)
- Webkit の[仕様書](https://www.webkit.org/blog/182/css-reflections/).
- Lea Verou's article on reflection using [CSS features on the standard track](http://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/).
