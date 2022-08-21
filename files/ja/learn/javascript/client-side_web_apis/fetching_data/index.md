---
title: サーバからのデータ取得
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
tags:
  - API
  - Article
  - Beginner
  - CodingScripting
  - Fetch
  - JSON
  - JavaScript
  - Learn
  - Promises
  - Server
  - XHR
  - XML
  - XMLHttpRequest
  - data
  - request
translation_of: Learn/JavaScript/Client-side_web_APIs/Fetching_data
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

モダンな Web サイトやアプリケーションでしょっちゅう必要になる仕事は、サーバから個々のデータを取ってきて、新しいページ全体を読んでくることなしに、ページの一部を書き換える事です。この一見ちょっとした事が、サイトのパフォーマンスや振舞いに巨大なインパクトを与えました。この記事ではそのコンセプトを解説し、これを可能にした技術 XMLHttpRequest や Fetch API について見ていきます。

| 前提条件: | JavaScript の基本 ([最初のステップ](/ja/docs/Learn/JavaScript/First_steps)、[ビルディングブロック](/ja/docs/Learn/JavaScript/Building_blocks)、[JavaScript オブジェクト](/ja/docs/Learn/JavaScript/Objects)を参照)、[クライアントサイド API の基本](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | サーバからデータを取得し、それを使用して Web ページのコンテンツを更新する方法を習得する。                                                                                                                                                                                                                        |

## これの問題は何か?

もともと Web のページ読み込みは単純でした — Web サイトのデータをサーバにリクエストすると、何も問題がなければ、ページを構成するいろいろなものがダウンロードされてあなたのコンピュータに表示されていました。

![A basic representation of a web site architecture](web-site-architechture@2x.png)

このモデルの問題は、どこかページの一部を書き換えたい場合、例えば新しい商品の一群を表示したり新しいページを読み込ませたりをする毎に、ページ全体を読み直さなければならない事です。これはとても無駄が多くてユーザ体験が悪化します、とりわけページが大きくて複雑になってくるにつれて。

### Ajax の登場

上述の問題を解決すべく、Web ページから細かいデータ ([HTML](/ja/docs/Web/HTML)、{{glossary("XML")}}、[JSON](/ja/docs/Learn/JavaScript/Objects/JSON) やプレーンテキストのような) をリクエストし、それを必要な時だけ表示するという技術の誕生へと繋がりました。

これは {{domxref("XMLHttpRequest")}} や、最近では [Fetch API](/ja/docs/Web/API/Fetch_API) の利用によって実現されます。これらの技術は、Web ページがサーバにある特定のリソースを直接 [HTTP](/ja/docs/Web/HTTP) リクエストし、必要があれば結果のデータを表示する前に整形する事を可能にしました。

> **Note:** これらのテクニック一般はかつて Ajax (Asynchronous JavaScript and XML)と呼ばれていましたが、これは {{domxref("XMLHttpRequest")}} を使って XML データを要求するものが多かったためです。今日ではそういうものばかりではありませんが (`XMLHttpRequest` や Fetch を使って JSON を要求する場合の方が多いでしょう)、結果としては同じであり、"Ajax" という用語はしばしば今でもこのテクニックを説明するのに使われます。

![A simple modern architecture for web sites](moderne-web-site-architechture@2x.png)

Ajax モデルには、ブラウザーにページ全体をリロードされるのではなく、もっと賢くデータをリクエストするために Web API をプロキシとして使うという事も含まれます。これの重要性を考えてみて下さい:

1.  お気に入りの情報に富んだサイト、アマゾンとか YouTube とか CNN とかに行って読み込みます。
2.  さて新しい商品だか何だかを検索します。メインのコンテンツは変わるでしょうが、周りに表示されている情報、ヘッダーやフッター、ナビゲーションメニューなど、大半はそのままでしょう。

これはとても良いことで、それは:

- ページの更新がずっと素早く、切り替わるのを待つ必要もないので、サイトがずっと早くて反応の良いものに感じられます。
- 更新毎にダウンロードされるデータが少ないので、帯域の無駄が少なくなります。ブロードバンドに接続されたデスクトップではさして問題ではないかもしれませんが、モバイルデバイスからや、どこでも高速インターネット接続が使えるわけではない開発途上国ではとても重要な問題です。

さらなる高速化のために、サイトの中には必要なものやデータを最初にリクエストされた時にユーザのコンピュータに保存してしまい、以降の訪問では保存ずみのものを、サーバから最新版のダウンロードさせる事なく使用するものもあります。コンテンツはそれが更新された時だけサーバから再読み込みされます。

![A basic web app data flow architecture](web-app-architecture@2x.png)

## 基本的な Ajax リクエスト

{{domxref("XMLHttpRequest")}} と [Fetch](/ja/docs/Web/API/Fetch_API) それぞれを使って、そのようなリクエストをどうやるのか見ていきましょう。それらの例では、いくつかの異なるテキストファイルから取り出したデータをリクエストし、コンテンツ領域に埋め込みます。

この一連のファイルは疑似データベースとして働きます。実際のアプリケーションでは、PHP や Python、Node のようなサーバサイド言語を使ってデータベースから取り出したデータをリクエストする場合が多いでしょう。ですがここでは簡単にしておき、クライアント側のパートに集中します。

### XMLHttpRequest

`XMLHttpRequest` (よく XHR と略記されます) は今となってはかなり古い技術です — Microsoft によって 1990 年代に発明され、非常に長い間ブラウザーを超えて標準化されてきました。

1.  この例題を始めるにあたり、[ajax-start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/ajax-start.html) と 4 つのテキストファイル — [verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt)、[verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt)、[verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt) と [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt) — のローカルコピーを、あなたのコンピュータの新しいディレクトリーに作って下さい。この例題では、ドロップダウンメニューから選択されたら、詩 (ご存知の詩かも) のこれら異なる節を XHR を使って読み込みます。
2.  {{htmlelement("script")}} 要素のすぐ内側に、下のコードを書き足して下さい。これは {{htmlelement("select")}} と {{htmlelement("pre")}} 要素への参照を定数に保存し、{{domxref("GlobalEventHandlers.onchange","onchange")}} イベントハンドラ関数を定義していて、これは select の値が変わったら、その値が呼び出される関数 `updateDisplay()` の引数となるようにします。

    ```js
    const verseChoose = document.querySelector('select');
    const poemDisplay = document.querySelector('pre');

    verseChoose.onchange = function() {
      const verse = verseChoose.value;
      updateDisplay(verse);
    };
    ```

3.  `updateDisplay()` 関数を定義しましょう。まずはさっきのコードブロックの下に以下を書き足します — これは関数のからっぽのガワです。 注: ステップ 4 から 9 はすべて、この関数*内で*実施します。

    ```js
    function updateDisplay(verse) {

    }
    ```

4.  関数を、後から必要になる読み込みたいテキストファイルを指す相対 URL を作るところからはじめます。{{htmlelement("select")}} 要素の値は常に、選択されている {{htmlelement("option")}} の内側テキスト、例えば"Verse 1"とか、に一致します (value 属性で異なる値を設定していなければ)。これに相当するテキストファイルは "verse1.txt" で HTML と同じディレクトリーにあるので、ファイル名だけで十分です。

    ただ、Web サーバはたいてい大文字小文字を区別しますし、今回のファイル名にスペースは含まれていません。"Verse 1" を "verse1.txt" に変換するためには、V を小文字にして、スペースを取り除き、.txt を末尾に追加しなければなりません。これは{{jsxref("String.replace", "replace()")}} に {{jsxref("String.toLowerCase", "toLowerCase()")}}、あと単なる [文字列の結合](/ja/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings) で実現できます。以下のコードをあなたの `updateDisplay()` 関数の内側に追加して下さい:

    ```js
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    let url = verse + '.txt';
    ```

5.  XHR リクエストを作り始めるため、リクエストオブジェクトを {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} コンストラクタを使って作成しなければなりません。このオブジェクトには好きな名前を付けられますが、単純にするため `request` を使います。`updateDisplay()` 関数の内側で、先の行の下に以下を追加します:

    ```js
    let request = new XMLHttpRequest();
    ```

6.  次に {{domxref("XMLHttpRequest.open","open()")}} メソッドを使ってどの [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods) を使ってリソースをネットワークから取得するか、URL はどこかを指定しなければなりません。ここでは単に [`GET`](/ja/docs/Web/HTTP/Methods/GET) メソッドを使い、URL には `url` 変数の値をセットします。先の行の下に以下を追加します:

    ```js
    request.open('GET', url);
    ```

7.  次はレスポンスにどのような形式にしたいか指定 — これはリクエストの {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティで指定します — `text` にします。厳密に言えばこの場合は必須の指定ではありません — XHR はデフォルトで text を返します — が、いつの日か他のデータ形式を指定したくなる場合にそなえて、この設定をする習慣をつけておくと良いと思います。次を追加して下さい:

    ```js
    request.responseType = 'text';
    ```

8.  ネットワークからリソースを取得する処理は非同期{{glossary("asynchronous")}} 処理なので、戻りを使って何かをする前に、あなたは処理が完了(リソースがネットワークから返ってくる)するのを待たなければならず、さもないとエラーが投げられます。XHR では {{domxref("XMLHttpRequest.onload", "onload")}} イベントハンドラを使ってこの問題をさばけます — これは {{event("load")}} イベントが発火(レスポンスが返ってきた)した時に実行されます。このイベントが起きた後は、レスポンスデータは XHR リクエストオブジェクトの `response` プロパティとして取得できます。

    さっき追加した行の後に以下を追加して下さい。`onload` イベントハンドラの中で、`poemDisplay` ({{htmlelement("pre")}}要素) の [`textContent`](/ja/docs/Web/API/Node/textContent) プロパティに {{domxref("XMLHttpRequest.response", "request.response")}} プロパティの値を設定しているのがお判りでしょう。

    ```js
    request.onload = function() {
      poemDisplay.textContent = request.response;
    };
    ```

9.  以上は全部、XHR リクエストの設定です — 実は私たちがやれと指示するまで動作はしません。やれと指示するには、{{domxref("XMLHttpRequest.send","send()")}} メソッドを使います。さっき追加した行の後に以下を追加して、関数を完成させます。この行は、`updateDisplay()` 関数の閉じ中括弧のすぐ上に置く必要があります。

    ```js
    request.send();
    ```

10. 今の時点でのこの例題にある問題の一つは、最初に読み込まれた時点ではなにも詩が表示されないことです。これを直すには、あなたのコードの一番下 (`</script>` 閉じタグのすぐ上) に以下の二行を追加し、デフォルトで 1 番の詩を読み込みませ、{{htmlelement("select")}} 要素に適切な値を指させます:

    ```js
    updateDisplay('Verse 1');
    verseChoose.value = 'Verse 1';
    ```

### サーバからあなたの例題を送らせる

今時のブラウザー (Chrome も含まれます) は、ローカルファイルとして例題を実行しても XHR リクエストを行ないません。これはセキュリティの制限によるものです (Web のセキュリティにより詳しくは [Web サイトのセキュリティ](/ja/docs/Learn/Server-side/First_steps/Website_security)を読んで下さい)。

これをどうにかするため、例題をローカルの Web サーバを使って実行しなければなりません。どうやるのかは、 [テスト用のローカルサーバを設定するにはどうすればいい?](/ja/docs/Learn/Common_questions/set_up_a_local_testing_server) を読んで下さい。

### Fetch

Fetch API は、基本的には XHR の今風の代替品です — 最近になってブラウザーに組込まれたもので、非同期 HTTP リクエストを JavaScript で、開発者や他の Fetch の上に組まれた API から簡単に行なえるようにするためのものです。

先の例を Fetch を使うように書き換えてみましょう!

1.  さっき完成させた例題のディレクトリーのコピーを作ります(前の例題を完成させていないなら、新しいディレクトリーを作成して、そこに [xhr-basic.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/xhr-basic.html) と 4 つのテキストファイル — ([verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt)、[verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt)、[verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt) と [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt)) のコピーを作って下さい。
2.  `updateDisplay()` 関数の中から、XHR のコードを探し出します:

    ```js
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';

    request.onload = function() {
      poemDisplay.textContent = request.response;
    };

    request.send();
    ```

3.  XHR のコードを次のように置き換えます:

    ```js
    fetch(url).then(function(response) {
      response.text().then(function(text) {
        poemDisplay.textContent = text;
      });
    });
    ```

4.  例題をブラウザーに読み込むと(Web サーバから読んで下さい)、XHR 版と同様に動作するするはずです。今時のブラウザーを使っていれば。

#### Fetch のコードでは何が起きている?

まず最初に、{{domxref("fetch()")}} メソッドが呼ばれ、取得したいリソースの URL が渡されています。これは XHR の {{domxref("XMLHttpRequest.open","request.open()")}} の今時な同等品で、さらに言えば `.send()` に相当するものは必要ありません。

その後に、{{jsxref("Promise.then",".then()")}} メソッドが `fetch()` の後に連鎖されているのがわかるでしょう — このメソッドは {{jsxref("Promise","Promises")}} の一部で、非同期処理を行なうための今風な JavaScript に備わる機能です。`fetch()` はプロミスを返し、これはサーバから送られたレスポンスによって解決されます — `.then()` を使ってプロミスが解決された後にある種後始末のコードを走らせるようにし、そのコードとは内側で定義した関数にあたります。これは XHR 版の `onload` イベントハンドラに相当します。

この関数には、`fetch()` のプロミスが解決された際に、自動的にサーバからのレスポンスが引数として渡されます。関数の中で、レスポンスをつかまえてその {{domxref("Body.text","text()")}} メソッド、これは基本的にレスポンスを生のテキストで返すもの、を走らせます。これは XHR 版の `request.responseType = 'text'` 部分と等価です。

`text()` もプロミスを返しているのがおわかりでしょう、ですのでそれに別の `.then()` を連鎖させ、その中で `text()` のプロミスが解決する生テキストを受けとるよう、関数を定義します。

内側のプロミスの関数の中で、XHR 版でやったのとほとんど同じ事をやっています — {{htmlelement("pre")}} 要素のテキストコンテントにテキスト値を設定しています。

### Aside on promises

プロミスは初めて見るとちょっと混乱させられますが、今はひとまずそんなに心配しなくて大丈夫です。ちょっとすれば慣れます、とくに今風の JavaScript API を学んでいけば — 新しい部分の大半がこのプロミスに強く依存しています。

上の例のプロミスの構造を見直してみましょう、もうちょっと意味が通じてくるかもしれません:

```js
fetch(url).then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```

最初の行で言っているのは、「url にあるリソースを取ってこい(fetch)」(`fetch(url)`)で、「それから(then)プロミスが解決したら指定した関数を実行しろ」(`.then(function() { ... })`)です。「解決」とは、「この先どこかの時点で、指定された処理の実行を終える」事を意味します。この場合だと指定された処理とは、指定の URL からリソースを取ってきて(HTTP リクエストを使って)、そのレスポンスを私たちがどうにかできるように返せ、です。

実際のところ、`then()`に渡される関数は、すぐには実行されないコードの塊です — すぐにではなく、未来のどこかの時点でレスポンスが返って来た時に実行されます。頭に入れておいて下さい、プロミスは変数に保存する事もできて、変数に {{jsxref("Promise.then",".then()")}} を連鎖する事ができます。次のコードがやっているのも同じ事です:

```js
let myFetch = fetch(url);

myFetch.then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```

`fetch()` メソッドは HTTP レスポンスによって解決されるプロミスを返し、その後ろに連鎖された `.then()` の中にどのような関数を定義しても、それには引数としてレスポンスが自動で渡されます。引数にどんな名前を付けるのもご自由です — 下の例もちゃんと動きます:

```js
fetch(url).then(function(dogBiscuits) {
  dogBiscuits.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```

ですがパラメータにはその中身がわかる名前を付けた方がいいですよね!

今度は関数だけに着目しましょう:

```js
function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
}
```

レスポンスオブジェクトには {{domxref("Body.text","text()")}} メソッドがあって、これはレスポンスボディにある生データを受けて、プレインテキスト(これが私たちの必要とする形式です)、に変換します。このメソッドもプロミス(これは結果となるテキスト文字列で解決します)を返すので、ここでまた別の {{jsxref("Promise.then",".then()")}} を使い、この内部で、テキスト文字列を使って私たちがやりたい事を行うための別の関数を定義します。私たちがやるのは、ただ詩用の {{htmlelement("pre")}} 要素の [`textContent`](/ja/docs/Web/API/Node/textContent) プロパティをテキスト文字列と同じに設定だけなので、これはとても単純です。

これも覚えておく価値があります、それぞれのブロックの結果を次のブロックに渡していくように、直接複数のプロミスブロック(`.then()`ブロック以外の種類もあります)を次から次へと連鎖する事ができます、あたかも鎖を下にたどっていくように。このおかげで、プロミスはとても強力なのです。

次のブロックはもとの例題と同じ事をしますが、違うやり方で書かれています:

```js
fetch(url).then(function(response) {
  return response.text()
}).then(function(text) {
  poemDisplay.textContent = text;
});
```

多くの開発者はこの書き方の方が好きです、なぜなら平らで、間違いなく長大なプロミス連鎖も読みやすいからです — それぞれのプロミスが、前のやつの内側に来る(これは扱いづらくなる場合があります)のではなく、前のやつから順々に続いています。違うのは [`return`](/ja/docs/Learn/JavaScript/Building_blocks/Return_values) 文を response.text() の前に書いて、それが出した結果を次の鎖に渡すようにしなければならないところだけです。

### どっちの機構を使うべき?

これは本当に、あなたがどんなプロジェクトを進めているかによります。XHR は長いこと存在しているので、様々なブラウザーで非常によくサポートされています。一方 Fetch とプロミスは Web プラットフォームに最近追加されたものなので、ブラウザー界では結構サポートされているんですが、IE はサポートしていません。

古いブラウザーをサポートする必要があるのならば、XHR の方が良いでしょう。ですがあなたがもっと先進的なプロジェクトで働いて、古いブラウザーの事でさして悩まないなら、Fetch が良い選択になるでしょう。

本当はどっちも学ぶべきです — Fetch は IE が消えていくにつれ(IE は、Microsoft の新しい Edge ブラウザーのおかげで開発が終了しています)どんどん一般的になっていくでしょうが、もうしばらくは XHR が必要でしょう。

## もっとややこしい例題

この記事のまとめとして、Fetch のより興味深い使い方を示す、ちょっとばかり難しい例題を見ていきましょう。例題用に缶詰屋というサイトを作成しました — これは缶詰だけを売る仮想のお店です。これの [GitHub でのライブ実行](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/) と [ソースコード](https://github.com/mdn/learning-area/tree/master/javascript/apis/fetching-data/can-store) が見られます。

![A fake ecommerce site showing search options in the left hand column, and product search results in the right hand column.](can-store.png)

デフォルトではサイトには全ての商品が表示されますが、左側のカラムにあるフォームコントロールからカテゴリから、検索語から、あるいはその両方によってフィルタリングをかけられます。

商品をカテゴリや検索語によってフィルタリングする処理をし、UI でデータが正しく表示されるように文字列を操作するためなどに、けっこうな量の複雑なコードがあります。この記事のなかでそれら全てについて解説しませんが、ソースコードのコメントに詳しいことがたくさん書いてあります([can-script.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-script.js)を見て下さい)。

ですが、Fetch のコードについては説明していきます。

Fetch を使うブロックの最初は、JavaScript の初めの方にあります:

```js
fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  let products = json;
  initialize(products);
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});
```

`fetch()` 関数はプロミスを返します。これが成功裏に完了すると、一つ目の `.then()` ブロックの中にある関数は、ネットワークから返された `response` を受け取ります。

この関数の中で、{{domxref("Body.text","text()")}} ではなくて {{domxref("Body.json","json()")}} を実行しています。プレインテキストではなく、構造化された JSON データとしてレスポンスを返してほしいからです。

次に、別の `.then()` を最初の `.then()` の後に連鎖させています。これに、`response.json()` プロミスから返された `json` を含む成功時の関数を渡しています。この `json` を `products` 変数の値として代入してから、`initialize(products)` を実行します。すべての商品をユーザーインターフェイスに表示する処理が開始されます。

エラーを処理するために、連鎖の最後に `.catch()` ブロックを連鎖させています。これは、何らかの理由でプロミスが失敗した場合に実行されます。その中には、引数として渡される関数、`error` オブジェクトが含まれています。この `error` オブジェクトを使用して、発生したエラーがどういうものかを伝えられます。ここでは単純な `console.log()` を使用して伝えています。

ただし、完全な Web サイトでは、ユーザの画面にメッセージを表示し、状況を改善する選択肢を提供することで、このエラーをより適切に処理するでしょう。とは言え、ここでは単純な `console.log()` 意外は必要ありません。

あなたは自分でも失敗した場合のテストができます:

1.  例題のファイルのローカルコピーを作成して下さい([缶詰屋の ZIP ファイル](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-store.zip?raw=true)をダウンロードして展開して下さい)。
2.  コードを Web サーバから読んで走らせるようにします(方法は前に [Serving your example from a server](#serving_your_example_from_a_server)で解説しました)。
3.  fetch するファイルのパスを、'produc.json' のようなものに変更します(誤ったファイル名にして下さい)。
4.  ここでインデックスファイルをブラウザーに読み込んで( `localhost:8000` から)、あなたのブラウザーの開発者コンソールを見ます。次の行のようなメッセージが表示されるはずです「Network request for produc.json failed with response 404: File not found」。

二つ目の Fetch ブロックは `fetchBlob()` 関数の中にあります:

```js
fetch(url).then(function(response) {
    return response.blob();
}).then(function(blob) {
  // Convert the blob to an object URL — this is basically a temporary internal URL
  // that points to an object stored inside the browser
  let objectURL = URL.createObjectURL(blob);
  // invoke showProduct
  showProduct(objectURL, product);
});
```

これも前のとおおよそ同じように動作しますが、{{domxref("Body.json","json()")}} ではなくて {{domxref("Body.blob","blob()")}} を使っているところが違います — 今回の場合は画像ファイルを返したいので、これ用に使うデータ形式は [Blob](/ja/docs/Web/API/Blob) — これは "**B**inary **L**arge **Ob**ject" の略で、たいていは巨大なファイルのようなオブジェクト、画像や動画のようなものを示すのに使われます。

blob を成功裏に受信したら、{{domxref("URL.createObjectURL()", "createObjectURL()")}}を使ってそこからオブジェクト URL を取り出します。これはそのブラウザーの中でのみ有効なオブジェクトを示す一時的な URL を返します。あまり読み易いものではありませんが、缶詰屋アプリを開いて画像を Ctrl クリックもしくは右クリックして、メニューから「画像を表示」を選択する(これはあなたが使っているブラウザーによって異なる場合があります)と見ることができます。オブジェクト URL はブラウザーのアドレスバーに表示され、こんな感じになるでしょう:

```
blob:http://localhost:7800/9b75250e-5279-e249-884f-d03eb1fd84f4
```

### 課題: XHR 版の缶詰屋

ちょっとした練習として、アプリの Fetch 版を XHR を使うように書き換えて下さい。[ZIP ファイル ](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-store.zip?raw=true)のコピーを作って、上手く JavaScript を書き換えてみて下さい。

ちょっとしたヒントです:

- {{domxref("XMLHttpRequest")}} のリファレンス記事が役に立つでしょう。
- 基本的には、初めの方の [XHR-basic.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/xhr-basic.html) の例で見たのと同じようなパターンを使う必要があります。
- ただし、Fetch 版の缶詰屋でお見せしたのと同様なエラー処理を追加する必要があります:

  - `load` イベントが発火した後は、プロミスの `then()` の中ではなく、`request.response` の中にレスポンスはあります。
  - XHR において、Fetch の `response.ok` に相当する一番良いやり方は、{{domxref("XMLHttpRequest.status","request.status")}} が 200 であるか、{{domxref("XMLHttpRequest.readyState","request.readyState")}} が 4 である事をチェックする事です。
  - ステータスとステータスメッセージを取得するためのプロパティは一緒ですが、これは `response` オブジェクトの中ではなく `request`(XHR)オブジェクトの中にあります。

> **Note:** 上手くいかないときは、我々の GitHub にある完成版のコード ([ソースコードはこちらから](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store-xhr/can-script.js)、[ライブ実行版](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store-xhr/)もどうぞ) と比べてみて下さい。

## まとめ

私たちのサーバからのデータ取得に関する記事は以上です。ここまでくれば、どう XHR と Fetch を使って進めていけばいいのか理解できたことでしょう。

## あわせて参照

この記事には様々なほんのさわりしか説明していない事項がたくさんあります。これらの事項についてもっと詳しくは、以下の記事を見て下さい:

- [Ajax — 始めましょう](/ja/docs/Web/Guide/AJAX/Getting_Started)
- [Fetch を使う](/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
- [HTTP の概要](/ja/docs/Web/HTTP/Overview)
- [サーバサイド Web サイトプログラミング](/ja/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

## このモジュール

- [Web API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [ドキュメントの操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [サーバからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [サードパーティ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [動画と音声の API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
