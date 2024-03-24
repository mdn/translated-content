---
title: "::view-transition-old"
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: c9cc38c3c3c342e2e952c1acd57f55e104c5bb06
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition-old`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、ビュートランジションの「古い」ビュー状態、すなわちトランジション前の古いビューの静的なスクリーンショットを表します。

ビュートランジションの間、 `::view-transition-old` は[ビュートランジションのプロセス](/ja/docs/Web/API/View_Transitions_API#ビュートランジションのプロセス)で説明されているように、関連する擬似要素ツリーに記載されます。これは {{cssxref("::view-transition-image-pair")}} の子要素でしかなく、子要素を持つことはありません。

これは置換要素であり、 {{cssxref("object-fit")}} や {{cssxref("object-position")}} などのプロパティで操作できます。コンテンツのサイズに等しい自然な寸法を持ちます。

UA スタイルシートでは以下の既定値が指定されています。

```css
@keyframes -ua-view-transition-fade-out {
  to {
    opacity: 0;
  }
}

html::view-transition-old(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-name: -ua-view-transition-fade-out;
  animation-duration: inherit;
  animation-fill-mode: inherit;
}
```

> **メモ:** `::view-transition-old` のアニメーションを設定するために、追加のビュートランジションスタイルシートスタイルも設定されます。これらはビュートランジション中に動的に生成されます。詳細は仕様書の [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) および [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) の節を参照してください。

## 構文

```css-nolint
::view-transition-old(<pt-name-selector>) {
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
figcaption {
  view-transition-name: figure-caption;
}

@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュートランジション API](/ja/docs/Web/API/View_Transitions_API)
- [ビュートランジション API によるスムーズでシンプルなトランジション](https://developer.chrome.com/docs/web-platform/view-transitions/)
