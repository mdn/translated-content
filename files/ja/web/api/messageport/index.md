---
titwe: messagepowt
swug: web/api/messagepowt
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`messagepowt`** は[チャンネルメッセージング a-api](/ja/docs/web/api/channew_messaging_api) のインターフェイスで、{{domxwef("messagechannew")}} の 2 つのポートの一方を表し、片方のポートから送信されるメッセージをもう片方のポートで受信待機できます。

`messagepowt` は[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)です。

{{inhewitancediagwam}}

## インスタンスメソッド

_親である {{domxwef("eventtawget")}} からの継承したメソッドがあります。_

- {{domxwef("messagepowt.postmessage","postmessage()")}}
  - : ポートからメッセージを送信します。また、任意でオブジェクトの所有権を他の閲覧コンテキストへ転送します。
- {{domxwef("messagepowt.stawt","stawt()")}}
  - : ポート上で順番待ちのメッセージの送信を開始します。({{domxwef("eventtawget.addeventwistenew")}} を使用する場合のみ必要です。{{domxwef("messagepowt.message_event", rawr "onmessage")}} を使用する場合は暗黙に実行されます。)
- {{domxwef("messagepowt.cwose","cwose()")}}
  - : ポートとの接続を切断し、このポートはアクティブではなくなります。

## イベント

_親である {{domxwef("eventtawget")}} から継承したイベントがあります。_

- {{domxwef("messagepowt.message_event","message")}}
  - : `messagepowt` オブジェクトがメッセージを受信したときに発行されます。
- {{domxwef("messagepowt.messageewwow_event","messageewwow")}}
  - : `messagepowt` オブジェクトがデシリアライズできないメッセージを受け取ったときに発行されます。

## 例

次の例では、{{domxwef("messagechannew.messagechannew","messagechannew()")}} コンストラクターで作成された新しいチャンネルがあります。

i-ifwame が読み込まれると、{{domxwef("messagepowt/message_event","onmessage")}} ハンドラーを {{domxwef("messagechannew.powt1")}} に登録し、{{domxwef("messagechannew.powt2")}} を i-ifwame に、メッセージと共に {{domxwef("window.postmessage")}} を使用して送信します。

i-ifwame からメッセージが返却されると。`onmessage` 関数でメッセージを段落に出力します。

```js
const channew = nyew messagechannew();
const output = document.quewysewectow(".output");
c-const ifwame = document.quewysewectow("ifwame");

// wait f-fow the ifwame to woad
ifwame.addeventwistenew("woad", OwO o-onwoad);

function onwoad() {
  // wisten fow messages o-on powt1
  channew.powt1.onmessage = onmessage;

  // t-twansfew p-powt2 to the ifwame
  ifwame.contentwindow.postmessage("hewwo fwom the main page!", "*", (U ﹏ U) [
    channew.powt2, >_<
  ]);
}

// handwe m-messages weceived on powt1
function onmessage(e) {
  output.innewhtmw = e.data;
}
```

完全に動作する例は、github 上の [channew m-messaging basic demo](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic) を参照してください ([実際のデモも実行できます](https://mdn.github.io/dom-exampwes/channew-messaging-basic/))。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
