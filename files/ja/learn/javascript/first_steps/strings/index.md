---
title: テキストの扱い — JavaScript での文字列
slug: Learn/JavaScript/First_steps/Strings
l10n:
  sourceCommit: 379d5d503c40f8c5e6d3869ff6a12c05d99f4520
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

次に、文字列に注目しましょう。プログラミングでは、テキストの断片をこう呼びます。この記事では、文字列の作成、文字列内の引用符のエスケープ、文字列の結合など、JavaScript を学ぶ上で実に知っておくべき文字列に関する共通事項をすべて見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、HTML と CSS の基本的な理解、JavaScript とは何かということを理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>JavaScript での文字列の基本的な扱いに慣れること。</td>
    </tr>
  </tbody>
</table>

## 言葉の力

言葉はコミュニケーションの大部分を担う、人類にとって、とても大切なものです。ウェブは情報の共有やコミュニケーションができるように設計された大規模な文字ベースの媒体ですので、そこで使用される言葉を操作できると便利です。{{glossary("HTML")}} は意味付けされ、構造化されたテキストを提供し、{{glossary("CSS")}} がきれいに体裁を整える事を可能にし、そして JavaScript には、挨拶用の文章を生成したり、適切なラベルを表示したり、言葉を並べ替えたりといった、文字列を操作するたくさんの機能が含まれています。

このコースのこれまで示したプログラムのほとんどすべてが、何らかの文字列操作を含んでいます。

## 文字列 — 基本

文字列は一見すると数値と同じように見えますが、少し深く見ていくと、違いに気づくことでしょう。まずは慣らすために基本的なコードを[ブラウザーの開発者ツール](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)に入力してみましょう。

### 文字列の作成

1. 初めに、次の行を入力してみましょう。

   ```js
   const string = "革命はテレビでは放送されない。";
   console.log(string);
   ```

   数値のところでやったのと同じように、変数を宣言して、値を入れて初期化しています。そして値を返しています。ただ違うのは、文字列が引用符で囲まれて書かれていることです。

2. もし引用符で囲わななかったり、どちらか一方を書き忘れたりすると、エラーになります。

   ```js example-bad
   const badString = これはテストです;
   const badString = 'これはテストです;
   const badString = これはテストです';
   ```

   これらの行は動作しません。引用符で文字を囲わなければ、変数名や、プロパティ名や、予約語などと解釈されてしまうためです。もしブラウザーが引用符を見つけられないと、エラーとなります（たとえば "missing; before statement" \[文の前に、セミコロンが見つかりません] のようなエラーです）。2 行目の例のように、ブラウザーが引用符を見つけても、文字列の終わりが示されていなければ、これもエラーとなります ("unterminated string literal" \[文字列リテラルの終わりがありません] というエラーです)。このようなエラーがプログラムで起きたら、全ての文字列について、引用符の付け忘れがないかを確認してください。

3. 続くコードは先ほど変数を `string` という名前で宣言していれば、動くでしょう。試してみましょう。

   ```js
   const badString = string;
   console.log(badString);
   ```

   `badString` という変数に `string` という変数の値が設定されたことでしょう。

### 単一引用符と二重引用符

1. JavaScript では、文字列を囲む引用符として、単一引用符と二重引用符を使用することができます。以下のどちらの例も正しく動きます。

   ```js-nolint
   const sgl = '単一引用符';
   const dbl = "二重引用符";
   console.log(sgl);
   console.log(dbl);
   ```

2. どちらを使ってもほとんど違いはありません。どちらを使うかは好みの問題ですが、どちらを使うかは統一するべきでしょう。両方を同時に使うと混乱してしまいます、特に同じ文字列に二種類の引用符を使ってしまうときなど！次の行はエラーです。

   ```js example-bad
   const badQuotes = 'いったい何なんだ？";
   ```

3. ブラウザーは上の文字列が閉じていないと認識します。なぜなら、文字列を囲うのに使用していない引用符はその文字列の中に含めることができるからです。たとえば次の例は問題ありません。

   ```js
   const sglDbl = 'Would you eat a "fish supper"?';
   const dblSgl = "I'm feeling blue.";
   console.log(sglDbl);
   console.log(dblSgl);
   ```

4. ただし、文字列の中に、囲んでいるのと同じ種類の引用符を含めることはできません。以下の例は文字列の終わりがわからないので、ブラウザーを混乱させてしまいます。

   ```js example-bad
   const bigmouth = 'I've got no right to take my place…';
   ```

   それでは同じ種類の引用符を含めるにはどのようにすればよいでしょうか。

### 文字列のエスケープ

先ほどのコード行を直すには、問題となっている引用符をエスケープする必要があります。文字のエスケープとは、その文字が、コードではなく、文字列の一部であるとブラウザーに認識させる書き方です。JavaScript ではバックスラッシュ ( \ \[環境によっては円マーク (￥)]) を文字の前におくことでエスケープすることができます。

```js-nolint example-good
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

これでうまく動きます。 同じ方法で他の文字をエスケープする (例えば `\"`) ことができ、それ以外にも特別なコードがあります。詳細は[エスケープシーケンス](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#エスケープシーケンス)を見てください。

## 文字列の連結

連結とは単に「結合する」という意味です。JavaScript で文字列を結合するには、_テンプレートリテラル_ と呼ばれる異なる形の文字列を使用することができます。

テンプレートリテラルは通常の文字列と同じように見えますが、単一または二重引用符 (`'` または `"`) の代わりに、バックティック文字 (`` ` ``) を使用します。

```js
const greeting = `Hello`;
```

これは通常の文字列と同じように動作しますが、`${ }` 文字の中に変数を記述することができ、その変数の値が結果に挿入されます。

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

### コンテキストでの連結

実際に使用されている連結を見てみましょう。

```html
<button>押してみて！</button>
```

```js
const button = document.querySelector("button");

function greet() {
  const name = prompt("あなたの名前は?");
  alert(`こんにちは ${name} さん、はじめまして！`);
}

button.addEventListener("click", greet);
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50) }}

ここでは {{domxref("window.prompt()", "window.prompt()")}} 関数を使用して、テキストを入力できるポップアップダイアログを表示し、ユーザによって入力された文字列を変数へ、この場合は `name` 変数へ格納しています。そして、{{domxref("window.alert()", "window.alert()")}} 関数を使用して、一般的な挨拶メッセージに名前を挿入した文字列が入った別のポップアップが表示されます。

### "+" を用いた結合

`+` 演算子を使用して文字列を連結することもできます。

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

しかし、通常、テンプレートリテラルを使用すると、より読み取り可能なコードが得られます。

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

## 数値と文字列

では、文字列と数字を組み合わせるとどうなるのでしょうか。コンソールで試してみましょう。

```js
const name = "フロント ";
const number = 242;
console.log(`${name}${number}`); // "フロント 242"
```

エラーが起きると予想したかもしれませんが、普通に動作します。文字列を数値として表すのには意味がありませんが、数値を文字で表すのはわかりますね。つまりブラウザーはどうやら、数値を文字列に変換し、2 つの文字列としてから結合しているようです。

文字列に変換したいがそれ以外は変更しない数値変数、または数値に変換したいがそれ以外は変更しない文字列変数がある場合、以下の 2 つの構文を使用することができます。

- {{jsxref("Number/Number", "Number()")}} 関数トは渡されたものすべてを数値に変換します。次の例を実行してみましょう。

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  ```

- 反対に全ての数値は [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) という文字列に変換するメソッドを持っています。

  ```js
  const myNum2 = 123;
  const myString2 = myNum2.toString();
  console.log(typeof myString2);
  ```

この生成方法は状況によってはとても便利です。例えば、ユーザがフォームのテキストフィールドに数字を入力した場合、入力された値は文字列です。しかし、その数字を使って計算したい場合、数値にしなければなりません。そんな時は `Number()` に任せましょう。これは実際に[数字当てゲームの 59 行目](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L59)で使用した方法です。

## 文字列内に式を含める

単純な変数と同様に、JavaScript の式をテンプレートリテラルに含めることができ、その結果も結果に含まれます。

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
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

/*
I like the song.
I gave it a score of 90%.
*/
```

通常の文字列を使用して同等の出力をするためには、文字列の中に改行文字 (`\n`) を記載する必要があります。

```js
const output = "I like the song.\nI gave it a score of 90%.";
console.log(output);

/*
I like the song.
I gave it a score of 90%.
*/
```

さらなる例と高度な機能の詳細については、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)のリファレンスページを参照してください。

## 結論

ここまでが JavaScript での文字列の基礎になります。次の記事では、JavaScript で使える文字列操作の組み込み関数と、それを使って思い通りの形に文字列を変換する方法を、その基礎の上に建てていきましょう。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
