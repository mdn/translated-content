---
title: TransitionEvent.pseudoElement
slug: Web/API/TransitionEvent/pseudoElement
---

{{ apiref("CSSOM") }} {{SeeCompatTable}}

**`TransitionEvent.pseudoElement`** 読み取り専用プロパティは、 {{domxref("DOMString")}} であり、 `'::'` で始まり、アニメーションが実行される[疑似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前が含まれています。トランジションが擬似要素で実行されない場合は、要素は空文字です: `''` 。

## 構文

```
name = TransitionEvent.pseudoElement
```

## 仕様

| 仕様                                                                                                                                             | ステータス                               | 備考       |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------- |
| {{ SpecName('CSS3 Transitions', '#Events-TransitionEvent-pseudoElement', 'TransitionEvent.pseudoElement') }} | {{ Spec2('CSS3 Transitions')}} | 初回定義。 |

## ブラウザー実装状況

{{Compat("api.TransitionEvent.pseudoElement")}}

## 関連項目

- [CSS トランジションの使用](/ja/docs/Web/Guide/CSS/Using_CSS_transitions)
- {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}.
