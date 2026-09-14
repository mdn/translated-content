---
title: ::view-transition-new()
slug: Web/CSS/Reference/Selectors/::view-transition-new
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`::view-transition-new()`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、ビュー遷移の「新しい」ビュー状態を表します。これは新しいビューのライブ表現で、遷移後を表します。

ビュー遷移の間、 `::view-transition-new()` は[ビュー遷移のプロセス](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移のプロセス)で説明されているように、関連する擬似要素ツリーに含まれます。これは {{cssxref("::view-transition-image-pair()")}} の子要素でしかなく、子要素を持つことはありません。

これは置換要素であり、 {{cssxref("object-fit")}} や {{cssxref("object-position")}} などのプロパティで操作できます。コンテンツのサイズに等しい自然な寸法を持ちます。

UA スタイルシートでは、以下のデフォルトのスタイルを与えられています。

```css
:root::view-transition-old(*),
:root::view-transition-new(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}

/* 2 つの画像があった場合の合成を行うためのキーフレーム */
@keyframes -ua-mix-blend-mode-plus-lighter {
  from {
    mix-blend-mode: plus-lighter;
  }
  to {
    mix-blend-mode: plus-lighter;
  }
}

@keyframes -ua-view-transition-fade-in {
  from {
    opacity: 0;
  }
}
```

> [!NOTE]
> `::view-transition-new()` のアニメーションを設定するために、追加のビュー遷移スタイルシートスタイルも設定されます。これらはビュー遷移中に動的に生成されます。詳細については、仕様書の[遷移擬似要素の設定](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements)<sup>(英語)</sup>および[擬似要素スタイルの更新](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles)<sup>(英語)</sup>の節を参照してください。

## 構文

```css-nolint
::view-transition-new([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### 引数

- `*`
  - : [全称セレクター (`*`)](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)です。ページ上のすべてのビュー遷移グループを選択します。
- `root`
  - : 擬似要素が、ページ全体のビュー遷移を含むためにユーザエージェントによって作成されたデフォルトの `root` ビュー遷移グループに一致するようにします。すなわち、 {{cssxref("view-transition-name")}} プロパティによって自分自身を固有のビュー遷移グループに割り当てていない要素を意味します）。
- `<pt-name-selector>`
  - : 一連の {{cssxref("custom-ident")}} で、{{cssxref("view-transition-name")}} プロパティの値です。
- `<pt-class-selector>`
  - : 一連の {{cssxref("custom-ident")}} で、{{cssxref("view-transition-class")}} プロパティの値の前にピリオド (`.`) を置いたものです。

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

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API によるスムーズでシンプルな遷移](https://developer.chrome.com/docs/web-platform/view-transitions/)<sup>(英語)</sup>
