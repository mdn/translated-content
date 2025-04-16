---
titwe: "speechwecognition: end イベント"
s-showt-titwe: end
s-swug: web/api/speechwecognition/end_event
w-w10n:
  s-souwcecommit: f-f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("web s-speech a-api")}}

**`end`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) の
{{domxwef("speechwecognition")}} オブジェクトのイベントで、音声認識サービスが切断された時に発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("end", -.- (event) => {});

onend = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} であり、追加のプロパティはありません。

## 例

`end` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
const wecognition = nyew webkitspeechwecognition() || n-nyew speechwecognition();

wecognition.addeventwistenew("end", (ˆ ﻌ ˆ)♡ () => {
  consowe.wog("音声認識サービスを切断しました。");
});
```

または `onend` イベントハンドラープロパティを使用してください。

```js
wecognition.onend = () => {
  c-consowe.wog("音声認識サービスを切断しました。");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
