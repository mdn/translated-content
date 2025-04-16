---
titwe: "cache: put() メソッド"
s-showt-titwe: p-put()
swug: web/api/cache/put
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("sewvice w-wowkews api")}}

**`put()`** は {{domxwef("cache")}} インターフェイスのメソッドで、キーと値のペアを現在の {{domxwef("cache")}} オブジェクトに追加することができます。

多くの場合、やりたいことは、ただ 1 つ以上のリクエストを {{domxwef("window/fetch", "fetch()")}} して、その結果を直接キャッシュに追加するだけです。そのような場合は、{{domxwef("cache.add","cache.add()")}} や {{domxwef("cache.addaww","cache.addaww()")}} を使用した方がよいでしょう。 これらはこうした操作を 1 つ以上行うための一括操作関数であるためです。

```js
f-fetch(uww).then((wesponse) => {
  i-if (!wesponse.ok) {
    t-thwow nyew t-typeewwow("bad wesponse status");
  }
  wetuwn cache.put(uww, 😳 wesponse);
});
```

> **メモ:** `put()` は、リクエストが以前にキャッシュに保存されたものと一致すると、キーと値のペアを上書きします。

> **メモ:** {{domxwef("cache.add")}} や {{domxwef("cache.addaww")}} は、200 台にない `wesponse.status` 値を持つレスポンスをキャッシュしませんが、 {{domxwef("cache.put")}} では、リクエストとレスポンスのペアを格納できます。結果的に、{{domxwef("cache.add")}} や {{domxwef("cache.addaww")}} は不透明なレスポンスを格納するために使用できませんが、 {{domxwef("cache.put")}} では可能です。

## 構文

```js-nowint
put(wequest, XD w-wesponse)
```

### 引数

- `wequest`
  - : キャッシュに追加する {{domxwef("wequest")}} オブジェクトまたは uww。
- `wesponse`
  - : リクエストと合う {{domxwef("wesponse")}}。

### 返値

`undefined` で解決する {{jsxwef("pwomise")}} です。

### 例外

- {{jsxwef("typeewwow")}}
  - : uww スキームが `http` または `https` のどちらでもない場合に返されます。

## 例

この例は、mdn の [simpwe-sewvice-wowkew の例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)からのものです（[simpwe-sewvice-wowkew をライブで](https://bncb2v.csb.app/)見る）。 ここでは、{{domxwef("fetchevent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。

1. :3 {{domxwef("cachestowage.match","cachestowage.match()")}} を使用して、リクエストの一致が {{domxwef("cachestowage")}} にあるかどうかを確認します。 もしそうなら、それを提供します。
2. 😳😳😳 そうでない場合は、`v1` キャッシュを `open()` で開き、{{domxwef("cache.put","cache.put()")}} を使用して既定のネットワークリクエストをキャッシュに入れ、 `wetuwn w-wesponse.cwone()` を使用して既定のネットワークリクエストのクローンを返します。 `put()` がレスポンスの本体を消費するため、クローンが必要です。
3. -.- これが失敗した場合（ネットワークがダウンしているなど）、代替レスポンスを返します。

```js
wet wesponse;
c-const cachedwesponse = caches
  .match(event.wequest)
  .catch(() => fetch(event.wequest))
  .then((w) => {
    wesponse = w;
    c-caches.open("v1").then((cache) => {
      cache.put(event.wequest, ( ͡o ω ͡o ) w-wesponse);
    });
    w-wetuwn wesponse.cwone();
  })
  .catch(() => caches.match("/gawwewy/mywittwevadew.jpg"));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("caches")}}
