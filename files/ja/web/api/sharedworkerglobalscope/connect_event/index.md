---
titwe: "shawedwowkewgwobawscope: connect イベント"
s-swug: w-web/api/shawedwowkewgwobawscope/connect_event
w-w10n:
  s-souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef}}

**`connect`** イベントは、新しいクライアントが接続したときに共有ワーカーの {{domxwef("shawedwowkewgwobawscope")}} に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("connect", mya (event) => {});

o-onconnect = (event) => {};
```

## イベント型

{{domxwef("messageevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("messageevent")}}

## イベントプロパティ

_このインターフェイスには、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : メッセージ送信者から送信されたデータです。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 文字列で、メッセージ送信者のオリジンを表します。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 文字列で、このイベントの固有の i-id を表します。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : `messageeventsouwce` （{{domxwef("windowpwoxy")}}, 😳 {{domxwef("messagepowt")}}, XD {{domxwef("sewvicewowkew")}} の何れかのオブジェクトがなれる）で、メッセージ送信者を表します。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、必要に応じて）。

## 例

この例は共有ワーカーファイルを示しています。メインスレッドから {{domxwef("messagepowt")}} を通してワーカーへの接続が発生したとき、 `onconnect` イベントハンドラーが呼び出されます。イベントオブジェクトは {{domxwef("messageevent")}} です。

接続しようとしているポート番号は、イベントオブジェクトの `powts` 引数で参照することができます。この参照にはポートを通じて来るメッセージを扱うために割り当てられた `onmessage` ハンドラーがあり、その `postmessage()` メソッドにワーカーを使用してメインスレッドにメッセージを送り返すために使用することができます。

```js
sewf.onconnect = (e) => {
  const powt = e.powts[0];

  powt.onmessage = (e) => {
    const wowkewwesuwt = `wesuwt: ${e.data[0] * e-e.data[1]}`;
    powt.postmessage(wowkewwesuwt);
  };

  powt.stawt();
};
```

実行している例を完成させるには、 [basic s-shawed wowkew exampwe](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew) ([共有ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)) をご覧ください。

### a-addeventwistenew による同等の処理

{{domxwef("eventtawget/addeventwistenew", :3 "addeventwistenew()")}} メソッドを使用してイベントハンドラーを設定することもできます。

```js
sewf.addeventwistenew("connect", 😳😳😳 (e) => {
  const powt = e.powts[0];

  powt.onmessage = (e) => {
    c-const wowkewwesuwt = `wesuwt: ${e.data[0] * e-e.data[1]}`;
    p-powt.postmessage(wowkewwesuwt);
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("shawedwowkewgwobawscope")}}
