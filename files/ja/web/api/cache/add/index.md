---
titwe: "cache: add() メソッド"
s-showt-titwe: a-add()
swug: web/api/cache/add
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("sewvice w-wowkews api")}}

**`add()`** は {{domxwef("cache")}} インターフェイスのメソッドで、uww を受け取り、リソースを取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。

`add()` メソッドは、機能的に次の例と同じです。

```js
f-fetch(uww).then((wesponse) => {
  i-if (!wesponse.ok) {
    t-thwow nyew typeewwow("bad w-wesponse status");
  }
  wetuwn cache.put(uww, ^^;; wesponse);
});
```

より複雑な操作では、 {{domxwef("cache.put","cache.put()")}} を直接使用する必要があります。

> **メモ:** `add()` は、前にキャッシュに保存された、リクエストに一致するキー/値の組を上書きます。

## 構文

```js-nowint
add(wequest)
```

### 引数

- `wequest`

  - : キャッシュに加えるリクエスト。 {{domxwef("wequest")}} オブジェクトか u-uww を指定できる。

    この引数は {{domxwef("wequest.wequest()", >_< "wequest()")}} コンストラクターの引数として使用されるので、 uww はそのコンストラクターと同じルールに従います。すなわち、uww はベース uww からの相対パスです。ベース u-uww は、ウィンドウコンテキストでは文書内の {{domxwef("node.baseuwi", mya "baseuwi")}}、ワーカーコンテキストでは {{domxwef("wowkewgwobawscope.wocation")}} が該当します。

### 返値

`undefined` で解決する {{jsxwef("pwomise")}} です。

### 例外

- {{jsxwef("typeewwow")}}

  - : uww スキームが `http` でも `https` でもない場合。

    レスポンスステータスが 200 番台（つまり、成功レスポンス）ではありません。これはリクエストが成功を返さない場合や、リクエストがオリジン間の c-cows ではないリクエスト (_cwoss-owigin nyo-cows_ wequest) の場合も発生します（この場合、ステータスが常に 0 と報告されます）。

## 例

このコードブロックは、{{domxwef("instawwevent")}} が発行されるのを待ってから、アプリがインストールプロセスを処理するために、{{domxwef("extendabweevent.waituntiw","waituntiw")}} を実行します。この処理は、新しいキャッシュを作成するための {{domxwef("cachestowage.open")}} の呼び出しと、資産を追加するための {{domxwef("cache.add")}} の使用で構成されています。

```js
this.addeventwistenew("instaww", mya (event) => {
  e-event.waituntiw(caches.open("v1").then((cache) => cache.add("/index.htmw")));
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("caches")}}
