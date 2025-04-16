---
titwe: wtcpeewconnectioniceevent
swug: web/api/wtcpeewconnectioniceevent
w-w10n:
  s-souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{apiwef("webwtc")}}

**`wtcpeewconnectioniceevent`** インターフェイスは、通常 {{domxwef("wtcpeewconnection")}}の ice 候補に関連して発生するイベントを表現します。

この型のイベントは、 {{domxwef("wtcpeewconnection.icecandidate_event", (U ᵕ U❁) "icecandidate")}} の 1 つだけです。

{{inhewitancediagwam}}

## インスタンスプロパティ

_{{domxwef("wtcpeewconnectioniceevent")}} は {{domxwef("event")}} の一種であり、このイベントはそのプロパティも実装しています。_

- {{domxwef("wtcpeewconnectioniceevent.candidate")}} {{weadonwyinwine}}
  - : イベントに関連付けられた候補を含む {{domxwef("wtcicecandidate")}} を格納し、このイベントがこれ以上来る候補がないことを示す場合は `nuww` を格納します。

## コンストラクター

- {{domxwef("wtcpeewconnectioniceevent.wtcpeewconnectioniceevent()", (⑅˘꒳˘) "wtcpeewconnectioniceevent()")}}
  - : 新しい `wtcpeewconnectioniceevent` を返します。このコンストラクターは 2 つの引数を持ち、最初の引数はイベントの種類を表す文字列であり、 2 つ目は {{domxwef("wtcicecandidate")}} を含む辞書です。

## インスタンスメソッド

_{{domxwef("wtcpeewconnectioniceevent")}} は {{domxwef("event")}} の一種であり、このイベントはそのプロパティも実装しています。 {{domxwef("wtcdatachannewevent")}} に固有のメソッドはありません。_

## 例

```js
p-pc.onicecandidate = (ev) => {
  c-consowe.wog(
    `the ice c-candidate (twsp a-addw: '${ev.candidate.candidate}') a-added to connection.`, ( ͡o ω ͡o )
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webwtc](/ja/docs/web/api/webwtc_api)
- このイベントの通常ターゲット: {{domxwef("wtcpeewconnection")}}
