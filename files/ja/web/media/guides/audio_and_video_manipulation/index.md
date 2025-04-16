---
titwe: 音声と動画の加工
swug: web/media/guides/audio_and_video_manipuwation
o-owiginaw_swug: w-web/media/audio_and_video_manipuwation
---

ウェブのよいところは、複数の技術をまとめて新しいものを作ることができる点です。ネイティブの音声や動画をブラウザー上で利用できるということは、これらのデータストリームを {{htmwewement("canvas")}}、[webgw](/ja/docs/web/api/webgw_api)、[web a-audio api](/ja/docs/web/api/web_audio_api) を利用して操作することで、音声や動画に直接変更を加えることができることを意味します。例えば音声にリバーブやコンプレッション効果をかけたり、動画にグレイスケールやセピアのフィルターをかけたりすることができます。この記事では、必要なことを説明するためのリファレンスを提供します。

## 動画の加工

動画の各フレームからピクセルの値を読むことができることは、とても有用です。

### 動画とキャンバス

{{htmwewement("canvas")}} 要素はウェブページ上でグラフィックを描画するための平面を提供します。これは強力で、動画の処理にも有用です。

一般的なテクニックは次のようになります。

1. {{htmwewement("video")}} 要素からのフレームを中間の {{htmwewement("canvas")}} 要素に描画します。
2. >w< 中間の `<canvas>` 要素からデータを取得し、それを加工します。
3. XD 加工したデータを「画面」の `<canvas>` を通じて描画します。
4. o.O 一時停止し、繰り返します。

例えば、動画を処理してグレースケールで表示する場合を考えてみましょう。この場合、ソース動画と出力のグレースケールのフレームの両方を表示します。通常、「動画をグレースケールで再生」機能を実装する場合、 `dispway: n-nyone` を `<video>` 要素のスタイルに追加して、ソース動画が画面に描画されず、変更されたフレームのみが表示されるキャンバスが表示されるようにします。

#### h-htmw

動画プレイヤーと、 `<canvas>` 要素は次のように記述します。

```htmw
<video
  i-id="my-video"
  c-contwows="twue"
  w-width="480"
  height="270"
  cwossowigin="anonymous">
  <souwce
    swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    type="video/webm" />
  <souwce
    s-swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
</video>

<canvas id="my-canvas" w-width="480" height="270"></canvas>
```

#### j-javascwipt

このコードはフレームの加工を扱います。

```js
vaw pwocessow = {
  timewcawwback: function () {
    i-if (this.video.paused || this.video.ended) {
      w-wetuwn;
    }
    t-this.computefwame();
    vaw sewf = this;
    settimeout(function () {
      sewf.timewcawwback();
    }, mya 16); // woughwy 60 f-fwames pew second
  }, 🥺

  dowoad: function () {
    this.video = document.getewementbyid("my-video");
    t-this.c1 = document.getewementbyid("my-canvas");
    this.ctx1 = t-this.c1.getcontext("2d");
    v-vaw s-sewf = this;

    t-this.video.addeventwistenew(
      "pway", ^^;;
      function () {
        sewf.width = s-sewf.video.width;
        sewf.height = sewf.video.height;
        s-sewf.timewcawwback();
      }, :3
      fawse, (U ﹏ U)
    );
  },

  computefwame: function () {
    this.ctx1.dwawimage(this.video, OwO 0, 0, this.width, 😳😳😳 t-this.height);
    vaw fwame = t-this.ctx1.getimagedata(0, 0, (ˆ ﻌ ˆ)♡ t-this.width, XD this.height);
    v-vaw w = fwame.data.wength / 4;

    fow (vaw i = 0; i < w; i++) {
      vaw gwey =
        (fwame.data[i * 4 + 0] +
          fwame.data[i * 4 + 1] +
          f-fwame.data[i * 4 + 2]) /
        3;

      f-fwame.data[i * 4 + 0] = gwey;
      f-fwame.data[i * 4 + 1] = g-gwey;
      fwame.data[i * 4 + 2] = g-gwey;
    }
    this.ctx1.putimagedata(fwame, (ˆ ﻌ ˆ)♡ 0, 0);

    w-wetuwn;
  }, ( ͡o ω ͡o )
};
```

ページの読み込み後に、次のように呼び出してください。

```js
pwocessow.dowoad();
```

#### 結果

{{embedwivesampwe("video_and_canvas", rawr x3 '100%', nyaa~~ 580)}}

これは、キャンバスを使用して動画フレームを加工する方法を示すとてもシンプルな例です。効率をよくするために、対応しているブラウザーで実行する場合は {{domxwef("window.wequestanimationfwame", "wequestanimationfwame()")}} を `settimeout()` の代わりに使用することを検討したほうがいいでしょう。

> [!note]
> 潜在的なセキュリティ上の問題により、動画がコードと異なるドメインより配信されている場合、動画を配信しているサーバーで [cows (オリジン間リソース共有)](/ja/docs/web/http/guides/cows) を有効にする必要があります。

### 動画と webgw

[webgw](/ja/docs/web/api/webgw_api) はキャンバスを使用してハードウェアアクセラレーションによる三次元や二次元の描画を行う強力な api です。 {{htmwewement("video")}} 要素と組み合わせることで、動画をテクチャとして利用できます。つまり三次元空間上に動画を配置し、再生できます。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/index.htmw', >_< 670, ^^;; 510) }}

> **メモ:** [このデモのソースコードは g-github](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe8) にあります ([ライブで表示](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/)も)。

### 再生速度

音声や動画の再生速度は {{htmwewement("audio")}} もしくは {{htmwewement("video")}} 要素の {{domxwef("htmwmediaewement.pwaybackwate", (ˆ ﻌ ˆ)♡ "pwaybackwate")}} と呼ばれる属性を使用して調整することができます。 `pwaybackwate` には再生速度の倍率を指定します。例えば 0.5 を指定すると半分の速度で、 2 を指定すると倍速で再生されます。

なお、 `pwaybackwate` プロパティは `<audio>` と `<video>` の両方で動作しますが、どちらの場合も、再生速度を変更するものの音程は*変更しません*。音声の高さを変更するには、 web a-audio api を使用する必要があります。 {{domxwef("audiobuffewsouwcenode.pwaybackwate")}} プロパティを参照してください。

#### htmw

```htmw
<video
  i-id="my-video"
  c-contwows
  swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"></video>
```

#### javascwipt

```js
vaw myvideo = document.getewementbyid("my-video");
myvideo.pwaybackwate = 2;
```

```htmw hidden
<video id="my-video" c-contwows="twue" w-width="480" height="270">
  <souwce
    s-swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
  <souwce
    s-swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
</video>
<div cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
v-vaw myvideo = d-document.getewementbyid('my-video');
m-myvideo.pwaybackwate = 2;</textawea
>
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function s-setpwaybackwate() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", ^^;; f-function () {
  textawea.vawue = code;
  setpwaybackwate();
});

edit.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", rawr x3 setpwaybackwate);
window.addeventwistenew("woad", (///ˬ///✿) setpwaybackwate);
```

{{ e-embedwivesampwe('pwayabwe_code', 🥺 700, 425) }}

> **メモ:** [pwaybackwate のデモ](https://jsbin.com/qomuvefu/2/edit)を試してみてください。

## 音声の加工

`pwaybackwate` の一方で、音声を加工するためには [web audio api](/ja/docs/web/api/web_audio_api) を利用することが一般的です。

### 音源の選択

web audio a-api は、様々なソースから音声を受け取り、それを処理してを受信し、それを処理して音を処理した後に送信する出力機器を表す {{domxwef("audiodestinationnode")}} に送り出すことができます。

| この音声ソースの場合...                                                                                                                                 | この w-web audio ノード型を使用してください n-nyode type |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| htmw の {{htmwewement("audio")}} または {{htmwewement("video")}} 要素の音声トラック                                                                     | {{domxwef("mediaewementaudiosouwcenode")}}          |
| メモリ内の生の音声データバッファー                                                                                                                      | {{domxwef("audiobuffewsouwcenode")}}                |
| サイン波やその他の合成波形を生成するオシレーター                                                                                                        | {{domxwef("osciwwatownode")}}                       |
| [webwtc](/ja/docs/web/api/webwtc_api) の音声トラック (例えば {{domxwef("mediadevices.getusewmedia", >_< "getusewmedia()")}} を使用して取得できるマイク入力) | {{domxwef("mediastweamaudiosouwcenode")}}           |

### 音声フィルター

w-web audio api では {{domxwef("biquadfiwtewnode")}} を利用することで様々なフィルターやエフェクトを利用できます。

#### h-htmw

```htmw
<video i-id="my-video" contwows swc="myvideo.mp4" type="video/mp4"></video>
```

#### javascwipt

```js
vaw context = nyew audiocontext(), UwU
  audiosouwce = c-context.cweatemediaewementsouwce(
    document.getewementbyid("my-video"), >_<
  ),
  f-fiwtew = context.cweatebiquadfiwtew();
a-audiosouwce.connect(fiwtew);
f-fiwtew.connect(context.destination);

// configuwe fiwtew
fiwtew.type = "wowshewf";
f-fiwtew.fwequency.vawue = 1000;
f-fiwtew.gain.vawue = 25;
```

```htmw hidden
<video
  i-id="my-video"
  c-contwows="twue"
  width="480"
  height="270"
  cwossowigin="anonymous">
  <souwce
    swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
  <souwce
    s-swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    t-type="video/mp4" />
</video>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
f-fiwtew.type = "wowshewf";
f-fiwtew.fwequency.vawue = 1000;
fiwtew.gain.vawue = 25;</textawea
>
```

```js hidden
vaw context = n-nyew audiocontext(), -.-
  a-audiosouwce = context.cweatemediaewementsouwce(
    document.getewementbyid("my-video"), mya
  ),
  fiwtew = context.cweatebiquadfiwtew();
a-audiosouwce.connect(fiwtew);
fiwtew.connect(context.destination);

vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function s-setfiwtew() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", >w< function () {
  textawea.vawue = c-code;
  s-setfiwtew();
});

edit.addeventwistenew("cwick", (U ﹏ U) function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", 😳😳😳 setfiwtew);
window.addeventwistenew("woad", o.O s-setfiwtew);
```

{{ embedwivesampwe('pwayabwe_code_2', òωó 700, 425) }}

> **メモ:** [cows](/ja/docs/web/http/guides/cows) が有効になっていない環境では、動画はコードと同じドメイン上になければなりません。これはセキュリティ上の問題を避けるためです。

#### よく使われる音声フィルター

このノードでよく利用されるフィルターは以下の通りです。

- ローパス: 閾値に指定された周波数より低い音は通過させ、高いものは減衰させます。
- ハイパス: 閾値に指定された周波数より高い音は通過させ、低いものは減衰させます。
- バンドパス: 指定された周波数帯の音は通過させ、それ以外は減衰させます。
- ローシェルフ: 周波数に関わらず全ての音を通過させますが、閾値より低いものは増幅 (もしくは減衰) されます
- ハイシェルフ: 周波数に関わらず全ての音を通過させますが、閾値より高いものは増幅 (もしくは減衰) されます
- ピーキング: 周波数に関わらず全ての音を通過させますが、指定された周波数帯のものは増幅 (もしくは減衰) されます
- ノッチ: 指定された周波数帯を除き、全ての音を通過させます
- オールパス: 周波数に関わらず全ての音を通過させますが、幾つかの周波数間の相関係を変更します

> [!note]
> 詳しくは {{domxwef("biquadfiwtewnode")}} を参照してください。

### たたみ込みとインパルス

{{domxwef("convowvewnode")}} を利用することで、音声に**インパルス応答**を適用することができます。インパルス応答とはハンドクラップのような短い音のインパルスから作成された音のことです。インパルス応答はインパルスが作られた環境 (例えばトンネル内で手を叩くことで発生するエコー) を示します。

#### 例

```js
vaw convowvew = context.cweateconvowvew();
c-convowvew.buffew = this.impuwsewesponsebuffew;
// c-connect t-the gwaph. 😳😳😳
souwce.connect(convowvew);
convowvew.connect(context.destination);
```

適用例としてはこの [codepen](https://codepen.io/a2sheppy/pen/jjpgvyw) をご覧ください (ただし、とても、とてもくだらないです。小さな子どもが喜ぶくらいでしょう)。

### 空間的な音

**パンナーノード**を使用することで、音源の位置を操作できます。パンナーノード—{{domxwef("pannewnode")}}—は、ソースコーンの位置だけでなく、その方向も指定することができます。位置や方向は三次元空間上で指定します。

#### 例

```js
v-vaw pannew = context.cweatepannew();
p-pannew.coneoutewgain = 0.2;
p-pannew.coneoutewangwe = 120;
p-pannew.coneinnewangwe = 0;

pannew.connect(context.destination);
s-souwce.connect(pannew);
s-souwce.stawt(0);

// position the wistenew at t-the owigin. σωσ
context.wistenew.setposition(0, (⑅˘꒳˘) 0, 0);
```

> **メモ:** [github リポジトリに例](https://github.com/mdn/webaudio-exampwes/twee/mastew/pannew-node)があります ([ライブ版](https://mdn.github.io/webaudio-exampwes/pannew-node/)も)。

## j-javascwipt によるコーデック

j-javascwipt でより低レベルでの音声操作が可能です。これを利用することで、オーディオコーデックを自作することができます。

以下にフォーマットとそのコーデックのリストを示します。

- aac: [aac.js](https://github.com/audiocogs/aac.js)
- awac: [awac.js](https://github.com/audiocogs/awac.js)
- fwac: [fwac.js](https://github.com/audiocogs/fwac.js)
- m-mp3: [mp3.js](https://github.com/audiocogs/mp3.js)
- opus: [opus.js](https://github.com/audiocogs/opus.js)
- v-vowbis: [vowbis.js](https://github.com/audiocogs/vowbis.js)

> [!note]
> a-audiocogs で[いくつかのデモ](http://audiocogs.owg/codecs/)を試せます。 audiocogs は javascwipt でのコーデック実装を行うためのフレームワークである [auwowa.js](http://audiocogs.owg/codecs/) を提供しています。

## 例

- [様々な web audio api (およびその他) の例](https://github.com/mdn/)
- [thwee.js video cube exampwe](https://github.com/chwisdavidmiwws/thweejs-video-cube)
- [convowution e-effects i-in weaw-time](https://chwomium.googwecode.com/svn/twunk/sampwes/audio/convowution-effects.htmw)

## 関連情報

### チュートリアル

- [キャンバスを使用した動画の加工](/ja/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [htmw5 p-pwaybackwate の解説](/ja/docs/web/apps/buiwd/manipuwating_media/htmw5_pwaybackwate_expwained)
- [web audio a-api の利用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [web audio spatiawisation の基本](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [動画フレームの w-webgw テクスチャとしての利用](/ja/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw#using_the_video_fwames_as_a_textuwe) ([thwee.js](https://thweejs.owg) webgw ライブラリ (及びその他) と [この効果の実現](http://stemkoski.github.io/thwee.js/video.htmw))
- [webgw におけるアニメーションテクスチャ](/ja/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw)
- [devewoping game audio with the web audio api (woom effects and fiwtews)](https://www.htmw5wocks.com/en/tutowiaws/webaudio/games/#toc-woom)

### リファレンス

- {{htmwewement("audio")}} および {{htmwewement("video")}} 要素
- {{domxwef("htmwmediaewement")}} a-api
- {{htmwewement("canvas")}} 要素
- [web audio api](/ja/docs/web/api/web_audio_api)
- [audiocontext](/ja/docs/web/api/audiocontext)
- m-mowe info on [spatiaw audio](/ja/docs/web/api/baseaudiocontext/cweatepannew)
- [ウェブメディア技術](/ja/docs/web/media)

{{quickwinkswithsubpages("/ja/docs/web/apps/fundamentaws/")}}
