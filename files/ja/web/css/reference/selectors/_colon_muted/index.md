---
title: :muted
slug: Web/CSS/Reference/Selectors/:muted
original_slug: Web/CSS/:muted
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:muted`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、 {{htmlelement("audio")}} や {{htmlelement("video")}} のような音を発する可能性がある要素であるが、ミュート（強制的に音を消した）状態にある要素を表します。

ミュートは、 {{cssxref(":volume-locked")}} とは異なり、メディア要素をミュートまたはミュート解除できるかどうかをページ作成者が制御できる点が異なります。
ユーザーエージェントは、環境設定（セッション間で最後に設定された値を記憶する、サイトごとに設定する、など）の使用に従って、メディアの `muted` 値を設定することができます。
`:volume-locked` である要素は、オペレーティングシステムやユーザーエージェントの環境設定により、 JavaScript によってミュート、ミュート解除、または音量を変更することはできません。

## 構文

```css
:muted {
  /* ... */
}
```

## 例

### CSS

```css
:muted {
  outline: 5px solid red;
}

video:muted {
  outline: 5px solid blue;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":buffering")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
- [`muted`](/ja/docs/Web/API/HTMLMediaElement/muted) プロパティ（{{domxref("HTMLMediaElement")}} オブジェクト）
