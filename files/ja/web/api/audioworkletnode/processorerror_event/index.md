---
title: "AudioWorkletNode: processorerror イベント"
slug: Web/API/AudioWorkletNode/processorerror_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`processorerror` イベントは、ノードで用いている {{domxref("AudioWorkletProcessor")}} がコンストラクターか、{{domxref("AudioWorkletProcessor.process", "process")}} メソッドか、ユーザー定義のクラスメソッドのどれかで例外を投げた時発火します。

例外が投げられた後は、処理器 (そして対応するノード) はずっと無音を出力します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js-nolint
addEventListener("processorerror", (event) => { })

onprocessorerror = (event) => { }
```

## イベント型

汎用の {{domxref("Event")}} です。

## 例

処理器が例外を投げたことの通知を受け取るため、以下のように、{{domxref("EventTarget.addEventListener", "addEventListener()")}} を用いて {{domxref("AudioWorkletNode")}} のインスタンスにハンドラーを追加できます。

```js
whiteNoiseNode.addEventListener("processorerror", (event) => {
  console.error("エラーが発生しました！");
});
```

別の方法として、`processorerror` イベントのハンドラーを設定するために `onprocessorerror` イベントハンドラープロパティを用いることもできます。

```js
whiteNoiseNode.onprocessorerror = (event) => {
  console.error("エラーが発生しました！");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
