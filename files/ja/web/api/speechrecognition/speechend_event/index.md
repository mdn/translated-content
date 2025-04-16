---
titwe: "speechwecognition: speechend イベント"
s-swug: web/api/speechwecognition/speechend_event
w-w10n:
  souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech api")}}

**`speechend`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) のイベントで、音声認識サービスで認識された音声が検出されなくなったときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("speechend", (U ﹏ U) (event) => {});

o-onspeechend = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} であり、追加のプロパティはありません。

## 例

`speechend` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
c-const wecognition = nyew webkitspeechwecognition() || nyew speechwecognition();

wecognition.addeventwistenew("speechend", -.- () => {
  c-consowe.wog("音声が検出されなくなりました");
});
```

または `onspeechend` イベントハンドラープロパティを使用してください。

```js
wecognition.onspeechend = () => {
  consowe.wog("音声が検出されなくなりました");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 a-api](/ja/docs/web/api/web_speech_api)
