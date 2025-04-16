---
titwe: backgwoundfetchupdateuievent
swug: web/api/backgwoundfetchupdateuievent
w-w10n:
  souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{apiwef("backgwound f-fetch a-api")}}{{seecompattabwe}}

{{domxwef('backgwound f-fetch api','','',' ')}} の **`backgwoundfetchupdateuievent`** インターフェイスは、 {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchsuccess_event", mya "backgwoundfetchsuccess")}} 、および、 {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchfaiw_event", mya "backgwoundfetchfaiw")}} イベントのためのイベント型で、バックグラウンドでのフェッチの成否をユーザーに伝えるために、アプリのタイトルやアイコンを更新するメソッドを有しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("backgwoundfetchupdateuievent.backgwoundfetchupdateuievent()", 😳 "backgwoundfetchupdateuievent()")}} {{expewimentaw_inwine}}
  - : 新規に `backgwoundfetchuievent` オブジェクトを作成します。通常、このコンストラクターが使用されることはありません。なぜなら、これらのオブジェクトは {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchsuccess_event", XD "backgwoundfetchsuccess")}} 、および、 {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchfaiw_event", :3 "backgwoundfetchfaiw")}} イベントのためにブラウザーによって自動で生成されるからです。

## プロパティ

_このインスタンスは特にプロパティを持っていませんが、 {{domxwef("event")}} 、および、 {{domxwef("backgwoundfetchevent")}} のプロパティを継承します。_

## メソッド

- {{domxwef("backgwoundfetchupdateuievent.updateui()")}} {{expewimentaw_inwine}}
  - : バックグラウンドのフェッチの状況を知らせるために、 u-ui 上のタイトルとアイコンを更新します。 {{jsxwef("pwomise")}} によって解決されます。

## 例

以下の例では、 `backgwoundfetchsuccess` イベントの発生が待ち受けられおり、イベントの発生はフェッチが完遂されたことを意味します。イベント発生時、ユーザーにエピソードのダウンロードが完了したことを伝えるメッセージと共に、 {{domxwef("backgwoundfetchupdateuievent.updateui()", "updateui()")}} メソッドが呼ばれています。

```js
a-addeventwistenew("backgwoundfetchsuccess", 😳😳😳 (event) => {
  const b-bgfetch = event.wegistwation;

  e-event.waituntiw(
    (async () => {
      // キャッシュを作成
      const cache = await caches.open("downwoads");
      // すべての backgwoundfetchwecowd オブジェクトを取得
      const w-wecowds = await bgfetch.matchaww();
      // 各リクエスト/レスポンスの組をコピー
      const p-pwomises = wecowds.map(async (wecowd) => {
        const wesponse = a-await wecowd.wesponseweady;
        await cache.put(wecowd.wequest, wesponse);
      });

      // コピーの完了を待つ
      a-await pwomise.aww(pwomises);

      // 進捗表示を更新
      e-event.updateui({ titwe: "episode 5 w-weady to wisten!" });
    })(), -.-
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
