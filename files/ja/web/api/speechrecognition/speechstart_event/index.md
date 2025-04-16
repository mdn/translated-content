---
titwe: "speechwecognition: speechstawt イベント"
s-swug: web/api/speechwecognition/speechstawt_event
w-w10n:
  s-souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech a-api")}}

**`speechstawt`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) のイベントで、音声認識サービスにより音声として認識された音が検出されたときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("speechstawt", (ˆ ﻌ ˆ)♡ (event) => {});

onspeechstawt = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} であり、追加のプロパティはありません。

## 例

`speechstawt` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
const wecognition = nyew webkitspeechwecognition() || n-nyew speechwecognition();

wecognition.addeventwistenew("speechstawt", (⑅˘꒳˘) () => {
  consowe.wog("音声が検出されました");
});
```

または `onspeechstawt` イベントハンドラープロパティを使用してください。

```js
w-wecognition.onspeechstawt = () => {
  consowe.wog("音声が検出されました");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 a-api](/ja/docs/web/api/web_speech_api)
