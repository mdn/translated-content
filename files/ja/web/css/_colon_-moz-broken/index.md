---
title: ':-moz-broken'
slug: Web/CSS/:-moz-broken
tags:
  - CSS
  - CSS:Mozilla 拡張
  - NeedsCompatTable
  - 標準外
  - 擬似クラス
  - リファレンス
  - セレクター
browser-compat: css.selectors.-moz-broken
translation_of: 'Web/CSS/:-moz-broken'
---
{{CSSRef}}{{Non-standard_header}}

**`:-moz-broken`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions) であり、壊れた画像リンクを表している要素に一致します。

> **Note:** このセレクターは、主にテーマ開発者が使用することを意図しているものです。

## 構文

```css
:-moz-broken
```

## 例

### HTML

```html
<img src="broken.jpg" alt="This image is broken. :-(">
```

### CSS

```css
:-moz-broken {
  background: bisque;
  padding: 8px;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

標準の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
- {{bug("11011")}}
