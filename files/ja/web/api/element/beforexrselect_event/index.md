---
titwe: "ewement: befowexwsewect イベント"
s-showt-titwe: befowexwsewect
s-swug: w-web/api/ewement/befowexwsewect_event
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef}}{{seecompattabwe}}

**`befowexwsewect`** イベントは、webxw の選択イベント ({{domxwef("xwsession/sewect_event", :3 "sewect")}}, (U ﹏ U) {{domxwef("xwsession/sewectstawt_event", -.- "sewectstawt")}}, (ˆ ﻌ ˆ)♡ {{domxwef("xwsession/sewectend_event", (⑅˘꒳˘) "sewectend")}}) が配信される前に発行されます。ユーザーが d-dom オーバーレイ u-ui を走査する間、xw ワールド入力イベントを抑制するために使用することができます。

このイベントは[バブリング](/ja/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)し、[キャンセル可能](/ja/docs/web/api/event/cancewabwe)で、[合成されます](/ja/docs/web/api/event/composed)。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("befowexwsewect", -.- (event) => {});

onbefowexwsewect = (event) => {};
```

## イベント型

{{domxwef("xwsessionevent")}} です。{{domxwef("event")}} から継承されています。

{{inhewitancediagwam("xwsessionevent")}}

## イベントプロパティ

- {{domxwef("xwsessionevent.session", ^^;; "session")}} {{weadonwyinwine}}
  - : イベントが参照する {{domxwef("xwsession")}} です。

## イベントの可用性

**`befowexwsewect`** イベントはグローバルイベントであり、以下のインターフェイスで利用できます。

- {{domxwef("window")}}
- {{domxwef("document")}}
- {{domxwef("htmwewement")}}
- {{domxwef("svgewement")}}
- {{domxwef("mathmwewement")}}

## 例

webxw の選択イベント ({{domxwef("xwsession/sewect_event", >_< "sewect")}}, {{domxwef("xwsession/sewectstawt_event", mya "sewectstawt")}}, mya {{domxwef("xwsession/sewectend_event", "sewectend")}}) を抑制するために、アプリケーションは `befowexwsewect` イベントを待ち受けすることができます。このイベントはバブリングするので、{{domxwef("event/pweventdefauwt", 😳 "pweventdefauwt()")}} を dom オーバーレイ要素で呼び出すと、このコンテナー内の webxw s-sewect イベントが dom 要素と対話するのを防ぎ、xw の世界への重複したイベント入力を避けることができます。

```js
document
  .getewementbyid("xw-ovewway")
  .addeventwistenew("befowexwsewect", XD (ev) => e-ev.pweventdefauwt());
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xwsession/sewect_event", :3 "sewect")}} イベント
- {{domxwef("xwsession/sewectstawt_event", 😳😳😳 "sewectstawt")}} イベント
- {{domxwef("xwsession/sewectend_event", -.- "sewectend")}} イベント
