---
title: ウェブ音声 API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 57a80c7a6d2174d77234cb58f536a40dd0803c4a
---

{{DefaultAPISidebar("Web Speech API")}}

**ウェブ音声 API** (Web Speech API) で、音声データをウェブアプリに組み入れることができます。
ウェブ音声 API は、`SpeechSynthesis` （音声合成、Text-to-Speech）と `SpeechRecognition` （非同期音声認識、Asynchronous Speech Recognition）の 2 つの部分から成り立っています。

## ウェブ音声の概念と使用法

ウェブ音声 API により、ウェブアプリは音声データを扱うことができます。この API には 2 つの要素があります。

- 音声認識は {{domxref("SpeechRecognition")}} インターフェイス経由でアクセスされます。これにより、音声ソースから音声の文脈を認識し、アプリがそれに応じて応答できる機能を提供します。
  通常、このインターフェイスのコンストラクターを使用して、新しい {{domxref("SpeechRecognition")}} オブジェクトを作成します。このオブジェクトは、端末のマイク（または音声トラック）から音声が送信されたことを検知するための、いくつかのイベントハンドラーを提供しています。
  音声認識において、ユーザーのプラットフォームが提供するサービスを使用するか（デフォルト）、それとも[ブラウザー内でローカルに](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)実行するかを指定することができます。
- 音声合成は、 {{domxref("SpeechSynthesis")}} インターフェイス経由でアクセスされます。これは、プログラムに、そのテキストコンテンツを読み上げる機能を提供します（通常は端末の既定の音声合成を経由）。異なる種類の音声は、 {{domxref("SpeechSynthesisVoice")}} オブジェクトで表され、発話してほしいテキストの様々な部分は、 {{domxref("SpeechSynthesisUtterance")}} オブジェクトで表されます。これらを {{domxref("SpeechSynthesis.speak()")}} メソッドに渡すことによって発話されます。

これらの機能の使い方についての詳細は、[ウェブ音声 API の使用](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)を参照してください。

## ウェブ音声 API インターフェイス

### 音声認識

- {{domxref("SpeechRecognition")}}
  - : 認識サービスのコントローラーインターフェイスです。認識サービスから送信された {{domxref("SpeechRecognitionEvent")}} も扱います。
- {{domxref("SpeechRecognitionAlternative")}}
  - : 音声認識サービスにより認識されている単語を表します。
- {{domxref("SpeechRecognitionErrorEvent")}}
  - : 認識サービスからのエラーメッセージを表します。
- {{domxref("SpeechRecognitionEvent")}}
  - : {{domxref("SpeechRecognition.result_event", "result")}} イベントおよび {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} イベントのためのイベントオブジェクトです。暫定あるいは最終の音声認識結果に関連付けられたすべてのデータを含みます。
- {{domxref("SpeechRecognitionPhrase")}}
  - : 音声認識エンジンに渡して[文脈バイアス](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#音声認識における文脈バイアス)に使用できるフレーズを表します。
- {{domxref("SpeechRecognitionResult")}}
  - : 一致した一つの認識結果を表します。これには、複数の {{domxref("SpeechRecognitionAlternative")}} オブジェクトが含まれることがあります。
- {{domxref("SpeechRecognitionResultList")}}
  - : {{domxref("SpeechRecognitionResult")}} オブジェクトのリストを表します。または、{{domxref("SpeechRecognition.continuous","continuous")}} モードで結果が捕捉された場合は、一つだけになります。

### 音声合成

- {{domxref("SpeechSynthesis")}}
  - : 音声サービスのコントローラーインターフェイスです。これは、デバイスで利用可能な合成音声についての情報を取得したり、発話の開始や一時停止などのコマンドを実行するために使用されます。
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : 音声サービスで {{domxref("SpeechSynthesisUtterance")}} オブジェクトの処理中に発生したあらゆるエラーについての情報を含みます。
- {{domxref("SpeechSynthesisEvent")}}
  - : 音声サービスで処理されている {{domxref("SpeechSynthesisUtterance")}} オブジェクトの現在の状態についての情報を含みます。
- {{domxref("SpeechSynthesisUtterance")}}
  - : 音声リクエストを表します。
    これは、音声サービスが読み上げるコンテンツとその読み上げ方 (言語、音声の高低、音量など) についての情報を含みます。
- {{domxref("SpeechSynthesisVoice")}}
  - : システムが対応する音声を表します。
    すべての `SpeechSynthesisVoice` は、それ自身に関連する音声サービス (言語、名前、URI についての情報を含む) を持ちます。
- {{domxref("Window.speechSynthesis")}}
  - : `SpeechSynthesisGetter` と呼ばれる `[NoInterfaceObject]` インターフェイスの一部として定義され、 `Window` オブジェクトによって実装されたことで、 `speechSynthesis` プロパティは {{domxref("SpeechSynthesis")}} コントローラーへのアクセスを提供します。したがって、音声合成機能へのエントリーポイントになります。

### 非推奨のインターフェイス

ウェブ音声 API から文法の概念が削除されました。関連する機能は仕様書には残されており、下位互換性を確保するため、対応ブラウザーでは引き続き認識されますが、音声認識サービスには何の影響も及ぼしません。

- {{domxref("SpeechGrammar")}} {{deprecated_inline}}
  - : 認識サービスが認識対象とする単語や単語のパターンを表します。
- {{domxref("SpeechGrammarList")}} {{deprecated_inline}}
  - : {{domxref("SpeechGrammar")}} オブジェクトのリストを表します。

## エラー

音声 API が報告するエラー（例: `"language-not-supported"` や `"language-unavailable"`） の情報については、以下の文書を参照してください。

- [`SpeechRecognitionErrorEvent` オブジェクトの `error` プロパティ](/ja/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`SpeechSynthesisErrorEvent` の `error` プロパティ](/ja/docs/Web/API/SpeechSynthesisErrorEvent/error)

## セキュリティ上の注意事項

ウェブ音声 API の[端末上の音声認識](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#端末上の音声認識)機能へのアクセスは、{{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} ディレクティブによって制御されます。

具体的には、定義されたポリシーによって使用がブロックされている場合、API の {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} または {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} メソッドを呼び出そうとしても、失敗します。

## 例

[Web Speech API examples](https://mdn.github.io/dom-examples/web-speech-api/) では、音声認識と音声合成の仕組みを紹介しています。

[Web Speech API Playground](https://speech.evanliu.com/) も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
