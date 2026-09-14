---
title: 便利な文字列のメソッド
short-title: 文字列のメソッド
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 003b6ceec6ecd0a3e36046a8515ab7fbc8dc220d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}

文字列の基本についてはすでに見ました。ここからはレベルを上げて、組み込みのメソッドを使用して文字列に対して実行できる便利な操作について考えてみましょう。例えば、文字列の長さを調べたり、繋げたり、分割したり、ある文字を他の文字に置き換えたりなどです。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解していること。<a href="/ja/docs/Learn_web_development/Core/Scripting/Strings">文字列の基本</a>の知識。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
          JavaScript で組み込まれた一般的なプロパティとメソッドを使用する文字列操作。
      </td>
    </tr>
  </tbody>
</table>

## オブジェクトとしての文字列

JavaScript におけるオブジェクトは、ではほとんどのものはオブジェクトです。たとえば、次のように文字列を作った時も、

```js
const string = "This is my string";
```

変数自体はオブジェクトではありませんが、プロパティにアクセスする時にはオブジェクトとして利用できるため、数多くのプロパティやメソッドを利用できます。このことは、 {{jsxref("String")}} オブジェクトのページにアクセスし、ページの横に並んでいるリストを見ればわかります。

**また、脳が溶け出しそうかもしれませんが、安心してください！** 先ほどのページにある、ほとんどのメソッドは学習の初期に覚える必要はありません。しかし、今から紹介する、文字列操作のメソッドはとてもよく使いますのでぜひ覚えましょう。

[ブラウザーの開発者コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)にいくつかの例を入力してみましょう。

## 文字列の長さを調べる

ただ {{jsxref("String.prototype.length", "length")}} プロパティを使用すればよいので、とても簡単です。次の行を入力してみましょう。

```js
const browserType = "mozilla";
browserType.length;
```

これは数字の 7 を返すはずです。なぜなら "mozilla" は 7 文字だからです。この例は多くの場合に有益なものです。例えば、一連の名前の長さを探して長さ順に表示したり、 ユーザーがある形式で入力したユーザー名がある長さを超えている場合に長すぎることを 知らせたりすることができます。

## 文字列の特定の文字を受け取る

前の例と関連していますが、文字列に対して**ブラケット記法**を使用することで文字列中の任意の 1 文字が得られます。つまり角括弧 (`[]`) を変数名の後ろに付け、その中に数値を入れることで、その位置にある文字が返ってきます。例えば最初の 1 文字を取得するには次のようにします。

```js
browserType[0];
```

コンピューターは 1 からではなく、0 から数えます。

文字列の一番最後の文字を取得したいときは、先ほどの `length` プロパティと組み合わせて以下のようにします。

```js
browserType[browserType.length - 1];
```

"mozilla" の長さは 7 ですが、0 から始まるので、最後の文字の位置は 6 になります。よって `length-1` とする必要があるのです。

## 文字列に部分文字列が含まれているかの検査

大きな文字列の中に、小さな文字列が存在するかどうかを探したい場合があります（一般的には、「文字列の中に部分文字列が現れるかどうか」と言います）。これは、 {{jsxref("String.prototype.includes()", "includes()")}} メソッドを使用することができます。このメソッドは、単一の{{glossary("parameter", "引数")}}（検索したい部分文字列）を取ります。

文字列がその部分文字列を含んでいれば `true` を返し、そうでなければ `false` を返します。

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("zilla が見つかりました。");
} else {
  console.log("ここには zilla がありません。");
}
```

文字列が特定の部分文字列で始まったり終わったりするかどうかを知りたいことはよくあります。これはよくあるニーズなので、 2 つの特別なメソッドがあります。 {{jsxref("String.prototype.startsWith()", "startsWith()")}} と {{jsxref("String.prototype.endsWith()", "endsWith()")}} です。

```js
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("zilla で始まります。");
} else {
  console.log("zilla で始まりません。");
}
```

```js
const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("zilla で終わります。");
} else {
  console.log("zilla で終わりません。");
}
```

## 文字列内の部分文字列の位置を探す

大きな文字列内の部分文字列の位置を探すには、 {{jsxref("String.prototype.indexOf()", "indexOf()")}} メソッドを使用します。このメソッドは 2 つの{{glossary("parameter", "引数")}}、検索したい部分文字列と、検索の開始点を指定するオプションの引数を取ります。

文字列が部分文字列を含む場合、 `indexOf()` は部分文字列の最初の出現位置のインデックスを返します。文字列が部分文字列を含まない場合、 `indexOf()` は `-1` を返します。

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

`0` から始めて、文字列の先頭から文字数（空白を含む）を数えると、部分文字列 `"developers"` の最初の出現位置のインデックスは `20` です。

```js
console.log(tagline.indexOf("x")); // -1
```

一方、 `x` という文字は文字列中に存在しませんので、 `-1` を返します。

これで部分文字列の最初の出現箇所を探す方法はわかったと思いますが、それ以降の出現箇所を探すにはどうすればいいのでしょうか？メソッドの 2 つ目の引数に、前回出現した文字列のインデックスよりも大きな値を渡します。

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

ここでは、インデックス `21` (`firstOccurrence + 1`) から始まる部分文字列 `"developers"` を検索するようにメソッドに指示しており、インデックス `35` を返しています。

## 部分文字列を探して抽出

文字列から部分文字列を抽出するには、 {{jsxref("String.prototype.slice()", "slice()")}} メソッドを使用します。渡すのは次のものです。

- 抽出を始めるインデックス。
- 抽出を停止するインデックス。これは排他的であり、このインデックスの文字は抽出された部分文字列に含まれないことを意味します。

例を挙げます。

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

インデックス `1` の文字は `"o"` で、インデックス 4 の文字は `"l"` です。そこで、 `"o"` から始まり `"l"` の直前で終わる文字をすべて抽出すると、 `"ozi"` となります。

ある文字以降の文字列の残りの文字をすべて抽出したいことがわかっている場合は、2つ目の引数を記載する必要はありません。代わりに、文字列の残りの文字を抽出したい文字の位置を指定するだけです。次の例を試してみてください。

```js
browserType.slice(2); // "zilla"
```

これは `"zilla"` を返します。 2 の文字位置指定が文字 `"z"` であり、 2 つ目の引数を指定していないため、文字列の残りの文字がすべて部分文字列として返されるからです。

> [!NOTE]
> `slice()` には他にもオプションがあるので、 {{jsxref("String.prototype.slice()", "slice()")}} のページで調べてみてください。

## 大文字小文字の切り替え

文字列には {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} と {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} という 2 つのメソッドがあり、引数として渡された文字列のすべての文字の大文字小文字を切り替えます。これは例えば、ユーザーの入力を DB に保存する場合に、値を正規化するのに便利です。

それでは次の行を入力し、何が起きるか見てみましょう。

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

### 文字列の一部分を書き換える

{{jsxref("String.prototype.replace()", "replace()")}} メソッドを使用することで、ある部分文字列を他の文字列に置き換えることができます。

検索する文字列と、置き換える文字列の 2 つを引数に取ります。次の例を実行してみてください。

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

`replace()` は、多くの文字列メソッドと同様に、名付けられた文字列を変更するのではなく、新しい文字列を返すことに注意してください。元の変数 `browserType` を更新したい場合は、次のようにする必要があります。

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

これで、 `browserType` を再代入するため、 `const` ではなく、 `let` を使用して宣言する必要があることに注意してください。

この形で `replace()` は部分文字列が最初に出現したものだけを変更することに注意してください。すべて変更したい場合は {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} を使用することができます。

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## 学習課題

この節では、文字列の処理コードを実際に書いてみることにします。 以下のそれぞれの練習問題では、文字列の配列と、その配列の各値を処理して箇条書きで表示するループを用意しています。 現在、配列やループについて正しい理解は必要ありません。これらは将来の記事で説明します。 それぞれのケースで必要なのは、文字列を希望する形式で出力するコードを書くことです。

MDN Playground 内のそれぞれの例題は、ライブサンプルの上部にある **"Play"** ボタンをクリックして開き、指示に従って問題を解いてください。行き詰まった場合は、それぞれの例題のライブサンプルの下にある解答を確認できます。

もしミスをしてコードがうまく動作しなくなってしまった場合は、MDN Playground の "Reset" ボタンを使用することができます。

### 挨拶メッセージの選別

最初の練習では、簡単なことから始めましょう。グリーティングカードのメッセージの配列がありますが、クリスマスのメッセージだけを取り出すように並べ替えたいのです。それぞれの文字列をテストし、それがクリスマスのメッセージである場合のみリストに出力されるように `if ()` 構造内の検査条件を埋めてください。

それぞれの場合のメッセージが、クリスマスメッセージであるかどうかを検査する方法を考えてみてください。これらのメッセージのすべてに存在する文字列は何でしょうか？また、それが存在するかどうかを検査するために、どのようなメソッドを使用することができますか？

```html hidden live-sample___string-methods-1
<ul></ul>
```

```js live-sample___string-methods-1
const list = document.querySelector("ul");
const greetings = [
  "誕生日おめでとう",
  "愛する人よ、クリスマスおめでとう",
  "家族全員にクリスマスおめでとう",
  "クリスマスでほしいものはあなただけだ",
  "お大事に",
];

for (const greeting of greetings) {
  // 検査条件は下記の行の括弧の中に入れ、
  // 現在あるものと置き換える必要があります
  if (greeting) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

{{ EmbedLiveSample("string-methods-1", "100%", 150) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
const list = document.querySelector("ul");
const greetings = [
  "誕生日おめでとう",
  "愛する人よ、クリスマスおめでとう",
  "家族全員にクリスマスおめでとう",
  "クリスマスでほしいものはあなただけだ",
  "お大事に",
];

for (const greeting of greetings) {
  if (greeting.includes("クリスマス")) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

</details>

### 単語の最初の文字を大文字に直す

この課題ではイギリスの都市名を採り上げます。ところが、単語の大文字と小文字がぐちゃぐちゃになっています。そこで最初の文字を大文字にし、残りをすべて小文字にしてみましょう。こういう手順でやってみます。

1. 変数 `city` に格納されている文字列全体を小文字に変換し、新しい変数に格納します。
2. この新しい変数で文字列の最初の文字を取得し、別の変数に格納します。
3. この最新の変数を部分文字列として用いて、小文字の文字列の先頭の文字を大文字に置き換えます。この置き換え処理の結果を別の新しい変数に格納します。
4. 変数 `result` の値を、`city` ではなく最終結果と等しくなるように変更します。

> [!NOTE]
> ヒント — 文字列メソッドの引数は文字列リテラルである必要はなく、変数であっても、メソッドを呼び出す変数であってもかまいません。

```html hidden live-sample___string-methods-2
<ul></ul>
```

```js live-sample___string-methods-2
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // この下にコードを書いて下さい

  const result = city;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-2", "100%", 150) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0, 1);
  const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

### 既存の部分から新しい文字列を作成する

この最後の課題では、配列にはイングランド北部の鉄道駅に関する情報が文字列として含まれています。この文字列にはデータ項目として、アルファベット 3 文字の駅コード、次にコンピューター読み取り用のデータ、次にセミコロン、そして人間が読める駅名が入っています。例えばこのようになります。

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

駅コードと駅名を抽出し、それを文字列にまとめてこのような形にします。

```plain
MAN: Manchester Piccadilly
```

このようにプログラムしてみましょう。

1. アルファベット 3 文字のコードを抽出し、新しい変数に格納します。
2. セミコロンの文字インデックス番号を検索します。
3. セミコロンの文字インデックス番号を参照位置にして、人が読める駅名を抽出し、新しい変数に格納します。
4. この 2 つの新しい変数と文字列リテラルとを連結し、最終的な文字列を作成します。
5. `input` 変数ではなく、この最終結果が `result` 変数の値に代入されるよう修正します。

```html hidden live-sample___string-methods-3
<ul></ul>
```

```js live-sample___string-methods-3
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  // この下にコードを書いてください

  const result = station;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-3", "100%", 150) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は次のようになります。

```js
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const code = station.slice(0, 3);
  const semiColonIndex = station.indexOf(";");
  const name = station.slice(semiColonIndex + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

## 結論

プログラミング、特に JavaScript では単語や文を処理できるようになることが大事であるという現実から逃れることはできません。それはウェブサイトは人とのコミュニケーションがすべてとなるためです。この記事では、文字列を処理するのに当面知っておくべき基礎を解説しました。今後もっと複雑なトピックに進んで行くときに役立つはずです。次に、配列を見てみます。重要なデータ型のうち、短期間で押さえておくべき最後の 1 つです。

次の記事では、文字列と文字列メソッドについて解説した情報を、どれだけ理解し、身に付けられたかを調べるためのテストをいくつかご紹介します。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}
