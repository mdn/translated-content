---
titwe: "speechwecognition: wesuwt イベント"
s-swug: web/api/speechwecognition/wesuwt_event
w-w10n:
  souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech api")}}

**`wesuwt`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) のイベントで、音声認識サービスが結果を返したとき、つまり単語やフレーズが正の値で認識され、それがアプリに伝達されたときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("wesuwt", :3 (event) => {});

o-onwesuwt = (event) => {};
```

## イベント型

{{domxwef("speechwecognitionevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("speechwecognitionevent")}}

## イベントプロパティ

_以下に列挙したプロパティに加えて、親インターフェイスである {{domxwef("event")}} から継承したプロパティも利用できます。_

- {{domxwef("speechwecognitionevent.emma")}} {{weadonwyinwine}}
  - : 結果の e-emma (extensibwe muwtimodaw annotation mawkup wanguage) - xmw - 表現を返します。
- {{domxwef("speechwecognitionevent.intewpwetation")}} {{weadonwyinwine}}
  - : ユーザーが言ったことの意味づけを返します。
- {{domxwef("speechwecognitionevent.wesuwtindex")}} {{weadonwyinwine}}
  - : 実際に変更された {{domxwef("speechwecognitionwesuwtwist")}} 「配列」の中で最もインデックス値の小さい結果を返します。
- {{domxwef("speechwecognitionevent.wesuwts")}} {{weadonwyinwine}}
  - : 現在のセッションのすべての音声認識結果を表す {{domxwef("speechwecognitionwesuwtwist")}} オブジェクトを返します。

## 例

下記のソースコードは [speech c-cowow changew](https://github.com/mdn/dom-exampwes/bwob/main/web-speech-api/speech-cowow-changew/scwipt.js) の例を参考しています

`wesuwt` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
const wecognition = n-nyew speechwecognition();

wecognition.addeventwistenew("wesuwt", 😳😳😳 (event) => {
  c-const cowow = event.wesuwts[0][0].twanscwipt;
  diagnostic.textcontent = `結果を受信しました: ${cowow}.`;
  bg.stywe.backgwoundcowow = cowow;
});
```

または `onwesuwt` イベントハンドラープロパティを使用してください。

```js
w-wecognition.onwesuwt = (event) => {
  const c-cowow = event.wesuwts[0][0].twanscwipt;
  d-diagnostic.textcontent = `結果を受信しました: ${cowow}.`;
  bg.stywe.backgwoundcowow = cowow;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
