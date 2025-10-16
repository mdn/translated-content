---
title: "スキルテスト: 条件文"
short-title: 条件文
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、あなたが[コードでの意思決定 — 条件文](/ja/docs/Learn_web_development/Core/Scripting/Conditionals)を理解したかどうかを判定することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 条件文 1

この課題では、2 つの変数が提供されています。

- `season` — 現在の季節を示す文字列が格納されます。
- `response` — 初期化されていない状態で始まりますが、後に出力パネルに表示される応答を格納するために使用されます。

この課題を完成させるには、次のようにします。

1. `season` に文字列 "summer" が入っているかどうかを調べる条件を作成し、もし入っている場合は `response` に文字列を割り当てて、ユーザーに季節に関する適切なメッセージを表示させるようにしてください。そうでない場合は、 `response` に一般的な文字列を割り当てて、ユーザーに季節が何であるかわからないことを指示してください。
2. `season` に文字列 "winter" が入っているかどうかを調べる別の検査を追加し、こちらも `response` に適切な文字列を割り当ててください。

<!-- Code shared across examples -->

```html hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3
<section></section>
```

```css hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

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

{{ EmbedLiveSample("conditionals-1", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
let season = "summer";
let response;

if (season === "summer") {
  response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
  response = "I hope you are not too cold. Put some warm clothes on!";
} else {
  response =
    "I don't know what the season is where you are. Hope you are well.";
}

// 以下のコードは編集しないでください。
// ...
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

{{ EmbedLiveSample("conditionals-2", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
let response;
let score = 75;
let machineActive = false;

if (machineActive) {
  if (score < 0 || score > 100) {
    response = ありえません。エラーが発生しました。";
  } else if (score >= 0 && score < 20) {
    response = "ひどい点数だ。完全に失敗だ！";
  } else if (score >= 20 && score < 40) {
    response =
      "いくらか知っているようだが、かなり悪い点数だ。改善が必要だ。";
  } else if (score >= 40 && score < 70) {
    response = "悪くない仕事をしましたね！";
  } else if (score >= 70 && score < 90) {
    response = "素晴らしい点数だ、実によく分かっている";
  } else if (score >= 90 && score <= 100) {
    response = "すごい点数だね。カンニングしてない？本当？";
  }
} else {
  response = "マシンの電源がオフになっています。電源を入れてスコアを処理してください。";
}

// 以下のコードは編集しないでください。
// ...
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

{{ EmbedLiveSample("conditionals-3", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "Machine is active. Trying login.";
  pwdResult =
    pwd === "cheese"
      ? "Login successful."
      : "Password incorrect; login failed.";
} else {
  machineResult = "Machine is inactive. Activate and try logging in again.";
}

// 以下のコードは編集しないでください。
// ...
```

</details>
