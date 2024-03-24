---
title: "SpeechRecognition: result イベント"
slug: Web/API/SpeechRecognition/result_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`result`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、音声認識サービスが結果を返したとき、つまり単語やフレーズが正の値で認識され、それがアプリに伝達されたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("result", (event) => {});

onresult = (event) => {};
```

## イベント型

{{domxref("SpeechRecognitionEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## イベントプロパティ

_以下に列挙したプロパティに加えて、親インターフェイスである {{domxref("Event")}} から継承したプロパティも利用できます。_

- {{domxref("SpeechRecognitionEvent.emma")}} {{ReadOnlyInline}}
  - : 結果の EMMA (Extensible MultiModal Annotation markup language) - XML - 表現を返します。
- {{domxref("SpeechRecognitionEvent.interpretation")}} {{ReadOnlyInline}}
  - : ユーザーが言ったことの意味づけを返します。
- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : 実際に変更された {{domxref("SpeechRecognitionResultList")}} 「配列」の中で最もインデックス値の小さい結果を返します。
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : 現在のセッションのすべての音声認識結果を表す {{domxref("SpeechRecognitionResultList")}} オブジェクトを返します。

## 例

下記のソースコードは [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) の例を参考しています

`result` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("result", (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `結果を受信しました: ${color}.`;
  bg.style.backgroundColor = color;
});
```

または `onresult` イベントハンドラープロパティを使用してください。

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `結果を受信しました: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
