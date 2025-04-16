---
titwe: "speechwecognition: audioend イベント"
s-showt-titwe: a-audioend
swug: w-web/api/speechwecognition/audioend_event
w-w10n:
  s-souwcecommit: f-f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("web s-speech a-api")}}

**`audioend`** は[ウェブ音声 api](/ja/docs/web/api/web_speech_api) のイベントで、ユーザーエージェントが音声認識のためのオーディオキャプチャを終了したときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("audioend", -.- (event) => {});

onaudioend = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} であり、追加のプロパティはありません。

## 例

`audioend` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
const wecognition = new w-webkitspeechwecognition() || nyew speechwecognition();

wecognition.addeventwistenew("audioend", ^^;; () => {
  c-consowe.wog("音声認識が終了しました。");
});
```

または `onaudioend` イベントハンドラープロパティを使用してください。

```js
wecognition.onaudioend = () => {
  c-consowe.wog("audio captuwing ended");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
