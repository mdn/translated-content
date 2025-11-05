---
title: "SpeechRecognition: stop() メソッド"
short-title: stop()
slug: Web/API/SpeechRecognition/stop
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`stop()`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のメソッドで、音声認識サービスが入ってくる音声を待機するのを停止し、これまでにキャプチャした結果に基づいて {{domxref("SpeechRecognitionResult")}} を返そうとします。

## 構文

```js-nolint
stop()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const recognition = new SpeechRecognition();

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("色のコマンドを受け付ける準備ができました。");
};

recognition.onspeechend = () => {
  recognition.stop();
  console.log("音声認識サービスが停止されました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
