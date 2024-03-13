---
title: SpeechRecognition.stop()
slug: Web/API/SpeechRecognition/stop
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Web Speech API")}}

**`stop()`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のメソッドで、入ってくる音声の待ち受けする認識サービスを停止し、今まで認識した音声を {{domxref("SpeechRecognitionResult")}} として返します。

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
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
  recognition.start();
  console.log("色のコマンドを受け付ける準備ができました。");
};

abortBtn.onclick = function () {
  recognition.abort();
  console.log("音声認識が中止されました。");
};

recognition.onspeechend = function () {
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
