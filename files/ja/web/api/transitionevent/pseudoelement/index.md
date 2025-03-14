---
title: "TransitionEvent: pseudoElement プロパティ"
short-title: pseudoElement
slug: Web/API/TransitionEvent/pseudoElement
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ apiref("CSSOM") }}

**`TransitionEvent.pseudoElement`** は読み取り専用プロパティで、アニメーションが実行されている `'::'` で始まる[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前が入っている文字列です。トランジションが擬似要素で実行されない場合は、要素は空文字列 (`''`) です。

## 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
