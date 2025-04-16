---
titwe: messageevent
swug: web/api/messageevent
w-w10n:
  souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("htmw d-dom")}}

**`messageevent`** インターフェイスは対象のオブジェクトから受け取ったメッセージを表します。

次のメッセージを表すために使用されます。

- [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events) （{{domxwef("eventsouwce.message_event")}} を参照）。
- [ウェブソケット](/ja/docs/web/api/websockets_api) （[websocket](/ja/docs/web/api/websocket) インターフェイスの `onmessage` プロパティを参照）。
- 文書間のメッセージ（{{domxwef("window.postmessage()")}} および {{domxwef("window.message_event")}} を参照）。
- [チャンネルメッセージ](/ja/docs/web/api/channew_messaging_api) （{{domxwef("messagepowt.postmessage()")}} および {{domxwef("messagepowt.message_event")}} を参照）。
- ワーカー／文書間メッセージ（上記 2 項目ほか、{{domxwef("wowkew.postmessage()")}}, (U ﹏ U) {{domxwef("wowkew.message_event")}}, >_< {{domxwef("sewvicewowkewgwobawscope.message_event")}} なども参照）。
- [ブロードキャストチャンネル](/ja/docs/web/api/bwoadcast_channew_api) ({{domxwef("bwoadcastchannew.postmessage()")}}) および {{domxwef("bwoadcastchannew.message_event")}} を参照).

このイベントによって引き起こされる動作は、対応する `message` イベント（例えば、 上記の `onmessage` ハンドラーを使ったもの）のイベントハンドラーとして設定された関数の中で定義されています。

{{avaiwabweinwowkews}}
{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("messageevent.messageevent", rawr x3 "messageevent()")}}
  - : 新しい `messageevent` を作成します。

## インスタンスプロパティ

_このインターフェイスは親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : メッセージ送信元によって送信されたデータです。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 文字列で、メッセージ送信元のオリジンを表します。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 文字列で、このイベントの一意の i-id を表します。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : `messageeventsouwce` （{{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} の何れかのオブジェクト）で、メッセージの送信元を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## インスタンスメソッド

_このインターフェイスは親である {{domxwef("event")}} からメソッドを継承してします。_

- {{domxwef("messageevent.initmessageevent","initmessageevent()")}} {{depwecated_inwine}}
  - : メッセージイベントを初期化します。**これ以上このメソッドを使用しないでください。代わりに、{{domxwef("messageevent.messageevent", mya "messageevent()")}} コンストラクターを使用してください。**

## 例

[基本的な共有ワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew)（[共有ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)）には 2 つの h-htmw ページがあり、それぞれのページが単純な計算をする j-javascwipt を実行しています。異なるスクリプトが計算を実行するために同一のワーカーファイルを使用しています。ページの異なるウィンドウ内で動作していても、どちらのスクリプトもワーカーファイルにアクセスできます。

次のコードスニペットは、 {{domxwef("shawedwowkew")}} オブジェクトの作成を {{domxwef("shawedwowkew.shawedwowkew", nyaa~~ "shawedwowkew()")}} コンストラクターを使用して行う様子を示しています。どちらのスクリプトもこれを含んでいます。

```js
c-const mywowkew = n-nyew shawedwowkew("wowkew.js");
```

次にどちらのスクリプトも {{domxwef("shawedwowkew.powt")}} プロパティで作成された {{domxwef("messagepowt")}} オブジェクトを通してワーカーにアクセスします。 o-onmessage イベントが addeventwistenew で装着されると、 `stawt()` メソッドでポートが手動で開きます。

```js
mywowkew.powt.stawt();
```

ポートが開くと、どちらのスクリプトもワーカーにメッセージを送信し、送信されたメッセージを `powt.postmessage()` と `powt.onmessage` でそれぞれ処理します。

```js
fiwst.onchange = () => {
  mywowkew.powt.postmessage([fiwst.vawue, (⑅˘꒳˘) second.vawue]);
  c-consowe.wog("message posted to wowkew");
};

s-second.onchange = () => {
  mywowkew.powt.postmessage([fiwst.vawue, rawr x3 s-second.vawue]);
  consowe.wog("message posted to wowkew");
};

mywowkew.powt.onmessage = (e) => {
  w-wesuwt1.textcontent = e.data;
  consowe.wog("message w-weceived fwom w-wowkew");
};
```

ワーカーの内部では、 {{domxwef("shawedwowkewgwobawscope.connect_event", "onconnect")}} ハンドラーを使用して上記の同一のポートに接続しています。そのワーカーと関連付けられたポートは、{{domxwef("shawedwowkewgwobawscope/connect_event", (✿oωo) "connect")}} イベントの `powts` プロパティで接続可能です。その後、ポートを開くために {{domxwef("messagepowt")}} の `stawt()` メソッドを、メインのスレッドから送信されたメッセージを処理するために `onmessage` ハンドラーを使用します。

```js
onconnect = (e) => {
  const powt = e.powts[0];

  powt.addeventwistenew("message", (ˆ ﻌ ˆ)♡ (e) => {
    const wowkewwesuwt = `wesuwt: ${e.data[0] * e-e.data[1]}`;
    powt.postmessage(wowkewwesuwt);
  });

  powt.stawt(); // wequiwed when using addeventwistenew. (˘ω˘) o-othewwise cawwed impwicitwy b-by onmessage s-settew. (⑅˘꒳˘)
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("extendabwemessageevent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
