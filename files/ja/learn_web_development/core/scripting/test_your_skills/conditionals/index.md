---
title: "確認テスト: 条件文"
short-title: "テスト: 条件文"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

この確認テストの目的は、あなたが[コードでの意思決定 — 条件文](/ja/docs/Learn_web_development/Core/Scripting/Conditionals)を理解したかどうかを判定することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 条件文 1

この課題では、2 つの変数が提供されています。

- `season` — 現在の季節を示す文字列が格納されます。
- `response` — 初期化されていない状態で始まりますが、後に出力パネルに表示される応答を格納するために使用されます。

この課題を完成させるには、次のようにします。

1. `season` に文字列 "summer" が入っているかどうかを調べる条件を作成し、もし入っている場合は `response` に文字列を割り当てて、ユーザーに季節に関する適切なメッセージを表示させるようにしてください。そうでない場合は、 `response` に一般的な文字列を割り当てて、ユーザーに季節が何であるかわからないことを指示してください。
2. `season` に文字列 "winter" が入っているかどうかを調べる別の検査を追加し、こちらも `response` に適切な文字列を割り当ててください。

<!-- Code shared across examples -->

```html hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3 live-sample___conditionals-1-finish live-sample___conditionals-2-finish live-sample___conditionals-3-finish
<section></section>
```

```css hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3 live-sample___conditionals-1-finish live-sample___conditionals-2-finish live-sample___conditionals-3-finish
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

{{ EmbedLiveSample("conditionals-1", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___conditionals-1
let season = "summer";
let response;

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
```

更新後の出力の初期状態は、次のようになるはずです。

{{ EmbedLiveSample("conditionals-1-finish", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js-nolint
let season = "summer";
let response;

if (season === "summer") {
  response = "きっと暖かくて気持ちいいでしょうね。日差しを楽しんで！";
} else if (season === "winter") {
  response = "寒すぎないといいのですが。暖かい服を着てください！";
} else {
  response =
    "そちらの季節がどうなっているのかは分かりませんが、お元気で。";
}

// 以下のコードは編集しないでください。
// ...
```

```js-nolint hidden live-sample___conditionals-1-finish
let season = "summer";
let response;

if (season === "summer") {
  response = "きっと暖かくて気持ちいいでしょうね。日差しを楽しんで！";
} else if (season === "winter") {
  response = "寒すぎないといいのですが。暖かい服を着てください！";
} else {
  response =
    "そちらの季節がどうなっているのかは分かりませんが、お元気で。";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
```

</details>

## 条件文 2

この課題では、3 つの変数が提供されています。

- `machineActive` — 応答装置のスイッチがオンになっているかどうかを示す値 (`true`/`false`) が格納されます。
- `score` — 想像上のゲームにおけるあなたのスコアを格納します。このスコアは応答装置に供給され、どれだけうまくできたかを示す応答を提供します。
- `response` — 初期化されていない状態で始まりますが、後に出力パネルに表示される応答を格納するために使用されます。

この課題を完成させるには、次のようにします。

1. `if...else` 構造を作成して、マシンの電源が入っているかどうかを調べ、もし入っていなければ `response` 変数にメッセージを入れて、ユーザーにマシンの電源を入れるように指示するようにする必要があります。
2. 最初の `if...else` 構造の中に、もう一つの `if...else` を入れて、マシンの電源が入っていれば、score の値に応じて適切なメッセージを `response` 変数に格納するようにする必要があります。様々な条件の検査（および結果の応答）は以下の通りです。
   - 点数が 0 未満または 100 を超える場合 — "ありえません。エラーが発生しました。"
   - 0 から 19 点 — "ひどい点数だ。完全に失敗だ！"
   - 20 から 39 点 — "いくらか知っているようだが、かなり悪い点数だ。改善が必要だ。"
   - 40 から 69 点 — "悪くない仕事をしましたね！"
   - 70 から 89 点 — "素晴らしい点数だ、実によく分かっている"
   - 90 から 100 点 — "すごい点数だね。カンニングしてない？本当？"

下記のライブコードを更新して、完了例を再現してみてください。コードを入力したら、 `machineActive` を `true` に変更して、これがうまく動作するかどうか試してみてください。
この演習では、`machineActive` 変数の値に関係なく、`Your score is __` という文字列は画面に残ったままになることに注意してください。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("conditionals-2", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___conditionals-2
let response;
let score = 75;
let machineActive = false;

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
```

更新後の出力の初期状態は、次のようになるはずです。

{{ EmbedLiveSample("conditionals-2-finish", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
let response;
let score = 75;
let machineActive = false;

if (machineActive) {
  if (score < 0 || score > 100) {
    response = "ありえません。エラーが発生しました。";
  } else if (score >= 0 && score < 20) {
    response = "ひどい点数だ。完全に失敗だ！";
  } else if (score >= 20 && score < 40) {
    response =
      "いくらか分かっているようですが、かなり悪い点数です。改善が必要です。";
  } else if (score >= 40 && score < 70) {
    response = "悪くない仕事をしましたね！";
  } else if (score >= 70 && score < 90) {
    response = "素晴らしい点数だ、実によく分かっている";
  } else if (score >= 90 && score <= 100) {
    response = "すごい点数だね。カンニングしてない？本当？";
  }
} else {
  response = "電源がオフになっています。電源を入れてスコアを処理してください。";
}

// 以下のコードは編集しないでください。
// ...
```

```js hidden live-sample___conditionals-2-finish
let response;
let score = 75;
let machineActive = false;

if (machineActive) {
  if (score < 0 || score > 100) {
    response = "ありえません。エラーが発生しました。";
  } else if (score >= 0 && score < 20) {
    response = "ひどい点数だ。完全に失敗だ！";
  } else if (score >= 20 && score < 40) {
    response =
      "いくらか分かっているようですが、かなり悪い点数です。改善が必要です。";
  } else if (score >= 40 && score < 70) {
    response = "悪くない仕事をしましたね！";
  } else if (score >= 70 && score < 90) {
    response = "素晴らしい点数だ、実によく分かっている。";
  } else if (score >= 90 && score <= 100) {
    response = "すごい点数だね。カンニングしてない？本当？";
  }
} else {
  response = "電源がオフになっています。電源を入れてスコアを処理してください。";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `あなたの点数は ${score} です。`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

## 条件文 3

最後の課題では、4 つの変数が提供されています。

- `machineActive` - ログインマシンの電源が入っているかどうかを示す値 (`true`/`false`) が格納されています。
- `pwd` - ユーザーのログインパスワードが格納されています。
- `machineResult` - 初期化されていない状態で始まりますが、後にマシンの電源が入ったかどうかをユーザーに知らせるために、出力パネルに表示されるレスポンスを格納するために使用されます。
- `pwdResult` - 初期化されていない状態で始まりますが、後に出力パネルに表示されるレスポンスを格納するために使用され、ログインが成功したかどうかをユーザーに知らせます。

この課題を完成させるには、次のようにします。

1. マシンのスイッチがオンになっているかどうかを調べる `if...else` 構造を作成し、 `machineResult` 変数に、マシンがオンになっているかオフになっているかをユーザーに指示するメッセージを格納したいと思います。
2. マシンの電源が入っている場合、2 つ目の条件も実行して、 `pwd` が `cheese` と等しいかどうかを調べます。もしそうなら、 `pwdResult` に文字列を割り当てて、ユーザーにログインに成功したことを指示します。そうでない場合は、`pwdResult` に異なる形の文字列を割り当てて、ログインに失敗したことをユーザーに指示しなければなりません。これを単一の行で、`if...else` 構造でないものを使用してほしいと思います。

この課題の出発点は次のようなものです（まだ何も見えません）。

{{ EmbedLiveSample("conditionals-3", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___conditionals-3
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
```

更新後の出力は次のようになります。

{{ EmbedLiveSample("conditionals-3-finish", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "マシンは動作中です。ログインを試みています。";
  pwdResult =
    pwd === "cheese"
      ? "ログインに成功しました。"
      : "パスワードが違います。ログインに失敗しました。";
} else {
  machineResult =
    "マシンは動作していません。起動してログインしなおしてください。";
}

// 以下のコードは編集しないでください。
// ...
```

```js hidden live-sample___conditionals-3-finish
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "マシンは動作中です。ログインを試みています。";
  pwdResult =
    pwd === "cheese"
      ? "ログインに成功しました。"
      : "パスワードが違います。ログインに失敗しました。";
} else {
  machineResult =
    "マシンは動作していません。起動してログインしなおしてください。";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
