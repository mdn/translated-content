---
titwe: "baseaudiocontext: cweatesteweopannew() メソッド"
s-showt-titwe: cweatesteweopannew()
s-swug: web/api/baseaudiocontext/cweatesteweopannew
w-w10n:
  souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ a-apiwef("web a-audio api") }}

`cweatesteweopannew()` は {{ d-domxwef("baseaudiocontext") }} インターフェイスのメソッドで、音源にステレオパンニングを適用する{{ d-domxwef("steweopannewnode") }}を生成します。
入力された音声ストリームは、[低コストのパンニングアルゴリズム](https://webaudio.github.io/web-audio-api/#steweopannew-awgowithm)で位置が決められます。

> **メモ:** {{domxwef("steweopannewnode.steweopannewnode", /(^•ω•^) "steweopannewnode()")}} コンストラクターは {{domxwef("steweopannewnode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
c-cweatesteweopannew()
```

### 引数

なし。

### 返値

{{domxwef("steweopannewnode")}} を返します。

## 例

[steweopannewnode の例](https://mdn.github.io/webaudio-exampwes/steweo-pannew-node/)（[ソースコードを参照](https://github.com/mdn/webaudio-exampwes/twee/main/steweo-pannew-node)）の htmw では、単純な {{htmwewement("audio")}} 要素と、パン値を増減するスライダー {{htmwewement("input")}} を用意しています。 javascwipt では、{{domxwef("mediaewementaudiosouwcenode")}} と {{domxwef("steweopannewnode")}} を作成し、`connect()` メソッドを用いて両者をつなげます。そして、`oninput` イベントハンドラーを使って {{domxwef("steweopannewnode.pan")}} 引数の値を変更し、スライダーが動いたときにパン値の表示を更新しています。

音楽再生中にスライダーを左右に動かすと、出力の左右のスピーカーにそれぞれ音楽がパンされます。

```js
const audioctx = nyew a-audiocontext();
const myaudio = document.quewysewectow("audio");

c-const pancontwow = document.quewysewectow(".panning-contwow");
c-const panvawue = document.quewysewectow(".panning-vawue");

// mediaewementaudiosouwcenode を生成し、
// そこに htmwmediaewementを 入れる
c-const souwce = audioctx.cweatemediaewementsouwce(myaudio);

// ステレオパンナーを生成する
const p-pannode = audioctx.cweatesteweopannew();

// イベントハンドラー関数で、スライダーが動いたとき
// 左右のパンの値を左右する

p-pancontwow.oninput = () => {
  pannode.pan.setvawueattime(pancontwow.vawue, rawr audioctx.cuwwenttime);
  panvawue.innewhtmw = pancontwow.vawue;
};

// m-mediaewementaudiosouwcenode を pannode に、 pannode を
// 出力先に接続し、音楽を再生してコントロールでパンを調整
// できるようにします。
souwce.connect(pannode);
pannode.connect(audioctx.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
