---
title: "課題: バカ話ジェネレーター"
short-title: "課題: 話ジェネレーター"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

この課題では、このモジュールでこれまでに学んだ知識を活かして、ランダムでふざけた物語を生成する楽しいアプリを作成します。その過程で、変数、数学、文字列、配列に関する知識が検査されます。楽しんでください！

## 出発点

始めるには、以下のコードパネルのいずれかにある **Play** ボタンをクリックし、MDN Playground で指定されたサンプルを開いてください。その後、[プロジェクト概要]の手順に従ってページを適切にスタイル設定してください。

```html live-sample___silly-story-start live-sample___silly-story-finish
<div>
  <label for="custom-name">人の名前を入力:</label>
  <input id="custom-name" type="text" placeholder="" />
</div>
<fieldset>
  <legend>ロケールを選択:</legend>
  <label for="us">米国</label
  ><input id="us" type="radio" name="uk-us" value="us" checked />
  <label for="uk">英国</label
  ><input id="uk" type="radio" name="uk-us" value="uk" />
</fieldset>
<div>
  <button class="generate">ランダムなお話を生成</button>
</div>
<!-- Thanks a lot to Willy Aguirre for his help with the code for this assessment -->
<p class="story"></p>
```

```css hidden live-sample___silly-story-start live-sample___silly-story-finish
body {
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
  width: 500px;
}

fieldset {
  border: 0;
}

fieldset,
legend {
  padding: 0;
  margin: 0;
}

input[type="text"] {
  margin-top: 5px;
  padding: 5px;
  width: 50%;
  display: block;
}

div,
fieldset {
  margin-top: 20px;
}

p {
  margin-top: 10px;
  background: #ffc125;
  padding: 20px;
  visibility: hidden;
}
```

```js live-sample___silly-story-start
// 変数と乱数関数の定義

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 生のテキスト文字列

// ゴブリンのウィリー
// ビッグダディ
// サンタクロース

// スープキッチン
// ディズニーランド
// ホワイトハウス

// 自然発火した
// 歩道の上で水たまりになった
// ナメクジに変身して、這って逃げ去った

// ランダム文字列の一部を返す関数

function returnRandomStoryString() {
  // 外は華氏 94 度もあったので、:insertx:は散歩に出かけた。:inserty:に着くと、しばらくの間、恐怖のあまり呆然と立ち尽くしていたが、やがて:insertz:。ボブはその一連のことがすべて目撃したが、驚くことはなかった ―― :insertx:の体重は 300 ポンドもあるし、その日は暑い日だったからだ。

  return storyText;
}

// イベントリスナーと部分的な生成関数の定義

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: "" を正しい式に置き換えましょう
  story.textContent = "";
  story.style.visibility = "visible";
}
```

{{EmbedLiveSample("silly-story-start", "100%", 300)}}

## プロジェクト概要

少しのテキストと JavaScript 関数がありますね。JavaScript を必要なだけ書いて、下記のような動作をするプログラムを書きましょう。

- "ランダムなお話を生成" ボタンが押された時にバカな話を生成する。
- バカな話を生成するボタンが押される前に "人の名前を入力" のテキストフィールドに名前が入力されていた場合には、既定の "Bob" という名前を入力された名前に置き換える。
- バカな話を生成するボタンが押される前に UK のラジオボタンがチェックされていた場合のみ、既定の US (米国) の重さと気温を UK (英国) の同等な単位に変換する。
- ボタンが押される度に新しいバカ話がランダムに生成されます。

### 初期変数と関数

この JavaScript のコードにおいて、「変数定義と乱数関数を完成させましょう」というコメントの下に、以下の参照を格納するために、3 つの定数があります。

- "人の名前を入力" テキストフィールド: `customName`
- "ランダムなお話を生成" ボタン: `generateBtn`
- 記事がコピーされる HTML 本体の下部にある {{htmlelement("p")}} 要素: `story`

さらに `randomValueFromArray()` という、引数として配列を取りその配列からランダムに 1 つの項目を返値として返す関数が使えるようになります。

「生のテキスト文字列」というコメントの下に、プログラムへの入力となるコメントアウトされた文字列がいくつかあります。これらの文字列のコメントを外し、同様に定数の中に格納しましょう。

1. 最初の 3 つの文字列を、`characters` という名前の配列に格納しましょう。
2. 2 つ目の 3 つの文字列のセットを、`places` という名前の配列に格納しましょう。
3. 3 つ目の 3 つの文字列のセットを、`events` という名前の配列に格納しましょう。

### `returnRandomStoryString()` 関数を完成させる

「ランダム文字列の一部を返す関数」というコメントの下には、長いコメント付きのテキストと、`storyText` という値を返す `return` 文を含む、未完成の `returnRandomStoryString()` があります。

この関数を完成させるには、次のようにします。

1. 長い文字列のコメントを外し、`storyText` という変数に格納してください。これはテンプレートリテラルである必要があります。
2. テンプレートリテラルの一番上に、`randomCharacter`、`randomPlace`、`randomEvent` という 3 つの定数を追加してください。これらは、それぞれ `characters`、`places`、`events` 配列からランダムな文字列を返す 3 回の `randomValueFromArray()` の呼び出しに等しく設定する必要があります。
3. テンプレートリテラル内で、`:insertx:`、`:inserty:`、および `:insertz:` を、それぞれ `randomCharacter`、`randomPlace`、`randomEvent` を含む埋め込み式に置き換えてください。

### `generateStory()` 関数を完成させる

「イベントリスナーと部分的な生成関数の定義」というコメントの下に、いくつかのコードアイテムがあります。

- `generateBtn` 変数に `click` イベントのリスナーを追加する行です。これにより、この変数が表すボタンがクリックされた際に、`generateStory()` 関数が実行されます。
- 半分できている　`generateStory()` 関数の定義の一部です。この課題の残りの部分では、この関数内の行を埋めて、関数を完了させ、正しく動作するようにします。

以下の手順に従って、この関数を完成させてください。

1. 1. `newStory` という名前の新しい変数を作成し、その値を `returnRandomStoryString()` の呼び出し結果に設定します。この関数は、ボタンが押されるたびに新しいランダムな話を生成するために必要です。もし `newStory` の値を直接 `storyText` に設定してしまうと、新しい話を生成できるのは一度きりになってしまいます。
2. 最初の `if` ブロックで、`newStory` の文字列内で見つかる 'Bob' という文字列を `name` 変数の値で置換するため、別の文字列置換のメソッド呼び出し追加します。このブロック内では、「もし (if) `customName` テキストフィールドに何かが入力されていれば、Bob をその文字列で置き換える」ということを言っています。
3. 次の `if` ブロックの中では、`uk` のラジオボタンが選択されているかどうかを調べています。もし選択されているのなら、重さと温度の単位をポンド・華氏から、ストーン・摂氏に変換したいと思います。そのために必要なことは...
   1. ポンドからストーンへ変換する公式、および、華氏から摂氏へ変換する公式を調べます。
   2. `weight` 変数が宣言されている行内の、300 をポンドからストーンに変換した値で置き換えます。そして `" stone"` (ストーン) を `Math.round()` の結果に対して、その後ろに結合します。
   3. `temperature` 変数が宣言されている行内の、`94` を華氏から摂氏に変換した値で置き換えます。`" Celsius"` (摂氏～度) という文字を `Math.round()` の結果に対して、後ろに結合します。
   4. 上記 2 つの変数の宣言の直後に、さらにもう 2 つ文字列を置換するコードを書いて、`300 pounds` を `weight` 変数の内容に、`94 Fahrenheit` を `temperature` 変数の内容に、それぞれ置換します。
4. 最後に、関数の下から 2 行目にある、`story` 変数の `textContent` プロパティ(段落を参照している) を、`newStory` 変数の内容で置き換えます。

## ヒントとコツ

- JavaScript を HTML に適用する以外に、HTML を変更する必要は全くありません。
- [`Math.round()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round) は JavaScript の組み込みメソッドで、計算結果を整数値に四捨五入します。
- 置き換える必要のある文字列のインスタンスは 3 つあります。 `replace()` メソッドを複数回繰り返しても、 `replaceAll()` を使用しても構いません。文字列は不変であることを覚えておいてください。

## 例

完成したアプリは、以下のライブ例のように動作するはずです。

{{EmbedLiveSample("silly-story-finish", "100%", 500)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript は、次のような感じになるはずです。

```js live-sample___silly-story-finish
// 変数定義と乱数関数を完成させましょう

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 模範解答: 生のテキスト文字列

const characters = ["ゴブリンのウィリー", "ビッグダディ", "サンタクロース"];
const places = ["スープキッチン", "ディズニーランド", "ホワイトハウス"];
const events = [
  "自然発火した",
  "歩道の上で水たまりになった",
  "ナメクジに変身して、這って逃げ去った",
];

// 模範解答: ランダム文字列の一部を返す関数

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = `外は華氏 94 度もあったので、${randomCharacter}は散歩に出かけた。${randomPlace}に着くと、しばらくの間、恐怖のあまり呆然と立ち尽くしていたが、やがて${randomEvent}。ボブはその一連のことがすべて目撃したが、驚くことはなかった ―― ${randomCharacter}の体重は 300 ポンドもあるし、その日は暑い日だったからだ。`;

  return storyText;
}

// 模範解答: イベントリスナーと部分的な生成関数の定義

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("ボブ", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} ストーン`;
    const temperature = `摂氏 ${Math.round((94 - 32) * (5 / 9))} 度`;
    newStory = newStory.replace("300 ポンド", weight);
    newStory = newStory.replace("華氏 94 度", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
```

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
