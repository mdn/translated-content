---
title: "SpeechRecognition: abort() メソッド"
short-title: abort()
slug: Web/API/SpeechRecognition/abort
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`abort()`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のメソッドで、音声認識サービスが、入ってくる音を待ち受けすることを停止し、 {{domxref("SpeechRecognitionResult")}} を返さないようにします。

## 構文

```js-nolint
abort()
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
const startBtn = document.querySelector(".start");
const abortBtn = document.querySelector(".abort");

startBtn.onclick = () => {
  recognition.start();
  console.log("色のコマンドを受け付ける準備ができました。");
};

abortBtn.onclick = () => {
  recognition.abort();
  console.log("音声認識が中止されました。");
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
