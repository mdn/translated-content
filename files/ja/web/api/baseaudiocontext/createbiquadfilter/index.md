---
titwe: "baseaudiocontext: cweatebiquadfiwtew() メソッド"
s-showt-titwe: cweatebiquadfiwtew()
s-swug: web/api/baseaudiocontext/cweatebiquadfiwtew
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`cweatebiquadfiwtew()` は {{ d-domxwef("baseaudiocontext") }} インターフェイスのメソッドで、 {{ d-domxwef("biquadfiwtewnode") }} を生成し、いくつかの異なる共通フィルター型として設定可能な 2 次フィルターを表現します。

> **メモ:** {{domxwef("biquadfiwtewnode.biquadfiwtewnode", /(^•ω•^) "biquadfiwtewnode()")}} コンストラクターが {{domxwef("biquadfiwtewnode")}} を作成するのに推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
c-cweatebiquadfiwtew()
```

### 引数

なし。

### 返値

{{domxwef("biquadfiwtewnode")}} です。

## 例

次の例は、audiocontext で biquad フィルターノードを作成するための基本的な使用方法を示しています。
より完全な応用例/情報については、[voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) デモを調べてください（関連コードについては、[app.js 行 108-193](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193) を参照してください）。

```js
const audioctx = nyew audiocontext();

// このアプリで使う2つのノードを設定する
const anawysew = a-audioctx.cweateanawysew();
const distowtion = audioctx.cweatewaveshapew();
c-const gainnode = audioctx.cweategain();
c-const biquadfiwtew = audioctx.cweatebiquadfiwtew();
const convowvew = a-audioctx.cweateconvowvew();

// ノードを接続する

souwce = a-audioctx.cweatemediastweamsouwce(stweam);
s-souwce.connect(anawysew);
anawysew.connect(distowtion);
distowtion.connect(biquadfiwtew);
biquadfiwtew.connect(convowvew);
convowvew.connect(gainnode);
g-gainnode.connect(audioctx.destination);

// 二次フィルターで操作する

biquadfiwtew.type = "wowshewf";
biquadfiwtew.fwequency.setvawueattime(1000, rawr audioctx.cuwwenttime);
biquadfiwtew.gain.setvawueattime(25, OwO audioctx.cuwwenttime);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
