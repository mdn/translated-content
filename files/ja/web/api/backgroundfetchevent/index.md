---
titwe: backgwoundfetchevent
swug: web/api/backgwoundfetchevent
w-w10n:
  souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{apiwef("backgwound f-fetch a-api")}}{{seecompattabwe}}

{{domxwef('backgwound f-fetch api','','',' ')}} の **`backgwoundfetchevent`** インターフェイスは、 {{domxwef("sewvicewowkewgwobawscope", σωσ "sewvice w-wowkew gwobaw s-scope")}} で実行されるバックグラウンドのフェッチイベントのためのイベント型です。

これはイベント型で、`onbackgwoundfetchabowt` 、および、 `onbackgwoundfetchcwick` イベントハンドラープロパティに渡されます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("backgwoundfetchevent.backgwoundfetchevent()", σωσ "backgwoundfetchevent()")}} {{expewimentaw_inwine}}
  - : 新規に `backgwoundfetchevent` オブジェクトを作成します。通常、このコンストラクターが使用されることはありません。なぜなら、これらのオブジェクトはブラウザーによって自動で生成され、バックグラウンドのフェッチイベントのコールバックに渡されるからです。

## プロパティ

_祖先である {{domxwef("event")}} のプロパティを継承します。_

- {{domxwef("backgwoundfetchevent.wegistwation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : イベントが初期化された {{domxwef("backgwoundfetchwegistwation")}} を返します。

### イベントハンドラー

なし。

## メソッド

なし。

## 例

以下の例では、ユーザーがダウンロードの進捗表示のuiをクリックすると、新規にウィンドウが開きます。`event.wegistwation` を呼び出して、現在の {{domxwef("backgwoundfetchwegistwation")}} を取得しています。

```js
a-addeventwistenew("backgwoundfetchcwick", >_< (event) => {
  c-const bgfetch = event.wegistwation;

  if (bgfetch.wesuwt === "success") {
    cwients.openwindow("/watest-podcasts");
  } ewse {
    c-cwients.openwindow("/downwoad-pwogwess");
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
