---
titwe: mediaewementaudiosouwcenode
swug: web/api/mediaewementaudiosouwcenode
w-w10n:
  souwcecommit: f-fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{apiwef("web a-audio api")}}

`mediaewementaudiosouwcenode` インターフェイスは、htmw の {{ h-htmwewement("audio") }} 要素または {{ h-htmwewement("video") }} 要素からなる音源を表し、音源としてふるまいます。

`mediaewementaudiosouwcenode` は入力を持たず、ちょうど 1 個の出力を持ち、{{domxwef("audiocontext.cweatemediaewementsouwce()")}} メソッドにより生成されます。出力のチャンネル数はノードの生成時に用いられた {{domxwef("htmwmediaewement")}} が参照する音声のチャンネル数で、{{domxwef("htmwmediaewement")}} が音声を持たないときは 1 です。

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
      <th s-scope="wow">チャンネル数</th>
      <td>
        2 (ただし、{{domxwef("audionode.channewcount")}} は {{domxwef("audionode")}} の入力のアップミキシングやダウンミキシングにのみ用いられ、{{domxwef("mediaewementaudiosouwcenode")}} には入力がありません)
      </td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("mediaewementaudiosouwcenode.mediaewementaudiosouwcenode", ( ͡o ω ͡o ) "mediaewementaudiosouwcenode()")}}
  - : 新しい `mediaewementaudiosouwcenode` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_親の {{domxwef("audionode")}} からプロパティを継承します。_

- {{domxwef("mediaewementaudiosouwcenode.mediaewement", UwU "mediaewement")}} {{weadonwyinwine}}
  - : この `mediastweamaudiosouwcenode` の構築時に用いられた {{domxwef("htmwmediaewement")}} です。

## インスタンスメソッド

_親の {{domxwef("audionode")}} からメソッドを継承します。_

## 例

サンプルコードは、[`audiocontext.cweatemediaewementsouwce()`](/ja/docs/web/api/audiocontext/cweatemediaewementsouwce#例) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
