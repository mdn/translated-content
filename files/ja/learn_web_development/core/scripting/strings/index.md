---
title: テキストの扱い — JavaScript での文字列
slug: Learn_web_development/Core/Scripting/Strings
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

次に、文字列に注目しましょう。プログラミングでは、テキストの断片をこう呼びます。この記事では、文字列の作成、文字列内の引用符のエスケープ、文字列の結合など、JavaScript を学ぶ上で実に知っておくべき文字列に関する共通事項をすべて見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>文字列リテラルの作成。</li>
          <li>引用符の一致の要件。</li>
          <li>文字列変換。</li>
          <li>文字列内での文字のエスケープ。</li>
          <li>テンプレートリテラル。テンプレートリテラルにおける変数や複数行の使用。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 言葉の力

言葉はコミュニケーションの大部分を担う、人類にとって、とても大切なものです。ウェブは情報の共有やコミュニケーションができるように設計された大規模な文字ベースの媒体ですので、そこで使用される言葉を操作できると便利です。 {{glossary("HTML")}} はテキストを構造化して意味づけし、 {{glossary("CSS")}} がきれいに体裁を整えることを可能にし、そして JavaScript は文字列を操作するたくさんの機能を提供しています。独自の挨拶文を生成したり、適切なラベルを表示したり、言葉を並べ替えたりといったことを行います。

このコースのこれまで示したプログラムのほとんどすべてが、何らかの文字列操作を含んでいます。

## 文字列の宣言

文字列は最初の見た目では数値と同じように扱われますが、深く掘り下げるといくつかの顕著な違いが見えてきます。基本的な行を[ブラウザーの開発者コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)に入力して慣れることから始めましょう。

始めに、次の行を入力していましょう。

```js
const string = "革命はテレビでは放送されない。";
console.log(string);
```

数字のときと同じように、変数を宣言し、文字列の値で初期化し、その値を返しています。ここで一つ異なるのは、文字列を書くときには値を引用符で囲む必要があるということです。

これを行わなかったり、引用符の一方を書き落としたりすると、エラーが発生します。以下の行を入力してみてください。

```js example-bad
const badString1 = これはテストです;
const badString2 = 'これはテストです;
const badString3 = これはテストです';
```

これらの行は動作しません。引用符で囲まれていないテキストは、変数名、プロパティ名、予約語などと解釈されるからです。ブラウザーが引用符で囲まれていないテキストを認識できない場合、エラーが発生します（"missing; before statement" など）。ブラウザーが文字列の開始を検出できても（2 つ目の引用符がないために）終了を検出できなかった場合、 "unterminated string literal" エラーが報告されます。もしプログラムでこのようなエラーが発生するのであれば、文字列をすべて調べて、引用符の欠落がないことを確認してください。

以下は、 `string` という変数を定義していれば動作します。試してみましょう。

```js
const badString = string;
console.log(badString);
```

`badString` という変数に `string` という変数の値が設定されます。

### 単一引用符、二重引用符、逆引用符

JavaScript では、文字列を囲む引用符として、単一引用符と二重引用符を使用することができます。以下のどちらの例も正しく動きます。

```js-nolint
const single = '単一引用符';
const double = "二重引用符";
const backtick = `逆引用符`;

console.log(single);
console.log(double);
console.log(backtick);
```

文字列の開始と終了には、同じ文字を使用しなければエラーとなります。

```js-nolint example-bad
const badQuotes = 'これは許されません！";
```

一重引用符で宣言された文字列と二重引用符で宣言された文字列は同じで、どちらを使用するかは個人の環境設定によりますが、一つのスタイルを選んでコードで一貫して使用するのが良い習慣です。

逆引用符を使用して宣言された文字列は、[_テンプレートリテラル_](/ja/docs/Web/JavaScript/Reference/Template_literals)と呼ばれる特殊な文字列です。ほとんどの点で、テンプレートリテラルは普通の文字列と同じですが、いくつかの特別な特性があります。

- [JavaScript を埋め込む](#javascript_の埋め込み)ことができます。
- テンプレートリテラルは[複数行](#multiline_strings)に渡って宣言できます。

## JavaScript の埋め込み

テンプレートリテラルでは、 JavaScript の変数や式を `${ }` で囲んで入れることができ、その結果が文字列の中に取り込まれます。

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

同じ手法を使用して、2 つの変数を結合することができます。

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

このように文字列を結合することを連結と呼びます。

### コンテキストでの連結

実際に使用されている連結を見てみましょう。

```html
<button>押してね</button>
<div id="greeting"></div>
```

```js
const button = document.querySelector("button");

function greet() {
  const name = prompt("あなたの名前は?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `${name} さん、こんにちは。はじめまして！`;
}

button.addEventListener("click", greet);
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50) }}

ここでは {{domxref("window.prompt()", "window.prompt()")}} 関数を使用して、テキストを入力できるポップアップダイアログを表示し、ユーザーによって入力された文字列を変数へ、この場合は `name` 変数へ格納しています。そして、その名前を一般的な挨拶メッセージに挿入する文字列を表示します。

### "+" を用いた連結

`${}` は通常の文字列ではなく、テンプレートリテラルを使用することができます。通常の文字列は `+` 演算子を使用して連結することができます。

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

しかし、通常、テンプレートリテラルを使用すると、より読みやすいコードになります。

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### 文字列内に式を含める

単純な変数と同様に、 JavaScript の式をテンプレートリテラルに含めることができ、その結果も結果に含まれます。

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

## 複数行の文字列

テンプレートリテラルは、ソースコードの改行を尊重するので、次のように複数行にまたがる文字列を書くことができます。

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

通常の文字列を使用して同等の出力をするためには、文字列の中に改行文字 (`\n`) を記載する必要があります。

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

さらなる例と高度な機能の詳細については、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)のリファレンスページを参照してください。

## 文字列に引用符を含めるには

文字列の先頭と末尾を示すために引用符を使用することができますので、実際の引用符を文字列に含めるにはどうすればよいでしょうか。これは動作しません。

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

一般的なオプションの 1 つは、文字列を宣言するために他の文字のいずれかを使用することです。

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

もう一つのオプションは、問題の引用符をエスケープすることです。文字をエスケープするということは、その文字がコードの一部ではなく、テキストとして認識されるようにすることを意味しています。 JavaScript でこれを行うには、文字の直前にバックスラッシュを置きます。試してみてください。

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

その他の特殊文字を挿入する場合も同じ技術が使えます。詳細は[エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)を参照してください。

## 数値と文字列

では、文字列と数字を組み合わせるとどうなるのでしょうか。コンソールで試してみましょう。

```js
const name = "フロント ";
const number = 242;
console.log(name + number); // "フロント 242"
```

エラーを返すと思うかもしれませんが、これはうまく動作します。数値が文字列としてどのように表示されるべきかはかなり厳密に定義されているので、ブラウザーは自動的に数値を文字列に変換し、 2 つの文字列を連結します。

文字列に変換したい数値変数、または数値に変換したい文字列変数がある場合、以下の 2 つの構文を使用することができます。

- {{jsxref("Number/Number", "Number()")}} 関数は渡されたものすべてを数値に変換します。次の例を実行してみましょう。

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- {{jsxref("String/String", "String()")}} 関数は逆に、引数を文字列に変換します。試してみてください。

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

この生成方法は状況によってはとても便利です。例えば、ユーザーがフォームのテキストフィールドに数字を入力した場合、入力された値は文字列です。しかし、その数字を使って計算したい場合、数値にしなければなりません。そんな時は `Number()` に任せましょう。これは実際に[数字当てゲーム](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)で使用した方法です。

## まとめ

以上、JavaScript で文字列のごく基本的なことを説明しました。次の記事では、JavaScript で文字列に利用できる組み込みメソッドと、それらを使用して文字列を思い通りの形に操作することができる方法を見ていきます。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
