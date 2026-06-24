---
title: ::view-transition-image-pair()
slug: Web/CSS/Reference/Selectors/::view-transition-image-pair
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`::view-transition-image-pair()`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、[ビュー遷移](/ja/docs/Web/API/View_Transition_API)の「古い」および「新しい」ビュー状態、すなわちトランジションの前と後のコンテナーを表します。

ビュー遷移の間、 `::view-transition-image-pair()` は[ビュー遷移のプロセス](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移のプロセス)で説明されているように、関連する擬似要素のツリーとして表現されます。これは {{cssxref("::view-transition-group()")}} の子にしかなりません。子という意味では、 {{cssxref("::view-transition-new()")}} または {{cssxref("::view-transition-old()")}}、あるいはその両方を持つことができます。

`::view-transition-image-pair()` は UA スタイルシートで以下のデフォルトのスタイルを与えられています。

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

ビュー遷移の間、 `::view-transition-image-pair()` は {{cssxref("isolation", "isolation: isolate")}} をビュー遷移スタイルシートで設定することで、他の視覚出力に影響を与えることなく、通常の混合モード以外で混合することができます。

## 構文

```css-nolint
::view-transition-image-pair([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### 引数

- `*`
  - : [全称セレクター (`*`)](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)です。ページ上のすべてのビュー遷移グループを選択します。
- `root`
  - : 擬似要素が、ページ全体のビュー遷移を含むためにユーザーエージェントによって作成されたデフォルトの `root` ビュー遷移グループに一致するようにします。すなわち、 {{cssxref("view-transition-name")}} プロパティによって自分自身を固有のビュー遷移グループに割り当てていない要素を意味します）。
- `<pt-name-selector>`
  - : 一連の {{cssxref("custom-ident")}} で、{{cssxref("view-transition-name")}} プロパティの値です。
- `<pt-class-selector>`
  - : 一連の {{cssxref("custom-ident")}} で、{{cssxref("view-transition-class")}} プロパティの値の前にピリオド (`.`) を置いたものです。

## 例

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-image-pair(.card) {
  isolation: isolate;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API によるスムーズでシンプルな遷移](https://developer.chrome.com/docs/web-platform/view-transitions/)<sup>(英語)</sup>
