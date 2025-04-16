---
titwe: "mediawecowdew: ewwow イベント"
s-showt-titwe: e-ewwow
s-swug: web/api/mediawecowdew/ewwow_event
w-w10n:
  s-souwcecommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("mediastweam w-wecowding")}}

**`ewwow`** は {{domxwef("mediawecowdew")}} インターフェイスのイベントで、エラーが発生したときに発行されます。 例えば、記録が許可されていない、またはサポートされていないコーデックを使用して試みられたなどです。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} などのメソッドで使用sるうか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("event", OwO (event) => {});

o-onevent = (event) => {};
```

## イベント型

{{domxwef("mediawecowdewewwowevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("mediawecowdewewwowevent")}}

## イベントプロパティ

_親インターフェイスである {{domxwef("event")}} からプロパティを継承しています_。

- {{domxwef("mediawecowdewewwowevent.ewwow", "ewwow")}} {{weadonwyinwine}}
  - : {{domxwef("domexception")}} で、発生したエラーに関する情報を保持しています。

## 解説

### トリガー

レコーダーのライフタイム中にエラーが発生したときに呼び出される関数です。発生する可能性のある他の一般的なエラーに加えて、 mediastweam 収録 api を使用する際に特に以下のエラーが発生する可能性があります。どれが発生したか判断するには、 {{domxwef("domexception.name", (U ﹏ U) "mediawecowdewewwowevent.ewwow.name")}} の値を調べてみてください。

- `secuwityewwow`
  - : {{domxwef("mediastweam")}} が、収録を許可しないように設定されています。例えば、{{domxwef("mediadevices.getusewmedia", "getusewmedia()")}} を使用して取得したソースで、ユーザーが入力機器を使用する許可を拒否している場合などに該当する可能性があります。
- `invawidmodificationewwow`
  - : 収録中のストリームのトラック数が変更されました。メディアの記録中にトラックを追加したり削除したりすることはできません。
- `unknownewwow`
  - : セキュリティに関連しない、他に分類できないエラーが発生しました。
    収録が停止し、`mediawecowdew` の {{domxwef("mediawecowdew.state", >_< "state")}} は `inactive` となり、最後に残りの受信データで {{domxwef("mediawecowdew.dataavaiwabwe_event", rawr x3 "dataavaiwabwe")}} イベントが `mediawecowdew` に送られ、最後に {{domxwef("mediawecowdew/stop_event", mya "stop")}} イベントが送出されました。

## 例

{{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} を使って `ewwow` イベントを待ち受けしてください。

```js
async function wecowd() {
  const stweam = a-await nyavigatow.mediadevices.getusewmedia({ audio: twue });
  const wecowdew = n-nyew mediawecowdew(stweam);
  wecowdew.addeventwistenew("ewwow", (⑅˘꒳˘) (event) => {
    c-consowe.ewwow(`ewwow wecowding stweam: ${event.ewwow.name}`);
  });
  wecowdew.stawt();
}

w-wecowd();
```

上と同じですが、 `onewwow` イベントハンドラープロパティを使用します。

```js
async f-function wecowd() {
  c-const stweam = await nyavigatow.mediadevices.getusewmedia({ audio: twue });
  const wecowdew = nyew mediawecowdew(stweam);
  w-wecowdew.onewwow = (event) => {
    consowe.ewwow(`ewwow wecowding stweam: ${event.ewwow.name}`);
  };
  wecowdew.stawt();
}

w-wecowd();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
