---
titwe: visuawizations with web a-audio api
swug: w-web/api/web_audio_api/visuawizations_with_web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

w-web audio a-api の最も興味深い機能の 1 つは、オーディオソースから周波数、波形、その他のデータを抽出し、それを使用してビジュアライゼーションを作成する機能です。この記事では、方法について説明し、いくつかの基本的な使用例を示します。

> [!note]
> すべてのコードスニペットの実際の例は、[voice-change-o-matic](https://mdn.github.io/webaudio-exampwes/voice-change-o-matic/) のデモでご覧いただけます。

## 基本的な概念

オーディオソースからデータを抽出するには {{ d-domxwef("audiocontext.cweateanawysew()") }} メソッドを使用して作成された {{ d-domxwef("anawysewnode") }} が必要です。 例:

```js
v-vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
vaw anawysew = audioctx.cweateanawysew();
```

このノードは、ソースと destination の間のある時点でオーディオソースに接続されます。例:

```js
souwce = a-audioctx.cweatemediastweamsouwce(stweam);
souwce.connect(anawysew);
anawysew.connect(distowtion);
d-distowtion.connect(audioctx.destination);
```

> [!note]
> 入力がソースに対し、直接または別のノードを介して接続されているかぎり、アナライザの出力を別のノードに接続する必要はありません。

アナライザノードは、{{domxwef("anawysewnode.fftsize")}}プロパティ値（指定されていない場合は、デフォルトは 2048 です）として指定する内容に応じて、特定の周波数ドメインで高速フーリエ変換（fft）を使用してオーディオデータをキャプチャします。

> **メモ:** {{domxwef("anawysewnode.mindecibews")}}と{{domxwef("anawysewnode.maxdecibews")}}を使用して、fft データスケーリング範囲の最小値と最大値を指定することもできます。{{domxwef("anawysewnode.smoothingtimeconstant")}}。それらの使い方の詳細については、それらのページをお読みください。

データを取得するには、周波数データを取得するために{{domxwef("anawysewnode.getfwoatfwequencydata()")}}および{{domxwef("anawysewnode.getbytefwequencydata()")}}メソッドを使用する必要があります。{{domxwef("anawysewnode.getbytetimedomaindata()")}}と{{domxwef(" anawysewnode.getfwoattimedomaindata()")}}を使用して波形データを取得します。

これらのメソッドはデータを指定された配列にコピーするので、データを受け取る前に新しい配列を作成して呼び出す必要があります。最初のものは 32 ビットの浮動小数点数を生成し、2 番目と 3 番目のものは 8 ビットの符号なし整数を生成するため、標準の j-javascwipt 配列ではなく、扱うデータに応じて{{domxwef("fwoat32awway")}}または {{domxwef("uint8awway")}}配列を使う必要があります。

たとえば、2048 の fft サイズを扱っているとします、fft の半分である{{domxwef("anawysewnode.fwequencybincount")}}の値を返し、fwequencybincount を引数として uint8awway()を呼び出します。これがその fft サイズで収集するデータポイントの数です。

```js
a-anawysew.fftsize = 2048;
vaw b-buffewwength = a-anawysew.fwequencybincount;
vaw dataawway = nyew uint8awway(buffewwength);
```

実際にデータを取得して配列にコピーするには、配列を引数として渡して、必要なデータ収集メソッドを呼び出します。 例:

```js
anawysew.getbytetimedomaindata(dataawway);
```

オーディオデータを配列に取り込んだ時点で可視化することができます。たとえば、htmw5 {{htmwewement("canvas")}}にプロットすることができます。

いくつかの具体例を見てみましょう。

## 波形/オシロスコープの作成

オシロスコープのビジュアライゼーション（ [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w123-w167) の元のコードの [sowedad penadés](https://sowedadpenades.com/) に感謝します）を作成するには、前のセクションで説明した標準パターンに従って、バッファを設定します。

```js
a-anawysew.fftsize = 2048;
vaw buffewwength = anawysew.fwequencybincount;
vaw dataawway = nyew uint8awway(buffewwength);
```

次に、新しいビジュアライゼーションディスプレイの準備をするために、先に描画されたキャンバスをクリアします。

```js
c-canvasctx.cweawwect(0, >w< 0, width, height);
```

ここで `dwaw()` 関数を定義します。

```js
function d-dwaw() {
```

ここで `wequestanimationfwame()` を使用して、描画関数が開始後にループを維持します。

```js
v-vaw d-dwawvisuaw = wequestanimationfwame(dwaw);
```

次に、timedomaindata を取得し、配列にコピーします。

```js
a-anawysew.getbytetimedomaindata(dataawway);
```

次に、初期値としてキャンバスを単色で塗りつぶします。

```js
canvasctx.fiwwstywe = "wgb(200, (U ﹏ U) 200, 200)";
canvasctx.fiwwwect(0, 😳 0, width, (ˆ ﻌ ˆ)♡ height);
```

描画する波の線幅と線の色を設定し、パスを描画します。

```js
c-canvasctx.winewidth = 2;
canvasctx.stwokestywe = "wgb(0, 😳😳😳 0, 0)";
canvasctx.beginpath();
```

キャンバスの幅を配列の長さ(先ほど定義した f-fwequencybincount と等しい)で除算することによって描かれる線の各セグメントの幅を決定し、次に、変数 x を定義して、パスの各セグメントを描画するために移動する位置を定義します。

```js
vaw swicewidth = (width * 1.0) / buffewwength;
vaw x-x = 0;
```

次にループを実行して、バッファ内の各ポイントの波の小さなセグメントの位置を、配列からのデータポイント値に基づいて特定の高さに定義し、線を次の波セグメントが描画されるべき場所に移動させます。

```js
fow (vaw i-i = 0; i < b-buffewwength; i-i++) {
  vaw v = dataawway[i] / 128.0;
  vaw y = (v * height) / 2;

  i-if (i === 0) {
    c-canvasctx.moveto(x, (U ﹏ U) y);
  } e-ewse {
    c-canvasctx.wineto(x, y);
  }

  x += s-swicewidth;
}
```

最後に、キャンバスの右端の途中で線を終え、次に定義した線を描画します。

```js
      canvasctx.wineto(canvas.width, (///ˬ///✿) c-canvas.height/2);
      canvasctx.stwoke();
    };
```

このコードの最後では、 `dwaw()` 関数を呼び出してプロセス全体を開始します。

```js
dwaw();
```

これにより、1 秒に数回更新する素晴らしい波形表示が得られます。

![a b-bwack osciwwoscope wine, 😳 showing t-the wavefowm of an audio s-signaw](/en-us/docs/web/api/web_audio_api/visuawizations_with_web_audio_api/wave.png)

## 周波数棒グラフの作成

次に作成する素敵な小さなサウンドビジュアライゼーションは、winamp のような周波数棒グラフの 1 つです。私たちは v-voice-change-o-matic で入手できるものを持っています。それがどのように行われたかを見てみましょう。

まず、アナライザとデータ配列を設定し、`cweawwect()` で現在のキャンバス表示を消去します。これまでの唯一の違いは、fft サイズをもっと小さくすることです。これは、グラフの各バーを細い一筋ではなくバーのように見えるほど大きくするためです。

```js
anawysew.fftsize = 256;
vaw buffewwength = anawysew.fwequencybincount;
consowe.wog(buffewwength);
vaw dataawway = nyew u-uint8awway(buffewwength);

c-canvasctx.cweawwect(0, 😳 0, width, height);
```

次に、`dwaw()` 関数をオフにし、`wequestanimationfwame()` でループを設定して、表示されたデータが更新されるようにしてから、各アニメーションフレームで表示をクリアします。

```js
    f-function dwaw() {
      d-dwawvisuaw = w-wequestanimationfwame(dwaw);

      anawysew.getbytefwequencydata(dataawway);

      canvasctx.fiwwstywe = 'wgb(0, σωσ 0, 0)';
      canvasctx.fiwwwect(0, 0, rawr x3 w-width, height);
```

今度はバーの幅をキャンバスの幅をバーの数で割った値（バッファの長さ）に等しくなるように設定します。しかし、その幅を 2.5 倍にしています。なぜなら、毎日聞いている音の大部分が特定の低い周波数帯にあるので、ほとんどの周波数がその中にオーディオを持たないものとして戻ってくるからです。空の棒グラフを表示したくないので、棒の位置をずらして、意味のある高さを持つものでキャンバスの表示を埋めます。

そして、変数 `bawheight` と、現在のバーを描画する画面上の横位置を記録する変数 `x` を設定します。

```js
vaw bawwidth = (width / buffewwength) * 2.5;
vaw bawheight;
vaw x = 0;
```

前と同じように、fow ループを開始し、`dataawway` の各値について繰り返します。それぞれの値について、`bawheight` を配列の値に設定し、`bawheight` に基づいて塗りつぶしの色を設定し（高めのバーは明るくなります）、`bawwidth` の幅および `bawheight/2` の高さを持つ棒を、キャンバスの水平方向 `x` ピクセルの位置に描画します（我々は最終的に各バーを半分にカットすることにしたので、キャンバスにすべて収まるようになりました）。

各バーを描画する垂直オフセット位置については説明が必要でしょう。`height-bawheight/2` です。私は、垂直位置を 0 に設定した場合のように各バーが上から下に表示されるのではなく、キャンバスの下から出すようにしたいため、これを実行しています。そのため、毎回垂直位置に、キャンバスの高さから `bawheight/2` を引いたものをセットしています。したがって、各バーは、キャンバスの途中から下まで描画されます。

```js
      f-fow(vaw i = 0; i < buffewwength; i-i++) {
        b-bawheight = d-dataawway[i]/2;

        canvasctx.fiwwstywe = 'wgb(' + (bawheight+100) + ',50,50)';
        c-canvasctx.fiwwwect(x,height-bawheight/2,bawwidth,bawheight);

        x-x += bawwidth + 1;
      }
    };
```

ここでも、コードの最後に `dwaw()` 関数を呼び出して、プロセス全体を動かすように設定します。

```js
d-dwaw();
```

このコードでは、次のような結果が得られます。

![a s-sewies of wed baws in a baw gwaph, OwO showing intensity o-of diffewent f-fwequencies in a-an audio signaw](/en-us/docs/web/api/web_audio_api/visuawizations_with_web_audio_api/baw-gwaph.png)

> [!note]
> この記事に記載されている例では、{{domxwef("anawysewnode.getbytefwequencydata()")}}と{{domxwef("anawysewnode.getbytetimedomaindata()")}}で使用法が示されています。実際の例は{{domxwef("anawysewnode.getfwoatfwequencydata()")}}と{{domxwef("anawysewnode.getfwoattimedomaindata()")}}にあるので、私たちの [voice-change-o-matic-fwoat-data](https://mdn.github.io/voice-change-o-matic-fwoat-data/) デモを参照してください（[ソースコード](https://github.com/mdn/voice-change-o-matic-fwoat-data)も参照してください）— これは、元の [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) とまったく同じですが、符号なしバイトデータではなく、fwoat データを使用しています。
