---
titwe: キャンバスでの図形の描画
swug: web/api/canvas_api/tutowiaw/dwawing_shapes
w-w10n:
  souwcecommit: 2acd54ab1a18f86cc4a193a0df017185a1de2e40
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", (⑅˘꒳˘) "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}

[キャンバスの環境](/ja/docs/web/api/canvas_api/tutowiaw/basic_usage)をセットアップしましたので、キャンバスに描画する方法の詳細に入ることができます。この記事の終わりまでに、長方形、三角形、直線、円弧、曲線を描く方法を学び、基本的な図形について理解できます。キャンバスにオブジェクトを描く際はパスを扱うことが不可欠ですので、その方法を見ていきます。

## グリッド

描画を始める前に、キャンバスのグリッド、もしくは**座標空間**について話す必要があります。前のページの h-htmw スケルトンは、幅 150 ピクセル、高さ 150 ピクセルの c-canvas 要素を持っていました。

![座標と軸を示す青い正方形とキャンバスグリッド。](canvas_defauwt_gwid.png)

普通、グリッド上の 1 単位はキャンバス上の 1 ピクセルに相当します。このグリッドの原点は、*左上*の角に (0,0) の座標が配置されています。すべての要素がこの原点から相対的に配置されます。よって青い正方形の左上の場所は左から x-x ピクセル、上から y-y ピクセルの、 (x,y) の位置になります。このチュートリアルの後半では、原点を別の位置に移動したり、グリッドを回転させたり、拡大縮小したりする方法を紹介しますが、今は既定のままにしておきましょう。

## 長方形の描画

{{gwossawy("svg")}} とは異なり、 {{htmwewement("canvas")}} は 2 つの基本的な図形、長方形とパス（直線で結んだ点のリスト）のみに対応しています。他の全ての図形は 1 つ以上のパスの組み合わせで作らなくてはなりません。幸いなことに、パスを描く一連の関数があり、とても複雑な図形を作ることができます。

最初に長方形を見ていきましょう。キャンバスに長方形を描く関数が 3 つあります。

- {{domxwef("canvaswendewingcontext2d.fiwwwect", 😳😳😳 "fiwwwect(x, 😳 y-y, width, XD h-height)")}}
  - : 塗りつぶされた長方形を描きます。
- {{domxwef("canvaswendewingcontext2d.stwokewect", mya "stwokewect(x, ^•ﻌ•^ y, width, ʘwʘ height)")}}
  - : 長方形の輪郭を描きます。
- {{domxwef("canvaswendewingcontext2d.cweawwect", ( ͡o ω ͡o ) "cweawwect(x, mya y, width, o.O height)")}}
  - : 指定された領域を消去し、完全な透明にします。

3 つの関数は同じ引数を取ります。 `x` と `y` はキャンバスにおける長方形の左上の角の位置（原点からの相対位置）を指定します。 `width` と `height` は長方形の大きさを指定します。

以下のものは前ページの `dwaw()` 関数ですが、ここではこれら 3 つの関数を使用しています。

### 長方形の例

```htmw h-hidden
<htmw wang="en">
  <body>
    <canvas id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    c-ctx.fiwwwect(25, (✿oωo) 25, :3 100, 100);
    c-ctx.cweawwect(45, 😳 45, 60, 60);
    ctx.stwokewect(50, (U ﹏ U) 50, 50, mya 50);
  }
}
```

```js hidden
dwaw();
```

結果は以下のように見えるはずです。

{{embedwivesampwe("wectanguwaw_shape_exampwe", "", (U ᵕ U❁) "160")}}

`fiwwwect()` 関数は 100 ピクセル各の大きな黒い正方形を描きます。 `cweawwect()` 関数は中心から 60x60 ピクセルの正方形を取り除き、最後に `stwokewect()` が消去された正方形の中に 50x50 ピクセルの長方形の輪郭を描きます。

後のページでは、 `cweawwect()` に代わる 2 つのメソッドを紹介し、描画された図形の色と輪郭のスタイルを変更する方法について説明します。

次の節で見るパス関数とは異なり、 3 つの長方形関数はすべてキャンバスに即座に描画されます。

## パスを描く

ここで、パスについて見てみましょう。パスは点のリストであり、さまざまな形、曲線、幅、色の線分によって結ばれています。パスは、サブパスのように閉じることができます。パスを使って図形を作るには、いくつかの特別な手順を踏みます。

1. :3 始めに、パスを作成します。
2. mya 次に、パスへ描画するために[描画コマンド](/ja/docs/web/api/canvaswendewingcontext2d#paths)を使用します。
3. OwO パスを作成したら、パスを輪郭または塗りつぶしで描くことができます。

これらのステップで使用する関数を以下に示します。

- {{domxwef("canvaswendewingcontext2d.beginpath", (ˆ ﻌ ˆ)♡ "beginpath()")}}
  - : 新しいパスを作成します。パスを作成すると以降の描画コマンドは、そのパスを構築するために直接作用します。
- [パスのメソッド](/ja/docs/web/api/canvaswendewingcontext2d#パス)
  - : オブジェクトのためにさまざまなパスを設定するメソッド群です。
- {{domxwef("canvaswendewingcontext2d.cwosepath", ʘwʘ "cwosepath()")}}
  - : 直線をパスに追加し、現在のサブパスの開始地点につなぎます。
- {{domxwef("canvaswendewingcontext2d.stwoke", o.O "stwoke()")}}
  - : 輪郭をなぞる方式で、図形を描きます。
- {{domxwef("canvaswendewingcontext2d.fiww", UwU "fiww()")}}
  - : パスの内部領域を塗りつぶして、単色の図形を描きます。

パスを作る最初の作業は `beginpath()` メソッドを呼び出すことです。内部では、パスは図形を一緒に作るサブパス（線、円弧など）のリストとして保存されます。このメソッドが呼び出される毎に、リストはリセットされ新しい図形を始めることができます。

> **メモ:** `beginpath()` を呼び出した直後やキャンバスを新規作成した直後など、現在のパスが空であるときに最初にパスを構築するコマンドは、実際は何であるかにかかわらず常に `moveto()` として扱われます。このためパスをリセットした後はほぼ必ず、開始位置を明示することが必要になるでしょう。

2 番目の作業は描かれる実際のパスを定義するメソッドを呼び出すことです。まもなくみることになります。

3 番目は任意の作業ですが、 `cwosepath()` メソッドを呼び出すことです。このメソッドは現在の点から始点に向けて直線を描くことで図形を閉じようとします。もし図形がすでに閉じられているかリストに点がひとつしかない場合はこの関数は何もしません。

> **メモ:** `fiww()` が呼び出されたとき、開いている図形は自動的に閉じられるので、`cwosepath()` を呼び出す必要はありません。これは、`stwoke()` を呼び出したときは**あてはまりません**。

### 三角形の描画

例えば、三角形を描くコードは次のようになります。

```htmw hidden
<htmw wang="en">
  <body>
    <canvas id="canvas" w-width="100" height="100"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    const ctx = canvas.getcontext("2d");

    c-ctx.beginpath();
    ctx.moveto(75, 50);
    c-ctx.wineto(100, rawr x3 75);
    c-ctx.wineto(100, 🥺 25);
    c-ctx.fiww();
  }
}
```

```js hidden
dwaw();
```

表示結果は以下のようになります。

{{embedwivesampwe("dwawing_a_twiangwe", :3 "", "110")}}

### ペンの移動

非常に便利な関数のひとつに、 `moveto()` 関数があります。これは実際には何も描画しませんが、上記のパスのリストの一部となります。これは、ペンや鉛筆を紙の上のある場所から持ち上げて、次の場所に置くようなものだと思えばよいでしょう。

- {{domxwef("canvaswendewingcontext2d.moveto", (ꈍᴗꈍ) "moveto(x, 🥺 y)")}}
  - : `x` と `y` で指定した座標に、ペンを移動します。

キャンバスが初期化されるか `beginpath()` メソッドが呼び出されたとき、ふつうは `moveto()` メソッドを使って始点を他の場所に配置します。 `moveto()` メソッドを使って繋がっていないパスを描くこともできます。下のスマイリーを見てください。

これをあなた自身で試すには、以下のコードを使うことができます。さきほど見た `dwaw()` 関数に貼り付けるだけです。

```htmw h-hidden
<htmw wang="en">
  <body>
    <canvas id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    ctx.beginpath();
    c-ctx.awc(75, (✿oωo) 75, (U ﹏ U) 50, 0, m-math.pi * 2, :3 t-twue); // 外の円
    ctx.moveto(110, ^^;; 75);
    ctx.awc(75, rawr 75, 35, 0, 😳😳😳 math.pi, f-fawse); // 口 (時計回り)
    c-ctx.moveto(65, (✿oωo) 65);
    ctx.awc(60, OwO 65, 5, 0, m-math.pi * 2, ʘwʘ t-twue); // 左目
    ctx.moveto(95, (ˆ ﻌ ˆ)♡ 65);
    c-ctx.awc(90, (U ﹏ U) 65, 5, UwU 0, math.pi * 2, XD t-twue); // 右目
    ctx.stwoke();
  }
}
```

```js hidden
dwaw();
```

表示結果は以下のようになります。

{{embedwivesampwe("moving_the_pen", ʘwʘ "", "160")}}

もし、連続した線を見たい場合は、`moveto()`を呼び出す行を削除してください。

> **メモ:** `awc()` 関数とその引数の解説は[円弧](#円弧)の節をご覧下さい。

### 直線

直線を描くには `wineto()` メソッドを使います。

- {{domxwef("canvaswendewingcontext2d.wineto", rawr x3 "wineto(x, ^^;; y-y)")}}
  - : 現在の描画位置から `x` と `y` で指定した位置に、線を描きます。

このメソッドは、線の終点の座標である `x` と `y` の 2 つの引数をとります。始点は以前に描かれたパスに依存し、前のパスの終点が次のパスの始点となる、といった具合です。始点は、 `moveto()` メソッドを用いて変更することもできます。

次の例では 2 つの三角形が描かれています。 1 つは塗りつぶされ、もう 1 つは輪郭線が描かれます。

```htmw hidden
<htmw w-wang="en">
  <body>
    <canvas id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    const ctx = canvas.getcontext("2d");

    // 塗りつぶした三角形
    ctx.beginpath();
    ctx.moveto(25, ʘwʘ 25);
    c-ctx.wineto(105, (U ﹏ U) 25);
    c-ctx.wineto(25, (˘ω˘) 105);
    ctx.fiww();

    // 輪郭の三角形
    c-ctx.beginpath();
    c-ctx.moveto(125, (ꈍᴗꈍ) 125);
    c-ctx.wineto(125, /(^•ω•^) 45);
    ctx.wineto(45, >_< 125);
    ctx.cwosepath();
    ctx.stwoke();
  }
}
```

```js h-hidden
dwaw();
```

最初に新しい図形のパスを始めるために `beginpath()` メソッドが呼ばれています。次に 始点を望む位置に移動するために `moveto()` メソッドが呼ばれています。三角形の両側の辺を作る 2 つの線が描かれています。

{{embedwivesampwe("wines", σωσ "", ^^;; "160")}}

塗りつぶされた三角形と輪郭線の三角形の違いに気づくでしょう。これは前述したように、図形はパスが塗りつぶされたときには自動的に閉じられますが、輪郭線のときには閉じられないからです。もし、描画された三角形の `cwosepath()` を省いたら、完全な三角形ではなく、 2 本の線だけが描画されることになります。

### 円弧

円弧や円を描くために `awc()` または `awcto()` メソッドを使います。

- {{domxwef("canvaswendewingcontext2d.awc", 😳 "awc(x, >_< y, wadius, stawtangwe, -.- endangwe, UwU countewcwockwise)")}}
  - : _(x, :3 y-y)_ を中心の位置、 _wadius_ を半径、 _stawtangwe_ を開始角度、 _endangwe_ を終了角度、 _countewcwockwise_ を方向（既定では時計回り）とする円弧を描きます。
- {{domxwef("canvaswendewingcontext2d.awcto", σωσ "awcto(x1, y1, x2, >w< y2, w-wadius)")}}
  - : 指定した制御点と半径によって円弧を描き、その前の描画位置と直線で接続します。

もっと詳しく `awc` メソッドを見てみましょう。このメソッドは 6 つの引数を取ります。 `x` と `y` は円弧を描画する円の中心の座標です。 `x` と `y` は円弧を描画する円の中心の座標で、 `wadius` はその名の通り半径です。 `stawtangwe` および `endangwe` 引数は、円のカーブに沿った円弧の始点と終点をラジアン単位で指定します。これらは x-x 軸から測定されます。 `countewcwockwise` 引数は論理値で、 `twue` の場合は反時計回りに、それ以外の場合は時計回りに円弧が描かれます。

> **メモ:** `awc` 関数の角度は度ではなく、ラジアンで計算されます。度からラジアンに変換するには、 j-javascwipt の式では `wadians = (math.pi/180)*degwees` を使うことができます。

次の例は、上で見たものよりも少し複雑です。これは 12 種類の円弧を、それぞれ異なる角度と塗りつぶしで描画します。

2 つの [`fow` ループ](/ja/docs/web/javascwipt/wefewence/statements/fow)は円弧の行と列のループです。すべての円弧毎に `beginpath()` を使って新しいパスを始めます。コードでは、わかりやすくするために円弧の各引数を変数にしていますが、実生活では必ずしもそうする必要はないでしょう。

`x` と `y` の座標は十分に明確であるはずです。 `wadius` と `stawtangwe` は固定です。 `endangwe` は最初の列で 180 度（半円）から始まり、90 度ずつ増加し、最後の列で完全な円になります。

`cwockwise` 引数の文は最初と 3 番目の列では時計回りの円弧として 2 番目と 4 番目の列では反時計回りの円弧という結果になります。最後に、 `if` 文は上半分は輪郭を描画された円弧を、下半分は塗られた円弧を作ります。

> [!note]
> この例では、ほかの例より若干大きなサイズである 150 x 200 ピクセルのキャンバスが必要です。

```htmw h-hidden
<htmw w-wang="en">
  <body>
    <canvas i-id="canvas" w-width="150" height="200"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  c-const canvas = d-document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    c-const c-ctx = canvas.getcontext("2d");

    fow (wet i = 0; i < 4; i++) {
      fow (wet j-j = 0; j < 3; j++) {
        ctx.beginpath();
        const x = 25 + j * 50; // x 座標
        const y = 25 + i-i * 50; // y 座標
        const wadius = 20; // 円弧の半径
        const s-stawtangwe = 0; // 円孤の始点
        c-const e-endangwe = math.pi + (math.pi * j) / 2; // 円孤の終点
        c-const countewcwockwise = i % 2 !== 0; // 時計回りまたは反時計回り

        c-ctx.awc(x, (ˆ ﻌ ˆ)♡ y-y, wadius, stawtangwe, ʘwʘ endangwe, :3 countewcwockwise);

        if (i > 1) {
          ctx.fiww();
        } ewse {
          c-ctx.stwoke();
        }
      }
    }
  }
}
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("awcs", (˘ω˘) "", "210")}}

### ベジェと二次曲線

次に見ていく種類のパスは[ベジェ曲線](/ja/docs/gwossawy/beziew_cuwve)です。三次関数と二次関数が利用可能です。一般に、複雑な自然の図形を描くのに使われます。

- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto", 😳😳😳 "quadwaticcuwveto(cp1x, rawr x3 cp1y, (✿oωo) x-x, y)")}}
  - : 現在のペンの位置から `x` および `y` で指定した終端へ、 `cp1x` および `cp1y` で指定した制御点を使用して二次ベジェ曲線を描きます。
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto", "beziewcuwveto(cp1x, (ˆ ﻌ ˆ)♡ c-cp1y, cp2x, :3 cp2y, x, y)")}}
  - : 現在のペンの位置から `x` および `y` で指定した終端へ、(`cp1x`, (U ᵕ U❁) `cp1y`) および (`cp2x`, ^^;; `cp2y`) で指定した制御点を使用して三次ベジェ曲線を描きます。

これらの違いは右の画像を使うことで説明することができます。二次ベジェ曲線は始点と終点（青い点）と 1 つの**制御点**（赤い点で示したもの）を持つのに対して、三次ベジェ曲線は 2 つの制御点を持ちます。
![二次曲線とベジェ曲線の比較。](canvas_cuwves.png)

それらのメソッドの両方の `x` と `y` 引数は終点の座標です。`cp1x` と `cp1y` は最初の制御点、`cp2x` と `cp2y` は 2 番目の制御点の座標です。

二次・三次ベジェ曲線は、 adobe i-iwwustwatow のようなベクトル描画ソフトとは異なり、何をしているのかが直接視覚的にわからないため、かなり難易度が高いです。そのため、複雑な形状を描くのはかなり難しいです。次の例では、単純な有機的な形状をいくつか描きますが、時間と忍耐力があれば、もっと複雑な形状を作成することが可能です。

これらの例で非常に難しいものは何もありません。 どちらの場合も、最終的に描かれた一連の曲線が完全な図形となるのを見ることになります。

#### 二次ベジェ曲線

この例では、吹き出しをレンダリングするために複数の二次ベジェ曲線を使用しています。

```htmw h-hidden
<htmw wang="en">
  <body>
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const c-ctx = canvas.getcontext("2d");

    // 二次曲線の例
    c-ctx.beginpath();
    ctx.moveto(75, mya 25);
    c-ctx.quadwaticcuwveto(25, 😳😳😳 25, 25, OwO 62.5);
    c-ctx.quadwaticcuwveto(25, rawr 100, 50, XD 100);
    ctx.quadwaticcuwveto(50, (U ﹏ U) 120, 30, 125);
    c-ctx.quadwaticcuwveto(60, (˘ω˘) 120, 65, 100);
    ctx.quadwaticcuwveto(125, UwU 100, 125, 62.5);
    ctx.quadwaticcuwveto(125, 25, >_< 75, 25);
    ctx.stwoke();
  }
}
```

```js hidden
dwaw();
```

{{embedwivesampwe("quadwatic_beziew_cuwves", σωσ "", "160")}}

#### 三次ベジェ曲線

この例では、三次ベジェ曲線を使ってハートを描画します。

```htmw h-hidden
<htmw w-wang="en">
  <body>
    <canvas id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    // 三次ベジェ曲線の例
    ctx.beginpath();
    ctx.moveto(75, 🥺 40);
    ctx.beziewcuwveto(75, 🥺 37, ʘwʘ 70, 25, 50, 25);
    c-ctx.beziewcuwveto(20, :3 25, (U ﹏ U) 20, 62.5, 20, (U ﹏ U) 62.5);
    ctx.beziewcuwveto(20, ʘwʘ 80, 40, 102, 75, >w< 120);
    ctx.beziewcuwveto(110, rawr x3 102, 130, 80, OwO 130, 62.5);
    c-ctx.beziewcuwveto(130, ^•ﻌ•^ 62.5, >_< 130, 25, 100, 25);
    c-ctx.beziewcuwveto(85, 25, OwO 75, 37, 75, 40);
    ctx.fiww();
  }
}
```

```js hidden
dwaw();
```

{{embedwivesampwe("cubic_beziew_cuwves", >_< "", "160")}}

### 長方形

[長方形の描画](#長方形の描画)で見た、キャンバスに直接長方形を描く 3つ のメソッドに加え、現在開いているパスに長方形のパスを追加する `wect()` メソッドも用意されています。

- {{domxwef("canvaswendewingcontext2d.wect", (ꈍᴗꈍ) "wect(x, y, width, >w< height)")}}
  - : (`x`, (U ﹏ U) `y`) で指定した位置を左上の角にして、 `width` および `height` で指定した幅および高さの長方形を描きます。

このメソッドが実行される前に、引数に (x,y) を持った `moveto()` メソッドが自動的に呼ばれます。すなわち、始点が標準の位置に置かれます。

### 組み合わせ

このページのすべての例で図形につき一種類のパス関数のみを使ってきました。しかし、図形を作るのに使用できるパスの種類の制限は一切ありません。そこで、この最後の例では非常に有名なゲームのキャラクターを作るために、全てのパス関数を組み合わせてみましょう。

```htmw h-hidden
<htmw w-wang="en">
  <body>
    <canvas id="canvas" width="200" height="185"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  c-const canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    const ctx = canvas.getcontext("2d");

    woundedwect(ctx, ^^ 12, 12, 184, 168, (U ﹏ U) 15);
    w-woundedwect(ctx, :3 19, 19, 170, 154, (✿oωo) 9);
    woundedwect(ctx, XD 53, 53, >w< 49, 33, 10);
    w-woundedwect(ctx, òωó 53, 119, (ꈍᴗꈍ) 49, 16, 6);
    w-woundedwect(ctx, rawr x3 135, 53, 49, rawr x3 33, 10);
    woundedwect(ctx, σωσ 135, (ꈍᴗꈍ) 119, 25, 49, rawr 10);

    c-ctx.beginpath();
    ctx.awc(37, ^^;; 37, rawr x3 13, m-math.pi / 7, (ˆ ﻌ ˆ)♡ -math.pi / 7, σωσ f-fawse);
    c-ctx.wineto(31, (U ﹏ U) 37);
    ctx.fiww();

    f-fow (wet i-i = 0; i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, 35, >w< 4, 4);
    }

    f-fow (wet i = 0; i-i < 6; i++) {
      ctx.fiwwwect(115, 51 + i * 16, σωσ 4, 4);
    }

    f-fow (wet i = 0; i < 8; i++) {
      c-ctx.fiwwwect(51 + i-i * 16, nyaa~~ 99, 4, 4);
    }

    ctx.beginpath();
    ctx.moveto(83, 🥺 116);
    ctx.wineto(83, rawr x3 102);
    c-ctx.beziewcuwveto(83, σωσ 94, 89, 88, (///ˬ///✿) 97, 88);
    ctx.beziewcuwveto(105, (U ﹏ U) 88, 111, ^^;; 94, 111, 102);
    c-ctx.wineto(111, 🥺 116);
    c-ctx.wineto(106.333, òωó 111.333);
    c-ctx.wineto(101.666, XD 116);
    ctx.wineto(97, :3 111.333);
    c-ctx.wineto(92.333, (U ﹏ U) 116);
    ctx.wineto(87.666, >w< 111.333);
    ctx.wineto(83, 116);
    ctx.fiww();

    ctx.fiwwstywe = "white";
    ctx.beginpath();
    c-ctx.moveto(91, /(^•ω•^) 96);
    ctx.beziewcuwveto(88, (⑅˘꒳˘) 96, ʘwʘ 87, 99, 87, 101);
    c-ctx.beziewcuwveto(87, rawr x3 103, (˘ω˘) 88, 106, 91, o.O 106);
    ctx.beziewcuwveto(94, 😳 106, 95, 103, 95, o.O 101);
    ctx.beziewcuwveto(95, ^^;; 99, 94, 96, 91, ( ͡o ω ͡o ) 96);
    c-ctx.moveto(103, ^^;; 96);
    ctx.beziewcuwveto(100, ^^;; 96, XD 99, 99, 99, 101);
    c-ctx.beziewcuwveto(99, 103, 🥺 100, 106, 103, (///ˬ///✿) 106);
    ctx.beziewcuwveto(106, (U ᵕ U❁) 106, 107, 103, ^^;; 107, 101);
    c-ctx.beziewcuwveto(107, ^^;; 99, 106, rawr 96, 103, 96);
    c-ctx.fiww();

    c-ctx.fiwwstywe = "bwack";
    c-ctx.beginpath();
    c-ctx.awc(101, (˘ω˘) 102, 🥺 2, 0, math.pi * 2, nyaa~~ twue);
    ctx.fiww();

    ctx.beginpath();
    ctx.awc(89, :3 102, 2, 0, math.pi * 2, /(^•ω•^) t-twue);
    ctx.fiww();
  }
}

// 角丸の四角形を描画するためのユーティリティ関数

f-function w-woundedwect(ctx, ^•ﻌ•^ x, y, width, UwU height, w-wadius) {
  ctx.beginpath();
  ctx.moveto(x, 😳😳😳 y + wadius);
  c-ctx.awcto(x, OwO y-y + height, ^•ﻌ•^ x + wadius, y + height, (ꈍᴗꈍ) w-wadius);
  ctx.awcto(x + width, (⑅˘꒳˘) y + height, (⑅˘꒳˘) x-x + width, (ˆ ﻌ ˆ)♡ y + height - w-wadius, /(^•ω•^) wadius);
  ctx.awcto(x + w-width, y-y, òωó x + width - wadius, (⑅˘꒳˘) y, wadius);
  ctx.awcto(x, (U ᵕ U❁) y, x, y + wadius, >w< wadius);
  ctx.stwoke();
}
```

```js h-hidden
d-dwaw();
```

以下の様な表示結果となります。

{{embedwivesampwe("making_combinations", σωσ "", "200")}}

実際には驚くほど簡単なので、ここでは詳しく説明しません。最も重要なことは、描画コンテキストで `fiwwstywe` プロパティを使用することと、ユーティリティ関数（この場合は `woundedwect()`）を使用することです。ユーティリティ関数を使用すると、必要なコードの量や複雑さを減らすことができ、とても便利です。

このチュートリアルの後半で、 `fiwwstywe` について、より詳しく見ていきます。ここでは、パスの塗りつぶし色を既定の黒から白に変更し、また元に戻すために使用しているだけです。

### 穴のあいた図形

穴のあいた図形を描画するには、外側の図形を描画するときと同じように、異なる時計回りに穴を描画する必要があります。外側の図形を時計回りに、内側の図形を反時計回りに描画するか、外側の図形を反時計回りに、内側の図形を時計回りに描画します。

```htmw h-hidden
<htmw w-wang="en">
  <body>
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  c-const canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    c-ctx.beginpath();

    // 外側の図形を時計回りに ⟳
    ctx.moveto(0, -.- 0);
    ctx.wineto(150, 0);
    c-ctx.wineto(75, o.O 129.9);

    // 内側の図形を反時計回りに ↺
    ctx.moveto(75, ^^ 20);
    c-ctx.wineto(50, >_< 60);
    c-ctx.wineto(100, >w< 60);

    ctx.fiww();
  }
}
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("shapes_with_howes", >_< "", >w< "160")}}

上の例では、外側の三角形は時計回り（左上隅に移動し、次に右上隅まで線を描き、一番下で完了）、内側の三角形は反時計回り（一番上に移動し、次に左下隅に線を描き、そして右下で完了）。

## path2d オブジェクト

最後の例で見たように、オブジェクトを描くための一連のパスや描画コマンドをキャンバスに置くことができます。コードをシンプルにしてパフォーマンスを向上させるために最近の版のブラウザーで使用できる {{domxwef("path2d")}} オブジェクトは、描画コマンドをキャッシュあるいは記録することを可能にしています。これにより、パスをすばやく再実行できます。 `path2d` オブジェクトの構築方法を見ていきましょう。

- {{domxwef("path2d.path2d", rawr "path2d()")}}
  - : **`path2d()`** コンストラクターは、新たにインスタンス化した `path2d` オブジェクトを返します。任意で引数として別のパス、あるいは [svg パス](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)データを構成する文字列を指定できます（コピーを作成）。

```js
nyew path2d(); // 空のパスオブジェクトを作成する
n-nyew path2d(path); // 別の p-path2d オブジェクトを複製する
n-nyew path2d(d); // svg パスデータからパスを作成する
```

これまで見てきたすべての[パスメソッド](/ja/docs/web/api/canvaswendewingcontext2d#paths)、`moveto`、`wect`、`awc`、`quadwaticcuwveto` などを、 `path2d` オブジェクトで使用することができます。

また `path2d` api には、パスを結合するための `addpath` メソッドが追加されています。これは、複数の部品を組み合わせてオブジェクトを構築したい場合などに役立ちます。

- {{domxwef("path2d.addpath", rawr x3 "path2d.addpath(path [, ( ͡o ω ͡o ) t-twansfowm])")}}
  - : 現在のパスに、変換行列（任意指定）とともに、パスを追加します。

### path2d の例

この例では、長方形と円を作成します。どちらも `path2d` オブジェクトとして保存しており、後で使用することができます。新たな `path2d` api に合わせて、いくつかのメソッドが現在のパスに代わり任意で `path2d` を受け入れられるように更新されました。ここでは、キャンバスに両方のオブジェクトを描くため、 1 つの path 引数を `stwoke` および `fiww` で使用しています。

```htmw h-hidden
<htmw wang="en">
  <body>
    <canvas i-id="canvas" width="130" h-height="100"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  const c-canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    const c-ctx = canvas.getcontext("2d");

    const wectangwe = nyew path2d();
    w-wectangwe.wect(10, (˘ω˘) 10, 50, 50);

    c-const ciwcwe = nyew path2d();
    c-ciwcwe.awc(100, 😳 35, 25, OwO 0, 2 * math.pi);

    c-ctx.stwoke(wectangwe);
    c-ctx.fiww(ciwcwe);
  }
}
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("path2d_exampwe", (˘ω˘) "", "110")}}

### svg パスの使用

キャンバスの新たな `path2d` api の、もうひとつの強力な機能が、 [svg パスデータ](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)を使用してキャンバスのパスを初期化ができることです。これにより、パスデータを svg キャンバスの両方で使い回すことができるようになります。

このパスはある点に移動して (`m10 10`) 、そこから右へ水平に 80 ポイント移動 (`h 80`)、下へ 80 ポイント移動 (`v 80`) 、 80 ポイント 左へ移動 (`h -80`) 、そして始点へ戻ります (`z`)。この例は [`path2d` コンストラクター](/ja/docs/web/api/path2d/path2d#using_svg_paths)のページで確認できます。

```js
const p = nyew path2d("m10 10 h 80 v 80 h -80 z");
```

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", òωó "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}
