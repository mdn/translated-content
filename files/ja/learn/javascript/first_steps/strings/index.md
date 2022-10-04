---
title: テキストを扱う — JavaScript での文字列
slug: Learn/JavaScript/First_steps/Strings
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

プログラミングでは文字の羅列を文字列と呼びますが、次はこれを学習しましょう。この記事では、JavaScript でよく使われる、文字列を作ったり、引用符をエスケープしたり、文字列を結合したりといった、文字列について本当に知っておくべきことだけを見てみましょう。

| 前提条件: | 基本的なコンピュータの知識および HTML と CSS への理解、JavaScript とは何かを知っている。 |
| --------- | ---------------------------------------------------------------------------------------- |
| 目的:     | JavaScript の文字列操作に慣れる。                                                        |

## 言葉の力

言葉はコミュニケーションの大部分を担う、人類にとって、とても大切なものです。Web は情報の共有やコミュニケーションができるように設計された大規模な文字ベースの媒体ですので、そこで使用される言葉を操作できると便利です。{{glossary("HTML")}} は意味付けされ、構造化されたテキストを提供し、{{glossary("CSS")}} がきれいに体裁を整える事を可能にし、そして JavaScript には、挨拶用の文章を生成したり、適切なラベルを表示したり、言葉を並べ替えたりといった、文字列を操作するたくさんの機能が含まれています。

今までこのコースでお見せしたプログラムのほとんどが、何らかの文字列操作を含んでいましたね。

## 文字列 — 基本

文字列は一見すると数値と同じように見えますが、少し深く見ていくと、違いに気づくことでしょう。まずは慣らすために基本的なコードを[ブラウザーの開発者ツール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)に入力してみましょう。

### 文字列を作る

1. 初めに、次の行を入力してみましょう。

    ```js
    let string = '革命はテレビでは放送されない。';
    string;
    ```

    数値のところでやったのと同じように、変数を宣言して、値を入れて初期化しています。そして値を返しています。ただ違うのは、文字列が引用符で囲まれて書かれていることです。

2. もし引用符で囲わななかったり、どちらか一方を書き忘れたりすると、エラーになります。

    ```js example-bad
    let badString = これはテストです;
    let badString = 'これはテストです;
    let badString = これはテストです';
    ```

    これらの行は動きません。なぜなら引用符で文字を囲わなければ、変数名や、プロパティ名や、予約語などと解釈されてしまうためです。もしブラウザーが引用符を見つけられないと、エラーとなります (たとえば "missing ; before statement" \[文の前に、セミコロンが見つかりません] のようなエラーです)。2 行目の例のように、ブラウザーが引用符を見つけても、文字列の終わりが示されていなければ、これもエラーとなります ("unterminated string literal" \[文字列リテラルの終わりがありません] というエラーです)。このようなエラーがプログラムで起きたら、全ての文字列について、引用符の付け忘れがないかを確認してください。

3. 続くコードは先ほど変数を `string` という名前で宣言していれば、動くでしょう。試してみましょう。

    ```js
    let badString = string;
    badString;
    ```

    `badString` という変数に `string` という変数の値が設定されたことでしょう。

### シングルクォーテーション vs. ダブルクォーテーション

1. JavaScript では、文字列を囲む引用符として、シングルクォーテーションとダブルクォーテーションを使用することができます。以下のどちらの例も正しく動きます。

    ```js
    let sgl = 'シングルクォーテーション';
    let dbl = "ダブルクォーテーション";
    sgl;
    dbl;
    ```

2. どちらを使ってもほとんど違いはありません。どちらを使うかは好みの問題ですが、どちらを使うかは統一するべきでしょう。両方を同時に使うと混乱してしまいます、特に同じ文字列に二種類の引用符を使ってしまうときなど！次の行はエラーです。

    ```js example-bad
    let badQuotes = 'なんということだ！";
    ```

3. ブラウザーは上の文字列が閉じていないと認識します。なぜなら、文字列を囲うのに使用していない引用符はその文字列の中に含めることができるからです。たとえば次の例は問題ありません。

    ```js
    let sglDbl = 'Would you eat a "fish supper"?';
    let dblSgl = "I'm feeling blue.";
    sglDbl;
    dblSgl;
    ```

4. ただし、文字列の中に、囲んでいるのと同じ種類の引用符を含めることはできません。以下の例は文字列の終わりがわからないので、ブラウザーを混乱させてしまいます。

    ```js example-bad
    let bigmouth = 'I've got no right to take my place...';
    ```

    それでは同じ種類の引用符を含めるにはどのようにすればよいでしょうか。

### 文字列をエスケープする

先ほどのコード行を直すには、問題となっている引用符をエスケープする必要があります。文字のエスケープとは、その文字が、コードではなく、文字列の一部であるとブラウザーに認識させる書き方です。JavaScript ではバックスラッシュ ( \ \[環境によっては円マーク (￥)]) を文字の前におくことでエスケープすることができます。

```js
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
```

これでうまく動きます。 同じ方法で他の文字をエスケープする (例えば `\"`) ことができ、それ以外にも特別なコードがあります。詳細は[エスケープ記法](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)を見てください。

## 文字列を連結する

1. コンカチする (concatenate) という単語は「結合する」ことを表すプログラミングの用語です。JavaScript で文字列を結合するにはプラス (+) 演算子を使用します。数値の加算をするのに使用した演算子ですが、今回は違う動作をします。下の例をコンソールに入力してみてください。

    ```js
    let one = 'こんにちは、';
    let two = 'ご機嫌いかがでしょう？';
    let joined = one + two;
    joined;
    ```

    この例の実行結果は `joined` という変数に格納され、値は "こんにちは、ご機嫌いかがでしょう？" となります。

2. 今の例は 2 つの文字列だけを結合しましたが、`+` 演算子が変数と変数の間にあれば、いくつでも結合することができます。例えば、次の例を試しましょう。

    ```js
    let multiple = one + one + one + one + two;
    multiple;
    ```

3. 変数のほかに、実際の文字列と混ぜて使うこともできます。

    ```js
    let response = one + '私は元気です。' + two;
    response;
    ```

> **メモ:** コード中に、シングルクォーテーションおよびダブルクォーテーションで囲われた、実際の文字列を書いたときそれは**文字列リテラル**と呼ばれます。

### 様々な結合

実際に文字列が結合されている場面を見てみましょう。これはこのコースの最初の方からの例です。

```html
<button>押してみて！</button>
```

```js
let button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('あなたの名前は？');
  alert('こんにちは、' + name + 'さん。初めまして！');
}
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

4 行目でユーザに答えてもらうため、{{domxref("Window.prompt()", "Window.prompt()")}}関数を使用して、テキストを入力できるポップアップダイアログを表示し、ユーザによって入力された文字列を `name` 変数に格納しています。そして、5 行目で{{domxref("Window.alert()", "Window.alert()")}}関数を使用し、2 つの文字列リテラルと `name` 変数を結合して別のポップアップに文字列を作り上げています。

### 数値 vs. 文字列

1. それでは文字列と数値を足したら (もしくは結合したら) 何が起きるでしょうか。コンソールに入力してみましょう。

    ```js
    'フロント' + 242;
    ```

    エラーが起きると予想したかもしれませんが、普通に動きます。文字列を数値として表すのには意味がありませんが、数値を文字で表すのはわかりますね。つまりブラウザーはどうやら、数値を文字列に変換し、2 つの文字列としてから結合しているようです。

2. 数字同士でやっても同じです。数字を引用符で囲むと文字列になります。次の行を実行してみてください。(`typeof`演算子で変数が文字列なのか数値なのか調べています。)

    ```js
    let myDate = '19' + '67';
    typeof myDate;
    ```

3. もし、数値を文字列に変換したかったり、文字列を数値に変換したかったりする場合には、次の 2 つの生成方法を見てください。

    - {{jsxref("Number")}}オブジェクトは渡されたものすべてを数値に変換します。次の例を実行してみましょう。

      ```js
      let myString = '123';
      let myNum = Number(myString);
      typeof myNum;
      ```

    - 反対に全ての数値は [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) という文字列に変換するメソッドを持っています。

      ```js
      let myNum = 123;
      let myString = myNum.toString();
      typeof myString;
      ```

    この生成方法は状況によってはとても便利です。例えば、ユーザがフォームのテキストフィールドに数字を入力した場合、入力された値は文字列です。しかし、その数字を使って計算したい場合、数値にしなければなりません。そんな時は `Number()` に任せましょう。これは実際に[数字当てゲームの 54 行目](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L54)で使用した方法です。

## テンプレートリテラル

遭遇する可能性のある別のタイプの文字列構文は、**テンプレートリテラル**（テンプレート文字列と呼ばれることもあります）です。 これは、より柔軟で読みやすい文字列を提供する新しい構文です。

> **メモ:** 以下の例をブラウザーの JavaScript コンソールに入力して、どのような結果が得られるかを確認してください。

標準の文字列リテラルをテンプレートリテラルに変換するには、引用符 (`' '` または `" "`) をバッククォート文字 (`` ` ` ``) に置き換える必要があります。

簡単な例。

```js
let song = 'Fight the Youth';
```

テンプレートリテラルに変換します。

```js
song = `Fight the Youth`;
```

文字列を連結したり、文字列内に式の結果を含めたりする場合、従来の文字列で書くのは面倒です。

```js
let score = 9;
let highestScore = 10;
let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';
```

テンプレートリテラルはこれを非常に簡単に行えます。

```js
output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;
```

複数の文のピースを繋げる必要はありません。文章全体を 1 組のバッククォートで囲むだけです。文字列内に変数または式を含める場合は、プレースホルダーと呼ばれる `${ }` 構造内に含めます。

テンプレートリテラル内に複雑な式を含めることもできます。

```js
let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
```

- 最初の 2 つのプレースホルダーは非常に単純で、変数を参照する単純な文字列のみが含まれています。
- 3 つ目は、パーセンテージの結果を計算し、それを最も近い整数に丸めます。
- 4 つ目は、三項演算子を使用してスコアが特定の値を超えているかどうかを確認し、結果に応じて合格または不合格のメッセージを出力します。

従来の文字列リテラルで複数の行に分割する場合は、改行文字 `\n` を含める必要がありました。

```js
output = 'I like the song "' + song + '".\nI gave it a score of ' + (score/highestScore * 100) + '%.';
```

テンプレートリテラルはソースコードの改行をそのまま再現するため、改行文字は不要になります。 以下は同じ結果を得ます。

```js
output = `I like the song "${ song }".
I gave it a score of ${ score/highestScore * 100 }%.`;
```

できるだけ早くテンプレートリテラルの使用に慣れることをお勧めします。 これらは最新のブラウザーで十分にサポートされており、サポートが不足しているのは Internet Explorer だけです。私たちの例の多くはまだ標準の文字列リテラルを使用していますが、今後さらに多くのテンプレートリテラルを含める予定です。

高度な機能の例と詳細については、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)のリファレンスページを参照してください。

## あなたのスキルをテストしてください！

この記事の最後に到達しましたが、最も重要な情報を覚えていますか？ 先に進む前に、この情報を記憶していることを確認するためのいくつかの[テスト](/ja/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings)を見つけることができます。これには次の記事の知識も必要なので、最初にそれを読むことをお勧めします。

## 結論

ここまでが JavaScript での文字列の基礎になります。次の記事では、JavaScript で使える文字列操作の組み込み関数と、それを使って思い通りの形に文字列を変換する方法を、その基礎の上に建てていきましょう。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

## このモジュール内

- [JavaScript って何?](/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [JavaScript への最初のダイブ](/ja/docs/Learn/JavaScript/First_steps/A_first_splash)
- [何が間違っている? JavaScript のトラブルシューティング](/ja/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [必要な情報を保存する — 変数](/ja/docs/Learn/JavaScript/First_steps/Variables)
- [JavaScript での数学入門 — 数値と演算子について](/ja/docs/Learn/JavaScript/First_steps/Math)
- [テキストを扱う — JavaScript での文字列](/ja/docs/Learn/JavaScript/First_steps/Strings)
- [便利な文字列メソッド](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [配列](/ja/docs/Learn/JavaScript/First_steps/Arrays)
- [評価: バカ話ジェネレーター](/ja/docs/Learn/JavaScript/First_steps/Silly_story_generator)
