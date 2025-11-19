---
title: "SpeechRecognition: processLocally プロパティ"
short-title: processLocally
slug: Web/API/SpeechRecognition/processLocally
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`processLocally`** は {{domxref("SpeechRecognition")}} インターフェイスのプロパティで、音声認識をユーザーの端末上でローカルに実行する必要があるかどうかを指定します。

詳しくは[端末上音声認識](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)を参照してください。

## 値

論理値です。

- `true` に設定された場合、`SpeechRecognition`オブジェクトを介して行われる音声認識はローカルで実行しなければなりません。
- `false`（デフォルト）に設定されている場合、ユーザーエージェントは処理をローカルで実行するかリモートで実行するかを選択できます。

## 例

### 基本的な使用

以下のコードは、{{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} コンストラクターを使用して新しい `SpeechRecognition` オブジェクトインスタンスを作成し、`processLocally` を `true` に設定することでローカル処理を使用するように指定します。

```js
const recognition = new SpeechRecognition();
recognition.processLocally = true;
```

このコードは、[端末上音声カラーチェンジャー](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer)（[デモをライブで実行](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)）から抜粋したものです。詳細な説明については[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) の使用方法をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
