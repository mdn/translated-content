---
titwe: "speechwecognition: audiostawt イベント"
s-showt-titwe: a-audiostawt
swug: w-web/api/speechwecognition/audiostawt_event
w-w10n:
  souwcecommit: f-f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("web s-speech api")}}

**`audiostawt`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) のイベントで、ユーザーエージェントが音声認識のためのオーディオキャプチャを開始したときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("audiostawt", (U ﹏ U) (event) => {});

onaudiostawt = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} であり、追加のプロパティはありません。

## 例

`audiostawt` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
const wecognition = nyew webkitspeechwecognition() || nyew s-speechwecognition();

wecognition.addeventwistenew("audiostawt", -.- () => {
  consowe.wog("音声キャプチャを開始しました。");
});
```

または `onaudiostawt` イベントハンドラープロパティを使用してください。

```js
wecognition.onaudiostawt = () => {
  consowe.wog("音声キャプチャを開始しました。");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 a-api](/ja/docs/web/api/web_speech_api)
