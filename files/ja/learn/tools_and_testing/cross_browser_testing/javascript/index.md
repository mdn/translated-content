---
title: よくある JavaScript の問題の扱い
slug: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
l10n:
  sourceCommit: b59c2c5d26c86704c0f16e02fa5e0ec9475314c9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}

今度は一般的なブラウザー間の JavaScript の問題と、それを修正する方法を見ていきます。
この情報には、問題を追跡して修正するためにブラウザー開発ツールを使用すること、問題を回避するためにポリフィルとライブラリーを使用すること、現行の JavaScript 機能を古いブラウザーで動作させること、などが記載されています。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語の主要部に通じていること。
        <a
          href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >ブラウザー横断テストの基本</a
        >について高水準の考えを持っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        一般的な JavaScript のブラウザー間の問題を診断し、適切なツールやテクニックを使用して修正することができること。
      </td>
    </tr>
  </tbody>
</table>

## JavaScript のトラブル

過去には、JavaScript はブラウザー間の互換性の問題に悩まされていました。1990 年代には、当時の主要ブラウザー（Internet Explorer と Netscape）は異なる言語フレーバーでスクリプトを実装していました（Netscape は JavaScript、IE は JScript で、オプションとして VBScript も提供していました）が、少なくとも JavaScript と JScript はある程度互換性がありました（どちらも {{glossary("ECMAScript")}} 仕様に基づいています）が、よく競合し、互換性のない方法で実装され、開発者に多くの悪夢を発生させていました。
このようなブラウザーの非互換性の問題は、古いブラウザーがまだ使用されており、対応する必要があったため、 2000 年代初頭まで続きました。例えば、 {{domxref("XMLHttpRequest")}} オブジェクトを作成するコードは、 Internet Explorer 6 用に特別な処理をする必要がありました。

```js
if (window.XMLHttpRequest) {
  // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 6 and older
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

これは、 [jQuery](https://jquery.com/) のようなライブラリーが登場した主要な理由の 1 つです。ブラウザーでの実装の違いを抽象化し、開発者が例えば [`jQuery.ajax()`](https://api.jquery.com/jquery.ajax/) を使用することができるようにするためで、バックグラウンドで違いを処理することができます。

それから状況は大きく改善され、現行のブラウザーは「古典的な JavaScript 機能」によく対応していますし、古いブラウザーに対応する必要性が少なくなるにつれて、そのようなコードを使用する要求も少なくなっています（完全になくなったわけではないことを覚えておいてください）。

最近では、ほとんどのブラウザー間の JavaScript の問題は次のような場面で見られます。

- 質の悪いブラウザー推測コード、機能検出コード、接頭辞などを使用していることで、本来であれば問題なく使用することができるコードをブラウザーが実行することができなくなっている場合。
- 開発者が JavaScript の新しい機能や最新の Web API などをコードで使用していて、古いブラウザーではこの機能がうまく動作しないことが分かったとき。

このような問題をすべて含め、下記でご紹介します。

## 一般的な JavaScript の問題の修正

[前回の記事](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#まず最初に：一般的な問題を解決する)で HTML/CSS について述べたように、ブラウザー間の問題に集中する前に、自分のコードが一般的に動作していることを確認するべきです。もしまだ [JavaScript のトラブルシューティング](/ja/docs/Learn/JavaScript/First_steps/What_went_wrong)の基本に慣れていないのであれば、先に進む前にこの記事を勉強してください。 JavaScript には、以下のようなよくある問題があります。

- 基本的な構文やロジックの問題（こちらも [JavaScript のトラブルシューティング](/ja/docs/Learn/JavaScript/First_steps/What_went_wrong)を参照してください）。
- 変数などが正しいスコープで定義され、異なる場所で宣言された項目間で競合していないことを確認してください（[関数のスコープと競合](/ja/docs/Learn/JavaScript/Building_blocks/Functions#関数のスコープと競合)を参照してください）。
- [this](/ja/docs/Web/JavaScript/Reference/Operators/this) が、どのスコープに適用されるのか、したがってその値が意図通りなのかが混乱しています。 ["this" とは何か](/ja/docs/Learn/JavaScript/Objects/Basics#this_とは何か)で軽く紹介されています。[これ](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143)のような例も勉強してください。この例では、 `this` スコープを別な変数に保存し、その変数を入れ子関数で使用する典型的なパターンを示しているので、正しい `this` スコープに機能を適用していることを確認できます。
- グローバル変数で反復処理するループ内で関数を誤って使用する（より一般的には「スコープを間違える」）。

> **注目:**
> 例えば、 [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) （[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)を参照）では、 `var` で定義した変数を使って10回の反復処理をループし、そのたびに段落を作成して [onclick](/ja/docs/Web/API/Element/click_event) イベントハンドラーを追加しています。クリックされると、それぞれにその番号（作成した時点での `i` の値）を格納したアラートメッセージが表示されるようにします。なぜなら、 `for` ループはネストされた関数を呼び出す前にすべての反復処理を行うからです。
>
> 最も簡単な解決策は、反復処理変数を `var` の代わりに `let` で宣言することです。動作するバージョンについては [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) （[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)も参照）を参照してください。

- [非同期処理](/ja/docs/Learn/JavaScript/Asynchronous)が完了したことを確認してから、それが返す値を使用するようにします。これは通常、プロミスの使用方法を理解することを意味しています。 [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) を適切に使用するか、プロミスの {{jsxref("Promise.then()", "then()")}} ハンドラーで非同期呼び出しの結果を処理するコードを実行します。このトピックの初心者向け記事は、[プロミスの使用方法](/ja/docs/Learn/JavaScript/Asynchronous/Promises)を参照してください。

> **メモ:** [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) には、これらのよくある間違いについての解説などがあります。

### リンター

[HTML や CSS](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#リンター) と同様に、リンターを使用することで、 JavaScrip tコードをより高品質でエラーの可能性の低いものにすることができます。リンターはエラーを指摘し、悪い習慣などに関する警告を表示することができ、エラーや警告の報告を厳しくしたり緩くしたりするようにカスタマイズすることができます。私たちが推奨する JavaScript/ECMAScript リンターは [JSHint](https://jshint.com/) と [ESLint](https://eslint.org/) です。これらは様々な方法で使用することができますが、下記で詳しく説明します。

#### オンライン

[JSHint のホームページ](https://jshint.com/)では、左側に JavaScript コードを入力すると、右側にメトリクス、警告、エラーを含む出力を提供するオンラインリンターを提供しています。

![JSHintのスクリーンショット。左のパネルは色分けされた行番号付きのコードエディターです。右のパネルは、関数と警告の数、サイズ、構成に関するメトリクスに分かれています。警告には、課題と行番号が記載されています。](jshint-online.png)

#### コードエディタープラグイン

コードをコピーしてウェブページに貼り付け、その有効性を何度も調べなければならないのはとても不便です。あなたが実に望んでいるのは、標準的なワークフローに最小限の手間で適合するリンターです。多くのコードエディターにはリンタープラグインがあります。例えば、 [JSHint インストールページ](https://jshint.com/install/)の "Plugins for text editors and IDEs" の節を参照してください。

#### その他の使用方法

このようなリンターを使用する方法は他にもあります。 [JSHint](https://jshint.com/install/) や [ESLint](https://eslint.org/docs/user-guide/getting-started) のインストールページで読むことができます。

コマンドラインを使用することができることに触れておきましょう - npm（Node Package Manager - 先に [NodeJS](https://nodejs.org/en/) をインストールする必要があります）を使用して、コマンドラインユーティリティ（CLI - コマンドラインインターフェイスで利用できます）としてこれらのツールをインストールすることができます。例えば、以下のコマンドで JSHint をインストールします：

```bash
npm install -g jshint
```

それから、次のように検証したい JavaScript ファイルを次のように指定します。

![jshint filename.js がコマンド行に入力されています。応答は行番号のリストと得られるエラーの説明です。](js-hint-commandline.png)

これらのツールを [Gulp](https://gulpjs.com/) や [Webpack](https://webpack.github.io/) のようなタスクランナー/ビルドツールと使用して、開発中に JavaScript を自動的に検証することもできます。（後の記事で[テストツールを自動化するタスクランナーの使用](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#using_a_task_runner_to_automate_testing_tools)を参照してください） ESLint のオプションについては [ESLint integrations](https://eslint.org/docs/user-guide/integrations) を参照してください。 JSHint は Grunt ですぐに対応しており、他にも [Webpack 用の JSHint loader](https://github.com/webpack-contrib/jshint-loader) などの統合があります。

> **メモ:** ESLint は JSHint よりも設定や構成が少し面倒ですが、より強力です。

### ブラウザーの開発者ツール

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

すなわち、 `jsonObj` （期待通り、 [JSON オブジェクト](/ja/docs/Learn/JavaScript/Objects/JSON)であるはずです）を使用しようとすると、すぐにコードが崩れてしまいます。これは、外部の `.json` ファイルから、以下の {{domxref("fetch()")}} 呼び出しを使用して取得することになっています。

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

ただし、これは失敗します。

#### コンソール API

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

#### デバッガーの使用

残念ながら、まだ同じエラーが出ています。ブラウザー開発者ツールのより洗練された機能、 Firefox でいうところの [JavaScript デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)を使って、この問題を調査してみましょう。

> **メモ:** 他のブラウザーでも似たツールが利用できます。 Chrome の[ソースタブ](https://developer.chrome.com/docs/devtools/#sources)、 Safari の Debugger （[Safari Web Development Tools](https://developer.apple.com/safari/tools/)を参照）などです。

Firefoxでは、デバッガータブは次のようになります。

![Firefox デバッガー](debugger-tab.png)

- 左側で、デバッグしたいスクリプトを選択します（この場合は1つだけです）。
- 中央のパネルには、選択したスクリプトのコードが表示されます。
- 右側のパネルには、現在の環境に関する便利な詳細（ブレークポイント、コールスタック、現在アクティブなスコープ）が表示されます。

このようなツールの主な特徴は、コードにブレークポイントを追加できることです。ブレークポイントとは、コードの実行が停止する位置のことで、その位置で現在の状態の環境を調べ、何が起こっているかを確認することができます。

さっそくやってみましょう。エラーは現在 26 行目で発生しています。中央のパネルで 26 行目をクリックし、ブレークポイントを追加してください（一番上に青い矢印が表示されます）。ページを更新してみてください (Cmd/Ctrl + R)。ブラウザーは 51 行目でコードの実行を一時停止します。この時点で右側が更新され、とても有益な情報が表示されます。

![ブレークポイント付き Firefox デバッガー](breakpoint.png)

- 「ブレークポイント」の下に、設定したブレークポイントの詳細が表示されます。
- 「コールスタック」の下にいくつかの項目が表示されます。これは基本的に、現在の関数を呼び出すために呼び出された一連の関数のリストです。一番上には現在呼び出している関数である `showHeroes()` があり、 2 つ目には `onload` が、すなわち `showHeroes()` の呼び出しを含んでいるイベントハンドラー関数があります。
- 「スコープ」の下には、見ている関数の現在アクティブなスコープが表示されます。 `showHeroes`、`block`、`Window` （グローバルスコープ）の 3 つのみ指定されました。それぞれのスコープは展開させることができ、コードの実行を停止したときのスコープ内の変数の値を表示させることができます。

私たちはここでとても有益な情報を得ることができます。

1. `showHeroes` スコープを展開してください。これを見ると、変数 heroes が `undefined` になっており、 `jsonObj` の `members` プロパティへのアクセス（関数の 1 行目）がうまくいっていないことがわかります。
2. また、 `jsonObj` 変数には、 JSON オブジェクトではなく、 {{domxref("Response")}} オブジェクトが格納されていることがわかります。

`showHeroes()` の引数は `fetch()` のプロミスが履行された値です。つまり、このプロミスは JSON 形式ではなく、 `Response` オブジェクトです。レスポンスの内容を JSON オブジェクトとして取得するには、追加のステップが必要です。

あなた自身でこの問題を解決してみてください。まずは {{domxref("Response")}} オブジェクトのドキュメントをご覧ください。もし行き詰まったら、 <https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> に修正されたソースコードがあります。

> **メモ:** デバッガーのタブには、例えば条件付きブレークポイントやウォッチ式など、ここでは指定し ていない他にも有益な機能がたくさんあります。より多くの情報については、[デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)ページを参照してください。

### パフォーマンスの問題

アプリがより複雑になり、より多くの JavaScript を使用するようになると、特に低速な端末でアプリを表示するときにパフォーマンスの問題に直面し始めるかもしれません。パフォーマンスは大きなトピックであり、ここで詳細に指定する時間はありません。以下にいくつかの簡単なヒントを示します。

- 必要以上の JavaScript の読み込みを避けるには、 [Browserify](https://browserify.org/) のようなソリューションを使ってスクリプトを 1 つのファイルにまとめてください。一般的に、 HTTP リクエストの数を減らすことはパフォーマンスにとってとても良いことです。
- 本番サーバーにアップロードする前に、ファイルを最小化することで、ファイルをさらに小さくしましょう。最小化すると、すべてのコードが巨大な単一の行に集約され、ファイルサイズがはるかに小さくなります。醜いですが、完了したら読む必要はありません。これは [Uglify](https://github.com/mishoo/UglifyJS) のような最小化ツールを使用して行うのがベストです（オンライン版もあります。 [JSCompress.com](https://jscompress.com/) を参照してください）。
- API を使用する場合、使用していないときは API 機能を必ずオフにしてください。 API 呼び出しによっては処理能力を実に高く消費することがあります。例えば、動画ストリームを表示させる場合、それが見えないときは必ずオフにしてください。 Geolocation の呼び出しを繰り返し使用して端末の位置を追跡する場合は、ユーザーが使用するのを止めたときにオフにするようにしてください。
- アニメーションは実にパフォーマンスコストがかかります。多くの JavaScript ライブラリーは JavaScript でプログラムされたアニメーション機能を提供していますが、 JavaScript よりも [CSSアニメーション](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations) (または新進の [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)) のようなブラウザーネイティブ機能でアニメーションを行う方が、はるかにコストパフォーマンスが高いです。 Brian Birtles の [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) を読むと、アニメーションにコストがかかる理由や、アニメーションのパフォーマンスを向上させるためのヒント、ウェブアニメーションAPIに関する情報など、実に有益な理論が書かれています。

> **メモ:** Addy Osmani の [Writing Fast, Memory-Efficient JavaScript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/) には、 JavaScript のパフォーマンスを向上させるための多くの詳細と優れたヒントが格納されています。

## ブラウザー間の JavaScript の問題

この節では、より一般的なブラウザー間の JavaScript の問題を見ていきます。以下に分けて説明します。

- 最新の JavaScript コア機能を使用します。
- 最新のウェブ API 機能を使用すること
- 悪質なブラウザー検出コードを使用しています。
- パフォーマンスの問題

### 最新の JavaScript/API 機能の使用

[前回の記事](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#older_browsers_not_supporting_modern_features)では、言語の性質上、 HTML や CSS のエラーや認識できない機能を処理する方法について説明しました。しかし JavaScript は HTML や CSS ほど寛容ではありません。 JavaScript エンジンが間違いや認識されない構文に遭遇した場合、例えば対応していない新しい機能が使われた場合など、多くの場合エラーになります。

新機能への対応にはいくつか戦略がありますが、最も一般的なものを見てみましょう。

> **メモ:** もちろん、必要に応じて組み合わせることもできます。例えば、ある機能が対応しているかどうかを判断するために機能検出を使用することができます。対応していない場合は、ポリフィルや ライブラリーを読み込むコードを実行して、対応していない部分を処理することができます。

#### 機能検出

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

CSS 機能に対して、このようなテストを書くこともできます。例えば、 _[element.style.property](/ja/docs/Web/API/HTMLElement/style)_ が存在するかどうかをテストすることで（例えば `paragraph.style.transform !== undefined`）、そのプロパティに対応していることを示します。
CSS 機能が対応している場合にスタイルを適用したい場合は、 [@supports](/ja/docs/Web/CSS/@supports) アットルール（機能クエリーとして知られています）を直接使用することができます。
例えば、ブラウザーが CSS コンテナークエリーに対応しているかどうかを調べるには、このようにします。

```css
@supports (container-type: inline-size) {
  /* 対応している場合はコンテナクエリーを使用します。 */
}
```

最後に、機能検出を**ブラウザー検出**（具体的にどのブラウザーがサイトにアクセスしているかを検出すること）と混同しないでください。これはひどい行為なので、まったくお勧めできません。詳細は後述の[悪いブラウザー検出コードの使用](#悪いブラウザー検出コードの使用)を参照してください。

> **メモ:** 機能検出については、このモジュールの後の方で、専用の記事で詳しく述べます。

#### ライブラリー

JavaScript ライブラリーは基本的にサードパーティ製のコード単位で、ページに添付することができ、すぐに使用することができる豊富な既製の機能を提供します。 JavaScript ライブラリーの多くは、開発者が将来自分のプロジェクトを書くときの時刻を節約するために一般的なユーティリティ関数の設定をしていて、他の人も有益な機能を探すかもしれないので公開することにしたために決まります。

JavaScript ライブラリーには、いくつかの主な種類がある傾向があります（複数の目的を果たすライブラリーもあります）。

- ユーティリティライブラリー： ありふれた課題をより簡単に、退屈しないように管理するための関数を提供します。例えば [jQuery](https://jquery.com/) は、自分自身で指定された機能を持つセレクターと DOM 操作のライブラリーを提供し、 JavaScript で CSS セレクターを入力するような要素の選択や、 DOM の構築を簡単にします。 {{domxref("Document.querySelector()")}}/{{domxref("Document.querySelectorAll()")}}/{{domxref("Node")}} のメソッドのような最新の機能がブラウザーを通して利用できるようになった今ではさほど重要ではなくなりましたが、古いブラウザーの対応が必要な場合にはなお利用価値があります。
- 便利なライブラリー： 難しいことを簡単にします。例えば、 [WebGL API](/ja/docs/Web/API/WebGL_API) は実際に使用すると複雑で難しいので、 [Three.js](https://threejs.org/) ライブラリー（他にもあります）は WebGL の上に構築されており、一般的な 3D オブジェクト、ライティング、テクスチャなどを作成するための API をより簡単に提供します。
  [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) も使用するのが非常に複雑なので、一般的なサービスワーカーのユースケースをより簡単に実装するためのコードライブラリーが現れ始めました（いくつかの便利なコード例は [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) を参照してください）。
- 効果ライブラリー： これらのライブラリーは、ウェブサイトに特殊効果を簡単に追加できるように設計されています。 "DHTML" が流行語であった頃、効果の実装には複雑な JavaScript が必要でしたが、最近のブラウザーには多数の CSS 機能と API があり、より簡単に効果を実装することができます。
- UI ライブラリー： 例えば [Foundation](https://get.foundation/)、[Bootstrap](https://getbootstrap.com/)、[Material-UI](https://mui.com/) （後者は React フレームワークで使用するための部品設定です）のような、ブラウザー横断でで実装し、取得するのが難しい複雑な UI 機能を実装するメソッドを提供します。これらはサイト全体のレイアウトの基礎として用いられる傾向があります。 1 つの UI 機能のためだけに使用するのは難しいことが多いです。
- 正規化ライブラリー： ブラウザー間の違いを気にすることなく、課題を簡単に完了できる単純な構文を提供します。ライブラリーはバックグラウンドで適切な API を操作するので、（理論上は）どんなブラウザーでも機能は動作します。例えば、 [LocalForage](https://github.com/localForage/localForage) はクライアント側データストアのためのライブラリーで、データを格納したり取得したりするための単純な構文を提供します。バックグラウンドでは、 [IndexedDB](/ja/docs/Web/API/IndexedDB_API)、[Web Storage](/ja/docs/Web/API/Web_Storage_API)、あるいは Web SQL （これで非推奨ですが、 Chromium ベースのブラウザーでは安全なコンテキストでまだ対応しています）など、ブラウザーがデータストアのために利用できる最適な API を使用します。他の例として、 jQuery があります。

使用するライブラリーを選ぶ際には、対応したいブラウザーの間でこれはうまく動作することを確認し、実装を十分にテストしてください。また、そのライブラリーが人気があり、よく対応していて、来週陳腐化する可能性がないことも確認してください。他の開発者に話を聞いて彼らが何を推奨しているかを探したり、 GitHub （またはライブラリーが格納されている場所）でそのライブラリーの活動状況や協力者の数を確認したりしましょう。

基本的なレベルでのライブラリーの使い方は、ライブラリーのファイル（JavaScript、場合によっては CSS やその他の依存関係も）をダウンロードし、ページに添付する（例えば {{htmlelement("script")}} 要素で）ことです。しかし、このようなライブラリーには、 [Bower](https://bower.io/) コンポーネントとしてインストールしたり、 [Webpack](https://webpack.github.io/) モジュールバンドラーに依存関係として記載するなど、他にも多くの使用方法があります。より詳細な情報については、ライブラリーの個別のインストールページを読む必要があります。

> **メモ:** JavaScript のフレームワークである [Ember](https://emberjs.com/) や [Angular](https://angularjs.org/) もウェブ上で見かけます。ライブラリーは個々の問題を解決したり、既存のウェブサイトに取り込んだりするのに多いのに対し、フレームワークは複雑なウェブアプリケーションを開発するための完全なソリューションという傾向があります。

#### ポリフィル

ポリフィルもまた、自分のプロジェクトに組み込むことができるサードパーティの JavaScript ファイルで構成されていますが、ライブラリーとは異なります。ライブラリーが既存の機能を拡張して物事を簡単にする傾向があるのに対して、ポリフィルはまったく存在しない機能を提供します。ポリフィルは JavaScript や他の技術を完全に使用して、ブラウザーがネイティブに対応していない機能に対応します。例えば、 [es6-promise](https://github.com/stefanpenner/es6-promise) のようなポリフィルを使用すると、プロミスがネイティブで対応していないブラウザーでも動作するようになります。

それでは実際に作業してみましょう。この例ではデモのためだけに、 Fetch のポリフィルと es6-promise ポリフィルを使用しています。フェッチとプロミスは現行のブラウザーでは完全に対応していますが、もしフェッチに対応していないブラウザーを対象にしていた場合、ブラウザーはフェッチにも対応していない可能性が高く、フェッチはプロミスを多用します。

1. まず、 [fetch-polyfill.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill.html) と [花の画像](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/flowers.jpg) を新しいディレクトリーにコピーしてください。これから、花の画像をフェッチしてページに表示するコードを書きます。
2. 次に、 [Fetch のポリフィル](https://raw.githubusercontent.com/github/fetch/master/fetch.js)のコピーを HTML と同じディレクトリーに保存します。
3. 以下のコードを使用して、ポリフィルスクリプトをページに適用します。既存の {{htmlelement("script")}} 要素の上に配置して、フェッチを使用し始めたときにすでにページ上で利用できるようにします（IE11 はフェッチで要求されるプロミスに対応しているので、 CDN からプロミスのポリフィルも読み込んでいます）。

   ```html
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
   <script src="fetch.js"></script>
   ```

4. 元の {{htmlelement("script")}} の中に、以下のコードを追加します。

   ```js
   const myImage = document.querySelector(".my-image");

   fetch("flowers.jpg").then((response) => {
     response.blob().then((myBlob) => {
       const objectURL = URL.createObjectURL(myBlob);
       myImage.src = objectURL;
     });
   });
   ```

5. [フェッチ](/ja/docs/Web/API/fetch)に対応していないブラウザーで読み込んでも、花の画像が現れるはずです。
   ![Fetch basic example という見出しと紫の花の写真](fetch-image.jpg)

> **メモ:** 完成版は [fetch-polyfill-finished.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) にあります（[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html)も参照してください）。

> **メモ:** 繰り返しになりますが、これから出会う様々なポリフィルを使用する方法はたくさんあります - それぞれのポリフィルのドキュメントを参照してください。

「なぜポリフィルは必要がなくても、常にコードを読み込むべきなのか」と思うかもしれません。これは良い点です。サイトが複雑になり、より多くのライブラリーやポリフィルなどを使用するようになると、多くの余分なコードを読み込むようになり、特に性能の低い端末ではパフォーマンスに影響を及ぼし始める可能性があります。必要なファイルだけを読み込むのが意味あることです。

これを行うには、 JavaScript で特別な設定を要求されます。使用しようとしている機能をブラウザーが対応しているかどうかを検出する、何らかの機能検出テストが必要です。

```js
if (browserSupportsAllFeatures()) {
  main();
} else {
  loadScript("polyfills.js", main);
}

function main(err) {
  // actual app code goes in here
}
```

そこで最初に、関数 `browserSupportsAllFeatures()` が true を返すかどうかを調べる条件を実行します。もし true を返したら、アプリのコードをすべて格納する `main()` 関数を実行します。 `browserSupportsAllFeatures()` は次のようになります：

```js
function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}
```

ここでは、[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) オブジェクトと [`fetch()`](/ja/docs/Web/API/fetch) 関数がブラウザーで存在するかどうかをテストしています。両方が存在する場合、関数は true を返します。もし関数が `false` を返したら、条件分岐の2つ目の部分のコードを実行します。これは loadScript() と呼ばれる関数を実行し、ポリフィルをページに読み込み、読み込み完了後に `main()` を実行します。 `loadScript()` は次のようになります。

```js
function loadScript(src, done) {
  const js = document.createElement("script");
  js.src = src;
  js.onload = () => {
    done();
  };
  js.onerror = () => {
    done(new Error(`Failed to load script ${src}`));
  };
  document.head.appendChild(js);
}
```

この関数は新しい `<script>` 要素を作成し、その `src` 属性に最初の引数で指定したパス（上のコードで呼び出したときは `'polyfills.js'`）を設定します。読み込んだら、 2 つ目の引数に指定した関数 (`main()`) を実行します。スクリプトの読み込みでエラーが発生した場合は、関数を呼び出しますが、その際、問題が発生した場合にデバッグに役立つよう、カスタムエラーを取得します。

polyfills.js は基本的に使用している 2 つのポリフィルを 1 つのファイルにまとめたものです。私たちは手動でこれを行いましたが、自動的にバンドルを生成してくれる賢いソリューションもあります。 [Browserify](https://browserify.org/) を参照してください（基本的なチュートリアルは [Getting started with Browserify](https://www.sitepoint.com/getting-started-browserify/) を参照してください）。このように JS ファイルを 1 つにバンドルするのはよいアイディアです。 HTTP リクエストを縮小することで、サイトのパフォーマンスが向上します。

このコードが動作している様子は、 [fetch-polyfill-only-when-need.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html) で見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html)も参照）。このコードは元々 Philip Walton によって書かれたものです。元コードは Philip Walton 氏の記事 [Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) を調べてください（この記事には有益な説明がたくさんあります）。

#### JavaScript のトランスパイル

最新の JavaScript の機能を使用したい人のために人気が出てきているもう一つのオプションは、最近の ECMAScript の機能を使用するコードを、古いブラウザーで作業するバージョンに変換することです。

> **メモ:** これは「トランスパイル」と呼ばれます。（C コードで言うような）コンピューターで実行するためにコードを低レベルにコンパイルするのではなく、同じような抽象度で存在する構文に変更することで、同じように使用することができますが、状況は少し異なります（この場合、 JavaScript のある種類を別の種類に変換します）。

よく使われるトランスパイラーは [Babel.js](https://babeljs.io/) ですが、他にもあります。

### ブラウザー検出をしない

過去には、開発者はブラウザー検出コードを使用して、ユーザーがどのブラウザーを使用しているかを検出し、このブラウザーで動作するように適切なコードを与えていました。

すべてのブラウザーには**ユーザーエージェント**文字列があり、ブラウザーの種類（バージョン、名前、OS など）を識別します。多くの開発者は悪質なブラウザー検出コードを実装し、それを保守しませんでした。そのため、対応するブラウザーは、簡単にレンダリングできるウェブサイトを使用することができなくなりました。これが一般的になったため、ブラウザーは検出コードを取得しないように、ユーザーエージェント文字列でどのブラウザーであるかを偽るようになりました（あるいは、すべてのブラウザーであると主張するようになりました）。ブラウザーはまた、ユーザーがブラウザーに JavaScript で問い合わせたときに、報告するユーザーエージェント文字列を変更できる機能を実装しました。これらすべてによって、ブラウザー検出はさらにエラーの可能性が高くなり、最終的には無意味になりました。

Aaron Andersen による [History of the browser user-agent string](https://webaim.org/blog/user-agent-string-history/) は、ブラウザー検出の歴史について有益で面白い考察を提供しています。
機能が対応しているかどうかを確実に検出するには、[機能検出](#機能検出) (および CSS 機能検出のための CSS @supports)を使用してください。そうすることで、新しいブラウザーが登場したときに、コードを変更する必要がなくなります。

### JavaScript の接頭辞の扱い

前回の記事では、[CSS 接頭辞の扱い](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#css_接頭辞の扱い)についてたくさんの解説をしました。さて、新しい JavaScript の実装でも接頭辞を使用していました。 JavaScript では CSS のように{{Glossary("kebab_case", "ハイフン区切り")}}ではなく{{Glossary("camel_case", "キャメルケース")}}を使用していました。例えば、接頭辞が `Object` という新しい jshint API オブジェクトで使用されていたとします。

- Mozilla は `mozObject` を使用
- Chrome/Opera/Safari は `webkitObject` を使用
- Microsoft は `msObject` を使用

これは [violent-theremin demo](https://mdn.github.io/webaudio-examples/violent-theremin/) （[ソースコード](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) を参照）から抜粋した例で、[キャンバス API](/ja/docs/Web/API/Canvas_API) と [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) を組み合わせて、楽しい（そしてうるさい）描画ツールを作っています。

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

ウェブオーディオ API の場合、 API を使用するための重要なエントリーポイントは、 Chrome/Operaでは `webkit` 接頭辞付きバージョンで対応していました（現在は接頭辞なしバージョンで対応しています）。この状況を回避する簡単な方法は、いくつかのブラウザーで接頭辞の付いたオブジェクトの新しいバージョンを作成し、接頭辞の付いていないバージョン、または接頭辞の付いたバージョン（または考慮が必要な他の接頭辞の付いたバージョン）と同じにすることです。

そして、元のオブジェクトではなく、そのオブジェクトを使用して API を操作します。このケースでは、変更した [AudioContext](/ja/docs/Web/API/AudioContext) コンストラクターを作成し、新しいオーディオコンテキストのインスタンスを作成して、ウェブオーディオコーディングに使用しています。

このパターンは、接頭辞を持つ JavaScript の機能すべてに適用できます。 JavaScript ライブラリー/ポリフィルもこのようなコードを使用し、可能な限りブラウザーの違いを抽象化して開発者から遠ざけています。

繰り返しますが、接頭辞機能は本番のウェブサイトで使用することは想定されていません。予告なしに変更または除去される可能性があり、ブラウザー間の問題を発生させます。接頭辞機能をどうしても用いるのであれば、正しいものを使用してください。さまざまな JavaScript/API 機能で接頭辞が要求されるブラウザーは、 MDN リファレンスページや [caniuse.com](https://caniuse.com/) のようなサイトで見ていくことができます。わからない場合は、ブラウザーで直接テストすることで調べることもできます。

例えば、ブラウザーの開発者コンソールに入り、次のように入力し始めてください。

```js
window.AudioContext;
```

この機能がブラウザーで対応している場合、自動補完されます。

## ヘルプを探す

JavaScript で遭遇する課題は他にもたくさんあります。実際に知っておくべき最も重要なことは、オンラインで答えを探す方法です。 HTML と CSS の記事の[ヘルプを探すの節](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#ヘルプを探す)を参考にしてください。

## まとめ

これが JavaScript です。単純でしょう？といった具合には単純ではないかもしれませんが、この記事を読むことで、少なくとも JavaScript に関連する問題に取り組み、解決するためのヒントが得られるはずです。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}
