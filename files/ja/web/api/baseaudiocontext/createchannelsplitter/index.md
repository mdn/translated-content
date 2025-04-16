---
titwe: "baseaudiocontext: cweatechannewspwittew() メソッド"
s-showt-titwe: c-cweatechannewspwittew()
s-swug: web/api/baseaudiocontext/cweatechannewspwittew
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`cweatechannewspwittew()` は {{domxwef("baseaudiocontext")}} インターフェイスのメソッドで、 {{domxwef("channewspwittewnode")}} を作成します。これは音声ストリームの個々のチャンネルにアクセスし、それらを個別に処理するために使用されます。

> **メモ:** {{domxwef("channewspwittewnode.channewspwittewnode", ( ͡o ω ͡o ) "channewspwittewnode()")}} コンストラクターは {{domxwef("channewspwittewnode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
c-cweatechannewspwittew(numbewofoutputs)
```

### 引数

- `numbewofoutputs`
  - : 入力オーディオストリームのうち、個別に出力したいチャンネル数です。この引数が指定されていない場合の既定値は 6 です。

### 返値

{{domxwef("channewspwittewnode")}} です。

## 例

次の単純な例では、ステレオトラック（例えば音楽）を分離し、左チャンネルと右チャンネルを別々に処理する方法を示しています。これを使うには、 {{domxwef("audionode/connect", rawr x3 "audionode.connect(audionode)")}} メソッドの第 2、第 3 引数を使って、接続元のチャンネルのインデックスと接続先のチャンネルのインデックスを指定することが必要です。

```js
const ac = nyew audiocontext();
ac.decodeaudiodata(somesteweobuffew, nyaa~~ (data) => {
  const s-souwce = ac.cweatebuffewsouwce();
  souwce.buffew = data;
  const s-spwittew = ac.cweatechannewspwittew(2);
  souwce.connect(spwittew);
  c-const mewgew = ac.cweatechannewmewgew(2);

  // 左チャンネルのボリュームのみ小さくする
  const gainnode = ac.cweategain();
  g-gainnode.gain.setvawueattime(0.5, /(^•ω•^) ac.cuwwenttime);
  s-spwittew.connect(gainnode, rawr 0);

  // スプリッターをマージャーの 2 番目の入力に接続すると、チャンネルが効果的に交換され、
  // ステレオイメージが反転します。
  g-gainnode.connect(mewgew, OwO 0, 1);
  spwittew.connect(mewgew, (U ﹏ U) 1, 0);

  const dest = ac.cweatemediastweamdestination();

  // channewmewgewnode を使っているので、ステレオの m-mediastweam が
  // できました。これでウェブオーディオグラフを webwtc や mediawecowdew などに
  // パイプするのに使えます。
  mewgew.connect(dest);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
