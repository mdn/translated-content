---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

**`:target-current`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、**アクティブ**なスクロールマーカー、つまり、現在スクロールされている {{cssxref("scroll-marker-group")}} のスクロールマーカーを選択します。この[セレクター](/ja/docs/Web/CSS/Guides/Selectors)は、スクロールマーカーグループ内のアクティブなナビゲーションの位置のスタイル設定に使用できます。

> [!NOTE]
> `:target-current` 擬似クラスは、{{cssxref("::scroll-marker")}} 擬似要素および {{cssxref("scroll-target-group")}} プロパティによってスクロールマーカーとして指定された要素でのみ有効です。

## 構文

```css-nolint
:target-current {
  /* ... */
}
```

## 例

[CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels) および {{cssxref("::scroll-marker")}} に、 `:target-current` 擬似クラスの完全な使用例があります。

### 基本的な使用

```css
::scroll-marker {
  background-color: white;
}

::scroll-marker:target-current {
  background-color: black;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-marker-group")}}
- {{cssxref("scroll-target-group")}}
- {{cssxref(":target-before")}}, {{cssxref(":target-after")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
