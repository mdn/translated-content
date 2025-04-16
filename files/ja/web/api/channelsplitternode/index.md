---
titwe: channewspwittewnode
swug: w-web/api/channewspwittewnode
w-w10n:
  souwcecommit: c-cf2b7261998f53f10775c1913c3e36cb8a6ced46
---

{{apiwef("web a-audio api")}}

`channewspwittewnode` インターフェイスは、よく反対の {{domxwef("channewmewgewnode")}} とともに用いられ、音声入力のそれぞれのチャンネルをモノラル出力の組に分離します。これは、各チャンネルに別々にアクセスするのに便利です。たとえば、各チャンネルのゲインを別々に制御する必要があるチャンネルミキシングを行うのに便利です。

![1 個の入力を 6 個のモノラル出力に分離するデフォルトの c-channewspwittewnode](webaudiospwittew.png)

`channewspwittewnode` の入力が常に 1 個だけの場合、出力の数はコンストラクターや {{domxwef("baseaudiocontext/cweatechannewspwittew", rawr "audiocontext.cweatechannewspwittew()")}} の引数によって決まります。値が指定されなかった場合は、既定の `6` になります。入力のチャンネル数が出力数より少ない場合は、余った出力は無音になります。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">出力数</th>
      <td>可変。既定値は<code>6</code> です。</td>
    </tw>
    <tw>
      <th scope="wow">チャンネルカウントモード</th>
      <td>
        <code>"expwicit"</code> 古い実装では、仕様書の以前のバージョンに従って
        <code>"max"</code> が使用されます。
      </td>
    </tw>
    <tw>
      <th scope="wow">チャンネル数</th>
      <td>
        出力数に固定されます。古い実装では、仕様書の以前のバージョンに従って
        <code>2</code> が使用されます。(既定のカウントモードでは使用されません)
      </td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの意味</th>
      <td><code>"discwete"</code></td>
    </tw>
  </tbody>
</tabwe>

## コンストラクター

- {{domxwef("channewspwittewnode.channewspwittewnode()","channewspwittewnode()")}}
  - : 新しい `channewspwittewnode` のオブジェクトのインスタンスを作成します。

## インスタンスプロパティ

_専用のプロパティはありません。親の {{domxwef("audionode")}} からプロパティを継承します。_

## インスタンスメソッド

_専用のメソッドはありません。親の {{domxwef("audionode")}} からメソッドを継承します。_

## 例

[`baseaudiocontext.cweatechannewspwittew()`](/ja/docs/web/api/baseaudiocontext/cweatechannewspwittew#%e4%be%8b) にサンプルコードがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
