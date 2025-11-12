---
title: CSS イージング関数
slug: Web/CSS/Guides/Easing_functions
original_slug: Web/CSS/CSS_easing_functions
l10n:
  sourceCommit: 4b3e4511c0fc57e445d91d3a7ade7f2ff243880d
---

**CSS イージング関数**モジュールは、値の変換を制御する手段を提供するイージング関数を定義します。定義されている関数には、線形、3 次ベジェ、および段階的なイージング関数が含まれます。これらのイージング関数は、アニメーションおよびトランジションに適用できます。

要素が移動する速度を徐々に増加させると、要素が勢いを増すように見え、重量感を与えることができます。イージング関数を使用すると、変化の速度を制御することができます。 3 次ベジェイージング関数は、直感的なユーザーインターフェイス要素や、物理的な物体と同様に振る舞う説得力のある漫画のプロップを作成するために使用することができます。

あるいは、ロボットのような動きを作成したり、セグメントが常に同じ位置に現れるように回転するセグメント化された車輪の効果を作成したりするために、アニメーションを明確な段階に分けて進めたい場合もあるでしょう。このためには、段階的なイージング関数を使用することができます。

## リファレンス

### 関数

- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
- {{cssxref("easing-function/linear", "linear()")}}
- {{cssxref("easing-function/steps", "steps()")}}

### データ型

- {{cssxref("easing-function")}}
- [`<linear-easing-function>`](/ja/docs/Web/CSS/Reference/Values/easing-function#linear-easing-function)
- [`<cubic-bezier-easing-function>`](/ja/docs/Web/CSS/Reference/Values/easing-function#cubic-bezier-easing-function)
- [`<step-easing-function>`](/ja/docs/Web/CSS/Reference/Values/easing-function#step-easing-function)

### 用語の定義

- {{glossary("Bezier_curve", "ベジェ曲線")}}
- {{glossary("Interpolation", "補間")}}

## ガイド

- [CSS 値関数: イージング関数](/ja/docs/Web/CSS/Reference/Values/Functions#イージング関数)
  - : CSS プロパティの CSS 値を返すために、特別なデータ処理または計算を呼び出す CSS 文。

## 関連概念

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} 一括指定

- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)モジュール
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} 一括指定

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 値関数](/ja/docs/Web/CSS/Reference/Values/Functions)
- CSS の {{cssxref("will-change")}} プロパティ
