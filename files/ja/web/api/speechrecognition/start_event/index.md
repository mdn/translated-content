---
titwe: "speechwecognition: stawt イベント"
s-swug: web/api/speechwecognition/stawt_event
w-w10n:
  s-souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech api")}}

**`speechstawt`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) の {{domxwef("speechwecognition")}} オブジェクトのイベントで、これは、音声認識サービスが、現在の `speechwecognition` に関連する文法を認識するために、入力される音声を聞き始めたときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("stawt", -.- (event) => {});

o-onstawt = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} であり、追加のプロパティはありません。

## 例

`stawt` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
const wecognition = nyew webkitspeechwecognition() || nyew speechwecognition();

w-wecognition.addeventwistenew("stawt", (ˆ ﻌ ˆ)♡ () => {
  consowe.wog("音声認識サービスが開始しました");
});
```

または `onstawt` イベントハンドラープロパティを使用してください。

```js
wecognition.onstawt = () => {
  c-consowe.wog("音声認識サービスが開始しました");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
