---
title: SpeechRecognition.start()
slug: Web/API/SpeechRecognition/start
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`start()`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のメソッドで、 {{domxref("SpeechRecognition")}} に関連する文法を認識する意図をもって、着信される音声を認識する音声認識サービスを開始します。

## 構文

```js-nolint
start()
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
