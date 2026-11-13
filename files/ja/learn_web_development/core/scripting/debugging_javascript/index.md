---
title: JavaScript のデバッグとエラー処理
short-title: デバッグとエラー処理
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 08647988c5008504777a4da17a4c028300731524
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

このレッスンでは、JavaScript のデバッグ（[何が間違っている？](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)で最初に見た内容）に戻ります。ここでは、エラーを特定するためのテクニックをさらに深く掘り下げていきますが、同時に、問題に直面する前に避けるために、防御的にコードを作成し、コード内のエラーを処理する方法も説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解し、これまでのレッスンで説明した JavaScript を把握していること。</td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>ブラウザーの開発者ツールを使用して、ページで動作する JavaScript を検査し、これまでエラーとされていたものを調べること。</li>
          <li>デバッグには、 <code>console.log()</code> と <code>console.error()</code> を使用すること。</li>
          <li>ブラウザーの開発者ツールによる JavaScript のデバッグ。</li>
          <li>条件分岐、<code>try...catch</code>、<code>throw</code> を使用したエラー処理。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## JavaScript のエラーの種類についての復習

このモジュールの前半では、「[何が間違っている?](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)」で、 JavaScript プログラムで発生しうるエラーの種類を広く見ていき、それらは大まかに構文エラーと論理エラーの 2 種類に分類できると述べました。また、 JavaScript のエラーメッセージの一般的な種類を理解するのに役立つ情報も提供し、 [`console.log()`](/ja/docs/Web/API/console/log_static) 文を使用して単純なデバッグを行う方法を示しました。

この記事では、エラーを特定するためのツールについて詳しく見ていくほか、そもそもエラーを防ぐ方法についても検討していきます。

## コードのリンティング

特定のエラーの原因を突き止める前に、まずコードの検証を行うべきです。W3C の [Markup validation service](https://validator.w3.org/)、[CSS validation service](https://jigsaw.w3.org/css-validator/)、JavaScript リンター（[ESLint](https://eslint.org/play/) など）を使用して、コードが有効であることを確認しましょう。これにより、いくつかのエラーが見つかると思われますが、それらを修正することで、残りのエラーに集中できるようになります。

### コードエディタープラグイン

コードをウェブページにコピー＆ペーストして、その有効性を何度も確認するのはあまり便利ではありません。コードエディターにリンタープラグインをインストールし、コードを書いている最中にエラーを報告してもらうことをお勧めします。コードエディターのプラグインまたは拡張機能のリストで ESLint を検索し、インストールしてみてください。

## よくある JavaScript の問題

JavaScriptには、注意すべき一般的な問題がいくつかあります。例えば、次のようなものがあります。

- 基本的な構文やロジックの問題（こちらも [JavaScript のトラブルシューティング](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)を参照してください）。
- 変数などが正しいスコープで定義され、異なる場所で宣言された項目間で競合していないことを確認してください（[関数のスコープと競合](/ja/docs/Learn_web_development/Core/Scripting/Functions#関数のスコープと競合)を参照してください）。
- [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) が、どのスコープに適用されるのか、したがってその値が意図通りなのかが混乱しています。 ["this" とは何か](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#this_とは何か)で軽く紹介されています。[これ](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143)のような例も勉強してください。この例では、 `this` スコープを別な変数に保存し、その変数を入れ子関数で使用する典型的なパターンを示しているので、正しい `this` スコープに機能を適用していることを確認できます。
- グローバル変数で反復処理するループ内で関数を誤って使用する（より一般的には「スコープを間違える」）。

> [!CALLOUT]
> 例えば、 [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) （[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)を参照）では、 `var` で定義した変数を使って 10 回の反復処理をループし、そのたびに段落を作成して [onclick](/ja/docs/Web/API/Element/click_event) イベントハンドラーを追加しています。クリックされると、それぞれにその番号（作成した時点での `i` の値）を格納したアラートメッセージが表示されるようにします。なぜなら、 `for` ループはネストされた関数を呼び出す前にすべての反復処理を行うからです。
>
> 最も簡単な解決策は、反復処理変数を `var` の代わりに `let` で宣言することです。動作するバージョンについては [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) （[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)も参照）を参照してください。

- [非同期処理](/ja/docs/Learn_web_development/Extensions/Async_JS)が完了したことを確認してから、それが返す値を使用するようにします。これは通常、プロミスの使用方法を理解することを意味しています。 [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) を適切に使用するか、プロミスの {{jsxref("Promise.then()", "then()")}} ハンドラーで非同期呼び出しの結果を処理するコードを実行します。このトピックの初心者向け記事は、[プロミスの使用方法](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises)を参照してください。

> [!NOTE]
> [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) には、これらのよくある間違いについての解説などがあります。

## ブラウザーの JavaScript コンソール

ブラウザーの開発者ツールには、 JavaScript のデバッグを行うために便利な機能がたくさんあります。手始めに、 JavaScript コンソールはコードのエラーを報告してくれます。

[fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken) のサンプルをローカルにコピーしてください（[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-broken)も参照してください）。

コンソールを見ると、エラーメッセージが表示されます。正確な文言はブラウザーによりますが、 "Uncaught TypeError: heroes is not iterable" のようなものです。参照されている行番号は 25 です。ソースコードを見ると、関連するコードセクションは次のとおりです。

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

すなわち、 `jsonObj` （期待通り、 [JSON オブジェクト](/ja/docs/Learn_web_development/Core/Scripting/JSON)であるはずです）を使用しようとすると、すぐにコードが崩れてしまいます。これは、外部の `.json` ファイルから、以下の {{domxref("Window/fetch", "fetch()")}} 呼び出しを使用して取得することになっています。

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

ただし、これは失敗します。

## コンソール API

このコードのどこが間違っているかは、すでにお分かりかもしれませんが、その原因をどのように突き止めるかを見てみましょう。手始めに、[コンソール](/ja/docs/Web/API/console) API を使って、 JavaScript コードがブラウザーにある JavaScript コンソールと対話することができます。利用できる機能はたくさんありますが、一番多く使用するのは [`console.log()`](/ja/docs/Web/API/console/log_static) で、コンソールに独自のメッセージを出力します。

次のように、 `console.log()` 呼び出しを追加し、 `fetch()` の返値をログ出力してみてください。

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`レスポンスの値: ${response}`);
populateHeader(response);
showHeroes(response);
```

ブラウザーのページを更新してください。今度は、エラーメッセージの前に、コンソールに記録された新しいメッセージが表示されます。

```plain
レスポンスの値: [object Promise]
```

`console.log()` の出力は、 `fetch()` の返値が JSON データではなく {{jsxref("Promise")}} であることを示しています。 `fetch()` 関数は非同期です。ネットワークから実際のレスポンスを受け取ったときにのみ履行される `Promise` を返します。レスポンスを使用することができますが、その前に `Promise` が履行されるのを待つ必要があります。

### `console.error()` とコールスタック

少し脱線しますが、別のコンソールメソッドを使ってエラーを報告してみましょう — {{domxref("console.error_static", "console.error()")}}。コード内の

```js
console.log(`レスポンスの値: ${response}`);
```

を、次のものに置き換えてください。

```js
console.error(`レスポンスの値: ${response}`);
```

コードを保存してブラウザーを更新してください。すると、メッセージがエラーとして報告され、その下にある未処理のエラーと同じ色とアイコンが表示されます。さらに、メッセージの横に展開／折りたたみ用の矢印が表示されます。これをクリックすると、エラーが発生した JavaScript ファイル内の行を示す 1 行が表示されます。実際、未処理のエラーの行にも同様のものがありますが、2 行表示されています。

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

これは、先ほど指摘したように、エラーの原因が `showHeroes()` 関数の 25 行目にあることを意味します。コードを確認すると、10 行目の無名関数が `showHeroes()` を呼び出していることがわかります。これらの行は**コールスタック**と呼ばれ、コード内の複数の箇所にまたがるエラーの原因を特定する際に大いに役立ちます。

このケースでは `console.error()` の呼び出しは特に有用ではありませんが、コールスタックがまだ用意されていない場合に、それを生成するのに役立つことがあります。

### エラーの修正

さて、エラーの修正に戻りましょう。`fetch()` 呼び出しの最後に {{jsxref("Promise.prototype.then()", "then()")}} メソッドをチェーンすることで、解決された `Promise` からのレスポンスにアクセスできます。その後、得られたレスポンス値を、次のように、それを受け取る関数に渡すことができます。

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

保存してページを更新し、コードが動作するか確認してください。ネタバレ注意 — 上記の変更では問題は解決していません。残念ながら、**まだ同じエラーが発生して**います！

> [!NOTE]
> まとめると、何かうまく動作しないときや、コードのある点で値が意味している値になっていないように見えるときはいつでも、`console.log()`、`console.error()`、その他の値を表示する関数を使用してそれを出力し、何が起こっているのかを確認することができます。

## JavaScript デバッガーの使用

ブラウザー開発者ツールのより洗練された機能、 Firefox でいうところの [JavaScript デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)を使って、この問題を調査してみましょう。

> [!NOTE]
> 他のブラウザーでも似たツールが利用できます。 Chrome の[ソースタブ](https://developer.chrome.com/docs/devtools/#sources)、 Safari の Debugger （[Safari Web Development Tools](https://developer.apple.com/safari/tools/)を参照）などです。

Firefoxでは、デバッガータブは次のようになります。

![Firefox デバッガー](debugger-tab.png)

- 左側で、デバッグしたいスクリプトを選択します（この場合は 1 つだけです）。
- 中央のパネルには、選択したスクリプトのコードが表示されます。
- 右側のパネルには、現在の環境に関する便利な詳細（ブレークポイント、コールスタック、現在アクティブなスコープ）が表示されます。

このようなツールの主な特徴は、コードにブレークポイントを追加できることです。ブレークポイントとは、コードの実行が停止する位置のことで、その位置で現在の状態の環境を調べ、何が起こっているかを確認することができます。

ブレークポイントを試してみましょう。

1. エラーは以前と同じ行、つまり `for (const hero of heroes) {` の行で発生しています。下のスクリーンショットでは 26 行目です。中央のパネルにある行番号をクリックして、その行にブレークポイントを設定してください（行の上に青い矢印が表示されます）。
2. ここでページを更新してください（<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>）――ブラウザーはその行のコードの実行を一時停止します。この時点で、右側の画面が更新され、次のように表示されます。

![ブレークポイント付き Firefox デバッガー](breakpoint.png)

- 「ブレークポイント」の下に、設定したブレークポイントの詳細が表示されます。
- 「コールスタック」の下にいくつかの項目が表示されます。これは、基本的に、先ほど `console.error()` のセクションで見たコールスタックと同じものです。コールスタックには、現在の関数が呼び出されるきっかけとなった関数のリストが表示されます。一番上には現在呼び出している関数である `showHeroes()` があり、 2 つ目には `onload` が、すなわち `showHeroes()` の呼び出しを含んでいるイベントハンドラー関数があります。
- 「スコープ」の下には、見ている関数の現在アクティブなスコープが表示されます。 `showHeroes`、`block`、`Window` （グローバルスコープ）の 3 つのみ指定されました。それぞれのスコープは展開させることができ、実行を停止したときのスコープ内の変数の値を表示させることができます。

私たちはここでとても有益な情報を得ることができます。

1. `showHeroes` スコープを展開してください。これを見ると、変数 heroes が `undefined` になっており、 `jsonObj` の `members` プロパティへのアクセス（関数の 1 行目）がうまくいっていないことがわかります。
2. また、 `jsonObj` 変数には、 JSON オブジェクトではなく、 {{domxref("Response")}} オブジェクトが格納されていることがわかります。

`showHeroes()` の引数は `fetch()` のプロミスが履行された値です。つまり、このプロミスには JSON 形式のデータが含まれていません。これは `Response` オブジェクトです。レスポンスの内容を JSON オブジェクトとして取得するには、追加の手順が必要となります。

自分自身でこの問題を解決してみてください。まずは {{domxref("Response")}} オブジェクトのドキュメントを参照してください。もし行き詰まったら、 <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> に修正されたソースコードがあります。

> [!NOTE]
> デバッガータブには、ここでは説明していない他にも多くの便利な機能があります。例えば、条件付きブレークポイントやウォッチ式などです。より多くの情報については、[デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)ページを参照してください。

## コード内で JavaScript のエラーを処理

HTML と CSS は寛容な言語です。エラーや認識されない機能があっても、その言語の性質上、処理できることがよくあります。例えば、 CSS は認識されないプロパティを無視し、残りのコードは動作することがよくあります。しかし、JavaScript は HTML や CSS ほど寛容ではありません。JavaScript エンジンが誤りや認識できない構文を検出すると、多くの場合、エラーが発生します。

コード内の JavaScript エラーを処理するための一般的な手法について見ていきましょう。以下の節では、まず下に示すテンプレートファイルをローカルマシンに "handling-errors.html" としてコピーし、開始タグ `<script>` と終了タグ `</script>` の間にコードスニペットを追加します。その後、そのファイルをブラウザーで開き、開発者ツールの JavaScript コンソールで出力を確認するように進めていきます。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS エラーの処理</title>
  </head>
  <body>
    <script>
      // コードはこの行の下に記述
    </script>
  </body>
</html>
```

### 条件文

[JavaScript の条件分岐](/ja/docs/Learn_web_development/Core/Scripting/Conditionals)の一般的な用途は、エラーの処理です。条件分岐を使用すると、変数の値に応じて異なるコードを実行することができます。多くの場合、値が存在しない場合や型が間違っている場合にエラーが発生するのを防ぐため、あるいは値が原因で誤った結果が返され、後々問題を引き起こす可能性がある場合にエラーを捕捉するために、この機能を活用することが推奨されます。

例を見てみましょう。ユーザーの身長をインチ単位で引数として受け取り、小数点以下 2 桁でメートル単位の身長を返す関数があるとします。その関数は次のような形になるでしょう。

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. 例のファイルの `<script>` 要素内で、`height` という名前の `const` を宣言し、値として `70` を割り当ててください。

   ```js
   const height = 70;
   ```

2. 上記の関数を、前の行の下にコピーしてください。

3. 関数を呼び出し、引数として `height` 定数を渡し、返値をコンソールへ出力してください。

   ```js
   console.log(inchesToMeters(height));
   ```

4. ブラウザーでサンプルを読み込み、開発者ツールの JavaScript コンソールを確認してください。そこに `1.78` という値が記録されているはずです。

5. これ単体では問題なく動作します。しかし、提供されたデータが欠落していたり、間違っていたりした場合はどうなるでしょうか？以下のシナリオを試してみてください。
   - `height` の値を `"70"`（つまり、文字列として表現された `70`）に変更しても、この例は……まだ正常に動作するはずです。これは、文字列の最初の行での計算によって、値が数値データ型に変換されるためです。このような単純なケースでは問題ありませんが、より複雑なコードでは、データ型の不一致がさまざまなバグを引き起こす可能性があり、その中には見つけにくいものもあります！
   - `height` を、`"70 inches"` や `["Bob", 70]`、あるいは {{jsxref("NaN")}} のように、数値に変換できない値に変更した場合、この例では結果として `NaN` が返されるはずです。これは、例えばウェブサイトのユーザーインターフェイスのどこかにユーザーの身長を表示したい場合など、様々な問題を引き起こす可能性があります。
   - もし `height` の値を完全に削除した場合（行頭に `//` を追加してコメントアウトした場合）、コンソールには "Uncaught ReferenceError: height is not defined" といったエラーが表示され、その結果、アプリケーションが完全に停止してしまう可能性があります。

   言うまでもなく、これらの結果はどれも良いものではありません。では、不適切なデータからどう身を守ればよいのでしょうか？

6. 計算を行う前に、データが正しいかどうかを確認するための条件分岐を関数内に追加してみましょう。現在の関数を以下のコードに置き換えてみてください。

   ```js
   function inchesToMeters(num) {
     if (typeof num !== "number" || Number.isNaN(num)) {
       console.log("数値が入力されていません。入力内容を修正してください。");
       return undefined;
     }
     const mVal = (num * 2.54) / 100;
     const m2dp = mVal.toFixed(2);
     return m2dp;
   }
   ```

7. さて、最初の 2 つのシナリオをもう一度試してみると、問題を解決するために何が必要かがお分かりいただけるよう、少し分かりやすいメッセージが返されるはずです。ここには、`num` の値を修正するためのコードを実行するなど、好きなものを何でも記述できますが、これはお勧めできません。この関数には単純な目的が一つあるだけであり、値の修正はシステムの別の場所で処理すべきだからです。

   > [!NOTE]
   > `if()` 文では、まず [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) 演算子を使用して `num` のデータ型が `"number"` であるかどうかを判定し、次に{{jsxref("Number.isNaN", "Number.isNaN(num)")}} が `false` を返すかどうかを判定します。これは、`num` が `NaN` に設定されているという特定のケースに対処するために必要な処理です。なぜなら、`typeof NaN`は依然として`「number」`を返すからです！

8. しかし、3 つ目のシナリオをもう一度試してみると、やはり "Uncaught ReferenceError: height is not defined" というエラーが発生してしまいます。その値を使用しようとしている関数の内部から、その値が利用できないという事実を修正することはできません。

これにはどう対処すればよいでしょうか？正しいデータを受け取れなかった場合、関数がカスタムエラーを返すようにした方が良いでしょう。まずはその方法を見てから、すべてのエラーを一括して処理する方法を検討しましょう。

### 独自のエラーを発生させる

コード内の任意の場所で、[`throw`](/ja/docs/Web/JavaScript/Reference/Statements/throw) 文と {{jsxref("Error.Error", "Error()")}} コンストラクターを組み合わせて、カスタムエラーを発生させることもできます。実際にどのように動作するか見てみましょう。

1. 関数内の `else` ブロックにある `console.log()` の行を、次の行に置き換えてください。

   ```js
   throw new Error("数値が入力されていません。入力内容を修正してください。");
   ```

2. 例をもう一度実行してみてください。ただし、`num` が不正な値（つまり、数値ではない値）に設定されていることを確認してください。今回は、カスタムエラーが発生し、エラーの原因を特定するのに役立つコールスタックが表示されるはずです（ただし、メッセージには依然としてエラーが「未捕捉」または「未処理」であると表示される点にご注意ください）。さて、エラーは厄介なものですが、関数が正常に実行されたものの、後で問題を引き起こす可能性のある数値以外の値を返すよりも、はるかに有用な方法です。

では、これらのエラーにはどう対処すればよいのでしょうか？

### try...catch

[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) 文は、エラー処理に特化したものです。これは次のような構造です。

```js
try {
  // いくつかのコードを実行
} catch (error) {
  // あらゆるエラーを処理
}
```

`try` ブロック内では、あるコードの実行を試みます。このコードがエラーを発生させることなく実行されれば、問題はなく、`catch` ブロックは無視されます。しかし、エラーが発生した場合は、`catch` ブロックが実行されます。これにより、エラーを表す {{jsxref("Error")}} オブジェクトにアクセスできるようになり、エラーを処理するためのコードを実行することができます。

コード内で `try...catch` を使用しましょう。

1. スクリプトの最後にある `inchesToMeters()` 関数を呼び出す `console.log()` の行を、以下のブロックに置き換えてください。これで、`console.log()` の行を `try` ブロック内で実行し、そこで発生したエラーを対応する `catch` ブロック内で処理するようになりました。

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("エラーを処理するコードを挿入してください");
   }
   ```

2. 保存して更新すると、次の 2 つの項目が表示されるはずです。
   - エラーメッセージとコールスタックは以前と同じですが、今回は "uncaught" や "unhandled" といったラベルが付いていません。
   - ログ出力されたメッセージ "エラーを処理するコードを挿入してください"。

3. では、`num` を正しい数値に更新してみてください。そうすれば、エラーメッセージは表示されず、計算結果がログに記録されるのが確認できるはずです。

これは重要な点です。これで、発生したエラーはすべて処理されるため、アプリケーションがクラッシュすることはなくなります。エラーを処理するために、任意のコードを実行することができます。上記では基本的なメッセージをログに出していますが、例えば、ユーザーに身長を再入力するよう求める関数を呼び出し、今回は入力エラーを修正するよう促すこともできます。また、`if...else` 文を使用して、返されるエラーの種類に応じて異なるエラー処理コードを実行することも可能です。

### 機能検出

機能検出は、すべてのブラウザーで対応していない可能性のある新しい JavaScript 機能を使用する場合に有用です。機能の有無を確認し、その結果に応じてコードを実行することで、その機能に対応しているブラウザーと対応していないブラウザーの両方で、適切なユーザー体験を提供することができます。簡単な例として、[位置情報 API](/ja/docs/Web/API/Geolocation_API)（ウェブブラウザーが動作している端末で利用可能な位置情報を公開する）には、それを利用するための主要エントリーポイント、つまりグローバルな [Navigator](/ja/docs/Web/API/Navigator) オブジェクトで利用可能な `geolocation` プロパティを持っています。したがって、先ほど見たのと同様の `if()` 構文を使用することで、ブラウザーが位置情報機能に対応しているかどうかを判別することができます。

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // おそらく Google Maps API を使用し、地図上に場所を表示させる
  });
} else {
  // ユーザーに静的地図の選択肢を与える
}
```

機能検出のその他の例については、[UA スニッフィングの代替手段](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#ua_スニッフィングの代替手段)をご覧ください。

## ヘルプを探す

JavaScript（および HTML と CSS）では他にも多くの課題があります。オンラインで答えを探す方法についての知識は非常に貴重です。

対応している情報源として最適なのは、MDN、[stackoverflow.com](https://stackoverflow.com/)、[caniuse.com](https://caniuse.com/) などです。

- MDN を使用する場合、ほとんどの人は、情報を探している技術名に "mdn" という語句を追加して検索エンジンで検索します。例えば、 "mdn HTML video" と検索します。
- [caniuse.com](https://caniuse.com/) （英語）は、対応している情報とともに、いくつか便利な外部リソースへのリンクも提供しています。例えば、 <https://caniuse.com/#search=video> をご覧ください（テキストボックスに検索する機能を入力するだけです）。
- [stackoverflow.com](https://stackoverflow.com/) (SO、英語) は、質問をしたり、他の開発者が保有する解決策を共有したり、過去の投稿を調べてみたり、他にも開発者を助けたりすることができるフォーラムサイトです。新しい質問を投稿する前に、まず自分の質問に対する回答がすでに存在しないか検索してみてください。例えば、 "disabling autofocus on HTML dialog" （HTML ダイアログで自動フォーカスを無効にする）というキーワードで SO を検索すると、すばやく [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) という回答にたどり着くことができました。

補助的なものとして、問題の解決策を調べるために、お気に入りの検索エンジンで検索してみてください。 特定のエラーメッセージをお持ちの場合は、それを検索すると役立つことが多いでしょう。他にも、あなたと同じ問題を抱えている開発者は多いでしょう。

## まとめ

以上が JavaScript でのデバッグとエラー処理です。単純でしょう？ それほど単純ではないかもしれませんが、この記事は少なくとも出発点となり、JavaScript に関連する問題に取り組むためのアイディアをいくつか与えてくれるはずです。

JavaScript モジュールを使った動的スクリプトについては以上です。お疲れ様でした。次のモジュールでは、JavaScript フレームワークやライブラリーについて役立つ情報を提供します。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
