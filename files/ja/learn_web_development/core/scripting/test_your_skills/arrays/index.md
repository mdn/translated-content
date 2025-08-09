---
title: "スキルテスト: 配列"
short-title: 配列
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、[配列](/ja/docs/Learn_web_development/Core/Scripting/Arrays)の記事を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

<!--
## 対話型チャレンジ

まず最初に、[学習パートナー](/ja/docs/MDN/Writing_guidelines/Learning_content#外部リンクと埋め込み)である [Scrimba](https://scrimba.com/home) が作成した、マージンの一括指定を使った楽しくインタラクティブな課題をご紹介します。

埋め込みのスクリームを見て、指示に従ってコードを編集し、タイムライン上の課題（小さな幽霊のアイコン）を完了してください。完了したら、スクリームの再生を再開して、教師の解答が自分の解答と一致するかどうかを調べることができます。

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Render images from an array" survey="true"></scrim-inline>
-->

> [!NOTE]
> この課題は、このコースではまだ明示的に扱っていない JavaScript の機能に頼っているため、やや難しい目標です。最善を尽くして、わからないことはオンラインで情報を探してください。

## 配列 1

この課題では、配列の基本的な練習をします。

1. 3 つのアイテムの配列を作成し、それを `myArray` という変数に格納します。アイテムは、お好きなものなら何でもかまいません。好きな食べ物やバンド名などはどうでしょうか。
2. 次に、ブラケット記法と代入を使用して、配列の最初の 2 つのアイテムを変更します。
3. 最後に、配列の先頭に新しいアイテムを追加します。

<!-- Code shared across examples -->

```html hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4
<section></section>
```

```css hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___arrays-1
// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-1", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
const myArray = ["cats", "dogs", "chickens"];

myArray[0] = "horses";
myArray[1] = "pigs";

myArray.unshift("crocodiles");

// 以下のコードは編集しないでください。
// ...
```

</details>

## 配列 2

さて、別の課題に移りましょう。ここでは、取り組むべき文字列が与えられています。

この課題を完成させるには、次のようにします。

1. 文字列を配列に変換してください。その過程で、 `+` という文字を取り除きます。結果を `myArray` という変数に格納しましょう
2. 配列の要素数を、 `arrayLength` という変数に格納しましょう。
3. 配列の末尾の要素を、 `lastItem` という変数に格納しましょう。

```js live-sample___arrays-2
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
```

{{ EmbedLiveSample("arrays-2", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

let myArray = myString.split("+");

let arrayLength = myArray.length;

let lastItem = myArray[arrayLength - 1];

// 以下のコードは編集しないでください。
// ...
```

</details>

## 配列 3

このタスクでは、用意した配列を出発点として、やや逆行する作業を行います。具体的には、

1. 配列の末尾の要素を削除しましょう。
2. 配列の末尾に新たに 2 つの名前を追加しましょう。
3. 配列の各要素を調べて、要素のインデックス番号を丸括弧で囲み、名前の後ろに追記しましょう。例: `Ryu (0)`。 なお、このやり方は配列の記事では教えていませんので、自分で調べる必要があるでしょう。
4. 最後に、配列の各要素を `"-"` で区切って 1 つの文字列に結合し、 `myString` という変数に格納しましょう。

```js live-sample___arrays-3
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-3", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray.pop();

myArray.push("Zangief");
myArray.push("Ibuki");

myArray.forEach((element, index) => {
  const newElement = `${element} (${index})`;
  myArray[index] = newElement;
});

const myString = myArray.join(" - ");

// 以下のコードは編集しないでください。
// ...
```

</details>

## 配列 4

この配列の課題では、いくつかの鳥の名前を記載した配列を提供しています。

この課題を完成させるには、次のようにします。

1. `"Eagles"` 要素のインデックスを特定し、そのインデックスを用いて `"Eagles"` 要素を削除しましょう。
2. この配列から、名前が "E" で始まる鳥だけを含む `eBirds` という名前の新しい配列を作成しましょう。ちなみに、 {{jsxref("String.prototype.startsWith()", "startsWith()")}} は文字列が特定の文字で始まるかどうかを調べるのにとても役立ちます。

`"Emus,Egrets"` と表示されたら成功です。

```js live-sample___arrays-4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-4", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

// 以下のコードは編集しないでください。
// ...
```

</details>
