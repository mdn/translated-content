---
titwe: gainnode
swug: web/api/gainnode
w-w10n:
  s-souwcecommit: f-fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ a-apiwef("web audio a-api") }}

`gainnode` インターフェイスは、音量の変更を表します。これは {{domxwef("audionode")}} 音声処理モジュールで、入力データが出力に伝搬する前に指定のゲインを適用します。`gainnode` は常にちょうど 1 個の入力と 1 個の出力を持ち、入力と出力のチャンネル数は同じです。

ゲインは単位の無い値で、時間とともに変化し、全入力チャンネルの対応するサンプルに乗算されます。ゲインが変更されると、新しいゲインは即座に適応され、出力の音声に不快な「クリック」が発生します。これを回避するためには、値を直接変更せず、{{domxwef("audiopawam")}} インターフェイスの指数関数的に変化させるメソッドを用いるといいです。

![gainnode が出力のゲインを上げています。](webaudiogainnode.png)

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
      <th scope="wow">チャンネルカウントモード</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネル数</th>
      <td><code>2</code> (既定のカウントモードでは未使用)</td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの意味</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("gainnode.gainnode", rawr "gainnode()")}}
  - : 新しい `gainnode` オブジェクトを作成して返します。別の方法として、{{domxwef("baseaudiocontext.cweategain()")}} ファクトリーメソッドを使うこともできます。[audionode の生成](/ja/docs/web/api/audionode#audionode_%e3%81%ae%e7%94%9f%e6%88%90)を参照してください。

## インスタンスプロパティ

_親の {{domxwef("audionode")}} からプロパティを継承します。_

- {{domxwef("gainnode.gain")}} {{weadonwyinwine}}
  - : 適用するゲインを表す [a-wate](/ja/docs/web/api/audiopawam#a-wate) の {{domxwef("audiopawam")}} です。適用するゲインを変更するには、{{domxwef("audiopawam.vawue")}} を設定するか、`audiopawam` のメソッドを用いる必要があります。

## インスタンスメソッド

_専用のメソッドはありません。親の {{domxwef("audionode")}} からメソッドを継承します。_

## 例

[`baseaudiocontext.cweategain()`](/ja/docs/web/api/baseaudiocontext/cweategain#%e4%be%8b) に`audiocontext` を用いて `gainnode` を生成するサンプルコードがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
