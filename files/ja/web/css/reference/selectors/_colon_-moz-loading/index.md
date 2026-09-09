---
title: CSS `:-moz-loading` 擬似クラス
short-title: :-moz-loading
slug: Web/CSS/Reference/Selectors/:-moz-loading
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

**`:-moz-loading`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)です。読み込みが開始されていないために表示できない要素、例えばまだ到着が開始されていない画像などに一致します。なお、読み込み*中*の画像は、この擬似クラスには一致*しません*。

> [!NOTE]
> このセレクターは主にテーマ開発者が使用するためのものです。

## 構文

```css
:-moz-loading {
  /* ... */
}
```

## 例

### 読み込み中の画像に背景を設定

```css
:-moz-loading {
  background: url("loading-animation.gif") center no-repeat;
}
```

## 仕様書

どの標準にも含まれていません。

## 関連情報

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
