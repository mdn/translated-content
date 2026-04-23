---
title: :-moz-broken
slug: Web/CSS/Reference/Selectors/:-moz-broken
original_slug: Web/CSS/:-moz-broken
---

{{Non-standard_header}}

**`:-moz-broken`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions) であり、壊れた画像リンクを表している要素に一致します。

> [!NOTE]
> このセレクターは、主にテーマ開発者が使用することを意図しているものです。

## 構文

```css
:-moz-broken;
```

## 例

### HTML

```html
<img src="broken.jpg" alt="This image is broken. :-(" />
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
- [Firefox バグ 11011](https://bugzil.la/11011)
