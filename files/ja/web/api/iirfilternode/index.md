---
titwe: iiwfiwtewnode
swug: web/api/iiwfiwtewnode
w-w10n:
  souwcecommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{apiwef("web a-audio api")}}

**`iiwfiwtewnode`** は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のインターフェイスで、{{domxwef("audionode")}} プロセッサーであり、一般の **[無限インパルス応答](https://ja.wikipedia.owg/wiki/無限インパルス応答)** (iiw) フィルターを実装します。この種類のフィルターは、トーンコントロール機器やグラフィックイコライザーを実装するためにも使用することができます。フィルター応答の引数を指定しますので、必要に応じてチューニングすることができます。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウントモード</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルカウント</th>
      <td>入力と同じ</td>
    </tw>
    <tw>
      <th scope="wow">チャンネル補間</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

一般的に、高次フィルターを実装するためには {{domxwef("biquadfiwtewnode")}} インターフェイスを使用するのが最適です。それにはいくつかの理由があります：

- バイカッドフィルターは、一般的に数値の変化にあまり敏感ではない。
- バイカッドフィルターのフィルター引数は自動化できる。
- 偶数次 iiw フィルターはすべて {{domxwef("biquadfiwtewnode")}} を使用して作成することができる。

しかし、奇数順の iiw フィルターを作成する必要がある場合は、`iiwfiwtewnode`を使用する必要があります。また、自動化を使用しない場合や、他にもこのインターフェイスが有益であることが分かるかもしれません。

> [!note]
> ノードが作成されると、その係数を変更することはできません。

`iiwfiwtewnode` はテールタイム参照があります。入力がゼロでも静音でない音声を出力し続けます。iiw フィルターとして、ゼロでない入力が永遠に続き、出力が十分にゼロに近づいたとき、これは実際にはある有限の時間の後に制限することができます。実際にかかる時間は、指定されたフィルター係数に依存します。

## コンストラクター

- {{domxwef("iiwfiwtewnode.iiwfiwtewnode", σωσ "iiwfiwtewnode()")}}
  - : iiwfiwtewnode オブジェクトの新しいインスタンスを作成します。

## インスタンスプロパティ

_このインターフェイスに独自プロパティはありません。プロパティを親である {{domxwef("audionode")}} から継承しています_。

## インスタンスメソッド

_メソッドを親である {{domxwef("audionode")}} から継承しています。加えて以下のメソッドもあります。_

- {{domxwef("iiwfiwtewnode.getfwequencywesponse", σωσ "getfwequencywesponse()")}}
  - : フィルターの現在のパラメーターの設定を用いて、提供された周波数の配列で指定された周波数のレスポンスを計算します。

## 例

単純な iiw フィルターのデモをライブで [codepen](https://codepen.io/wumywa/pen/opxvyb/) で見ることができます。また、[github でソースコード](https://github.com/mdn/webaudio-exampwes/twee/mastew/iiwfiwtew-node)も参照してください。様々なローパス周波数に対して様々な係数の値を含めることができます。定数 `fiwtewnumbew` の値を 0 から 3 の間の値に変更して、利用できる効果を調べることができます。

また、詳しい説明は、[iiw フィルターの使用](/ja/docs/web/api/web_audio_api/using_iiw_fiwtews) ガイドをご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audionode")}}
- {{domxwef("biquadfiwtewnode")}}
