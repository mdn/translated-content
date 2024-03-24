---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition-image-pair`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、[ビュートランジション](/ja/docs/Web/API/View_Transitions_API)の「古い」および「新しい」ビュー状態、すなわちトランジションの前と後のコンテナーを表します。

ビュートランジションの間、 `::view-transition-image-pair` は[ビュートランジションのプロセス](/ja/docs/Web/API/View_Transitions_API#ビュートランジションのプロセス)で説明されているように、関連する擬似要素のツリーとして表現されます。これは {{cssxref("::view-transition-group")}} の子にしかなりません。子という意味では、 {{cssxref("::view-transition-new")}} または {{cssxref("::view-transition-old")}}、あるいはその両方を持つことができます。

UA スタイルシートでは `::view-transition-image-pair` に以下の既定値が指定されています。

```css
html::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
}
```

ビュートランジションの間、 `::view-transition-image-pair` は {{cssxref("isolation", "isolation: isolate")}} をビュートランジションスタイルシートで設定することで、他の視覚出力に影響を与えることなく、通常の混合モード以外で混合することができます。

## 構文

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` は以下の値のうちのいずれかです。

- `*`
  - : 擬似要素が、すべてのビュートランジショングループに一致するようにします。
- `root`
  - : 擬似要素が、ページ全体のビュートランジションを含むためにユーザエージェントによって作成された既定の `root` ビュートランジショングループに一致するようにします。すなわち、 {{cssxref("view-transition-name")}} プロパティによって自分自身を固有のビュートランジショングループに割り当てていない要素を意味します）。
- {{cssxref("custom-ident")}}
  - : 擬似要素が、指定された {{cssxref("custom-ident")}} を {{cssxref("view-transition-name")}} プロパティを通して要素に割り当てることによって作成された固有のビュートランジショングループに一致するようにします。

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

- [ビュートランジション API](/ja/docs/Web/API/View_Transitions_API)
- [ビュートランジション API によるスムーズでシンプルなトランジション](https://developer.chrome.com/docs/web-platform/view-transitions/)
