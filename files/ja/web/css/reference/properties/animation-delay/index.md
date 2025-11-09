---
title: animation-delay
slug: Web/CSS/Reference/Properties/animation-delay
original_slug: Web/CSS/animation-delay
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`animation-delay`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションをいつ開始するかを指定します。アニメーションは未来のある時点から、直ちに最初から、または直ちにアニメーション周期の途中から始めることができます。

{{InteractiveExample("CSS デモ: animation-delay")}}

```css interactive-example-choice
animation-delay: 250ms;
```

```css interactive-example-choice
animation-delay: 2s;
```

```css interactive-example-choice
animation-delay: -2s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>アニメーション<span id="playstatus"></span></div>
  <div id="example-element">delay を選択すると始まります！</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#playstatus {
  font-weight: bold;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: 2;
  animation-direction: alternate;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
"use strict";

window.addEventListener("load", () => {
  const el = document.getElementById("example-element");
  const status = document.getElementById("playstatus");

  function update() {
    status.textContent = "待機中";
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className = "animating";
      });
    });
  }

  el.addEventListener("animationstart", () => {
    status.textContent = "動作中";
  });

  el.addEventListener("animationend", () => {
    status.textContent = "完了";
  });

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
});
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* 複数のアニメーション */
animation-delay: 2.1s, 480ms;

/* グローバル値 */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: revert-layer;
animation-delay: unset;
```

### 値

- {{cssxref("&lt;time&gt;")}}
  - : アニメーションが要素に適用され、アニメーションが始まる瞬間からのオフセット時間。これは秒 (`s`) またはミリ秒 (`ms`) のどちらかで指定できます。単位は必須です。

    正の値を指定すると、指定した時刻が経過した後にアニメーションを始めることを示します。既定値である `0s` は、アニメーションが適用されるとすぐに始めることを示します。

    負の数が指定された場合は、アニメーションは直ちに始まりますが、アニメーション周期の途中からになります。例えば、 `-1s` を待機時間に指定すると、アニメーションは直ちに始まりますが、アニメーションが始まって 1 秒の時点から始まります。アニメーションの待機時間に負の値を指定しても、暗黙的に開始値が指定されている場合、開始値はアニメーションが要素に適用された瞬間から取得されます。

> [!NOTE]
> `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/Guides/Animations/Using#複数のアニメーションプロパティ値の設定)を参照してください。

> [!NOTE]
> `animation-delay` は [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)では効果がありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーションの待機時間を設定

このアニメーションの待機時間は 2 秒です。

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-delay: 2s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### 結果

矩形の上にカーソルを当てるとアニメーションが始まります。

{{EmbedLiveSample("Setting an animation delay","100%","250")}}

例については [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- JavaScript の {{domxref("AnimationEvent")}} API
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
