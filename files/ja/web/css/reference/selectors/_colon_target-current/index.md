---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
original_slug: Web/CSS/:target-current
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{SeeCompatTable}}

**`:target-current`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes) で、**アクティブ**なスクロールマーカー、つまり、現在スクロールされている {{cssxref("::scroll-marker")}} 擬似要素の {{cssxref("scroll-marker-group")}} を選択します。この[セレクター](/ja/docs/Web/CSS/Guides/Selectors)は、[スクロールマーカーグループ](/ja/docs/Web/CSS/Reference/Selectors/::scroll-marker-group#description)内のアクティブなナビゲーションの位置のスタイル設定に使用できます。

> [!NOTE]
> `:target-current` 擬似クラスは、 `::scroll-marker` 擬似要素でのみ有効です。

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
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
