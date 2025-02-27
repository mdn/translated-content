---
title: AudioContext
slug: Web/API/AudioContext
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}

`AudioContext` インターフェイスは {{domxref("AudioNode")}} によって表現され、互いにリンクする音声モジュールから作られた音声処理グラフを表します。

音声コンテキストは、それが格納するノードの作成と、音声処理（デコード）の実行の両方を制御します。何らかの処理を行う前に `AudioContext` を作成する必要があります。毎回新しいものを初期化するのではなく、 1 つの AudioContext を作成し、それを再利用することを推奨します。また、 1 つの `AudioContext` を複数の異なるオーディオソースに使用し、同時にパイプラインを使用しても問題ありません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
  - : `AudioContext` オブジェクトを新しく作成し、返します。

## インスタンスプロパティ

_親インターフェイスである {{domxref("BaseAudioContext")}} から継承したプロパティもあります。_

- {{domxref("AudioContext.baseLatency")}} {{ReadOnlyInline}}
  - : {{domxref("AudioContext")}} が {{domxref("AudioDestinationNode")}} から音声サブシステムに音声を渡す際に発生する処理遅延の秒数を返します。
- {{domxref("AudioContext.outputLatency")}} {{ReadOnlyInline}}
  - : 現在の音声コンテキストの出力レイテンシーの見積を返します。
- {{domxref("AudioContext.sinkId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の出力音声機器のシンク ID を返します。

## インスタンスメソッド

_親インターフェイスである {{domxref("BaseAudioContext")}} から継承したメソッドもあります。_

- {{domxref("AudioContext.close()")}}
  - : 任意のシステム音声リソースをリリースするために、音声コンテキストを閉じます。
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : {{domxref("HTMLMediaElement")}} と関連付けられた {{domxref("MediaElementAudioSourceNode")}} を生成します。これは {{HTMLElement("video")}} 要素もしくは {{HTMLElement("audio")}} 要素からの再生や操作をするために使うことができます。
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : ローカルのコンピューターのマイクもしくは他のソースから来る音声ストリームを表現している {{domxref("MediaStream")}} と関連付けられた {{domxref("MediaStreamAudioSourceNode")}} を生成します。
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : ローカルファイルに保存されたものかその他のコンピューターに送信された音声ストリームを表す {{domxref("MediaStream")}} と関連付けられた {{domxref("MediaStreamAudioDestinationNode")}} を生成します。
- {{domxref("AudioContext.createMediaStreamTrackSource()")}}
  - : メディアストリームトラックを表す {{domxref("MediaStream")}} と関連づけられた {{domxref("MediaStreamTrackAudioSourceNode")}} を生成します。
- {{domxref("AudioContext.getOutputTimestamp()")}}
  - : 2 つの関連づけられたコンテキストの音声ストリームの位置の値を含む新しい `AudioTimestamp` オブジェクトを返します。
- {{domxref("AudioContext.resume()")}}
  - : 前回中断/一時停止した音声コンテキストの時間の進行を再開します。
- {{domxref("AudioContext.setSinkId()")}} {{Experimental_Inline}}
  - : この `AudioContext` 用の出力音声機器を設定します。
- {{domxref("AudioContext.suspend()")}}
  - : 一時的に音声ハードウェアアクセスを停止し、プロセスの CPU/バッテリー使用を減らすために、音声コンテキストの時間の進行を中断します。

## イベント

- {{domxref("AudioContext/sinkchange_event", "sinkchange")}} {{Experimental_Inline}}
  - : 出力音声デバイスが変更された (そしてその結果 {{domxref("AudioContext.sinkId")}} が変更された) 時発火します。

## 例

基本的な音声コンテキストの作成方法です。

```js
const audioCtx = new AudioContext();

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
const finish = audioCtx.destination;
// etc.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 参考

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("OfflineAudioContext")}}
