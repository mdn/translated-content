---
title: "AudioBuffer: AudioBuffer() コンストラクター"
short-title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`AudioBuffer`** は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のコンストラクターで、新しい {{domxref("AudioBuffer")}} オブジェクトを生成します。

## 構文

```js-nolint
new AudioBuffer(options)
```

### 引数

- `options`

  - : オプションは次の通りです。

    - `length`
      - : オーディオバッファーのサイズ（サンプルフレーム単位）。特定の秒数の音声に使用する `length` を決定するには、`numSeconds * sampleRate` を使用してください。
    - `numberOfChannels`
      - : バッファーのチャンネル数です。既定値は 1 で、すべてのユーザーエージェントは最低でも 32 チャンネルを対応する必要があります。
    - `sampleRate`
      - : バッファーのサンプリングレート（単位: Hz）。既定では、このオブジェクトを作成する際に使用した `context` のサンプリングレートになります。ユーザーエージェントは 8,000 Hz から 96,000 Hz までのサンプリングレートに対応する必要があります（ただし、この範囲外でもかまいません）。
    - `channelCount`
      - : ノードへの任意の入力に[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)接続する際に使用するチャンネル数を決めるための整数を表します。
      （詳しくは {{domxref("AudioNode.channelCount")}} を参照してください。）その使い方や正確な定義は `channelCountMode` の値に依存します。
    - `channelCountMode`
      - : ノードの入力と出力の間でチャンネルを一致させる方法を記述する列挙型の値を表します。（既定値を含む詳細は {{domxref("AudioNode.channelCountMode")}} を参照してください。）
    - `channelInterpretation`
      - : チャンネルの意味を記述した列挙型の値を表します。この解釈により、音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)がどのように行われるかが定義されることになります。
      指定可能な値は `"speakers"` または `"discrete"` です。（既定値を含むより詳細な情報については {{domxref("AudioNode.channelCountMode")}} を参照してください。）

#### 非推奨の引数

- `context` {{Deprecated_Inline}}
  - : {{domxref("AudioContext")}} への参照です。この引数は仕様書から削除されました。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 1 つ以上のオプションが負の値であるか、あるいは無効な値である場合（例えば `numberOfChannels` がサポートされているよりも大きい、あるいは `sampleRate` が公称範囲外であるなど）に発生します。
- {{jsxref("RangeError")}}
  - : バッファーを割り当てるのに十分なメモリーがない場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
