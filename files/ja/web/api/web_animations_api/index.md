---
title: ウェブアニメーション API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 8a10694edf44bde124fa8f18af65651855f632dc
---

{{DefaultAPISidebar("Web Animations")}}

**ウェブアニメーション API** (Web Animation API) を使うことで、ウェブページの表現を変化させるの同期やタイミング、つまり DOM 要素のアニメーションが可能です。これらはタイミングモデルおよびアニメーションモデルという 2 つのモデルの組み合わせによって実現されます。

## 概念と使い方

ウェブアニメーション API は、 DOM 要素のアニメーションを記述する共通言語をブラウザーと開発者に提供します。 API の背景の概念や利用方法についての詳しい情報は、[ウェブアニメーション API の使用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)をご覧ください。

### アクセシビリティ

点滅したりフラッシュしたりするアニメーションは、注意欠陥・多動性障害（ADHD）などの認知上の課題を抱える人々にとって問題となる場合があります。また、特定の種類の動きは、前庭障碍、てんかん、片頭痛、暗所恐怖症の引き金となる可能性があります。

アニメーションを一時停止または無効にする仕組みを提供することを検討するとともに、[動き抑制メディアクエリー](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)（または同等の[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント) である {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}）を活用し、アニメーションを好まないことを表したユーザーに対して、適切な体験を生成することを検討してください。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN WCAG を理解する、ガイドライン 2.2 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.2_—_十分な時間_コンテンツを読んで使用するのに十分な時間をユーザーに提供する)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## ウェブアニメーションのインターフェイス

- {{domxref("Animation")}}
  - : アニメーションノードやソースの再生制御やタイムラインを提供します。 {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} コンストラクターで作成されたオブジェクトを取ることができます。
- {{domxref("KeyframeEffect")}}
  - : **キーフレーム**と呼ばれるアニメーション可能なプロパティと値の組み合わせ、およびそのタイミングオプションを記述します。これは {{domxref("Animation.Animation", "Animation()")}} コンストラクターを使用して再生することができます。
- {{domxref("AnimationTimeline")}}
  - : アニメーションのタイムラインを表します。このインターフェイスはタイムライン機能（{{domxref("DocumentTimeline")}} や将来のタイムラインオブジェクトによって継承）を定義するために存在し、これ自体は開発者からはアクセスされません。
- {{domxref("AnimationEvent")}}
  - : [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュールの一部であり、アニメーション名と経過時間を捕捉します。
- {{domxref("DocumentTimeline")}}
  - : アニメーションのタイムラインを表し、既定の文書のタイムライン（{{domxref("Document.timeline")}} プロパティを使用してアクセス）を含みます。

## 他のインターフェイスへの拡張

ウェブアニメーション API は、{{domxref("document")}} および {{domxref("element")}} に機能を追加しています。

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

- CSS {{cssxref("animation")}} 一括指定プロパティ
- CSS {{cssxref("animation-timeline")}} プロパティ
- [ウェブアニメーション API の使用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)ガイド
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
