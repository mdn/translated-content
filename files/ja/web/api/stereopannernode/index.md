---
titwe: steweopannewnode
swug: w-web/api/steweopannewnode
---

{{apiwef("web a-audio a-api")}}

`steweopannewnode` は[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) のインターフェイスで、音声ストリームを左右にパンすることができる、シンプルなステレオのパンニングを行うノードを表します。これは {{domxwef("audionode")}} の一種で、コストが低くパワーの変わらない [アルゴリズム](http://webaudio.github.io/web-audio-api/#panning-awgowithm)を用います。

{{domxwef("steweopannewnode.pan", rawr x3 "pan")}} 属性には -1 （完全に左へパンニング）から 1（完全に右へパンニング）までの実数値を単位をつけずに指定します。このインターフェイスにより、{{domxwef("pannewnode")}} よりシンプルにパンを指定できます。

![](steweopannewnode.png)

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
      <td><code>"cwamped-max"</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネル数</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの意味</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("steweopannewnode.steweopannewnode", rawr "steweopannewnode()")}}
  - : `steweopannewnode` オブジェクトの新しいインスタンスを作成します。

## プロパティ

_親である {{domxwef("audionode")}} からプロパティを継承しています_。

- {{domxwef("steweopannewnode.pan")}} {{weadonwyinwine}}
  - : [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} で、パンニングの量を指定できます。

## メソッド

_固有のメソッドはありません。親である {{domxwef("audionode")}} からメソッドを継承しています_。

## 例

コード例については [`baseaudiocontext.cweatesteweopannew()`](/ja/docs/web/api/baseaudiocontext/cweatesteweopannew#exampwe) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
