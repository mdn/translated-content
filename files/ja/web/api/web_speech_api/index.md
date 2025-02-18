---
title: ウェブ音声 API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 1d04d0a7616312b6ec2a81e097d9123cbb9e3ca8
---

{{DefaultAPISidebar("Web Speech API")}}

**ウェブ音声 API** (Web Speech API) で、音声データをウェブアプリに組み入れることができます。
ウェブ音声 API は、`SpeechSynthesis` （音声合成、Text-to-Speech）と `SpeechRecognition` （非同期音声認識、Asynchronous Speech Recognition）の 2 つの部分から成り立っています。

## ウェブ音声 API のコンセプトと使用法

ウェブ音声 API は、ウェブアプリが音声データを扱えるようにします。
この API には 2 つの構成要素があります。

- 音声認識は {{domxref("SpeechRecognition")}} インターフェイス経由でアクセスされます。これは、音声入力（通常は端末の既定の音声認識サービス）から音声の文脈を認識し、適切に応答する機能を提供します。
  通常は、インターフェイスのコンストラクターを使用して新しい {{domxref("SpeechRecognition")}} オブジェクトを生成します。このオブジェクトは、端末のマイクを通して入力された音声を検知するための、いくつものイベントハンドラーを持ちます。 {{domxref("SpeechGrammar")}} インターフェイスは、あなたのアプリが認識すべき特定の文法群のコンテナーを表します。
  文法は、 [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) を使用して定義されています。
- 音声合成は、 {{domxref("SpeechSynthesis")}} インターフェイス経由でアクセスされます。これは、プログラムに、そのテキストコンテンツを読み上げる機能を提供します（通常は端末の既定の音声合成を経由）。異なる種類の音声は、 {{domxref("SpeechSynthesisVoice")}} オブジェクトで表され、発話してほしいテキストの様々な部分は、 {{domxref("SpeechSynthesisUtterance")}} オブジェクトで表されます。これらを {{domxref("SpeechSynthesis.speak()")}} メソッドに渡すことによって発話されます。

これらの機能の使い方についての詳細は、[ウェブ音声 API の使用](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) を参照してください。

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
- {{domxref("SpeechGrammar")}}
  - : 認識サービスに認識してほしい言葉または言葉のパターンです。
- {{domxref("SpeechGrammarList")}}
  - : {{domxref("SpeechGrammar")}} オブジェクトのリストを表します。
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

## エラー

音声 API が報告するエラー（例: `"language-not-supported"` や `"language-unavailable"`） の情報については、以下の文書を参照してください。

- [`SpeechRecognitionErrorEvent` オブジェクトの `error` プロパティ](/ja/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`SpeechSynthesisErrorEvent` の `error` プロパティ](/ja/docs/Web/API/SpeechSynthesisErrorEvent/error)

## 例

Github 上の[ウェブ音声 API リポジトリー](https://github.com/mdn/dom-examples/tree/main/web-speech-api) には、音声合成や音声認識を説明するデモが含まれています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint の記事](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks の記事](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
