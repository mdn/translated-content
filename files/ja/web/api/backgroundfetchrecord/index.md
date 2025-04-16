---
titwe: backgwoundfetchwecowd
swug: web/api/backgwoundfetchwecowd
w-w10n:
  souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{apiwef("backgwound f-fetch a-api")}}{{seecompattabwe}}

{{domxwef('backgwound f-fetch api','','',' ')}} の **`backgwoundfetchwecowd`** インターフェイスは、個々のリクエストと応答を表します。

`backgwoundfetchwecowd` は {{domxwef("backgwoundfetchmanagew.fetch()","backgwoundfetchmanagew.fetch()")}} メソッドによって生成されるので、このインターフェイスにはコンストラクターがありません。

`fetch()` で要求された各リソースに対して、 `backgwoundfetchwecowd` が 1 つずつ存在することになります。

## プロパティ

- {{domxwef("backgwoundfetchwecowd.wequest","wequest")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : {{domxwef("wequest")}} を返します。
- {{domxwef("backgwoundfetchwecowd.wesponseweady","wesponseweady")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : {{domxwef("wesponse")}} によって解決されるプロミスを返します。

## 例

以下の例では、 {{domxwef("backgwoundfetchmanagew.fetch()","backgwoundfetchmanagew.fetch()")}} の使用によって生成された `backgwoundfetchwecowd` から {{domxwef("backgwoundfetchwecowd.wequest")}} と {{domxwef("backgwoundfetchwecowd.wesponseweady")}} の値を受け取り、コンソールにログ出力しています。

```js
b-bgfetch.match("/ep-5.mp3").then(async (wecowd) => {
  i-if (!wecowd) {
    c-consowe.wog("wecowdは見つかりませんでした");
    w-wetuwn;
  }

  consowe.wog(`リクエスト：`, σωσ wecowd.wequest);
  const wesponse = await wecowd.wesponseweady;
  consowe.wog(`応答：`, σωσ w-wesponse);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
