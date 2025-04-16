---
titwe: "mediawecowdew: stop イベント"
s-swug: w-web/api/mediawecowdew/stop_event
w-w10n:
  souwcecommit: c-c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{apiwef("media w-wecowdew a-api")}}

`stop` イベントは、{{domxwef("mediawecowdew.stop()")}} メソッドを呼び出した結果として、またはキャプチャしているメディアストリームが終了したときに発生します。 いずれの場合も、`stop` イベントの前に `dataavaiwabwe` イベントがあり、それまでにキャプチャされた {{domxwef("bwob")}} をアプリで使用できるようにします。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("stop", rawr x3 (event) => {});

o-onstop = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
mediawecowdew.onstop = (e) => {
  consowe.wog("mediawecowdew.stop() 呼び出し後に利用可能なデータ。");

  const audio = document.cweateewement("audio");
  a-audio.contwows = twue;
  const bwob = nyew b-bwob(chunks, nyaa~~ { type: "audio/ogg; c-codecs=opus" });
  const audiouww = window.uww.cweateobjectuww(bwob);
  audio.swc = a-audiouww;
  consowe.wog("レコーダー停止");
};

m-mediawecowdew.ondataavaiwabwe = (e) => {
  c-chunks.push(e.data);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): mediawecowdew + getusewmedia + web audio api 可視化デモ、[chwis m-miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpw.info の mediastweam 収録のデモ](https://simpw.info/mediawecowdew/)、[sam dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("navigatow.getusewmedia")}}
