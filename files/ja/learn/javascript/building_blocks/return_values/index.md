---
title: 関数の戻り値
slug: Learn/JavaScript/Building_blocks/Return_values
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

このコースでの関数の学習を終えるために、最後に議論しておくべき関数についての大事なコンセプトがあります。それは戻り値です。関数によっては意味のある値を返さないものもありますが、値を返すものも当然あります。それらの値が何であるか、あなたのコードの中でどのように利用するのか、またどのように関数に意味のある値を返させるのかについて理解することは重要です。これらについてすべてを以下で紹介します。

| 前提条件: | 基本的なコンピューターリテラシー、基本的な HTML と CSS の知識、[JavaScript 初級レベルの知識](/ja/docs/Learn/JavaScript/First_steps)、[関数の知識](/ja/docs/Learn/JavaScript/Building_blocks/Functions) |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 目的:     | 関数の戻り値とその使い方を理解すること                                                                                                                                                                 |

## 戻り値とは？

**戻り値**は、その名が示すとおり関数の実行が完了した時に返される値です。戻り値についてそこまで意識してこなかったかもしれませんが、これまでに何度も戻り値を見てきているはずです。

以下の見覚えのある例を見てみましょう (このシリーズの[過去の記事](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)より) 。

```js
let myText = "I am a string";
let newString = myText.replace("string", "sausage");
console.log(newString);
// 文字列の replace() 関数は文字列を受け取り、
// 一方の部分文字列をもう一方の部分文字列に置き換え、
// 置き換えられた新しい文字列を返します。
```

[`replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 関数が `myText` という文字列の上で実行され、2 つの引数が渡されています:

1. 置換される部分文字列 ('string')。
2. 置換する部分文字列 ('sausage')。

この関数が完了 (実行が終了) した時に、関数は置換された新しい文字列を値として返します。上記のコードでは、この戻り値を `newString` 変数に代入しています。

[`replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 関数についての MDN のリファレンスページには、[戻り値](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Return_value) というセクションがあります。関数によって返される値が何か知り把握することはとても大事です。従って、可能な限りこちらも見るようにしてください。

関数によっては何も値を返しません (この場合、リファレンスページでは戻り値を [`void`](/ja/docs/Web/JavaScript/Reference/Operators/void) または [`undefined`](/ja/docs/Glossary/undefined) として記載しています)。たとえば、前の記事で作った [displayMessage()](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html#L50) 関数では、関数が実行されたときに特定の値は返されていません。ただスクリーンのどこかにボックスの表示を作っているだけです。

一般的に、戻り値は関数がある種の計算をしている途中の段階で使用されます。 関数で計算する必要があるいくつかの値を含む最終結果を取得したいとします。関数は値を計算した後、結果を返すことができるため、変数に格納できます。この変数は、計算の次の段階で使用できます。

### オリジナル関数での戻り値の使い方

カスタム関数から値を返すために、必要なことは、[return](/ja/docs/Web/JavaScript/Reference/Statements/return) というキーワードを使うことです。直近の [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html) の例でこれを見たでしょう。`draw()` 関数は 100 のランダムな円を HTML 内に表示します。
{{htmlelement("canvas")}}:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

ループの繰り返しの中で、現在の円の _x 座標_、_y 座標_、*半径*それぞれのランダムな値を生成するために `random()` 関数に対して 3 回の呼び出しが行われます。`random()` 関数はひとつの引数 (整数) を受け取り、`0` からその受け取った数値までの乱数を返します。以下のようになります。

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

次のように書くことも可能です。

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

しかし最初のものの方がよりコンパクトで、効率よく書けています。

関数が呼び出されるたびに、`Math.floor(Math.random() * number)` の計算の結果が返されます。この戻り値は、関数が呼び出された場所に現れて、コードが続行されます。

したがって、以下を実行すると:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

この時、3 つの `random()` がそれぞれ `500`、`200`、`35` と値を返した場合、このコードは実際には次のように実行されたことになります。

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

コード上の関数の呼び出しがまず行われ、その戻り値が関数の呼び出しの代わりとなり、その後にコードそのものが実行されます。

## 実践: 戻り値を返す関数を作る

戻り値を返すオリジナルな関数を書いてみましょう。

1. まず最初に GitHub から [function-library.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library.html) ファイルをローカル環境にコピーします。このファイルはシンプルな HTML のページで、文字列入力用の {{htmlelement("input")}} フィールドとパラグラフ（段落）要素を含んでいます。また、{{htmlelement("script")}} 要素があり、この中でページ内の HTML 要素の参照を 2 つの変数で保持させています。このページに対して、テキストボックスに数値を入力したら、入力した数値と関連のある異なる数値を下のパラグラフ要素に表示させるようにしていきます。
2. いくつかの関数を `<script>` 要素に追加していきましょう。既に記述されている 2 行の [JavaScript](/ja/docs/Web/JavaScript) のコードの下に、以下の関数定義を追加します。

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     if (num < 0) return undefined;
     if (num == 0) return 1;
     let x = num - 1;
     while (x > 1) {
       num *= x;
       x--;
     }
     return num;
   }
   ```

   `squared()` 関数と `cubed()` 関数は大変わかりやすいでしょう。引数として渡された値の 2 乗や 3 乗を返しています。`factorial()` 関数は渡された数の[階乗](https://ja.wikipedia.org/wiki/%E9%9A%8E%E4%B9%97)を返しています。

3. 次に input に入力された数値を出力する処理を追加していきます。イベントハンドラーを既存の関数の下に記述しましょう。

   ```js
   input.onchange = function () {
     const num = input.value;
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent =
         num +
         " squared is " +
         squared(num) +
         ". " +
         num +
         " cubed is " +
         cubed(num) +
         ". " +
         num +
         " factorial is " +
         factorial(num) +
         ".";
     }
   };
   ```

   ここでは `onchange` イベントハンドラーを作っています。これは文字列入力での `change` イベントが発火した時に実行されます。つまり新しい値が `input` に入力され、送信された時です (たとえば値を入力し、<kbd>Tab</kbd> か <kbd>Return</kbd> を押して入力からフォーカスを外す時)。この無名関数が実行されると、`input` に入力された値が `num` 定数に代入されます。

   次に、条件付きテストを行うようにします。もし入力された値が数値でなければ、パラグラフ要素にエラーメッセージを出力します。テストでは、式 `isNaN(num)` が true を返すかどうか見るようにします。一般的に値が数値でないかをテストする際には [`isNaN()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 関数を使います。この関数では、渡された値が数値でなければ `true` を返し、数値であれば `false` を返します。

   もしテストが `false` を返した場合、`num` の値は数値です。したがって、数値の 2 乗、3 乗、階乗の値を示す文が、パラグラフ要素内に出力されます。その出力する文章内で必要とする値を計算するために `squared()` 関数、`cubed()` 関数、`factorial()` 関数を呼んでいます。

4. コードを保存して、それをブラウザーで表示してみましょう。

> **メモ:** もしサンプルがうまく動作しない場合は、[GitHub 上の完成版](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html)と比較などしてみてください（[実際に動かして確認もできます](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)）。またはお問い合わせください。

## あなたの番です!

この時点で、独自の関数をいくつか書き出してライブラリに追加してみましょう。数値の平方根や立方根はどうですか？また、特定の半径を持つ円の円周はどうでしょうか？

関数に関する追加のヒント:

- 関数の中に*エラーハンドリング*を書く別の例を見てみましょう。一般に、必要な引数が検証されていること、および省略可能な引数に何らかのデフォルト値が渡されていることをチェックすることは良い考え方です。このようにしてプログラムがエラーを投げることを減らせます。
- *関数のライブラリ*を作るアイデアについて考えてみてください。プログラミングのキャリアを積んでいくと、何度も同じ類のことを繰り返し行うことになるでしょう。このようなことに対処するために、自分独自のユーティリティ関数のライブラリを作成することは良いアイデアです。新しいコードにコピーしたり、必要に応じて HTML ページにそれを適用したりすることができます。

## スキルをテストしよう!

この記事の最後まで到達しましたが、最も大事な情報を覚えていますか？移動する前に、この情報を維持しているか検証するテストを見ることができます— [Test your skills: Functions](/ja/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions) を見てください。

## まとめ

以上、関数は楽しく、非常に便利で、構文や機能についてまだまだ話すことはたくさんありますが、それらはかなり理解しやすいものです。

もし何か理解できなかったことがありましたら、何度もこの記事を読み込むか、または[お問い合わせ](/ja/docs/Learn#Contact_us)ください。

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Reference/Functions) — より高度な関数に関連した情報を網羅した詳細なガイド。
- [Callback functions in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — 一般的な JavaScript のパターンは、ある関数を別の関数に*引数として*渡すことです。それは受け取った関数の中で呼び出されます。これについては、このコースの範疇を少し超えていますが、すぐにでも勉強する価値はあります。

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
