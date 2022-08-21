---
title: サードパーティ API
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
tags:
  - 3rd party
  - API
  - Beginner
  - CodingScripting
  - Google Maps
  - Learn
  - NYTimes
  - Third party
  - youtube
translation_of: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

これまで説明してきた API はブラウザーに組み込まれていましたが、すべての API がそうというわけではありません。Google Maps・Twitter・Facebook・PayPal などの大規模なサイトやサービスの多くは開発者がそれらのデータ (ブログに Twitter のストリームを表示するなど) やサービス (ユーザーのログインに Facebook ログインを利用するなど) を利用できるように API を提供しています。この記事ではブラウザー API とサードパーティ API の違いを見て、後者の典型的な使い方について説明します。

| 前提知識: | JavaScript の基礎 ([JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps), [JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks), [JavaScript オブジェクト入門](/ja/docs/Learn/JavaScript/Objects) をご覧ください),[クライアントサイド API の基礎](/ja/docs/Learn/JavaScript/Client-side_web_APIs) |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 到達目標: | サードパーティ API の仕組み、それらを利用してウェブサイトを強化する方法を学習する                                                                                                                                                                                                                                     |

## サードパーティ API とは?

サードパーティ API は、サードパーティ (通常は Facebook、Twitter、Google などの企業) が提供する API で、JavaScript を介して機能にアクセスしてサイトで使用することができます。最もわかりやすい例の 1 つとして、マッピング API を使用してページにカスタムマップを表示することがあります。

[Simple Mapquest API の例](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/)を参考に、サードパーティ API とブラウザー API の違いを説明します。

> **Note:** 一度に[すべてのコード例を取得](/ja/docs/Learn#Getting_our_code_examples)したい場合があります。その場合は、各セクションで必要なサンプルファイルをレポジトリーで検索するだけで済みます。

### それらはサードパーティのサーバーにあります

ブラウザー API はブラウザーに組み込まれており、すぐに JavaScript からアクセスできます。たとえば、[紹介記事で見た](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#How_do_APIs_work)Web Audio API は、ネイティブの {{domxref("AudioContext")}} オブジェクトを使ってアクセスします。例えば:

```js
const audioCtx = new AudioContext();
  ...
const audioElement = document.querySelector('audio');
  ...
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

一方、サードパーティの API はサードパーティのサーバーにあります。JavaScript からこれらにアクセスするには、まず API 機能に接続してページで利用できるようにする必要があります。 これは通常、Mapquest の例で見られるように、{{htmlelement("script")}} 要素を介してサーバー上で利用可能な JavaScript ライブラリーへの最初のリンクを含めます。

```js
<script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
<link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>
```

そのライブラリーで利用可能なオブジェクトを使い始めることができます。例えば：

```js
let map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
```

ここでは、マップ情報を格納するための変数を作成し、次に `mapquest.map()` メソッドを使用して新しいマップを作成します。このメソッドは、必要な {{htmlelement("div")}} 要素の ID を受け取ります。('map') で地図を表示し、表示したい特定の地図の詳細を含む options オブジェクトを表示します。この場合は、地図の中心座標、表示する `map` 型の地図レイヤー (`mapquest.tileLayer()` メソッドを使用して作成)、およびデフォルトのズームレベルを指定します。

これが、Mapquest API が単純な地図を描くために必要なすべての情報です。接続しているサーバーは、表示されている地域の正しい地図タイルを表示するなど、複雑なものをすべて処理します。

> **Note:** API の中には、機能へのアクセスをわずかに異なる方法で処理するものがあり、開発者はデータを取得するために特定の URL パターンに対して HTTP リクエストを行う必要があります。これらは [RESTful API と呼ばれ、後で例が出てきます](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs#A_RESTful_API_—_NYTimes)。

### 通常は API キーが必要です

[最初の記事で説明した](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#They_have_additional_security_mechanisms_where_appropriate)ように、ブラウザー API のセキュリティは許可プロンプトによって処理される傾向があります。これらの目的は、ユーザーが訪問したウェブサイトで何が起こっているのかをユーザー自身が認識できるようにし、悪意のある方法で API を使用している人の被害にあう可能性を低くすることです。

サードパーティの API には、少し異なる権限システムがあります。開発者が API 機能にアクセスできるようにするために開発者キーを使用する傾向があります。

Mapquest API の例には、次のような行があります。

```
L.mapquest.key = 'YOUR-API-KEY-HERE';
```

この行では、アプリケーションで使用する API キーまたは開発者キーを指定します。アプリケーションの開発者は、キーを取得して API の機能へのアクセス許可を得るためにコードに含める必要があります。この例では、プレースホルダーを用意しました。

> **Note:** 独自の例を作成するときは、プレースホルダーの代わりに独自の API キーを使用します。

他の API では、少し異なる方法でキーを含める必要があるかもしれませんが、ほとんどのパターンは比較的似ています。

キーを要求することで、API プロバイダーは API のユーザーに自分のアクションに対する責任を持たせることができます。開発者がキーを登録すると、それらは API プロバイダに認識され、彼らが API に悪意のあることをし始めたらアクション (たとえば、人々の位置を追跡したり、API を機能させないために大量のリクエストで API をスパムしようとするなど) を取ることができます。最も簡単なアクションは、単にそれらの API 特権を取り消すことです。

## Mapquest の例を拡張する

API の他の機能の使用方法を示すために、Mapquest の例にさらに機能を追加しましょう。

1.  この章を始めるにあたり、新しいディレクトリーに[mapquest starter file](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/starter-file.html)をコピーしましょう。もしもすでに[examples repository](/ja/docs/Learn#Getting_our_code_examples) をクローンしているようなら、必要な _javascript/apis/third-party-apis/mapquest_ を見つけてコピーしてください。
2.  次に [Mapquest developer site](https://developer.mapquest.com/)に行ってください。アカウントを作り、デベロッパーキーを使用してあなたのサンプルに利用してください。(アカウント作成時、デベロッパーキーは "consumer key" と呼ばれています。そして、"callback URL" を尋ねられると思いますが、その入力欄は空欄でかまいません)
3.  starting file を開き、API キーのプレスホルダーにあなたのキーを入力してください。

### 地図の種類を変更する

Mapquest API で表示できるマップには、さまざまな種類があります。 これを行うには、次の行を見つけます。

```js
layers: L.mapquest.tileLayer('map')
```

hybrid-style map にするために `'map'` を `'hybrid'` に変えてみてください。他にも様々な値があります。[`tileLayer` reference page](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) には使える様々なオプションや情報が載っています。

### さまざまなコントロールを追加する

この地図には様々な機能を実装できますが、デフォルトでは、ズームコントロールのみが表示されます。`map.addControl()` メソッドを使うことで機能を拡張することが出来ます。以下のコードを`window.onload`ハンドラーに追加してみてください。

```js
map.addControl(L.mapquest.control());
```

[`mapquest.control()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) メソッドは、単純なフル機能のコントロールセットを作成するだけで、デフォルトでは右上隅に配置されます。`position` プロパティを含むコントロールのパラメータとしてオプションオブジェクトを指定することで、位置を調整することができます。例えば、次のようにしてみてください。

```js
  map.addControl(L.mapquest.control({ position: 'bottomright' }));
```

他にも、[`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) や [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/) など、利用可能なコントロールの種類があり、中には非常に複雑で強力なものもあります。実際に遊んでみて、何ができるか見てみましょう。

### カスタムマーカーを追加する

マップ上の特定のポイントにマーカー (アイコン) を追加するのは簡単です。[`L.marker()`](https://leafletjs.com/reference-1.3.0.html#marker) メソッドを使用するだけです (関連する Leaflet.js のドキュメントに記載されているようです)。次のコードを `window.onload` に追加します。

```js
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('This is Manchester!')
.addTo(map);
```

ご覧のように、最もシンプルな方法では、2 つのパラメータを取ります。マーカーを表示する座標を含む配列と、その時点で表示するアイコンを定義する `icon` プロパティを含むオプションオブジェクトです。

アイコンは、[`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) メソッドを使用して定義され、ご覧のようにマーカーの色やサイズなどの情報が含まれています。

最初のメソッド呼び出しの最後に `.bindPopup('This is Manchester!')` を連鎖させ、マーカーがクリックされたときに表示されるコンテンツを定義します。

最後に、`.addTo(map)` を連鎖させて、実際にマーカーをマップに追加します。

ドキュメントに記載されているその他のオプションを試してみて、何ができるか見てみましょう。Mapquest には、道案内や検索など、かなり高度な機能があります。

> **Note:** サンプルがうまく動作しない場合は、完成版のコードをチェックしてみてください。[expanded-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/expanded-example.html) を参照してください ([ここでライブで実行しているのも見てください](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/expanded-example.html))。

## Google マップはどうですか？

Google Maps は間違いなく最も人気のある地図 API です。使用方法を示すために[例を作成しました](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/google-maps/finished-maps-example.html)が、最終的にはいくつかの理由から Mapquest を使用しました：

- 使い始めるのがはるかに簡単だからです。一般的な Google API の場合、Google アカウントを作成して [Google Cloud Platform Console](https://console.cloud.google.com) にログインして API キーなどを作成する必要があり、そのプロセスはかなり複雑です。特に [Google Maps API](https://cloud.google.com/maps-platform/) の場合は、課金目的でクレジットカードを提供する必要があり (基本的な利用は無料ですが)、基本的なチュートリアルとしては受け入れられないと思いました。
- 他にも選択肢があることを示したかったのです。

## RESTful API — NYTimes

では、もう一つの API の例を見てみましょう — [New York Times API](https://developer.nytimes.com/) です。この API を使用すると、New York Times のニュースストーリー情報を取得して、サイトに表示することができます。このタイプの API は **RESTful API** として知られています。Mapquest で行ったように JavaScript ライブラリーの機能を使用してデータを取得するのではなく、特定の URL に HTTP リクエストを行い、検索語やその他のプロパティのようなデータを URL 内にエンコードしてデータを取得します (多くの場合、URL パラメーターとして)。これは、API でよく見られるパターンです。

## サードパーティ API を利用するためのアプローチ

以下では、NYTimes API の使用方法を示すエクササイズを紹介しますが、新しい API を使用するためのアプローチとして、より一般的なステップのセットを提供します。

### ドキュメントを探す

サードパーティの API を利用したい場合、その API がどのような機能を持っているのか、どのように利用するのかなどを知るために、ドキュメントがどこにあるのかを知ることは欠かせません。New York Times API のドキュメントは <https://developer.nytimes.com/> にあります。

### 開発者キーを取得

ほとんどの API では、セキュリティと説明責任のために、何らかの開発者キー使用する必要があります。NYTimes API キーの登録には、<https://developer.nytimes.com/get-started> の指示に従ってください。

1.  記事検索 API のキーを要求してみよう — 新規アプリを作成し、これを利用したい API として選択します (名前と説明を記入し、「記事検索 API 」の下のスイッチをオンに切り替えて「作成」をクリックします)。
2.  結果のページから API キーを取得します。
3.  さて、例題を始めるために、[nytimes_start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes_start.html) と [nytimes.css](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes.css) のコピーをコンピュータ上の新しいディレクトリーに作成してください。すでに [examples リポジトリをクローン](/ja/docs/Learn#Getting_our_code_examples)している場合は、_javascript/apis/third-party-apis/nytimes_ ディレクトリーにあるこれらのファイルのコピーをすでに持っているでしょう。最初に `<script>` 要素には、例のセットアップに必要な変数がいくつか含まれています。

このアプリは、検索用語とオプションの開始日と終了日を入力することを可能にし、Article Search API をクエリして検索結果を表示するために使用します。

![](nytimes-search.png)

### API をアプリに接続する

まず、API とアプリ間の接続を行う必要があります。この API の場合、サービスから正しい URL でデータを要求するたびに、API キーを[取得](/ja/docs/Web/HTTP/Methods/GET)パラメーターとして含める必要があります。

1.  次の行を探します。

    ```js
    let key = ' ... ';
    ```

    既存の API キーを、前のセクションで取得した実際の API キーに置き換えます。

    JavaScript に次の行を追加してください。`// Event listeners to control the functionality` コメントの下に、次の行を追加します。これは、フォームが送信されたとき (ボタンが押されたとき) に submitSearch() という関数を実行します。

    ```js
    searchForm.addEventListener('submit', submitSearch);
    ```

2.  前の行の下に submitSearch() と fetchResults() 関数の定義を追加します。

    ```js
    function submitSearch(e) {
      pageNumber = 0;
      fetchResults(e);
    }

    function fetchResults(e) {
      // Use preventDefault() to stop the form submitting
      e.preventDefault();

      // Assemble the full URL
      url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")';

      if(startDate.value !== '') {
        url += '&begin_date=' + startDate.value;
      };

      if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
      };

    }
    ```

`submitSearch()` は最初にページ番号を 0 に戻してから `fetchResults()` を呼び出します。これは最初にイベントオブジェクトの `preventDefault()` を呼び出し、フォームが実際に送信されるのを止めるためです (これでは例が壊れてしまいます)。次に、文字列を操作してリクエスト先の完全な URL を組み立てます。このデモで必須と思われる部分を組み立てることから始めます。

- ベース URL (`baseURL` 変数から取得)。
- API キー。これは `api-key` URL パラメーターで指定する必要があります (値は key 変数から取得されます)。
- ページ番号。これは `page` URL パラメーターで指定する必要があります (値は `pageNumber` 変数から取得されます)。
- `q` URL パラメーターで指定しなければならない検索語 (値は `searchTerm` テキスト {{htmlelement("input")}} の値から取得されます)。
- `fq` URL パラメーターで渡された式で指定された、結果を返すドキュメントの種類。この例では、記事を返したいとします。

次に、いくつかの [`if()`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) ステートメントを使用して、`startDate` と `endDate` `<input>` に値が入力されているかどうかをチェックします。記入されている場合は、それぞれ `begin_date` と `end_date` の URL パラメーターで指定された値を URL に追加します。

そのため、完全な URL は次のような形になってしまいます。

```
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats
&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> **Note:** どのような URL パラメーターを含めることができるかについての詳細は、[NYTimes developer docs](https://developer.nytimes.com/) を参照してください。

> **Note:** この例では初歩的なフォームデータの検証を行っています — 検索語フィールドは、フォームを送信する前に入力しなければなりません (`required` 属性を使用して達成されます)。日付フィールドには `pattern` 属性が指定されており、値が 8 個の数字 (`pattern="[0-9]{8}"`) で構成されていないと送信されません。これらがどのように機能するかについての詳細は [Form data validation](/ja/docs/Learn/HTML/Forms/Form_validation) を参照してください。

### API からデータを要求する

これで URL を作成したので、それにリクエストしてみましょう。これは [Fetch API](/ja/docs/Web/API/Fetch_API/Using_Fetch) を使って行います。

以下のコードブロックを `fetchResults()` 関数の中に追加します：

```js
// Use fetch() to make the request to the API
fetch(url).then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});
```

ここでは、`url` 変数を [`fetch()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch) に渡してリクエストを実行し、[`json()`](/ja/docs/Web/API/Response/json) 関数を使用してレスポンスボディを JSON に変換し、結果の JSON を `displayResults()` 関数に渡して、データを UI に表示できるようにします。

### データを表示する

それでは、データを表示する方法を見てみましょう。 `fetchResults()` 関数の下に以下の関数を追加します。

```js
function displayResults(json) {
  while (section.firstChild) {
      section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  if(articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }

  if(articles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No results returned.'
    section.appendChild(para);
  } else {
    for(var i = 0; i < articles.length; i++) {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const para1 = document.createElement('p');
      const para2 = document.createElement('p');
      const clearfix = document.createElement('div');

      let current = articles[i];
      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
      para2.textContent = 'Keywords: ';
      for(let j = 0; j < current.keywords.length; j++) {
        const span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para2.appendChild(span);
      }

      if(current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class','clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}
```

ここにはたくさんのコードがあります：

- [`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) ループは、DOM 要素のすべてのコンテンツを削除するために使われる一般的なパターンで、この場合は {{htmlelement("section")}} 要素です。私たちは `<section>` に最初の子があるかどうかをチェックし続け、ある場合は最初の子を削除します。ループは `<section>` に子がいなくなった時点で終了します。
- 次に、`articles` 変数を `json.response.docs` と等しくなるように設定します — これは検索によって返された記事を表すすべてのオブジェクトを保持する配列です。これは、以下のコードを少しシンプルにするために行われています。
- 最初の [`if()`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) ブロックは、10 個の記事が返されるかどうかをチェックします ( API は一度に 10 個までの記事を返します。) もし返された場合、前の 10 個 / 次の 10 個のページネーションボタンを含む {{htmlelement("nav")}} を表示します。10 記事未満の記事が返された場合、それらはすべて 1 ページに収まるので、ページ分割ボタンを表示する必要はありません。次のセクションでは、ページ分割機能の配線を行います。
- 次の `if()` ブロックは記事が返ってこないかどうかをチェックします。もしそうならば、何も表示しようとしません — "No results returned." というテキストを含む {{htmlelement("p")}} を作成して、それを `<section>` に挿入します。
- いくつかの記事が返された場合、私たちはまず、それぞれのニュース記事を表示するために使用したいすべての要素を作成し、それぞれに適切なコンテンツを挿入し、適切な場所で DOM に挿入します。記事オブジェクトのどのプロパティに表示すべき正しいデータが含まれているかを調べるために、Article Search API リファレンスを参照しました ([NYTimes APIs](https://developer.nytimes.com/apis))。これらの操作のほとんどはかなり明白ですが、いくつかは呼び出す価値があります：

  - 私たちは [for loop](/ja/docs/Web/JavaScript/Reference/Statements/for) を使用しました (`for(var j = 0; j < current.keywords.length; j++) { ... }`) を使って、それぞれの記事に関連するすべてのキーワードをループさせ、それぞれのキーワードを {{htmlelement("span")}} に挿入し、`<p>` の中に入れています。これは、それぞれの記事のスタイルを簡単にするために行われました。
  - `if()` ブロック ( `if(current.multimedia.length > 0) { ... }`) を使って、各記事に関連する画像があるかどうかをチェックしています (記事によってはないものもあります)。
  - `<div>` 要素に "clearfix" というクラスを与えたので、簡単にクリアリングを適用することができます。

### ページネーションボタンの配線

ページ分割ボタンを動作させるために、`pageNumber` 変数の値をインクリメント (またはデクリメント) し、ページ URL パラメーターに含まれる新しい値でフェッチリクエストを再実行します。これは、NYTimes API が一度に 10 件の結果しか返さないからです — 10 件以上の結果が利用可能な場合、`page` URL パラメーターが 0 に設定されている場合は最初の 10 (0-9) を (または全く含まれない — 0 がデフォルト値です。) 1 に設定されている場合は次の 10 (10-19) を返します。

これにより、単純なページネーション関数を簡単に書くことができるようになりました。

1.  既存の [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) コールの下に、関連するボタンがクリックされたときに `nextPage()` および `previousPage()` 関数が呼び出されるように、これら 2 つの新しいものを追加します：

    ```js
    nextBtn.addEventListener('click', nextPage);
    previousBtn.addEventListener('click', previousPage);
    ```

2.  前回の追加の下に、2 つの関数を定義してみましょう — 今すぐこのコードを追加します：

    ```js
    function nextPage(e) {
      pageNumber++;
      fetchResults(e);
    };

    function previousPage(e) {
      if(pageNumber > 0) {
        pageNumber--;
      } else {
        return;
      }
      fetchResults(e);
    };
    ```

    最初の関数は単純で、変数 `pageNumber` をインクリメントしてから、次のページの結果を表示するために `fetchResults()` 関数を再度実行します。

    2 番目の関数は逆の方法でほぼ正確に同じように動作しますが、`pageNumber` がすでに 0 ではないことを確認するという余分なステップを踏まなければなりません — もしフェッチリクエストがマイナスの `page` パラメーターで実行された場合、エラーを引き起こす可能性があります。もし `pageNumber` がすでに 0 であれば、処理能力を無駄にしないように、単に関数から [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) します (すでに最初のページにいるのであれば、同じ結果を再び読み込む必要はありません)。

> **Note:** 完成した [nytimes API のサンプルコードは GitHub で見ることができます](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/index.html) ([ここでもライブで動作しています](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/)) 。

## YouTube の例

また、[YouTube video search example](https://github.com/mdn/learning-area/tree/master/javascript/apis/third-party-apis/youtube) をご覧ください。これは 2 つの関連する API を使用しています。

- YouTube の動画を検索して結果を返す [YouTube Data API](https://developers.google.com/youtube/v3/docs/)。
- 返された動画の例を IFrame ビデオプレーヤー内に表示して視聴できるようにするための [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference) です。

この例は、2 つの関連するサードパーティ API を一緒に使用してアプリを構築していることを示しているので興味深いです。1 つ目は RESTful API で、2 つ目は Mapquest のように動作します (API 固有のメソッドなどがあります)。ただし、どちらの API もページに適用するために JavaScript ライブラリを必要とする点は注目に値します。RESTful API には、HTTP リクエストを行い、結果を返すための関数が用意されています。

![](youtube-example.png)

この例については、記事の中ではあまり多くを語るつもりはありません。[ソースコード](https://github.com/mdn/learning-area/tree/master/javascript/apis/third-party-apis/youtube)には、それがどのように動作するかを説明するために、その中に詳細なコメントが挿入されています。

稼動させるために必要です：

- [Google Cloud](https://cloud.google.com/) から API キーを取得します。
- ソースコードから `ENTER-API-KEY-HERE` という文字列を見つけ、それを API キーに置き換えます。
- ウェブサーバー経由でサンプルを実行します。ブラウザーで直接実行した場合 (つまり `file://` URL を経由した場合) は動作しません。

## まとめ

この記事では、サードパーティ API を使用してウェブサイトに機能を追加するための便利な方法を紹介しました。

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

## このモジュール

- [Web API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [ドキュメントの操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [サーバーからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [サードパーティ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [動画と音声の API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
