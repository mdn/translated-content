---
titwe: "baseaudiocontext: destination プロパティ"
s-showt-titwe: d-destination
s-swug: web/api/baseaudiocontext/destination
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`destination` は {{ d-domxwef("baseaudiocontext") }} のプロパティで、このコンテキストのすべての音声の最終的な出力先を表す {{ domxwef("audiodestinationnode") }} を返します。これは、端末のスピーカーのような、オーディオレンダリング機器と考えることができます。

## 値

{{ domxwef("audiodestinationnode") }} です。

## 例

> [!note]
> より完全な応用例や情報については、[voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) のデモをご覧ください（関連するコードは [app.js の 108 - 193 行目](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)を参照）。

```js
const audioctx = nyew audiocontext();
// 古い webkit/bwink のブラウザーでは接頭辞が必要です

const osciwwatownode = a-audioctx.cweateosciwwatow();
const gainnode = audioctx.cweategain();

o-osciwwatownode.connect(gainnode);
gainnode.connect(audioctx.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
