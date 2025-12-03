---
title: CSS スクロール駆動アニメーション
short-title: スクロール駆動アニメーション
slug: Web/CSS/Guides/Scroll-driven_animations
l10n:
  sourceCommit: e9d014225ac5c28294a68d3743a3ef80794912b9
---

**CSS スクロール駆動アニメーション**モジュールは、[CSS アニメーションモジュール](/ja/docs/Web/CSS/Guides/Animations)と[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の上に構築する機能を提供します。これは、デフォルトの時間ベースの文書タイムラインではなく、スクロールベースのタイムラインに沿ってプロパティ値をアニメーションできるようにします。つまり、時間の経過だけでなく、要素自体、そのスクロールコンテナー、またはそのルート要素をスクロールすることで要素をアニメーションできるということです。

## スクロール駆動アニメーションの実演

アニメーションを制御するスクローラーは、アニメーションに名前を付けるか、 {{cssxref("scroll")}} 関数を使用するかして定義できます。

```html hidden live-sample___scroll_animation
<main>
  <div></div>
</main>
```

```css live-sample___scroll_animation
main {
  scroll-timeline: --main-timeline;
}

div {
  animation: background-animation linear;
  animation-timeline: scroll(nearest inline);
}

div::after {
  animation: shape-animation linear;
  animation-timeline: --main-timeline;
}
```

```css hidden live-sample___scroll_animation
@layer animations {
  @keyframes background-animation {
    0% {
      background-color: palegoldenrod;
    }
    100% {
      background-color: magenta;
    }
  }
  @keyframes shape-animation {
    0% {
      left: 0;
      top: 0;
      background-color: black;
    }
    50% {
      top: calc(100% - var(--elSize));
      left: calc(50% - var(--elSize));
      background-color: red;
    }
    100% {
      left: calc(100vw - var(--elSize));
      top: 0;
      rotate: 1800deg;
      background-color: white;
    }
  }
}

@layer page-setup {
  :root {
    --elSize: 50px;
  }
  main {
    height: 90vh;
    overflow: scroll;
    border: 1px solid;
    margin: 5vh auto;
  }
  div {
    height: 400vh;
    width: 400vw;
  }
  div::after {
    content: "";
    border: 1px solid red;
    height: var(--elSize);
    width: var(--elSize);
    position: absolute;
    border-radius: 20px;
    corner-shape: superellipse(-4);
  }
}

@layer no-support {
  @supports not (scroll-timeline: --main-timeline) {
    body::before {
      content: "このブラウザーはスクロール駆動アニメーションに対応していません。";
      background-color: wheat;
      display: block;
      width: 100%;
      text-align: center;
    }
    body > * {
      display: none;
    }
  }
}
```

{{EmbedLiveSample("scroll_animation", "", "400px")}}

要素をインライン方向にスクロールすると、背景色の変化が確認できます。垂直方向にスクロールすると、生成されたコンテンツが移動、回転、色変化する様子が見られます。

## リファレンス

### プロパティ

- {{cssxref("animation-range")}} 一括指定
  - {{cssxref("animation-range-end")}}
  - {{cssxref("animation-range-start")}}
- {{cssxref("scroll-timeline")}} 一括指定
  - {{cssxref("scroll-timeline-axis")}}
  - {{cssxref("scroll-timeline-name")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}} 一括指定
  - {{cssxref("view-timeline-axis")}}
  - {{cssxref("view-timeline-inset")}}
  - {{cssxref("view-timeline-name")}}

### データ型と値

- [`<axis>`](/ja/docs/Web/CSS/Reference/Values/axis)
- [`<timeline-range-name>`](/ja/docs/Web/CSS/Reference/Properties/animation-range#timeline-range-name)

### 関数

- [`scroll()`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
- [`view()`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline/view)

### インターフェイス

- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## ガイド

- [スクロール駆動アニメーションのタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
  - : スクロール駆動アニメーションのタイムラインとスクロール駆動アニメーションの作成についてです。

## 関連概念

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations) module
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow) module
  - {{glossary("Scroll container")}}
  - [スクロールポート](/ja/docs/Glossary/Scroll_container#scrollport)
- [ウェブアニメーション](/ja/docs/Web/API/Web_Animations_API) API
  - {{domxref("Element.animate()")}}
  - {{domxref("Animation")}}
  - {{domxref("AnimationTimeline")}}
  - {{domxref("DocumentTimeline")}}
  - {{domxref("KeyframeEffect")}}

## 仕様書

{{Specifications}}

## 関連情報

- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) (developer.chrome.com)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
