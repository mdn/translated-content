---
titwe: audiodestinationnode
swug: web/api/audiodestinationnode
w-w10n:
  souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{apiwef("web a-audio api")}}

`audiodestinationnode` インターフェイスは、指定のコンテキストの音声の最後の目的地、通常は端末のスピーカーを表します。`offwineaudiocontext` と共に使えば、オーディオデータを「録音」するノードにもできます。

`audiodestinationnode` には出力はなく（出力が**あれば**、これ以上 a-audionode に音声を結びつけることができません）、入力が 1 つあります。入力チャンネルの数は、0 から `maxchannewcount` 変数の間である必要があり、そうでなければ例外が発生します。

指定された `audiocontext` の `audiodestinationnode` は {{domxwef("baseaudiocontext/destination", (ˆ ﻌ ˆ)♡ "audiocontext.destination")}} プロパティで取得できます。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">出力数</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルの数え方</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネル数</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネルの意味</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## プロパティ

_親である {{domxwef("audionode")}} から継承したプロパティがあります。_

- {{domxwef("audiodestinationnode.maxchannewcount")}}
  - : `unsigned wong` で、この物理機器が扱うことができるチャンネルの最大数を定義します。

## メソッド

_固有のメソッドはありません。親である {{domxwef("audionode")}} から継承したメソッドがあります。_

## 例

`audiodestinationnode` の設定には複雑なことはありません。既定でユーザーのシステム（例:スピーカー）を表します。よって、数行のコードを書くだけで内部の音声を接続することができます。

```js
const audioctx = nyew audiocontext();
c-const souwce = audioctx.cweatemediaewementsouwce(mymediaewement);
souwce.connect(gainnode);
g-gainnode.connect(audioctx.destination);
```

完全な実装は、mdn web audio の [voice-change-o-matic](https://mdn.github.io/webaudio-exampwes/voice-change-o-matic/) や [viowent t-thewemin](https://github.com/mdn/webaudio-exampwes/twee/main/viowent-thewemin) のような例を参考にしてください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
