---
title: animation-timing-function
slug: Web/CSS/Reference/Properties/animation-timing-function
original_slug: Web/CSS/animation-timing-function
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

**`animation-timing-function`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションがそれぞれの周期の中でどのように進行するかを設定します。

{{InteractiveExample("CSS デモ: animation-timing-function")}}

```css interactive-example-choice
animation-timing-function: linear;
```

```css interactive-example-choice
animation-timing-function: ease-in-out;
```

```css interactive-example-choice
animation-timing-function: steps(5, end);
```

```css interactive-example-choice
animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
  <button id="play-pause">再生</button>
</section>
```

```css interactive-example
#example-element {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: slide;
  animation-play-state: paused;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333;
  color: white;
  height: 150px;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#example-element.running {
  animation-play-state: running;
}

#play-pause {
  font-size: 2rem;
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
  const button = document.getElementById("play-pause");

  button.addEventListener("click", () => {
    if (el.classList.contains("running")) {
      el.classList.remove("running");
      button.textContent = "再生";
    } else {
      el.classList.add("running");
      button.textContent = "一時停止";
    }
  });
});
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* キーワード値 */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* cubic-bezier() 関数値 */
animation-timing-function: cubic-bezier(0.42, 0, 1, 1); /* ease-in */
animation-timing-function: cubic-bezier(0, 0, 0.58, 1); /* ease-out */
animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */

/* linear() 関数値 */
animation-timing-function: linear(0, 0.25, 1);
animation-timing-function: linear(0 0%, 0.25 50%, 1 100%);
animation-timing-function: linear(0, 0.25 50% 75%, 1);
animation-timing-function: linear(0, 0.25 50%, 0.25 75%, 1);

/* steps() 関数値 */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* 複数のアニメーション */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* グローバル値 */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: revert;
animation-timing-function: revert-layer;
animation-timing-function: unset;
```

### 値

- {{cssxref("&lt;easing-function&gt;")}}
  - : {{cssxref("animation-name")}} で定められた、アニメーションに対応するイージング関数です。

    ステップのないキーワードの値 （`ease`、`linear`、`ease-in-out` など）はそれぞれ、 4 つの点が修正された 3 次べジェ曲線を表しますが、 `cubic-bezier()` 関数の値では、定義されていない値を指定することができます。 `steps()` イージング関数は、入力時間を指定した等間隔の区間に分割します。この関数の引数には、ステップ数とステップ位置の 2 つが記載されています。
    - `linear`
      - : `cubic-bezier(0.0, 0.0, 1.0, 1.0)` と同じで、等しい速度でアニメーションします。
    - `ease`
      - : `cubic-bezier(0.25, 0.1, 0.25, 1.0)` と同じで、既定値であり、アニメーションの中央に向けて変化量が増加し、最後に向けて減少します。
    - `ease-in`
      - : `cubic-bezier(0.42, 0, 1.0, 1.0)` と同じで、プロパティのアニメーションの変化の速度はゆっくり始まり、終了まで加速します。
    - `ease-out`
      - : `cubic-bezier(0, 0, 0.58, 1.0)` と同じで、アニメーションは速く始まり、速度を落としながら続きます。
    - `ease-in-out`
      - : `cubic-bezier(0.42, 0, 0.58, 1.0)` と同じで、プロパティのアニメーションはゆっくり変化し、速度を上げ、また速度を落とします。

    - `cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>)`
      - : ユーザー定義の二次元ベジェ曲線で、 1 つ目から 3 つ目までの値は 0 から 1 の間である必要があります。

    - `linear(<number> <percentage>{1,2}, …)`
      - : この関数は、指定されたイージング経由点間で直線的に補間処理を行います。経由点は、出力の進行度と入力のパーセント値のペアです。入力のパーセント値はオプションであり、指定しない場合は推測されます。入力のパーセント値が指定されていない場合、最初の経由点と最後の経由点はそれぞれ `0%` と `100%` に設定され、その間の経由点は、パーセント値を持つ最も近い前回と次回の経由点を直線的に補間して得られたパーセント値になります。

    - `steps(<integer>, <step-position>)`
      - : 遷移に沿った _n_ 個の経由点に沿ってアニメーションを表示し、それぞれの経由点を同じ時間の長さで表示します。例えば、 _n_ が 5 の場合、 5 つのステップがあります。
        アニメーションが保持される位置は、以下のどの経由転が使用されるかによって、アニメーションに沿って 0%, 20%, 40%, 60%, 80% となるか、 20%, 40%, 60%, 80%, 100% となるか、アニメーションの 0% と 100% の間で 5 つの経由点を設定するか、 0% と 100% を含む 5 つの経由点を設定するか（すなわち 0%, 25%, 50%, 75%, 100%）、のいずれかを使用します。
        - `jump-start`
          - : アニメーションの開始時に最初のジャンプが発生するように、左連続関数を表します。
        - `jump-end`
          - : アニメーションの終了時に最後のジャンプが発生するように、右連続関数を表します。
        - `jump-none`
          - : どちらの側でもジャンプは行わず、効果的に補間の反復処理中にステップが除去されます。代わりに、 0% 位置と 100% 位置の両方で、それぞれ 1/n の間隔を保持します。
        - `jump-both`
          - : 0% 位置と 100% 位置の両方で一時停止を含み、アニメーションの反復中に効果的にステップを追加します。
        - `start`
          - : `jump-start` と同じです。
        - `end`
          - : `jump-end` と同じです。

    - `step-start`
      - : `steps(1, jump-start)` と同じです。
    - `step-end`
      - : `steps(1, jump-end)` と同じです。

> [!NOTE]
> `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/Guides/Animations/Using#複数のアニメーションプロパティ値の設定) を参照してください。

> [!NOTE]
> `animation-timing-function` は、 [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成するときに、通常の時間ベースのアニメーションと同じ効果があります。

## 解説

イージング関数は {{cssxref("@keyframes")}} ルール内にあるそれぞれのキーフレームに指定されることがあります。キーフレームに **`animation-timing-function`** が指定されていない場合、そのキーフレームにはアニメーションが適用された要素から **`animation-timing-function`** の適切な値が使用されます。

キーフレーム内では、`animation-timing-function` はアットルール固有の記述子であり、同名のプロパティではありません。時間ではアニメーションされません。むしろ、キーフレームのイージング関数は、それが指定されたキーフレームから、そのプロパティを指定する次のキーフレームまで、またはそのプロパティを指定する次のキーフレームがない場合はアニメーションが終わるまで、プロパティごとに適用されます。その結果、 **`animation-timing-function`** のうち **`100%`** または **`to`** に指定したものは使用されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

この節のすべての例では、様々な `animation-timing-function` 値を持つ複数の `<div>` 要素の `width` および `background-color` プロパティをアニメーションしています。幅は `0` から `100%` まで、背景色はライムからマゼンタまでアニメーションします。

### 直線関数の例

この例では、さまざまな `linear()` イージング関数の値の効果を示しています。

```html hidden
<div class="parent">
  <div class="linear">'linear' 値</div>
  <div class="linear-fn1">linear(0, 0.5 50%, 1)</div>
  <div class="linear-fn2">linear(0, 0.25 75%, 1)</div>
  <div class="linear-fn3">linear(0, 0.75 25%, 1)</div>
  <div class="linear-fn4">linear(0, 0.5 25% 75%, 1)</div>
  <div class="linear-fn5">linear(0, 0.25 45%, 0.75 55%, 0.5 70%, 1)</div>
  <div class="linear-fn6">linear(0, 1.2 50%, 0.75 80%, 1)</div>
  <div class="linear-fn7">linear(0, 0.5 75%, 1 120%)</div>
</div>
<div class="x-axis"><span>25%</span><span>50%</span><span>75%</span></div>
<button>アニメーションを再生</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 24.8%,
    grey 24.8%,
    grey 25.2%,
    white 25.2%,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%,
    white 74.8%,
    grey 74.8%,
    grey 75.2%,
    white 75.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}

.linear {
  animation-timing-function: linear;
}
.linear-fn1 {
  animation-timing-function: linear(0, 0.5 50%, 1);
}
.linear-fn2 {
  animation-timing-function: linear(0, 0.25 75%, 1);
}
.linear-fn3 {
  animation-timing-function: linear(0, 0.75 25%, 1);
}
.linear-fn4 {
  animation-timing-function: linear(0, 0.5 25% 75%, 1);
}
.linear-fn5 {
  animation-timing-function: linear(0, 0.25 45%, 0.75 55%, 0.5 70%, 1);
}
.linear-fn6 {
  animation-timing-function: linear(0, 1.2 50%, 0.75 80%, 1);
}
.linear-fn7 {
  animation-timing-function: linear(0, 0.5 75%, 1 120%);
}
```

{{EmbedLiveSample("Linear function examples", 600, 300)}}

次の画像は、この例で使用したすべての `linear()` 関数の値のグラフを表示しています。入力の進行状況 （時間） は x 軸に、出力の進行状況は y 軸にプロットされています。構文に従って、入力の進行状況は 0 から 100% の範囲、出力は 0 から 1 の範囲です。

!['linear' 関数のグラフを示した画像](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

出力は前方または後方に進む場合がありますのでご注意ください。

### 3 次ベジェの例

この例では、さまざまなベジェ曲線のイージング関数の効果を示しています。

```html hidden
<div class="parent">
  <div class="linear">linear</div>
  <div class="ease">ease</div>
  <div class="ease-in">ease-in</div>
  <div class="ease-out">ease-out</div>
  <div class="ease-in-out">ease-in-out</div>
  <div class="cb">cubic-bezier(.5, -0.5, 1, 1.5)</div>
</div>
<div class="x-axis"><span>50%</span></div>
<button>Play animation</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}

.linear {
  animation-timing-function: linear;
}
.ease {
  animation-timing-function: ease;
}
.ease-in {
  animation-timing-function: ease-in;
}
.ease-out {
  animation-timing-function: ease-out;
}
.ease-in-out {
  animation-timing-function: ease-in-out;
}
.cb {
  animation-timing-function: cubic-bezier(0.5, -0.5, 1, 1.5);
}
```

{{EmbedLiveSample("Cubic-Bezier_examples", 600, 250)}}

次の画像は、この例で使用したすべての 3 次ベジェ関数の値のグラフを表示しています。入力の進行状況 （時間） の範囲は 0 から 1 まで、出力の進行状況の範囲は 0 から 1 までです。

![関数 'cubic-bezier' のグラフを示す画像](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### ステップの例

この例では、いくつかの段階のイージング関数の値の効果を示しています。

```html hidden
<div class="parent">
  <div class="linear">linear</div>
  <div class="start">steps(4, start)</div>
  <div class="jump-start">steps(4, jump-start)</div>
  <div class="end">steps(4, end)</div>
  <div class="jump-end">steps(4, jump-end)</div>
  <div class="jump-both">steps(4, jump-both)</div>
  <div class="jump-none">steps(4, jump-none)</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
<div class="x-axis"><span>25%</span><span>50%</span><span>75%</span></div>
<button>アニメーションを再生</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 24.8%,
    grey 24.8%,
    grey 25.2%,
    white 25.2%,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%,
    white 74.8%,
    grey 74.8%,
    grey 75.2%,
    white 75.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}
```

```css hidden
.linear {
  animation-timing-function: linear;
}

.start {
  animation-timing-function: steps(4, start);
}
.jump-start {
  animation-timing-function: steps(4, jump-start);
}
.end {
  animation-timing-function: steps(4, end);
}
.jump-end {
  animation-timing-function: steps(4, jump-end);
}
.jump-both {
  animation-timing-function: steps(4, jump-both);
}
.jump-none {
  animation-timing-function: steps(4, jump-none);
}
.step-start {
  animation-timing-function: step-start;
}
.step-end {
  animation-timing-function: step-end;
}
```

{{EmbedLiveSample("Step_examples", 600, 350)}}

次の画像は、この例で使用したすべての `step()` 関数の値のグラフを表示しています。入力の進行状況（時間）および出力の進行状況の範囲は 0 から 1 です。

!['steps' 関数のグラフを示す画像](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref('easing-function')}}
- JavaScript の {{domxref("AnimationEvent")}} API
- [Cubic bézier generation tool](https://cubic-bezier.com/)
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
