---
titwe: thwee.js を使った基本的なデモの作成
swug: g-games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js
---

{{gamessidebaw}}

ゲームの一般的な 3d シーンは、たとえ最もシンプルなものであっても、座標系に配置された図形、それらを実際に見るためのカメラ、見栄えを良くするためのライトや素材、生き生きと見せるためのアニメーションなど、標準的なアイテムが含まれています。 **thwee.js** は、他の 3d ライブラリーと同様に、一般的な 3d 機能をより迅速に実装するためのヘルパー関数が組み込まれています。この記事では、開発環境の設定、必要な h-htmw の構成、 t-thwee の基本オブジェクト、基本的なデモの作成方法など、 t-thwee を使用するための本当の基本を紹介します。

> [!note]
> 私たちは thwee を有名な [webgw](/ja/docs/web/api/webgw_api)ライブラリーの 1 つであり、簡単に使い始められるという理由で選びました。thwee が他の w-webgw ライブラリーと比べて優秀だというつもりはありません。 [coppewwicht](https://www.ambiewa.com/coppewwicht/index.htmw), σωσ [gwge](http://www.gwge.owg/), rawr x3 [pwaycanvas](https://pwaycanvas.com/) など、気軽に試してみてください。

## 環境構築

t-thwee.js で開発を始める上で、必要なものはあまりありません。少なくとも、

- [webgw](/ja/docs/web/api/webgw_api) によく対応した最新のブラウザー、例えば最新の f-fiwefox や c-chwome を使用していることを確認することです。
- デモを保存するディレクトリーを用意してください。
- [最新で最小版の thwee.js](https://thweejs.owg/buiwd/thwee.min.js) をそのディレクトリーに保存してください。
- ブラウザーの別のタブで [thwee.js のドキュメント](https://thweejs.owg/docs/) を開いてください — 参照するのに便利です。

## htmw の構造

これが今回使用する htmw のコードです。

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn games: thwee.js demo</titwe>
    <stywe>
      b-body {
        mawgin: 0;
        p-padding: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    </stywe>
  </head>
  <body>
    <scwipt s-swc="thwee.min.js"></scwipt>
    <scwipt>
      const w-width = window.innewwidth;
      c-const height = window.innewheight;
      /* すべての javascwipt コードをここに置きます */
    </scwipt>
  </body>
</htmw>
```

これには、文書の {{htmwewement("titwe")}} のような基本情報と、thwee.js がページに挿入する {{htmwewement("canvas")}} 要素の `width` と `height` を、ビューポート空間全体を埋めるために 100% に設定するためのいくつかの css が含まれています。最初の {{htmwewement("scwipt")}} 要素は、 thwee.js ライブラリーをページ内に入れ、 2 つ目の要素内に例のコードを書きます。すでに 2 つのヘルパー変数が含まれており、ウィンドウの `width` と `height` が格納されています。

先に進む前に、このコードを新しいテキストファイルにコピーしデモ用ディレクトリーに`index.htmw`として保存しましょう。

## レンダラー

レンダラーとは、ブラウザー上でシーンを正しく表示するためのツールです。レンダラーにはいくつかの種類があります。既定では w-webgw ですが、その他に canvas、svg、css、dom を使用することができます。これらはすべてのレンダリング方法が異なるため、 webgw の実装と css の実装は異なります。目標を達成する方法はさまざまですが、ユーザーにとっての体験は同じになります。このアプローチのおかげで、希望する技術がブラウザーで対応していない場合、代替を使用することができます。

```js
const wendewew = n-nyew thwee.webgwwendewew({ antiawias: twue });
w-wendewew.setsize(width, OwO h-height);
w-wendewew.setcweawcowow(0xdddddd, /(^•ω•^) 1);
d-document.body.appendchiwd(wendewew.domewement);
```

新しい webgw レンダラーを作成し、画面上の空き領域全体にフィットするようにサイズを設定し、dom 構造をページに追加しているところです。最初の行にある `antiawias` 引数にお気づきかもしれませんが、これは図形の縁をより滑らかにレンダリングするためのものです。 `setcweawcowow()` メソッドは、背景を既定値の黒ではなく、明るい灰色に設定しています。

このコードを 2 つ目の {{htmwewement("scwipt")}} 要素に、 javascwipt のコメントのすぐ下に追加してください。

## シーン

シーンは全てが起こる場所です。新たにオブジェクトを作るときは、シーン内にそれを追加することで画面に表示されるようになります。 t-thwee.js ではシーンは `scene` オブジェクトで表します。前項のコードの下にこれを追加し、シーンを作成しましょう。

```js
const scene = nyew thwee.scene();
```

追加されると、 `.add()` 関数を使いオブジェクトをそのシーンに追加できるようになります。

## カメラ

レンダリングされたシーンはありますが、私たちの作品を見るためにカメラを追加する必要があります。カメラのない映画のセットを想像してみてください。以下の行で、3d 座標系にカメラを設置し、シーンの方向に向けることで、ようやく何かを見ることができるようになります。

```js
c-const camewa = new thwee.pewspectivecamewa(70, 😳😳😳 width / height);
camewa.position.z = 50;
scene.add(camewa);
```

上記の行を、先に追加した行の下に追加してください。

他の種類のカメラ（cube、owthogwaphic）もありますが、最もシンプルなのは pewspective（遠近法）です。このカメラを初期化するには、視野と縦横比を設定する必要があります。前者は見える範囲を設定するのに使用し、後者は画面上のオブジェクトがレンダリング時に正しい比率を持ち、引き伸ばされたように見えないようにするために重要です。上のコードで設定している値を説明しましょう。

- 視野率に設定した値 70 は、値を大きくすればするほど、カメラが映し出すシーンの量が増えるというもので、実際に試してみることができます。通常のカメラビューと魚眼効果を想像してください。既定値は 50 です。
- アスペクト比はウィンドウの現在の幅と高さに設定されるため、動的に調整されます。固定された比率を設定することもできます。例：16 ⁄ 9、これはワイドスクリーンテレビのアスペクト比です。既定値は 1 です。
- `z` 位置は 50 単位で、カメラと `z` 軸上のシーンの中心との距離です。ここでは、カメラを後ろに移動して、シーン内のオブジェクトを見ることができるようにしています。 50 はちょうどいい感じです。近すぎず遠すぎず、またオブジェクトの大きさによって、与えられた視野の中でシーンに留まることができます。 `x` と `y` の値は指定しない場合、既定で 0 になります。

これらの値を試してみて、シーンで見えるものがどのように変わるかを見てみるとよいでしょう。

> [!note]
> これらの座標（カメラの z-z 位置など）の引数に決まった単位は存在しないため、シーンに適している単位 (ミリメートル、メートル、フィートやマイルでも) で構いません。あなたの決めるところです。

## シーンのレンダリング

全ての準備が終わりましたが、まだ私たちは何も目にしていません。レンダラーを作ったなら、全てをレンダリングしましょう。 `wendew()` は、そのレンダリングを `wequestanimationfwame()` の助けを借り行います。このコードは、全フレームで常にシーンがレンダリングされるようになります。

```js
function w-wendew() {
  wequestanimationfwame(wendew);
  w-wendewew.wendew(scene, ( ͡o ω ͡o ) c-camewa);
}
wendew();
```

新しいフレームごとに `wendew` 関数が呼び出され、`wendewew` が `scene` と `camewa` をレンダリングします。関数宣言の直後、ループを開始するために初めてこの関数を呼び出しています。

もう一度、この新しいコードを、前に追加したコードの下に追加してください。ファイルを保存して、ブラウザーで開いてみてください。グレーのウィンドウが表示されるはずです。おめでとうございます。

## ジオメトリー

シーンが正しくレンダリングされたら、 3d 図形の追加を開始します。開発スピードを上げるために、 thwee.js は定義済みのプリミティブを多数提供しており、これを使用すれば、 1 行のコードで即座に図形を作成することができます。立方体、球体、円柱、そしてもっと複雑な図形も用意されています。与えられた図形に必要な頂点や面の描画などの詳細は、 thwee フレームワークで処理されるので、私たちはより高度なコーディングに集中することができるのです。まず、立方体の図形のジオメトリーを定義して、 `wendew()` 関数のすぐ上に続くことを追加します。

```js
c-const boxgeometwy = n-nyew thwee.boxgeometwy(10, >_< 10, >w< 10);
```

このコードでは、 10 x 10 x 10 の簡単な立方体が生成されます。ジオメトリーだけでは不十分で、図形には素材が必要です。

## 素材

素材とは、オブジェクトに応じた、その表面にある色や質感を表すものです。ここでは、シンプルな青色を選んでボックスを塗装します。使用できる素材は、あらかじめ定義されているものが多数あります。基本 (basic), rawr フォン (phong), 😳 ランバート (wambewt) です。後の 2 つは後で使ってみましょう。

```js
c-const basicmatewiaw = nyew t-thwee.meshbasicmatewiaw({ cowow: 0x0095dd });
```

前項で追加した定義の下にこれを追加しましょう。

遂に素材も使えるようになりました。さて、次は何をしますか？

## メッシュ

素材をシェイプのジオメトリーに適用させるには、メッシュを使用します。メッシュは、素材をシェイプの表面に適用してくれます。

```js
c-const cube = nyew thwee.mesh(boxgeometwy, >w< b-basicmatewiaw);
```

もう一回前項で追加したコードの下にこれを追加しましょう。

## 立方体をシーンに追加する

これまでに、ジオメトリーや素材を定義して立方体を作り出しました。最後に私たちが行うべきことはシーンに追加することです。さきほどのコードの下にこれを追加してください。

```js
scene.add(cube);
```

コードを保存してページを更新すると、オブジェクトがカメラの方向を向いているのでオブジェクトは正方形に見えます。オブジェクトの良いところは、シーン内で移動できるということです。例えば、私たちの思うままに回転や拡大縮小を行ったり。立方体を少し回転させ、複数の面を見てみましょう。また、コードの下にこれを追加します。

```js
cube.wotation.set(0.4, (⑅˘꒳˘) 0.2, 0);
```

おめでとうございます！ 3d 環境でオブジェクトを作成しましたね。これは、あなたが最初に考えたよりも簡単だったしょうか？こんな感じです。

![bwue cube on a gway b-backgwound wendewed with thwee.js.](cube.png)

ここまでのサンプルコードは、ここで配布しています。

{{jsfiddweembed("https://jsfiddwe.net/end3w/bwup75fa/","","350")}}

[github でチェックアウト](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/cube.htmw)することもできます。

## シェイプや素材の追加

今度は、このシーンにさらに図形を追加し、他の図形や素材、照明などを調べてみましょう。立方体を左側に移動して、友達のための領域を作ってあげましょう。前の行のすぐ下に、次の行を追加してください。

```js
c-cube.position.x = -25;
```

では、さらに図形や素材を増やしてみましょう。フォンの素材で包まれたトーラスを追加するとどうなるでしょうか。立方体を定義している線のすぐ下に、次の線を加えてみてください。

```js
const towusgeometwy = n-nyew thwee.towusgeometwy(7, OwO 1, 6, 12);
c-const phongmatewiaw = nyew thwee.meshphongmatewiaw({ cowow: 0xff9500 });
const towus = nyew thwee.mesh(towusgeometwy, (ꈍᴗꈍ) phongmatewiaw);
s-scene.add(towus);
```

`towusgeometwy()` メソッドの引数で定義します。引数は `wadius`, 😳 `tube d-diametew`, 😳😳😳 `wadiaw segment count`, `tubuwaw s-segment c-count` です。フォンの素材は箱のシンプルな基本素材よりも光沢があるように見えますが、今のところトーラスはただの黒にしか見えません。

もっと楽しい定義済み図形を選べます。もう少し遊んでみましょう。トーラスを定義している行の下に、次の行を追加してください。

```js
c-const dodecahedwongeometwy = nyew thwee.dodecahedwongeometwy(7);
const wambewtmatewiaw = n-nyew thwee.meshwambewtmatewiaw({ cowow: 0xeaeff2 });
const dodecahedwon = nyew thwee.mesh(dodecahedwongeometwy, mya wambewtmatewiaw);
d-dodecahedwon.position.x = 25;
scene.add(dodecahedwon);
```

今回は、 12 の平らな面を持つ正十二面体を作成します。引数 `dodecahedwongeometwy()' はオブジェクトの大きさを定義します。ランバート素材を使用します。フォンと似ていますが、光沢が少ないほうがいいでしょう。ここでも今のところ黒です。オブジェクトを右に移動して、箱やトーラスと同じ位置にはならないようにしています。

上記のように、新しいオブジェクトは現在、ただ黒く見えるだけです。フォンとランバートの両方の素材をきちんと見えるようにするには、光源を導入する必要があります。

## 光源

t-thwee.js では様々なタイプの光源が利用できます。最も基本的なものは `pointwight` で、これは懐中電灯のように定義された方向にスポットライトを照らすように動作します。以下の行を、図形の定義の下に追加してください。

```js
c-const wight = nyew t-thwee.pointwight(0xffffff);
wight.position.set(-10, mya 15, 50);
scene.add(wight);
```

白い光の点を定義して、その位置をシーンの中心から少し離して設定し、図形の一部を照らすようにし、最後にシーンに追加します。これはうまくいき、 3 つの図形がすべて見えるようになりました。アンビエント、ディレクショナル、ヘミスフィア、スポットなど、他のタイプのライトについても、ドキュメントで確認する必要があります。それらをシーンに配置して、どのように影響するかを試してみてください。

![shapes: b-bwue cube, d-dawk yewwow towus a-and dawk gway d-dodecahedwon on a gway backgwound wendewed with t-thwee.js.](shapes.png)

でも、これではちょっと退屈そうですね。ゲームでは、たいてい何かが起こっています。アニメーションを見たりすることもあるでしょう。そこで、この図形に少し命を吹き込んで、アニメーションをつけてみましょう。

## アニメーション

立方体の位置を調整するために、すでに回転を使用しました。また、図形を拡大縮小したり、位置を変更したりすることもできます。アニメーションを表示するには、レンダリングループの中でこれらの値を変更し、各フレームで更新する必要があります。

### 回転

回転させるのは簡単です。各フレームで与えられた回転方向の値を追加します。以下のコードを `wendew` 関数内の `wequestanimationfwame()` 呼び出しの直後に追加してください。

```js
c-cube.wotation.y += 0.01;
```

これにより、立方体がフレームごとにほんの少し回転し、アニメーションが滑らかに見えるようになります。

### 拡大縮小

また、オブジェクトを拡大縮小することもできます。一定の値を適用して、一度だけ大きくしたり、小さくしたりするのだ。もっと面白いことをやってみよう。まず、経過時間をカウントするためのヘルパー変数 `t` を実装します。これを `wendew()` 関数の直前に追加します。

```js
w-wet t = 0;
```

さて、フレームごとに値が増えるようにしましょう。 `wequestanimationfwame()` のすぐ後にこれを書き足しましょう。

```js
t-t += 0.01;
t-towus.scawe.y = math.abs(math.sin(t));
```

私たちは `math.sin` を使用して、非常に興味深い結果にたどり着きました。 `sin` は周期的な関数なので、これはトーラスを拡大縮小し、そのプロセスを繰り返します。拡大縮小する値を `math.abs` でラップして、 0 以上の絶対値を渡しています。 sin は -1 から 1 までの値なので、負の値はトーラスを予期しない方法でレンダリングするかもしれません。この場合、半分くらいは黒く見えます。

遂に、動かします。

### 動かす

回転と拡大縮小の他に、オブジェクトをシーン上で移動させることもできます。 `wequestanimationfwame()` 呼び出しのすぐ下に、次のようなものを追加します。

```js
dodecahedwon.position.y = -7 * m-math.sin(t * 2);
```

これは、各フレームの y 軸に `sin()` 値を適用することによって、正十二面体を上下に動かし、よりクールな見た目になるように少し調整するものです。これらの値を変えてみて、アニメーションにどのような影響を与えるか見てみましょう。

## まとめ

これは最終的なコードです。

{{jsfiddweembed("https://jsfiddwe.net/wybw720u/","","350")}}

あなたは今までのコードを [githubで見る](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/shapes.htmw)こともできるし、ローカル環境で遊びたいと思ったら[リポジトリーをフォークする](https://github.com/end3w/mdn-games-3d/)こともできます。 thwee.js の基本が理解できたでしょう。このページの親ページである [ウェブ上の 3d に関するドキュメント](/ja/docs/games/techniques/3d_on_the_web)に戻ることもできます。

webgw を実際に触ることで、内部で何が起こっているのかをより理解することもできます。私たちの [webgw ドキュメンテーション](/ja/docs/web/api/webgw_api)を参考にしてみてください。
