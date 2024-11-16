---
title: ScriptProcessorNode
slug: Web/API/ScriptProcessorNode
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

`ScriptProcessorNode` インターフェイスは、JavaScript を使って音声を生成、処理、または分析することを可能にします。

{{InheritanceDiagram}}

> [!NOTE]
> この機能は [AudioWorklets](/ja/docs/Web/API/AudioWorklet) と {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

`ScriptProcessorNode` インターフェイスは {{domxref("AudioNode")}} 音声処理モジュールであり、入力音声データを含む 2 つのバッファーと処理後の出力音声データを含む 1 つのバッファーにリンクされています。入力バッファーに新しいデータが入るたびに {{domxref("AudioProcessingEvent")}} インターフェイスを実装したイベントがオブジェクトに送られ、出力バッファーがデータでいっぱいになるとイベントハンドラーは終了します。

![ScriptProcessorNode は、入力をバッファーに格納し、 audioprocess イベントを送信します。 EventHandler は入力バッファーを受け取り、出力バッファーを満たし、 ScriptProcessorNode によって出力に送信されます。](webaudioscriptprocessingnode.png)

入力バッファーと出力バッファーのサイズは {{domxref("BaseAudioContext.createScriptProcessor")}} メソッドが呼び出されたときの作成時に定義します（どちらも {{domxref("BaseAudioContext.createScriptProcessor")}} の `bufferSize` 引数で定義されます）。バッファーサイズは `256` から `16384` までの 2 の累乗、つまり `256`、`512`、`1024`、`2048`、`4096`、`8192`、`16384` のいずれかでなければなりません。小さい数値のほうが遅延を低減させますが、音声の途切れやグリッチを避けるために大きな値が必要な場合もあります。

もしバッファーサイズが定義されていない場合、これが推奨ですが、ブラウザーは経験則的に適切と思われるものを選びます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">入力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">出力数</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウントモード</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウント</th>
      <td><code>2</code> (既定のカウントモードで使用しない)</td>
    </tr>
    <tr>
      <th scope="row">チャンネルの解釈</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## インスタンスプロパティ

_親である {{domxref("AudioNode")}} から継承したプロパティがあります_。

- {{domxref("ScriptProcessorNode.bufferSize")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 入力と出力の両方のバッファーサイズを表す整数を返します。この値は、 `256` から `16384` までの範囲の 2 のべき乗の値です。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("AudioNode")}} から継承したプロパティがあります_。

## イベント

これらのイベントは [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使って、あるいはこのインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てることで待ち受けます。

- [`audioprocess`](/ja/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : `ScriptProcessorNode` の入力バッファーが処理可能な状態になったときに発行されます。
    また、`onaudioprocess` イベントハンドラープロパティでも利用可能です。

## 例

コード例については [`BaseAudioContext.createScriptProcessor()`](/ja/docs/Web/API/BaseAudioContext/createScriptProcessor#例) を参照してください。

## 仕様書

2014 年 8 月 29 日の[ウェブオーディオ API 仕様書](https://www.w3.org/TR/webaudio/#ScriptProcessorNode)の公開以降、この機能は非推奨となりました。標準化される予定はなくなりました。

[AudioWorklets](/ja/docs/Web/API/AudioWorklet) と {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
