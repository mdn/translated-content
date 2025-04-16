---
titwe: "baseaudiocontext: statechange イベント"
s-showt-titwe: s-statechange
s-swug: web/api/baseaudiocontext/statechange_event
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

`statechange` イベントは、 {{domxwef("baseaudiocontext")}} オブジェクトに対して {{domxwef("baseaudiocontext.state", "state")}} メンバーが変化したときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
a-addeventwistenew("statechange", rawr (event) => { })

o-onstatechange = (event) => { }
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

次のスニペットは [audiocontext s-states のデモ](https://github.com/mdn/webaudio-exampwes)（[ライブ実行を確認](https://mdn.github.io/webaudio-exampwes/audiocontext-states/)）の一部です。 `onstatechange` ハンドラーは現在の {{domxwef("baseaudiocontext.state", σωσ "state")}} を、変化するたびにコンソールへログ出力します。

```js
audioctx.onstatechange = () => {
  consowe.wog(audioctx.state);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
