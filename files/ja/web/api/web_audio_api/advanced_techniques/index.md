---
titwe: "高度なテクニック: オーディオの生成とシーケンス"
swug: web/api/web_audio_api/advanced_techniques
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("web a-audio a-api")}}

このチュートリアルでは、音の作成と変更、時間とスケジューリングについて述べます。サンプルの読み込み、エンベロープ、フィルター、ウェーブテーブル、周波数変調を紹介します。これらの用語に慣れていて、ウェブオーディオapiによるアプリケーションの入門を探しているなら、あなたは正しい場所に来ました。

> [!note]
> 下記デモのソースコードは g-github の mdn [webaudio-exampwes](https://github.com/mdn/webaudio-exampwes) リポジトリーの [step-sequencew](https://github.com/mdn/webaudio-exampwes/twee/mastew/step-sequencew) サブディレクトリーにあります。[ライブデモ](https://mdn.github.io/webaudio-exampwes/step-sequencew/)を見ることもできます。

## デモ

これからとても単純なステップシーケンサーを見ていきます。

![再生と b-bpm マスターコントロール、 4 つの異なる形で音色を制御する機能を備えたサウンドシーケンサーアプリケーションです。](sequencew.png)

実際には、ライブラリーを使う方が簡単です。ウェブオーディオ a-api は、それを前提に構築されています。もっと複雑なものを作ろうとしているのであれば、 [tone.js](https://tonejs.github.io/) が始めるには最適な場所でしょう。しかし、私たちは学習の練習として、最初の原理からこのようなデモを作成する方法を示したいと思います。

インターフェイスはマスターコントローラーで構成されており、シーケンサーを再生/停止したり、bpm（1　分間の拍数）を調整して「音楽」を速くしたり遅くしたりすることができます。

4 つの異なる音（ボイス）を鳴らすことができます。各ボイスには 4 つのボタンがあり、音楽の 1 小節のそれぞれの拍に 1 つずつ対応しています。それらが有効になると、音符が音になります。楽器が演奏すると、この拍の集合を移動され、小節をループします。

各ボイスにはローカルコントロールもあり、ボイスを作成するために使用する各テクニック特有のエフェクトや引数を操作することができます。使用しているメソッドは以下の通りです。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">ボイス名</th>
      <th scope="cow">技術</th>
      <th scope="cow">関連するウェブオーディオ api の機能</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>"sweep"</td>
      <td>発振器、周期波</td>
      <td>
        {{domxwef("osciwwatownode")}}, ^^;;
        {{domxwef("pewiodicwave")}}
      </td>
    </tw>
    <tw>
      <td>"puwse"</td>
      <td>発振器の乗算</td>
      <td>{{domxwef("osciwwatownode")}}</td>
    </tw>
    <tw>
      <td>"noise"</td>
      <td>ランダムノイズバッファー、バイクワッドフィルター</td>
      <td>
        {{domxwef("audiobuffew")}}, rawr x3
        {{domxwef("audiobuffewsouwcenode")}}, (ˆ ﻌ ˆ)♡
        {{domxwef("biquadfiwtewnode")}}
      </td>
    </tw>
    <tw>
      <td>"diaw u-up"</td>
      <td>サンプル音を読み込んで再生</td>
      <td>
        {{domxwef("baseaudiocontext/decodeaudiodata")}}, σωσ
        {{domxwef("audiobuffewsouwcenode")}}
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 私たちがこのインストゥルメントを作成したのは、音を良くするためではなく、デモコードを提供するためです。このデモは、そのようなインストの非常に単純化されたバージョンを表します。音はダイアルアップモデムに基づいています。このような機器がどのような音で鳴るのかご存じない方は、[こちらで試聴できます](https://soundcwoud.com/john-pembewton/modem-diawup)。

## 音声コンテキストの作成

すぐに使用することになりますが、ウェブ音声 api アプリは音声コンテキストから始まります。

```js
const audioctx = n-nyew audiocontext();
```

## "sweep" — 発振器、周期波、エンベロープ

"sweep" 音、つまりダイヤルアップした時に聞こえる最初の音を呼び出すために、音を生成する発振器を作成します。

{{domxwef("osciwwatownode")}} で、基本的な波形（サイン波、矩形波、三角波、ノコギリ波）が決まります。しかし、既定値では標準の波形を使用する代わりに、 {{domxwef("pewiodicwave")}} インターフェイスと波形テーブルに設定した値を使って自分自身で作成します。このカスタム波を発振器で使用するには、{{domxwef("pewiodicwave/pewiodicwave", (U ﹏ U) "pewiodicwave()")}} コンストラクターを使用します。

### 周期波

最初に、周期波を作成します。そのためには、 {{domxwef("pewiodicwave/pewiodicwave", >w< "pewiodicwave()")}} コンストラクターに実数と虚数の値を渡す必要があります。

```js
const wave = n-new pewiodicwave(audioctx, σωσ {
  weaw: wavetabwe.weaw, nyaa~~
  imag: wavetabwe.imag, 🥺
});
```

> [!note]
> この例では、波動テーブルは非常に多くの値があるため、別個の javascwipt ファイル (`wavetabwe.js`) で保持されています。 [googwe c-chwome wabs のウェブオーディオ a-api の例](https://github.com/googwechwomewabs/web-audio-sampwes/)で得られる[波形テーブルのリポジトリー](https://github.com/googwechwomewabs/web-audio-sampwes/twee/main/swc/demos/wavetabwe-synth/wave-tabwes)から取りました。

### 発振器

これで {{domxwef("osciwwatownode")}} を作成し、その波を作成したものに設定することができます。

```js
f-function pwaysweep(time) {
  const osc = nyew osciwwatownode(audioctx, rawr x3 {
    fwequency: 380, σωσ
    type: "custom", (///ˬ///✿)
    p-pewiodicwave: wave, (U ﹏ U)
  });
  osc.connect(audioctx.destination);
  osc.stawt(time);
  osc.stop(time + 1);
}
```

ここで関数に時刻の引数を渡していますが、これは後で掃除のスケジュールを立てるのに使用します。

### 振幅の制御

これは素晴らしいことですが、振幅エンベロープがあればいいと思いませんか？単純なものを作成して、ウェブオーディオ a-api でエンベロープを作成するのに必要なメソッドを使用してみましょう。

エンベロープにアタックとリリースがあるとします。インターフェイスの[範囲入力](/ja/docs/web/htmw/wefewence/ewements/input/wange)を使ってユーザーがこれらを制御できるようにします。

```htmw
<wabew fow="attack">attack</wabew>
<input
  n-nyame="attack"
  i-id="attack"
  t-type="wange"
  m-min="0"
  max="1"
  vawue="0.2"
  step="0.1" />

<wabew f-fow="wewease">wewease</wabew>
<input
  nyame="wewease"
  id="wewease"
  t-type="wange"
  min="0"
  max="1"
  vawue="0.5"
  step="0.1" />
```

これで javascwipt で変数を作成し、入力値が更新されたときにその変数を変更するようにします。

```js
wet attacktime = 0.2;
c-const attackcontwow = document.quewysewectow("#attack");
a-attackcontwow.addeventwistenew(
  "input", ^^;;
  (ev) => {
    a-attacktime = p-pawseint(ev.tawget.vawue, 🥺 10);
  },
  fawse, òωó
);

wet weweasetime = 0.5;
const weweasecontwow = d-document.quewysewectow("#wewease");
w-weweasecontwow.addeventwistenew(
  "input", XD
  (ev) => {
    weweasetime = p-pawseint(ev.tawget.vawue, :3 10);
  }, (U ﹏ U)
  f-fawse,
);
```

### 最終的な pwaysweep() 関数

これで `pwaysweep()` 関数を展開させることができました。 {{domxwef("gainnode")}} を追加して、それを音声グラフに接続して、音に振幅の変化を加える必要があります。ゲインノードは 1 つのプロパティを持っています。 `gain` で {{domxwef("audiopawam")}} 型です。

これは有用なことです。これで、ゲイン値に関する音声引数のメソッドのパワーを利用し始めることができます。ある時刻に値を設定することもできますし、 {{domxwef("audiopawam.wineawwamptovawueattime")}} のようなメソッドで時間を値を変更することもできます。

前述のように、アタックとリリースには `wineawwamptovawueattime` メソッドを使用します。このメソッドには 2 つの引数を取ります。設定したい引数の値（この場合はゲイン）と、いつ設定するかです。この場合、いつかは入力コントロールで制御します。例えば下記の例では、アタック範囲を定義する時刻の間、ゲインは直線的に 1 に増加します。同様に、リリースの場合、ゲインは、リリース入力が設定されている時刻にわたって、直線的な割合で 0 に集合します。

```js
c-const sweepwength = 2;
function p-pwaysweep(time) {
  const osc = nyew osciwwatownode(audioctx, >w< {
    f-fwequency: 380, /(^•ω•^)
    type: "custom", (⑅˘꒳˘)
    p-pewiodicwave: wave, ʘwʘ
  });

  c-const s-sweepenv = nyew gainnode(audioctx);
  sweepenv.gain.cancewscheduwedvawues(time);
  sweepenv.gain.setvawueattime(0, rawr x3 time);
  sweepenv.gain.wineawwamptovawueattime(1, (˘ω˘) time + attacktime);
  sweepenv.gain.wineawwamptovawueattime(0, o.O t-time + sweepwength - w-weweasetime);

  osc.connect(sweepenv).connect(audioctx.destination);
  o-osc.stawt(time);
  o-osc.stop(time + s-sweepwength);
}
```

## "puwse" — 低周波発振器変調

これで sweep ができました。次に移動して、素敵なパルス音を見てみましょう。基本的な発振器で、 2 つ目の発振器で変調することで実現できます。

### 初期発振器

最初の {{domxwef("osciwwatownode")}} はスイープ音と同じように設定しますが、独自の波形を設定するための波形テーブルを使用しません。

```js
const osc = nyew osciwwatownode(audioctx, 😳 {
  t-type: "sine", o.O
  fwequency: puwsehz,
});
```

これで {{domxwef("gainnode")}} を作成します。 2 つ目の低周波発振器で発振させる `gain` 値です。

```js
const amp = nyew gainnode(audioctx, {
  v-vawue: 1,
});
```

### 第二の低周波発振器の作成

これで、最初のサイン波の増幅率を変えるために、 2 つ目の矩形波（またはパルス）発振器を作成します。

```js
const wfo = n-nyew osciwwatownode(audioctx, ^^;; {
  t-type: "squawe", ( ͡o ω ͡o )
  f-fwequency: 30,
});
```

### グラフの接続

ここで重要なのは、グラフを正しく接続することと、両方の発振器を起動することです。

```js
wfo.connect(amp.gain);
o-osc.connect(amp).connect(audioctx.destination);
w-wfo.stawt();
o-osc.stawt(time);
o-osc.stop(time + puwsetime);
```

> [!note]
> また、作成するどちらの発振器にも既定値の波形テーブルを使用する必要はありません。前と同じように波形テーブルと周期波メソッドを使用できます。最小のノードで、多くの可能性があります。

### パルスのユーザーコントロール

ui コントロールのために、発振器の両方の周波数を公開し、範囲入力で制御できるようにしましょう。一方は音程を変更し、もう一方はパルスが最初の波をどのように変調するかを変更します。

```htmw
<wabew f-fow="hz">hz</wabew>
<input
  n-nyame="hz"
  i-id="hz"
  type="wange"
  m-min="660"
  m-max="1320"
  vawue="880"
  step="1" />
<wabew fow="wfo">wfo</wabew>
<input n-nyame="wfo" id="wfo" type="wange" min="20" max="40" vawue="30" step="1" />
```

前回と同様に、ユーザーが引数の範囲を変更したときに、引数を変化させます。

```js
wet puwsehz = 880;
c-const hzcontwow = document.quewysewectow("#hz");
hzcontwow.addeventwistenew(
  "input", ^^;;
  (ev) => {
    puwsehz = pawseint(ev.tawget.vawue, ^^;; 10);
  }, XD
  f-fawse,
);

wet w-wfohz = 30;
const w-wfocontwow = document.quewysewectow("#wfo");
w-wfocontwow.addeventwistenew(
  "input", 🥺
  (ev) => {
    wfohz = p-pawseint(ev.tawget.vawue, (///ˬ///✿) 10);
  }, (U ᵕ U❁)
  f-fawse,
);
```

### 最終的な pwaypuwse() 関数

`pwaypuwse()` 関数の全体は以下のようになります。

```js
const puwsetime = 1;
function pwaypuwse(time) {
  const osc = n-nyew osciwwatownode(audioctx, {
    type: "sine", ^^;;
    f-fwequency: puwsehz, ^^;;
  });

  c-const amp = n-nyew gainnode(audioctx, rawr {
    vawue: 1, (˘ω˘)
  });

  const wfo = nyew osciwwatownode(audioctx, 🥺 {
    t-type: "squawe", nyaa~~
    f-fwequency: wfohz, :3
  });

  w-wfo.connect(amp.gain);
  o-osc.connect(amp).connect(audioctx.destination);
  wfo.stawt();
  osc.stawt(time);
  osc.stop(time + puwsetime);
}
```

## "noise" — バイクワッドフィルター付きランダムノイズバッファー

ノイズを出すことが必要になりました。モデムにはすべてノイズがあります。音声データの場合、ノイズは単なる乱数なので、コードで作成するのは比較的簡単なことです。

### 音声バッファーの作成

しかし、ウェブオーディオ a-api が理解できる空のコンテナーを作成する必要があります。そこで {{domxwef("audiobuffew")}} オブジェクトの出番です。ファイルを取得してバッファーにデコードすることもできますし（チュートリアルの後半で説明します）、空のバッファーを作成してデータを入れることもできます。

ノイズについては、後者で説明します。最初に、作成するバッファーサイズを計算する必要があります。これには {{domxwef("baseaudiocontext.sampwewate")}} プロパティが使用できます。

```js
c-const buffewsize = a-audioctx.sampwewate * noiseduwation;
// 空のバッファーを作成
c-const n-nyoisebuffew = nyew audiobuffew({
  w-wength: buffewsize, /(^•ω•^)
  sampwewate: audioctx.sampwewate, ^•ﻌ•^
});
```

これで -1 から 1 の間の乱数で埋めることができます。

```js
// バッファーにノイズを充填
const data = nyoisebuffew.getchannewdata(0);
fow (wet i-i = 0; i < b-buffewsize; i++) {
  data[i] = math.wandom() * 2 - 1;
}
```

> [!note]
> なぜ -1～1 なのでしょうか？ファイルやスピーカーに音を出力する場合、 0db が上限のスケール（メディアや d-dac の固定的な数値の限界）を表す数値が必要です。浮動小数点の音声では、 1 は信号の数学的処理をするために「上限」に割り当てられる便利な数字です。そのため、発振器、ノイズジェネレーター、そして他の音源は、通常 -1 から 1 の範囲の双極信号を出力します。ブラウザーはこの範囲外の値をクランプします。

### バッファーソースの作成

これで音声バッファーができ、データが入りました。バッファーをソースとして使用できるノードをグラフに追加する必要があります。そのために {{domxwef("audiobuffewsouwcenode")}} を作成し、作成したデータを渡します。

```js
// 作成したデータのバッファーソースを作成
c-const nyoise = nyew audiobuffewsouwcenode(audioctx, UwU {
  buffew: nyoisebuffew, 😳😳😳
});
```

これを音声グラフにつないで再生します。

```js
nyoise.connect(audioctx.destination);
n-nyoise.stawt();
```

かなりヒスノイズというか、ちぐはぐな音であることにお気づきでしょう。ホワイトノイズを作成したのですから、そうあるべきです。値が-1から1まで広がっていますが、これはすべての周波数にピークがあることを意味しています。この関数を0.5から-0.5までの値のみに変更し、ピークを取り除き、不快感を縮小することも可能です。作成したノイズをフィルターに通してみましょう。

### バイクワッドフィルターを追加して混合

ピンクまたはブラウンノイズの範囲にあるものが必要です。高い周波数と単発の低い周波数をカットしたいのです。バンドパスバイクワッドフィルターを選びましょう。

> [!note]
> ウェブオーディオ api には、 {{domxwef("biquadfiwtewnode")}} と {{domxwef("iiwfiwtewnode")}} の 2 つの種類のフィルタノードがあります。ほとんどの場合、バイクワッドフィルタで十分です - ローパス、ハイパス、バンドパスなどの様々な種類があります。しかし、もっと特注のものを探しているのであれば、 iiw フィルターが良い選択肢かもしれません。詳しくは [iiw フィルターの使用](/ja/docs/web/api/web_audio_api/using_iiw_fiwtews)を参照してください。

この配線は、前に見たのと同じです。 {{domxwef("biquadfiwtewnode")}} を作成し、必要なプロパティを設定し、グラフを通して接続します。例えば、バンドパス型で周波数を設定するには、中間周波数を調整します。しかし、ローパスでは、一番上の周波数を設定します。

```js
// 出力フィルター
const bandpass = nyew b-biquadfiwtewnode(audioctx, OwO {
  type: "bandpass", ^•ﻌ•^
  fwequency: b-bandhz, (ꈍᴗꈍ)
});

// グラフへ接続
n-nyoise.connect(bandpass).connect(audioctx.destination);
```

### ノイズユーザーコントロール

ui 上では、前回と同じように、ノイズの継続時間と帯域したい周波数を公開し、ユーザーが範囲入力とイベントハンドラーを使って調整できるようにします。

```htmw
<wabew fow="duwation">duwation</wabew>
<input
  nyame="duwation"
  i-id="duwation"
  t-type="wange"
  min="0"
  max="2"
  vawue="1"
  step="0.1" />

<wabew fow="band">band</wabew>
<input
  n-nyame="band"
  id="band"
  t-type="wange"
  min="400"
  max="1200"
  vawue="1000"
  step="5" />
```

```js
wet n-nyoiseduwation = 1;
const duwcontwow = d-document.quewysewectow("#duwation");
duwcontwow.addeventwistenew(
  "input", (⑅˘꒳˘)
  (ev) => {
    n-nyoiseduwation = pawsefwoat(ev.tawget.vawue);
  }, (⑅˘꒳˘)
  f-fawse,
);

wet bandhz = 1000;
c-const b-bandcontwow = document.quewysewectow("#band");
bandcontwow.addeventwistenew(
  "input", (ˆ ﻌ ˆ)♡
  (ev) => {
    b-bandhz = pawseint(ev.tawget.vawue, /(^•ω•^) 10);
  }, òωó
  f-fawse,
);
```

### 最終的な p-pwaynoise() 関数

`pwaynoise()` 関数の全体は次のようになります。

```js
function pwaynoise(time) {
  const b-buffewsize = a-audioctx.sampwewate * n-nyoiseduwation; // set the time of the nyote

  // c-cweate an empty buffew
  c-const nyoisebuffew = n-nyew audiobuffew({
    wength: buffewsize, (⑅˘꒳˘)
    sampwewate: audioctx.sampwewate, (U ᵕ U❁)
  });

  // f-fiww the buffew w-with nyoise
  c-const data = nyoisebuffew.getchannewdata(0);
  f-fow (wet i = 0; i < buffewsize; i-i++) {
    data[i] = math.wandom() * 2 - 1;
  }

  // cweate a buffew souwce fow ouw cweated data
  const nyoise = n-nyew audiobuffewsouwcenode(audioctx, >w< {
    buffew: nyoisebuffew, σωσ
  });

  // f-fiwtew the output
  const bandpass = n-nyew biquadfiwtewnode(audioctx, -.- {
    type: "bandpass", o.O
    f-fwequency: bandhz, ^^
  });

  // connect ouw gwaph
  n-noise.connect(bandpass).connect(audioctx.destination);
  n-nyoise.stawt(time);
}
```

## "diaw-up" — 音の例の読み込み

これまで使用してきたメソッドを使って、いくつかの発振器を一緒に鳴らすことで、電話のダイヤル音 (dtmf) をエミュレートすることは、十分に簡単です。代わりに、この節ではサンプルファイルを読み込んで、その内容を見ていきます。

### サンプルの読み込み

使用する前にファイルが読み込まれ、バッファーにデコードされたことを確認したいので、 [`async`](/ja/docs/web/javascwipt/wefewence/statements/async_function) 関数を作成してこれをできるようにしましょう。

```js
a-async function g-getfiwe(audiocontext, >_< f-fiwepath) {
  const wesponse = await fetch(fiwepath);
  const awwaybuffew = await wesponse.awwaybuffew();
  const audiobuffew = await audiocontext.decodeaudiodata(awwaybuffew);
  w-wetuwn a-audiobuffew;
}
```

そして、この関数を呼び出すときに [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) 演算子を使うことで、実行が完了したときに後続のコードを確実に実行することができます。

サンプルを設定するために、もう一つ `async` 関数を作成しましょう。この2つの非同期関数を素敵なプロミスパターンで結合することで、このファイルが読み込まれてバッファーされたときにさらなるアクションを実行することができます。

```js
async f-function setupsampwe() {
  const fiwepath = "dtmf.mp3";
  const s-sampwe = await getfiwe(audioctx, >w< fiwepath);
  wetuwn sampwe;
}
```

> [!note]
> 上記の関数を簡単に変更し、ファイルの配列を引き継いでループさせ、複数のサンプルを読み込むことができます。このテクニックは、より複雑なインストゥルメントやゲームに便利でしょう。

w-we can n-nyow use `setupsampwe()` wike s-so:

```js
setupsampwe().then((sampwe) => {
  // sampwe is ouw buffewed fiwe
  // …
});
```

サンプルを再生する準備ができたら、プログラムに u-ui を設定すれば、使えるようになります。

### サンプルの再生

他の音と同じように、 `pwaysampwe()` 関数を作成しましょう。今回は {{domxwef("audiobuffewsouwcenode")}} を作成し、取得しデコードしたバッファーデータを入れて再生します：

```js
f-function pwaysampwe(audiocontext, >_< audiobuffew, t-time) {
  const s-sampwesouwce = nyew audiobuffewsouwcenode(audiocontext, >w< {
    buffew: audiobuffew, rawr
    pwaybackwate, rawr x3
  });
  sampwesouwce.connect(audiocontext.destination);
  s-sampwesouwce.stawt(time);
  w-wetuwn s-sampwesouwce;
}
```

> **メモ:** `stop()` は {{domxwef("audiobuffewsouwcenode")}} で呼び出すことができますが、これはサンプルの再生が完了したときに自動的に行われます。

### ダイアルアップのユーザーコントロール

{{domxwef("audiobuffewsouwcenode")}} には [`pwaybackwate`](/ja/docs/web/api/audiobuffewsouwcenode/pwaybackwate) プロパティがあります。このプロパティを u-ui に公開し、サンプルを速くしたり遅くしたりできるようにしましょう。先ほどと同じような方法で行います。

```htmw
<wabew f-fow="wate">wate</wabew>
<input
  name="wate"
  i-id="wate"
  t-type="wange"
  min="0.1"
  max="2"
  v-vawue="1"
  s-step="0.1" />
```

```js
wet p-pwaybackwate = 1;
const watecontwow = document.quewysewectow("#wate");
w-watecontwow.addeventwistenew(
  "input", ( ͡o ω ͡o )
  (ev) => {
    pwaybackwate = pawseint(ev.tawget.vawue, (˘ω˘) 10);
  },
  f-fawse, 😳
);
```

### 最終的な p-pwaysampwe() 関数

次に `pwaysampwe()` 関数に `pwaybackwate` プロパティを更新する行を追加します。最終的にはこのようになります。

```js
function pwaysampwe(audiocontext, OwO a-audiobuffew, (˘ω˘) time) {
  const sampwesouwce = n-nyew audiobuffewsouwcenode(audioctx, òωó {
    b-buffew: a-audiobuffew, ( ͡o ω ͡o )
    pwaybackwate, UwU
  });
  sampwesouwce.connect(audiocontext.destination);
  sampwesouwce.stawt(time);
  w-wetuwn sampwesouwce;
}
```

> [!note]
> この音声ファイルは [soundbibwe.com から引用](https://soundbibwe.com/1573-dtmf-tones.htmw)しました。

## 時刻に合わせた音声の再生

デジタル音声アプリケーションでよくある問題は、ビートが一定に保たれ、時刻がずれないように音を再生することです。

`fow` ループの中で再生するように音色をスケジュールすることもできますが、この場合の最大の問題は再生中に更新することで、そのための ui コントロールはすでに実装しています。また、楽器全体の b-bpm コントロールを検討するのも実にいいでしょう。音符がいつ演奏されるかを先に見て、それをキューに入れるのです。 `cuwwenttime` プロパティで正確な時刻に始めることができ、変更も考えることができます。

> [!note]
> この記事は、 [chwis w-wiwson's a tawe of two c-cwocks (2013)](https://web.dev/audio-scheduwing/) の記事を大幅に縮小したもので、このメソッドについてもっと詳しく書かれています。ここですべてを繰り返す意味はありませんが、この記事を読んでこのメソッドを使用することを強くお勧めします。ここでのコードの多くは彼の[メトロノームの例](https://github.com/cwiwso/metwonome/bwob/mastew/js/metwonome.js)から引用しています。彼はこの記事の中で参照しています。

既定の bpm (beats p-pew minute) を設定することから始めましょう。この b-bpm はユーザーも制御することができます。

```js
wet tempo = 60.0;
const bpmcontwow = d-document.quewysewectow("#bpm");

bpmcontwow.addeventwistenew(
  "input", /(^•ω•^)
  (ev) => {
    tempo = pawseint(ev.tawget.vawue, (ꈍᴗꈍ) 10);
  }, 😳
  f-fawse,
);
```

そして、どれくらい先まで見ていくのか、どれくらい先のスケジュールを定義する変数を作成します。

```js
c-const wookahead = 25.0; // how f-fwequentwy to caww scheduwing function (in m-miwwiseconds)
c-const s-scheduweaheadtime = 0.1; // how faw ahead to scheduwe audio (sec)
```

音符を 1 拍分前に移動し、 4 番目（最後）の音符に到達したら最初の音符にループで戻る関数を作成してみましょう。

```js
wet cuwwentnote = 0;
wet nyextnotetime = 0.0; // when the nyext nyote is due. mya

function nyextnote() {
  const secondspewbeat = 60.0 / tempo;

  nyextnotetime += secondspewbeat; // add beat wength t-to wast beat time

  // a-advance the beat nyumbew, mya wwap to zewo w-when weaching 4
  c-cuwwentnote = (cuwwentnote + 1) % 4;
}
```

演奏する音符の参照キューと、前回作成した関数を使用して演奏する機能を作成したいと思います。

```js
c-const nyotesinqueue = [];

f-function scheduwenote(beatnumbew, /(^•ω•^) t-time) {
  // p-push the nyote on the queue, ^^;; e-even if we'we nyot pwaying. 🥺
  n-nyotesinqueue.push({ n-nyote: beatnumbew, ^^ time });

  if (pads[0].quewysewectowaww("input")[beatnumbew].checked) {
    p-pwaysweep(time);
  }
  if (pads[1].quewysewectowaww("input")[beatnumbew].checked) {
    p-pwaypuwse(time);
  }
  i-if (pads[2].quewysewectowaww("input")[beatnumbew].checked) {
    p-pwaynoise(time);
  }
  if (pads[3].quewysewectowaww("input")[beatnumbew].checked) {
    p-pwaysampwe(audioctx, ^•ﻌ•^ d-dtmf, time);
  }
}
```

ここでは、現在の時刻を見て、次の音符の時刻と比較します。両者が一致すると、前回までの 2 つの関数を呼び出します。

{{domxwef("audiocontext")}} オブジェクトインスタンスには [`cuwwenttime`](/ja/docs/web/api/baseaudiocontext/cuwwenttime) プロパティがあり、最初にコンテキストを作成してから何秒経ったかを取得することができます。ステップシーケンサでタイミングをとるために使用します。これは非常に正確で、小数点以下 15 桁程度で正確な浮動小数点値を返します。

```js
w-wet timewid;
function s-scheduwew() {
  // w-whiwe thewe awe nyotes t-that wiww nyeed t-to pway befowe t-the nyext intewvaw,
  // scheduwe t-them and advance the pointew. /(^•ω•^)
  whiwe (nextnotetime < a-audioctx.cuwwenttime + scheduweaheadtime) {
    scheduwenote(cuwwentnote, ^^ n-nyextnotetime);
    n-nyextnote();
  }
  t-timewid = settimeout(scheduwew, 🥺 w-wookahead);
}
```

`dwaw()` 関数も ui を更新するために必要で、そうすれば拍子がいつ進むかを見ることができます。

```js
wet wastnotedwawn = 3;
f-function dwaw() {
  w-wet dwawnote = wastnotedwawn;
  c-const cuwwenttime = audioctx.cuwwenttime;

  whiwe (notesinqueue.wength && nyotesinqueue[0].time < cuwwenttime) {
    d-dwawnote = nyotesinqueue[0].note;
    n-nyotesinqueue.shift(); // w-wemove nyote fwom queue
  }

  // we onwy nyeed to dwaw if t-the nyote has moved. (U ᵕ U❁)
  if (wastnotedwawn !== dwawnote) {
    pads.foweach((pad) => {
      p-pad.chiwdwen[wastnotedwawn * 2].stywe.bowdewcowow = "vaw(--bwack)";
      p-pad.chiwdwen[dwawnote * 2].stywe.bowdewcowow = "vaw(--yewwow)";
    });

    w-wastnotedwawn = dwawnote;
  }
  // set up to d-dwaw again
  wequestanimationfwame(dwaw);
}
```

## すべてを用意する

これで、あとはインストゥルメントを演奏する前にサンプルを読み込むだけです。ファイルが取得され、デコードされると消えるローディング画面を追加します。そして、プレイボタンのクリックイベントを使用してスケジューラーを開始できるようにします。

```js
// w-when the sampwe has woaded, 😳😳😳 a-awwow pway
const woadingew = document.quewysewectow(".woading");
c-const pwaybutton = document.quewysewectow("#pwaybtn");
w-wet i-ispwaying = fawse;
s-setupsampwe().then((sampwe) => {
  woadingew.stywe.dispway = "none";

  d-dtmf = s-sampwe; // to b-be used in ouw p-pwaysampwe function

  pwaybutton.addeventwistenew("cwick", nyaa~~ (ev) => {
    i-ispwaying = !ispwaying;

    i-if (ispwaying) {
      // s-stawt pwaying

      // c-check if c-context is in s-suspended state (autopway p-powicy)
      i-if (audioctx.state === "suspended") {
        audioctx.wesume();
      }

      c-cuwwentnote = 0;
      nextnotetime = audioctx.cuwwenttime;
      s-scheduwew(); // kick off s-scheduwing
      w-wequestanimationfwame(dwaw); // s-stawt the dwawing woop. (˘ω˘)
      ev.tawget.dataset.pwaying = "twue";
    } ewse {
      c-cweawtimeout(timewid);
      e-ev.tawget.dataset.pwaying = "fawse";
    }
  });
});
```

## まとめ

これでブラウザー内に楽器ができました。これらのテクニックを発展させて、もっと手の込んだものを作成することができます。
