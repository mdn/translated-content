---
title: "スキルテスト: ループ"
short-title: ループ
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、あなたが[ループするコード](/ja/docs/Learn_web_development/Core/Scripting/Loops)を理解したかどうかを判定することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## DOM 操作: 有益なもの

下記の問題の中には、 [DOM](/ja/docs/Glossary/DOM) を操作するコードを書くことを求められるものがあります。例えば、新しい HTML 要素を作成し、そのテキストコンテンツが特定の文字列値と等しくなるように設定し、ページ上の既存の要素の中にその要素を入れるというようなことです。すべて JavaScript を使用します。

このコースの中ではまだ明確に教えていませんが、この API を使用する例をいくつか見ていると思いますので、問題にうまく答えるためにはどのような DOM API が必要なのかを調べてみてください。私たちの [DOM スクリプト操作入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)チュートリアルが良い出発点になるでしょう。

## ループ 1

最初のループの課題では、単純なループを作成して、指定された `myArray` の項目をすべて読み込み、リストアイテム（つまり、 [`<li>`](/ja/docs/Web/HTML/Reference/Elements/li) 要素）として画面に出力し、指定された `list` に追加します。

<!-- Code shared across examples -->

```html hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3
<section></section>
```

```css hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___loops-1
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// 以上のコードは編集しないでください。

// ここにコードを追加
```

{{ EmbedLiveSample("loops-1", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

for (let item of myArray) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
}
```

</details>

## ループ 2

この次の課題では、名前を指定されたら、名前と電話番号を保有する[オブジェクト](/ja/docs/Glossary/Object)の配列を検索し、名前を見つけたら名前と電話番号を段落に出力し、ループを実行する前に終了する単純なプログラムを書いていただきます。

始めに 3 つの変数が与えられています。

- `name` — 検索する名前を保持します。
- `para` — 段落への参照を保持し、結果を報告するために使用します。
- `phonebook` - 検索する電話帳の項目が格納されています。

> [!NOTE]
> オブジェクトについてまだ読んでいなくても心配しないでください。これで知る必要があるのは、メンバーと値のペアにアクセスする方法だけです。オブジェクトについては [JavaScript オブジェクトの基礎](/ja/docs/Learn_web_development/Core/Scripting/Object_basics)チュートリアルで読むことができます。

この課題を完成させるには、次のようにします。

1. (`phonebook`) 配列を反復処理して、指定された `name` を検索するループを記述してください。前回の課題で使用していない種類のループを使用しましょう。
2. `name` が見つかったら、それを関連付けられた `number` とともに、指定された段落 (`para`) の `textContent` に「&lt;name> の電話番号は &lt;number> です」という形で書き込みます。その後、ループが実行を完了する前にループを終了してください。
3. `name` を指定されたオブジェクトが 1 つも含まれていない場合、指定された段落の `textContent` に「電話帳に名前が見つかりません」と表示してください。

```js live-sample___loops-2
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// 以上のコードは編集しないでください。

// ここにコードを追加
```

{{ EmbedLiveSample("loops-2", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

for (let i = 0; i < phonebook.length; i++) {
  if (phonebook[i].name === name) {
    para.textContent = `${phonebook[i].name} の電話番号は ${phonebook[i].number} です。`;
    break;
  }

  if (i === phonebook.length - 1) {
    para.textContent = "電話帳に名前が見つかりません";
  }
}
```

</details>

## ループ 3

この最後の課題では、指定されたテスト関数を実行して、 `500` から `2` までのすべての数値が素数であるかどうかを検査し、素数を表示します。

次のものが提供されます。

- `i`: `500` の値から始まります。イテレーターとして使用するためのものです。
- `para`: 結果を報告するために使用する段落への参照が格納されています。
- `isPrime()`: 数値を渡すと、その数値が素数であれば `true`、素数でなければ `false` を返す関数です。

この課題を完成させるには、次のようにします。

1. ループを使用して `2` から `500` までの数を逆に読み（1 は素数として数えられません）、指定された `isPrime()` 関数を実行します。
2. 素数でないそれぞれの数について、次のループの反復処理に進みます。素数である各数値について、区切り文字とともに段落の `textContent` に追加します。

前回までの 2 つの課題では使用しなかった種類のループを使用しましょう。

```js live-sample___loops-3
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

section.appendChild(para);
```

{{ EmbedLiveSample("loops-3", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のようになるでしょう。

```js
// ...
// 以上のコードは編集しないでください。

do {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  i--;
} while (i > 1);

// 以下のコードは編集しないでください。
// ...
```

</details>
