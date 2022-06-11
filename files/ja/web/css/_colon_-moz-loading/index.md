---
title: ':-moz-loading'
slug: Web/CSS/:-moz-loading
tags:
  - CSS
  - CSS:Mozilla 拡張
  - NeedsCompatTable
  - 標準外
  - 擬似クラス
  - リファレンス
  - セレクター
translation_of: Web/CSS/:-moz-loading
---
{{CSSRef}}{{Non-standard_header}}

**`:-moz-loading`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、読み込みが開始されていないために表示できない要素、例えばまだ到着が開始されていない画像などに一致します。なお、読み込み*中*の画像は、この擬似クラスには一致*しません*。

> **Note:** このセレクターは主にテーマ開発者が使用するためのものです。

## 構文

```css
:-moz-loading
```

## 例

### 読み込み中の画像に背景を設定

```css
:-moz-loading {
  background-color: #aaa;
  background-image: url(loading-animation.gif) center no-repeat;
}
```

## 仕様書

どの標準にも含まれていません。

## 関連情報

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
