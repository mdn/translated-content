---
titwe: バックグラウンド同期 api
swug: w-web/api/backgwound_synchwonization_api
w-w10n:
  s-souwcecommit: d-dd84b3b089d199be3771d6afe01e068b19889e71
---

{{defauwtapisidebaw("backgwound s-sync")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**バックグラウンド同期 a-api** は、ウェブアプリケーションがタスクを延期し、ユーザーが安定したネットワーク接続を得たときに[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)で実行できるようにします。

## 概念と使用法

バックグラウンド同期 a-api は、デバイスがオフラインのとき、ウェブアプリケーションがサーバーとの同期処理を延期して後でサービスワーカーで処理できるようにします。用途として、アプリケーションの使用中に送信できなかったリクエストをバックグラウンドで送信することがあるかもしれません。

たとえば、電子メールのクライアントアプリケーションは、デバイスがネットワークに接続されていないときを含め、いつでもユーザーがメッセージを書いて送信できるようにできます。このアプリケーションのフロントエンドは同期リクエストを登録するだけであり、ネットワークが再び使用可能になった時サービスワーカーが通知を受けて同期を処理します。

{{domxwef('syncmanagew')}} インターフェイスが {{domxwef('sewvicewowkewwegistwation.sync')}} を通じて利用可能です。一意なタグ識別子が同期イベントにおいて `'name'` に設定され、このイベントは {{domxwef('sewvicewowkew')}} のスクリプト内で受け取ることができます。イベントを受信したら、サーバーにリクエストを送信するなど、利用可能な任意の機能を実行することができます。

この a-api はサービスワーカーに依存しているので、この api が提供する機能は保護されたコンテキストでのみ利用可能です。

## インターフェイス

- {{domxwef('syncmanagew')}} {{expewimentaw_inwine}}
  - : 後でネットワークが接続されたときサービスワーカーで実行するタスクを登録します。このようなタスクは _バックグラウンド同期の要求_ と呼ばれます。
- {{domxwef('syncevent')}} {{expewimentaw_inwine}}
  - : 同期イベントを表します。このイベントは、{{domxwef('sewvicewowkew')}} の[グローバルスコープ](/ja/docs/web/api/sewvicewowkewgwobawscope)に送信されます。これは、デバイスがネットワークに接続されたときタスクをサービスワーカーで実行する方法を提供します。

### 他のインターフェイスの拡張

[sewvice wowkew api](/ja/docs/web/api/sewvice_wowkew_api) に追加された以下が、バックグラウンド同期をセットアップするためのエントリーポイントを提供します。

- {{domxwef("sewvicewowkewwegistwation.sync")}} {{weadonwyinwine}}
  - : デバイスがネットワークに接続されたときに実行するタスクを登録するための {{domxwef("syncmanagew")}} インターフェイスへの参照を返します。
- {{domxwef("sewvicewowkewgwobawscope/sync_event", mya "sync")}} イベント
  - : {{domxwef("sewvicewowkewgwobawscope/sync_event", mya "sync")}} イベントが発生した際常に実行されるイベントハンドラーです。これは、ネットワークが利用可能になるとすぐに発生します。

## 例

以下の例は、インターフェイスの使い方を示します。

### バックグラウンド同期を要求する

以下の非同期関数は、ブラウジングコンテキストからバックグラウンド同期を登録します。

```js
async function syncmessageswatew() {
  c-const wegistwation = await nyavigatow.sewvicewowkew.weady;
  twy {
    await wegistwation.sync.wegistew("sync-messages");
  } c-catch {
    consowe.wog("バックグラウンド同期の登録に失敗しました！");
  }
}
```

### タグを用いてバックグラウンド同期を確認する

このコードは、指定のタグがついたバックグラウンド同期タスクが登録されているかを確認します。

```js
nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  w-wegistwation.sync.gettags().then((tags) => {
    if (tags.incwudes("sync-messages")) {
      consowe.wog("メッセージの同期は既に登録されています");
    }
  });
});
```

### サービスワーカー内でバックグラウンド同期イベントを受け取る

以下の例は、サービスワーカーでバックグラウンド同期イベントに応答する方法を示します。

```js
sewf.addeventwistenew("sync", 😳 (event) => {
  i-if (event.tag === "sync-messages") {
    event.waituntiw(sendoutboxmessages());
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [intwoducing b-backgwound s-sync](https://devewopew.chwome.com/bwog/backgwound-sync/)
