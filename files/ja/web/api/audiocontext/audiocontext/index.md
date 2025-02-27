---
title: "AudioContext: AudioContext() コンストラクター"
short-title: AudioContext()
slug: Web/API/AudioContext/AudioContext
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Web Audio API")}}

**`AudioContext()`** コンストラクターは新しい {{domxref("AudioContext")}} オブジェクトを生成します。このオブジェクトは音声モジュールが相互に接続された音声処理のグラフを表現しています。このグラフ中で用いられる音声モジュールは {{domxref("AudioNode")}} として表現されます。

## 構文

```js-nolint
new AudioContext()
new AudioContext(options)
```

### 引数

- `options` {{optional_inline}}
  - : コンテキストを設定するために使用するオブジェクト。利用できるプロパティは以下のとおりです。
    - `latencyHint` {{optional_inline}}
      - : コンテキストを使用する再生の種類。定義済みの文字列（`"balanced"`、`"interactive"`、`"playback"`）、またはコンテキストの推奨する最大レイテンシーを秒単位で示す倍精度浮動小数点数値です。
        ユーザーエージェントは、このリクエストに応じても応じなくても構いません。
        コンテキストを作成した後、 {{domxref("AudioContext.baseLatency")}} の値を調べて真のレイテンシーを決定します。
        - `"balanced"`: ブラウザーはレイテンシー値を選択する際、音声出力のレイテンシーと消費電力のバランスをとります。
        - `"interactive"` （既定値）: 音声は、ユーザー操作に反応したり、動画やゲームのアクションなどの視覚的な合図に合わせる必要があるなど、インタラクティブな要素に関与します。
          ブラウザーは音声にグリッチを発生させない使用可能な最低のレイテンシーを選択します。これは消費電力の増加を要求される可能性があります。
        - `"playback"`: ブラウザーは、レイテンシーを犠牲にして消費電力を最小限に抑え、再生時間を最大化するレイテンシーを選択します。
          音楽再生など、操作を必要としない再生に有益な機能です。
    - `sampleRate` {{optional_inline}}
      - : 新しいコンテキストに使用するサンプリングレートを示します。この値は、新しいコンテキストを構成するサンプリングレートを示す浮動小数点数で、 1 秒あたりのサンプル数でなければなりません。
        また、 {{domxref("AudioBuffer.sampleRate")}} で対応している値でなければなりません。
        値は通常 8,000Hz から 96,000Hz の間で、既定値は出力機器によって異なりますが、サンプリングレート 44,100Hz が最も一般的です。
        もし `sampleRate` プロパティがオプションに含まれていなかったり、音声コンテキストを作成するときにオプションが指定されていなかったりした場合 は、新しいコンテキストの出力機器が推奨するサンプリングレートが既定で使用されます。
    - `sinkId` {{optional_inline}} {{Experimental_Inline}}
      - : `AudioContext` に使用するオーディオ出力機器のシンク ID を指定します。これは以下の値のうちの一つを取ります。
        - シンク ID を表す文字列です。これは例えば、 {{domxref("MediaDevices.enumerateDevices()")}} が返す {{domxref("MediaDeviceInfo")}} オブジェクトの `deviceId` プロパティから取得したものです。
        - シンク ID を表す文字列です。シンク ID を表す文字列です。

### 返値

新しい {{domxref("AudioContext")}} インスタンスです。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 指定した `sampleRate` がコンテキストで対応していない場合に発生します。

## 使用上の注意

仕様書では、ユーザーエージェントが対応すべき音声コンテキストの数や、レイテンシの最小・最大要件（もしあれば）などについてあまり詳しく説明していないため、これらの詳細はブラウザーによって異なる可能性があります。重要であれば、必ず値を調べてください。

特に、仕様書では同時に開くための音声コンテキストの最大数や最小数を示していないため、これはブラウザーの実装に任せられています。

### Google Chrome

#### Chrome におけるタブごとの音声コンテキストの制約

バージョン 66 以前の Google Chrome では、 1 つのタブにつき最大 6 つの音声コンテキストにしか対応していませんでした。

#### Chrome での標準外の例外

`latencyHint` プロパティの値が有効でない場合、Chrome は "The provided value '...' is not a valid enum value of type AudioContextLatencyCategory" というメッセージと共に {{jsxref("TypeError")}} 例外を発生します。

## 例

この例では、インタラクティブ音声用の新しい {{domxref("AudioContext")}} を作成し（遅延を最適化）、サンプルレートを 44.1kHz、音声出力を固有のものにします。

```js
const audioCtx = new AudioContext({
  latencyHint: "interactive",
  sampleRate: 44100,
  sinkId: "bb04fea9a8318c96de0bd...", // truncated for brevity
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("OfflineAudioContext.OfflineAudioContext()", "OfflineAudioContext()")}} コンストラクター
