---
title: CSS トランジション
short-title: トランジション
slug: Web/CSS/Guides/Transitions
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS トランジション** (CSS transition) モジュールは、異なる CSS プロパティ値の間でなだらか遷移を作成する機能を規定します。これらのトランジションの挙動は、イージング関数、持続時間、その他の値を指定することで制御できます。

通常、CSS プロパティの値が変更されると、古い値から新しい値への変化は即時に行われます。CSS トランジションモジュールは、プロパティの古い状態から新しい状態への変化を、指定された時間をかけて徐々に制御することを可能にします。同時に、トランジションが異なる段階に到達した際にコードを実行できるようにするイベントハンドラーも提供します。

場合によっては、遷移の起点となる "from" 値が存在しないことがあります。例えば、要素がDOMに追加される場合、定義されるスタイルは "to" 状態向けのものとなります。このモジュールは、そのようなケース向けに開始スタイルを定義可能にする {{cssxref("@starting-style")}} アットルールを提供します。同時に、離散的なプロパティ値のトランジション方法も定義します。例えば離散的にアニメーションする {{cssxref("display")}} プロパティを `none` 値から表示させる値へトランジションさせる場合などです。

## リファレンス

### プロパティ

- {{cssxref("transition")}}
- {{cssxref("transition-behavior")}}
- {{cssxref("transition-delay")}}
- {{cssxref("transition-duration")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-timing-function")}}

### アットルール

- {{cssxref("@starting-style")}}

### インターフェイス

- {{domxref("CSSStartingStyleRule")}}
- {{domxref("CSSTransition")}}
  - {{domxref("CSSTransition.transitionProperty", "transitionProperty")}} プロパティ
- {{domxref("TransitionEvent")}}
  - {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}} コンストラクター
  - {{domxref("TransitionEvent.propertyName")}} プロパティ
  - {{domxref("TransitionEvent.elapsedTime")}} プロパティ
  - {{domxref("TransitionEvent.pseudoElement")}} プロパティ
  - {{domxref("Element/transitioncancel_event", "transitioncancel")}} イベント
  - {{domxref("Element/transitionend_event", "transitionend")}} イベント
  - {{domxref("Element/transitionrun_event", "transitionrun")}} イベント
  - {{domxref("Element/transitionstart_event", "transitionstart")}} イベント

## ガイド

- [CSS トランジションの使用](/ja/docs/Web/CSS/Guides/Transitions/Using)
  - : CSS を使ってスムーズな変化を作る方法についての、ステップバイステップのチュートリアルです。この記事では関連する各 CSS プロパティと、それらがどのように作用するかを解説します。
- [`display` のアニメーション](/ja/docs/Web/CSS/Reference/Properties/display#display_のアニメーション)
  - : 離散的にアニメーションする {{cssxref("display")}} プロパティの `none` 値へ、または `none` 値からのトランジション。
- [ポップオーバーのトランジション](/ja/docs/Web/CSS/Reference/Properties/overlay#ポップオーバーのトランジション)と [`<dialog>` のトランジション](/ja/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : {{cssxref("@starting-style")}} から最終的な {{cssxref(":popover-open")}} および {{cssxref(":open")}} 擬似クラスのスタイルへトランジションする例です。

## 関連概念

- {{cssxref("interpolate-size")}} プロパティ
- {{cssxref("calc-size()")}} 関数
- {{Glossary("Intrinsic size", "内在サイズ")}}用語項目

- [CSS イージング関数](/ja/docs/Web/CSS/Guides/Easing_functions)モジュール:
  - {{cssxref("easing-function")}} データ型

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール:
  - {{cssxref("animation")}} 一括指定
  - {{cssxref("animation-delay")}}
  - {{cssxref("animation-direction")}}
  - {{cssxref("animation-duration")}}
  - {{cssxref("animation-fill-mode")}}
  - {{cssxref("animation-iteration-count")}}
  - {{cssxref("animation-name")}}
  - {{cssxref("animation-play-state")}}
  - {{cssxref("animation-timing-function")}}

- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール:
  - {{cssxref("transform")}}
  - {{cssxref("transform-box")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("transform-style")}}

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール:
  - {{cssxref("scroll-snap-type")}}
  - {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-snap-align")}}
  - {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-snap-stop")}}

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("opacity")}}
- {{cssxref("visibility")}}
- {{domxref("ViewTransition")}} インターフェイス
- {{domxref("PageTransitionEvent")}} インターフェイス
