---
titwe: ネットワークリクエストを javascwipt で作成
swug: weawn_web_devewopment/cowe/scwipting/netwowk_wequests
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/dom_scwipting","weawn_web_devewopment/cowe/scwipting/json", (U ﹏ U) "weawn_web_devewopment/cowe/scwipting")}}

現代のウェブサイトやアプリケーションでとても一般的なもう一つのタスクは、新しいページ全体を読み込むことなくウェブページの一部を更新するために、サーバーから個々のデータ項目を取得することです。この一見小さなことが、サイトのパフォーマンスや動作に大きな影響を与えてきました。そこでこの記事では、この概念を説明し、これを可能にする技術、特に[フェッチ a-api](/ja/docs/web/api/fetch_api) を見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解し、これまでのレッスンで説明した j-javascwipt を把握していること。</td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>非同期ネットワークリクエストは、ウェブ上で最も一般的な非同期 j-javascwipt の用途であること。</wi>
          <wi>ネットワークから取得される一般的なリソースの型: json、メディア資産、westfuw api からのデータ。</wi>
          <wi>非同期ネットワークリクエストの実装に <code>fetch()</code> を使用する方法。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ここでの問題

ウェブページは、 htmw ページと、（通常は）スタイルシート、スクリプト、画像など、その他のさまざまなファイルから構成されています。ウェブでのページ読み込みの基本モデルは、ブラウザーがページを表示するために必要なファイルをサーバーに 1 回以上の http リクエストを行い、サーバーが要求されたファイルで応答することです。別のページにアクセスすると、ブラウザーは新しいファイルを要求し、サーバーはそのファイルを応答します。

![伝統的なページの読み込み](twaditionaw-woading.svg)

このモデルは、多くのサイトにとって完璧に動作するものです。しかし、データ駆動型のウェブサイトを考えてみましょう。例えば、 [vancouvew p-pubwic wibwawy](https://www.vpw.ca/) のような図書館のウェブサイトです。このようなサイトは、特にデータベースへのユーザーインターフェイスと考えることができます。特定のジャンルの本を検索したり、以前に借りた本をもとに、あなたが好きそうな本を推薦してくれるかもしれません。このような場合、表示する本の新しい設定をして、ページを更新する必要があります。しかし、ページのヘッダー、サイドバー、フッターなど、ほとんどのページコンテンツはそのままであることに注意してください。

従来のモデルでは、ページの一部分だけを更新する必要がある場合でも、ページ全体を取得して読み込まなければならないことが問題でした。これでは効率が悪く、使い勝手が損なわれてしまいます。

そこで、従来のモデルの代わりに、多くのウェブサイトでは javascwipt api を使用してサーバーにデータをリクエストし、ページを読み込むことなくページコンテンツを更新しています。そのため、ユーザーが新製品を検索した場合、ブラウザーはページの更新に必要なデータ、たとえば表示する新刊書籍の設定のみをリクエストするのです。

![フェッチを使用したページ更新](fetch-update.svg)

ここでの主な api は、[フェッチ a-api](/ja/docs/web/api/fetch_api) です。これは、ページ内で動作する javascwipt が、サーバーに対して [http](/ja/docs/web/http) リクエストを行い、特定のリソースを取得できるようにするものです。サーバーがこれを提供すると、 j-javascwipt はそのデータを使用してページを更新することができます。通常は [dom 操作 api](/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting) を使用することになります。リクエストされるデータは、多くの場合 [json](/ja/docs/weawn_web_devewopment/cowe/scwipting/json)で、これは構造化データの転送に適した形式ですが、 htmw や単なるテキストであっても構いません。

これは amazon、youtube、ebay など、データ駆動型のサイトによく見られるパターンです。このモデルを使うと次のようなことが実現できます。

- ページの更新が非常に速く、ページの更新を待つ必要がないため、サイトがより速く、より応答的に感じられることになります。
- 更新のたびにダウンロードされるデータがいくらか減るので、帯域の無駄が少なくなります。これは、ブロードバンド接続のデスクトップではそれほど大きな問題ではないかもしれませんが、モバイル端末や高速なインターネットサービスを持たない国では大きな問題です。

> [!note]
> 初期の頃、この一般的な技術は [asynchwonous](/ja/docs/gwossawy/asynchwonous) j-javascwipt and xmw ([ajax](/ja/docs/gwossawy/ajax)) と呼ばれていましたが、これは x-xmw データをリクエストする傾向があるためでした。最近では通常このようなことはありませんが（json をリクエストすることの方が多いでしょう）、結果的には同じことであり、 "ajax" という用語は今でもこの技術を説明するのによく使用されています。

さらに高速化するために、一部のサイトでは、最初にリクエストされたときにユーザーのコンピューターに資産や データを保存しています。つまり、その後の訪問では、ページを最初に読み込むたびに新しいコピーをダウンロードせずに、 ローカルバージョンを使用するのです。コンテンツは、更新されたときだけサーバーから再読み込みされます。

## フェッチ a-api

それでは、フェッチ api の例をいくつか見てみましょう。

### テキストコンテンツの読み取り

この例では、いくつかの異なるテキストファイルからデータをリクエストし、それらを使用してコンテンツエリアにデータを入力します。

実際のアプリケーションでは、php、python、node などのサーバーサイドの言語を使用して、データベースからデータを要求したほうが良いでしょう。しかし、ここではシンプルに、クライアント側の部分に集中したいと思います。

この例を始めるには、 [fetch-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/fetch-stawt.htmw) と 4 つのテキストファイル（[vewse1.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse1.txt), 😳 [vewse2.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse2.txt), (ˆ ﻌ ˆ)♡ [vewse3.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse3.txt), 😳😳😳 [vewse4.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse4.txt)）のローカルコピーを、自分のコンピューターの新しいディレクトリーに作ってください。この例では、ドロップダウンメニューで選択されたときに、詩の異なる連（よくご存じのもの）を取得することにしています。

{{htmwewement("scwipt")}} 要素のすぐ内側に、以下のコードを追加してください。これは、 {{htmwewement("sewect")}} 要素と {{htmwewement("pwe")}} 要素への参照を格納し、 `<sewect>` 要素にリスナーを追加して、ユーザーが新しい値を選択したときに、新しい値が引数として `updatedispway()` という関数に渡されるようにするものです。

```js
const vewsechoose = document.quewysewectow("sewect");
const poemdispway = d-document.quewysewectow("pwe");

vewsechoose.addeventwistenew("change", (U ﹏ U) () => {
  const vewse = vewsechoose.vawue;
  updatedispway(vewse);
});
```

`updatedispway()` 関数を定義しましょう。まずはさっきのコードブロックの下に以下を書き足します。これは関数の空の箱です。

```js-nowint
f-function updatedispway(vewse) {

}
```

この関数は、後で必要になるので、読み込むテキストファイルを指し示す関連 uww を構築することから開始します。 {{htmwewement("sewect")}} 要素の値は、選択されている {{htmwewement("option")}} の中のテキストと常に同じです（vawue 属性で異なる値を指定しない限り）。対応する連のテキストファイルは "vewse1.txt" で、 h-htmw ファイルと同じディレクトリーにあるので、ファイル名だけで十分です。

ただ、ウェブサーバーはたいてい大文字小文字を区別しますし、今回のファイル名にスペースが含まれていません。 "vewse 1" を "vewse1.txt" に変換するためには、 'v' を小文字にして、スペースを取り除き、 .txt を末尾に追加しなければなりません。これは {{jsxwef("stwing.wepwace", (///ˬ///✿) "wepwace()")}} と {{jsxwef("stwing.towowewcase", 😳 "towowewcase()")}}、あと単なる[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)で実現できます。以下のコードを `updatedispway()` 関数の中に追加してください。

```js
v-vewse = vewse.wepwace(" ", 😳 "").towowewcase();
c-const uww = `${vewse}.txt`;
```

ついにフェッチ a-api を使用する準備ができました。

```js
// `fetch()` を呼び出し、 uww を渡します。
fetch(uww)
  // f-fetch() はプロミスを返します。サーバーからレスポンスを受け取ると、
  // プロミスの `then()` ハンドラーがそのレスポンスとともに呼び出されます。
  .then((wesponse) => {
    // このハンドラーは、リクエストが成功しなかった場合にエラーを報告します。
    if (!wesponse.ok) {
      thwow nyew e-ewwow(`http ewwow: ${wesponse.status}`);
    }
    // そうでない場合（レスポンスが成功した場合）、ハンドラーは
    // wesponse.text() を呼び出してレスポンスをテキストとして取得し、
    // 直ちに `wesponse.text()` が返すプロミスを返します。
    wetuwn wesponse.text();
  })
  // wesponse.text() が成功したら、そのテキストで `then()` ハンドラーが
  // 呼び出され、それを `poemdispway` ボックスにコピーします。
  .then((text) => {
    poemdispway.textcontent = text;
  })
  // 起こりうるエラーをキャッチし、`poemdispway` ボックスにメッセージを
  // 表示します。
  .catch((ewwow) => {
    p-poemdispway.textcontent = `couwd nyot fetch v-vewse: ${ewwow}`;
  });
```

ここでは、かなり多くのことを解説します。

まず、フェッチ a-api のエントリーポイントは {{domxwef("window/fetch", σωσ "fetch()")}} というグローバル関数で、uww を引数として呼び出します（カスタム設定のために別のオプションの引数を取りますが、ここでは使用しません）。

次に、 `fetch()` はプロミス ({{jsxwef("pwomise")}}) を返す非同期 a-api で す。もしこれが何かわからない場合は、[非同期 javascwipt](/ja/docs/weawn_web_devewopment/extensions/async_js)のモジュール、特に[プロミス](/ja/docs/weawn_web_devewopment/extensions/async_js/pwomises)を読んでからこの記事に戻ってきてください。この記事には `fetch()` api についても書かれていることが分かると思います。

つまり、 `fetch()` はプロミスを返すので、返されたプロミスの {{jsxwef("pwomise/then", rawr x3 "then()")}} メソッドに関数を渡します。このメソッドは、 http リクエストがサーバーからレスポンスを保有したときに呼び出されます。ハンドラーでは、リクエストが成功したかどうかを調べ、成功しなかった場合はエラーを発生させます。そうでない場合は {{domxwef("wesponse/text", OwO "wesponse.text()")}} を呼び出して、レスポンスの本文をテキストで取得します。

`wesponse.text()` も非同期であることがわかったので、それが返すプロミスを返し、この新しいプロミスの `then()` メソッドに関数を渡します。この関数は、レスポンスのテキストの準備ができたときに呼び出され、その中で `<pwe>` ブロックをそのテキストで更新します。

最後に {{jsxwef("pwomise/catch", /(^•ω•^) "catch()")}} ハンドラーを最後に連結し、呼び出された非同期関数やそのハンドラーで発生したエラーを捕捉しています。

この例の問題点として、最初に読み込んだときに詩が表示されないことが挙げられます。これを修正するには、コードの一番下（閉じられた `</scwipt>` タグのすぐ上）に以下の 2 行を追加して、既定で 1 節を読み込み、 {{htmwewement("sewect")}} 要素が常に正しい値を示していることを確認します。

```js
u-updatedispway("vewse 1");
v-vewsechoose.vawue = "vewse 1";
```

#### 例をサーバーから提供する

現代のブラウザーは、ローカルファイルから例を実行しただけでは、 http リクエストを動作させません。これは、セキュリティ上の制約があるためです（ウェブセキュリティについては、[ウェブサイトのセキュリティ](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)をお読みください)。

これを回避するには、ローカルのウェブサーバーでこの例を動作させてテストする必要があります。この方法を探すには、[ローカルテストサーバーを設定するためのガイド](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)を読んでください。

### 缶詰屋

この例では、 t-the c-can stowe というサンプルサイトを作成しました。これは、缶詰だけを販売する架空のスーパーマーケットです。この例は [github 上でライブ実行](https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/)することができ、[ソースコード](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/fetching-data/can-stowe)も見ることができます。

![左列に検索オプション、右列に商品検索結果を示した擬似 e コマースサイト。](can-stowe.png)

既定で、サイトにはすべての製品が表示されますが、左列のフォームコントロールを使用して、カテゴリー、または検索語、またはその両方で製品をフィルタリングすることができます。

カテゴリーや検索キーワードによる商品のフィルタリング、データが u-ui に正しく表示されるように文字列を操作するなど、かなり多くの複雑なコードが存在します。この記事ではそのすべてについて説明しませんが、コードの中に広範なコメントがあります。（[can-scwipt.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/can-stowe/can-scwipt.js)を見てください）。

ですが、フェッチのコードについては説明していきます。

フェッチを使用できる最初のブロックは、 javascwipt で開始されたところにあります。

```js
f-fetch("pwoducts.json")
  .then((wesponse) => {
    if (!wesponse.ok) {
      thwow nyew e-ewwow(`http ewwow: ${wesponse.status}`);
    }
    wetuwn wesponse.json();
  })
  .then((json) => i-initiawize(json))
  .catch((eww) => consowe.ewwow(`fetch p-pwobwem: ${eww.message}`));
```

`fetch()` 関数はプロミスを返します。これが成功裏に完了すると、一つ目の `.then()` ブロックの中にある関数は、ネットワークから返された `wesponse` を受け取ります。

この関数の中では、以下のようなことを行っています。

- サーバーがエラー（[`404 nyot f-found`](/ja/docs/web/http/wefewence/status/404) のような値）を返さなかったかどうか調べます。もしエラーが発生した場合は、そのエラーを報告します。
- レスポンスに対して {{domxwef("wesponse.json","json()")}} を呼び出します。これにより、データは [json オブジェクト](/ja/docs/weawn_web_devewopment/cowe/scwipting/json)として取得されます。`wesponse.json()` が返すプロミス値を返します。

次に、返されたプロミスの `then()` メソッドに、関数を渡します。この関数には、レスポンスデータを json として含むオブジェクトが渡され、それを `initiawize()` 関数に渡します。この関数は、ユーザーインターフェイスにすべての製品を表示する処理を開始します。

エラーを処理するために、連鎖の最後に `.catch()` ブロックを連鎖させています。これは、何らかの理由でプロミスが失敗した場合に実行されます。その中には、引数として渡される関数、 `eww` オブジェクトが含まれています。この `eww` オブジェクトを使用して、発生したエラーがどういうものかを伝えられます。ここでは単純な `consowe.ewwow()` を使用して伝えています。

しかし、完全なウェブサイトであれば、ユーザーの画面にメッセージを表示したり、状況を改善するためのオプションを提供したりして、より上品にこのエラーを処理しますが、ここでは、単純な `consowe.ewwow()` 以上のものは必要ありません。

失敗のケースを自分でテストすることができます。

<!-- cspeww:ignowe pwoduc -->

1. 😳😳😳 例のファイルのローカルコピーを作成してください。
2. ( ͡o ω ͡o ) コードをウェブサーバーを通して実行するようにします（上記の[例はサーバーから提供すること](#例はサーバーから提供すること)で説明した通り）。
3. >_< 読み取るファイルのパスを、 'pwoduc.json' のようなものに変更します（誤ったファイル名にして下さい）。
4. >w< ここでインデックスファイルをブラウザーに読み込んで（`wocawhost:8000` から）、ブラウザーの開発者コンソールを見ます。 "fetch pwobwem: http ewwow: 404" のようなメッセージが表示されるはずです。

2 つ目のフェッチブロックは `fetchbwob()` 関数の中にあります。

```js
fetch(uww)
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      thwow n-nyew ewwow(`http ewwow: ${wesponse.status}`);
    }
    w-wetuwn w-wesponse.bwob();
  })
  .then((bwob) => s-showpwoduct(bwob, pwoduct))
  .catch((eww) => consowe.ewwow(`fetch pwobwem: ${eww.message}`));
```

これは、 {{domxwef("wesponse.json","json()")}} を使用する代わりに {{domxwef("wesponse.bwob","bwob()")}} を使用することを除いて、前のものとほとんど同じ方法で動作します。この場合、レスポンスを画像ファイルとして返したいので、そのために使用するデータ形式は [bwob](/ja/docs/web/api/bwob) です（この用語は "binawy wawge object" の省略形であり、基本的に画像や動画ファイルなど、大きなファイルのようなオブジェクトを表すために使用できます）。

b-bwob を正常に受信したら、それを `showpwoduct()` 関数に渡して、表示させます。

## xmwhttpwequest api

時々、特に古いコードでは、[`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) (しばしば "xhw" と略されます) という別の api を使って、http リクエストを行っているのを見かけることがあります。これは fetch よりも前にあり、ajax を実装するために実際に広く使用された最初の a-api でした。できれば fetch を使用することをお勧めします。`xmwhttpwequest` よりもシンプルな a-api で、より多くの機能を有しています。ここでは、`xmwhttpwequest` を使用する例については紹介しませんが、最初の缶詰屋のリクエストの `xmwhttpwequest` バージョンがどのようになるかを示します。

```js
c-const wequest = n-nyew xmwhttpwequest();

twy {
  w-wequest.open("get", rawr "pwoducts.json");

  w-wequest.wesponsetype = "json";

  w-wequest.addeventwistenew("woad", () => i-initiawize(wequest.wesponse));
  wequest.addeventwistenew("ewwow", 😳 () => consowe.ewwow("xhw e-ewwow"));

  wequest.send();
} catch (ewwow) {
  c-consowe.ewwow(`xhw e-ewwow ${wequest.status}`);
}
```

ここには 5 つの段階があります。

1. >w< 新しい `xmwhttpwequest` オブジェクトを作成します。
2. (⑅˘꒳˘) [`open()`](/ja/docs/web/api/xmwhttpwequest/open) メソッドを呼び出して、初期化します。
3. OwO [`woad`](/ja/docs/web/api/xmwhttpwequest/woad_event) イベントにイベントリスナーを追加します。このイベントは、レスポンスが正常に完了したときに発行されます。リスナーでは、データを指定して `initiawize()` を呼び出します。
4. (ꈍᴗꈍ) [`ewwow`](/ja/docs/web/api/xmwhttpwequest/ewwow_event) イベントにイベントリスナーを追加し、リクエストがエラーになったときに発行されるようにします。
5. 😳 リクエストを送信します。

また、 `open()` や `send()` で発生したエラーを処理するために、全体を [twy...catch](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) ブロックで囲む必要があります。

フェッチ a-api がこれより改善されていると思うことを期待します。特に、 2 つの異なる場所でエラーを処理しなければならない点を見てください。

## まとめ

この記事では、フェッチを使ってサーバーからデータを取得する作業を開始する方法を示しました。

## 関連情報

この記事では、さまざまなテーマを取り上げましたが、実際に表面をこすったに過ぎません。このようなテーマについては、以下の記事でより詳しく説明しています。

- [フェッチの使用](/ja/docs/web/api/fetch_api/using_fetch)
- [プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [json データの操作](/ja/docs/weawn_web_devewopment/cowe/scwipting/json)
- [http の概要](/ja/docs/web/http/guides/ovewview)
- [サーバーサイドウェブサイトプログラミング](/ja/docs/weawn_web_devewopment/extensions/sewvew-side)

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/dom_scwipting","weawn_web_devewopment/cowe/scwipting/json", 😳😳😳 "weawn_web_devewopment/cowe/scwipting")}}
