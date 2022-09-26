---
title: ウェブアニメーション API
slug: Web/API/Web_Animations_API
---

{{DefaultAPISidebar("Web Animations")}}

Web Animation API を使うことで 、ウェブページの見た目の変更を同期させたり時間を調整すること、つまり DOM 要素のアニメーションが可能です。これらはタイミングモデルおよびアニメーションモデルという 2 つのモデルの組み合わせによって実現されます。

## 概念と利用方法

Web Animation API は、 DOM 要素のアニメーションを記述する共通言語をブラウザーと開発者に提供します。 API の背景の概念や利用方法についての詳しい情報は、[Web Animation API の利用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)をご覧ください。

## ウェブアニメーションインターフェイス

- {{domxref("Animation")}}
  - : アニメーションノードやソースの再生制御やタイムラインを提供します。 {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} コンストラクターで作成されたオブジェクトを取ることができます。
- {{domxref("KeyframeEffect")}}
  - : **キーフレーム**と呼ばれるアニメーション可能なプロパティと値の組み合わせ、及びその[タイミングオプション](/ja/docs/Web/API/Web_Animations_API/Animation_timing_options)を記述します。これは {{domxref("Animation.Animation", "Animation()")}} コンストラクターを使用して再生することができます。
- {{domxref("AnimationTimeline")}}
  - : アニメーションのタイムラインを表します。このインターフェイスはタイムライン機能 ({{domxref("DocumentTimeline")}} などのタイムラインオブジェクト) を定義するために存在し、これ自体は開発者からはアクセスされません。
- {{domxref("AnimationEvent")}}
  - : 実際には CSS アニメーションの一部です。
- {{domxref("DocumentTimeline")}}
  - : アニメーションのタイムラインを表し、既定の文書のタイムライン ({{domxref("Document.timeline")}} プロパティ) を含みます。
- {{domxref("EffectTiming")}}
  - : {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly()")}}, {{domxref("KeyframeEffect.KeyframeEffect()")}} のすべてがタイミングプロパティの任意の連想配列オブジェクトを受け付けます。

## 他のインターフェイスへの拡張

Web Animation API によって {{domxref("document")}} 及び {{domxref("element")}} に新たに追加された機能もあります。

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

| 仕様書                                   | 策定状況                             | コメント |
| ---------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Animations')}} | {{Spec2('Web Animations')}} | 初回定義 |

## 関連情報

- [Web Animation API の利用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Web Animation のデモ](https://mozdevs.github.io/Animation-examples/)
- [Polyfill](https://github.com/web-animations/web-animations-js)
- Firefox の現在の実装: [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [ブラウザーの対応のテスト](http://codepen.io/danwilson/pen/xGBKVq)
