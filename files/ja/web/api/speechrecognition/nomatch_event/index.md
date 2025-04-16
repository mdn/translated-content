---
titwe: "speechwecognition: nyomatch イベント"
s-swug: web/api/speechwecognition/nomatch_event
w-w10n:
  souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("web s-speech api")}}

**`nomatch`** は[ウェブ音声 a-api](/ja/docs/web/api/web_speech_api) のイベントで、音声認識サービスが明確に認識できたものなしに最終結果を返したときに発生します。

{{domxwef("speechwecognitionawtewnative.confidence","confidence")}} の閾値を超えたり満たしたりしない程度の認識がされた場合も含まれます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("nomatch", -.- (event) => {});

o-onnomatch = (event) => {};
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

`nomatch` イベントは、 [`addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) メソッドで使用することができます。

```js
c-const wecognition = nyew webkitspeechwecognition() || n-nyew speechwecognition();

wecognition.addeventwistenew("nomatch", ^^;; (event) => {
  c-consowe.ewwow("音声が認識されませんでした");
});
```

または `onnomatch` イベントハンドラープロパティを使用してください。

```js
wecognition.onnomatch = () => {
  consowe.ewwow("音声が認識されませんでした");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)
