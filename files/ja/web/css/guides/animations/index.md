---
title: CSS アニメーション
short-title: アニメーション
slug: Web/CSS/Guides/Animations
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**CSS アニメーション** (CSS animations) モジュールを使用すると、キーフレームを使用して、background-position や transform などの CSS プロパティの値を、時間に応じてアニメーションさせることができます。各キーフレームは、アニメーションシーケンスの指定された時間に、アニメーションする要素をどのようにレンダリングするかを記述します。アニメーションモジュールでは、アニメーションの再生時間、繰り返し回数、開始の遅延、その他のアニメーションの要素を制御するためのプロパティを使用することができます。

## アニメーションの実際

下のボックスでアニメーションを見るには、 'Play the animation' チェックボックスをクリックするか、ボックスにカーソルを当てるかしてください。アニメーションが有効になると、上部の雲の図形が変わり、雪片が降り、下部の雪の高さが高くなります。アニメーションを一時停止するには、チェックボックスのチェックを外すか、ボックスからカーソルを離してください。

```html hidden live-sample___animation
<!-- See aria-label: https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label -->
<input
  type="checkbox"
  id="animate"
  aria-label="アニメーションの再生状態をトグル切り替え" />
<label for="animate">アニメーション</label>
<div class="root">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <div class="cloud"></div>
  <div class="ground"></div>
</div>
```

```css hidden live-sample___animation
i {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  animation: falling 3s linear 0s infinite backwards;
  /* 雪片は CSS の線形グラデーションで作られている (https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Images/Using_gradients) */
  background-image:
    linear-gradient(180deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(90deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(45deg, transparent 43%, white 43% 57%, transparent 57%),
    linear-gradient(135deg, transparent 43%, white 43% 57%, transparent 57%);
}
i:nth-of-type(4n) {
  /* 木構造擬似クラスを用いたランダム性の生成 - https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Selectors/:nth-of-type */
  height: 30px;
  width: 30px;
  transform-origin: right -30px;
}
i:nth-of-type(4n + 1) {
  height: 24px;
  width: 24px;
  transform-origin: left 30px;
}
i:nth-of-type(4n + 2) {
  height: 10px;
  width: 10px;
  transform-origin: -30px 0;
}
i:nth-of-type(4n + 3) {
  height: 40px;
  width: 40px;
  transform-origin: -50px 0;
}
i:nth-of-type(4n) {
  animation-duration: 5.3s;
  animation-iteration-count: 12;
  transform-origin: -10px -20px;
}
i:nth-of-type(4n + 1) {
  animation-duration: 3.1s;
  animation-iteration-count: 20;
  transform-origin: 10px -20px;
}
i:nth-of-type(4n + 2) {
  animation-duration: 1.7s;
  animation-iteration-count: 35;
  transform-origin: right -20px;
}
i:nth-of-type(3n) {
  animation-delay: 2.3s;
}
i:nth-of-type(3n + 1) {
  animation-delay: 1.5s;
}
i:nth-of-type(3n + 2) {
  animation-delay: 3.4s;
}
i:nth-of-type(5n) {
  animation-timing-function: ease-in-out;
}
i:nth-of-type(5n + 1) {
  animation-timing-function: ease-out;
}
i:nth-of-type(5n + 2) {
  animation-timing-function: ease;
}
i:nth-of-type(5n + 3) {
  animation-timing-function: ease-in;
}
i:nth-of-type(5n + 4) {
  animation-timing-function: linear;
}
i:nth-of-type(11n) {
  animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
}
i:nth-of-type(7n) {
  opacity: 0.5;
}
i:nth-of-type(7n + 2) {
  opacity: 0.3;
}
i:nth-of-type(7n + 4) {
  opacity: 0.7;
}
i:nth-of-type(7n + 6) {
  opacity: 0.6;
  animation-timing-function: ease-in;
  transform-origin: left 10px;
}
i:nth-of-type(7n + 1) {
  opacity: 0.8;
}

.root {
  height: 580px;
  background-color: skyblue;
  border: 1px solid darkgrey;
  position: relative;
  overflow: hidden;
}
.ground,
.cloud {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
}
.cloud {
  width: 100%;
  height: 150px;
  background: white;
  border-radius: 0 0 90px 33% / 0 0 45px 50px;
  box-shadow:
    5px 15px 15px white,
    -5px 15px 15px white,
    0 20px 20px rgb(125 125 125 / 0.5);
  animation:
    clouds ease 5s alternate infinite 0.2s,
    wind ease-out 4s alternate infinite;
}
.ground {
  bottom: 0;
  background-image: linear-gradient(to top, white 97%, 99%, #bbbbbb 100%);
  background-position: center 580px;
  animation: snowfall linear 300s forwards;
  border: 1px solid grey;
  /* 地面を 3D レンダリングコンテキストに配置する（雪片が 3D レンダリングコンテキスト内にあるため） */
  transform: translate3d(0, 0, 0);
}

@keyframes snowfall {
  from {
    background-position: center 580px;
  }
  to {
    background-position: center 280px;
  }
}

@keyframes clouds {
  from {
    border-radius: 0 0 90px 33% / 0 0 45px 50px;
  }
  to {
    border-radius: 0 0 40px 50% / 0 0 55px 80px;
  }
}

@keyframes wind {
  from {
    height: 150px;
  }
  to {
    height: 100px;
  }
}

@keyframes falling {
  from {
    transform: translate(0, -50px) rotate(0deg) scale(0.9, 0.9);
  }
  to {
    transform: translate(30px, 600px) rotate(360deg) scale(1.1, 1.1);
  }
}

/* デフォルトでは、アニメーションは停止状態 */
i,
div[class] {
  animation-play-state: paused;
}
/* div にホバーするとアニメーションが再生される。また、入力がチェックされた場合、
チェックされたチェックボックスの後に続くアニメーションが再生されます。 */
div:hover *,
input:checked ~ div * {
  animation-play-state: running;
}

/* 入力の直後に表示されるラベルの内容を変更する。アクセシビリティ向上のため、ラベルに aria-label を付与。 */
input + label::after {
  content: "を再生";
}
input:checked + label::after {
  content: "を停止";
}
```

{{EmbedLiveSample("animation", "", "610px")}}

このサンプルアニメーションでは、 {{cssxref("animation-iteration-count")}} を使用して雪片を繰り返し降らせ、 {{cssxref("animation-direction")}} を使用して雲を前後に移動させ、 {{cssxref("animation-fill-mode")}} を使用して雲の動きに応じて雪の高さを上げ、 {{cssxref("animation-play-state")}} を使用してアニメーションを一時停止しています。

上記の例で "Play" をクリックすると、 MDN Playground でアニメーションのコードを表示または編集できます。

## リファレンス

### CSS プロパティ

- {{cssxref("animation")}} 一括指定
- {{cssxref("animation-composition")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("animation-timing-function")}}

> [!NOTE]
> CSS animations モジュールレベル 2 では、 `animation-trigger`, `animation-trigger-exit-range`, `animation-trigger-exit-range-end`, `animation-trigger-exit-range-start`, `animation-trigger-range`, `animation-trigger-range-end`, `animation-trigger-range-start`, `animation-trigger-timeline`, `animation-trigger-type` の各プロパティを導入しています。これらはまだ実装されていません。

### アットルールと記述子

- {{cssxref("@keyframes")}}

### イベント

再生時間が 0 秒のアニメーションも含め、すべてのアニメーションでアニメーションイベントが発生します。

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### インターフェイス

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSAnimation")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## ガイド

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
  - : CSS を使用してアニメーションを作成する方法についての一歩一歩進むチュートリアルです。この記事では、関連する CSS プロパティとアットルール、それに互いにどのように関係するのかを説明します。
- [アニメーション可能な CSS プロパティ](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties)
  - : さまざまな CSS プロパティをアニメーション化する方法の概要。アニメーションの種類と補間手法を含みます。
- [ウェブアニメーション API の使用](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : JavaScript で数行で解決できる一般的なアニメーションの要件です。

## 関連概念

- CSS の {{cssxref("will-change")}} プロパティ
- [`<easing-function>`](/ja/docs/Web/CSS/Reference/Values/easing-function) データ型
- [`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) メディアクエリー
- {{glossary("Bezier curve", "ベジェ曲線")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- CSS [トランジション](/ja/docs/Web/CSS/Guides/Transitions)モジュールのプロパティは、ユーザーの操作に基づいてアニメーションを起動します。
- {{cssxref("interpolate-size")}} プロパティと {{cssxref("calc-size()")}} 関数で、[内在的なサイズの値](/ja/docs/Glossary/Intrinsic_Size)を起点または終点としたアニメーションが利用できます。
- HTML の {{htmlelement("canvas")}} 要素と[キャンバス API](/ja/docs/Web/API/Canvas_API) および [WebGL API](/ja/docs/Web/API/WebGL_API) でグラフィックとアニメーションを描画できます。
- {{domxref("SVGAnimationElement")}} インターフェイスはすべてのアニメーション関連要素、例えば {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}}, {{domxref("SVGAnimateTransformElement")}} に使用します。
