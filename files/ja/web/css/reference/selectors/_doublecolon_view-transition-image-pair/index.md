---
title: ::view-transition-image-pair
slug: Web/CSS/Reference/Selectors/::view-transition-image-pair
original_slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{SeeCompatTable}}

**`::view-transition-image-pair`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、[ビュー遷移](/ja/docs/Web/API/View_Transition_API)の「古い」および「新しい」ビュー状態、すなわちトランジションの前と後のコンテナーを表します。

ビュー遷移の間、 `::view-transition-image-pair` は[ビュー遷移のプロセス](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移のプロセス)で説明されているように、関連する擬似要素のツリーとして表現されます。これは {{cssxref("::view-transition-group")}} の子にしかなりません。子という意味では、 {{cssxref("::view-transition-new")}} または {{cssxref("::view-transition-old")}}、あるいはその両方を持つことができます。

UA スタイルシートでは `::view-transition-image-pair` に以下の既定値が指定されています。

```css
html::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
}
```

ビュー遷移の間、 `::view-transition-image-pair` は {{cssxref("isolation", "isolation: isolate")}} をビュー遷移スタイルシートで設定することで、他の視覚出力に影響を与えることなく、通常の混合モード以外で混合することができます。

## 構文

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` は以下の値のうちのいずれかです。

- `*`
  - : 擬似要素が、すべてのビュー遷移グループに一致するようにします。
- `root`
  - : 擬似要素が、ページ全体のビュー遷移を含むためにユーザーエージェントによって作成された既定の `root` ビュー遷移グループに一致するようにします。すなわち、 {{cssxref("view-transition-name")}} プロパティによって自分自身を固有のビュー遷移グループに割り当てていない要素を意味します）。
- {{cssxref("custom-ident")}}
  - : 擬似要素が、指定された {{cssxref("custom-ident")}} を {{cssxref("view-transition-name")}} プロパティを通して要素に割り当てることによって作成された固有のビュー遷移グループに一致するようにします。

## 例

```css
::view-transition-image-pair(root) {
  isolation: auto;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API によるスムーズでシンプルなトランジション](https://developer.chrome.com/docs/web-platform/view-transitions/)
