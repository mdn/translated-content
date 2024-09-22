---
title: ConvolverNode
slug: Web/API/ConvolverNode
---

{{APIRef("Web Audio API")}}

`ConvolverNode` は {{domxref("AudioNode")}} の一種で、与えられた {{domxref("AudioBuffer")}} を用いて線形畳み込みを行います。リバーブの実装によく用いられます。 `ConvolverNode` は常に 1 つの入力と、1 つの出力を持ちます。

> [!NOTE]
> 線形畳み込みの理論的な側面については、[Wikipedia の「畳み込み」](https://ja.wikipedia.org/wiki/%E7%95%B3%E3%81%BF%E8%BE%BC%E3%81%BF)を参照してください。

{{InheritanceDiagram}}

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
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネル数</th>
      <td><code>1</code>, <code>2</code>, <code>4</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルの解釈</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## コンストラクター

- {{domxref("ConvolverNode.ConvolverNode()", "ConvolverNode()")}}
  - : `ConvolverNode` オブジェクトの新しいインスタンスを生成します。

## プロパティ

_親である {{domxref("AudioNode")}} からプロパティを継承しています_。

- {{domxref("ConvolverNode.buffer")}}
  - : モノラル、ステレオ、 4 チャンネルの _{{domxref("AudioBuffer")}}_ で、 `ConvolververNode` がリバーブ効果を生成するために使用する（おそらくマルチチャンネルの）インパルス応答を含みます。
- {{domxref("ConvolverNode.normalize")}}
  - : 論理値で、 `buffer` 属性が設定されているときに、バッファーからのインパルス応答を等力正規化でスケーリングするかどうかを制御します。

## メソッド

_固有のメソッドはありません。親である {{domxref("AudioNode")}} からメソッドを継承しています_。

## ConvolverNode の例

次の例は、コンボルバーノードを作成するための AudioContext の基本的な使い方を示しています。

> [!NOTE]
> 以下の例を完成させるために、インパルス応答を求める必要があります。応用例はこちらの [Codepen](https://codepen.io/DonKarlssonSan/pen/doVKRE) をご覧ください。

```js
let audioCtx = new window.AudioContext();

async function createReverb() {
    let convolver = audioCtx.createConvolver();

    // load impulse response from file
    let response     = await fetch("path/to/impulse-response.wav");
    let arraybuffer  = await response.arrayBuffer();
    convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

    return convolver;
}

...

let reverb = await createReverb();

// someOtherAudioNode -> reverb -> destination
someOtherAudioNode.connect(reverb);
reverb.connect(audioCtx.destination);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
