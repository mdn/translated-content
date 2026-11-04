---
title: CSS アニメーショントリガー
short-title: アニメーショントリガー
slug: Web/CSS/Guides/Animation_triggers
spec-urls: https://drafts.csswg.org/animation-triggers-1/
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

**CSS アニメーショントリガー**モジュールは、特定のタイムライントリガーが発生したときに、標準的な時間ベースの [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)を起動する機能を提供します。

**スクロールトリガーアニメーション**を使うと、JavaScript を使わずに、トリガーの有効化または無効化に応じて、通常の時間ベースのアニメーションを開始、一時停止、停止するタイミングを制御できます。例えば、スクロールする要素が[タイムライン範囲](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)に入ったときや、そこから出たときが該当します。

これらの範囲は通常、[ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#ビュー進行タイムライン)から取得されます。例えば、要素がスクロールポートに入ったときにアニメーションを開始し、スクロールポートから出たときに一時停止できます。プロパティを使うと、タイムライン範囲を変更し、作動範囲と有効化範囲を制御できます。トリガーには、タイムライン範囲に入るときと出るときで異なるアクションを指定できるため、アニメーションの再生を制御できます。

アニメーショントリガーモジュールは**イベントトリガー**も定義します。対応している場合、特定の DOM イベントが発生したときに、タイムラインベースのアニメーションを有効化します。

## アニメーショントリガーの動作

この例では、[スクロールトリガーアニメーション](/ja/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)を示します。ボックスを上下にスクロールしてみてください。「バウンサー」というテキストが現れるとボールのアニメーションが起動し、消えると同じアニメーションが逆方向に起動します。さらにスクロールすると、「もう一つのバウンサー」というテキストがスクロールポートに現れてから消えるときにも、同じ動作が繰り返されます。

```html hidden live-sample___in-action
<section>
  <div>
    <p>下にスクロール</p>
    <p id="trigger">バウンサー</p>
    <p>スクロールを続ける</p>
    <p>スクロールを続ける</p>
    <p>スクロールを続ける</p>
    <p id="trigger2">もう一つのバウンサー</p>
    <p>上にスクロール</p>
  </div>
</section>

<span id="ball"><span></span></span>
```

```css hidden live-sample___in-action
#ball,
#ball span {
  animation:
    move-right 2s 1 ease-out both,
    move-right 2s 1 ease-out forwards;
  animation-trigger:
    --t play-forwards play-backwards,
    --t2 play-forwards play-backwards;
}
#ball span {
  animation-name: bounce, bounce;
}

#trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
#trigger2 {
  timeline-trigger-name: --t2;
  timeline-trigger-source: view();
}

html {
  font-family: sans-serif;
  font-size: 1.3rem;
}

* {
  box-sizing: border-box;
}

@layer scroller {
  section {
    border: solid;
    width: 200px;
    height: 250px;
    margin-top: 50px;
    overflow: scroll;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    margin: 100% 0;
  }
  #trigger,
  #trigger2 {
    padding: 0;
    color: red;
  }
}

@layer animation-setup {
  #ball {
    position: fixed;
    top: 96vh;
  }
  #ball span {
    background: red;
    border-radius: 50%;
    height: 5vw;
    display: block;
    aspect-ratio: 1/1;
  }

  @keyframes move-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(90vw);
    }
  }

  @keyframes bounce {
    9%,
    24%,
    35%,
    44%,
    51%,
    58%,
    63%,
    68%,
    72%,
    76%,
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    0%,
    17%,
    30%,
    40%,
    48%,
    55%,
    61%,
    66%,
    70%,
    74% {
      animation-timing-function: ease-in;
    }
    0% {
      transform: translateY(-96vh);
    }
    17% {
      transform: translateY(-57.6vh);
    }
    30% {
      transform: translateY(-34.56vh);
    }
    40% {
      transform: translateY(-20.74vh);
    }
    48% {
      transform: translateY(-12.44vh);
    }
    55% {
      transform: translateY(-7.46vh);
    }
    61% {
      transform: translateY(-4.48vh);
    }
    66% {
      transform: translateY(-2.69vh);
    }
    70% {
      transform: translateY(-1.61vh);
    }
    74% {
      transform: translateY(-0.97vh);
    }
  }
}
```

```css hidden live-sample___in-action
@supports not (timeline-trigger-source: view()) {
  body::before {
    content: "このブラウザーは、スクロールトリガーアニメーションに対応していません。";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

{{embedlivesample("in-action", "100%", 400)}}

「バウンサー」要素に {{cssxref("timeline-trigger-name")}} と {{cssxref("timeline-trigger-source")}} を指定して、アニメーショントリガーを定義しています。ボールには、跳ねる {{cssxref("animation")}} を 2 つ設定しています。また、{{cssxref("animation-trigger")}} プロパティも設定しています。このプロパティは、両方のトリガー名と、アニメーションの有効化時および無効化時に実行するアクションを参照します。「バウンサー」要素が表示領域に入ったり、そこから出たりすることで、有効化と無効化が行われます。

## リファレンス

### プロパティ

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}} 一括指定
- {{cssxref("timeline-trigger-activation-range")}} 一括指定
  - {{cssxref("timeline-trigger-activation-range-end")}}
  - {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-active-range")}} 一括指定
  - {{cssxref("timeline-trigger-active-range-end")}}
  - {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("trigger-scope")}}

CSS アニメーショントリガーモジュールでは、`event-trigger`、`event-trigger-name`、`event-trigger-source` プロパティも導入しています。現在、これらの機能に対応しているブラウザーはありません。

### データ型と値

- {{cssxref("&lt;animation-action>")}}

## ガイド

- [CSS スクロールトリガーアニメーションの使用](/ja/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
  - : CSS スクロールトリガーアニメーションを実装するための入門ガイドです。
- [タイムライン範囲名](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
  - : {{cssxref("timeline-range-name")}} データ型と、さまざまなタイムライン範囲名について説明します。
- [タイムラインのインセットを理解する](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)
  - : スクロール駆動アニメーションとスクロールトリガーアニメーションを内側にずらすために使う、アニメーション添付範囲の構文について説明します。

## 関連する概念

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}} アットルール
  - [`<keyframe-selector>`](/ja/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
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

## 仕様書

{{Specifications}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [スクロール駆動アニメーションの使用](/ja/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS スクロール駆動アニメーションのタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-triggered animations are coming!](https://developer.chrome.com/blog/scroll-triggered-animations)<sup>(英語)</sup> - developer.chrome.com (2025)
