---
title: "確認テスト: 関数"
short-title: "テスト: 関数"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

この確認テストの目的は、あなたが[関数 — 再利用可能なコードブロック](/ja/docs/Learn_web_development/Core/Scripting/Functions)、[独自の関数を作る](/ja/docs/Learn_web_development/Core/Scripting/Build_your_own_function)、[関数の返値](/ja/docs/Learn_web_development/Core/Scripting/Return_values)を理解したかどうかを判定することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## DOM 操作: 有益なもの

下記の問題の中には、 [DOM](/ja/docs/Glossary/DOM) を操作するコードを書くことを求められるものがあります。例えば、新しい HTML 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて JavaScript を使用します。

このコースの中ではまだ明確に教えていませんが、この API を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような DOM API が必要なのかを調べてみてください。私たちの [DOM スクリプト操作入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)チュートリアルが良い出発点になるでしょう。

<!--
## Interactive challenge

First of all, we are giving you a fun, interactive challenge involving function return values, created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete the task on the timeline (the little ghost icon) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<mdn-scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Returning values in functions" survey="true"></scrim-inline>
-->

## 関数 1

関数の最初の課題を完成させるには、次のようにします。

1. 関数 `chooseName()` を定義します。これは、指定された配列 (`names`) から指定された段落 (`para`) にランダムな名前を出力します。
2. `chooseName()` を一度実行します。

<!-- Code shared across examples -->

```html hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4 live-sample___functions-1-finish
<p></p>
```

```css hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4 live-sample___functions-1-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

この課題の出発点は次のようなものです（まだ何も見えません）。

{{ EmbedLiveSample("functions-1", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___functions-1
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// 以上のコードは編集しないでください。

// ここにコードを追加
```

更新後の出力の初期状態は、次のようになるはずです。

{{ EmbedLiveSample("functions-1-finish", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

```js hidden live-sample___functions-1-finish
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

</details>

## 関数 2

関数に関連する 2 つ目の課題では、指定された 5 つの入力変数に基づいて、指定された `<canvas>` （参照する変数 `canvas`、コンテキストは `ctx` で利用できる）に長方形を描画する関数を作成する必要があります。

- `x` — 長方形の X 座標
- `y` — 長方形の Y 座標
- `width` — 長方形の幅
- `height` — 長方形の高さ
- `color` — 長方形の色

この課題の出発点は次のようなものです（`<canvas>` 内にはまだ何も見えません）。

{{ EmbedLiveSample("functions-2", "100%", 180) }}

この出発点の基盤となるコードは次の通りです。

```html hidden live-sample___functions-2 live-sample___functions-2-finish
<canvas width="240" height="160"></canvas>
```

```css hidden live-sample___functions-2 live-sample___functions-2-finish
canvas {
  border: 1px solid black;
}
```

```js live-sample___functions-2
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// 以上のコードは編集しないでください。

// ここにコードを追加
```

更新後の出力の初期状態は、次のようになるはずです。

{{ EmbedLiveSample("functions-2-finish", "100%", 180) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);
```

```js hidden live-sample___functions-2-finish
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);
```

</details>

## 関数 3

この課題では、課題 1 で出された問題に戻り、それを改善することを目指します。

この課題を完成させるには、次のようにしてください。

1. 乱数を生成するコードを `random()` という別の関数に再編成します。この関数は、乱数の範囲となる 2 つの一般的な引数を取り、その結果を返します。
2. `chooseName()` 関数を更新して、乱数関数を使用するようにし、選択する配列を引数として受け取り（より柔軟になります）、結果を返すようにします。
3. 返された結果を段落 (`para`) の `textContent` に出力します。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("functions-3", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___functions-3
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// 以上のコードは編集しないでください。

// 以下のコードを更新してください

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

このタスクについては、見た目は出発点と変わらないため、完成したコンテンツは用意していません。コードがリファクタリングされただけです。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseName(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseName(names);
```

```js hidden
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseName(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseName(names);
```

</details>

## 関数 4

この課題では、名前の配列があり、 {{jsxref("Array.filter()")}} を使用して 5 文字より短い名前だけの配列を取得しています。フィルターには現在、名前の長さを調べる関数 `isShort()` が名前付きで渡され、名前が 5 文字未満の場合は `true` を返し、そうでない場合は `false` を返します。

この課題を完成させるには、`isShort()` 内の機能を、アロー関数として `filter()` の呼び出し内に直接含めるようにコードを更新します。どれだけコンパクトにできるかを試してみてください。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("functions-4", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___functions-4
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// 以上のコードは編集しないでください。

// 以下のコードを更新してください

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(isShort);
para.textContent = shortNames;
```

このタスクについては、見た目は出発点と変わらないため、完成したコンテンツは用意していません。コードがリファクタリングされただけです。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

// 以下のコードを更新してください

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

```js hidden
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
