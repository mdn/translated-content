---
title: "AudioBufferSourceNode: AudioBufferSourceNode() コンストラクター"
short-title: AudioBufferSourceNode()
slug: Web/API/AudioBufferSourceNode/AudioBufferSourceNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`AudioBufferSourceNode()`** コンストラクターは、新しい {{domxref("AudioBufferSourceNode")}} オブジェクトインスタンスを生成します。

## 構文

```js-nolint
new AudioBufferSourceNode(context, options)
```

### 引数

- `context`
  - : {{domxref("AudioContext")}} への参照。
- `options` {{optional_inline}}
  - : 以下のオプションです。
    - `buffer`
      - : 再生される {{domxref("AudioBuffer")}} のインスタンス。
    - `detune`
      - : 音声ストリームのレンダリング速度を調整するためのセント単位の値。公称範囲は（-∞ から +∞）です。既定では `0` です。
    - `loop`
      - : 論理値で、音声をループ再生させるかどうかを示します。
        既定値は `false` です。ループが再生中に動的に変更された場合、新しい値は音声の次の処理ブロックに反映されます。
    - `loopEnd`
      - : オプションで、 loop 属性が `true` である場合にループを終了させる値を秒単位で指定します。既定では `0` です。この値は、ループの中身とは関係ありません。ループを構成するサンプルフレームは、 `loopStart` から `loopEnd`-(1/`sampleRate`) までの値で実行されます。この値は 0 からバッファーの持続時間の間に設定するのが賢明です。もし `loopEnd` が 0 よりも小さければ、ループは 0 で終わり、もし `loopEnd` がバッファーの持続時間よりも大きければ、ループはバッファーの終端で終了します。この属性は、バッファーのサンプルレートを掛け、最も近い整数値に丸めることで、バッファー内の正確なサンプルフレームオフセットに変換されます。そのため、この属性の動作は `playbackRate` 引数の値には依存しません。
    - `loopStart`
      - : オプションで、 loop 属性が `true` の場合にループを始める値を秒単位で指定します。既定では `0` です。0 とバッファーの持続時間の間の値に設定するのが賢明です。もし `loopStart` が 0 よりも小さい場合、ループは 0 から始まります。もし `loopStart` がバッファーの持続時間よりも大きい場合、ループはバッファーの終わりから始まります。この属性は、バッファーのサンプルレートを掛け、最も近い整数値に丸めることで、バッファー内の正確なサンプルフレームオフセットに変換されます。そのため、この属性の動作は `playbackRate` 引数の値には依存しません。
    - `playbackRate`
      - : 音声ストリームをレンダリングする速度を指定します。既定値では `1` です。この引数は k-rate です。離調との複合引数です。公称範囲は（-∞ から +∞）です。
    - `channelCount`
      - : ノードへの任意の入力への接続を[アップミキシングおよびダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)する際に使用されるチャンネル数を決定するために使用される整数を表します。（詳細は {{domxref("AudioNode.channelCount")}} を参照。）使用方法と正確な定義は、 `channelCountMode` の値に依存します。
    - `channelCountMode`
      - : ノードの入出力間でチャンネルを一致させる方法を記述した列挙型の値を表します。（既定値を含む詳細情報は {{domxref("AudioNode.channelCountMode")}} を参照してください。）
    - `channelInterpretation`
      - : チャンネルの意味を表現する列挙値を記述します。この解釈により、音声の[アップミキシングおよびダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)がどのように行われるかが定義されます。使用可能な値は `"speakers"` または `"discrete"` です。（既定値で記載される詳細な情報は {{domxref("AudioNode.channelCountMode")}} を参照してください。）

### 返値

新しい {{domxref("AudioBufferSourceNode")}} オブジェクトインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
