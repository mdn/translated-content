---
title: "スキルテスト: JSON"
short-title: JSON
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、[JSON の操作](/ja/docs/Learn_web_development/Core/Scripting/JSON)の記事を理解できたかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## JSON 1

この記事の唯一の課題は、JSON データにアクセスして、それをページ内で使用することに関するものです。いくつかの母猫とその子猫に関する JSON データが [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) で提供されています。JSON は文字列としてページに読み込まれ、`displayCatInfo()` 関数の `catString` 引数で利用できるようになります。

この課題を完成させるには、格納するために `displayCatInfo()` 関数の不足部分を埋めてください。

- 母猫 3 匹の名前をカンマで区切って `motherInfo` という変数に入れてください。
- `kittenInfo` 変数には、子猫の総数、およびオスとメスの数を格納してください。

そして、これらの変数の値が、段落の中で画面に表示されるようにします。

ヒントや質問をいくつか示します。

- JSON データは `displayCatInfo()` 関数の中でテキストとして提供されます。JSON から何かデータを取得する前に、JSON を解釈する必要があります。
- 外側のループを使用して猫をループ処理して、その名前を `motherInfo` 変数文字列に追加し、内側のループを使用してすべての子猫をループ処理して、すべての子猫/オス/メスの合計を加算し、その詳細を `kittenInfo` 変数の文字列に追加するとよいでしょう。
- 最後の母猫の名前の前に "and" を、その後にピリオドを置く必要があります。どうすれば、JSON に何匹の猫がいても、このような動作をさせることができるでしょうか。
- なぜ `para1.textContent = motherInfo;` と `para2.textContent = kittenInfo;` の行は `displayCatInfo()` 関数の中にあり、スクリプトの終わりにはないのでしょうか。これは、非同期コードと関係があります。

```html hidden live-sample___json-1
<p class="one"></p>
<p class="two"></p>
```

```css hidden live-sample___json-1
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

```js live-sample___json-1
const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// 以上のコードは編集しないでください。

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // ここにコードを追加

  // 以下のコードは編集しないでください。

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

{{ EmbedLiveSample("json-1", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === "m") {
        male++;
      }
    }

    if (i < cats.length - 1) {
      motherInfo += `${cats[i].name}, `;
    } else {
      motherInfo += `and ${cats[i].name}.`;
    }
  }

  kittenInfo = `全部で ${total} 匹の子猫がいます。オスは ${male} 匹でメスは ${
    total - male
  } 匹です。`;

  // 以下のコードは編集しないでください。

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

</details>
