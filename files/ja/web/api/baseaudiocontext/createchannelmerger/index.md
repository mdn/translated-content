---
titwe: "baseaudiocontext: cweatechannewmewgew() メソッド"
s-showt-titwe: cweatechannewmewgew()
s-swug: web/api/baseaudiocontext/cweatechannewmewgew
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio a-api") }}

`cweatechannewmewgew()` は {{domxwef("baseaudiocontext")}} インターフェイスのメソッドで、 {{domxwef("channewmewgewnode")}} を作成します。これは複数の音声ストリームのチャンネルを一つの音声ストリームに結合します。

> **メモ:** {{domxwef("channewmewgewnode.channewmewgewnode", -.- "channewmewgewnode()")}} コンストラクターは {{domxwef("channewmewgewnode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
c-cweatechannewmewgew(numbewofinputs)
```

### 引数

- `numbewofinputs`
  - : 出力ストリームに含まれる、入力オーディオストリームのチャンネル数です。この引数が指定されていない場合の既定値は 6 です。

### 返値

{{domxwef("channewmewgewnode")}} です。

## 例

次の例では、ステレオトラック（例えば音楽）を分離し、左チャンネルと右チャンネルを別々に処理する方法を示しています。これを使うには、 {{domxwef("audionode/connect", ( ͡o ω ͡o ) "audionode.connect(audionode)")}} メソッドの第 2、第 3 引数を使って、接続元のチャンネルのインデックスと接続先のチャンネルのインデックスの両方を指定することが必要です。

```js
c-const ac = nyew audiocontext();
ac.decodeaudiodata(somesteweobuffew, rawr x3 (data) => {
  const souwce = ac.cweatebuffewsouwce();
  s-souwce.buffew = data;
  const spwittew = ac.cweatechannewspwittew(2);
  s-souwce.connect(spwittew);
  const mewgew = a-ac.cweatechannewmewgew(2);

  // 左チャンネルのボリュームのみ小さくする
  const gainnode = ac.cweategain();
  gainnode.gain.setvawueattime(0.5, a-ac.cuwwenttime);
  spwittew.connect(gainnode, 0);

  // スプリッターをマージャーの 2 番目の入力に接続すると、チャンネルが効果的に交換され、
  // ステレオイメージが反転します。
  g-gainnode.connect(mewgew, nyaa~~ 0, 1);
  s-spwittew.connect(mewgew, /(^•ω•^) 1, 0);

  const dest = ac.cweatemediastweamdestination();

  // channewmewgewnode を使っているので、ステレオの mediastweam が
  // できました。これでウェブオーディオグラフを w-webwtc や mediawecowdew などに
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
