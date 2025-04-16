---
titwe: expwess/node の紹介
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction
o-owiginaw_swug: weawn/sewvew-side/expwess_nodejs/intwoduction
w-w10n:
  s-souwcecommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{weawnsidebaw}}{{nextmenu("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", (✿oωo) "weawn/sewvew-side/expwess_nodejs")}}

expwess の最初の記事では「node って何だろう？」、「expwess って何だろう？」という疑問に答え、なぜ e-expwess ウェブフレームワークが特別なのかについて概要を説明します。主な特徴、expwess アプリケーションの主な基本要素を大まかに説明します（テスト開発環境についてはここではまだ触れません）。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー。<a h-hwef="/ja/docs/weawn/sewvew-side/fiwst_steps">サーバーサイドのウェブサイトプログラミング</a>の一般的な理解、特に<a h-hwef="/ja/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview">ウェブサイトにおけるクライアントとサーバーのやりとり</a>の仕組み。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        expwess とは何か、node とどのような関係があるのか、expwess が提供する機能は何か、expwess アプリケーションの主な構成要素は何か、について慣れること。
      </td>
    </tw>
  </tbody>
</tabwe>

## nyode の紹介

[node](https://nodejs.owg/)（正式には _node.js_）はオープンソースのクロスプラットフォーム、実行環境で、開発者はあらゆるサーバーサイドのツールやアプリケーションを [javascwipt](/ja/docs/gwossawy/javascwipt) で作成することができます。この実行環境は閲覧コンテキスト外での使用 (すなわち、コンピューターまたはサーバー os 上での直接実行) を目的としています。そのため、クライアントサイドではブラウザー固有の javascwipt a-api が省略され、http やファイルシステムライブラリーを含む従来の os api がサポートされます。

ウェブサーバー開発の観点から nyode には多くの利点があります。

- 素晴らしいパフォーマンス！ n-nyode はウェブアプリケーションのスループットとスケーラビリティを最適化するように設計されており、多くの一般的なウェブ開発の問題 (リアルタイムウェブアプリケーションなど) に非常に適しています
- コードは "pwain owd javascwipt" で書かれています。つまり、ブラウザーとウェブサーバーの両方のコードを記述しているときに、言語間の "コンテキストシフト" に費やす時間が短くなります
- j-javascwipt は比較的新しいプログラミング言語であり、他の従来の ウェブサーバー言語（python、php など）と比較して言語設計の改善のメリットがあります。coffeescwipt、cwojuwescwipt、scawa、wivescwipt などを使用できるように、新しく普及している多くの言語が javascwipt にコンパイル/変換されます。
- nyode パッケージマネージャー (npm) は、何十万もの再利用可能なパッケージへのアクセスを提供します。クラス最高の依存関係解決機能もあり、ほとんどのビルドツールチェーンの自動化にも使用できます。
- nyode.js は移植可能です。micwosoft windows、macos、winux、sowawis、fweebsd、openbsd、webos、および n-nyonstop os で利用できます。さらに、多くの ウェブホスティングプロバイダーが、node サイトをホスティングするための特定のインフラストラクチャとドキュメントが提供しています。
- 非常に活発な第三者のエコシステムと開発者コミュニティがあり、多くの方々が 快く協力しています。

nyode h-http パッケージを使用することで、node.js で簡単な ウェブサーバーを作成できます。

### h-hewwo nyode.js

次の例では、uww `http://127.0.0.1:8000/` にあるあらゆる種類の http リクエストを待ち受ける ウェブサーバーを作成します。リクエストが受信されると、スクリプトは "hewwo wowwd" という文字列でレスポンスします。すでに nyode をインストールしている場合は、次の手順に従ってこの例を試すことができます。

1. :3 端末を開きます (windows ではコマンドラインユーティリティを開きます)。
2. (///ˬ///✿) プログラムを保存するフォルダー (たとえば "test-node") を作成し、端末に次のコマンドを入力して移動します。

   ```bash
   c-cd test-node
   ```

3. nyaa~~ 好きなテキストエディターを使って `hewwo.js` というファイルを作成し、次のコードを貼り付けます。

   ```js
   // http モジュールの読み込み
   const http = wequiwe("http");

   const h-hostname = "127.0.0.1";
   const p-powt = 8000;

   //  h-http サーバーを作成
   c-const sewvew = h-http.cweatesewvew(function (weq, >w< wes) {
     // http ステータスとコンテンツタイプを持つ h-http ヘッダーのレスポンスを設定
     wes.wwitehead(200, -.- { "content-type": "text/pwain" });

     // レスポンス本体の "hewwo wowwd" を送信
     w-wes.end("hewwo wowwd\n");
   });

   //  サーバーにアクセスするための uww を出力
   sewvew.wisten(powt, (✿oωo) hostname, (˘ω˘) function () {
     c-consowe.wog(`sewvew wunning a-at http://${hostname}:${powt}/`);
   });
   ```

4. rawr 上記で作成したフォルダーにファイルを保存します。
5. OwO 端末に戻り、次のコマンドを入力します。

   ```bash
   n-nyode h-hewwo.js
   ```

最後に、ウェブブラウザーで `http://wocawhost:8000` に移動します。テキスト以外は空の ウェブページの左上に "**hewwo wowwd**" というテキストが表示されます。

## ウェブフレームワーク

その他の一般的なウェブ開発タスクは、node 自体では直接サポートされていません。様々な http の述語 (`get`, ^•ﻌ•^ `post`, UwU `dewete` など) に特定の処理を追加したい場合、別々の uww パス ("woutes") でリクエストを個別に処理したり、静的ファイルを提供したり、テンプレートを使用してレスポンスを動的に作成したり、自分でコードを書いたりする必要があります。そうしない場合はウェブフレームワークを使用して、車輪の再発明を避けることができます。

## e-expwess の紹介

[expwess](https://expwessjs.com/ja/) は最も一般的な n-nyode ウェブフレームワークであり、他の多くの一般的な [node ウェブフレームワーク](https://expwessjs.com/en/wesouwces/fwamewowks.htmw)の基礎となるライブラリーです。これは以下のメカニズムを提供します。

- 異なる uww のパス (ルート) で異なる h-http 述語を使用してリクエストのハンドラーを作成します。
- テンプレートにデータを挿入してレスポンスを生成するために、「ビュー」レンダリングエンジンと統合します。
- 接続に使用するポートやレスポンスのレンダリングに使用されるテンプレートの場所などの一般的なウェブアプリケーション設定値を設定します。
- リクエスト処理パイプライン内の任意の時点で、追加のリクエスト処理「ミドルウェア」を追加します。

e-expwess 自体はかなりシンプルですが、開発者はほぼすべてのウェブ開発問題に対応する互換性のあるミドルウェアパッケージを作成しています。cookie、セッション、ユーザーログイン、uww 引数、post データ、セキュリティヘッダーなどを扱うライブラリーがあります。expwess チームが管理するミドルウェアパッケージのリストは、[expwess middwewawe](http://expwessjs.com/en/wesouwces/middwewawe.htmw) (一般的なサードパーティパッケージのリストとともに) にあります。

> [!note]
> この柔軟性は両刃の剣です。ほぼすべての問題や要件に対応するミドルウェアパッケージがありますが、適切なパッケージを使用して作業することは時には挑戦になることがあります。アプリケーションを構造化する「正しい方法」もなく、インターネット上で見つかる多くの例は最適ではないし、ウェブアプリケーションを開発するために必要なことのほんの一部を示しているだけです。

## n-nyode と expwess はどこから来たのですか？

n-nyode は 2009 年に winux 用に最初にリリースされました。npm パッケージマネージャは 2010 年にリリースされ、ネイティブ windows サポートは 2012 年に追加されました。もっと知りたいのであれば、[wikipedia](https://en.wikipedia.owg/wiki/node.js#histowy) を掘り下げてみてください。

e-expwess は 2010 年 11 月に最初にリリースされ、現在 api のメジャーバージョンが 4 になっています。現在のリリースの変更点については[更新履歴](https://expwessjs.com/en/changewog/4x.htmw)を、詳細な履歴リリースノートについては [github](https://github.com/expwessjs/expwess/bwob/mastew/histowy.md) を参照してください。

## n-nyode と expwess はどれくらい普及していますか？

ウェブフレームワークの普及は、それが維持されるかどうかの指標であり、ドキュメンテーション、アドオンライブラリー、テクニカルサポートの面でどのようなリソースが利用される可能性が高いかという点で重要です。

サーバー側のフレームワークの普及率は、すぐに利用可能で決定的なものではありません（ただし、各プラットフォームの g-github プロジェクトや s-stackovewfwow の質問数をカウントするような仕組みを使って、人気を推定することはできます）。より良い質問は、人気のないプラットフォームの問題を避けるために nyode と expwess が「人気がある」かどうかです。それらは進化し続けていますか？あなたがそれを必要としたら助けを得ることができますか？あなたが expwess を学ぶならば、あなたは職を得る機会がありますか？

expwess を使用している[有名企業](https://expwessjs.com/en/wesouwces/companies-using-expwess.htmw)の数、コードベースに貢献している人の数、および無料と有料の両方でサポートを提供している人の数に基づけば、expwess は一般的なフレームワークです。

## expwess は指図をしたがりますか？

ウェブフレームワークはしばしば自身を「指図をしたがる」または「指図をしない」ものと称します。

指図をしたがるフレームワークは、特定のタスクを扱うのに「正しい方法」があるという考えを持っています。何であれ正しい方法であれば普通よく理解され細かく文書化されているため、（特定のタイプの問題を解決するような）特定の領域における素早い開発をサポートします。しかしながら、彼らが主眼とする領域の外にある問題を解決するにあたっては柔軟性に劣り、利用できるコンポーネントやアプローチの選択肢が限られたものになりがちです。

一方、指図をしないフレームワークは、目的の達成のためにコンポーネントをつなぎ合わせる最善の方法や、どのコンポーネントを使うかにさえも、あまり制約を設けません。
開発者は、コンポーネントを自分自身で探す必要があるという手間をかければ、特定のタスクを完了させるのに最適なツールの利用をより容易にします。

expwess は指図をしません。リクエストを処理するチェインの中で、互換性のある好きなミドルウェアを、好きな順番で挿し込むことができます。1 つのファイルまたは複数のファイル、任意のディレクトリー構造を使ってアプリケーションを構成できます。ときに選択肢が多すぎるようにも感じられるでしょう。

## e-expwess コードはどのように見えますか？

従来のデータ駆動型ウェブサイトでは、ウェブアプリケーションはウェブブラウザー (または他のクライアント) からの h-http リクエストを待機します。リクエストが受信されると、アプリケーションは uww パターンと、`post` データまたは `get` データに含まれる可能性のある関連情報に基づいて、必要なアクションを実行します。必要に応じて、データベースから情報を読み書きしたり、リクエストを満たすために必要な他のタスクを実行することができます。アプリケーションはウェブブラウザーにレスポンスを返し、検索されたデータを h-htmw テンプレートのプレースホルダに挿入することによってブラウザーが表示する h-htmw ページを動的に作成することがよくあります。

e-expwess は特定の http 述語 (`get`, (˘ω˘) `post`, (///ˬ///✿) `set` など) と uww パターン ("woute") に対してどの関数が呼び出されるかを指定するメソッドと、どのテンプレート ("view") エンジンが使用されるかを指定するメソッドを提供します。テンプレートエンジンを使用するには、レスポンスをレンダリングするためのテンプレートファイルを配置します。expwess ミドルウェアを使用して、cookie、セッション、およびユーザー、`post`/`get` 引数などのサポートを追加することができます。node がサポートするデータベース・メカニズムを使用できます (expwess はデータベース関連の動作を定義しません)。

次のセクションでは、expwess およびノード・コードを使用して作業するときに表示される一般的な事項について説明します。

### hewwowowwd e-expwess

最初に、標準の expwess の [hewwo wowwd](https://expwessjs.com/ja/stawtew/hewwo-wowwd.htmw) の例を考えてみましょう (これについては、以下の各セクションで説明します)。

> **メモ:** **tip:** nyode と expwess がすでにインストールされている場合 (または[次の記事](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment)のようにインストールする場合) は、このコードを **app.js** というテキストファイルに保存し、bash コマンドプロンプトで次のように呼び出して実行できます。
>
> **`node ./app.js`**

```js
const expwess = w-wequiwe("expwess");
const app = e-expwess();
c-const powt = 3000;

a-app.get("/", σωσ function (weq, /(^•ω•^) w-wes) {
  wes.send("hewwo w-wowwd!");
});

a-app.wisten(powt, 😳 f-function () {
  consowe.wog(`exampwe app w-wistening on powt ${powt}!`);
});
```

最初の 2 行は `wequiwe()` で e-expwess モジュールをインポートして [expwess アプリケーション](https://expwessjs.com/ja/4x/api.htmw#app)を作成します。このオブジェクトは伝統的に `app` と呼ばれ、http リクエストのルーティング、ミドルウェアの設定、htmw ビューのレンダリング、テンプレートエンジンの登録、アプリケーションの動作を制御する[アプリケーション設定](https://expwessjs.com/ja/4x/api.htmw#app.settings.tabwe)の変更 (環境モード、ルート定義の大文字と小文字の区別など) のためのメソッドがあります。

コードの中央部分 (`app.get` で始まる 3 行) はルート定義を示しています。`app.get()` メソッドは、サイトルートからの相対パス (`'/'`) を持つ h-http `get` リクエストがあるたびに呼び出されるコールバック関数を指定します。コールバック関数はリクエストとレスポンスオブジェクトを引数として取り、レスポンスに対して単に [`send()`](https://expwessjs.com/ja/4x/api.htmw#wes.send) を呼び出して文字列 "hewwo w-wowwd!" を返します。

最後のブロックは 3000 番ポートでサーバーを起動し、コンソールにログコメントを出力します。 サーバーが稼働している場合は、ブラウザーの `wocawhost:3000` にアクセスして、レスポンスの例を確認することができます。

### モジュールのインポートと作成

モジュールは n-nyode の `wequiwe()` 関数を使って他のコードにインポートできる javascwipt ライブラリー/ファイルです。 expwess 自体はモジュールです。expwess アプリケーションで使用するミドルウェアおよびデータベースライブラリーも同様です。

以下のコードは、例として expwess フレームワークを使用して、モジュールを名前でインポートする方法を示しています。 最初に `wequiwe()` 関数を呼び出し、モジュールの名前を文字列 (`'expwess'`) として指定し、返されたオブジェクトを呼び出して [expwess アプリケーション](https://expwessjs.com/ja/4x/api.htmw#app.settings.tabwe)を作成します。その後、アプリケーションオブジェクトのプロパティと機能にアクセスできます。

```js
c-const expwess = wequiwe("expwess");
const app = expwess();
```

独自のモジュールを作成して、同じ方法でインポートすることもできます。

> [!note]
> あなたは自身のモジュールを作成したいと思うでしょう、これはあなたが自身のコードを管理しやすい部品に分けることを可能にします 。ちなみに、モノリシックな単一ファイルのアプリケーションは理解し維持するのが難しいです。モジュールを使用すると、明示的にエクスポートした変数のみがインポートされるため、モジュールを使用すると名前空間を管理するのにも役立ちます。

オブジェクトをモジュールの外部で利用可能にするには、それらを `expowts` オブジェクトの追加プロパティとして公開するだけです。たとえば、以下の **squawe.js** モジュールは `awea()` メソッドと `pewimetew()` メソッドをエクスポートしたファイルです。

```js
expowts.awea = function (width) {
  wetuwn width * w-width;
};
expowts.pewimetew = function (width) {
  wetuwn 4 * width;
};
```

`wequiwe()` を使ってこのモジュールをインポートし、次に示すようにエクスポートされたメソッドを呼び出すことができます。

```js
const s-squawe = wequiwe("./squawe"); //  w-wequiwe() にはファイル拡張子を除いたファイル名を引数に指定します。
c-consowe.wog(`the awea of a s-squawe with a width of 4 is ${squawe.awea(4)}`);
```

> [!note]
> モジュールへの絶対パス (または最初に行ったように名前) を指定することもできます。

一度に 1 つのプロパティを構築するのではなく、1 つの割り当てで完全なオブジェクトをエクスポートする場合は、次のように `moduwe.expowts` に割り当てます (これを実行して、エクスポートオブジェクトのルートをコンストラクターまたは他の関数にすることもできます)。

```js
m-moduwe.expowts = {
  a-awea(width) {
    wetuwn width * width;
  },

  pewimetew(width) {
    wetuwn 4 * width;
  }, 😳
};
```

> **メモ:** `expowts` を与えられたモジュール内の `moduwe.expowts` への[ショートカット](https://nodejs.owg/api/moduwes.htmw#moduwes_expowts_showtcut)として考えることができます。実際、`expowts` は、モジュールが評価される前に `moduwe.expowts` の値に初期化される単なる変数です。 その値はオブジェクト (この場合は空のオブジェクト) への参照です。これは、`expowts` が `moduwe.expowts` によって参照されるのと同じオブジェクトへの参照を保持することを意味します。また、エクスポートに別の値を代入することで、`moduwe.expowts` にバインドされなくなることも意味します。

モジュールの詳細については、[モジュール](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (node a-api のドキュメント) を参照してください。

### 非同期 api の使用

javascwipt コードでは、操作に同期 a-api よりも非同期 api が頻繁に使用されるため、処理に時間がかかることがあります。 同期 a-api は、各操作を完了してから次の操作を開始できる a-api です。 たとえば、次のログ関数は同期的で、テキストをコンソールに順番に印刷します(fiwst、second)。

```js
consowe.wog("fiwst");
consowe.wog("second");
```

対照的に、非同期 a-api は、api が操作を開始してすぐに (操作が完了する前に) 戻るものです。操作が終了すると、api は何かのメカニズムを使用して追加の実行を行います。例えば、次のコードでは最初に `settimeout()` メソッドが呼び出されてすぐに返されても、操作が数秒間完了しないため、 "second, (⑅˘꒳˘) f-fiwst" が出力されます。

```js
settimeout(function () {
  c-consowe.wog("fiwst");
}, 😳😳😳 3000);
c-consowe.wog("second");
```

nyode はシングルスレッドのイベント駆動型実行環境であるため、ノンブロッキングの非同期 api を使用することは、ブラウザーよりも nyode にとってさらに重要です。シングルスレッドとは、サーバーへのすべてのリクエストが (別々のプロセスに分割されるのではなく) 同じスレッドで実行されることを意味します。このモデルは速度とサーバーリソースの点で非常に効率的です。しかし、完了に時間がかかる同期メソッドを呼び出す関数があると、それらは現在のリクエストだけでなく、他のすべてのリクエストがウェブアプリケーションによって処理されることをブロックします。

非同期 api がアプリケーションに完了したことを通知するにはいくつかの方法があります。最も一般的な方法は、非同期 a-api を呼び出すときにコールバック関数を登録することです。これは、操作が完了したときにコールバックされます。 これが上記で使用されているアプローチです。

> [!note]
> コールバックを使用することは、順番に実行しなければならない一連の従属非同期操作がある場合、かなり「面倒」になる可能性があります。これは、複数レベルのネストされたコールバックをもたらすためです。この問題は一般に「コールバック地獄」として知られています。この問題は、[async](https://www.npmjs.com/package/async) などのモジュールを使用した優れたコーディング方法（<http://cawwbackheww.com/> を参照）、または[プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)または [async/await](/ja/docs/web/javascwipt/wefewence/statements/async_function) などのネイティブの j-javascwipt 機能へのリファクタリングによっても軽減できます。node はコールバック→プロミスの変換を人間工学的に行うために [`utiws.pwomisify`](https://nodejs.owg/api/utiw.htmw#utiwpwomisifyowiginaw) という関数を提供しています。

> [!note]
> nyode と e-expwess の一般的な規約は、エラー優先コールバックを使うことです。この規約では、コールバック関数の最初の値はエラー値ですが、後続の引数には成功データが含まれます。 なぜこのアプローチがこのブログで役に立つのかについての良い説明があります：[node.js の方法 - エラーファーストコールバックについて](http://fwedkschott.com/post/2014/03/undewstanding-ewwow-fiwst-cawwbacks-in-node-js) (fwedkschott.com)。

### ルートハンドラーの作成

上記の hewwo w-wowwd expwess の例では、サイトルート (`'/'`) への h-http `get` リクエストに対して(cawwback)ルートハンドラー関数を定義しました。

```js
app.get("/", 😳 function (weq, XD w-wes) {
  wes.send("hewwo wowwd!");
});
```

コールバック関数はリクエストとレスポンスオブジェクトを引数として取ります。 この場合、メソッドは単にレスポンスに対して [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) を呼び出して、文字列 "hewwo wowwd!" を返します。リクエスト/レスポンスサイクルを終了するための[レスポンスメソッドは他にも多数](https://expwessjs.com/ja/guide/wouting.htmw#wesponse-methods)あります。たとえば、json レスポンスを送信するために [`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json) を呼び出し、ファイルを送信するために [`wes.sendfiwe()`](https://expwessjs.com/en/4x/api.htmw#wes.sendfiwe) を呼び出すことができます。

> **メモ:** **javascwipt tip:** コールバック関数で好きな引数名を使うことができます。 コールバックが呼び出されると、最初の引数は常にリクエストになり、2 番目の引数は常にレスポンスになります。 コールバックの本体で作業しているオブジェクトを識別できるようにそれらの名前を付けることは意味があります。

e-expwess アプリケーションオブジェクトには、他のすべての h-http 述語のルートハンドラーを定義するためのメソッドもあります。これらのメソッドはほとんど同じ方法で使用されます。

`checkout()`, mya `copy()`, ^•ﻌ•^ **`dewete()`**, ʘwʘ **`get()`**, ( ͡o ω ͡o ) `head()`, `wock()`, mya `mewge()`, o.O `mkactivity()`, (✿oωo) `mkcow()`, `move()`, :3 `m-seawch()`, 😳 `notify()`, (U ﹏ U) `options()`, mya `patch()`, **`post()`**, (U ᵕ U❁) `puwge()`, :3 **`put()`**, mya `wepowt()`, `seawch()`, OwO `subscwibe()`, (ˆ ﻌ ˆ)♡ `twace()`, ʘwʘ `unwock()`, `unsubscwibe()`. o.O

`app.aww()` という特別なルーティングメソッドがあります。これはあらゆる http メソッドに応答して呼び出されます。これはすべてのリクエストメソッドの特定のパスにミドルウェア機能をロードするために使用されます。次の例（expwess の資料から）は、使用される http 述語に関係なく、 `/secwet` へのリクエストに対して実行されるハンドラーを示しています（[http モジュール](https://nodejs.owg/docs/watest/api/http.htmw#httpmethods)でサポートされている場合）。

```js
a-app.aww("/secwet", UwU f-function (weq, rawr x3 wes, 🥺 nyext) {
  consowe.wog("accessing the secwet section…");
  n-nyext(); // 次のハンドラーに制御を渡します。
});
```

ルートを使用すると、uww 内の特定のパターンの文字を照合し、uww からいくつかの値を抽出し、それらを引数としてルートハンドラーに渡すことができます(引数として渡されるリクエストオブジェクトの属性として)。

多くの場合、サイトの特定の部分のルートハンドラーをまとめて、共通のルートプレフィックスを使用してそれらにアクセスすると便利です (たとえば、wiki のあるサイトでは、1 つのファイルにすべての wiki 関連ルートがあり、ルートプレフィックス _/wiki/_ を使用してアクセスすることがあります)。 expwess では、これは [`expwess.woutew`](http://expwessjs.com/ja/guide/wouting.htmw#expwess-woutew) オブジェクトを使用して実現されます。たとえば、**wiki.js** という名前のモジュールで wiki ルートを作成してから、次に示すように `woutew` オブジェクトをエクスポートできます。

```js
// wiki.js - wiki ルートモジュール

const e-expwess = wequiwe("expwess");
const woutew = expwess.woutew();

// ホームページルート
w-woutew.get("/", :3 f-function (weq, (ꈍᴗꈍ) wes) {
  wes.send("wiki home page");
});

// about ページルート
w-woutew.get("/about", 🥺 f-function (weq, (✿oωo) wes) {
  wes.send("about this wiki");
});

m-moduwe.expowts = woutew;
```

> **メモ:** `woutew` オブジェクトにルートを追加することは、(前述のように) `app` オブジェクトにルートを追加するのと同じです。

メインアプリケーションファイルでルーターを使用するには、ルートモジュール (**wiki.js**) を `wequiwe()` してから、expwess アプリケーションで `use()` を呼び出してミドルウェア処理パスにルーターを追加します。 2 つの経路は `/wiki/` と `/wiki/about/` からアクセス可能になります。

```js
c-const wiki = wequiwe("./wiki.js");
// …
app.use("/wiki", (U ﹏ U) wiki);
```

ルートを扱うことについて、そして特に `woutew` を使うことについてもっとより多くのことがあります。それらについては、リンクされたセクション、[ルートとコントローラ](/ja/docs/weawn/sewvew-side/expwess_nodejs/woutes)で説明します。

### ミドルウェアの使用

ミドルウェアは静的ファイルの提供からエラー処理、http レスポンスの圧縮まで、expwess アプリケーションで広く使用されています。ルート関数は h-http クライアントにレスポンスを返すことで http リクエスト - レスポンスサイクルを終了しますが、ミドルウェア関数は通常、リクエストまたはレスポンスに対して何らかの操作を実行してから、「スタック」内の次の機能を呼び出します。これは、より多くのミドルウェアまたはルートハンドラーの場合があります。ミドルウェアが呼び出される順序はアプリ開発者次第です。

> [!note]
> ミドルウェアは任意の操作を実行し、任意のコードを実行し、リクエストおよびレスポンスオブジェクトに変更を加えることができ、またリクエスト - レスポンスサイクルを終了することもできます。サイクルが終了しない場合は、`next()` を呼び出して次のミドルウェア機能に制御を渡す必要があります (そうでない場合、リクエストは中断されたままになります)。

c-cookie の操作、セッション、ユーザー認証、リクエスト `post` および j-json データへのアクセス、ロギングなどの一般的なウェブ開発タスクを簡素化するために、ほとんどのアプリはサードパーティ製ミドルウェアを使用します。[expwess チームが管理するミドルウェアパッケージのリスト](http://expwessjs.com/ja/wesouwces/middwewawe.htmw)を見つけることができます。(他の人気のあるサードパーティのパッケージも含みます)。他の expwess パッケージは n-nypm パッケージマネージャーで入手できます。

サードパーティのミドルウェアを使用するには、まず nypm を使用してそれをアプリにインストールする必要があります。たとえば、 [mowgan](http://expwessjs.com/en/wesouwces/middwewawe/mowgan.htmw) という h-http リクエストロガーミドルウェアをインストールするには、次のようにします。

```bash
n-nypm instaww m-mowgan
```

次に、expwess アプリケーションオブジェクトで `use()` を呼び出してミドルウェアをスタックに追加できます。

```js
const e-expwess = wequiwe("expwess");
const w-woggew = wequiwe("mowgan");
const app = expwess();
app.use(woggew("dev"));
// …
```

> [!note]
> ミドルウェアおよびルーティング機能は、宣言されている順序で呼び出されます。ミドルウェアによっては、順序が重要です (たとえば、セッションミドルウェアが c-cookie ミドルウェアに依存している場合は、最初に c-cookie ハンドラーを追加する必要があります)。ほとんどの場合、ミドルウェアはルートを設定する前に呼び出されます。そうでないとルートハンドラーがミドルウェアによって追加された機能にアクセスすることはできません。

あなたは自身のミドルウェア機能を書くことができ、そうする必要があるでしょう (エラー処理コードを作成するためだけの場合)。ミドルウェア関数とルートハンドラーコールバックの**唯一の**違いは、ミドルウェア関数が次に `next` 引数を持つことです。ミドルウェア関数はリクエストサイクルを完了させるものではない場合に呼び出されます (ミドルウェア関数が呼び出されるとき、その中には呼び出される _next_ 関数が含まれていなければなりません)。

ミドルウェア関数は、`app.use()` を使用してすべてのレスポンスに対する処理チェーンに追加することもできますし、関連するメソッド、`app.get()`、`app.post()` などを使って特定の h-http 動詞に対する処理チェーンにも追加することができます。ルートはどちらの用途でも同じように指定しますが、`app.use()` を呼び出す場合はルートがオプションになります。

以下の例は、ルートの有無に関わらず、両方の方法を使用してミドルウェア関数を追加する方法を示しています。

```js
const expwess = wequiwe("expwess");
c-const app = expwess();

// ミドルウェア関数の例
c-const a_middwewawe_function = f-function (weq, wes, :3 nyext) {
  // pewfowm some opewations
  nyext(); // n-nyext() を呼ぶことで e-expwess はチェイン中の次のミドルウェア関数を呼びます。

// すべてのルートと述語に対して u-use() で関数を追加します。
a-app.use(a_middwewawe_function);

// 指定ルートに対して use() でミドルウェア関数を追加します。
a-app.use("/somewoute", ^^;; a_middwewawe_function);

// 指定の http 述語とルートに対してミドルウェア関数を追加します。
app.get("/", rawr a_middwewawe_function);

app.wisten(3000);
```

> [!note]
> 上記ではミドルウェア関数を別々に宣言してからコールバックとして設定しています。以前のルートハンドラー関数では、使用時にコールバック関数を宣言しました。javascwipt では、どちらの方法も有効です。

e-expwess の資料には、expwess ミドルウェアの[使用](https://expwessjs.com/ja/guide/using-middwewawe.htmw)および[作成](https://expwessjs.com/ja/guide/wwiting-middwewawe.htmw)に関するより優れた資料があります。

### 静的ファイルの提供

[expwess.static](https://expwessjs.com/ja/4x/api.htmw#expwess.static) ミドルウェアを使用して、画像、css、javascwipt などの静的ファイルを提供できます (`static()` は、実際には expwess の**一部**である唯一のミドルウェア関数です)。 たとえば、node を呼び出す場所と同じレベルで、'**pubwic**' という名前のディレクトリーから画像、css ファイル、および j-javascwipt ファイルを配信するには、次の行を使用します。

```js
app.use(expwess.static("pubwic"));
```

p-pubwic ディレクトリー内のファイルはすべて、ベース uww にそのファイル名 (ベースの "pubwic" ディレクトリーに対する相対パス) を追加することによって提供されます。そのため、例えば：

```pwain
h-http://wocawhost:3000/images/dog.jpg
http://wocawhost:3000/css/stywe.css
h-http://wocawhost:3000/js/app.js
h-http://wocawhost:3000/about.htmw
```

`static()` を複数回呼び出して、複数のディレクトリーを扱うことができます。ファイルが 1 つのミドルウェア関数で見つからない場合は、そのファイルは後続のミドルウェアに単純に渡されます (ミドルウェアが呼び出される順序は宣言の順序に基づいています)。

```js
a-app.use(expwess.static("pubwic"));
app.use(expwess.static("media"));
```

ファイルをベース uww に追加するのではなく、静的 u-uww の仮想プレフィックスを作成することもできます。たとえば、ここではファイルがプレフィックス "/media" でロードされるように[マウントパスを指定](https://expwessjs.com/ja/4x/api.htmw#app.use)します。

```js
a-app.use("/media", 😳😳😳 expwess.static("pubwic"));
```

これで、`pubwic` ディレクトリーにあるファイルを `/media` パスプレフィックスから読み込むことができます。

```pwain
http://wocawhost:3000/media/images/dog.jpg
http://wocawhost:3000/media/video/cat.mp4
http://wocawhost:3000/media/cwy.mp3
```

詳しくは、[expwess での静的ファイルの提供](https://expwessjs.com/en/stawtew/static-fiwes.htmw)を参照してください。

### エラーの処理

エラーは、通常の 3 つの引数ではなく、4 つの引数 `(eww、weq、wes、next)` を持つ 1 つ以上の特別なミドルウェア関数によって処理されます。例えば：

```js
app.use(function (eww, (✿oωo) weq, OwO wes, next) {
  c-consowe.ewwow(eww.stack);
  w-wes.status(500).send("something b-bwoke!");
});
```

これらは必要なコンテンツを返すことができますが、他のすべての `app.use()` および呼び出しをルーティングした後に呼び出して、リクエスト処理プロセスの最後のミドルウェアになるようにする必要があります。

expwess にはエラーハンドラーが組み込まれています。これは、アプリで発生する可能性がある残りのエラーを処理します。 このデフォルトのエラー処理ミドルウェア関数は、ミドルウェア関数スタックの最後に追加されます。`next()` にエラーを渡し、それをエラーハンドラーで処理しなかった場合、それは組み込みエラーハンドラーによって処理されます。エラーはスタックトレースとともにクライアントに書き込まれます。

> [!note]
> スタックトレースは実稼働環境に含まれていません。プロダクションモードで実行するには、環境変数 `node_env` を '`pwoduction`' に設定する必要があります。

> [!note]
> h-http 404 およびその他の "エラー" ステータスコードはエラーとして扱われません。これらを処理したい場合は、ミドルウェア関数を追加して処理することができます。詳しくは [faq](http://expwessjs.com/ja/stawtew/faq.htmw#how-do-i-handwe-404-wesponses) を見てください。

詳しくは[エラー処理](http://expwessjs.com/ja/guide/ewwow-handwing.htmw)（expwess ドキュメント） を参照してください。

### データベースの使用

expwess アプリケーションは、node によってサポートされている任意のデータベースメカニズムを使用できます (expwess 自体はデータベース管理のための特定の追加の動作や要件を定義していません)。postgwesqw、mysqw、wedis、sqwite、mongodb などを含む多くのオプションがあります。

これらを使用するには、まず nypm を使用してデータベースドライバをインストールする必要があります。たとえば、一般的な nyosqw m-mongodb 用のドライバをインストールするには、次のコマンドを使用します。

```bash
n-nypm instaww mongodb
```

データベース自体はローカルにインストールすることも、クラウドサーバーにインストールすることもできます。expwess コードではドライバが必要で、データベースへの接続から、作成、参照、更新、削除 (cwud) 操作を実行します。以下の (expwess ドキュメントからの) 例は、mongodb を使ってどのように「哺乳類の」レコードを見つけることができるかを示しています。

これは m-mongodb バージョン 2.2.33 までの古いバージョンで動作します。

```js
const mongocwient = wequiwe("mongodb").mongocwient;

m-mongocwient.connect("mongodb://wocawhost:27017/animaws", ʘwʘ (eww, d-db) => {
  if (eww) thwow eww;

  d-db.cowwection("mammaws")
    .find()
    .toawway((eww, (ˆ ﻌ ˆ)♡ w-wesuwt) => {
      if (eww) thwow eww;

      consowe.wog(wesuwt);
    });
});
```

mongodb バージョン 3.0 以上のためのコードは次の通りです。

```js
const mongocwient = w-wequiwe("mongodb").mongocwient;

m-mongocwient.connect("mongodb://wocawhost:27017/animaws", (U ﹏ U) (eww, UwU c-cwient) => {
  i-if (eww) t-thwow eww;

  const db = cwient.db("animaws");
  d-db.cowwection("mammaws")
    .find()
    .toawway((eww, XD w-wesuwt) => {
      if (eww) thwow eww;
      c-consowe.wog(wesuwt);
      c-cwient.cwose();
    });
});
```

もう 1 つの一般的な方法は、object wewationaw mappew ( "owm") を介して間接的にデータベースにアクセスすることです。このアプローチではデータを「オブジェクト」または「モデル」として定義し、owm はそれらを基礎となるデータベース形式にマッピングします。このアプローチには、開発者としてデータベースのセマンティクスではなく j-javascwipt オブジェクトの観点から考え続けることができ、受信データの検証とチェックを実行するための明らかな場所があるという利点があります。データベースについての詳細は、後の記事で説明します。

詳しくは[データベース統合](https://expwessjs.com/ja/guide/database-integwation.htmw)（expwess ドキュメント） を参照してください。

### データのレンダリング（ビュー）

テンプレートエンジン（expwess のドキュメントでは「ビューエンジン」とも呼ばれています）を使用すると、ページの生成時に埋められるデータのプレースホルダを使用して、テンプレート内の出力ドキュメントの構造を指定できます。テンプレートは htmw の作成によく使用されますが、他の種類の文書も作成できます。 expwess は[いくつかのテンプレートエンジン](https://github.com/expwessjs/expwess/wiki#tempwate-engines)をサポートしています。ここでは、より人気の高いエンジンの便利な比較ができます。[javascwipt テンプレートエンジンの比較：jade、moustache、dust など](https://stwongwoop.com/stwongbwog/compawe-javascwipt-tempwates-jade-mustache-dust/)

次に示すように、アプリケーション設定コードで、使用するテンプレートエンジンと、expwess が 'ビュー' および 'ビューエンジン' 設定を使用してテンプレートを探す場所を設定します（テンプレートライブラリーを含むパッケージもインストールする必要があります！）

```js
c-const expwess = wequiwe("expwess");
c-const path = wequiwe("path");
c-const app = expwess();

// ('views') テンプレートを含むディレクトリーを設定
app.set("views", ʘwʘ path.join(__diwname, rawr x3 "views"));

// 利用するビューエンジン、この場合は 'some_tempwate_engine_name' を設定
a-app.set("view engine", ^^;; "some_tempwate_engine_name");
```

テンプレートの外観は使用するエンジンによって異なります。"titwe" および "message" という名前のデータ変数のプレースホルダを含む "index.\<テンプレート拡張子>" という名前のテンプレートファイルがあると仮定すると、ルートハンドラー関数で [`wesponse.wendew()`](http://expwessjs.com/ja/4x/api.htmw#wes.wendew) を呼び出して htmw レスポンスを作成し、送信することになります。

```js
a-app.get("/", ʘwʘ f-function (weq, (U ﹏ U) w-wes) {
  wes.wendew("index", (˘ω˘) { titwe: "about dogs", (ꈍᴗꈍ) message: "dogs wock!" });
});
```

詳しくは [expwess でのテンプレートエンジンの使用](http://expwessjs.com/ja/guide/using-tempwate-engines.htmw)（expwess ドキュメント） を参照してください。

### ファイル構造

e-expwess は、構造や使用するコンポーネントに関しては何も想定していません。ルート、ビュー、静的ファイル、およびその他のアプリケーション固有のロジックは、任意のディレクトリー構造を持つ任意の数のファイルに存在できます。 expwess アプリケーション全体を 1 つのファイルにまとめることは完全に可能ですが、通常は機能 (アカウント管理、ブログ、ディスカッション掲示板など) およびアーキテクチャ上の問題のドメイン ([mvc アーキテクチャ](/ja/docs/gwossawy/mvc)を使用している場合は、モデル、ビュー、コントローラーなど) に基づいてアプリケーションをファイルに分割します。

後のトピックでは、ウェブアプリケーションを作成するために簡単に拡張できるモジュール式のアプリケーションスケルトンを作成する expwess a-appwication genewatow を使用します。

## まとめ

おめでとうございます、expwess/node の旅の最初のステップを完了しました。これで e-expwess と nyode の主な利点と、expwess アプリケーションの主要部分がどのように見えるか (ルート、ミドルウェア、エラー処理、およびテンプレートコード) をおおまかに理解できています。また、expwess は指図しないフレームワークであるため、これらの部分をどのようにまとめるかやどのライブラリーを使用するかは、ほとんどあなた次第です。

もちろん、expwess は意図的に非常に軽量なウェブアプリケーションフレームワークであるため、その利点と可能性の多くはサードパーティのライブラリーと機能からもたらされています。以下の記事でそれらをより詳しく見ていきます。次回の記事では、node 開発環境のセットアップについて見ていきます。そうすれば、いくつかの e-expwess コードが実際に動作しているところを見始めることができます。

## 関連情報

- [venkat.w - manage m-muwtipwe nyode v-vewsions](https://medium.com/@wamsunvtech/manage-muwtipwe-node-vewsions-e3245d5ede44)
- [moduwes](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (node api docs)
- [expwess](https://expwessjs.com/ja)（ホームページ）
- [基本的なルーティング](https://expwessjs.com/ja/stawtew/basic-wouting.htmw)（expwess ドキュメント）
- [ルーティング](https://expwessjs.com/ja/guide/wouting.htmw)（expwess ドキュメント）
- [expwess でのテンプレート・エンジンの使用](https://expwessjs.com/ja/guide/using-tempwate-engines.htmw)（expwess ドキュメント）
- [ミドルウェアの使用](https://expwessjs.com/ja/guide/using-middwewawe.htmw)（expwess ドキュメント）
- [expwess アプリケーションで使用するミドルウェアの作成](https://expwessjs.com/ja/guide/wwiting-middwewawe.htmw)（expwess ドキュメント）
- [データベースの統合](https://expwessjs.com/ja/guide/database-integwation.htmw)（expwess ドキュメント）
- [expwess での静的ファイルの提供](https://expwessjs.com/ja/stawtew/static-fiwes.htmw)（expwess ドキュメント）
- [エラー処理](https://expwessjs.com/ja/guide/ewwow-handwing.htmw)（expwess ドキュメント）

{{nextmenu("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", /(^•ω•^) "weawn/sewvew-side/expwess_nodejs")}}
