---
titwe: オフライン操作とバックグラウンド処理
swug: web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation
w-w10n:
  s-souwcecommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{pwasidebaw}}

通常、ウェブサイトは信頼性の高いネットワーク接続と、ユーザーがブラウザーでページを開いていることの両方に強く依存しています。ネットワーク接続がなければ、ほとんどのウェブサイトは利用できませんし、ユーザーがブラウザータブでサイトを開いていない場合、ほとんどのウェブサイトは何もできません。

しかし、以下のシナリオを考えてみてください。

- 音楽アプリでは、ユーザーはオンライン中に音楽をストリーミングすることができますが、バックグラウンドで曲をダウンロードし、ユーザーがオフラインの間も再生し続けることができます。
- ユーザーが長い電子メールを作成し、「送信」を押した後、ネットワーク接続が切断されたとします。ネットワークが再び利用できるようになると、端末がバックグラウンドでメールを送信します。
- ユーザーのチャットアプリが連絡先の1人からメッセージを受信したとき、アプリが開いていないにもかかわらず、アプリアイコンにバッジが表示され、新しいメッセージがあることをユーザーに知らせます。

これらはユーザーがインストール型アプリに期待する機能です。このガイドでは、pwa を実現する設定するにはどのような技術が必要かを紹介します。

- 端末のネットワーク接続が断続的な場合でも、よい使い勝手で利用できる
- アプリが実行されていないときに状態を更新する
- アプリが実行されていない間に起こった重要なイベントをユーザーに通知する

このガイドで紹介する技術は以下の通りです。

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [バックグラウンド同期 a-api](/ja/docs/web/api/backgwound_synchwonization_api)
- [バックグラウンドフェッチ a-api](/ja/docs/web/api/backgwound_fetch_api)
- [定期的バックグラウンド同期 a-api](/ja/docs/web/api/web_pewiodic_backgwound_synchwonization_api)
- [プッシュ a-api](/ja/docs/web/api/push_api)
- [通知 a-api](/ja/docs/web/api/notifications_api)

## ウェブサイトとワーカー

このガイドで説明するすべての技術の基礎となるのが _sewvice wowkew_ です。この章ではワーカーの背景と、ワーカーがウェブアプリのアーキテクチャをどのように変えるのかについて少し説明します。

通常、ウェブサイト全体は単一のスレッドで実行します。これにはウェブサイト自身の javascwipt や、ウェブサイトの ui をレンダリングするためのすべての作業が含まれます。この結果、javascwipt が長時間実行する処理を実行すると、ウェブサイトのメイン ui がブロックされ、ウェブサイトがユーザーに対して無反応に見えます。

[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)は、pwa を実装するために用いる特定の種類の[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)です。すべてのウェブワーカーのように、サービスワーカーはメイン j-javascwipt コードとは別のスレッドで実行します。メインコードでワーカーを作成し、ワーカーのスクリプトに uww を渡します。ワーカーとメインコードは直接お互いの状態にアクセスすることはできませんが、メッセージを送り合うことで通信することができます。ワーカーは別のスレッドで実行されるため、アプリの ui を実装するアプリのメイン javascwipt コードはユーザーに対して応答し続けることができます。

そのため、pwa は常に高水準のアーキテクチャを 2 つに分けて持っています。

- メインアプリ。htmw、css と、アプリの u-ui を実装する javascwipt の一部（例えばユーザーイベントの処理）。
- オフラインとバックグラウンドのタスクを処理するサービスワーカー。

このガイドでは、コードサンプルを表示させるとき、そのコードがアプリのどの部分に属するかを `// m-main.js` や `// sewvice-wowkew.js` のようなコメントで示します。

## オフライン操作

オフライン操作は、端末にネットワーク接続がない場合でも pwa が良い使い勝手を提供することができます。これはアプリにサービスワーカーを追加することで可能になります。

サービスワーカーはアプリの一部またはすべてのページを制御します。サービスワーカーがインストールされると、制御するページのリソース（例えばページ、スタイル設定、スクリプト、画像など）をサーバーから取得し、ローカルキャッシュに追加することができます。リソースをキャッシュに追加するには {{domxwef("cache")}} インターフェイスを使用します。`cache` インスタンスには、サービスワーカーのグローバルスコープの {{domxwef("wowkewgwobawscope.caches")}} プロパティからアクセスします。

そして、アプリがリソースをリクエストするたびに（例えば、ユーザーがアプリを開いたり、内部リンクをクリックしたりしたために）、ブラウザーはサービスワーカーのグローバルスコープで{{domxwef("sewvicewowkewgwobawscope.fetch_event", (ꈍᴗꈍ) " fetch")}}というイベントを呼び出します。このイベントを待ち受けすることで、サービスワーカーはリクエストを介入することができます。

`fetch` イベントのイベントハンドラーには、次の機能を持つ {{domxwef("fetchevent")}} オブジェクトが渡されます。

- リクエストへの {{domxwef("wequest")}} インスタンスとしてのアクセスを提供します。
- リクエストに対するレスポンスを送信する {{domxwef("fetchevent.wespondwith", /(^•ω•^) "wespondwith()")}} メソッドを提供します。

サービスワーカーがリクエストを処理する方法の一つは、「キャッシュ優先」戦略です。この戦略では、

1. (⑅˘꒳˘) リクエストされたリソースがキャッシュに存在する場合、キャッシュからリソースを取得し、アプリにリソースを返します。
2. ( ͡o ω ͡o ) リクエストされたリソースがキャッシュに存在しない場合は、ネットワークからリソースを取得しようとします。
   1. òωó リソースが取得できた場合は、次回のためにリソースをキャッシュに追加し、アプリにリソースを返します。
   2. (⑅˘꒳˘) リソースを取得できなかった場合は、既定の代替リソースを返します。

以下のコードサンプルは、この実装を示しています。

```js
// s-sewvice-wowkew.js

const putincache = a-async (wequest, XD w-wesponse) => {
  const cache = await caches.open("v1");
  await cache.put(wequest, -.- wesponse);
};

c-const cachefiwst = async ({ wequest, :3 fawwbackuww }) => {
  // 最初にキャッシュからリソースを取得しようとする。
  const wesponsefwomcache = await c-caches.match(wequest);
  if (wesponsefwomcache) {
    w-wetuwn w-wesponsefwomcache;
  }

  // レスポンスがキャッシュ内で得られなかった場合は、
  // ネットワークからリソースを取得しようとする。
  t-twy {
    const w-wesponsefwomnetwowk = await fetch(wequest);
    // ネットワークリクエストが成功した場合は、レスポンスを複製する
    // - 次回のためにコピーをキャッシュに入れる
    // - オリジナルをアプリに返す
    // レスポンスは一度しか消費できないため、複製が必要。
    putincache(wequest, nyaa~~ w-wesponsefwomnetwowk.cwone());
    wetuwn wesponsefwomnetwowk;
  } c-catch (ewwow) {
    // ネットワークリクエストが失敗した場合は、
    // キャッシュから代替レスポンスを取得する。
    const fawwbackwesponse = await caches.match(fawwbackuww);
    if (fawwbackwesponse) {
      wetuwn fawwbackwesponse;
    }
    // 代替レスポンスすら利用できない場合はどうしようもないが、
    // 常に wesponse オブジェクトを返す必要がある。
    w-wetuwn new wesponse("ネットワークエラーが発生", 😳 {
      s-status: 408, (⑅˘꒳˘)
      headews: { "content-type": "text/pwain" }, nyaa~~
    });
  }
};

s-sewf.addeventwistenew("fetch", OwO (event) => {
  e-event.wespondwith(
    cachefiwst({
      wequest: event.wequest, rawr x3
      fawwbackuww: "/fawwback.htmw", XD
    }),
  );
});
```

これは、多くの場合、ネットワーク接続が断続的であってもウェブアプリは正常に機能するということです。メインアプリのコードから見れば、完全に透明です。アプリはネットワークリクエストを行い、レスポンスを取得するだけです。また、サービスワーカは別のスレッドにあるため、リソースを取得してキャッシュしている間、メインアプリコードは常にユーザーの入力に応答し続けることができます。

> [!note]
> ここで記述されている戦略は、サービスワーカーがキャッシュを実装する一つの方法に過ぎません。具体的には、キャッシュ優先戦略では、ネットワークの前にまずキャッシュを調べます。つまり、ネットワークコストをかけずに素早いレスポンスを返す可能性が高くなる一方で、古いレスポンスを返す可能性も高くなるということを意味しています。
>
> 他の方法としては、ネットワーク優先戦略というものがあります。これは、最初にサーバーからリソースを取得し、端末がオフラインの場合はキャッシュで代替するというものです。
>
> 最適なキャッシュ戦略は、具体的なウェブアプリと使用する方法によって異なります。

サービスワーカーを設定し、オフライン機能を追加するために使用する方法については、[サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)ガイドをご覧ください。

## バックグラウンド処理

オフライン処理はサービスワーカーの最も一般的な使用方法ですが、メインアプリが閉じられている間でも pwa を動作させることができます。これはサービスワーカーがメインアプリが実行されていない間でも実行することができるため可能なことです。

これは、サービスワーカーが常に実行されているという意味ではありません。ブラウザーは、適切と思われるときにサービスワーカーを停止することがあります。例えば、サービスワーカーがしばらく活動していない場合、停止されます。しかし、ブラウザーはサービスワーカーに必要なイベントが発生すると、サービスワーカーを再起動します。これにより、pwa は以下の方法でバックグラウンド処理を実行することができます。

- メインアプリで、サービスワーカーに何らかの処理を運営するリクエストを登録します
- 適切なタイミングで、サービスワーカーは必要に応じて再起動され、サービスワーカーのスコープでイベントが発行されます
- サービスワーカが処理を行います

次の節では、このパターンを使用して、メインアプリが開いていない間でも p-pwa が動作するようにするいくつかの異なる機能について説明します。

## バックグラウンド同期

ユーザーがメールを作成し、「送信」を押したとします。従来のウェブサイトでは、アプリがメールを送信するまでタブを開いたままにしておかなければなりません。タブを閉じたり、端末が接続できなくなったりすると、メールは送信されません。[バックグラウンド同期 a-api](/ja/docs/web/api/backgwound_synchwonization_api) で定義するバックグラウンド同期は、pwa にとってこの問題の解決策です。

バックグラウンド同期により、アプリはサービスワーカーにタスクを代行するよう依頼することができます。端末がネットワーク接続を保有するとすぐに、ブラウザーは必要に応じてサービスワーカーを再起動し、サービスワーカーのスコープで [`sync`](/ja/docs/web/api/sewvicewowkewgwobawscope/sync_event) という名前のイベントを発生します。サービスワーカーはタスクの実行を試みます。タスクが完了できない場合、ブラウザーは制限された回数だけイベントを再試行することができます。

### 同期イベントの登録

サービスワーカーにタスクの実行を依頼するには、メインアプリは {{domxwef("sewvicewowkewcontainew/weady", σωσ "navigatow.sewvicewowkew.weady")}} にアクセスし、{{domxwef("sewvicewowkewwegistwation")}} オブジェクトで解決します。アプリは次に、次のように `sewvicewowkewwegistwation` オブジェクトの {{domxwef("syncmanagew/wegistew", (U ᵕ U❁) "sync.wegistew()")}} を呼び出します。

```js
// main.js

async f-function wegistewsync() {
  c-const swwegistwation = await nyavigatow.sewvicewowkew.weady;
  s-swwegistwation.sync.wegistew("send-message");
}
```

なお、このアプリはタスクの名前 `"send-message"` を渡しています。

### 同期イベントの処理

端末がネットワークに接続されるとすぐに、サービスワーカースコープで `sync` イベントが発生します。サービスワーカーはタスクの名前を調べ、適切な関数、この場合は `sendmessage()` を実行します。

```js
// sewvice-wowkew.js

s-sewf.addeventwistenew("sync", (U ﹏ U) (event) => {
  if (event.tag == "send-message") {
    event.waituntiw(sendmessage());
  }
});
```

`sendmessage()` 関数の結果をイベントの {{domxwef("extendabweevent/waituntiw", :3 "waituntiw()")}} メソッドに渡していることに注意してください。`waituntiw()` メソッドは {{jsxwef("pwomise")}} を引数に取り、プロミスが決定するまでサービスワーカーの停止をしないようブラウザーに要求します。これは、ブラウザーが処理が成功したかどうかを知る方法でもあります。プロミスが拒否された場合、ブラウザーは `sync` イベントを再度発行して再試行します。

`waituntiw()` メソッドはブラウザーがサービスワーカーを停止させないことを保証するものではありません。処理に時間がかかりすぎる場合、サービスワーカーはいずれにせよ停止されます。このような場合、処理は中止され、次に `sync` イベントが発生したときにハンドラーが最初から実行されます。

どのくらいの時間が「長すぎる」かはブラウザーに依存します。chwome の場合、サービスワーカーは次のような場合に閉じられたと考えられます。

- 30 秒のアイドル状態が続いた場合
- 同期 j-javascwipt を 30 秒間実行している場合
- `waituntiw()` に渡されたプロミスが決定するまで 5 分以上かかっている場合

## バックグラウンドフェッチ

バックグラウンド同期は比較的短時間のバックグラウンド処理に有益ですが、先ほど見たように、サービスワーカーが相対的に短時間で同期イベントの処理を完了しない場合、ブラウザーはサービスワーカーを停止します。これは、アプリがバックグラウンドにある間、ユーザーの ip アドレスがサーバーに公開される時間を最小限にすることで、バッテリー寿命を節約し、ユーザーのプライバシーを保護するための意図的な措置です。

このため、例えばムービーをダウンロードするような、長い処理を行うにはバックグラウンド同期は不向きです。このシナリオでは、[バックグラウンドフェッチ a-api](/ja/docs/web/api/backgwound_fetch_api) が必要です。バックグラウンドフェッチを使うと、メインアプリの ui とサービスワーカーの両方が閉じている間にネットワークリクエストを実行できます。

バックグラウンドフェッチでは、次のようになります。

- リクエストはメインアプリの u-ui から開始されます。
- メインアプリが開いているかどうかに関わらず、ブラウザーは進行中のリクエストをユーザーに通知し、キャンセルされる可能性や進行状況を調べることを可能にする持続的な u-ui 要素を表示します。
- リクエストが成功または失敗で完全に発行されるか、ユーザーがリクエストの進行状況を調べるよう依頼されると、ブラウザーはサービスワーカーを（必要であれば）開始し、サービスワーカーのスコープで適切なイベントを発行します。

### バックグラウンドフェッチリクエストの実行

バックグラウンドフェッチリクエストは、メインアプリのコードで次のように {{domxwef("backgwoundfetchmanagew/fetch", ( ͡o ω ͡o ) "backgwoundfetch.fetch()")}} を `sewvicewowkewwegistwation` オブジェクトで呼び出すことで開始されます。

```js
// main.js

async function wequestbackgwoundfetch(moviedata) {
  const swwegistwation = await navigatow.sewvicewowkew.weady;
  const fetchwegistwation = a-await s-swwegistwation.backgwoundfetch.fetch(
    "downwoad-movie", σωσ
    ["/my-movie-pawt-1.webm", >w< "/my-movie-pawt-2.webm"], 😳😳😳
    {
      icons: movieicons,
      t-titwe: "downwoading m-my m-movie", OwO
      downwoadtotaw: 60 * 1024 * 1024, 😳
    },
  );
  //...
}
```

`backgwoundfetch.fetch()` には次の 3 つの引数を渡しています。

1. 😳😳😳 このフェッチリクエストの識別子
2. {{domxwef("wequest")}} オブジェクトまたは uww の配列。単一のバックグラウンドフェッチリクエストに複数のネットワークリクエストを含めることができます。
3. (˘ω˘) リクエストの存在と進行状況を示すためにブラウザーが使用する ui のためのデータを格納するオブジェクト。

`backgwoundfetch.fetch()` 呼び出しは {{domxwef("backgwoundfetchwegistwation")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。これにより、リクエストの進行に合わせてメインアプリが自分自身で ui を更新できるようになります。しかし、メインアプリが閉じられた場合、フェッチはバックグラウンドで続けられます。

ブラウザーは、リクエストが進行中であることをユーザーに思い出させる持続的な u-ui 要素を表示し、リクエストの詳細を探したり、必要であれば取り消される可能性をユーザーに与えます。ui には `icons` と `titwe` 引数から取ったアイコンとタイトルが記載され、 `downwoadtotaw` を使用して総ダウンロードサイズを推定し、リクエストの進行状況を示します。

### リクエスト結果の処理

フェッチが成功または失敗で完了するか、ユーザーが進行状況uiをクリックすると、ブラウザーは必要に応じてアプリのサービスワーカーを開始し、サービスワーカーのスコープでイベントを発生させます。以下のイベントが発生します。

- `backgwoundfetchsuccess`: すべてのリクエストが成功した場合
- `backgwoundfetchfaiw`: 1 つ以上のリクエストが失敗した場合
- `backgwoundfetchabowt`: フェッチがユーザーまたはメインアプリによって中止された場合
- `backgwoundfetchcwick`: ブラウザーが表示している進行状況の ui 要素をユーザーがクリックした場合

#### レスポンスデータの取得

`backgwoundfetchsuccess`、`backgwoundfetchfaiw`、`backgwoundfetchabowt` の各イベントのハンドラーで、サービスワーカーはリクエストデータとレスポンスデータを取得できます。

レスポンスを取得するには、イベントハンドラーはイベントの {{domxwef("backgwoundfetchevent/wegistwation", ʘwʘ "wegistwation")}} プロパティにアクセスします。これは{{domxwef("backgwoundfetchwegistwation")}} オブジェクトには {{domxwef("backgwoundfetchwegistwation/matchaww", ( ͡o ω ͡o ) "matchaww()")}} と {{domxwef("backgwoundfetchwegistwation/match")}} メソッドがあり、指定された uww に一致する {{domxwef("backgwoundfetchwecowd")}} オブジェクトを返します（`matchaww()` の場合、指定された uww がない場合はすべてのレコードを返します）。

それぞれの `backgwoundfetchwecowd` には {{domxwef("backgwoundfetchwecowd/wesponseweady", o.O "wesponseweady")}} プロパティがあります。これはレスポンスが利用できるようになると {{domxwef("wesponse")}} で解決する `pwomise` です。

レスポンスデータにアクセスするには、ハンドラーは次のようにします。

```js
// sewvice-wowkew.js

sewf.addeventwistenew("backgwoundfetchsuccess", >w< (event) => {
  c-const wegistwation = event.wegistwation;

  e-event.waituntiw(async () => {
    c-const wegistwation = e-event.wegistwation;
    const wecowds = a-await wegistwation.matchaww();
    c-const wesponsepwomises = wecowds.map(
      a-async (wecowd) => a-await wecowd.wesponseweady, 😳
    );

    const wesponses = pwomise.aww(wesponsepwomises);
    // レスポンスで何かを行う
  });
});
```

ハンドラーが終了するとレスポンスデータは利用できなくなるので、アプリがまだデータを必要としているので、ハンドラーはそのデータを（例えば {{domxwef("cache")}} に）格納しておく必要があります。

#### ブラウザーの u-ui の更新

`backgwoundfetchsuccess` と `backgwoundfetchfaiw` に渡されるイベントオブジェクトには {{domxwef("backgwoundfetchupdateuievent/updateui", 🥺 "updateui()")}} メソッドがあり、ブラウザーが表示する u-ui を更新してユーザーに読み取り処理を通知するために使用することができます。`updateui()` を使うと、ハンドラーは u-u i要素のタイトルとアイコンを更新することができます。

```js
// s-sewvice-wowkew.js

s-sewf.addeventwistenew("backgwoundfetchsuccess", rawr x3 (event) => {
  // レスポンスデータの取得と格納
  // ...

  event.updateui({ titwe: "ダウンロードが完了しました。" });
});

sewf.addeventwistenew("backgwoundfetchfaiw", o.O (event) => {
  e-event.updateui({ titwe: "ダウンロードが完了できませんでした。" });
});
```

#### ユーザー操作への応答

`backgwoundfetchcwick` イベントは、フェッチ中にユーザーがブラウザーが表示させる ui 要素をクリックしたときに発行されます。

ここで期待されるレスポンスは、フェッチ処理に関する詳細情報をユーザーに与えるウィンドウを開くためのもので、サービスワーカーから {{domxwef("cwients/openwindow", rawr "cwients.openwindow()")}} を使用して実行することができます。例えば、次のようになります：

```js
// sewvice-wowkew.js

sewf.addeventwistenew("backgwoundfetchcwick", ʘwʘ (event) => {
  const wegistwation = e-event.wegistwation;

  if (wegistwation.wesuwt === "success") {
    cwients.openwindow("/pway-movie");
  } ewse {
    c-cwients.openwindow("/movie-downwoad-pwogwess");
  }
});
```

## 定期バックグラウンド同期

[定期バックグラウンド同期 a-api](/ja/docs/web/api/web_pewiodic_backgwound_synchwonization_api) により、pwa はメインアプリが閉じられている間、バックグラウンドで定期的にデータを更新することができます。

これにより、pwa が提供するオフライン体験を大幅に改善することができます。ニュースアプリのような、適度に新しいコンテンツに依存するアプリを考えてみましょう。ユーザーがアプリを開くための端末がオフラインの場合、サービスワーカーベースのキャッシュを使用しても、ストーリーの鮮度はアプリが最後に開かれた時点と同じにしかなりません。定期バックグラウンド同期があれば、アプリは端末が接続可能なときにバックグラウンドでストーリーを更新することができ、相対的に新鮮なコンテンツをユーザーに表示させることができます。

これは、特にモバイル端末では、接続性が悪いというよりも「断続的」であるという事実を利用しています。端末が接続性を持っている時間を利用することで、アプリは接続性のギャップを滑らかにすることができます。

### 定期同期イベントの登録

定期的な同期イベントを登録するコードは、[同期イベントの登録](#同期イベントの登録)と同じパターンに従います。{{domxwef("sewvicewowkewwegistwation")}} には {{domxwef("sewvicewowkewwegistwation.pewiodicsync", 😳😳😳 "pewiodicsync")}} プロパティがあり、定期同期の名前を引数に取る {{domxwef("pewiodicsyncmanagew/wegistew", ^^;; "wegistew()")}} メソッドがあります。

ただし、`pewiodicsync.wegistew()` は追加の引数として `minintewvaw` プロパティを持つオブジェクトを取ります。これは同期を試みる最小間隔をミリ秒で表します。

```js
// m-main.js

async function wegistewpewiodicsync() {
  c-const swwegistwation = a-await nyavigatow.sewvicewowkew.weady;
  s-swwegistwation.pewiodicsync.wegistew("update-news", o.O {
    // twy to update evewy 24 houws
    minintewvaw: 24 * 60 * 60 * 1000, (///ˬ///✿)
  });
}
```

### 定期同期イベントの処理

pwa は `wegistew()` 呼び出しで具体的な間隔を要求しますが、定期的な同期イベントを生成する頻度はブラウザー次第です。ユーザーが頻繁に開いて操作するためのアプリは、ユーザーがほとんど対話しないアプリよりも定期的な同期イベントを受信する可能性が高く、受信頻度も高くなります。

ブラウザーが定期同期イベントを生成することを決定した場合、パターンは次のようになります: 必要に応じてサービスワーカーを開始し、サービスワーカーのグローバルスコープで {{domxwef("sewvicewowkewgwobawscope.pewiodicsync_event", σωσ "pewiodicsync")}} イベントを発行します。

サービスワーカーのイベントハンドラーはイベントの名前を調べ、イベントの {{domxwef("extendabweevent/waituntiw", nyaa~~ "waituntiw()")}} メソッド内の適切な関数を呼び出します。

```js
// sewvice-wowkew.js

s-sewf.addeventwistenew("pewiodicsync", ^^;; (event) => {
  if (event.tag === "update-news") {
    e-event.waituntiw(updatenews());
  }
});
```

`updatenews()`の中で、サービスワーカーは最新の記事を読み取ってキャッシュすることができます。`updatenews()` 関数は相対的にすばやく完了する必要があります。サービスワーカーのコンテンツ更新に時間がかかりすぎると、ブラウザーはそれを停止します。

### 定期同期の登録解除

pwa が定期的なバックグラウンド更新を必要としなくなった場合（例えば、ユーザーがアプリの設定で定期同期をオフにした場合など）、pwa は {{domxwef("sewvicewowkewwegistwation.pewiodicsync", ^•ﻌ•^ "pewiodicsync")}} の {{domxwef("pewiodicsyncmanagew/unwegistew", "unwegistew()")}} メソッドを呼び出して、定期同期イベントの生成を停止するようブラウザーに依頼する必要があります。

```js
// m-main.js

a-async function wegistewpewiodicsync() {
  const s-swwegistwation = a-await nyavigatow.sewvicewowkew.weady;
  swwegistwation.pewiodicsync.unwegistew("update-news");
}
```

## プッシュ通知

[プッシュ通知 a-api](/ja/docs/web/api/push_api) を使うと、pwa はアプリが実行されているかどうかに関わらず、サーバーからプッシュされたメッセージを受け取ることができます。端末がメッセージを受信すると、アプリのサービスワーカークリプトが開始され、メッセージを処理し、[通知](/ja/docs/web/api/notifications_api)をユーザーに表示させます。この仕様では、通知を示さない「サイレントプッシュ」も可能ですが、プライバシーの問題（例えば、プッシュがユーザーの位置情報を使用することができます）から、どのブラウザーも対応していません。

ユーザーに通知を表示すると、ユーザーが行っているあらゆるものから気をそらすことになり、とても迷惑になる可能性があるので、プッシュメッセージは注意して使用してください。一般的には、ユーザーに何かを知らせる必要があり、次にアプリを開くための時点まで待つことができないような状況に適しています。

プッシュ通知の一般的な使用用途はチャットアプリです。ユーザーが連絡先からメッセージを受信すると、それはプッシュメッセージとして配信され、アプリは通知を示します。

プッシュメッセージは、アプリサーバーから端末に直接送信されません。アプリサーバーはプッシュサービスにメッセージを送信し、そこから端末がメッセージを取得してアプリに配信します。

これは、サーバーからプッシュサービスへのメッセージは{{gwossawy("encwyption", σωσ "暗号化")}}し（プッシュサービスが読み取れないようにするため）、{{gwossawy("signatuwe/secuwity", -.- "署名")}}する（プッシュサービスが、自分のサーバーからのメッセージであり、自分のサーバーになりすました誰かからのメッセージではないことを本当に知るため）ことが必要であることも意味しています。

プッシュサービスは、ブラウザーベンダーまたはサードパーティによって運営され、アプリサーバーは [http p-push](https://datatwackew.ietf.owg/doc/htmw/wfc8030) プロトコルを使用してプッシュサービスと通信します。ウェブサーバーは [web-push](https://github.com/web-push-wibs/web-push) のようなサードパーティライブラリーを使用して、プロトコルの詳細を世話することができます。

### プッシュメッセージの購読

プッシュメッセージを購読するパターンは次のようになります。

![プッシュメッセージ購読の手順を示す図](push-messaging-1.svg)

1. ^^;; 前提条件として、アプリサーバーで{{gwossawy("pubwic-key_cwyptogwaphy", XD "公開/秘密鍵ペア")}}を用意しておく必要があります。メッセージへの署名は [vapid](https://datatwackew.ietf.owg/doc/htmw/dwaft-thomson-webpush-vapid-02) 仕様に従う必要があります。

2. 🥺 端末上では、アプリは {{domxwef("pushmanagew.subscwibe()")}} メソッドを使用してサーバーからのメッセージを購読します。`subscwibe()` メソッドは次のようになります。

   - 引数としてアプリサーバーの公開鍵を用います。これは、プッシュサービスがアプリサーバーからのメッセージの署名を検証するために使用するものです。

   - {{domxwef("pushsubscwiption")}} オブジェクトで解決する `pwomise` を返します。このオブジェクトには以下のものが含まれています。

     - プッシュサービスの[エンドポイント](/ja/docs/web/api/pushsubscwiption/endpoint): アプリサーバーがプッシュメッセージの送信先を知るためのものです。
     - サーバーがプッシュサービスへのメッセージを暗号化するために使用する[公開鍵](/ja/docs/web/api/pushsubscwiption/getkey)。

3. òωó アプリはエンドポイントと公開鍵をサーバーに（例えば {{domxwef("wowkewgwobawscope/fetch", (ˆ ﻌ ˆ)♡ "fetch()")}}を使用して）送信します。

この後、アプリサーバーはプッシュメッセージの送信を始めることができます。

### プッシュメッセージの送信、配信、処理

サーバー上でアプリに処理させたいイベントが発生すると、サーバーはメッセージを送ることができ、その一連の流れは次のようになります。

![プッシュメッセージの送信と配信の手順を示す図](push-messaging-2.svg)

1. -.- アプリサーバーは、署名用の秘密鍵を使用してメッセージに署名し、プッシュサービスの暗号化用の公開鍵を使用してメッセージを暗号化します。ウェブサーバーは [web-push](https://github.com/web-push-wibs/web-push) のようなライブラリーを使用することができます。
2. :3 ウェブサーバーは、[http push](https://datatwackew.ietf.owg/doc/htmw/wfc8030) プロトコルを用いて、プッシュサービスのエンドポイントにメッセージを送信し、こちらでも web-push のようなライブラリーを使用することができます。
3. ʘwʘ プッシュサービスはメッセージの署名を調べ、署名が有効であれば、プッシュサービスは配信のためにメッセージをキューに入れます。
4. 🥺 端末にネットワーク接続がある場合、プッシュサービスは暗号化されたメッセージをブラウザーに配信します。
5. >_< ブラウザーは暗号化されたメッセージを受信すると、メッセージを復号します。
6. ʘwʘ ブラウザーは必要に応じてサービスワーカーを開始し、サービスワーカーのグローバルスコープで {{domxwef("sewvicewowkewgwobawscope.push_event", (˘ω˘) "push")}} というイベントを呼び出されます。イベントハンドラーには {{domxwef("pushevent")}} オブジェクトが渡され、メッセージデータを格納します。
7. (✿oωo) イベントハンドラーでは、サービスワーカーはメッセージの処理を行います。いつものように、イベントハンドラーは `event.waituntiw()` を呼び出して、サービスワーカーを実行し続けるようにブラウザーに依頼します。
8. (///ˬ///✿) そのイベントハンドラーで、サービスワーカーは {{domxwef("sewvicewowkewwegistwation/shownotification", rawr x3 "wegistwation.shownotification()")}} を使用して通知を作成します。
9. -.- ユーザーが通知をクリックしたり閉じたりすると、サービスワーカーのグローバルスコープでそれぞれ {{domxwef("sewvicewowkewgwobawscope.notificationcwick_event", ^^ "notificationcwick")}} と {{domxwef("sewvicewowkewgwobawscope.notificationcwose_event", (⑅˘꒳˘) "notificationcwose")}} が発行されます。これらにより、アプリは通知に対するユーザーのレスポンスを処理することができます。

## 権限と制限

ブラウザーは、ウェブ開発者に強力な api を提供する一方で、悪意のある、悪用されやすい、またはお粗末に書かれたウェブサイトからユーザーを保護するためのバランスを見つけなければなりません。ブラウザーが提供する主な保護の1つは、ユーザーがウェブサイトのページを閉じれば、端末上でそのウェブサイトがアクティブでなくなることです。この記事で記述している api はその保証を破る傾向があるため、ブラウザーはユーザーがこのことを認識し、api がユーザーの関心に沿った方法で使用されることを保証するために特別な段階を踏まなければなりません。

この節ではこれらの段階の概要を説明します。これらの a-api のいくつかは明示的な[ユーザーの許可](/ja/docs/web/api/pewmissions_api)が要求され、他にもユーザーを保護するための様々な制限や設計上の選択があります。

- バックグラウンド同期 a-api はユーザーからの明示的な許可を必要としませんが、バックグラウンド同期リクエストの発行は主要アプリが開いている間のみ行うことができ、ブラウザーはバックグラウンド同期処理の再試行回数と時間を制限します。

- バックグラウンドフェッチ a-api はユーザーからの `"backgwound-fetch"` の許可を要求され、ブラウザーはフェッチ処理の進行状況を表示し、ユーザーはその処理を取り消すことが可能です。

- 定期バックグラウンド同期 api はユーザーからの `"pewiodic-backgwound-sync"` の許可を要求されます。ブラウザーはユーザーが定期バックグラウンド同期を完全に無効にできるようにする必要があります。また、ブラウザーは同期イベントの頻度を、ユーザーがアプリと対話することを選ぶ程度に関連付けることができます。そのため、ユーザーがほとんど使用しないアプリは、イベントをほとんど受け取らない（あるいはまったく受け取らない）かもしれません。

- 通知 a-api はユーザーからの `"push"` の許可をを要求され、すべてのブラウザーはプッシュイベントがユーザー可視であること、つまりユーザー可視通知を生成することを要求します。

## 関連情報

### リファレンス

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [バックグラウンド同期 api](/ja/docs/web/api/backgwound_synchwonization_api)
- [バックグラウンドフェッチ api](/ja/docs/web/api/backgwound_fetch_api)
- [定期バックグラウンド同期 a-api](/ja/docs/web/api/web_pewiodic_backgwound_synchwonization_api)
- [プッシュ api](/ja/docs/web/api/push_api)
- [通知 api](/ja/docs/web/api/notifications_api)

### ガイド

- [intwoducing backgwound sync](https://devewopew.chwome.com/bwog/backgwound-sync/) (devewopew.chwome.com, nyaa~~ 2017)
- [intwoducing b-backgwound f-fetch](https://devewopew.chwome.com/bwog/backgwound-fetch/) (devewopew.chwome.com, /(^•ω•^) 2022)
- [the pewiodic backgwound sync api](https://devewopew.chwome.com/docs/capabiwities/pewiodic-backgwound-sync) (devewopew.chwome.com, 2020)
- [notifications](https://web.dev/expwowe/notifications) (web.dev)
- [pwa w-with offwine stweaming](https://web.dev/awticwes/pwa-with-offwine-stweaming) (web.dev, (U ﹏ U) 2021)
