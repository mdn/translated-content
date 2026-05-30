---
title: オーディオセッション API
slug: Web/API/Audio_Session_API
l10n:
  sourceCommit: 7afb60028792bba6b9c809867bc6c5304f9868a6
---

{{DefaultAPISidebar("Audio Session API")}}{{SeeCompatTable}}

**オーディオセッション API** は、 Web アプリケーションが、デバイス上で再生されている他のオーディオとの相互作用を制御するためのメカニズムを提供します。

## 概念と使用法

人々はますますウェブを通じてメディアを消費するようになり、ウェブは今やオーディオやビデオコンテンツにアクセスするための主要なチャネルとなっています。しかし、ウェブ上のメディアは、基盤となるプラットフォームとのシームレスな統合が欠けている場合が少なくありません。 Audio Session API は、開発者がウェブアプリケーションで生成されたオーディオがデバイス上の他のアプリケーションのオーディオとどのように相互作用するかを指定できるようにすることで、このギャップを解消します。例えば、他のオーディオと同時に再生したり、音量を下げたり、一時停止してオーディオを単独で再生したりできます。

ウェブページは、 {{domxref("HTMLMediaElement")}} や [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)どのAPIを使用して、さまざまな方法で音声処理を実行できます。**オーディオセッション**は、ウェブページによって生成された集約された音声を表し、ウェブページが音声出力の一般的な性質を表現できるようにします。

### 音声セッションの種類

API は、アプリケーションが生成するオーディオの種類を指定する、いくつかのオーディオセッションタイプをサポートしています。

- `"auto"` — デフォルト。ユーザーエージェントは、使用されているオーディオ API に基づいて最適なタイプを自動的に選択します。
- `"playback"` — 音楽や動画などのメディア再生用です。このタイプの機器は、他のオーディオ再生機器と混用しないでください。
- `"transient"` — 簡単に言うと、通知音のようなものです。このタイプの音は通常、他の音声の上に重ねて再生されます。
- `"transient-solo"` — 音声のみを再生し、他のすべての音声（音声プロンプトなど）を一時停止します。
- `"ambient"` — 他の音声ソースとミックスできる音声用。
- `"play-and-record"` — ビデオ会議など、音声の再生と録音の両方を行うアプリケーション向け。

## インターフェース

- {{domxref("AudioSession")}} {{Experimental_Inline}}
  - : オーディオセッションの動作を制御するためのメインインターフェース。オーディオセッションタイプの設定なども含まれます。

### 他のインターフェースへの拡張

- {{domxref("Navigator.audioSession")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在のドキュメントの {{domxref("AudioSession")}} オブジェクトを返します。

## 例

### ビデオ会議の音声セッションを設定する

ビデオ会議アプリケーションでは、再生と録画の両方が同時に必要となります。オーディオセッション API は、このような場合に役立ちます。

まず、オーディオセッションタイプを `"play-and-record"` に設定し、このページではマイクへのアクセスと音声出力が必要であることをプラットフォームに通知します。対応プラットフォームでは、これによりシステム音量ルーティングが調整され（例えば、モバイルデバイスではスピーカーではなくイヤホンを使用するなど）、他のアプリケーションからの音声が通話を妨害するのを防ぐことができます。

```js
navigator.audioSession.type = "play-and-record";
```

次に、通常どおりビデオ通話用のメディアストリームを設定します。プラットフォームは、これらのストリームによって生成された音声を `"play-and-record"` セッションタイプに従って処理します。

```js
// Start playing remote media
remoteVideo.srcObject = remoteMediaStream;
remoteVideo.play();

// Start capturing local media
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((stream) => {
    localVideo.srcObject = stream;
  });
```

## 仕様

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioSession")}}
- {{domxref("Navigator.audioSession")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLMediaElement")}}
