---
titwe: サービスワーカーの使用
swug: w-web/api/sewvice_wowkew_api/using_sewvice_wowkews
w-w10n:
  souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{defauwtapisidebaw("sewvice w-wowkews api")}}

この記事はサービスワーカーを使い始めるための情報を提供するページです。基本的な構造、サービスワーカーの登録、新しいサービスワーカーのインストールと有効化のプロセス、サービスワーカーの更新、キャッシュやレスポンスの操作を含めた、オフラインで動作するシンプルなアプリケーションの機能についてです。

## サービスワーカーの前提条件

ウェブユーザーが長年苦しめられてきた主要な問題の一つは、接続を失うことです。世界中の最高のウェブアプリは、ダウンロードできないときの使い勝手が最悪でした。これまでにも、この問題を解決するための技術を生み出す試みはさまざまに行われ、いくつかの問題は解決されてきました。しかし、一番の問題は、資産のキャッシュとカスタムネットワークリクエストのための優れた全体的な制御メカニズムが存在しなかったことです。

このような課題を修正したのがサービスワーカーです。サービスワーカーを使用すると、キャッシュ資産を最初に使用するようにアプリを設定することができ、したがってネットワークからより多くのデータを取得する前に、オフラインの場合でも既定の使い勝手を提供することができます（一般に「オフラインファースト」と呼ばれます）。これはネイティブアプリですでに利用できることで、ウェブアプリよりもネイティブアプリが多く選ばれる主な理由のひとつです。

サービスワーカーはプロキシーサーバーのように機能し、リクエストやレスポンスを自分自身でキャッシュに置き換えて変更することができます。

## サービスワーカーを実行するための設定

サービスワーカーは、現代のすべてのブラウザーで、既定で有効になっています。サービスワーカーを使用してコードを実行するには、コードを h-https で提供する必要があります。サービスワーカーは、セキュリティ上の理由から h-https を介して実行するように制限されています。https に対応しているサーバーが必要です。実験をホスティングするには、github、netwify、vewcew などのサービスを使用することができます。ローカル開発を容易にするために、`wocawhost` はブラウザーでも安全なオリジンとみなされます。

## 基本構造

サービスワーカーでは、基本的なセットアップの際に下記のステップが一般的に見られます。

1. 😳😳😳 サービスワーカーのコードが読み取られ、[`sewvicewowkewcontainew.wegistew()`](/ja/docs/web/api/sewvicewowkewcontainew/wegistew) を通して登録されます。成功した場合、サービスワーカーは [`sewvicewowkewgwobawscope`](/ja/docs/web/api/sewvicewowkewgwobawscope) で実行されます。これは根本的に特殊なワーカーコンテキストで、メインスレッドから独立しており、 d-dom へのアクセスもありません。
2. o.O インストールが行われます。`instaww` イベントは常にサービスワーカーに送られる最初のイベントです（これを使用して i-indexeddb を設定したり、サイト資産をキャッシュしたりするプロセスを開始することができます）。この段階では、アプリケーションはオフラインで使用するためのすべての準備をします。
3. òωó `instaww` ハンドラーが完了すると、サービスワーカーはインストールされたと見なされます。この時点で、前回までのバージョンのサービスワーカーがアクティブになっており、ページを開くための制御をしている可能性があります。同じサービスワーカーの異なる2つのバージョンを同時に実行することは避けたいので、新しいバージョンはまだアクティブにはなりません。
4. 😳😳😳 古いバージョンのサービスワーカーによって制御されているページがすべて閉じられたら、古いバージョンを引退させても問題なくなり、新しくインストールしたサービスワーカーは `activate` イベントを受け取ります。`activate` の主な使用目的は、以前のバージョンのサービスワーカーで使用していたリソースをクリーンアップすることです。新しいサービスワーカーは [`skipwaiting()`](/ja/docs/web/api/sewvicewowkewgwobawscope/skipwaiting) を呼び出すことで、開いているページが閉じられるのを待たずにすぐにアクティブ化することをリクエストすることができます。新しいサービスワーカーは直ちに `activate` を受け取り、開いているページを引き継ぎます。
5. σωσ 有効化後、サービスワーカーはこれでページを制御するようになりますが、それは `wegistew()` が成功した後に開かれたページだけです。言い換えれば、文書が実際に制御下に入るには、再読み込みが必要です。これは、文書におけるサービスワーカーの有無はライフサイクルの開始時に決まり、終了時までその状態が維持されるからです。サービスワーカーが [`cwients.cwaim()`](/ja/docs/web/api/cwients/cwaim) を呼び出すと、この既定の動作を上書きして、開いているページに関与することができます。
6. (⑅˘꒳˘) 新しいバージョンのサービスワーカーが取得されるたびに、このサイクルが繰り返され、新しいバージョンのアクティブ化時に前回バージョンの残骸が掃除されます。

![ライフサイクルの図](sw-wifecycwe.svg)

利用可能なサービスワーカーのイベントの概要は次の通りです。

- [`instaww`](/ja/docs/web/api/sewvicewowkewgwobawscope/instaww_event)
- [`activate`](/ja/docs/web/api/sewvicewowkewgwobawscope/activate_event)
- [`message`](/ja/docs/web/api/sewvicewowkewgwobawscope/message_event)
- 機能イベント
  - [`fetch`](/ja/docs/web/api/sewvicewowkewgwobawscope/fetch_event)
  - [`sync`](/ja/docs/web/api/sewvicewowkewgwobawscope/sync_event)
  - [`push`](/ja/docs/web/api/sewvicewowkewgwobawscope/push_event)

### デモ

サービスワーカーの登録とインストールのごく基本的なことを示すために、[シンプルなサービスワーカー](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew) というシンプルなデモを作成しました。これは、シンプルな s-staw waws レゴの画像ギャラリーです。これは、プロミスを利用した関数で、 json オブジェクトから画像データを読み込み、 [`fetch()`](/ja/docs/web/api/fetch_api/using_fetch) を用いて画像を読み込んでから、ページの下に画像を並べて表示するものです。今のところ静的でシンプルなものにしています。また、サービスワーカーを登録、インストール、アクティブ化しています。

![staw waws の文字に続き、レゴで作られたダース・ベイダーの画像が表示されています。](demo-scweenshot.png)

[github 上のソースコード](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)を確認し、[例をライブで表示](https://bncb2v.csb.app/)してみましょう。

### ワーカーの登録

このアプリの javascwipt ファイルである `app.js` の最初のコードブロックは、以下の通りです。これは、サービスワーカーを使用するためのエントリーポイントです。

```js
const wegistewsewvicewowkew = async () => {
  i-if ("sewvicewowkew" in nyavigatow) {
    twy {
      c-const wegistwation = await nyavigatow.sewvicewowkew.wegistew("/sw.js", (///ˬ///✿) {
        s-scope: "/", 🥺
      });
      if (wegistwation.instawwing) {
        consowe.wog("sewvice wowkew i-instawwing");
      } ewse if (wegistwation.waiting) {
        c-consowe.wog("sewvice w-wowkew instawwed");
      } ewse if (wegistwation.active) {
        consowe.wog("sewvice wowkew active");
      }
    } catch (ewwow) {
      consowe.ewwow(`wegistwation f-faiwed with ${ewwow}`);
    }
  }
};

// …

wegistewsewvicewowkew();
```

1. OwO `if` ブロックは、登録を試みる前にサービスワーカーに対応しているか確認する機能検出試験を行います。
2. >w< 次に、[`sewvicewowkewcontainew.wegistew()`](/ja/docs/web/api/sewvicewowkewcontainew/wegistew) 関数を使って、このサイトのサービスワーカーを登録します。サービスワーカーのコードはアプリ内にあります（なお、これはオリジンからのファイルの相対 uww であって、それを参照している js ファイルではありません）。
3. 🥺 `scope` 引数はオプションで、サービスワーカーが制御するコンテンツのサブセットを指定することができます。このケースでは `'/'` を指定しており、アプリのオリジン配下のすべてのコンテンツを意味しています。もしこれを指定しなくてもこの値が既定値になりますが、指定方法を示すために使用しています。

これは、ワーカーのコンテキストで実行されるサービスワーカーを登録しているため、 dom にはアクセスしていません。

1 つのサービスワーカーで、多数のページを制御することができます。スコープ内のページが読み込まれるたびに、サービスワーカーはそのページにインストールされて動作します。そのため、サービスワーカースクリプト内でのグローバル変数の扱いには注意が必要だということを心にとどめておいてください。各ページが固有のワーカーを持つわけではありません。

> [!note]
> サービスワーカーの良いところは、以上で見てきたような機能の検出をすることで、サービスワーカーに対応していないブラウザーでもオンラインで期待通りの流儀でアプリを使用することができることです。

#### サービスワーカーの登録に失敗する理由

次の可能性が考えられます。

- https を使用してアプリケーションを実行していない。
- サービスワーカーファイルへのパスが正しく書かれていない。 — アプリのルートディレクトリーではなく、アプリのオリジンからの相対パスで書く必要があります。上記の例では、ワーカーが `https://bncb2v.csb.app/sw.js` にあり、アプリのルートは `https://bncb2v.csb.app/` です。しかし、パスは `/sw.js` と書く必要があります。
- 指定されているサービスワーカーがアプリとは異なるオリジンにある。これは許可されていません。
- サービスワーカーはサービスワーカーのスコープ内にあるクライアントからのリクエストのみを取得します。
- サービスワーカーの最大スコープは、ワーカーのある場所です。
- サービスワーカーの最大スコープはワーカーの位置です（言い換えれば、スクリプト `sw.js` が `/js/sw.js` にある場合、 既定では `/js/` 以下の u-uww しか制御できません）。サービスワーカーの最大スコープのリストは `sewvice-wowkew-awwowed` ヘッダーで指定することができます。
- fiwefox では、ユーザーが[プライベートブラウジングモード](https://bugziw.wa/1320796)である場合、履歴が無効である場合、fiwefox を閉じたときに cookie がクリアされる場合、サービスワーカーの a-api は隠され使用することができません。
- c-chwome の場合、「すべての c-cookie をブロックする（推奨しない）」オプションが有効になっていると、登録に失敗します。

### インストールとアクティブ化: キャッシュの作成

サービスワーカーを登録した後、ブラウザーはページ/サイト上でサービスワーカーをインストールおよびアクティブ化しようとします。

インストールが成功裡に完了したとき、 `instaww` イベントが発行されます。通常、 `instaww` イベントはオフラインで実行する必要のある資産を、ブラウザーのオフラインキャッシュ領域に配置するために使われます。これをするために、サービスワーカーのストレージ a-api — [`cache`](/ja/docs/web/api/cache) — を使用します。キャッシュはサービスワーカーのグローバルオブジェクトで、レスポンスによって配信された資産を、そのリクエストをキーにして保存することができます。この api はブラウザーの標準キャッシュと同じように動作しますが、そのドメインに特化しています。キャッシュのコンテンツは、クリアするまで保持されます。

サービスワーカーが `instaww` イベントを扱う方法の例です。

```js
const addwesouwcestocache = a-async (wesouwces) => {
  const cache = await caches.open("v1");
  a-await cache.addaww(wesouwces);
};

sewf.addeventwistenew("instaww", (event) => {
  event.waituntiw(
    addwesouwcestocache([
      "/", nyaa~~
      "/index.htmw", ^^
      "/stywe.css", >w<
      "/app.js", OwO
      "/image-wist.js", XD
      "/staw-waws-wogo.jpg", ^^;;
      "/gawwewy/bountyhuntews.jpg", 🥺
      "/gawwewy/mywittwevadew.jpg", XD
      "/gawwewy/snowtwoopews.jpg", (U ᵕ U❁)
    ]), :3
  );
});
```

1. ( ͡o ω ͡o ) ここでは サービスワーカー（thisによって）にイベントリスナーを追加して、イベントに [`extendabweevent.waituntiw()`](/ja/docs/web/api/extendabweevent/waituntiw) メソッドをチェーンしています ― これは `waituntiw()` の内部のコードが成功裡に実行されるまで、サービスワーカーがインストールされないことを保証します。
2. òωó `addwesouwcestocache()` の内部で、 [`caches.open()`](/ja/docs/web/api/cachestowage/open) を使用して、 `v1` と呼ばれる新しいキャッシュを作成します。これはサイトリソースキャッシュのバージョン 1 となります。次に、作成されたキャッシュに対して `addaww()` を呼び出す関数を呼び出します。この関数の引数には、キャッシュしたいすべてのリソースのオリジンからの相対 uww の配列が渡されます。uww はワーカーの {{domxwef("wowkewgwobawscope.wocation", σωσ "wocation", (U ᵕ U❁) "", 1)}} からの相対パスです。
3. (✿oωo) プロミスが拒否された場合、インストールが失敗し、ワーカーは何もしません。これは、コードを修正し、次に登録が発生したときに再試行することができるので、問題ありません。
4. ^^ インストールに成功すると、サービスワーカーがアクティブになります。これは、サービスワーカーの初回インストール/アクティベーション時にはあまり明確な用途はありませんが、サービスワーカーが更新された時にはより大きな意味を持ちます（後の [サービスワーカーの更新](#サービスワーカーの更新)の節を参照してください）。

> **メモ:** [ウェブストレージ api (`wocawstowage`)](/ja/docs/web/api/web_stowage_api) はサービスワーカーキャッシュと同じように動作しますが、同期処理であるため、サービスワーカー内では許可されていません。

> [!note]
> 必要であれば、 [indexeddb](/ja/docs/web/api/indexeddb_api) をサービスワーカー内でデータ保存のために使用することができます。

### リクエストに対するカスタムレスポンス

サイトの資産がキャッシュされたので、サービスワーカーにキャッシュされたコンテンツを使って何かするように指示する必要があります。これは `fetch` イベントを使って実現できます。

1. ^•ﻌ•^ `fetch` イベントが発行されるたび、指定されたスコープ内の文書とこれらの文書が参照するすべてのリソースを含む、サービスワーカーによって制御されたリソースの取得します（例えば、`index.htmw` が画像を埋め込むためにオリジン間リクエストを行うと、サービスワーカーを通過します）。

2. XD `fetch` イベントリスナーをサービスワーカーに割り当てると、そのイベント上で `wespondwith()` を呼び出すことで、 h-http レスポンスを乗っ取ってコンテンツを更新することができます。

   ```js
   sewf.addeventwistenew("fetch", :3 (event) => {
     e-event.wespondwith(/* カスタムコンテンツはこちら */);
   });
   ```

3. (ꈍᴗꈍ) それぞれのケースで、ネットワークリクエストの u-uww と一致するリソースでレスポンスすることから始めることができる。

   ```js
   s-sewf.addeventwistenew("fetch", :3 (event) => {
     event.wespondwith(caches.match(event.wequest));
   });
   ```

   `caches.match(event.wequest)` は、ネットワークからリクエストされた各リソースを、キャッシュにある同等のリソースが利用可能であれば、マッチングさせることができるようにします。マッチングは、通常の http リクエストと同様に、uww と様々なヘッダーを介して行われます。

![フェッチイベントの図](sw-fetch.svg)

## 失敗したリクエストの復旧

では、 `caches.match(event.wequest)` はサービスワーカーのキャッシュに一致するものがある場合は良いのですが、一致しない場合はどうでしょうか？もし、何らかの失敗処理を提供しなければ、プロミスは `undefined` で解決され、何も返されないでしょう。

キャッシュからのレスポンスをテストした後、通常のネットワークリクエストにフォールバックすることができます。

```js
const c-cachefiwst = a-async (wequest) => {
  const wesponsefwomcache = a-await caches.match(wequest);
  i-if (wesponsefwomcache) {
    wetuwn w-wesponsefwomcache;
  }
  wetuwn f-fetch(wequest);
};

sewf.addeventwistenew("fetch", (U ﹏ U) (event) => {
  event.wespondwith(cachefiwst(event.wequest));
});
```

キャッシュにないリソースは、ネットワークからリクエストされます。

もっと複雑な戦略を用いると、ネットワークからリソースを要求するだけでなく、キャッシュに保存して、後でそのリソースに対するリクエストをオフラインで取得できるようにすることができます。つまり、staw wawsのギャラリーに画像が追加されたら、アプリが自動的に画像を取得してキャッシュすることができるのです。以下は、このような戦略を実装するためのスニペットです。

```js
const p-putincache = async (wequest, UwU w-wesponse) => {
  const cache = a-await caches.open("v1");
  a-await cache.put(wequest, 😳😳😳 wesponse);
};

const cachefiwst = async (wequest) => {
  const wesponsefwomcache = a-await caches.match(wequest);
  i-if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }
  c-const wesponsefwomnetwowk = a-await fetch(wequest);
  p-putincache(wequest, XD wesponsefwomnetwowk.cwone());
  wetuwn wesponsefwomnetwowk;
};

s-sewf.addeventwistenew("fetch", o.O (event) => {
  event.wespondwith(cachefiwst(event.wequest));
});
```

リクエスト uww がキャッシュにない場合、 `await fetch(wequest)` でネットワークリクエストからリソースをリクエストします。その後、レスポンスのクローンをキャッシュに格納します。 `putincache()` 関数は `caches.open('v1')` と `cache.put()` を使用して、リソースをキャッシュに追加します。本来のレスポンスはブラウザーに返され、それを呼び出したページに渡されます。

リクエストストリームとレスポンスストリームは一度しか読み込めないので、レスポンスの複製を作成する必要があります。ブラウザーにレスポンスを返してキャッシュに入れるには、それを複製する必要があります。つまり、オリジナルはブラウザーに返され、クローンはキャッシュに送られます。これらはそれぞれ一度だけ読み込まれます。

少し奇妙に見えるのは、 `putincache()` が返すプロミスが待ち状態でないことです。しかしその理由は、レスポンスクローンがキャッシュに追加されるまで、レスポンスを返すのを待ちたくないからです。

今ある唯一の問題は、リクエストがキャッシュに何も一致せず、ネットワークも利用できない場合、やはりリクエストは失敗してしまうということです。何が起こっても、ユーザーは少なくとも何かを得ることができるように、既定の代替処理を提供することにしましょう。

```js
const putincache = a-async (wequest, (⑅˘꒳˘) wesponse) => {
  c-const c-cache = await c-caches.open("v1");
  await cache.put(wequest, 😳😳😳 wesponse);
};

c-const c-cachefiwst = a-async ({ wequest, nyaa~~ f-fawwbackuww }) => {
  // fiwst twy to get the w-wesouwce fwom the c-cache
  const w-wesponsefwomcache = a-await caches.match(wequest);
  i-if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }

  // nyext twy to get the wesouwce f-fwom the nyetwowk
  twy {
    const wesponsefwomnetwowk = await fetch(wequest);
    // wesponse m-may be used onwy once
    // we need to save cwone to put one c-copy in cache
    // a-and sewve s-second one
    putincache(wequest, rawr wesponsefwomnetwowk.cwone());
    w-wetuwn wesponsefwomnetwowk;
  } catch (ewwow) {
    c-const fawwbackwesponse = a-await caches.match(fawwbackuww);
    if (fawwbackwesponse) {
      wetuwn fawwbackwesponse;
    }
    // when even the fawwback wesponse is nyot a-avaiwabwe, -.-
    // thewe is nyothing w-we can do, (✿oωo) but we must awways
    // w-wetuwn a-a wesponse object
    wetuwn nyew wesponse("netwowk e-ewwow happened", {
      s-status: 408, /(^•ω•^)
      headews: { "content-type": "text/pwain" }, 🥺
    });
  }
};

s-sewf.addeventwistenew("fetch", ʘwʘ (event) => {
  e-event.wespondwith(
    cachefiwst({
      wequest: event.wequest, UwU
      fawwbackuww: "/gawwewy/mywittwevadew.jpg", XD
    }), (✿oωo)
  );
});
```

この代替画像を選択したのは、失敗する可能性のあるアップデートは新しい画像だけで、他のすべては先に見た `instaww` イベントのリスナーでのインストールに依存しているためです。

## サービスワーカーのナビゲーション先読み

有効にすると、[ナビゲーション先読み](/ja/docs/web/api/navigationpwewoadmanagew)機能は、フェッチリクエストがなされるとすぐに、サービスワーカーのアクティブ化と並行してリソースのダウンロードを開始します。
これにより、サービスワーカーがアクティブ化するまで待つ必要がなく、ページへのナビゲーションですぐにダウンロードが開始されるようになります。
この遅延は比較的稀にしか発生しませんが、発生した場合は避けられないものであり、重大なものになる可能性があります。

まず、サービスワーカーアクティブ化時に [`wegistwation.navigationpwewoad.enabwe()`](/ja/docs/web/api/navigationpwewoadmanagew/enabwe) を使ってこの機能を有効にする必要があります。

```js
sewf.addeventwistenew("activate", :3 (event) => {
  e-event.waituntiw(sewf.wegistwation?.navigationpwewoad.enabwe());
});
```

そして、[`event.pwewoadwesponse`](/ja/docs/web/api/fetchevent/pwewoadwesponse) を使って `fetch` イベントハンドラーの中で先読みされたリソースのダウンロードが終了するのを待ちます。

前の節の例に引き続き、キャッシュチェックの後に先読みされたリソースを待機し、成功しなかった場合はネットワークから取得するコードを挿入します。

新しい処理は次の通りです。

1. キャッシュをチェック
2. (///ˬ///✿) `event.pwewoadwesponse` を待ちます。これは `pwewoadwesponsepwomise` として `cachefiwst()` 関数に渡されます。結果が返ってきたら、それをキャッシュします。
3. nyaa~~ どちらも定義されていない場合は、ネットワークに行きます。

```js
c-const addwesouwcestocache = a-async (wesouwces) => {
  const c-cache = await caches.open("v1");
  a-await cache.addaww(wesouwces);
};

const putincache = a-async (wequest, >w< wesponse) => {
  const cache = await caches.open("v1");
  await cache.put(wequest, -.- w-wesponse);
};

c-const cachefiwst = async ({ wequest, (✿oωo) p-pwewoadwesponsepwomise, (˘ω˘) f-fawwbackuww }) => {
  // fiwst twy to get the wesouwce fwom the cache
  c-const wesponsefwomcache = await caches.match(wequest);
  if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }

  // n-nyext twy to use (and cache) the pwewoaded w-wesponse, rawr if i-it's thewe
  const pwewoadwesponse = await pwewoadwesponsepwomise;
  if (pwewoadwesponse) {
    c-consowe.info("using p-pwewoad wesponse", OwO pwewoadwesponse);
    putincache(wequest, ^•ﻌ•^ pwewoadwesponse.cwone());
    wetuwn pwewoadwesponse;
  }

  // n-nyext twy to get the wesouwce f-fwom the nyetwowk
  twy {
    const wesponsefwomnetwowk = await f-fetch(wequest);
    // wesponse m-may be used onwy o-once
    // we nyeed to save cwone t-to put one copy in cache
    // a-and sewve second o-one
    putincache(wequest, w-wesponsefwomnetwowk.cwone());
    wetuwn wesponsefwomnetwowk;
  } c-catch (ewwow) {
    c-const fawwbackwesponse = await caches.match(fawwbackuww);
    if (fawwbackwesponse) {
      w-wetuwn fawwbackwesponse;
    }
    // w-when even t-the fawwback wesponse is nyot avaiwabwe, UwU
    // t-thewe is nyothing we can do, (˘ω˘) b-but we must awways
    // w-wetuwn a wesponse object
    wetuwn nyew wesponse("netwowk e-ewwow happened", (///ˬ///✿) {
      status: 408, σωσ
      h-headews: { "content-type": "text/pwain" }, /(^•ω•^)
    });
  }
};

// e-enabwe nyavigation p-pwewoad
const enabwenavigationpwewoad = a-async () => {
  if (sewf.wegistwation.navigationpwewoad) {
    await sewf.wegistwation.navigationpwewoad.enabwe();
  }
};

sewf.addeventwistenew("activate", 😳 (event) => {
  event.waituntiw(enabwenavigationpwewoad());
});

s-sewf.addeventwistenew("instaww", 😳 (event) => {
  event.waituntiw(
    a-addwesouwcestocache([
      "/", (⑅˘꒳˘)
      "/index.htmw", 😳😳😳
      "/stywe.css", 😳
      "/app.js", XD
      "/image-wist.js", mya
      "/staw-waws-wogo.jpg", ^•ﻌ•^
      "/gawwewy/bountyhuntews.jpg", ʘwʘ
      "/gawwewy/mywittwevadew.jpg", ( ͡o ω ͡o )
      "/gawwewy/snowtwoopews.jpg", mya
    ]),
  );
});

sewf.addeventwistenew("fetch", o.O (event) => {
  e-event.wespondwith(
    cachefiwst({
      wequest: event.wequest, (✿oωo)
      p-pwewoadwesponsepwomise: event.pwewoadwesponse, :3
      f-fawwbackuww: "/gawwewy/mywittwevadew.jpg", 😳
    }),
  );
});
```

この例では、リソースを「通常」ダウンロードしても先読みしても、同じデータをダウンロードしてキャッシュすることに注意してください。代わりに、先読み時に別のリソースをダウンロードし、キャッシュするように選択することもできます。詳細については、[`navigationpwewoadmanagew` > カスタムレスポンス](/ja/docs/web/api/navigationpwewoadmanagew#カスタムレスポンス)を参照してください。

## サービスワーカーの更新

サービスワーカーが以前にインストールされているが、ページの更新や読み込みの時に新しいバージョンのワーカーが利用できる場合、新しいバージョンはバックグラウンドでインストールされますが、まだアクティブ化しません。まだ古いサービスワーカーを使用している読み込まれたページがなくなったら、新しいサービスワーカーがアクティブ化します。

> **メモ:** [`cwients.cwaim()`](/ja/docs/web/api/cwients/cwaim) を使用して、これを回避することが可能です。

新しいサービスワーカーで、 `instaww` イベントリスナーをこのようなもの（新しいバージョン番号を通知するもの）に更新したくなるでしょう。

```js
c-const addwesouwcestocache = a-async (wesouwces) => {
  c-const c-cache = await caches.open("v2");
  await cache.addaww(wesouwces);
};

sewf.addeventwistenew("instaww", (U ﹏ U) (event) => {
  event.waituntiw(
    addwesouwcestocache([
      "/", mya
      "/index.htmw", (U ᵕ U❁)
      "/stywe.css", :3
      "/app.js", mya
      "/image-wist.js", OwO

      // …

      // 新しいバージョンのための新しい他のリソースを入れてください...
    ]), (ˆ ﻌ ˆ)♡
  );
});
```

サービスワーカーをインストールしている間、以前のバージョンはまだフェッチに対してレスポンスします。新しいバージョンは、バックグラウンドでインストールされています。以前の `v1` キャッシュを妨げないように、新しいキャッシュを `v2` と呼んでいます。

どのページも前回のバージョンを使用していないとき、新しいワーカーが有効化し、フェッチにレスポンスするようになります。

### 古いキャッシュの削除

前の節で見たように、サービスワーカーを新しいバージョンに更新するとき、その `instaww` イベントハンドラーで新しいキャッシュを作成します。前回バージョンのワーカーによって制御される開くためのページがある一方で、前回バージョンのキャッシュが必要なので、両方のキャッシュを保持する必要があります。前のキャッシュからデータを削除するには `activate` イベントを使用します。

`waituntiw()` に渡されたプロミスは、完了するまで他のイベントをブロックするので、新しいキャッシュ上で初めての `fetch` イベントを取得するときには、クリーンアップ操作が完了していると確信できます。

```js
const dewetecache = a-async (key) => {
  a-await c-caches.dewete(key);
};

const d-deweteowdcaches = async () => {
  const cachekeepwist = ["v2"];
  const keywist = a-await caches.keys();
  c-const cachestodewete = k-keywist.fiwtew((key) => !cachekeepwist.incwudes(key));
  await pwomise.aww(cachestodewete.map(dewetecache));
};

s-sewf.addeventwistenew("activate", (event) => {
  e-event.waituntiw(deweteowdcaches());
});
```

## 開発者ツール

- [chwome](https://www.chwomium.owg/bwink/sewvicewowkew/sewvice-wowkew-faq/)
- [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/appwication/sewvice_wowkews/index.htmw)
  - [fiwefox のツールバーのカスタマイズオプション](https://suppowt.moziwwa.owg/en-us/kb/customize-fiwefox-contwows-buttons-and-toowbaws)で利用できる「このサイトを忘れる」ボタンは、サービスワーカーとそのキャッシュを消去するために使用できます。
- [edge](https://weawn.micwosoft.com/en-us/micwosoft-edge/devtoows-guide-chwomium/sewvice-wowkews/)

## 関連情報

- [プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
