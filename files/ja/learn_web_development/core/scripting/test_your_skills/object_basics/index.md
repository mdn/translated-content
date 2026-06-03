---
title: "確認テスト: オブジェクトの基本"
short-title: "テスト: オブジェクト"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: b36d59a0df933597c7d3b55e363f7a59e30d3ba3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

この確認テストの目的は、[JavaScript オブジェクトの基本](/ja/docs/Learn_web_development/Core/Scripting/Object_basics)の理解度をテストすることです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## オブジェクトの基本 1

この課題では、オブジェクトリテラルが与えられています。それに対していくつかの作業をしていただきます。

この課題を完成させるには、次のようにします。

1. `catName` 変数に、ブラケット記法を用いて、 `name` プロパティの値を保存する
2. ドット記法を用いて、 `greeting()` メソッドを実行する（これはブラウザーのコンソールに挨拶をログ出力します）。
3. `color` プロパティを `black` に変更する。

<!-- Code shared across examples -->

```html hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4 live-sample___objects-1-finish live-sample___objects-2-finish live-sample___objects-4-finish
<section></section>
```

```css hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4 live-sample___objects-1-finish live-sample___objects-2-finish live-sample___objects-4-finish
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

この課題の出発点は次のようなものです（まだ何も表示されません）。

{{ EmbedLiveSample("objects-1", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___objects-1
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `この猫の名前は ${catName} です。`;
para2.textContent = `この猫の色は ${cat.color} です。`;
section.appendChild(para1);
section.appendChild(para2);
```

更新後の出力は次のようになります。

{{ EmbedLiveSample("objects-1-finish", "100%", 80) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

const catName = cat["name"];
cat.greeting();
cat.color = "black";

// 以下のコードは編集しないでください。
// ...
```

```js hidden live-sample___objects-1-finish
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

const catName = cat["name"];
cat.greeting();
cat.color = "black";

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);
```

</details>

## オブジェクトの基本 2

次の課題では、お気に入りのバンドの 1 つを表す、自分だけのオブジェクトリテラルを作成してみましょう。

この課題を完成させるには、次のようにします。

1. 次のプロパティが含まれている `band` というオブジェクトリテラルを作成します。
   - `name`: バンドの名前を表す文字列
   - `nationality`: バンドの出身国を表す文字列
   - `genre`: バンドが演奏する音楽の種類
   - `members`: バンドのメンバー数を表す数字
   - `formed`: バンドが結成した年を表す数字
   - `split`: バンドが解散した年を表す数字、まだ活動している場合は`false`
   - `albums`: そのバンドによってリリースされたアルバムを表す配列。それぞれの配列の要素は、下記の要素を含んだオブジェクトであること
     - `name`: アルバムの名前を表す文字列
     - `released`: リリースされた年を表す数字
       > [!NOTE]
       > `albums` 配列には、少なくとも 2 つのアルバムを含めること。
2. これを実行したら、変数 `bandInfo` に文字列を書き込む必要があります。この文字列には、バンド名、国籍、活動年数、スタイル設定、最初のアルバムのタイトルとリリース日などの詳細な略歴を格納します。

この課題の出発点は次のようなものです（まだ何も表示されません）。

{{ EmbedLiveSample("objects-2", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___objects-2
let bandInfo;

// 以上のコードは編集しないでください。

// ここにコードを追加

// 以下のコードは編集しないでください。

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
```

更新後の出力は次のようになります。

{{ EmbedLiveSample("objects-2-finish", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

const band = {
  name: "Black Sabbath",
  nationality: "British",
  genre: "heavy metal",
  members: 4,
  formed: 1968,
  split: 2025,
  albums: [
    {
      name: "Black Sabbath",
      released: 1970,
    },
    {
      name: "Paranoid",
      released: 1970,
    },
    {
      name: "Master of Reality",
      released: 1971,
    },
    {
      name: "Vol. 4",
      released: 1972,
    },
  ],
};

bandInfo = `${band.nationality} の ${band.genre} バンドである ${band.name} は ${band.formed} 年から ${band.split} 年の間で活躍しました。最初のアルバム ${band.albums[0].name} は ${band.albums[0].released} 年にリリースされました。`;

// 以下のコードは編集しないでください。
// ...
```

```js hidden live-sample___objects-2-finish
let bandInfo;

const band = {
  name: "Black Sabbath",
  nationality: "British",
  genre: "heavy metal",
  members: 4,
  formed: 1968,
  split: 2025,
  albums: [
    {
      name: "Black Sabbath",
      released: 1970,
    },
    {
      name: "Paranoid",
      released: 1970,
    },
    {
      name: "Master of Reality",
      released: 1971,
    },
    {
      name: "Vol. 4",
      released: 1972,
    },
  ],
};

bandInfo = `${band.nationality} の ${band.genre} バンドである ${band.name} は ${band.formed} 年から ${band.split} 年の間で活躍しました。最初のアルバム ${band.albums[0].name} は ${band.albums[0].released} 年にリリースされました。`;

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
```

</details>

## オブジェクトの基本 3

この課題では、課題 1 の `cat` オブジェクトリテラルに戻りましょう。

この課題を完成させるには、次のようにします。

1. `greeting()` メソッドを、 `"Hello, said Bertie the Cymric."` とログ出力されるように、書き直してください。 ブラウザーの開発者ツールのコンソールにアクセスしますが、名前や品種に関係なく、同じ構造のすべての `cat` オブジェクトで機能します。
2. 完了したら、 `cat2` という独自のオブジェクトを作成します。このオブジェクトは、同じ構造、まったく同じ `greeting()` メソッドを持ちますが、名前、品種、色が異なります。
3. 両方の `greeting()` メソッドを呼び出して、適切なあいさつがコンソールに記録されることを確認します。

この課題の出発点は次のようなものです（まだ何も表示されません）。

{{ EmbedLiveSample("objects-3", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___objects-3
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// 以上のコードは編集しないでください。

// ここにコードを追加
```

We've not provided finished content for this task, as it doesn't print anything to the DOM. The output is all logged to the console.

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は次のようになります。

```js
// ...
// 以上のコードは編集しないでください。

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
```

```js hidden
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
```

</details>

## オブジェクトの基本 4

課題 3 で書いたコードでは、`greeting()` メソッドが 2 回定義されています。それぞれが猫 1 匹分です。これは理想的ではありません（仕様上、[DRY](https://ja.wikipedia.org/wiki/Don%27t_repeat_yourself) または "Don't Repeat Yourself" と呼ばれる原則に違反しています）。この課題では、オブジェクトのメンバーが 1 回だけ定義されるようにコードを改善してください。

この課題を完成させるには、次のようにします。

1. cat インスタンスを定義する JavaScript クラスを作成する
2. `new` キーワードとともにクラスを使用して、`cat` および `cat2` インスタンスを作成します。

この課題の出発点は次のようなものです（まだ何も表示されません）。

{{ EmbedLiveSample("objects-4", "100%", 60) }}

この出発点の基盤となるコードは次の通りです。

```js live-sample___objects-4
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

// 以下のコードは編集しないでください。

cat.greeting();
cat2.greeting();
```

このタスクでは DOM に何も出力されないため、完成したコンテンツは用意していません。出力はすべてコンソールに記録されます。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は次のようになります。

```js
class Cat {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

const cat = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");

// 以下のコードは編集しないでください。
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
