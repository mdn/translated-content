---
title: "AudioWorkletProcessor: process() メソッド"
slug: Web/API/AudioWorkletProcessor/process
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletProcessor")}} の派生クラスの **`process()`** メソッドは、音声処理器ワークレットの音声処理アルゴリズムを実装します。

このメソッドは {{domxref("AudioWorkletProcessor")}} インターフェイスには含まれていませんが、`AudioWorkletProcessor` の実装はすべて `process()` メソッドを用意しなければいけません。

このメソッドは、処理器の対応する {{domxref("AudioWorkletNode")}} に音声ブロック (rendering quantum とも呼ばれる) が送られてくるたびに、音声レンダリングスレッドから同期で呼ばれます。
すなわち、新しい音声ブロックが処理器で処理可能になるたびに、処理をするために `process()` 関数が呼ばれます。

> [!NOTE]
> 現在、音声データブロックの長さは常に 128 フレームです。すなわち、入力のそれぞれのチャンネルについて 128 個の 32 ビット浮動小数点数のサンプルが格納されています。しかし、この仕様を変更し、状況に応じて (たとえば、音声ハードウェアや CPU の使用の効率がブロックサイズを大きくすると上がる場合) 音声ブロックのサイズを変えることができるようにする計画がすでに進行中です。このため、特定のサイズを仮定するのではなく、_常にサンプル配列のサイズをチェックしなければなりません。_
>
> このサイズは時間とともに変わることも許される可能性があるので、最初のブロックだけを見てサンプルバッファーのサイズが常に同じだと仮定してはいけません。

## 構文

```js-nolint
process(inputs, outputs, parameters)
```

### 引数

- `inputs`

  - : ノードに接続されている _入力_ の配列です。この配列のそれぞれの要素は _チャンネル_ の配列です。それぞれの _チャンネル_ は 128 個のサンプルが入った {{jsxref("Float32Array")}} です。たとえば、`inputs[n][m][i]` は `n` 番目の入力の `m` 番目のチャンネルの `i` 番目のサンプルにアクセスします。

    それぞれのサンプルの値は `[-1 .. 1]` の範囲です。

    _入力_ の数、そしてそれを反映したこの配列の長さはノードの生成時に固定されます。({{domxref("AudioWorkletNode")}} を参照してください) ノードの `n` 番目の入力に活動中のノードが接続されていない場合は、`inputs[n]` は空の配列になります。(0 個の入力チャンネルが利用可能です)

    各入力の _チャンネル_ の数は {{domxref("AudioNode.channelCount", "channelCount")}} および {{domxref("AudioNode.channelCountMode", "channelCountMode")}} プロパティによって変化する可能性があります。

- `outputs`
  - : _出力_ の配列で、引数 `inputs` と似た構造です。`process()` メソッドの実行時に値を入れられることを意図しています。各出力チャンネルはゼロで初期化されます。すなわち、出力の配列を変更しない場合は処理器は無音を出力します。
- `parameters`

  - : 文字列のキーと {{jsxref("Float32Array")}} の値を持つオブジェクトです。{{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} ゲッターで定義した独自の {{domxref("AudioParam")}} それぞれについて、`name` がこのオブジェクトのキーとなり、値が {{jsxref("Float32Array")}} となります。配列に格納する値は、スケジュールされた自動化イベントを考慮して計算されます。

    パラメーターの自動化レートが [`"a-rate"`](/ja/docs/Web/API/AudioParam#a-rate) の場合は、配列には 128 個の値が格納され、現在の音声ブロックのそれぞれのフレームに値が 1 個ずつ対応します。現在のブロックが表す時間中に自動化が行われていない場合は、同じ値を 128 個格納するかわりに、ブロック全体で変わらない 1 個の値が格納されることがあります。

    自動化レートが [`"k-rate"`](/ja/docs/Web/API/AudioParam#k-rate) の場合は、配列には 1 個の値が格納され、この値を 128 個のフレームそれぞれで用います。

### 返値

{{Glossary("user agent", "ユーザーエージェント")}}の内部ロジックがノードをシャットダウンしても安全だと判断しても {{domxref("AudioWorkletNode")}} の活動を続けるかを表す {{jsxref("boolean")}} 値を返します。

この返値により、処理器が {{domxref("AudioWorkletProcessor")}} とそれを所有するノードの生存期間ポリシーを制御することができます。ブラウザーが返値とノードの状態に基づいてノードを停止すると判断すると、`process()` は呼ばれなくなります。

`true` を返すことで、ウェブオーディオ API にこのノードの活動を継続させることができます。
`false` を返すと、新しい音声データの生成も、処理中の入力からのデータの取得もしていないとき、ブラウザーがノードを終了させることができるようになります。

最もよくみられる音声ノードの種類として、以下の 3 種類があります。

1. 出力元。このようなノードを実装している {{domxref("AudioWorkletProcessor")}} では、出力を生成している間はずっと `process` メソッドは `true` を返すべきです。もう出力を生成しないということがわかったら、このメソッドはできるだけすぐに `false` を返すべきです。たとえば、{{domxref("AudioBufferSourceNode")}} を考えてみましょう。この種類のノードのための処理器は、バッファーの再生中は `process` メソッドは `true` を返し、バッファーの再生が終わったら `false` を返し始めるべきです。(同じ {{domxref("AudioBufferSourceNode")}} で再び `play` を呼ぶことはできません)
2. 入力を変換するノード。このようなノードを実装している処理器は、活動中の入力ノードやノードへの参照があるときガベージコレクトの対象にできるかどうかを判断できるようにするため、`process` メソッドは `false` を返すべきです。この挙動をするノードの例は {{domxref("GainNode")}} です。接続されている入力が無くなったらすぐ、参照は残っていても、ゲインを適用する対象が無いので、安全にガベージコレクトの対象にできます。
3. 入力を変換するが、_テールタイム_ があるノード。すなわち、入力が切断されたり活動を停止 (0 個のチャンネルを生成する) したりした後もしばらくの間出力を生成するノード。このようなノードを実装している処理器は、(入力に含まれるチャンネルが 0 個になるとすぐに始まる) _テールタイム_ の間は `process` メソッドは `true` を返すべきです。このようなノードの例は {{domxref("DelayNode")}} です。このノードには {{domxref("DelayNode.delayTime", "delayTime")}} プロパティに等しい _テールタイム_ があります。

> **メモ:** `return` 文が無い場合、メソッドは `undefined` を返すことになります。これは偽と解釈される値なので、`false` を返すのと同じ効果があります。
> 明示的な `return` 文を省略すると、ノードが見つけにくい問題を起こす可能性があります。

### 例外

`process()` メソッドはユーザーが実装するので、任意の例外を投げることができます。
補足されないエラーが投げられた場合は、ノードは {{domxref("AudioWorkletNode.processorerror_event", "processorerror")}} イベントを生成し、その後ずっと無音を出力します。

## 例

この例では、最初の出力としてホワイトノイズを出力する `AudioWorkletProcessor` を作成します。ゲインは `customGain` パラメーターで制御できます。

```js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // 最初の出力を取得する
    const output = outputs[0];
    // 各チャンネルにランダム値にゲインを掛けたものを入れる
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        // 各サンプル用のランダム値を生成する
        // Math.random の値域は [0; 1) だが、ここでは [-1; 1] が欲しい
        // 1 ちょうどにはならないが、簡単のためここではよい
        channel[i] =
          (Math.random() * 2 - 1) *
          // この配列には、自動化が進行中か、
          // そして自動化レートが k-rate なのか a-rate なのかにより、
          // 1 個または 128 個の値が格納されている
          (parameters["customGain"].length > 1
            ? parameters["customGain"][i]
            : parameters["customGain"][0]);
      }
    });
    // これは自身で出力を生成する音源ノードなので、
    // メインスレッドから参照されていなくても、
    // 間違ってガベージコレクトされないように true を返す
    return true;
  }
  // process メソッドで用いる customGain パラメーターを定義する
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

これはブラウザーが提供するメソッドではなく、クライアントコードで書く必要があるコールバックメソッドです。

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
