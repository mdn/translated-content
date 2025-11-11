---
title: "スキルテスト: イベント"
short-title: イベント
slug: Learn_web_development/Core/Scripting/Test_your_skills/Events
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、あなたが[イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)の記事を理解したかどうかを判定することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## DOM 操作: 有益なもの

下記の問題の中には、 [DOM](/ja/docs/Glossary/DOM) を操作するコードを書くことを求められるものがあります。例えば、新しい HTML 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて JavaScript を使用します。

このコースの中ではまだ明確に教えていませんが、この API を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような DOM API が必要なのかを調べてみてください。私たちの [DOM スクリプト操作入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)チュートリアルが良い出発点になるでしょう。

## イベント 1

イベントに関する最初の課題は、クリックするとテキストラベルを更新する {{htmlelement("button")}} です。 HTML は変更しないでください。 JavaScript だけを変更してください。

イベント関連の最初の課題では、ボタン (`btn`) がクリックされたときにボタン内のテキストを変化させ、再度クリックされたときに元に戻す単純なイベントハンドラーを作成する必要があります。

```css hidden live-sample___events-1
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

button {
  display: block;
  margin: 20px 0 20px 20px;
}

canvas {
  border: 1px solid black;
}
```

```html hidden live-sample___events-1
<button class="off">マシンはオフです</button>
```

```js live-sample___events-1
const btn = document.querySelector("button");

// ここにコードを追加
```

{{ EmbedLiveSample("events-1", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (btn.className === "on") {
    btn.textContent = "マシンはオフです";
    btn.className = "off";
  } else {
    btn.textContent = "マシンはオンです";
    btn.className = "on";
  }
});
```

</details>

## イベント 2

さて、キーボードイベントを見ていきましょう。

この評価に合格するには、キーボードの WASD キーが押されたときに指定されたキャンバスの周りを円が移動するイベントハンドラーを作る必要があります。円は関数 `drawCircle()` で描画します。関数 `drawCircle()` は以下の引数を入力として受け取ります。

- `x` — 円の X 座標。
- `y` — 円の Y 座標。
- `size` — 円の半径。

> [!WARNING]
> コードをテストするときは、キーボードコマンドを試す前にキャンバスにフォーカスを合わせておく必要があります（例えば、キャンバスをクリックするか、キーボードの Tab キーでキャンバスに移動してください）。そうしないと、コマンドは動作しません。

```html hidden live-sample___events-2
<canvas width="480" height="320" tabindex="0"> </canvas>
```

```css hidden live-sample___events-2
* {
  box-sizing: border-box;
}

canvas {
  border: 1px solid black;
}
```

```js live-sample___events-2
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);
// 以上のコードは編集しないでください。

// ここにコードを追加
```

{{ EmbedLiveSample("events-2", "100%", 350) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
  }

  drawCircle(x, y, size);
});
```

</details>

## イベント 3

イベント関連の次の課題では、`<button>` の親要素 (`<div class="button-bar"> ... </div>`) にイベントリスナーを設定する必要があります。このイベントリスナーは、いずれかのボタンをクリックしたときに呼び出され、`button-bar` の背景をボタンの `data-color` 属性に格納されている色に設定します。

すべてのボタンをループして、それぞれのボタンに自分自身でイベントリスナーを与えることなく、この問題を解決してください。

```html hidden live-sample___events-3
<div class="button-bar">
  <button data-color="red">Red</button>
  <button data-color="yellow">Yellow</button>
  <button data-color="green">Green</button>
  <button data-color="purple">Purple</button>
</div>
```

```css hidden live-sample___events-3
* {
  box-sizing: border-box;
}

html,
body,
.button-bar {
  height: 100%;
}

.button-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button {
  padding: 5px 10px;
}
```

```js live-sample___events-3
const buttonBar = document.querySelector(".button-bar");

// ここにコードを追加
```

{{ EmbedLiveSample("events-3", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
const buttonBar = document.querySelector(".button-bar");

function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);
```

</details>
