---
title: CSS スクロールスナップ
slug: Web/CSS/Guides/Scroll_snap
original_slug: Web/CSS/CSS_scroll_snap
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS スクロールスナップ** (CSS scroll snap) モジュールは、スナップ位置を定義することで、パンおよびスクロールの動作を制御するためのプロパティを提供します。ユーザーが{{Glossary("scroll container", "スクロールコンテナー")}}内のスクロール可能なコンテンツをスクロールすると、コンテンツは指定された位置にスナップされ、ページングおよびスクロール位置指定の機能を提供します。

このモジュールには、スクロールコンテナーの scroll-padding プロパティ群があり、ビューに入ってくるスクロール操作中に、ページ切り替え時の最適なビュー領域に調整することができます。また、スクロールコンテナの子要素に設定される scroll-margin および scroll-alignment プロパティもあり、子要素が画面にスクロールされたときの視覚的な領域を調整することができます。さらに、個々の子要素でスクロールを強制的に停止させるプロパティも含まれています。

## スクロールスナップの動き

下のボックスでスクロールスナップを確認するには、スクロール可能なビューポート内の 45 個の番号付きボックスのグリッドを上下左右にスクロールしてください。
下の例の "Play" をクリックすると、ソースを MDN Playground で見たり編集したりすることができます。

```js hidden live-sample___scroll_snap
const positions = ["start", "center", "end"];
const inlineDirection = document.getElementById("inline");
const blockDirection = document.getElementById("block");
const stop = document.getElementById("stop");
const snap = document.getElementById("snap");
const all = document.querySelector("article");
const rules = document.styleSheets[0].cssRules;

inlineDirection.addEventListener("change", () => {
  setSSA();
});
blockDirection.addEventListener("change", () => {
  setSSA();
});
stop.addEventListener("change", () => {
  setSST();
});
window.addEventListener("load", () => {
  setSST();
  setSSA();
});
snap.addEventListener("change", () => {
  all.classList.toggle("snapDisabled");
});

function setSSA() {
  rules[0].style.scrollSnapAlign = `${positions[blockDirection.value]} ${
    positions[inlineDirection.value]
  }`;
}

function setSST() {
  if (stop.checked) {
    rules[0].style.scrollSnapStop = "always";
  } else {
    rules[0].style.scrollSnapStop = "normal";
  }
}
```

```html-nolint hidden live-sample___scroll_snap
<article>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div>
    <fieldset>
      <legend>オプションを変更</legend>
      <p>
        <label
          ><input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="block" />
          ブロック位置</label
        >
      </p>
      <p>
        <label>
          <input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="inline" />
          インライン位置
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" id="stop" />
          ボックスを越えてスクロールすることを防ぐ
        </label>
      </p>
    </fieldset>

    <p>
      <label><input type="checkbox" id="snap" /> スナップを無効化</label>
    </p>

    <datalist id="places">
      <option value="0">start</option>
      <option value="1">center</option>
      <option value="2">end</option>
    </datalist>
  </div>
</article>
```

```css-nolint hidden live-sample___scroll_snap
li {
  /*
  starts with:
      scroll-snap-align: center center;
      scroll-snap-stop: normal (defaults);

  コントロールを変更すると、JavaScript によって CSS が変更されます。
  以下を設定できます。
      scroll-snap-stop: always | normal;
      scroll-snap-align: start | center | end {2}
        */
}
ul {
  overflow: auto;
  scroll-snap-type: both mandatory;
  overscroll-behavior-x: contain;
}
article.snapDisabled fieldset {
  opacity: 20%;
  pointer-events: none;
}
article.snapDisabled ul {
  scroll-snap-type: initial;
  overscroll-behavior-x: initial;
}

@layer pageSetup {
  article {
    display: flex;
    gap: 2vw;
  }
  div {
    flex: 1;
  }
  ul {
    display: grid;
    gap: 6.25vw;
    padding: 12.5vw;
    box-sizing: border-box;
    border: 1px solid;
    grid-template-columns: repeat(5, 1fr);
    background: conic-gradient(
      at bottom left,
      red 0deg,
      yellow 15deg,
      green 30deg,
      blue 45deg,
      purple 60deg,
      magenta 75deg
    );
    background-attachment: local;
    margin: auto;
    width: 20vw;
    height: 20vw;
  }
  li {
    scroll-snap-align: center;
    height: 12.5vw;
    width: 12.5vw;
    outline: 3px inset;
    list-style-type: none;
    background: white;
    font-family: monospace;
    font-size: 3rem;
    line-height: 12vw;
    text-align: center;
    counter-increment: items 1;
  }
  li::after {
    content: counter(items);
  }
  input {
    vertical-align: bottom;
  }
  p {
    font-family: monospace;
  }
}
```

{{EmbedLiveSample("scroll_snap", "", "250px")}}

スクロールスナップを使用すると、スクロールした番号付きボックスの 1 つが所定の位置にスナップします。初期 CSS では、番号付きボックスはビューポートの中央にスナップします。スライダーを使用して、ブロックおよびインラインのスナップ位置を変更します。

スナッププロパティを使用すると、要素（この場合は番号付きボックス）をスクロールして越えることを許可またはブロックすることができます。「ボックスを越えてスクロールしない」チェックボックスを選択すると、すべてのスクロール操作が隣接するボックスへのスクロールに制限されます。

スクロールスナップと通常のスクロールを比較するには、「スナップを無効にする」チェックボックスをオンにして、もう一度スクロールしてみてください。

## リファレンス

### コンテナーの CSS プロパティ

- {{cssxref("scroll-snap-type")}}
- {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-padding-top")}}
  - {{cssxref("scroll-padding-right")}}
  - {{cssxref("scroll-padding-bottom")}}
  - {{cssxref("scroll-padding-left")}}
  - {{cssxref("scroll-padding-inline")}}
  - {{cssxref("scroll-padding-inline-start")}}
  - {{cssxref("scroll-padding-inline-end")}}
  - {{cssxref("scroll-padding-block")}}
  - {{cssxref("scroll-padding-block-start")}}
  - {{cssxref("scroll-padding-block-end")}}

### 子の CSS プロパティ

- {{cssxref("scroll-snap-align")}}
- {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-margin-top")}}
  - {{cssxref("scroll-margin-right")}}
  - {{cssxref("scroll-margin-bottom")}}
  - {{cssxref("scroll-margin-left")}}
  - {{cssxref("scroll-margin-inline")}}
  - {{cssxref("scroll-margin-inline-start")}}
  - {{cssxref("scroll-margin-inline-end")}}
  - {{cssxref("scroll-margin-block")}}
  - {{cssxref("scroll-margin-block-start")}}
  - {{cssxref("scroll-margin-block-end")}}
- {{cssxref("scroll-snap-stop")}}

### イベント

- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} {{experimental_inline}}
- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} {{experimental_inline}}

### インターフェイス

- {{domxref("SnapEvent")}} {{experimental_inline}}
  - {{domxref("SnapEvent.snapTargetBlock")}} {{experimental_inline}}
  - {{domxref("SnapEvent.snapTargetInline")}} {{experimental_inline}}

## ガイド

- [CSS スクロールスナップの基本概念](/ja/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
  - : CSS のスクロールスナップ機能の概要と例です。
- [ブラウザーの互換性とスクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
  - : スクロールスナップイベントである {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} および {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} の使用方法に関するガイドです。ブラウザーが新しいスナップターゲットが保留中または選択されていると判断したときに発生します。

## 関連概念

- {{cssxref(":target")}} 擬似クラス
- CSS の {{cssxref("overflow")}} プロパティ
- Element の {{domxref("Element.scroll", "scroll()")}} メソッド
- Element の {{domxref("Element.scrollBy", "scrollBy()")}} メソッド
- Element の {{domxref("Element.scrollIntoView", "scrollIntoView()")}} メソッド
- Element の {{domxref("Element.scrollTo", "scrollTo()")}} メソッド
- Element の {{domxref("Element.scroll_event", "scroll")}} イベント
- Element の {{domxref("Element.scrollend_event", "scrollend")}} イベント
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA ロール
- 用語: {{Glossary("Scroll container", "スクロールコンテナー")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS スクロールバースタイル設定](/ja/docs/Web/CSS/Guides/Scrollbars_styling)モジュール
- [CSS スクロール固定](/ja/docs/Web/CSS/Guides/Scroll_anchoring)モジュール
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) on adrianroselli.com (2022)
- [Scroll snap examples](https://codepen.io/collection/KpqBGW) on CodePen (2022)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap) on web.dev (2021)
- [Practical CSS scroll snapping/](https://css-tricks.com/practical-css-scroll-snapping/) on CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) on 12 Days of Web (2019)
