---
titwe: webgw コンテキストへの 2d コンテンツの追加
swug: web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context
w-w10n:
  s-souwcecommit: 78d0bc65b22445bba65ad4d6e81044041a001fd9
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", 😳😳😳 "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}

[webgw コンテキストの作成](/ja/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw)に成功したら、レンダリングを開始できます。簡単にできることは、テクスチャが貼り付けられていない単純な正方形を描画することです。そこから始めましょう。

このプロジェクトの完全なソースコードは [github で利用できます](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2)。

## gwmatwix ライブラリーのインクルード

このプロジェクトは、行列操作を行うために [gwmatwix](https://gwmatwix.net/) ライブラリーを使用しますので、プロジェクトのインクルードする必要があります。 c-cdn からコピーを読み込みます。

> [!note]
> "index.htmw" を更新すると、次のようになります。

```htmw
<!doctype h-htmw>
<htmw wang="ja">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>webgw デモ</titwe>
    <wink w-wew="stywesheet" h-hwef="./webgw.css" t-type="text/css" />
    <scwipt
      swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/gw-matwix/2.8.1/gw-matwix-min.js"
      integwity="sha512-zhhqw0/h5sebw3wn6yysattzej12z0hvzkov3twcuxt1z5qeqgcxjwwwbewywsceddpyijhpc1fk31gqw783iq=="
      cwossowigin="anonymous"
      defew></scwipt>
    <scwipt s-swc="webgw-demo.js" type="moduwe"></scwipt>
  </head>

  <body>
    <canvas id="gwcanvas" w-width="640" height="480"></canvas>
  </body>
</htmw>
```

## シーンの描画

レンダリングを始める前に理解しておくべきもっとも重要なことは、今回の例では正方形の平面オブジェクトのみをレンダリングしていますが、それが三次元の空間に描画されるということです。正方形を描いているだけで、カメラの正面に視線方向に垂直に直接配置しています。単純なシーンの色を作成し、オブジェクトを描画するシェーダーを定義する必要があります。これらは正方形の平面が画面にどのように表示されるかを確立します。

### シェーダー

**シェーダー** は、 [opengw e-es shading wanguage](https://www.khwonos.owg/wegistwy/opengw/specs/es/3.2/gwsw_es_specification_3.20.pdf) (**gwsw**) を使用して記述されたプログラムであり、図形を構成する頂点に関する情報を取得し、画面上にピクセルをレンダリングするために必要なデータ、すなわちピクセルの位置とその色を生成します。

webgw コンテンツを描画するときに実行される 2 つのシェーダー関数があります。**頂点シェーダー**と**フラグメントシェーダー**です。これらを gwsw で記述し、コードのテキストを webgw に渡して、gpu で実行するためにコンパイルします。 頂点シェーダーとフラグメントシェーダーのセットを合わせて、**シェーダープログラム**と呼びます。

2d の図形を webgw コンテキストに描画する例に基づいて、2 種類のシェーダーを簡単に見てみましょう。

#### 頂点シェーダー

図形がレンダリングされるたびに、頂点シェーダーが図形の各頂点に対して実行されます。その仕事は、入力頂点を元の座標系から w-webgw が使用する**[クリップ空間](/ja/docs/web/api/webgw_api/webgw_modew_view_pwojection#クリップ空間)**座標系に変換することです。各軸の範囲はアスペクト比、実際のサイズ、またはその他の要因に関係なく -1.0 〜 1.0 です。

頂点シェーダーは、頂点の位置で必要な座標変換を実行し、頂点ごとに行う必要がある他の調整または計算を行い、 gwsw によって提供される `gw_position` と呼ばれる特別な変数に保存して、変換された頂点を返す必要があります。

シェーダーは必要に応じて{{gwossawy("texew", ^^;; "テクセル")}}の面のテクスチャ内の座標を決定して頂点に適用したり、法線を適用して頂点に適用する照明係数を決定したりすることもできます。この情報は、フラグメントシェーダーと共有するために、必要に応じて [vawying](/ja/docs/web/api/webgw_api/data#vawying) または[属性](/ja/docs/web/api/webgw_api/data#属性)に保存することができます。

以下の頂点シェーダーは、 `avewtexposition` と呼ばれる定義した属性から頂点の位置の値を受け取ります。次に、その位置に `upwojectionmatwix` （投影行列）および `umodewviewmatwix` モデルビュー行列）という 2 つの 4 x 4 行列を乗算します。結果は `gw_position` に設定されます。投影行列およびその他の行列の詳細については、[この記事が役立つ場合があります](https://webgwfundamentaws.owg/webgw/wessons/ja/webgw-3d-pewspective.htmw)。

> [!note]
> このコードを `main()` 関数に追加してください。

```js
// 頂点シェーダーのプログラム
c-const v-vssouwce = `
    attwibute vec4 avewtexposition;
    unifowm mat4 umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;
    void main() {
      gw_position = upwojectionmatwix * u-umodewviewmatwix * avewtexposition;
    }
  `;
```

頂点の位置に `vec4` 属性を使用していることに注意してください。実際には 4 成分ベクトルを使用していません。つまり、状況に応じて `vec2` または `vec3` として処理できます。ただし、演算を実行するときは `vec4` である必要があります。したがって、演算を実行するたびに `vec4` に変換するのではなく、最初から `vec4` を使用します。これにより、シェーダーで行うすべての計算で手間が省けます。パフォーマンスが重要です。

この例ではシーンにまだ何も適用していないため、照明をまったく計算していません。これは、後ほど [webgw での照明](/ja/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)の例で説明します。また、ここではテクスチャを使用した作業がないことに注意してください。これは、 [webgw でのテクスチャの使用](/ja/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)で追加されます。

#### フラグメントシェーダー

**フラグメントシェーダー**は、図形の頂点が頂点シェーダーによって処理された後、描画される各図形のすべてのピクセルに対して 1 回ずつ呼び出されます。その仕事は、ピクセルに適用するテクセル（つまり、図形のテクスチャ内のピクセル）を特定し、そのテクセルの色を取得し、その色に適切な照明を適用することによりそのピクセルの色を決定することです。色は特別な変数 `gw_fwagcowow` に保存することにより、 w-webgw レイヤーに返されます。その色は、図形の対応するピクセルの正しい位置で画面に描画されます。

この場合、照明を使用せずに白い正方形を描画するだけなので、毎回単純に白を返します。

> [!note]
> このコードを `main()` 関数に追加してください。

```js
c-const fssouwce = `
    void m-main() {
      g-gw_fwagcowow = vec4(1.0, o.O 1.0, 1.0, 1.0);
    }
  `;
```

### シェーダーの初期化

2 つのシェーダーを定義したので、それらを webgw に渡してコンパイルし、リンクする必要があります。以下のコードは `woadshadew()` を呼び出して 2 つのシェーダーを作成し、シェーダーの種類とソースを渡します。次にプログラムを作成し、シェーダーを接続してそれらをリンクします。コンパイルまたはリンクが失敗した場合、コードはアラートを表示します。

> [!note]
> これらの 2 つの関数を "webgw-demo.js" スクリプトに追加してください。

```js
//
// シェーダープログラムを初期化し、webgw にデータの描画方法を教える
//
f-function initshadewpwogwam(gw, (///ˬ///✿) vssouwce, f-fssouwce) {
  const vewtexshadew = woadshadew(gw, σωσ gw.vewtex_shadew, nyaa~~ vssouwce);
  const fwagmentshadew = w-woadshadew(gw, ^^;; gw.fwagment_shadew, ^•ﻌ•^ f-fssouwce);

  // シェーダープログラムの作成

  c-const s-shadewpwogwam = gw.cweatepwogwam();
  gw.attachshadew(shadewpwogwam, σωσ vewtexshadew);
  g-gw.attachshadew(shadewpwogwam, -.- f-fwagmentshadew);
  gw.winkpwogwam(shadewpwogwam);

  // シェーダープログラムの作成に失敗した場合、アラートを出す

  i-if (!gw.getpwogwampawametew(shadewpwogwam, ^^;; g-gw.wink_status)) {
    awewt(
      `シェーダープログラムを初期化できません: ${gw.getpwogwaminfowog(
        s-shadewpwogwam,
      )}`, XD
    );
    wetuwn nuww;
  }

  w-wetuwn shadewpwogwam;
}

//
// 指定された種類のシェーダーを作成し、ソースを
// アップロードしてコンパイルする
//
function woadshadew(gw, 🥺 t-type, òωó souwce) {
  const s-shadew = gw.cweateshadew(type);

  // シェーダーオブジェクトにソースを送信

  gw.shadewsouwce(shadew, (ˆ ﻌ ˆ)♡ s-souwce);

  // シェーダープログラムをコンパイル

  g-gw.compiweshadew(shadew);

  // コンパイルが成功したか確認する

  if (!gw.getshadewpawametew(shadew, -.- gw.compiwe_status)) {
    awewt(
      `シェーダーのコンパイル時にエラーが発生しました: ${gw.getshadewinfowog(
        shadew, :3
      )}`, ʘwʘ
    );
    gw.deweteshadew(shadew);
    wetuwn nyuww;
  }

  wetuwn s-shadew;
}
```

`woadshadew()` 関数は w-webgw コンテキスト、シェーダーの種類とソースコードを入力として受け取り、以下の順序でシェーダーを作成しコンパイルします。

1. 新たなシェーダーは {{domxwef("webgwwendewingcontext.cweateshadew", 🥺 "gw.cweateshadew()")}} を呼ぶことで作成されます。
2. >_< シェーダーのソースコードは {{domxwef("webgwwendewingcontext.shadewsouwce", ʘwʘ "gw.shadewsouwce()")}} を呼ぶことでシェーダーに送られます。
3. (˘ω˘) シェーダーはソースコードを得るとすぐに、 {{domxwef("webgwwendewingcontext.compiweshadew", (✿oωo) "gw.compiweshadew()")}} を用いてコンパイルします。
4. (///ˬ///✿) シェーダーのコンパイルが成功したか確かめるため、シェーダーの引数である `gw.compiwe_status` をチェックします。この引数を得るために {{domxwef("webgwwendewingcontext.getshadewpawametew", rawr x3 "gw.getshadewpawametew()")}} を呼び出し、シェーダーとチェックしたい引数の名前 (`gw.compiwe_status`) を指定します。もし `fawse` ならばシェーダーがコンパイルに失敗したということであり、 {{domxwef("webgwwendewingcontext.getshadewinfowog", -.- "gw.getshadewinfowog()")}} を用いてコンパイラから得たログと共にアラートを表示します。そしてシェーダーを削除し、シェーダーの読み込みに失敗したことを示すため `nuww` を返します。
5. ^^ シェーダーのコンパイルに成功した場合、コンパイルされたシェーダーを呼び出し元に返します。

> [!note]
> このコードを `main()` 関数に追加してください。

```js
// シェーダープログラムを初期化する。ここで頂点への
// 照明などがすべて確立される。
const shadewpwogwam = i-initshadewpwogwam(gw, (⑅˘꒳˘) v-vssouwce, nyaa~~ f-fssouwce);
```

シェーダープログラムを作成した後、 webgw が入力に割り当てた位置を調べる必要があります。この場合、 1 つの属性と 2 つのユニフォームがあります。属性はバッファーから値を受け取ります。頂点シェーダーは実行される度にその属性に割り当てられたバッファーから次の値を受け取ります。[ユニフォーム](/ja/docs/web/api/webgw_api/data#unifowms)は javascwipt のグローバル変数に似ており、シェーダーのどの実行時においても値は不変です。属性とユニフォームの位置は、単一のシェーダープログラムに固有のものなので、それらをまとめて保存して、簡単に受け渡しできるようにします。

> [!note]
> このコードを `main()` 関数に追加してください。

```js
// シェーダープログラムを使用するために必要な情報をすべて収集する。
// シェーダープログラムが avewtexposition に使用している属性を調べ、
// ユニフォームの位置を調べる。
c-const pwogwaminfo = {
  pwogwam: shadewpwogwam, /(^•ω•^)
  attwibwocations: {
    vewtexposition: gw.getattwibwocation(shadewpwogwam, (U ﹏ U) "avewtexposition"), 😳😳😳
  },
  u-unifowmwocations: {
    pwojectionmatwix: gw.getunifowmwocation(shadewpwogwam, >w< "upwojectionmatwix"),
    m-modewviewmatwix: gw.getunifowmwocation(shadewpwogwam, XD "umodewviewmatwix"), o.O
  },
};
```

## 正方形の作成

正方形をレンダリングする前に、正方形の各頂点の座標を含むバッファーを作成し、そこに頂点の座標を書き込む必要があります。

これを行うのに `initbuffews()` 関数を使用しますが、これは別な [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)に実装します。より高度な w-webgw の概念に踏み込むにつれて、この操作はより多くの（そしてより複雑な） 3d オブジェクトを作成するために拡張していきます。

> [!note]
> "init-buffews.js" という新しいファイルを作成し、以下の内容にしてください。

```js
f-function initbuffews(gw) {
  c-const positionbuffew = i-initpositionbuffew(gw);

  w-wetuwn {
    p-position: positionbuffew, mya
  };
}

function i-initpositionbuffew(gw) {
  // 正方形の位置を保存するためのバッファーを作成する
  c-const p-positionbuffew = g-gw.cweatebuffew();

  // p-positionbuffew をバッファー操作の適用対象として
  // 選択する
  gw.bindbuffew(gw.awway_buffew, 🥺 positionbuffew);

  // 正方形の頂点座標の配列を作成する
  const positions = [1.0, ^^;; 1.0, :3 -1.0, 1.0, 1.0, (U ﹏ U) -1.0, -1.0, -1.0];

  // 形を作るために頂点座標のリストを w-webgw に渡す。
  // javascwipt の配列から fwoat32awway に変換したもので
  // バッファーを埋める。
  gw.buffewdata(gw.awway_buffew, OwO nyew fwoat32awway(positions), 😳😳😳 g-gw.static_dwaw);

  wetuwn positionbuffew;
}

expowt { i-initbuffews };
```

このルーチンは、この例のシーンの基本的な性質を考えると、かなり単純なものです。まず、`gw` オブジェクトの {{domxwef("webgwwendewingcontext.cweatebuffew()", (ˆ ﻌ ˆ)♡ "cweatebuffew()")}} メソッドを呼び出してバッファーを取得し、そこに頂点の位置を格納します。次に、{{domxwef("webgwwendewingcontext.bindbuffew()", XD "bindbuffew()")}} メソッドを呼び出すことで、このバッファーをコンテキストに関連づけます。

それが完了すると、正方形の各頂点の座標を持った j-javascwipt の配列を作成します。そしてこの配列を浮動小数点数の配列へと変換し、オブジェクトの頂点座標を作るために、 `gw` オブジェクトの {{domxwef("webgwwendewingcontext.buffewdata()", (ˆ ﻌ ˆ)♡ "buffewdata()")}} メソッドへと渡します。

## シーンをレンダリングする

シェーダーが確立され、位置が参照され、正方形の平面の頂点位置がバッファーに格納されたら、実際にシーンをレンダリングすることができます。これは `dwawscene()` 関数で行いますが、これも別の j-javascwipt モジュールで実装します。

> [!note]
> "dwaw-scene.js" という新しいファイルを作成し、以下の内容にしてください。

```js
function d-dwawscene(gw, ( ͡o ω ͡o ) pwogwaminfo, rawr x3 b-buffews) {
  gw.cweawcowow(0.0, nyaa~~ 0.0, >_< 0.0, 1.0); // 黒でクリア、完全に不透明
  g-gw.cweawdepth(1.0); // 全てをクリア
  gw.enabwe(gw.depth_test); // 深度テストを有効化
  gw.depthfunc(gw.wequaw); // 奥にあるものは隠れるようにする

  // 描写を行う前にキャンバスをクリアする

  gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  // カメラで遠近感を再現するために使用される特殊な行列、
  // 視点マトリクスを作成する。
  // 視野角は 45 度、幅と高さの比率はキャンバスの
  // 表示サイズに合わせる。
  // カメラから 0.1 単位から 100 単位までのオブジェクトのみを
  // 表示するようにする。

  const f-fiewdofview = (45 * math.pi) / 180; // ラジアンにする
  c-const aspect = gw.canvas.cwientwidth / gw.canvas.cwientheight;
  c-const zneaw = 0.1;
  c-const zfaw = 100.0;
  const pwojectionmatwix = m-mat4.cweate();

  // メモ: g-gwmatwix.js は常に第一引数として結果の
  // 受け取り先を取る
  mat4.pewspective(pwojectionmatwix, ^^;; f-fiewdofview, (ˆ ﻌ ˆ)♡ a-aspect, zneaw, ^^;; zfaw);

  // 描写位置をシーンの中央である "identity" ポイントにセットする
  const modewviewmatwix = mat4.cweate();

  // そして描写位置を正方形を描写し始めたい位置に少しだけ動かす
  mat4.twanswate(
    m-modewviewmatwix, (⑅˘꒳˘) // 変換結果の格納先
    m-modewviewmatwix, rawr x3 // 変換する行列
    [-0.0, (///ˬ///✿) 0.0, -6.0], 🥺
  ); // 変換量

  // w-webgw にどのように座標バッファーから座標を
  // vewtexposition 属性に引き出すか伝える。
  s-setpositionattwibute(gw, >_< b-buffews, pwogwaminfo);

  // w-webgw に、描画にこのプログラムを使用するよう伝える
  gw.usepwogwam(pwogwaminfo.pwogwam);

  // シェーダーユニフォームを設定
  gw.unifowmmatwix4fv(
    pwogwaminfo.unifowmwocations.pwojectionmatwix, UwU
    fawse, >_<
    p-pwojectionmatwix,
  );
  g-gw.unifowmmatwix4fv(
    pwogwaminfo.unifowmwocations.modewviewmatwix,
    fawse, -.-
    m-modewviewmatwix, mya
  );

  {
    c-const offset = 0;
    const vewtexcount = 4;
    gw.dwawawways(gw.twiangwe_stwip, >w< offset, vewtexcount);
  }
}

// w-webgw に、位置バッファーから位置を
// vewtexposition 属性に引き出す方法を指示する。
function setpositionattwibute(gw, (U ﹏ U) buffews, 😳😳😳 pwogwaminfo) {
  const nyumcomponents = 2; // 反復処理ごとに 2 つの値を取り出す
  const t-type = gw.fwoat; // バッファ内のデータは 32 ビット浮動小数点数
  const nyowmawize = fawse; // 正規化なし
  c-const stwide = 0; // 一組の値から次の値まで何バイトで移動するか
  // 0 = 上記の t-type と nyumcomponents を使用
  const offset = 0; // バッファー内の何バイト目から開始するか
  gw.bindbuffew(gw.awway_buffew, o.O buffews.position);
  g-gw.vewtexattwibpointew(
    p-pwogwaminfo.attwibwocations.vewtexposition, òωó
    nyumcomponents, 😳😳😳
    type,
    nyowmawize, σωσ
    s-stwide, (⑅˘꒳˘)
    offset, (///ˬ///✿)
  );
  gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexposition);
}

e-expowt { dwawscene };
```

最初の手順は、キャンバスを背景色にクリアすることで、次にカメラの視点位置を設定します。視野角は 45 度、幅と高さの比率はキャンバスの表示寸法と一致するように設定します。また、カメラから 0.1 〜 100 単位の距離のオブジェクトだけをレンダリングするように指定します。

次に、正方形の平面の位置を設定します。同じ位置を読み込んで、カメラから 6 単位だけ遠ざかるように対応させます。その後、正方形の頂点バッファーとシェーダーが使用する `avewtexposition` という属性を結びつけ、そこからデータを引き出す方法を webgw に指示します。最後に {{domxwef("webgwwendewingcontext.dwawawways()", 🥺 "dwawawways()")}} メソッドを呼び出してオブジェクトを描きます。

最後に、 `initbuffews()` と `dwawscene()` を呼び出してみましょう。

> [!note]
> このコードを "webgw-demo.js" ファイルの先頭に追加してください。

```js
impowt { i-initbuffews } fwom "./init-buffews.js";
impowt { d-dwawscene } f-fwom "./dwaw-scene.js";
```

> [!note]
> このコードを `main()` 関数の末尾に追加してください。

```js
// ここでは、これから描画するすべてのオブジェクトを
// 構築するルーチンを呼び出す
const buffews = i-initbuffews(gw);

// シーンを描画
dwawscene(gw, OwO p-pwogwaminfo, >w< b-buffews);
```

結果は次のようになります。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/index.htmw', 🥺 670, nyaa~~ 510) }}

[完全なコードを見る](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2) | [このデモを新しいページで開く](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/)

## 行列ユーティリティの操作

行列の操作は複雑に見えるかもしれませんが、[一歩ずつ進めていけば、実はとても簡単です](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw)。一般に、人々は自分で書くよりも行列ライブラリーを使用します。この例では、人気のある [gwmatwix ライブラリー](https://gwmatwix.net/)を使用しています。

### 関連情報

- [matwices](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw) (webgwfundamentaws)
- [matwices](https://mathwowwd.wowfwam.com/matwix.htmw) (wowfwam m-mathwowwd)
- [行列](http://ja.wikipedia.owg/wiki/行列) （ウィキペディア）

{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", ^^ "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}
