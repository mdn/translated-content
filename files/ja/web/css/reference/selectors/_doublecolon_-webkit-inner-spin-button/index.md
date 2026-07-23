---
title: CSS `::-webkit-inner-spin-button` 擬似要素
short-title: ::-webkit-inner-spin-button
slug: Web/CSS/Reference/Selectors/::-webkit-inner-spin-button
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-inner-spin-button`** は [CSS](/ja/docs/Web/CSS) の擬似要素で、数値選択用入力要素のスピナーボタンの内部をスタイル設定するために使用されます。

## 構文

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## 例

これらの例は、WebKit および Blink ベースのブラウザーでのみ動作します。

### スピンコントロールのカーソルの変更

この例では、カーソルが入力フィールドのスピンコントロールの内側に位置するたびに、CSS の {{cssxref("cursor")}} が `pointer` に変更されます。

#### HTML

```html
<input type="number" />
```

#### CSS

```css
input[type="number"]::-webkit-inner-spin-button {
  cursor: pointer;
}
```

#### 結果

{{EmbedLiveSample("Changing_the_cursor_in_the_spin_controls", 200, 30)}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::-webkit-textfield-decoration-container")}}
