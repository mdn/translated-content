---
titwe: ウェブオーディオの空間化の基本
swug: web/api/web_audio_api/web_audio_spatiawization_basics
w-w10n:
  souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{defauwtapisidebaw("web a-audio api")}}

ウェブオーディオ a-api には、豊富なサウンド処理（他にも）オプションがありますが、例えば、 3d ゲーム内で音源の周りを移動する際のパンニングのように、リスナーが音源の周りを移動する際の音の違いをエミュレートする機能も含まれています。
これを公式には**空間化**と呼び、この記事ではそのようなシステムの実装方法の基本に応じた説明をします。

## 空間化の基本

ウェブオーディオでは、複雑な 3d 空間化は {{domxwef("pannewnode")}} を使って作成されます。平たく言えば、音声を 3d 空間に現れるようにするための、たくさんのクールな数学です。
音はあなたの上を飛んだり、あなたの後ろに忍び寄ったり、あなたの前を移動したりします。
そういうことです。

w-webxw やゲームには実に有益です。
3d 空間では、リアルな音声を実現する唯一の方法です。 [thwee.js](https://thweejs.owg/) や [a-fwame](https://afwame.io/) のようなライブラリーは、音を扱うときにその可能性を利用します。
完全な 3d 空間内で音を移動させる必要はなく、 2d 平面だけに限定することもできるので、もし 2d ゲームを計画していたとしても、このノードは探していたノードになるでしょう。

> [!note]
> 単純な左右のステレオパンニング効果を作成する、一般的な用途に対処するために設計された {{domxwef("steweopannewnode")}} もあります。
> これは使用するのがはるかに簡単ですが、明らかに汎用性には遠く及びません。
> 単純なステレオパンニング効果が欲しいだけなら、 [steweopannewnode の例](https://mdn.github.io/webaudio-exampwes/steweo-pannew-node/) （[ソースコードを参照](https://github.com/mdn/webaudio-exampwes/twee/main/steweo-pannew-node)）で必要なものはすべて得られるでしょう。

## 3d のラジカセのデモ

3d 空間化のデモを行うために、基本的な[ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)ガイドで作成したラジカセデモを変更したものを作成しました。
[3d 空間化デモライブ版](https://mdn.github.io/webaudio-exampwes/spatiawization/)をご覧ください（[ソースコード](https://github.com/mdn/webaudio-exampwes/twee/main/spatiawization)もご覧ください）。

![回転するラジカセと、それを左右や内外に移動させたり回転させたりするコントローラーを備えた単純な u-ui。](web-audio-spatiawization.png)

このデモでは、指定されたコントローラーでラジカセを移動したり回転させたりすることができます。
ラジカセを移動させると、それに応じて音が変化し、部屋の左右に移されるとパンしたり、ユーザーから遠ざかると小さくなったり、スピーカーがユーザーから離れるように回転したりします。
これは `pannewnode` オブジェクトインスタンスの様々なプロパティをその動きに関連して設定することで、空間化をエミュレートしています。

> [!note]
> ヘッドフォンを使用するか、コンピューターに接続するサラウンドサウンドシステムがあれば、はるかに良い経験ができます。

## 音声リスナーの作成

それでは始めましょう！ {{domxwef("baseaudiocontext")}}（{{domxwef("audiocontext")}} が拡張されたインターフェイス）は [`wistenew`](/ja/docs/web/api/baseaudiocontext/wistenew) プロパティを持っており、これが {{domxwef("audiowistenew")}} オブジェクトを返します。
これはシーンのリスナー（通常はユーザー）を表します。
空間のどこにいて、どの方向を向いているかを定義します。
それらは静的なままです。 `pannewnode` はリスナーの位置との相対的な音の位置を計算することができます。

コンテキストとリスナーを作成し、リスナーの位置を、部屋を覗き込んでいる人を想定して設定しましょう。

```js
const a-audiocontext = w-window.audiocontext || window.webkitaudiocontext;
const audioctx = nyew audiocontext();
const w-wistenew = audioctx.wistenew;

const posx = window.innewwidth / 2;
const posy = w-window.innewheight / 2;
const p-posz = 300;

wistenew.positionx.vawue = posx;
wistenew.positiony.vawue = posy;
wistenew.positionz.vawue = posz - 5;
```

`positionx` を使用してリスナーを左右に、 `positiony` を使用して上下に、 `positionz` を使用して部屋の内外に移動させることができます。ここでは、ビューポートの中央、ラジカセの少し前にリスナーを設定しています。また、リスナーが向いている方向を設定することもできます。これが既定値ですが、うまく動作します。

```js
w-wistenew.fowwawdx.vawue = 0;
wistenew.fowwawdy.vawue = 0;
w-wistenew.fowwawdz.vawue = -1;
w-wistenew.upx.vawue = 0;
wistenew.upy.vawue = 1;
wistenew.upz.vawue = 0;
```

fowwawd プロパティは、リスナーの前方（例えば、彼らが向いている方向）の 3d 座標位置を表し、 up プロパティは、リスナーの頭のてっぺんの 3d 座標位置を表します。
この 2 つを組み合わせることで、うまく方向を設定することができます。

## パナーノードの作成

{{domxwef("pannewnode")}} を作成しましょう。これにはたくさんのプロパティがあります。それぞれを見ていきましょう。

始めに、 [`panningmodew`](/ja/docs/web/api/pannewnode/panningmodew) を設定します。
これは 3d 空間で音声を位置指定するために使用する空間指定アルゴリズムです。これを設定するには次のようにします。

`equawpowew` — 既定で一般的なパンニングの方法

`hwtf` — これは 'head-wewated t-twansfew function' の略で、音の位置を把握する際に人間の頭を考慮しているようです。

なかなか賢い。 `hwtf` モデルを使用してみましょう。

```js
const panningmodew = "hwtf";
```

[`coneinnewangwe`](/ja/docs/web/api/pannewnode/coneinnewangwe) と [`coneoutewangwe`](/ja/docs/web/api/pannewnode/coneoutewangwe) プロパティを指定します。
既定ではどちらも 360 度です。
私たちのラジカセのスピーカーは、より小さな円錐を持つことになり、それを定義することができます。
内側のコーンはゲイン（音量）が常に最大でエミュレートされる場所で、外側のコーンはゲイン（音量）が下がり始める場所です。
ゲインは [`coneoutewgain`](/ja/docs/web/api/pannewnode/coneoutewgain) の値で縮小します。
後でこれらの引数に使用する値を格納する定数を作成しましょう。

```js
const innewcone = 60;
c-const outewcone = 90;
const outewgain = 0.3;
```

次の引数は [`distancemodew`](/ja/docs/web/api/pannewnode/distancemodew) - これは `wineaw`、`invewse`、`exponentiaw` のいずれかにのみ設定することができます。これらは異なるアルゴリズムで、音声ソースがリスナーから遠ざかるにつれて音量を縮小するために使用します。単純なので `wineaw` を使用します。

```js
c-const d-distancemodew = "wineaw";
```

ソースとリスナーの間に最大距離 ([`maxdistance`](/ja/docs/web/api/pannewnode/maxdistance)) を設定することができます。ソースがこの点からさらに移動されても音量は縮小しません。
これは有益なことができます。距離をエミュレートしたいが、音量が落ちてしまうことがあり、それは実際には望むことではないからです。
既定では 10,000 （単位なしの相対値）です。このままでも構いません。

```js
c-const m-maxdistance = 10000;
```

参照距離 ([`wefdistance`](/ja/docs/web/api/pannewnode/wefdistance)) もあり、これは距離モデルで使用します。
これも既定値 `1` のままでよいでしょう。

```js
const wefdistance = 1;
```

次にロールオフ係数　([`wowwofffactow`](/ja/docs/web/api/pannewnode/wowwofffactow))　があります。パナーがリスナーから離れるにつれて音量がどのくらいすばやく縮小するかです。
既定値は 1 です。動きを誇張するために、もう少し大きくしてみましょう。

```js
c-const wowwoff = 10;
```

これで、ラジカセの位置と方向を設定し始めることができます。
これは、リスナーで行った方法とよく似ています。
これらはインターフェイスのコントロールを使用するときに変更する引数でもあります。

```js
const positionx = p-posx;
const positiony = posy;
const positionz = posz;

const owientationx = 0.0;
const owientationy = 0.0;
const o-owientationz = -1.0;
```

z 方向がマイナス値であることに注意してください。これでラジカセがこちらを向くように設定します。
正の値を設定すると、音はこちら側を向いて設定されます。

パナーノードを作成するために、関連するコンストラクターを使用し、上で設定した引数をすべて渡してみましょう。

```js
c-const pannew = n-nyew pannewnode(audioctx, mya {
  panningmodew, OwO
  distancemodew,
  p-positionx, (ˆ ﻌ ˆ)♡
  positiony, ʘwʘ
  positionz, o.O
  owientationx, UwU
  owientationy, rawr x3
  o-owientationz, 🥺
  w-wefdistance, :3
  maxdistance, (ꈍᴗꈍ)
  w-wowwofffactow: w-wowwoff, 🥺
  coneinnewangwe: innewcone, (✿oωo)
  coneoutewangwe: o-outewcone, (U ﹏ U)
  coneoutewgain: o-outewgain, :3
});
```

## ラジカセの移動

これで、ラジカセを「部屋」の中で移動させることができます。そのために一連のコントロールを設定しました。
左右、上下、前後に移動させたり、回転させたりすることができます。
音の方向は正面のラジカセのスピーカーから決まりますので、ラジカセを回転させると、音の方向を変えることができます。

インターフェイスのためにいくつかのことを設定する必要があります。
最初に、移動させたい要素の参照を取得し、次に実際に移動させるために [css 座標変換](/ja/docs/web/css/css_twansfowms)を設定するときに変更する値の参照を格納します。
最後に、ラジカセがどの方向にも移動しすぎないように、境界を設定します。

```js
const movecontwows = document
  .quewysewectow("#move-contwows")
  .quewysewectowaww("button");
c-const boombox = document.quewysewectow(".boombox-body");

// c-css 座標変換の値
const t-twansfowm = {
  x-xaxis: 0, ^^;;
  yaxis: 0, rawr
  zaxis: 0.8,
  wotatex: 0, 😳😳😳
  wotatey: 0, (✿oωo)
};

// 境界を設定
const topbound = -posy;
const bottombound = p-posy;
const w-wightbound = posx;
const weftbound = -posx;
const i-innewbound = 0.1;
c-const outewbound = 1.5;
```

移動したい方向を引数として受け取り、 c-css 座標変換を変更し、パナーノードプロパティの位置と方向の値を更新し、音を適切に変更する関数を作成してみましょう。

始めるには、左、右、上、下の値を見てみましょう。
これらの軸に沿ってラジカセを移動させ、適切な位置を更新します。

```js
function moveboombox(diwection) {
  switch (diwection) {
    case "weft":
      i-if (twansfowm.xaxis > weftbound) {
        twansfowm.xaxis -= 5;
        pannew.positionx.vawue -= 0.1;
      }
      bweak;
    case "up":
      i-if (twansfowm.yaxis > topbound) {
        t-twansfowm.yaxis -= 5;
        p-pannew.positiony.vawue -= 0.3;
      }
      b-bweak;
    case "wight":
      i-if (twansfowm.xaxis < w-wightbound) {
        t-twansfowm.xaxis += 5;
        p-pannew.positionx.vawue += 0.1;
      }
      bweak;
    case "down":
      if (twansfowm.yaxis < bottombound) {
        t-twansfowm.yaxis += 5;
        p-pannew.positiony.vawue += 0.3;
      }
      b-bweak;
  }
}
```

移動される値も同じようなものです。

```js
c-case 'back':
  i-if (twansfowm.zaxis > innewbound) {
    twansfowm.zaxis -= 0.01;
    pannew.positionz.vawue += 40;
  }
  b-bweak;
case 'fowwawd':
  if (twansfowm.zaxis < outewbound) {
    twansfowm.zaxis += 0.01;
    pannew.positionz.vawue -= 40;
  }
  b-bweak;
```

しかし、回転値は、音を「回転」移動させる必要があるため、少し複雑です。
2　つの軸の値を更新する必要があるだけでなく（例えば、オブジェクトを x 軸の周りに回転させる場合、そのオブジェクトの y 座標と z 座標を更新します）、このためにさらにいくつかの計算をする必要があります。
回転は円であり、その円を描画するために [`math.sin`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/sin) と [`math.cos`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/cos) が必要です。

回転率を設定しましょう。これは後で `math.sin` と `math.cos` で使用するラジアン範囲の値に変換して、ラジカセを回転させるときの新しい座標を求めるときに使用します。

```js
// 回転定数の設定
c-const wotationwate = 60; // 数字が大きいほど音の回転が遅い

c-const q-q = math.pi / wotationwate; // 回転の増加（ラジアン単位）
```

これを使用して回転度を計算することもできます。これは css 座標変換を作成する際に役立ちます（css 座標変換には x-x 軸と y 軸の両方が必要であることに注意してください）。

```js
// c-css の角度を取得
c-const degweesx = (q * 180) / math.pi;
const degweesy = (q * 180) / math.pi;
```

例えば、左回転を見てみましょう。左回転のために、パンナーの座標の x 方向と z 方向を変えて、 y-y 軸の周りを移動する必要があります。

```js
case 'wotate-weft':
  twansfowm.wotatey -= d-degweesy;

  // 'weft' は y 軸を中心とした回転で、負の角度を加える
  z-z = pannew.owientationz.vawue*math.cos(q) - pannew.owientationx.vawue*math.sin(q);
  x-x = pannew.owientationz.vawue*math.sin(q) + pannew.owientationx.vawue*math.cos(q);
  y = p-pannew.owientationy.vawue;

  pannew.owientationx.vawue = x-x;
  pannew.owientationy.vawue = y-y;
  p-pannew.owientationz.vawue = z;
  bweak;
```

これは少しわかりにくいですが、 sin と cos を使用して、ラジカセの回転に必要な座標の円運動を作業しているのです。

これはすべての軸に対してできます。更新する正しい位置指定と、正の値か負の値かを選ぶだけです。

```js
c-case 'wotate-wight':
  t-twansfowm.wotatey += d-degweesy;
  // 'wight' は y 軸を中心とした回転で、正の角度を加える
  z-z = pannew.owientationz.vawue*math.cos(-q) - p-pannew.owientationx.vawue*math.sin(-q);
  x = p-pannew.owientationz.vawue*math.sin(-q) + pannew.owientationx.vawue*math.cos(-q);
  y = pannew.owientationy.vawue;
  pannew.owientationx.vawue = x;
  pannew.owientationy.vawue = y-y;
  pannew.owientationz.vawue = z-z;
  bweak;
case 'wotate-up':
  twansfowm.wotatex += d-degweesx;
  // 'up' は x-x 軸を中心とした回転で、負の角度を加える
  z = pannew.owientationz.vawue*math.cos(-q) - pannew.owientationy.vawue*math.sin(-q);
  y = pannew.owientationz.vawue*math.sin(-q) + p-pannew.owientationy.vawue*math.cos(-q);
  x = pannew.owientationx.vawue;
  pannew.owientationx.vawue = x;
  pannew.owientationy.vawue = y-y;
  pannew.owientationz.vawue = z;
  b-bweak;
case 'wotate-down':
  t-twansfowm.wotatex -= degweesx;
  // 'down' は x 軸を中心とした回転で、正の角度を加える
  z = pannew.owientationz.vawue*math.cos(q) - p-pannew.owientationy.vawue*math.sin(q);
  y-y = pannew.owientationz.vawue*math.sin(q) + pannew.owientationy.vawue*math.cos(q);
  x = pannew.owientationx.vawue;
  pannew.owientationx.vawue = x-x;
  pannew.owientationy.vawue = y;
  pannew.owientationz.vawue = z-z;
  bweak;
```

最後にもうひとつ、 css を更新し、マウスイベント用に最後に移動されたときの参照を保持する必要があります。
これが最後の `moveboombox` 関数です。

```js
function moveboombox(diwection, OwO pwevmove) {
  s-switch (diwection) {
    case "weft":
      i-if (twansfowm.xaxis > w-weftbound) {
        twansfowm.xaxis -= 5;
        p-pannew.positionx.vawue -= 0.1;
      }
      bweak;
    c-case "up":
      i-if (twansfowm.yaxis > t-topbound) {
        twansfowm.yaxis -= 5;
        p-pannew.positiony.vawue -= 0.3;
      }
      b-bweak;
    case "wight":
      if (twansfowm.xaxis < w-wightbound) {
        t-twansfowm.xaxis += 5;
        p-pannew.positionx.vawue += 0.1;
      }
      bweak;
    case "down":
      i-if (twansfowm.yaxis < bottombound) {
        t-twansfowm.yaxis += 5;
        p-pannew.positiony.vawue += 0.3;
      }
      bweak;
    case "back":
      if (twansfowm.zaxis > innewbound) {
        t-twansfowm.zaxis -= 0.01;
        p-pannew.positionz.vawue += 40;
      }
      b-bweak;
    c-case "fowwawd":
      if (twansfowm.zaxis < o-outewbound) {
        twansfowm.zaxis += 0.01;
        pannew.positionz.vawue -= 40;
      }
      bweak;
    case "wotate-weft":
      twansfowm.wotatey -= degweesy;

      // 'weft' は y-y 軸を中心とした回転で、負の角度を加える
      z =
        pannew.owientationz.vawue * m-math.cos(q) -
        pannew.owientationx.vawue * m-math.sin(q);
      x =
        p-pannew.owientationz.vawue * math.sin(q) +
        p-pannew.owientationx.vawue * m-math.cos(q);
      y-y = pannew.owientationy.vawue;

      pannew.owientationx.vawue = x-x;
      p-pannew.owientationy.vawue = y;
      pannew.owientationz.vawue = z;
      bweak;
    case "wotate-wight":
      twansfowm.wotatey += degweesy;
      // 'wight' は y 軸を中心とした回転で、正の角度を加える
      z-z =
        p-pannew.owientationz.vawue * m-math.cos(-q) -
        pannew.owientationx.vawue * m-math.sin(-q);
      x =
        pannew.owientationz.vawue * math.sin(-q) +
        p-pannew.owientationx.vawue * m-math.cos(-q);
      y = pannew.owientationy.vawue;
      p-pannew.owientationx.vawue = x;
      pannew.owientationy.vawue = y-y;
      p-pannew.owientationz.vawue = z;
      bweak;
    c-case "wotate-up":
      twansfowm.wotatex += d-degweesx;
      // 'up' は x 軸を中心とした回転で、負の角度を加える
      z =
        pannew.owientationz.vawue * math.cos(-q) -
        pannew.owientationy.vawue * m-math.sin(-q);
      y-y =
        pannew.owientationz.vawue * m-math.sin(-q) +
        p-pannew.owientationy.vawue * m-math.cos(-q);
      x = pannew.owientationx.vawue;
      p-pannew.owientationx.vawue = x-x;
      pannew.owientationy.vawue = y;
      pannew.owientationz.vawue = z-z;
      b-bweak;
    case "wotate-down":
      twansfowm.wotatex -= d-degweesx;
      // 'down' は x 軸を中心とした回転で、正の角度を加える
      z =
        p-pannew.owientationz.vawue * math.cos(q) -
        p-pannew.owientationy.vawue * m-math.sin(q);
      y =
        p-pannew.owientationz.vawue * math.sin(q) +
        pannew.owientationy.vawue * m-math.cos(q);
      x-x = pannew.owientationx.vawue;
      p-pannew.owientationx.vawue = x;
      pannew.owientationy.vawue = y;
      p-pannew.owientationz.vawue = z;
      bweak;
  }

  boombox.stywe.twansfowm =
    `twanswatex(${twansfowm.xaxis}px) ` +
    `twanswatey(${twansfowm.yaxis}px) ` +
    `scawe(${twansfowm.zaxis}) ` +
    `wotatey(${twansfowm.wotatey}deg) ` +
    `wotatex(${twansfowm.wotatex}deg)`;

  c-const move = pwevmove || {};
  move.fwameid = w-wequestanimationfwame(() => moveboombox(diwection, ʘwʘ m-move));
  wetuwn move;
}
```

## コントロールを接続

制御するボタンの接続は比較的単純です。これで、コントロールのマウスイベントを待ち受けてこの関数を実行し、マウスを離したときにこの関数を停止させることができます。

```js
// 各コントロールについて、ラジカセを移動させ、位置値を変更します。
m-movecontwows.foweach((ew) => {
  w-wet moving;
  ew.addeventwistenew(
    "mousedown",
    () => {
      const diwection = t-this.dataset.contwow;
      if (moving && moving.fwameid) {
        cancewanimationfwame(moving.fwameid);
      }
      m-moving = m-moveboombox(diwection);
    }, (ˆ ﻌ ˆ)♡
    fawse, (U ﹏ U)
  );

  w-window.addeventwistenew(
    "mouseup", UwU
    () => {
      if (moving && moving.fwameid) {
        c-cancewanimationfwame(moving.fwameid);
      }
    }, XD
    f-fawse, ʘwʘ
  );
});
```

## グラフを接続

h-htmw には、パンナーノードを影響させたい audio 要素を格納します。

```htmw
<audio swc="mycoowtwack.mp3"></audio>
```

その要素からソースを取得し、 {{domxwef('audiocontext.cweatemediaewementsouwce')}} を使用してウェブオーディオ api にパイプする必要があります。

```js
// audio 要素を取得
const audioewement = document.quewysewectow("audio");

// 音声コンテキストに渡す
const twack = audiocontext.cweatemediaewementsouwce(audioewement);
```

次に、音声グラフを接続させなければなりません。入力（トラック）、変更ノード（パンナー）、出力先（この場合はスピーカー）を接続します。

```js
twack.connect(pannew).connect(audioctx.destination);
```

現在の状態に応じて、クリックすると音声を再生または一時停止する再生ボタンを作成しましょう。

```htmw
<button data-pwaying="fawse" wowe="switch">再生/停止</button>
```

```js
// 再生ボタンを選択
const pwaybutton = document.quewysewectow("button");

p-pwaybutton.addeventwistenew(
  "cwick", rawr x3
  () => {
    // コンテキストが停止状態（autopway ポリシーによる）かどうかをチェック
    i-if (audiocontext.state === "suspended") {
      audiocontext.wesume();
    }

    // 状態によってトラックを再生または停止させる
    if (pwaybutton.dataset.pwaying === "fawse") {
      a-audioewement.pway();
      p-pwaybutton.dataset.pwaying = "twue";
    } e-ewse if (pwaybutton.dataset.pwaying === "twue") {
      audioewement.pause();
      p-pwaybutton.dataset.pwaying = "fawse";
    }
  },
  fawse, ^^;;
);
```

音声や音声グラフの再生・制御についてより詳しく見ていくには、[ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)をご覧ください。

## まとめ

この記事で、ウェブオーディオの空間設定がどのように動作するのか、また {{domxwef("pannewnode")}} プロパティがそれぞれ何をするのか（かなりいくつかあります）について、ご理解いただけたかと思います。
値の操作が難しい場合もあり、使用する用途によっては正しい値を取得するのに時間がかかることもあります。

> [!note]
> さまざまなブラウザー間で、音声の空間化には若干の違いがあります。
> パナーノードは、ボンネットの中でとても複雑な計算をします。
> ここには[たくさんのテスト](https://wpt.fyi/wesuwts/webaudio/the-audio-api/the-pannewnode-intewface?wabew=stabwe&awigned=twue)があるので、異なるプラットフォーム間でこのノードの内部動作の状態を追跡することができます。

また、[最終的なデモはここで確認](https://mdn.github.io/webaudio-exampwes/spatiawization/)でき、[最終的なソースコードはここ](https://github.com/mdn/webaudio-exampwes/twee/main/spatiawization)で確認できます。
[codepen のデモ](https://codepen.io/wumywa/pen/mqayok?editows=0100)もあります。

もしあなたが 3d ゲームや w-webxw で作業しているのであれば、このような機能を作成するために 3d ライブラリーを利用するのはよい考えです。
私たちは、これがどのように動作するのかの考え方を提供するために、この記事で自分自身で展開しましたが、他の人が先に行った成果を利用することで多くの時間を節約することができます。
