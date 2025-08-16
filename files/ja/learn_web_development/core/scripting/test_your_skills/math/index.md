---
title: "スキルテスト: 演算"
short-title: 演算
slug: Learn_web_development/Core/Scripting/Test_your_skills/Math
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、[JavaScript での基本演算 — 数値と演算子](/ja/docs/Learn_web_development/Core/Scripting/Math)の記事を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 演算 1

基本演算子の知識をテストすることから始めましょう。
4 つの数値を作成し、 2 つを加算し、 1 つを減算し、結果を掛け算してください。
最後に、この値が偶数であることを証明するテストを記述することも必要ですね。

この課題を完成させるには、次のようにします。

1. 数値の変数を 4 つ作成してください。変数にわかりやすい名前を付けてください。
2. 最初の 2 つの変数を加算し、その結果を別の変数に格納してください。
3. 3 番目の変数から 4 番目の変数を減算し、その結果を別の変数に格納してください。
4. 上記の **2** および **3** の工程の結果を乗算し、 `finalResult` という変数に格納してください。
5. 最後に、`finalResult` が偶数であるかどうかをチェックする計算式を、[算術演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#算術演算子)を使用して記述してください。結果を（偶数なら `0`、奇数なら `1`） `evenOddResult` という変数に格納してください。

このテストに合格するためには、 `finalResult` の値が `48` で、 `evenOddResult` の値が `0` である必要があります。

<!-- Code shared across examples -->

```html hidden live-sample___math-1 live-sample___math-2 live-sample___math-3
<section></section>
```

```css hidden live-sample___math-1 live-sample___math-2 live-sample___math-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js-nolint live-sample___math-1
let finalResult;
let evenOddResult;

// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `はい、よくできました。` : `いいえ、 ${finalResult} でした。`;
para1.textContent = `finalResult は 48 でしょうか？ ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "finalResult は偶数です。"
    : "finalResult は奇数です。うーん。";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("math-1", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;

// 以下のコードは編集しないでください。
// ...
```

</details>

## 演算 2

2 番目の課題では、すでに結果が変数 `result` と `result2` に格納されている 2 つの計算式が提供されています。
計算を行い、掛け算を行い、結果を小数点以下 2 桁まで書式化する必要があります。

以下のライブコードを更新して、次の手順に従い、完成例を再現してみてください。

1. `result` と `result2` を乗算し、結果を `result` に代入し戻す計算式を記述してください。これは、代入演算子の短縮形を使いましょう。
2. その結果を小数第 2 位までにフォーマットし、そして `finalResult` という変数に格納する 1 行コードを記述してください。
3. `typeof` を使用して `finalResult` のデータ型をチェックしてください。実際には `string` 型であることがわかるでしょう！それを `number` 型に変換し、結果を `finalNumber` という変数に格納する 1 行コードを記述してください。

このテストに合格するためには、 `finalNumber` の値は `4633.33` にならなければいけません。

```js live-sample___math-2
// Final result should be 4633.33

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `finalResult は ${finalResult} です。`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber は数値型です。よくできました！"
    : `残念！ finalNumber は数値ではありません。`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("math-2", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js-nolint
// Final result should be 4633.33

let result = (7 + 13 / 9) + 7;
let result2 = 100 / 2 * 6;

result *= result2;

const finalResult = result.toFixed(2);

const finalNumber = Number(finalResult);

// 以下のコードは編集しないでください。
// ...
```

</details>

## 演算 3

この記事の最後の課題では、いくつかのテストを記述していきましょう。

この課題を完成させるには、次のようにします。

1. 3 つのグループがあり、それぞれが文と 2 つの変数で構成されています。各グループについて、与えられている文を証明または反証するテストを記述してください。
2. これらのテスト結果を、それぞれ `weightComparison`、`heightComparison`、`pwdMatch` という変数に格納してください。

```js live-sample___math-3
// 仮説 1: 象はネズミよりも体重が軽い
const eleWeight = 1000;
const mouseWeight = 2;
// 仮説 2: ダチョウはアヒルよりも背が高い
const ostrichHeight = 2;
const duckHeight = 0.3;
// 仮説 3: 2つのパスワードは一致する
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "真 — 象はネズミよりも体重が軽い！？"
  : "偽 — もちろん、象はネズミよりも重いでしょう！";
const heightTest = heightComparison
  ? "真 — ダチョウは確かにアヒルよりも背が高い！"
  : "偽 — どうやら、アヒルはダチョウよりも背が高いようです！？";
const pwdTest = pwdMatch
  ? "真 — パスワードが一致します。"
  : "偽 — パスワードが一致しません。パスワードを確認してください。";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
```

{{ EmbedLiveSample("math-3", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js-nolint
// ...
// 以上のコードは編集しないでください。

const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

// 以下のコードは編集しないでください。
// ...
```

</details>
