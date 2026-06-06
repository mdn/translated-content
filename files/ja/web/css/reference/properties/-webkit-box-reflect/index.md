---
title: "`-webkit-box-reflect` CSS property"
short-title: -webkit-box-reflect
slug: Web/CSS/Reference/Properties/-webkit-box-reflect
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}

**`-webkit-box-reflect`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の内容を特定の方向に反射させることができます。

## 構文

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
-webkit-box-reflect: revert;
-webkit-box-reflect: revert-layer;
-webkit-box-reflect: unset;
```

### 値

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : どの方向に反射するかを示すキーワードです。
- {{CSSxRef("&lt;length&gt;")}}
  - : 反射の大きさを示します。
- {{cssxref("image")}}
  - : 反射に適用されるマスクを記述します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-webkit-box-reflect = [ above | below | right | left ]? <length>? <image>?`)}}

## 仕様書

標準には含まれていません。反射効果を CSS で実現する標準の方法は、 CSS の {{CSSxRef("element()", "element()")}} 関数を使用することです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Apple の[ドキュメント](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16)
- Webkit の[仕様書](https://www.webkit.org/blog/182/css-reflections/).
- Lea Verou's article on reflection using [CSS features on the standard track](https://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/).
