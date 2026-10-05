---
title: "`:-moz-suppressed` 擬似クラス (CSS)"
short-title: :-moz-suppressed
slug: Web/CSS/Reference/Selectors/:-moz-suppressed
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

**`:-moz-suppressed`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、指定されたサイトからの画像読み込みがブロックされたために非表示となった画像を表す要素に一致する [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)です。

> [!NOTE]
> このセレクターは、主にテーマ開発者が使用するためのものです。

## 構文

```css
:-moz-suppressed {
  /* ... */
}
```

## 例

### ブロックされたスタイル設定要素

```css
:-moz-suppressed {
  background: yellow;
  padding: 8px;
}
```

## 仕様書

どの仕様にも含まれていません。

## 関連情報

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-user-disabled")}}
