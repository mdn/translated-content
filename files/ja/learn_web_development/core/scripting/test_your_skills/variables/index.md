---
title: "スキルテスト: 変数"
short-title: Variables
slug: Learn_web_development/Core/Scripting/Test_your_skills/Variables
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、あなたが[必要な情報を保管する — 変数](/ja/docs/Learn_web_development/Core/Scripting/Variables)の記事を理解したかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

<!-- この部分を含めるとリンターでエラーになるため、当面コメントアウトします。
## Interactive challenge

First of all, we are giving you a fun, interactive variables challenge created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete the task on the timeline (the little ghost icon) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~011" scrimtitle="Variables practice" survey="true"></scrim-inline>
-->

## 変数 1

この課題では、既存の変数 `myName` に格納されている値を自分の名前に修正するために、新しい行を追加する必要があります。

<!-- Code shared across examples -->

```html hidden live-sample___variables-1 live-sample___variables-2
<section></section>
```

```css hidden live-sample___variables-1 live-sample___variables-2
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___variables-1
let myName = "Paul";

// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);
```

{{ EmbedLiveSample("variables-1", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

myName = "Chris";

// 以下のコードは編集しないでください。
// ...
```

</details>

## 変数 2

これで最後の課題です。この場合、 2 つのエラーが存在する既存のコードが指定されます。結果パネルには、名前 `Chris` と、 20 年後の時点で Chris が何歳になっているかという文が出力されるはずです。どのように問題を修正し、出力を修正することができますか？

```js live-sample___variables-2
// 以下のコードを修正

const myName = "Default";
myName = "Chris";

let myAge = "42";

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("variables-2", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
// const を let に変更して、値を変更できるようにする
let myName = "Default";
myName = "Chris";

// myAge needs to have a number datatype
let myAge = 42;

// 以下のコードは編集しないでください。
// ...
```

</details>
