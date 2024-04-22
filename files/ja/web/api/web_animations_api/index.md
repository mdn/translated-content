---
title: ウェブアニメーション API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{DefaultAPISidebar("Web Animations")}}

**ウェブアニメーション API** (Web Animation API) を使うことで 、ウェブページの表現を変化させるの同期やタイミング、つまり DOM 要素のアニメーションが可能です。これらはタイミングモデルおよびアニメーションモデルという 2 つのモデルの組み合わせによって実現されます。

## 概念と利用方法

ウェブアニメーション API は、 DOM 要素のアニメーションを記述する共通言語をブラウザーと開発者に提供します。 API の背景の概念や利用方法についての詳しい情報は、[ウェブアニメーション API の使用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)をご覧ください。

## ウェブアニメーションのインターフェイス

- {{domxref("Animation")}}
  - : アニメーションノードやソースの再生制御やタイムラインを提供します。 {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} コンストラクターで作成されたオブジェクトを取ることができます。
- {{domxref("KeyframeEffect")}}
  - : **キーフレーム**と呼ばれるアニメーション可能なプロパティと値の組み合わせ、およびそのタイミングオプションを記述します。これは {{domxref("Animation.Animation", "Animation()")}} コンストラクターを使用して再生することができます。
- {{domxref("AnimationTimeline")}}
  - : アニメーションのタイムラインを表します。このインターフェイスはタイムライン機能（{{domxref("DocumentTimeline")}} や将来のタイムラインオブジェクトによって継承）を定義するために存在し、これ自体は開発者からはアクセスされません。
- {{domxref("AnimationEvent")}}
  - : 実際には CSS アニメーションの一部です。
- {{domxref("DocumentTimeline")}}
  - : アニメーションのタイムラインを表し、既定の文書のタイムライン（{{domxref("Document.timeline")}} プロパティを使用してアクセス）を含みます。

## 他のインターフェイスへの拡張

ウェブアニメーション API によって {{domxref("document")}} および {{domxref("element")}} に新たに追加された機能があります。

### `Document` インターフェイスの拡張

- {{domxref("document.timeline")}}
  - : 既定の文書タイムラインを表す `DocumentTimeline` オブジェクトです。
- {{domxref("document.getAnimations()")}}
  - : `document` 内で要素に対して現在有効な {{domxref("Animation")}} オブジェクトの配列を返します。

### `Element` インターフェイスの拡張

- {{domxref("Element.animate()")}}
  - : 要素のアニメーションを作成して再生するショートカットメソッドです。作成された {{domxref("Animation")}} オブジェクトのインスタンスを返します。
- {{domxref("Element.getAnimations()")}}
  - : {{domxref("Animation")}} オブジェクトの配列で、現在その要素に関連し、将来の実行が予定されているものを返します。

## 仕様書

{{Specifications}}

## 関連情報

- [ウェブアニメーション API の使用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [ウェブアニメーションのデモ](https://mozdevs.github.io/Animation-examples/)
- [ポリフィル](https://github.com/web-animations/web-animations-js)
- Firefox の現在の実装: [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [ブラウザーの対応のテスト](https://codepen.io/danwilson/pen/xGBKVq)
