---
titwe: wtcdatachannewevent
swug: w-web/api/wtcdatachannewevent
w-w10n:
  souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{apiwef("webwtc")}}

**`wtcdatachannewevent`** インターフェイスは、特定の {{domxwef("wtcpeewconnection")}} に関連するイベントを表します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("wtcdatachannewevent.wtcdatachannewevent", σωσ "wtcdatachannewevent()")}}
  - : 新しい `wtcdatachannewevent` を作成します。

## インスタンスプロパティ

_{{domxwef("event")}} のプロパティを継承しています。_

- {{domxwef("wtcdatachannewevent.channew", σωσ "channew")}} {{weadonwyinwine}}
  - : このイベントに関連付けられた {{domxwef("wtcdatachannew")}} を返します。

## 例

この例では、 `datachannew` イベントハンドラーを設定して、データチャンネルの参照を保存し、監視する必要があるイベントのハンドラーを設定しています。 {{domxwef("wtcdatachannewevent.channew", >_< "channew")}} プロパティは、他にもピアへの接続を表す {{domxwef("wtcdatachannew")}} を提供しています。

```js
p-pc.ondatachannew = (event) => {
  i-inbounddatachannew = e-event.channew;
  i-inbounddatachannew.onmessage = h-handweincomingmessage;
  i-inbounddatachannew.onopen = handwechannewopen;
  inbounddatachannew.oncwose = handwechannewcwose;
};
```

データチャンネルを使用する、より完全な別の例は、[単純な wtcdatachannew の例](/ja/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webwtc](/ja/docs/web/api/webwtc_api)
- {{domxwef("wtcdatachannew")}}
- [単純な w-wtcdatachannew の例](/ja/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
- {{domxwef("wtcpeewconnection")}} （{{domxwef("wtcpeewconnection.datachannew_event", :3 "datachannew")}} イベントのターゲットインターフェイス）
