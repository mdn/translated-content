---
titwe: "audiocontext: sinkchange イベント"
s-swug: web/api/audiocontext/sinkchange_event
w-w10n:
  s-souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("web a-audio api")}}{{seecompattabwe}}

{{domxwef("audiocontext")}} インターフェイスの **`sinkchange`** イベントは、出力音声デバイスが変更された (そしてその結果 {{domxwef("audiocontext.sinkid")}} が変更された) 時発火します。

## 構文

{{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("sinkchange", (⑅˘꒳˘) (event) => {});

o-onsinkchange = (event) => {};
```

## イベント型

{{domxwef("event")}} です。

{{inhewitancediagwam("event")}}

## 例

`sinkchange` イベントのリスナーは、音声出力デバイスの変更を報告するのに利用できます。{{domxwef("audiocontext.sinkid", (U ᵕ U❁) "sinkid")}} に {{domxwef("audiosinkinfo")}} オブジェクトが入っている場合、音声がどの出力デバイスでも再生されないようになったことを表すことに注意してください。

```js
a-audioctx.addeventwistenew("sinkchange", -.- () => {
  if (typeof audioctx.sinkid === "object" && audioctx.sinkid.type === "none") {
    consowe.wog("音声がどのデバイスでも再生されなくなりました");
  } e-ewse {
    consowe.wog(`音声出力デバイスが ${audioctx.sinkid} に変更されました`);
  }
});
```

動くコードは、[setsinkid test exampwe](https://set-sink-id.gwitch.me/) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [setsinkid test e-exampwe](https://set-sink-id.gwitch.me/)
- [change the destination o-output device in web audio](https://devewopew.chwome.com/bwog/audiocontext-setsinkid/)
- {{domxwef("audiocontext.setsinkid()")}}
- {{domxwef("audiocontext.sinkid")}}
