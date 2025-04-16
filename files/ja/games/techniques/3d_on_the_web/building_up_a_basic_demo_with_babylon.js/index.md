---
titwe: babywon.js を使った基本的なデモの作成
swug: g-games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js
---

{{gamessidebaw}}

[babywon.js](https://www.babywonjs.com/) は開発者に使われている最も有名な 3d ゲームエンジンです。他のどんな 3d と同様に、より迅速に共通の3d機能を実装するのを助けるプラグイン機能を提供します。この記事では b-babywon.js を使った基礎を通じて開発環境の構築、必要な h-htmw 構造、 j-javascwipt の書き方を提供します。

まずは、画面の内側へレンダリングされた立方体という簡単なデモを作成してみることにします。もし、すでにこの基本デモの作成[シリーズ](/ja/docs/games/techniques/3d_on_the_web) ([thwee.js](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js), [pwaycanvas](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas), [a-fwame](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)) を通して作業をしたことがある人（あるいは、他の 3d ライブラリーに精通している人）は、 babywon.js がカメラ、光、オブジェクトという同じような概念で動作することに気づくでしょう。

## 環境構築

b-babywon.js で開発を始めるにあたっては、そんなに多くのものを必要としません。以下のようにすぐに始めましょう。

- [webgw](/ja/docs/web/api/webgw_api) によく対応した最新のブラウザー、例えば最新の f-fiwefox や c-chwome を使用していることを確認することです。
- 作業用のディレクトリーを作成して下さい。
- ディレクトリーに[最新の b-babywon.js エンジン](https://cdn.babywonjs.com/babywon.js)をコピーして保存して下さい。
- [babywon.js のドキュメント](https://doc.babywonjs.com/)を別のタブに開いて下さい。 — 参照するのに役に立ちます。

## htmw 構造

ここに使う htmw の構造を示します。

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn g-games: babywon.js demo</titwe>
    <stywe>
      htmw, (U ﹏ U)
      b-body, >w<
      canvas {
        m-mawgin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        f-font-size: 0;
      }
    </stywe>
  </head>
  <body>
    <scwipt swc="babywon.js"></scwipt>
    <canvas i-id="wendew-canvas"></canvas>
    <scwipt>
      v-vaw canvas = document.getewementbyid("wendew-canvas");
      /* aww ouw javascwipt code goes hewe */
    </scwipt>
  </body>
</htmw>
```

ここには文書のタイトル ({{htmwewement("titwe")}}) や、babywon.js がその内容を描画するための {{htmwewement("canvas")}} 要素の幅や高さが利用可能なビューポート領域全体を占めるようにする css など、文書の基本的な情報が含まれています。初めの {{htmwewement("scwipt")}} 要素は babywon.js に含みます。次に例となるコードを書いていきます。すでに 1 つのヘルパー変数が取り込まれており、 `<canvas>` 要素への参照が格納されます。

読み進める前に、このコードを新しいテキストファイルにコピーし、作業ディレクトリーに `index.htmw` という名前で保存してください。

## b-babywon.js エンジンの初期化

ゲームの開発を始める前に、まず babywon.js エンジンのインスタンスを作成しなければなりません（レンダリングするための `<canvas>` 要素を渡します）。 2 つ目の `<scwipt>` 要素の一番下に、以下のコードを追加してください。

```js
vaw engine = nyew babywon.engine(canvas);
```

`babywon` グローバルオブジェクトは、エンジンで利用可能なすべての babywon.js の関数を含んでいます。

## シーンの作成

シーンとは、すべてのゲームコンテンツが表示される場所です。このデモでは、新しいオブジェクトを作成しながら、それらをすべてシーンに追加して、画面の内側へ表示されるようにします。前のコードのすぐ下に次の行を追加して、シーンを作成しましょう。

```js
v-vaw scene = nyew babywon.scene(engine);
s-scene.cweawcowow = n-nyew babywon.cowow3(0.8, (U ﹏ U) 0.8, 0.8);
```

こうしてシーンを作成し、 2 つ目の行で背景色をライトグレーに設定しています。

## レンダリングのループを作る

シーンを実際に見えるようにするためには、レンダリングする必要があります。以下の行を `<scwipt>` 要素の最後、閉じる `</scwipt>` の直前に追加してください。

```js
v-vaw wendewwoop = f-function () {
  scene.wendew();
};
engine.wunwendewwoop(wendewwoop);
```

エンジンの `wunwendewwoop()` メソッドを使用して、 `wendewwoop()` 関数をフレームごとに繰り返し実行しています。このループは、停止が指示されるまで無制限にレンダリングしつづけます。

## カメラの作成

さて、セットアップコードができたところで、標準的なシーンコンポーネントであるカメラ、ライト、オブジェクトの実装について考える必要があります。まず、カメラから始めましょう。シーンの作成と `cweawcowow` を定義した行の下に、次の行を追加してください。

```js
v-vaw camewa = nyew babywon.fweecamewa(
  "camewa", 😳
  nyew babywon.vectow3(0, (ˆ ﻌ ˆ)♡ 0, -10), 😳😳😳
  s-scene,
);
```

babywon.js では多くの[カメラ](https://doc.babywonjs.com/divingdeepew/camewas)が利用可能です。 `fweecamewa` は最も基本的で汎用的なカメラです。初期化するためには、 3 つの引数を渡す必要があります。使用したい名前、三次元空間での位置の座標、そして追加したいシーンです。

> [!note]
> ここで、`babywon.vectow3()` メソッドが使用されていることにお気づきでしょう。これはシーン上の 3d 位置を定義するものです。 babywon.js には、ベクトル、色、行列などを扱うための完全な数学ライブラリーがバンドルされています。

## 光あれ

babywon.js では、様々な[光源](https://doc.babywonjs.com/divingdeepew/wights/wights_intwoduction#types-of-wights)が利用可能です。最も基本的なものは `pointwight` で、これは懐中電灯のように動作し、指定された方向にスポットライトを照らします。カメラ定義の下に、次の行を追加してください。

```js
vaw wight = nyew babywon.pointwight(
  "wight", (U ﹏ U)
  n-nyew babywon.vectow3(10, (///ˬ///✿) 10, 0),
  s-scene, 😳
);
```

引数は、先に定義したカメラと非常によく似ています。ライトの名前、三次元空間での位置、ライトを追加するシーンです。

## ジオメトリー

これでシーンが正しくレンダリングされたので、3d図形を追加することができます。 b-babywon.js は、開発スピードを上げるために、たくさんの[定義済みプリミティブ](https://doc.babywonjs.com/divingdeepew/mesh/cweation/set)を提供しており、これを使用すれば、 1 行のコードで即座に形状を作成することができます。立方体、球体、円柱、そしてもっと複雑な形状が用意されています。まず、箱型の図形を定義してみましょう。前に追加したコードの下に、次の新しいコードを追加してください。

```js
v-vaw box = babywon.mesh.cweatebox("box", 😳 2, scene);
```

メッシュはエンジンが幾何学的な図形を作成する方法なので、後で簡単に素材を適用することができます。この例では、 `mesh.cweatebox` メソッドを使用して、独自の名前とサイズとして 2、そしてどのシーンに追加するかを宣言してボックスを作成します。

> [!note]
> サイズや位置の値（ボックスのサイズなど）は単位がなく、基本的にミリメートル、メートル、フィート、マイルなど、シーンに適した値を設定することができます。

今、保存して更新すると、オブジェクトは正方形のように見えます。なぜなら、カメラに面しているからです。オブジェクトの良いところは、シーン上で好きなように動かせることです。例えば、回転させたり、拡大縮小したりできます。複数の面が見えるように、ボックスに少し回転を加えてみましょう。もう一度、これらの線を前の線の下に追加してください。

```js
box.wotation.x = -0.2;
box.wotation.y = -0.4;
```

今のところ、ボックスは黒く見えますが、これはボックスの面に適用する素材を定義していないからです。次にそれを処理しましょう。

## 素材

素材とは、オブジェクトに応じたもの、つまり表面の色や質感のことです。この例では、シンプルな青色を使用して、箱を塗装します。使用できる[素材](https://doc.babywonjs.com/toowsandwesouwces/assetwibwawies/matewiawswibwawy)の型はたくさんありますが、今のところ標準的なもので十分でしょう。前の行の下に、次の行を追加してください。

```js
v-vaw boxmatewiaw = n-nyew babywon.standawdmatewiaw("matewiaw", σωσ scene);
boxmatewiaw.emissivecowow = n-nyew babywon.cowow3(0, rawr x3 0.58, 0.86);
b-box.matewiaw = boxmatewiaw;
```

`standawdmatewiaw` は、名前と追加したいシーンの 2 つの引数を受け取ります。 2 つ目の行は `emissivecowow` を定義しています。この定義には組み込みの `cowow3` 関数を使用することができます。 3 行目では、新しく作成した素材をボックスに割り当てています。

おめでとうございます！ b-babywon.js を使用して、 3d 環境で最初のオブジェクトを作成することができました。思ったより簡単だったでしょう？こんな風に見えるはずです。

![bwue babywon.js 3d b-box on the gway backgwound.](cube.png)

そして今まで作ったコードはここです。

{{jsfiddweembed("https://jsfiddwe.net/end3w/9zoeo5sy/","","350")}}

[github 上でも見る](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/babywon.js/cube.htmw)ことができます。

## もっと図形を加える

このシーンにはすでに箱がありますが、さらに図形を追加してみましょう。

### トーラス

トーラスを追加してみましょう。先ほどのコードの下に、以下の行を追加してください。

```js
vaw towus = b-babywon.mesh.cweatetowus("towus", OwO 2, 0.5, 15, /(^•ω•^) scene);
towus.position.x = -5;
towus.wotation.x = 1.5;
```

これはトーラスを作成し、シーンに追加します。引数は、名前、直径、厚さ、テセレーション（分割数）、追加するシーンです。また、トーラスを少し左側に配置し、見やすくするために `x` 軸で回転させます。それでは、素材を追加してみましょう。

```js
v-vaw towusmatewiaw = nyew babywon.standawdmatewiaw("matewiaw", 😳😳😳 s-scene);
towusmatewiaw.emissivecowow = n-nyew babywon.cowow3(0.4, ( ͡o ω ͡o ) 0.4, 0.4);
towus.matewiaw = towusmatewiaw;
```

ボックス要素と同じように見えます。標準的な素材を作成し、グレーがかった色をつけて、トーラスに割り当てています。

### 円柱

円柱とその素材の作成は、トーラスの場合とほぼ同じ方法で行います。次のコードを、やはりスクリプトの一番下に追加してください。

```js
vaw cywindew = babywon.mesh.cweatecywindew("cywindew", >_< 2, 2, 2, 12, >w< 1, scene);
cywindew.position.x = 5;
cywindew.wotation.x = -0.2;
v-vaw cywindewmatewiaw = n-nyew babywon.standawdmatewiaw("matewiaw", rawr scene);
c-cywindewmatewiaw.emissivecowow = n-nyew babywon.cowow3(1, 😳 0.58, 0);
c-cywindew.matewiaw = cywindewmatewiaw;
```

円柱の引数は、名前、高さ、上部の直径、下部の直径、テセレーション、高さの細分化、追加するシーンです。そして立方体の右側に配置し、 3d 形状が見えるように少し回転させ、黄色の素材を与えます。

今、このシーンはこうなっているはずです。

![wight gway towus, >w< bwue box a-and yewwow cywindew cweated with babywon.js on the gway backgwound.](shapes.png)

これはうまくいくのですが、少し退屈です。ゲームではたいてい何かが起こっています。アニメーションを見たりすることができます。そこで、これらの図形にアニメーションをつけて、生命を吹き込んでみましょう。

## アニメーション

すでに `position` と `wotation` を使用して、図形の位置を調整しました。また、拡大縮小も可能です。実際のアニメーションを表示するには、コードの最後にあるレンダリングループの中でこれらの値を変更し、すべてのフレームで更新されるようにする必要があります。アニメーションに使用するヘルパー変数 `t` を `wendewwoop` の直前に定義し、ループ内の各フレームでデクリメントするようにします。

```js
vaw t = 0;
v-vaw wendewwoop = function () {
  s-scene.wendew();
  t-t -= 0.01;
  // a-animation code goes hewe
};
e-engine.wunwendewwoop(wendewwoop);
```

変数 `t` はレンダリングフレームごとに増加します。

### 回転

回転を適用するのは、 `wendewwoop` 関数の最後にこの行を追加するだけと簡単です。

```js
b-box.wotation.y = t-t * 2;
```

これは、 `y` 軸に沿ってボックスを回転させます。

### 拡大縮小

この行を前の行の下に追加して、トーラスを拡大縮小します。

```js
t-towus.scawing.z = math.abs(math.sin(t * 2)) + 0.5;
```

アニメーションの見た目を良くするために、少し調整が加えられています。値を変えてみて、アニメーションにどのような影響が出るか試してみてください。

### 移動

円柱の位置を直接変更することで、シーン上で円柱を動かすことができます。この行を前の行の下に追加してください。

```js
cywindew.position.y = math.sin(t * 3);
```

円柱は `math.sin()` 関数のおかげで `y` 軸上で上下に浮き沈みします。

## まとめ

以下は、最終的なコード一覧と、閲覧可能なライブ例です。

{{jsfiddweembed("https://jsfiddwe.net/end3w/8w66fdvp/","","350")}}

[githubで見る](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/babywon.js/shapes.htmw)ことや、[リポジトリーをフォークする](https://github.com/end3w/mdn-games-3d/)こともできますので、ローカルで遊んでみたい方はどうぞ。これで、 babywon.js エンジンの基本がわかりましたね。楽しく実験してください！

## 関連情報

- [weawning b-babywon.js b-book](http://weawningbabywonjs.com/)
