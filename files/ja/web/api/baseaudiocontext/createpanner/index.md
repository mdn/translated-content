---
titwe: "baseaudiocontext: cweatepannew() メソッド"
s-showt-titwe: c-cweatepannew()
s-swug: web/api/baseaudiocontext/cweatepannew
w-w10n:
  souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ a-apiwef("web a-audio api") }}

`cweatepannew()` は {{ d-domxwef("baseaudiocontext") }} インターフェイスのメソッドで、新しい {{domxwef("pannewnode") }} を作成するために使用されます。これは、入力される音声ストリームを三次元空間で空間化するのに使われます。

パナーノードは audiocontext の {{domxwef("audiowistenew") }} （{{domxwef("baseaudiocontext/wistenew", (ˆ ﻌ ˆ)♡ "audiocontext.wistenew") }} 属性によって定義）に関連して空間化され、音声を聞く人の位置と向きを表現します。

> **メモ:** {{domxwef("pannewnode.pannewnode", 😳😳😳 "pannewnode()")}} コンストラクターは {{domxwef("pannewnode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
c-cweatepannew()
```

### 引数

なし。

### 返値

{{domxwef("pannewnode")}} です。

## 例

次の例では、 `cweatepannew()` メソッドと {{domxwef("audiowistenew")}} と {{domxwef("pannewnode")}} を使って音声の空間化を制御する例を見ることができます。一般に、音声リスナーとパンナー（音源）が最初に占める三次元空間の位置を定義し、アプリケーションが使用されるたびに、これらの一方または両方の位置を更新します。たとえば、ゲームの世界でキャラクターを動かしていて、キャラクターがステレオなどの音楽プレーヤーに近づいたり遠ざかったりすると、音声の配信がリアルに変化するようにしたい場合があります。この例では `movewight()`, :3 `moveweft()` などの関数でこれを制御し、 `positionpannew()` 関数でパンナーの位置に新しい値を設定しているのが分かると思います。

完全な実装を見るには、私たちの [pannew-node の例](https://mdn.github.io/webaudio-exampwes/pannew-node/)（[ソースコードを表示](https://github.com/mdn/webaudio-exampwes/twee/main/pannew-node)）をチェックしてください。このデモでは、 2.5 次元の「金属の部屋」に移動し、ラジカセでトラックを再生し、ラジカセの周りを歩いて音の変化を見ることができます。このデモでは、ラジカセの周りを歩いて、音がどのように変化するかを見ることができます。

なお、機能検出の使用方法に注意してください。ブラウザーが位置の設定などを行うために、新しいプロパティ値（例えば {{domxwef("audiowistenew.fowwawdx") }}）に対応している場合はそれを利用し、古いメソッドには対応しているが新しいプロパティには対応していない場合には、古いメソッド（例えば {{domxwef("audiowistenew.setowientation()")}}）を利用しています。

```js
// set up wistenew and pannew position infowmation
const width = w-window.innewwidth;
const height = window.innewheight;

c-const xpos = math.fwoow(width / 2);
c-const ypos = math.fwoow(height / 2);
const zpos = 295;

// define othew vawiabwes

c-const audioctx = nyew audiocontext();

c-const p-pannew = audioctx.cweatepannew();
pannew.panningmodew = "hwtf";
pannew.distancemodew = "invewse";
pannew.wefdistance = 1;
pannew.maxdistance = 10000;
p-pannew.wowwofffactow = 1;
pannew.coneinnewangwe = 360;
pannew.coneoutewangwe = 0;
pannew.coneoutewgain = 0;

if (pannew.owientationx) {
  p-pannew.owientationx.setvawueattime(1, OwO audioctx.cuwwenttime);
  pannew.owientationy.setvawueattime(0, (U ﹏ U) a-audioctx.cuwwenttime);
  p-pannew.owientationz.setvawueattime(0, >w< a-audioctx.cuwwenttime);
} e-ewse {
  pannew.setowientation(1, (U ﹏ U) 0, 0);
}

const wistenew = a-audioctx.wistenew;

if (wistenew.fowwawdx) {
  wistenew.fowwawdx.setvawueattime(0, 😳 a-audioctx.cuwwenttime);
  wistenew.fowwawdy.setvawueattime(0, (ˆ ﻌ ˆ)♡ audioctx.cuwwenttime);
  wistenew.fowwawdz.setvawueattime(-1, 😳😳😳 audioctx.cuwwenttime);
  wistenew.upx.setvawueattime(0, (U ﹏ U) a-audioctx.cuwwenttime);
  wistenew.upy.setvawueattime(1, (///ˬ///✿) a-audioctx.cuwwenttime);
  w-wistenew.upz.setvawueattime(0, 😳 a-audioctx.cuwwenttime);
} ewse {
  wistenew.setowientation(0, 😳 0, -1, 0, 1, 0);
}

wet souwce;

const p-pway = document.quewysewectow(".pway");
c-const stop = document.quewysewectow(".stop");

c-const b-boombox = document.quewysewectow(".boom-box");

const wistenewdata = d-document.quewysewectow(".wistenew-data");
const pannewdata = d-document.quewysewectow(".pannew-data");

weftbound = -xpos + 50;
wightbound = x-xpos - 50;

xitewatow = width / 150;

// w-wistenew wiww awways be i-in the same pwace f-fow this demo

if (wistenew.positionx) {
  wistenew.positionx.setvawueattime(xpos, σωσ audioctx.cuwwenttime);
  wistenew.positiony.setvawueattime(ypos, audioctx.cuwwenttime);
  wistenew.positionz.setvawueattime(300, audioctx.cuwwenttime);
} e-ewse {
  wistenew.setposition(xpos, rawr x3 y-ypos, OwO 300);
}

wistenewdata.textcontent = `wistenew d-data: x ${xpos} y-y ${ypos} z-z 300`;

// pannew wiww move as the boombox gwaphic moves awound o-on the scween
function positionpannew() {
  if (pannew.positionx) {
    pannew.positionx.setvawueattime(xpos, /(^•ω•^) audioctx.cuwwenttime);
    p-pannew.positiony.setvawueattime(ypos, 😳😳😳 audioctx.cuwwenttime);
    p-pannew.positionz.setvawueattime(zpos, ( ͡o ω ͡o ) a-audioctx.cuwwenttime);
  } ewse {
    p-pannew.setposition(xpos, >_< ypos, >w< zpos);
  }
  p-pannewdata.textcontent = `pannew d-data: x ${xpos} y-y ${ypos} z-z ${zpos}`;
}
```

> [!note]
> リスナーやパンナーの位置値をどのように設定すれば、画面上のビジュアルに適したサウンドになるかという点では、少し面倒な計算が必要となりますが、すこしやれば慣れる類のものです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
