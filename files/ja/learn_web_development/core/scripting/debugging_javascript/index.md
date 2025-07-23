---
title: JavaScript のデバッグとエラー処理
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

> [!NOTE]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは MDN ウェブ開発の学習の章の改善に努めており、間もなく、 ("TODO") とマークされた場所も完了する予定です。

このレッスンでは、JavaScript のデバッグ（「[何が間違っている?](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)」で最初に見た内容）に戻ります。ここでは、エラーを特定するためのテクニックをさらに深く掘り下げていきますが、同時に、問題に直面する前に避けるために、防御的にコードを作成し、コード内のエラーを処理する方法も見ていきます。

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
          <li>条件分岐、<code>try...catch</code>、<code>throw</code> を使用したエラー処理。</li>
          <li>ブレークポイント、ウォッチャーなどを使った高度な JavaScript のデバッグ。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## JavaScript のエラーの種類についての復習

このモジュールの前半では、「[何が間違っている?](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)」で、 JavaScript プログラムで発生しうるエラーの種類を広く見ていき、それらは大まかに構文エラーと論理エラーの 2 種類に分類できると述べました。また、 JavaScript のエラーメッセージの一般的な種類を理解するのに役立つ情報も提供し、 [`console.log()`](/ja/docs/Web/API/console/log_static) 文を使用して単純なデバッグを行う方法を示しました。

この記事では、エラーを特定するために利用できるツールについてもう少し詳しく見ていき、また、エラーを所有する最初の場所で防ぐ方法についても見ていきます。

## コードのリンティング

特定のエラーを追跡する前に、コードが最初の段階で有効であることを確認する必要があります。 W3C の [Markup validation service](https://validator.w3.org/)、[CSS validation service](https://jigsaw.w3.org/css-validator/)、JavaScriptリンター（[ESLint](https://eslint.org/play/) など）を使用して、コードが有効であることを確認しましょう。これにより、多くのエラーが洗い出され、残ったエラーに集中することができます。

### コードエディタープラグイン

コードをコピーしてウェブページに貼り付け、その有効性を何度も調べなければならないのはとても不便です。あなたが実に望んでいるのは、標準的なワークフローに最小限の手間で適合するリンターです。多くのコードエディターにはリンタープラグインがあります。コードエディターのプラグインまたは拡張機能のリストで ESLint を検索し、インストールしてみてください。

## よくある JavaScript の問題

JavaScript でよくある問題として、以下のようなものがあります。

- 基本的な構文やロジックの問題（こちらも [JavaScript のトラブルシューティング](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong)を参照してください）。
- 変数などが正しいスコープで定義され、異なる場所で宣言された項目間で競合していないことを確認してください（[関数のスコープと競合](/ja/docs/Learn_web_development/Core/Scripting/Functions#関数のスコープと競合)を参照してください）。
- [this](/ja/docs/Web/JavaScript/Reference/Operators/this) が、どのスコープに適用されるのか、したがってその値が意図通りなのかが混乱しています。 ["this" とは何か](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#this_とは何か)で軽く紹介されています。[これ](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143)のような例も勉強してください。この例では、 `this` スコープを別な変数に保存し、その変数を入れ子関数で使用する典型的なパターンを示しているので、正しい `this` スコープに機能を適用していることを確認できます。
- グローバル変数で反復処理するループ内で関数を誤って使用する（より一般的には「スコープを間違える」）。

> [!CALLOUT]
> 例えば、 [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) （[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)を参照）では、 `var` で定義した変数を使って 10 回の反復処理をループし、そのたびに段落を作成して [onclick](/ja/docs/Web/API/Element/click_event) イベントハンドラーを追加しています。クリックされると、それぞれにその番号（作成した時点での `i` の値）を格納したアラートメッセージが表示されるようにします。なぜなら、 `for` ループはネストされた関数を呼び出す前にすべての反復処理を行うからです。
>
> 最も簡単な解決策は、反復処理変数を `var` の代わりに `let` で宣言することです。動作するバージョンについては [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) （[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)も参照）を参照してください。

- [非同期処理](/ja/docs/Learn_web_development/Extensions/Async_JS)が完了したことを確認してから、それが返す値を使用するようにします。これは通常、プロミスの使用方法を理解することを意味しています。 [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) を適切に使用するか、プロミスの {{jsxref("Promise.then()", "then()")}} ハンドラーで非同期呼び出しの結果を処理するコードを実行します。このトピックの初心者向け記事は、[プロミスの使用方法](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises)を参照してください。

> [!NOTE]
> [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) には、これらのよくある間違いについての解説などがあります。

## ブラウザーの JavaScript コンソール

ブラウザーの開発者ツールには、 JavaScript のデバッグを助ける便利な機能がたくさんあります。手始めに、 JavaScript コンソールはコードのエラーを報告してくれます。

[fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken) のサンプルをローカルにコピーしてください（[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-broken)も参照してください）。

コンソールを見ると、エラーメッセージが表示されます。正確な文言はブラウザーによりますが、 "Uncaught TypeError: heroes is not iterable" のようなものです。参照されている行番号は 25 です。ソースコードを見ると、関連するコードセクションは次のとおりです。

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
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

このコードの何が問題なのか、もうお分かりかもしれませんが、これを調査する方法を示すために、もう少し調べてみましょう。手始めに、[コンソール](/ja/docs/Web/API/console) API を使って、 JavaScript コードがブラウザーにある JavaScript コンソールと対話することができます。利用できる機能はたくさんありますが、一番多く使用するのは [`console.log()`](/ja/docs/Web/API/console/log_static) で、コンソールに独自のメッセージを出力します。

次のように、 `console.log()` 呼び出しを追加し、 `fetch()` の返値をログ出力してみてください。

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
const superHeroes = response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

ブラウザーのページを更新してください。今度は、エラーメッセージの前に、コンソールに記録された新しいメッセージが表示されます。

```plain
Response value: [object Promise]
```

`console.log()` の出力は、 `fetch()` の返値が JSON データではなく {{jsxref("Promise")}} であることを示しています。 `fetch()` 関数は非同期です。ネットワークから実際のレスポンスを受け取ったときにのみ履行される `Promise` を返します。レスポンスを使用することができますが、その前に `Promise` が履行されるのを待つ必要があります。

これを行うには、返された `Promise` の {{jsxref("Promise.prototype.then()", "then()")}} メソッド内にレスポンスを使用するコードを記述してください。

```js
const response = fetch(requestURL);
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

まとめると、何かうまく動作しないときや、コードのある点で値が意味している値になっていないように見えるときはいつでも、 `console.log()` を使用してそれを出力し、何が起こっているのかを確認することができます。

## JavaScript デバッガーの使用

残念ながら、まだ同じエラーが出ています。ブラウザー開発者ツールのより洗練された機能、 Firefox でいうところの [JavaScript デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)を使って、この問題を調査してみましょう。

> [!NOTE]
> 他のブラウザーでも似たツールが利用できます。 Chrome の[ソースタブ](https://developer.chrome.com/docs/devtools/#sources)、 Safari の Debugger （[Safari Web Development Tools](https://developer.apple.com/safari/tools/)を参照）などです。

Firefoxでは、デバッガータブは次のようになります。

![Firefox デバッガー](debugger-tab.png)

- 左側で、デバッグしたいスクリプトを選択します（この場合は 1 つだけです）。
- 中央のパネルには、選択したスクリプトのコードが表示されます。
- 右側のパネルには、現在の環境に関する便利な詳細（ブレークポイント、コールスタック、現在アクティブなスコープ）が表示されます。

このようなツールの主な特徴は、コードにブレークポイントを追加できることです。ブレークポイントとは、コードの実行が停止する位置のことで、その位置で現在の状態の環境を調べ、何が起こっているかを確認することができます。

さっそくやってみましょう。エラーは現在 26 行目で発生しています。中央のパネルで 26 行目をクリックし、ブレークポイントを追加してください（一番上に青い矢印が表示されます）。ページを更新してみてください (Cmd/Ctrl + R)。ブラウザーは 26 行目でコードの実行を一時停止します。この時点で右側が更新され、とても有益な情報が表示されます。

![ブレークポイント付き Firefox デバッガー](breakpoint.png)

- 「ブレークポイント」の下に、設定したブレークポイントの詳細が表示されます。
- 「コールスタック」の下にいくつかの項目が表示されます。これは基本的に、現在の関数を呼び出すために呼び出された一連の関数のリストです。一番上には現在呼び出している関数である `showHeroes()` があり、 2 つ目には `onload` が、すなわち `showHeroes()` の呼び出しを含んでいるイベントハンドラー関数があります。
- 「スコープ」の下には、見ている関数の現在アクティブなスコープが表示されます。 `showHeroes`、`block`、`Window` （グローバルスコープ）の 3 つのみ指定されました。それぞれのスコープは展開させることができ、コードの実行を停止したときのスコープ内の変数の値を表示させることができます。

私たちはここでとても有益な情報を得ることができます。

1. `showHeroes` スコープを展開してください。これを見ると、変数 heroes が `undefined` になっており、 `jsonObj` の `members` プロパティへのアクセス（関数の 1 行目）がうまくいっていないことがわかります。
2. また、 `jsonObj` 変数には、 JSON オブジェクトではなく、 {{domxref("Response")}} オブジェクトが格納されていることがわかります。

`showHeroes()` の引数は `fetch()` のプロミスが履行された値です。つまり、このプロミスは JSON 形式ではなく、 `Response` オブジェクトです。レスポンスの内容を JSON オブジェクトとして取得するには、追加のステップが必要です。

あなた自身でこの問題を解決してみてください。まずは {{domxref("Response")}} オブジェクトのドキュメントをご覧ください。もし行き詰まったら、 <https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> に修正されたソースコードがあります。

> [!NOTE]
> デバッガーのタブには、例えば条件付きブレークポイントやウォッチ式など、ここでは指定し ていない他にも有益な機能がたくさんあります。より多くの情報については、[デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)ページを参照してください。

## コード内で JavaScript のエラーを処理

HTML と CSS は寛容な言語です。エラーや認識されない機能があっても、その言語の性質上、処理できることがよくあります。例えば、 CSS は認識されないプロパティを無視し、残りのコードは動作することがよくあります。しかし、 JavaScript は HTML や CSS ほど寛容ではありません。 JavaScript エンジンがエラーや認識されない構文に遭遇すると、多くの場合、エラーが発生します。

コードで JavaScript エラーを処理するにはいくつか方法があります。最も一般的なものを見ていきましょう。

### 条件文

TODO

### try...catch

TODO

### throw でエラーを発生させる

TODO

### 機能検出

機能検出の考えは、JavaScript のある機能に現在のブラウザーが対応しているかどうかを判断するテストを実行し、その機能に対応しているブラウザーでも対応していないブラウザーでも受け入れられるサービスを提供するコードを条件付きで実行することができるということです。簡単な例として、[位置情報 API](/ja/docs/Web/API/Geolocation_API)（ウェブブラウザーが動作している端末で利用可能な位置情報を公開する）には、それを利用するための主要エントリーポイント、つまりグローバルな [Navigator](/ja/docs/Web/API/Navigator) オブジェクトで利用可能な `geolocation` プロパティを持っています。したがって、以下のように使用することで、ブラウザーが位置情報に対応しているかどうかを検出することができます。

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // おそらく Google Maps API を使用し、地図上に場所を表示させる
  });
} else {
  // ユーザーに静的地図の選択肢を与える
}
```

## ヘルプを探す

JavaScript（および HTML と CSS）では他にも多くの課題があります。オンラインで答えを探す方法についての知識は非常に貴重です。

対応している情報源として最適なのは、MDN（つまり、あなたが今いる場所です！）、[stackoverflow.com](https://stackoverflow.com/)、[caniuse.com](https://caniuse.com/) などです。

- Mozilla Developer Network (MDN) を使用するには、ほとんどの人は、情報を探している技術名に "mdn" という語句を追加して検索エンジンで検索します。例えば、 "mdn HTML video" と検索します。
- [caniuse.com](https://caniuse.com/) （英語）は、対応している情報とともに、いくつか便利な外部リソースへのリンクも提供しています。例えば、 <https://caniuse.com/#search=video> をご覧ください（テキストボックスに検索する機能を入力するだけです）。
- [stackoverflow.com](https://stackoverflow.com/) (SO、英語) は、質問をしたり、他の開発者が保有する解決策を共有したり、過去の投稿を調べてみたり、他にも開発者を助けたりすることができるフォーラムサイトです。新しい質問を投稿する前に、すでに質問に対する回答があるかどうかを見ていくことをお勧めします。例えば、 "disabling autofocus on HTML dialog" （HTML ダイアログで自動フォーカスを無効にする）というキーワードで SO を検索すると、すばやく [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) という回答にたどり着くことができました。

補助的なものとして、問題の解決策を調べるために、お気に入りの検索エンジンで検索してみてください。 特定のエラーメッセージをお持ちの場合は、それを検索すると役立つことが多いでしょう。他にも、あなたと同じ問題を抱えている開発者は多いでしょう。

## まとめ

以上が JavaScript でのデバッグとエラー処理です。単純でしょう？ それほど単純ではないかもしれませんが、この記事は少なくとも出発点となり、 JavaScript に関連する問題に取り組むためのアイディアをいくつか与えてくれるはずです。

JavaScript モジュールを使った動的スクリプトについては以上です。お疲れ様でした。次のモジュールでは、JavaScript フレームワークやライブラリーについて役立つ情報を提供します。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
