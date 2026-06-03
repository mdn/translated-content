---
title: CSS ビュー遷移
slug: Web/CSS/Guides/View_transitions
original_slug: Web/CSS/CSS_view_transitions
l10n:
  sourceCommit: ef793e5764cf3b6371f275233a8e278e692d2ff8
---

**CSS ビュー遷移**モジュールは、[ビュー遷移 API](/ja/docs/Web/API/View_Transition_API) の動作を定義します。これにより、開発者は文書内の異なる状態間や文書間でアニメーションする遷移を作成することができます。このモジュールは、これらの遷移をスタイル設定するための CSS プロパティと擬似要素も定義します。

## リファレンス

### プロパティ

- {{cssxref("view-transition-name")}} {{experimental_inline}}

> [!NOTE]
> このモジュールでは、`view-transition-class` プロパティも定義していますが、いまのところ、どのブラウザーも対応していません。

### アットルールと記述子

- {{cssxref("@view-transition")}}
  - [`navigation`](/ja/docs/Web/CSS/Reference/At-rules/@view-transition#navigation) 記述子

### セレクターと擬似要素

- {{cssxref("::view-transition")}} {{experimental_inline}}
- {{cssxref("::view-transition-image-pair()")}} {{experimental_inline}}
- {{cssxref("::view-transition-group()")}} {{experimental_inline}}
- {{cssxref("::view-transition-new()")}} {{experimental_inline}}
- {{cssxref("::view-transition-old()")}} {{experimental_inline}}

> [!NOTE]
> このモジュールでは、`:active-view-transition` および `:active-view-transition-type()` 擬似クラスも定義していますが、いまのところ、どのブラウザーも対応していません。

### インターフェイス

- {{domxref("CSSViewTransitionRule")}}
- {{domxref("ViewTransition")}}
  - {{domxref("ViewTransition.skipTransition()")}} メソッド
  - {{domxref("ViewTransition.updateCallbackDone")}}
  - {{domxref("ViewTransition.ready")}}
  - {{domxref("ViewTransition.finished")}}
- {{domxref("Document.startViewTransition()")}} メソッド

## ガイド

- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
  - : ビュー遷移を作成する方法と、ビュー遷移のアニメーションをカスタマイズする方法について説明します。アクティブなビュー遷移の操作方法についても記載しています。

## 関連概念

- {{domxref("PageRevealEvent", "pagereveal")}} イベント
- {{domxref("PageSwapEvent", "pageswap")}} イベント
- {{domxref("Document.visibilityState")}}

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - {{domxref("CSSKeyframesRule")}}
  - {{domxref("CSSStyleRule")}}
  - [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)

- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## 仕様書

{{Specifications}}

## 関連情報

- [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [関数擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#関数擬似クラス)
- [CSS の構成要素: 擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
