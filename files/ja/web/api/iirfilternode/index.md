---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Web Audio API")}}

**`IIRFilterNode`** は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のインターフェイスで、{{domxref("AudioNode")}} プロセッサーであり、一般の **[無限インパルス応答](https://ja.wikipedia.org/wiki/無限インパルス応答)** (IIR) フィルターを実装します。この種類のフィルターは、トーンコントロール機器やグラフィックイコライザーを実装するためにも使用することができます。フィルター応答の引数を指定しますので、必要に応じてチューニングすることができます。

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
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">チャンネルカウント</th>
      <td>入力と同じ</td>
    </tr>
    <tr>
      <th scope="row">チャンネル補間</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

一般的に、高次フィルターを実装するためには {{domxref("BiquadFilterNode")}} インターフェイスを使用するのが最適です。それにはいくつかの理由があります：

- バイカッドフィルターは、一般的に数値の変化にあまり敏感ではない。
- バイカッドフィルターのフィルター引数は自動化できる。
- 偶数次 IIR フィルターはすべて {{domxref("BiquadFilterNode")}} を使用して作成することができる。

しかし、奇数順の IIR フィルターを作成する必要がある場合は、`IIRFilterNode`を使用する必要があります。また、自動化を使用しない場合や、他にもこのインターフェイスが有益であることが分かるかもしれません。

> [!NOTE]
> ノードが作成されると、その係数を変更することはできません。

`IIRFilterNode` はテールタイム参照があります。入力がゼロでも静音でない音声を出力し続けます。IIR フィルターとして、ゼロでない入力が永遠に続き、出力が十分にゼロに近づいたとき、これは実際にはある有限の時間の後に制限することができます。実際にかかる時間は、指定されたフィルター係数に依存します。

## コンストラクター

- {{domxref("IIRFilterNode.IIRFilterNode", "IIRFilterNode()")}}
  - : IIRFilterNode オブジェクトの新しいインスタンスを作成します。

## インスタンスプロパティ

_このインターフェイスに独自プロパティはありません。プロパティを親である {{domxref("AudioNode")}} から継承しています_。

## インスタンスメソッド

_メソッドを親である {{domxref("AudioNode")}} から継承しています。加えて以下のメソッドもあります。_

- {{domxref("IIRFilterNode.getFrequencyResponse", "getFrequencyResponse()")}}
  - : フィルターの現在のパラメーターの設定を用いて、提供された周波数の配列で指定された周波数のレスポンスを計算します。

## 例

単純な IIR フィルターのデモをライブで [Codepen](https://codepen.io/Rumyra/pen/oPxvYB/) で見ることができます。また、[GitHub でソースコード](https://github.com/mdn/webaudio-examples/tree/master/iirfilter-node)も参照してください。様々なローパス周波数に対して様々な係数の値を含めることができます。定数 `filterNumber` の値を 0 から 3 の間の値に変更して、利用できる効果を調べることができます。

また、詳しい説明は、[IIR フィルターの使用](/ja/docs/Web/API/Web_Audio_API/Using_IIR_filters) ガイドをご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
- {{domxref("BiquadFilterNode")}}
