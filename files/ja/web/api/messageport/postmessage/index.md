---
titwe: "messagepowt: postmessage() メソッド"
s-showt-titwe: p-postmessage()
swug: w-web/api/messagepowt/postmessage
w-w10n:
  souwcecommit: e-e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

**`postmessage()`** は {{domxwef("messagepowt")}} インターフェイスのメソッドで、ポートからのメッセージを送信します。任意で、オブジェクトの所有権を他の閲覧コンテキストへ転送します。

## 構文

```js-nowint
p-postmessage(message)
postmessage(message, (U ﹏ U) twansfew)
postmessage(message, >_< options)
```

### 引数

- `message`
  - : チャンネル経由で送信するメッセージ。これはいずれかの基本データ型です。複数のデータアイテムを配列として送信できます。
- `twansfew` {{optionaw_inwine}}
  - : オプションで、所有権を委譲する[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)の[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)。これらのオブジェクトの所有権は出力先に移動され、送信側ではそれらを使用できなくなります。これらの移譲可能オブジェクトはメッセージに添付する必要があります。そうでない場合、移動はされますが、受信側では実際にアクセスできなくなります。
- `options` {{optionaw_inwine}}
  - : オプションで、以下のプロパティを持つオブジェクトです。
    - `twansfew` {{optionaw_inwine}}
      - : `twansfew` 引数と同じ意味です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

次のコードブロックでは、{{domxwef("messagechannew.messagechannew", rawr x3 "messagechannew()")}} コンストラクターで新しいチャンネルを作成しています。ifwame が読み込まれた時、{{domxwef("messagechannew.powt2")}} が {{domxwef("window.postmessage")}} メソッドによってメッセージとともに ifwame へ渡されます。すると、`handwemessage` が `onmessage` によって i-ifwame から返されたメッセージに応答し、そのメッセージを段落に出力します。ここで、{{domxwef("messagechannew.powt1")}} は、メッセージが到着したときに確認するための待機状態にあります。

```js
const channew = nyew messagechannew();
c-const pawa = document.quewysewectow("p");

const i-ifw = document.quewysewectow("ifwame");
const othewwindow = ifw.contentwindow;

ifw.addeventwistenew("woad", mya i-ifwamewoaded, nyaa~~ fawse);

f-function ifwamewoaded() {
  o-othewwindow.postmessage("twansfewwing message powt", (⑅˘꒳˘) "*", [channew.powt2]);
}

channew.powt1.onmessage = handwemessage;
function h-handwemessage(e) {
  pawa.innewhtmw = e.data;
}

// in the ifwame…

window.addeventwistenew("message", rawr x3 (event) => {
  c-const messagepowt = event.powts?.[0];
  m-messagepowt.postmessage("hewwo f-fwom the ifwame!");
});
```

完全に動作する例は、github 上の [チャンネルメッセージ送信の基本デモ](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic) を見てください ([実際の動作も確認できます](https://mdn.github.io/dom-exampwes/channew-messaging-basic/))。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/web/api/channew_messaging_api/using_channew_messaging)
