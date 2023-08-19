---
title: CSS アニメーションのヒントとコツ
slug: Web/CSS/CSS_animations/Tips
---

{{CSSRef}}

CSS アニメーションを使えば、文書やアプリを構成する要素に、驚くようなことができるようになります。しかし、当たり前のようで当たり前でないことや、すぐには思いつかないような賢い方法があるかもしれません。この記事では、止まってしまったアニメーションを再び動かす方法など、作業を楽にするために見つけたヒントをまとめています。

## 再度アニメーションを実行する

[CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)の仕様書では再度アニメーションを実行する方法を提示していません。 要素に魔法の関数 `resetAnimation()` というものはなく、要素の {{cssxref("animation-play-state")}} を再び `"running"` に設定することさえもできません。その代わりに、停止したアニメーションをリプレイするための巧妙なトリックを使う必要があります。

ここでは、私たちが安定していて信頼性があると感じている方法をご紹介します。

### HTML の内容

はじめに、HTML にアニメーションしてほしい {{HTMLElement("div")}} と、アニメーションを再生 (またはリプレイ) するためのボタンを定義しましょう。

```html
<div class="box"></div>

<div class="runButton">Click me to run the animation</div>
```

### CSS の内容

次に CSS を使ってアニメーションそのものを定義しましょう。 簡潔さのためにいくつかの重要ではない CSS ("Run" ボタンそのもののスタイル) はここではお見せしません。

```css hidden
.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}
```

```css
@keyframes colorchange {
  0% {
    background: yellow;
  }
  100% {
    background: blue;
  }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}
```

ここに 2 つのクラスがあります。 `"box"` ボックスの外観に関する基本的な記述で、アニメーションの情報は含まれていません。アニメーションの詳細は `"changing"` クラスに含まれており、その中で `"colorchange"` と名付けられた {{cssxref("@keyframes")}} という名前の `"colorchange"` が 2 秒間に渡ってボックスをアニメーションさせるために使用されるべきであることを述べています。

このため、ボックスは所定の位置でアニメーション効果を開始しないので、アニメーションすることはないでしょう。

### JavaScript の内容

次にアニメーションを行うための JavaScript を見ていきます。 このテクニックの内容は `play()` 関数にあり、ユーザーが "Run" ボタンをクリックした時に呼ばれます。

```js
function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}
```

これは奇妙だと思いませんか？なぜなら、アニメーションを再び再生する唯一の方法は、アニメーション効果を削除し、それを認識するために文書がスタイルを再計算してから、アニメーション効果を要素に追加することだからです。これを実現するには、工夫が必要です。

`play()` 関数が呼び出された時に起きることは次の通りです。

1. box の CSS クラスのリストを単純な `"box"` にリセットします。 これは、その box に現在適用されている他のどのクラスを取り除く効果を持ちます。 これにはアニメーションを扱う `"changing"` クラスが含まれます。 言い換えると、ボックスからアニメーション効果を取り除きます。 しかし、クラスのリストを変更することはそのスタイルの再計算が完了するまで効果を持たず、更新はその変更を反映するために発生し続けます。
2. スタイルが確実に再計算されるように、{{domxref("window.requestAnimationFrame()")}} を使用し、コールバックを指定します。このコールバックは、文書の次の再描画の直前に実行されます。問題は、再描画の前なので、スタイルの再計算がまだ行われていないということです。
3. このコールバックは、巧妙に `requestAnimationFrame()` を 2 回目に呼び出しています。今回のコールバックは、スタイルの再計算が行われた後の、次の再描画の前に実行されます。このコールバックは、ボックスに `"changing"` クラスを追加し、再描画で再びアニメーションを開始するようにしています。

もちろん、実際に動作するために "Run" ボタンにイベントハンドラーを追加する必要があります。

```js
document.querySelector(".runButton").addEventListener("click", play, false);
```

### 結果

{{ EmbedLiveSample('Run_an_animation_again', 320, 160) }}

## アニメーションの停止

要素に適用されている {{cssxref("animation-name")}} を削除すると、その要素は次の状態にジャンプまたはカットします。しかし、アニメーションを完了させてから停止させたい場合は、別の方法を取らなければなりません。主なトリックは以下の通りです。

1. 可能なら自身を含めるようアニメーションさせること。 これは `animation-direction: alternate` を信頼するべきではないことを意味します。 代わりに一回の繰り返しの中で完全なアニメーションを経過するキーフレームアニメーションを明示的に書くべきです。
2. JavaScript を使用し、`animationiteration` イベントが発生した時に使われるアニメーションをクリアーすること。

次のデモは前述の JavaScript テクニックをどのように利用するかを示します。

```css
.slidein {
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}

.stopped {
  animation-name: none;
}

@keyframes slidein {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 50%;
  }
  100% {
    margin-left: 0%;
  }
}
```

```html
<h1 id="watchme">Click me to stop</h1>
```

```js
let watchme = document.getElementById("watchme");

watchme.className = "slidein";
const listener = (e) => {
  watchme.className = "slidein stopped";
};
watchme.addEventListener("click", () =>
  watchme.addEventListener("animationiteration", listener, false),
);
```

デモ <https://jsfiddle.net/morenoh149/5ty5a4oy/>

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{domxref("Window.requestAnimationFrame()")}}
