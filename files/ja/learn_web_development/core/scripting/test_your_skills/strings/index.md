---
title: "スキルテスト: 文字列"
short-title: 文字列
slug: Learn_web_development/Core/Scripting/Test_your_skills/Strings
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、[テキストの扱い — JavaScript での文字列](/ja/docs/Learn_web_development/Core/Scripting/Strings)および[便利な文字列メソッド](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods)の記事を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 文字列 1

最初の文字列の課題では、小さなことから始めましょう。すでに `quoteStart` という変数の中に有名な引用文の半分があります。

この課題を完成させるには、次のようにしてください。

1. 引用の残りの半分を調べて、それを例の `quoteEnd` という変数に追加しましょう。
2. 2 つの文字列を連結して、完全に引用を格納した単一の文字列にします。その結果を `finalQuote` という名前の変数に保存しましょう。
3. この点で エラーが発生することがわかります。 `quoteStart` の問題を修正し、完全な引用が正しく表示されるようにできますか？

<!-- Code shared across examples -->

```html hidden live-sample___strings-1 live-sample___strings-2 live-sample___strings-3 live-sample___strings-4
<section></section>
```

```css hidden live-sample___strings-1 live-sample___strings-2 live-sample___strings-3 live-sample___strings-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js-nolint live-sample___strings-1
const quoteStart = 'Don't judge each day by the harvest you reap ';

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

{{ EmbedLiveSample("strings-1", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js-nolint
// 引用符をエスケープする必要があります
const quoteStart = 'Don\'t judge each day by the harvest you reap ';

const quoteEnd = "but by the seeds that you plant.";

const finalQuote = `${quoteStart}${quoteEnd}`;

// 以下のコードは編集しないでください。
// ...
```

</details>

## 文字列 2

この課題では、 2 つの文字列を格納する `quote` と `substring` という 2 つの変数が設定されています。

この課題を完成させるには、次のようにしてください。

1. quote の長さを取得し、それを `quoteLength` という変数に格納しましょう。
2. `substring` が `quote` の中で現れるインデックスの位置を探し、その値を `index` という変数に格納しましょう。
3. これらの変数を組み合わせを使用して、変数と利用できる文字列プロパティ/メソッドを組み合わせて、元の引用文を "I do not like green eggs and ham." に切り詰め、 `revisedQuote` という変数に格納しましょう。

```js live-sample___strings-2
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("strings-2", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index + substring.length + 1);

// 以下のコードは編集しないでください。
// ...
```

</details>

## 文字列 3

次の文字列の課題では、前回仕上げたものと同じ引用文が指定されていますが、ちょっとおかしいです。このように修正して更新してください。

この課題を完成させるには、次のようにしてください。

1. 大文字小文字を正しい文になるよう変更しましょう（最初の文字を大文字にする以外はすべて小文字にしましょう）。新しい引用文を `fixedQuote` という変数に格納しましょう。
2. `fixedQuote` では、 "green eggs and ham" を、あなたが実際に嫌いな別の食べ物に置き換えてください。
3. もう一つ小さな修正があります。引用文の末尾にピリオドを追加し、最終版を `finalQuote` という変数に保存しましょう。

```js live-sample___strings-3
const quote = "I dO nOT lIke gREen eGgS anD HAM";

// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
```

{{ EmbedLiveSample("strings-3", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

let fixedQuote = quote.toLowerCase();
const firstLetter = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "pickled onions");
const finalQuote = `${fixedQuote}.`;

// 以下のコードは編集しないでください。
// ...
```

</details>

## 文字列 4

最後の文字列の課題では、定理の名前、 2 つの数値、不完全な文字列（追加が必要な部分はアスタリスク (`*`) で示されています）が与えられています。文字列の値を以下のように変更してください。

この課題を完成させるには、次のようにしてください。

1. 通常の文字列リテラルからテンプレートリテラルに変更しましょう。
2. 4 つのアスタリスクを 4 つのテンプレートリテラルのプレースホルダーに置き換えてください。次のようにします。
   1. 定理の名前。
   2. 持っている 2 つの数値。
   3. 直角三角形の斜辺の長さを、他の 2 辺の長さが指定された 2 つの値と同じであるとして求めたもの。現在ある値から計算する方法を見ていく必要があります。プレースホルダーの中で計算してください。

```js live-sample___strings-4
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// 以上のコードは編集しないでください。

// Edit the string literal
const myString =
  "Using *, we can work out that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.";

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

{{ EmbedLiveSample("strings-4", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b},
  the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;

// 以下のコードは編集しないでください。
// ...
```

</details>
