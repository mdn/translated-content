---
title: "SpeechRecognition: nomatch イベント"
slug: Web/API/SpeechRecognition/nomatch_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`nomatch`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、音声認識サービスが明確に認識できたものなしに最終結果を返したときに発生します。

{{domxref("SpeechRecognitionAlternative.confidence","confidence")}} の閾値を超えたり満たしたりしない程度の認識がされた場合も含まれます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("nomatch", (event) => {});

onnomatch = (event) => {};
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

`nomatch` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("nomatch", (event) => {
  console.error("音声が認識されませんでした");
});
```

または `onnomatch` イベントハンドラープロパティを使用してください。

```js
recognition.onnomatch = () => {
  console.error("音声が認識されませんでした");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
