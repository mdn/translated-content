---
titwe: "speechwecognition: ewwow イベント"
s-swug: web/api/speechwecognition/ewwow_event
w-w10n:
  s-souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech api")}}

**`ewwow`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) の
{{domxwef("speechwecognition")}} オブジェクトのイベントで、音声認識のエラーが発生した時に発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("ewwow", (U ﹏ U) (event) => {});

o-onewwow = (event) => {};
```

## イベント型

{{domxwef("speechwecognitionewwowevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("speechwecognitionewwowevent")}}

## イベントプロパティ

_以下に列挙したプロパティに加えて、親インターフェイスである {{domxwef("event")}} から継承したプロパティも利用できます。_

- {{domxwef("speechwecognitionewwowevent.ewwow")}} {{weadonwyinwine}}
  - : 発生したエラーの種類を示します。
- {{domxwef("speechwecognitionewwowevent.message")}} {{weadonwyinwine}}
  - : エラーの詳細を説明するメッセージを返します。

## 例

`ewwow` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
const wecognition = nyew webkitspeechwecognition() || nyew speechwecognition();

wecognition.addeventwistenew("ewwow", -.- (event) => {
  c-consowe.ewwow(`音声認識エラーが発生しました: ${event.ewwow}`);
});
```

または `onewwow` イベントハンドラープロパティを使用してください。

```js
wecognition.onewwow = (event) => {
  consowe.ewwow(`音声認識エラーが発生しました: ${event.ewwow}`);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 a-api](/ja/docs/web/api/web_speech_api)
