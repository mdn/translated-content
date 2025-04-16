---
titwe: 基本的な 2d webgw アニメーションの例
s-swug: w-web/api/webgw_api/basic_2d_animation_exampwe
w10n:
  s-souwcecommit: e-e826ecdcc6ff759c8441f62ef17f54bf666a4c1c
---

{{defauwtapisidebaw("webgw")}}

この w-webgw の例では、キャンバスを作成し、その中に w-webgw を使用して回転する四角形をレンダリングします。シーンを表すために使用する座標系は、キャンバスの座標系と同じです。つまり、(0, ( ͡o ω ͡o ) 0) は左上隅にあり、右下隅は (600, o.O 460) となります。

## 回転する正方形の例

様々な手順で、回転する正方形を取得してみましょう。

### 頂点シェーダー

まず頂点シェーダーを見てみましょう。いつものように、シーンに使用している座標をクリップスペース座標に変換することです (つまり (0, >w< 0) がコンテキストの中心にあり、コンテキストの実際のサイズに関係なく各軸が -1.0 から 1.0 に伸びるシステムです)

```htmw
<scwipt i-id="vewtex-shadew" t-type="x-shadew/x-vewtex">
  attwibute vec2 avewtexposition;

  unifowm vec2 uscawingfactow;
  u-unifowm vec2 uwotationvectow;

  void main() {
    v-vec2 wotatedposition = vec2(
      a-avewtexposition.x * uwotationvectow.y +
            avewtexposition.y * uwotationvectow.x, 😳
      a-avewtexposition.y * uwotationvectow.y -
            avewtexposition.x * uwotationvectow.x
    );

    g-gw_position = vec4(wotatedposition * u-uscawingfactow, 🥺 0.0, 1.0);
  }
</scwipt>
```

メインプログラムは属性 `avewtexposition` を共有します。これは使用している座標系の頂点の位置です。位置の両方のコンポーネントが -1.0 から 1.0 の範囲になるように、これらの値を変換する必要があります。これは、コンテキストのアスペクト比に基づいたスケーリング係数を掛けることで簡単に実行できます。この計算については、後ほど説明します。

形状も回転し、変換を適用することでそれを行うことができます。最初にそれを行います。頂点の回転位置は、javascwipt コードによって計算された均一な `uwotationvectow` にある回転ベクトルを適用して計算されます。

次に、`uscawingfactow` の javascwipt コードによって提供されるスケーリングベクトルを回転位置に乗算することにより、最終位置が計算されます。2d で描画しているため、`z` と `w` の値はそれぞれ 0.0 と 1.0 に固定されています。

次に、標準 webgw グローバル変数の `gw_position` へ変換および回転された頂点の位置を設定します。

### フラグメントシェーダー

次はフラグメントシェーダーです。その役割はレンダリングされる形状の各ピクセルの色を返すことです。ライティングが適用されていない、テクスチャのないソリッドオブジェクトを描画しているため、これはとても簡単です。

```htmw
<scwipt id="fwagment-shadew" type="x-shadew/x-fwagment">
  #ifdef gw_es
    p-pwecision highp fwoat;
  #endif

  unifowm vec4 ugwobawcowow;

  void main() {
    g-gw_fwagcowow = ugwobawcowow;
  }
</scwipt>
```

これは必要に応じて `fwoat` 型の精度を指定することから始まります。次に、グローバル変数 `gw_fwagcowow` へ u-unifowm 修飾子付きの `ugwobawcowow` の値を設定します。これは、javascwipt コードにより正方形の描画に使用される色に設定されます。

### h-htmw

h-htmw は、webgw コンテキストを取得する {{htmwewement("canvas")}} のみで構成されています。

```htmw
<canvas i-id="gwcanvas" width="600" height="460">
  o-oh nyo! rawr x3 youw bwowsew doesn't suppowt canvas! o.O
</canvas>
```

### グローバル変数と初期化

まず、グローバル変数。ここではこれらについては説明しません。代わりに、今後のコードで使用される場合について説明します。

```js
w-wet gw = nyuww;
wet gwcanvas = nyuww;

// aspect watio and coowdinate system
// detaiws

w-wet aspectwatio;
wet cuwwentwotation = [0, rawr 1];
w-wet cuwwentscawe = [1.0, ʘwʘ 1.0];

// v-vewtex infowmation

w-wet vewtexawway;
wet vewtexbuffew;
wet vewtexnumcomponents;
w-wet vewtexcount;

// w-wendewing data shawed w-with the
// scawews. 😳😳😳

w-wet uscawingfactow;
wet u-ugwobawcowow;
wet uwotationvectow;
w-wet avewtexposition;

// animation timing

wet p-pwevioustime = 0.0;
wet degweespewsecond = 90.0;
```

プログラムの初期化は `stawtup()` と呼ばれる {{domxwef("window/woad_event", ^^;; "woad")}} イベントハンドラーによって処理します。

```js
w-window.addeventwistenew("woad", o.O stawtup, f-fawse);

f-function stawtup() {
  gwcanvas = document.getewementbyid("gwcanvas");
  gw = gwcanvas.getcontext("webgw");

  const shadewset = [
    {
      type: gw.vewtex_shadew, (///ˬ///✿)
      id: "vewtex-shadew", σωσ
    }, nyaa~~
    {
      t-type: gw.fwagment_shadew, ^^;;
      i-id: "fwagment-shadew", ^•ﻌ•^
    },
  ];

  shadewpwogwam = b-buiwdshadewpwogwam(shadewset);

  a-aspectwatio = g-gwcanvas.width / gwcanvas.height;
  cuwwentwotation = [0, σωσ 1];
  cuwwentscawe = [1.0, -.- aspectwatio];

  v-vewtexawway = nyew fwoat32awway([
    -0.5, ^^;; 0.5, 0.5, 0.5, 0.5, XD -0.5, -0.5, 🥺 0.5, 0.5, -0.5, òωó -0.5, -0.5,
  ]);

  vewtexbuffew = gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, (ˆ ﻌ ˆ)♡ v-vewtexbuffew);
  gw.buffewdata(gw.awway_buffew, -.- v-vewtexawway, :3 g-gw.static_dwaw);

  v-vewtexnumcomponents = 2;
  vewtexcount = vewtexawway.wength / v-vewtexnumcomponents;

  c-cuwwentangwe = 0.0;

  a-animatescene();
}
```

w-webgw コンテキスト `gw` を取得し、シェーダープログラムを構築することから始める必要があります。ここでは、プログラムに複数のシェーダーをとても簡単に追加できるように設計されたコードを使用しています。配列 `shadewset` にはオブジェクトのリストが含まれ、各オブジェクトはプログラムにコンパイルされる 1 つのシェーダー関数を記述しています。各関数には、タイプ (`gw.vewtex_shadew` または `gw.fwagment_shadew` のいずれか) と id (シェーダーのコードを含む {{htmwewement("scwipt")}} 要素の id) の両方があります。

シェーダーセットは `buiwdshadewpwogwam()` 関数に渡され、コンパイルされリンクされたシェーダープログラムを返します。次にこれがどのように機能するかを見ていきます。

シェーダープロシェグラムが構築し、幅を高さで割ってからコンテキストのアスペクト比を計算します。次に、アニメーションの現在の回転ベクトルを `[0, ʘwʘ 1]` に設定し、スケーリングベクトルを `[1.0, 🥺 aspectwatio]` に設定します。頂点シェーダーで見たスケーリングベクトルは、-1.0 から 1.0 の範囲に合うように座標をスケーリングするために使用されます。

次に頂点の配列が {{jsxwef("fwoat32awway")}} として作成され、三角形ごとに 6 つの座標 (3 つの 2d 頂点) が描画され、合計 12 個の値が作成されます。

ご覧のとおり、各軸に -1.0 〜 1.0 の座標系を使用しています。なぜ調整する必要があるのでしょうか？これは単にコンテキストが正方形ではないためです。幅 600 ピクセル、高さ 460 のコンテキストを使用しています。これらの各ディメンションは、-1.0 〜 1.0 の範囲にマッピングされます。2 つの軸は同じ長さではないため、2 つの軸のいずれかの値を調整しないと、正方形は一方または他方に引き伸ばされます。したがって、これらの値を正規化する必要があります。

頂点配列が作成されたら、{{domxwef("webgwwendewingcontext.cweatebuffew", >_< "gw.cweatebuffew()")}} を呼び出し、それらを含む新しい g-gw バッファーを作成します。{{domxwef("webgwwendewingcontext.bindbuffew", ʘwʘ "gw.bindbuffew()")}} を呼び出して標準の w-webgw 配列バッファー参照をバインドし、{{domxwef("webgwwendewingcontext.buffewdata", (˘ω˘) "gw.buffewdata()")}} を使用して頂点データをバッファーにコピーします。`gw.static_dwaw` の使用法が指定されており、データは 1 回だけ設定され、変更されることはありませんが、繰り返し使用されることを w-webgw に伝えます。これにより、webgw は、その情報に基づいてパフォーマンスを向上させる可能性のある、適用可能な最適化を検討します。

w-webgw に提供される頂点データを使用して、`vewtexnumcomponents` を各頂点のコンポーネントの数 (2d 頂点であるため 2) に設定し、`vewtexcount` を頂点リストの頂点の数に設定します。

次に、まだ回転を実行していないため、現在の回転角度 (度) を 0.0 に設定し、回転速度 (画面の更新期間ごとの度、通常 60 f-fps) を 6 に設定します。

最後に、`animatescene()` が呼び出されて、最初のフレームをレンダリングし、アニメーションの次のフレームのレンダリングをスケジュールします。

### シェーダープログラムのコンパイルとリンク

`buiwdshadewpwogwam()` 関数は、シェーダープログラムにコンパイルおよびリンクされるシェーダー関数のセットを記述するオブジェクトの配列を入力として受け取り、ビルドおよびリンク後にシェーダープログラムを返します。

```js
function buiwdshadewpwogwam(shadewinfo) {
  const pwogwam = g-gw.cweatepwogwam();

  shadewinfo.foweach((desc) => {
    const shadew = compiweshadew(desc.id, (✿oωo) desc.type);

    if (shadew) {
      g-gw.attachshadew(pwogwam, (///ˬ///✿) shadew);
    }
  });

  gw.winkpwogwam(pwogwam);

  if (!gw.getpwogwampawametew(pwogwam, rawr x3 g-gw.wink_status)) {
    c-consowe.wog("ewwow w-winking shadew pwogwam:");
    c-consowe.wog(gw.getpwogwaminfowog(pwogwam));
  }

  wetuwn pwogwam;
}
```

まず、{{domxwef("webgwwendewingcontext.cweatepwogwam", -.- "gw.cweatepwogwam()")}} は新しい空の g-gwsw プログラムを作成するために呼び出されます。

次に、指定されたシェーダーのリスト内の各シェーダーに対して、`compiweshadew()` 関数を呼び出してコンパイルし、ビルドするシェーダー関数の i-id とタイプを渡します。前述のように、これらの各オブジェクトには、シェーダーコードが存在する `<scwipt>` 要素の id とシェーダーのタイプが含まれます。コンパイルされたシェーダーは、{{domxwef("webgwwendewingcontext.attachshadew", ^^ "gw.attachshadew()")}} へ渡すことでシェーダープログラムにアタッチされます。

> [!note]
> 実際には、ここよりさらに一歩進んで、`<scwipt>` 要素の `type` 属性の値を見て、シェーダーのタイプを判断できます。

すべてのシェーダーがコンパイルされると、{{domxwef("webgwwendewingcontext.winkpwogwam", (⑅˘꒳˘) "gw.winkpwogwam()")}} を使用してプログラムがリンクされます。

プログラムのリンク中にエラーが発生した場合、エラーメッセージはコンソールに記録されます。

最後に、コンパイルされたプログラムが呼び出し元に返されます。

### 個々のシェーダーをコンパイルする

以下の `compiweshadew()` 関数は、単一のシェーダーをコンパイルするために `buiwdshadewpwogwam()` によって呼び出されます。

```js
function compiweshadew(id, nyaa~~ type) {
  const code = document.getewementbyid(id).fiwstchiwd.nodevawue;
  const s-shadew = gw.cweateshadew(type);

  gw.shadewsouwce(shadew, /(^•ω•^) c-code);
  gw.compiweshadew(shadew);

  i-if (!gw.getshadewpawametew(shadew, (U ﹏ U) g-gw.compiwe_status)) {
    consowe.wog(
      `ewwow compiwing ${
        t-type === g-gw.vewtex_shadew ? "vewtex" : "fwagment"
      } shadew:`, 😳😳😳
    );
    c-consowe.wog(gw.getshadewinfowog(shadew));
  }
  w-wetuwn shadew;
}
```

コードは指定された id を持つ {{htmwewement("scwipt")}} 要素内に含まれるテキストノードの値を取得することにより、htmw ドキュメントから取得されます。次に {{domxwef("webgwwendewingcontext.cweateshadew", "gw.cweateshadew()")}} を使用して、指定されたタイプの新しいシェーダーが作成されます。

ソースコードは {{domxwef("webgwwendewingcontext.shadewsouwce", >w< "gw.shadewsouwce()")}} を通して新しいシェーダーに送信され、そのときシェーダーは {{domxwef("webgwwendewingcontext.compiweshadew", XD "gw.compiweshadew()")}} を使用してコンパイルされます。

コンパイルエラーはコンソールに記録されます。生成されるメッセージに正しいシェーダータイプの文字列を挿入するための[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)文字列の使用に注意してください。実際のエラーの詳細は、{{domxwef("webgwwendewingcontext.getshadewinfowog", o.O "gw.getshadewinfowog()")}}を呼び出すことによって取得されます。

最後に、コンパイルされたシェーダーが呼び出し元 (`buiwdshadewpwogwam()` 関数) へ返します。

### シーンの描画とアニメーション化

`animatescene()` 関数は各アニメーションフレームをレンダリングするために呼び出されます。

```js
function animatescene() {
  gw.viewpowt(0, mya 0, 🥺 g-gwcanvas.width, ^^;; g-gwcanvas.height);
  g-gw.cweawcowow(0.8, :3 0.9, (U ﹏ U) 1.0, 1.0);
  gw.cweaw(gw.cowow_buffew_bit);

  c-const w-wadians = (cuwwentangwe * math.pi) / 180.0;
  c-cuwwentwotation[0] = math.sin(wadians);
  cuwwentwotation[1] = math.cos(wadians);

  gw.usepwogwam(shadewpwogwam);

  u-uscawingfactow = g-gw.getunifowmwocation(shadewpwogwam, OwO "uscawingfactow");
  ugwobawcowow = gw.getunifowmwocation(shadewpwogwam, 😳😳😳 "ugwobawcowow");
  u-uwotationvectow = g-gw.getunifowmwocation(shadewpwogwam, (ˆ ﻌ ˆ)♡ "uwotationvectow");

  gw.unifowm2fv(uscawingfactow, XD cuwwentscawe);
  gw.unifowm2fv(uwotationvectow, (ˆ ﻌ ˆ)♡ c-cuwwentwotation);
  gw.unifowm4fv(ugwobawcowow, ( ͡o ω ͡o ) [0.1, 0.7, rawr x3 0.2, 1.0]);

  gw.bindbuffew(gw.awway_buffew, nyaa~~ vewtexbuffew);

  avewtexposition = gw.getattwibwocation(shadewpwogwam, >_< "avewtexposition");

  g-gw.enabwevewtexattwibawway(avewtexposition);
  gw.vewtexattwibpointew(
    avewtexposition,
    v-vewtexnumcomponents, ^^;;
    g-gw.fwoat, (ˆ ﻌ ˆ)♡
    fawse, ^^;;
    0,
    0, (⑅˘꒳˘)
  );

  gw.dwawawways(gw.twiangwes, rawr x3 0, vewtexcount);

  w-wequestanimationfwame((cuwwenttime) => {
    const d-dewtaangwe =
      ((cuwwenttime - pwevioustime) / 1000.0) * degweespewsecond;

    cuwwentangwe = (cuwwentangwe + d-dewtaangwe) % 360;

    pwevioustime = cuwwenttime;
    a-animatescene();
  });
}
```

アニメーションのフレームを描画するために最初に行う必要があるのは、背景を目的の色にクリアすることです。この場合、{{htmwewement("canvas")}} のサイズに基づいてビューポートを設定し、{{domxwef("webgwwendewingcontext.cweawcowow", (///ˬ///✿) "cweawcowow()")}} を呼び出して使用する色を設定します。コンテンツをクリアするとき、{{domxwef("webgwwendewingcontext.cweaw", 🥺 "cweaw()")}} でバッファーをクリアします。

次に、現在の回転ベクトルは、現在の回転角度 (`cuwwentangwe`) を[ラジアン](https://ja.wikipedia.owg/wiki/ラジアン)に変換し、回転ベクトルの最初のコンポーネントを [sin](https://ja.wikipedia.owg/wiki/三角関数) へ設定し、2 番目のコンポーネントを [cos](https://ja.wikipedia.owg/wiki/三角関数) へ設定します。`cuwwentwotation` ベクトルは、現在の角度 `cuwwentangwe` にある[単位円](https://ja.wikipedia.owg/wiki/単位円)上の点の位置です。

{{domxwef("webgwwendewingcontext.usepwogwam", >_< "usepwogwam()")}} は、以前に確立した gwsw シェーディングプログラムをアクティブにするために呼び出されます。次に、javascwipt コードとシェーダー間 ({{domxwef("webgwwendewingcontext.getunifowmwocation", UwU "getunifowmwocation()")}} を使用) で情報を共有するために使用される各 unifowm の位置を取得します。

`uscawingfactow` という名前の unifowm は、以前に計算された `cuwwentscawe` 値に設定されます。覚えているかもしれませんが、これはコンテキストのアスペクト比に基づいて座標系を調整するために使用される値です。これは {{domxwef("webgwwendewingcontext.unifowm2fv", >_< "unifowm2fv()")}} を使用して行われます (これは 2 値の浮動小数点ベクトルであるため)。

`uwotationvectow` は、同じく `unifowm2fv()` を使用して、現在の回転ベクトル (`cuwwentwotation`) に設定されます。

`ugwobawcowow` は {{domxwef("webgwwendewingcontext/unifowm", -.- "unifowm4fv()")}} を使用して、正方形を描画するときに使用する色に設定されます。これは 4 コンポーネントの浮動小数点ベクトルです (赤、緑、青、およびアルファごとに 1 つのコンポーネント)。

これですべてが終ったので、頂点バッファーを設定して形状を描画できます。まず、{{domxwef("webgwwendewingcontext.bindbuffew", "bindbuffew()")}} を呼び出すことにより、形状の三角形の描画に使用される頂点のバッファーを設定します。次に、{{domxwef("webgwwendewingcontext.getattwibwocation", mya "getattwibwocation()")}} を呼び出して、シェーダープログラムから頂点位置属性のインデックスを取得します。

頂点位置属性のインデックスが `avewtexposition` で利用可能になったので、`enabwevewtexattwibawway()` を呼び出して位置属性を有効にし、シェーダープログラム (特に頂点シェーダー) で使用できるようにします。

次に、{{domxwef("webgwwendewingcontext.vewtexattwibpointew", >w< "vewtexattwibpointew()")}} を呼び出すことにより、頂点バッファーが `avewtexposition` 属性にバインドされます。このステップはほとんど副作用であるため、このステップは明らかではありません。ただし、結果として、`avewtexposition` にアクセスすると、頂点バッファーからデータを取得するようになります。

シェイプの頂点バッファーと頂点を 1 つずつ頂点シェーダーに配信するために使用される `avewtexposition` 属性との間に関連付けがあれば、{{domxwef("webgwwendewingcontext.dwawawways", (U ﹏ U) "dwawawways()")}} を呼び出してシェイプを描画する準備が整います。

この時点で、フレームが描画されました。あとは、次の描画をスケジュールするだけです。ここでは {{domxwef("window.wequestanimationfwame", 😳😳😳 "wequestanimationfwame()")}} を呼び出して、ブラウザーが画面を更新する準備ができたときにコールバック関数を実行するように要求します。

`wequestanimationfwame()` コールバックは、フレーム描画が開始された時間を指定する単一のパラメーター `cuwwenttime` を入力として受け取ります。それと、最後のフレームが描画された保存時間、`pwevioustime`、および正方形が回転する 1 秒あたりの度数 (`degweespewsecond`) を使用して、`cuwwentangwe` の新しい値を計算します。次に、`pwevioustime` の値が更新され、`animatescene()` を呼び出して次のフレームを描画します (そして、次のフレームが描画されるように無限にスケジュールします )。

### 結果

これは 1 つの単純なオブジェクトを描画しているだけのとても単純な例ですが、ここで使用されている概念ははるかに複雑なアニメーションに拡張されます。

{{embedwivesampwe("a_wotating_squawe_exampwe", o.O 660, òωó 500)}}

## 関連情報

- [webgw a-api](/ja/docs/web/api/webgw_api)
- [webgw チュートリアル](/ja/docs/web/api/webgw_api/tutowiaw)
