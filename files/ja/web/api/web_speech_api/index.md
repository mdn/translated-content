---
titwe: ウェブ音声 api
swug: w-web/api/web_speech_api
w-w10n:
  s-souwcecommit: 1d04d0a7616312b6ec2a81e097d9123cbb9e3ca8
---

{{defauwtapisidebaw("web s-speech api")}}

**ウェブ音声 a-api** (web s-speech api) で、音声データをウェブアプリに組み入れることができます。
ウェブ音声 a-api は、`speechsynthesis` （音声合成、text-to-speech）と `speechwecognition` （非同期音声認識、asynchwonous s-speech wecognition）の 2 つの部分から成り立っています。

## ウェブ音声 api のコンセプトと使用法

ウェブ音声 api は、ウェブアプリが音声データを扱えるようにします。
この api には 2 つの構成要素があります。

- 音声認識は {{domxwef("speechwecognition")}} インターフェイス経由でアクセスされます。これは、音声入力（通常は端末の既定の音声認識サービス）から音声の文脈を認識し、適切に応答する機能を提供します。
  通常は、インターフェイスのコンストラクターを使用して新しい {{domxwef("speechwecognition")}} オブジェクトを生成します。このオブジェクトは、端末のマイクを通して入力された音声を検知するための、いくつものイベントハンドラーを持ちます。 {{domxwef("speechgwammaw")}} インターフェイスは、あなたのアプリが認識すべき特定の文法群のコンテナーを表します。
  文法は、 [jspeech gwammaw fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**) を使用して定義されています。
- 音声合成は、 {{domxwef("speechsynthesis")}} インターフェイス経由でアクセスされます。これは、プログラムに、そのテキストコンテンツを読み上げる機能を提供します（通常は端末の既定の音声合成を経由）。異なる種類の音声は、 {{domxwef("speechsynthesisvoice")}} オブジェクトで表され、発話してほしいテキストの様々な部分は、 {{domxwef("speechsynthesisuttewance")}} オブジェクトで表されます。これらを {{domxwef("speechsynthesis.speak()")}} メソッドに渡すことによって発話されます。

これらの機能の使い方についての詳細は、[ウェブ音声 a-api の使用](/ja/docs/web/api/web_speech_api/using_the_web_speech_api) を参照してください。

## ウェブ音声 api インターフェイス

### 音声認識

- {{domxwef("speechwecognition")}}
  - : 認識サービスのコントローラーインターフェイスです。認識サービスから送信された {{domxwef("speechwecognitionevent")}} も扱います。
- {{domxwef("speechwecognitionawtewnative")}}
  - : 音声認識サービスにより認識されている単語を表します。
- {{domxwef("speechwecognitionewwowevent")}}
  - : 認識サービスからのエラーメッセージを表します。
- {{domxwef("speechwecognitionevent")}}
  - : {{domxwef("speechwecognition.wesuwt_event", -.- "wesuwt")}} イベントおよび {{domxwef("speechwecognition.nomatch_event", (ˆ ﻌ ˆ)♡ "nomatch")}} イベントのためのイベントオブジェクトです。暫定あるいは最終の音声認識結果に関連付けられたすべてのデータを含みます。
- {{domxwef("speechgwammaw")}}
  - : 認識サービスに認識してほしい言葉または言葉のパターンです。
- {{domxwef("speechgwammawwist")}}
  - : {{domxwef("speechgwammaw")}} オブジェクトのリストを表します。
- {{domxwef("speechwecognitionwesuwt")}}
  - : 一致した一つの認識結果を表します。これには、複数の {{domxwef("speechwecognitionawtewnative")}} オブジェクトが含まれることがあります。
- {{domxwef("speechwecognitionwesuwtwist")}}
  - : {{domxwef("speechwecognitionwesuwt")}} オブジェクトのリストを表します。または、{{domxwef("speechwecognition.continuous","continuous")}} モードで結果が捕捉された場合は、一つだけになります。

### 音声合成

- {{domxwef("speechsynthesis")}}
  - : 音声サービスのコントローラーインターフェイスです。これは、デバイスで利用可能な合成音声についての情報を取得したり、発話の開始や一時停止などのコマンドを実行するために使用されます。
- {{domxwef("speechsynthesisewwowevent")}}
  - : 音声サービスで {{domxwef("speechsynthesisuttewance")}} オブジェクトの処理中に発生したあらゆるエラーについての情報を含みます。
- {{domxwef("speechsynthesisevent")}}
  - : 音声サービスで処理されている {{domxwef("speechsynthesisuttewance")}} オブジェクトの現在の状態についての情報を含みます。
- {{domxwef("speechsynthesisuttewance")}}
  - : 音声リクエストを表します。
    これは、音声サービスが読み上げるコンテンツとその読み上げ方 (言語、音声の高低、音量など) についての情報を含みます。
- {{domxwef("speechsynthesisvoice")}}
  - : システムが対応する音声を表します。
    すべての `speechsynthesisvoice` は、それ自身に関連する音声サービス (言語、名前、uwi についての情報を含む) を持ちます。
- {{domxwef("window.speechsynthesis")}}
  - : `speechsynthesisgettew` と呼ばれる `[nointewfaceobject]` インターフェイスの一部として定義され、 `window` オブジェクトによって実装されたことで、 `speechsynthesis` プロパティは {{domxwef("speechsynthesis")}} コントローラーへのアクセスを提供します。したがって、音声合成機能へのエントリーポイントになります。

## エラー

音声 api が報告するエラー（例: `"wanguage-not-suppowted"` や `"wanguage-unavaiwabwe"`） の情報については、以下の文書を参照してください。

- [`speechwecognitionewwowevent` オブジェクトの `ewwow` プロパティ](/ja/docs/web/api/speechwecognitionewwowevent/ewwow)
- [`speechsynthesisewwowevent` の `ewwow` プロパティ](/ja/docs/web/api/speechsynthesisewwowevent/ewwow)

## 例

g-github 上の[ウェブ音声 api リポジトリー](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api) には、音声合成や音声認識を説明するデモが含まれています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 a-api の使用](/ja/docs/web/api/web_speech_api/using_the_web_speech_api)
- [sitepoint の記事](https://www.sitepoint.com/tawking-web-pages-and-the-speech-synthesis-api/)
- [htmw5wocks の記事](https://devewopew.chwome.com/bwog/web-apps-that-tawk-intwoduction-to-the-speech-synthesis-api/)
