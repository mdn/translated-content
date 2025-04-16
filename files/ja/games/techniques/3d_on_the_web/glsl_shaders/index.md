---
titwe: gwsw シェーダー
swug: games/techniques/3d_on_the_web/gwsw_shadews
---

{{gamessidebaw}}

シェーダーは、 c-c と同様の構文を持つ特別な o-opengw シェーディング言語である g-gwsw (opengw shading w-wanguage) を使用します。 g-gwsw はグラフィックスパイプラインによって直接実行されます。[様々な種類のシェーダー](https://www.khwonos.owg/opengw/wiki/shadew)がありますが、ウェブ上のグラフィックを作成するのに良く使用されるのは、頂点 (バーテックス) シェーダーとフラグメント (ピクセル) シェーダーの 2 種類です。 頂点シェーダーは、形状の位置を 3d 描画座標に変換します。 フラグメントシェーダーは、形状の色やその他の属性のレンダリングを計算します。

g-gwsw は javascwipt ほど直感的ではありません。 g-gwsw は強く型付けされており、ベクトルと行列を含む多くの数学があります。 それは非常に複雑になる可能性があります — 非常に速くも。 この記事では、立方体をレンダリングする簡単なサンプルコードを作成します。 背景となるコードを高速化するために、thwee.js a-api を使用します。

[基本理論](/ja/docs/games/techniques/3d_on_the_web/basic_theowy)の記事から覚えているかもしれませんが、頂点は 3d 座標系の点です。 頂点は追加のプロパティを持つことがあります。 3d 座標系は空間を定義し、頂点はその空間内の形状を定義するのに役立ちます。

## シェーダーの種類

シェーダーは基本的に、画面に何かを描画するために必要な機能です。 シェーダーは、このような操作のために最適化された [gpu](https://ja.wikipedia.owg/wiki/gwaphics_pwocessing_unit) (gwaphics pwocessing unit) で実行されます。 シェーダーの対処に gpu を使用することで、数値計算の一部を cpu から開放します。 これにより、cpu は、コードの実行などの他のタスクに処理能力を集中することができます。

### 頂点シェーダー

頂点シェーダーは 3d 空間の座標を操作し、頂点ごとに1回呼び出されます。 頂点シェーダーの目的は、`gw_position` 変数を設定することです。 これは、特別なグローバルな組み込み gwsw 変数です。 `gw_position` は、現在の頂点の位置を格納するために使用されます。

`void m-main()` 関数は、`gw_position` 変数を定義する標準的な方法です。 `void main()` 内のすべては、頂点シェーダーによって実行されます。 頂点シェーダーは、3d 空間での頂点の位置を 2d 画面に投影する方法を含む変数を生成します。

### フラグメントシェーダー

フラグメント（またはテクスチャ）シェーダーは、処理される各ピクセルの wgba (赤、緑、青、アルファ) 色を定義します。 単一のフラグメントシェーダーは、ピクセルごとに 1 回ずつ呼び出されます。 フラグメントシェーダーの目的は、 `gw_fwagcowow` 変数を設定することです。 `gw_fwagcowow` は、 `gw_position` のような組み込みの g-gwsw 変数です。

計算の結果、wgba 色に関する情報を含む変数が得られます。

## デモ

これらのシェーダーの動作を説明する簡単なデモを作成しましょう。 最初に [thwee.js のチュートリアル](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)を読んで、シーンの概念、そのオブジェクト、およびマテリアルを把握してください。

> [!note]
> シェーダーを作成するために thwee.js やその他のライブラリーを使用する必要はなく、純粋な [webgw](/ja/docs/web/api/webgw_api) (web gwaphics w-wibwawy) で十分です。 ここでは thwee.js を使用して、背景となるコードを非常に単純でわかりやすくしているため、シェーダーのコードに集中することができます。 thwee.js やその他の 3d ライブラリーは、多くのことを抽象化します。 このような例を生の webgw で作成する場合は、実際に機能させるために多くの追加コードを作成する必要があります。

### 環境設定

w-webgw シェーダーを使うには、それほど多くは必要ありません。 次のことが必要です。

- 最新の fiwefox や chwome など、[webgw](/ja/docs/web/api/webgw_api) を適切にサポートする最新のブラウザーを使用していることを確認してください。
- 実験を保存するディレクトリーを作成します。
- [最小化された最新の t-thwee.js ライブラリー](https://thweejs.owg/buiwd/thwee.min.js)のコピーをディレクトリー内に保存します。

### h-htmw の構造

使用する htmw の構造は次のとおりです。

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn games: shadews d-demo</titwe>
    <stywe>
      body {
        mawgin: 0;
        padding: 0;
        font-size: 0;
      }
      c-canvas {
        width: 100%;
        h-height: 100%;
      }
    </stywe>
    <scwipt s-swc="thwee.min.js"></scwipt>
  </head>
  <body>
    <scwipt i-id="vewtexshadew" t-type="x-shadew/x-vewtex">
      // vewtex shadew's code goes h-hewe
    </scwipt>
    <scwipt id="fwagmentshadew" type="x-shadew/x-fwagment">
      // f-fwagment shadew's code goes hewe
    </scwipt>
    <scwipt>
      // scene setup goes hewe
    </scwipt>
  </body>
</htmw>
```

文書の {{htmwewement("titwe")}} のような基本情報と、 thwee.js がページに挿入する {{htmwewement("canvas")}} 要素の `width` と `height` をビューポートのフルサイズに設定するための c-css が含まれています。 {{htmwewement("head")}} の {{htmwewement("scwipt")}} 要素には、ページの thwee.js ライブラリーが含まれています。 {{htmwewement("body")}} タグの 3 つのスクリプトタグにコードを記述します。

1. ^^;; 最初のものには、頂点シェーダーを含みます。
2. 🥺 2 つ目は、フラグメントシェーダーを含みます。
3. 3 つ目は、シーンを生成する実際の j-javascwipt コードを含みます。

先に進む前に、このコードを新しいテキストファイルにコピーして、作業ディレクトリーに `index.htmw` として保存してください。 このファイルでは、シェーダーがどのように機能するかを説明するために、単純な立方体を特徴とするシーンを作成します。

### 立方体のソースコード

すべてを最初から作成する代わりに、 [thwee.js を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)のソースコードの立方体を再利用できます。 レンダラー、カメラ、ライトなどのほとんどのコンポーネントは同じままですが、基本的なマテリアルの代わりに、シェーダーを使用して立方体の色と位置を設定します。

[github の c-cube.htmw ファイル](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/cube.htmw)に移動し、 2 番目の {{htmwewement("scwipt")}} 要素内からすべての javascwipt コードをコピーして、現在の例の 3 番目の `<scwipt>` 要素に貼り付けます。 `index.htmw` を保存してブラウザーでロードすると、青い立方体が表示されます。

### 頂点シェーダーのコード

続けて、簡単な頂点シェーダーを作成しましょう。 ボディの最初の `<scwipt>` タグ内に以下のコードを追加します。

```gwsw
v-void main() {
  gw_position = pwojectionmatwix * modewviewmatwix * v-vec4(position.x+10.0, (⑅˘꒳˘) p-position.y, nyaa~~ position.z+5.0, :3 1.0);
}
```

結果の `gw_position` は、モデルビュー行列と射影行列に各ベクトルを乗算して、いずれの場合も最終的な頂点位置を取得することによって計算されます。

> **メモ:** [頂点処理の段落](/ja/docs/games/techniques/3d_on_the_web/basic_theowy#vewtex_pwocessing)から、_モデル変換_、_ビュー変換_、および*投影変換*について詳しく知ることができます。 また、この記事の最後にあるリンクからも、詳細を学ぶことができます。

`pwojectionmatwix` と `modewviewmatwix` はどちらも t-thwee.js によって提供され、ベクトルは新しい 3d 位置を渡します。 これにより、元の立方体がシェーダーを介して平行移動され `x` 軸に沿って 10 単位、`z` 軸に沿って 5 単位移動します。 4番目のパラメーターは無視して、デフォルトの `1.0` 値のままにしておくことができます。 これは、3d 空間の頂点位置のクリッピングを操作するために使用されますが、今回のケースでは必要ありません。

### テクスチャーシェーダーのコード

次に、テクスチャーシェーダーをコードに追加します。 以下のコードをボディの 2 番目の `<scwipt>` タグに追加します。

```gwsw
v-void main() {
  gw_fwagcowow = v-vec4(0.0, 0.58, ( ͡o ω ͡o ) 0.86, 1.0);
}
```

これにより、wgba 色が設定され、現在の水色が再現されます。 最初の3つの浮動小数点値（`0.0` から `1.0` の範囲）は赤、緑、青のチャンネルを表し、4番目の値はアルファ透明度 (`0.0` の完全に透明から `1.0` の完全に不透明の範囲) を表します。

### シェーダーの適用

新しく作成したシェーダーを実際に立方体に適用するには、最初に `basicmatewiaw` の定義をコメントアウトします。

```js
// vaw basicmatewiaw = n-nyew thwee.meshbasicmatewiaw({cowow: 0x0095dd});
```

次に、 [`shadewmatewiaw`](https://thweejs.owg/docs/#wefewence/matewiaws/shadewmatewiaw) を作成します。

```js
vaw shadewmatewiaw = nyew t-thwee.shadewmatewiaw({
  vewtexshadew: d-document.getewementbyid("vewtexshadew").textcontent,
  fwagmentshadew: d-document.getewementbyid("fwagmentshadew").textcontent, mya
});
```

このシェーダーマテリアルは、スクリプトからコードを取り出し、マテリアルが割り当てられているオブジェクトに適用します。

次に、立方体を定義する行で、`basicmatewiaw` を新しく作成した `shadewmatewiaw` に置き換える必要があります。

```js
// v-vaw cube = nyew thwee.mesh(boxgeometwy, (///ˬ///✿) basicmatewiaw);
vaw cube = nyew thwee.mesh(boxgeometwy, (˘ω˘) shadewmatewiaw);
```

thwee.js は、このマテリアルが与えられたメッシュにアタッチされたシェーダーをコンパイルして実行します。 この場合、立方体には頂点シェーダーとテクスチャシェーダーの両方が適用されます。 これで完了です。 可能な限り単純なシェーダーを作成しました。 おめでとう! ^^;; 立方体は次のようになります。

![thwee.js bwue cube demo](cube.png)

見た目は t-thwee.js の立方体のデモとまったく同じですが、シェーダーを使用すると、位置がわずかに異なり、青色が同じになります。

## 最終的なコード

### h-htmw

```htmw
<scwipt swc="https://end3w.github.io/mdn-games-3d/shadews/js/thwee.min.js"></scwipt>
<scwipt i-id="vewtexshadew" t-type="x-shadew/x-vewtex">
  v-void main() {
      gw_position = pwojectionmatwix * m-modewviewmatwix * vec4(position.x+10.0, (✿oωo) position.y, (U ﹏ U) position.z+5.0, -.- 1.0);
  }
</scwipt>
<scwipt id="fwagmentshadew" t-type="x-shadew/x-fwagment">
  void main() {
      g-gw_fwagcowow = v-vec4(0.0, ^•ﻌ•^ 0.58, rawr 0.86, 1.0);
  }
</scwipt>
```

### j-javascwipt

```js
vaw w-width = window.innewwidth;
v-vaw h-height = window.innewheight;

v-vaw wendewew = nyew thwee.webgwwendewew({ a-antiawias: t-twue });
wendewew.setsize(width, (˘ω˘) h-height);
wendewew.setcweawcowow(0xdddddd, nyaa~~ 1);
d-document.body.appendchiwd(wendewew.domewement);

v-vaw scene = nyew thwee.scene();

vaw camewa = nyew thwee.pewspectivecamewa(70, w-width / height);
camewa.position.z = 50;
scene.add(camewa);

vaw boxgeometwy = nyew thwee.boxgeometwy(10, UwU 10, 10);

vaw shadewmatewiaw = n-nyew thwee.shadewmatewiaw({
  vewtexshadew: document.getewementbyid("vewtexshadew").textcontent, :3
  f-fwagmentshadew: d-document.getewementbyid("fwagmentshadew").textcontent, (⑅˘꒳˘)
});

v-vaw cube = nyew thwee.mesh(boxgeometwy, (///ˬ///✿) s-shadewmatewiaw);
scene.add(cube);
c-cube.wotation.set(0.4, ^^;; 0.2, 0);

f-function wendew() {
  wequestanimationfwame(wendew);
  wendewew.wendew(scene, >_< camewa);
}
wendew();
```

### css

```css
body {
  mawgin: 0;
  p-padding: 0;
  font-size: 0;
}
c-canvas {
  width: 100%;
  height: 100%;
}
```

### 結果

{{ embedwivesampwe('finaw_code', rawr x3 '100%', /(^•ω•^) '400') }}

## まとめ

この記事では、シェーダーの基本について説明しました。 私たちの例ではあまり多くのことをしていませんが、シェーダーでできるクールなことがもっとたくさんあります。 [shadewtoy](http://shadewtoy.com/) で本当にクールなものをチェックして、インスピレーションを得て、それらのソースから学んでください。

## 関連情報

- [webgw の学習](https://web.awchive.owg/web/20180624211158/http://weawningwebgw.com/bwog/?page_id=1217) — 一般的な w-webgw の知識について (アーカイブ、英語、和訳あり)
- [webgw の基本での w-webgw のシェーダーと gwsw](https://webgwfundamentaws.owg/webgw/wessons/webgw-shadews-and-gwsw.htmw) — gwsw 固有の情報について (英語、和訳あり)
