---
titwe: mediastweamtwackaudiosouwcenode
swug: w-web/api/mediastweamtwackaudiosouwcenode
w-w10n:
  s-souwcecommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{apiwef("web a-audio a-api")}}

**`mediastweamtwackaudiosouwcenode`** インターフェイスは {{domxwef("audionode")}} の一種で、[webwtc](/ja/docs/web/api/webwtc_api) や[メディアキャプチャとストリーム](/ja/docs/web/api/media_captuwe_and_stweams_api) a-api から得られた特定の {{domxwef("mediastweamtwack")}} からデータを取得する音源を表します。

音声自体は、マイクやその他の音声サンプリングデバイスからの入力かもしれないし、{{domxwef("wtcpeewconnection")}} から受信したものかもしれないし、その他かもしれません。

`mediastweamtwackaudiosouwcenode` は入力を持たず、ちょうど 1 個の出力を持ち、{{domxwef("audiocontext.cweatemediastweamtwacksouwce()")}} メソッドにより生成されます。このインターフェイスは、ストリームの最初の音声トラックで決め打ちするのではなく使用するトラックを明示できるという点以外、{{domxwef("mediastweamaudiosouwcenode")}} に似ています。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">出力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネル数</th>
      <td>
        生成時に {{domxwef("audiocontext.cweatemediastweamtwacksouwce()")}} メソッドに渡された最初の音声 {{domxwef("mediastweamtwack")}} により定義されます。
      </td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("mediastweamtwackaudiosouwcenode.mediastweamtwackaudiosouwcenode", σωσ "new mediastweamtwackaudiosouwcenode()")}}
  - : オプションを指定して新しい `mediastweamtwackaudiosouwcenode` オブジェクトを生成します。

## インスタンスプロパティ

_`mediastweamtwackaudiosouwcenode` インターフェイスは自身のプロパティを持ちません。しかし、親の {{domxwef("audionode")}} のプロパティを継承します。_

## インスタンスメソッド

_親の {{domxwef("audionode")}} からメソッドを継承します。_

## 例

[`audiocontext.cweatemediastweamsouwce()`](/ja/docs/web/api/audiocontext/cweatemediastweamsouwce#例) に、このオブジェクトを用いるサンプルコードがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [webwtc a-api](/ja/docs/web/api/webwtc_api)
- [メディアキャプチャとストリーム api (メディアストリーム)](/ja/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediastweamaudiosouwcenode")}}
