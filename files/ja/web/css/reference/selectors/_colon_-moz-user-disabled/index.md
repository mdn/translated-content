---
title: :-moz-user-disabled
slug: Web/CSS/Reference/Selectors/:-moz-user-disabled
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

**`:-moz-user-disabled`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、[Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)であり、ユーザーの環境設定により画像が完全に無効化されているため、読み込まれなかった画像を表す要素に一致します。

> [!NOTE]
> このセレクターは主にテーマ開発者向けのものです。

## 構文

```css
:-moz-user-disabled {
  /* ... */
}
```

## 例

### ユーザーが無効化した要素のスタイル設定

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## 仕様書

どの標準にも含まれていません。

## 関連情報

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}
