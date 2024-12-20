---
title: ポインターを当てるとボタンの色を変えるには
slug: Learn_web_development/Howto/Solve_CSS_problems/Transition_button
original_slug: Learn/CSS/Howto/Transition_button
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

このガイドでは、ボタンに当てたときに2つの色の間で滑らかに色が変わるようにする方法を紹介します。

ボタンの例では、`:hover` 動的擬似クラスに異なる背景色を定義することで、ボタンの背景を変更することができます。しかし、ボタンの上に当てた場合、背景色は新しい色に切り替わるようになります。より滑らかに変化させるためには、CSS トランジションを使用することができます。

## トランジションの使用

ホバー状態に必要な色を追加した後、ボタンのルールに {{cssxref("transition")}} プロパティを追加します。単純なトランジションの場合、`transition` の値は、このトランジションを適用したいプロパティの名前と、トランジションのために要する時間です。

`:active` と `:focus` の擬似クラスでは、{{cssxref("transition")}} プロパティは none に設定されており、クリックされるとボタンはアクティブ状態に移行します。

この例では、トランジションに 1 秒かけていますが、これを変更することで、スピードの変化による違いを確認することができます。

{{EmbedGHLiveSample("css-examples/howto/transition-button.html", '100%', 720)}}

> **メモ:** {{cssxref("transition")}} プロパティは、{{cssxref("transition-delay")}}、{{cssxref("transition-duration")}}、{{cssxref("transition-property")}}、{{cssxref("transition-timing-function")}} の一括指定です。トランジションを調整する方法を調べるには、MDNでこれらのプロパティのページを参照してください。

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
