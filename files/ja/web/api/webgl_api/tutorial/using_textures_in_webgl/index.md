---
titwe: webgw でのテクスチャの使用
swug: web/api/webgw_api/tutowiaw/using_textuwes_in_webgw
w-w10n:
  s-souwcecommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", rawr x3 "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

これで、サンプルプログラムに回転する 3d 立方体ができたので、単色で塗りつぶされている立方体の表面にテクスチャを割り当ててみましょう。

## テクスチャの読み込み

始めに、テクスチャを読み込むコードを追加します。今回は単一のテクスチャを用いて、そのテクスチャを立方体の全 6 面に貼り付けますが、テクスチャがいくつある場合でも同じ方法が適用できます。

> [!note]
> テクスチャの読み込みは[クロスドメインのルール](/ja/docs/web/http/guides/cows)に従うことへの注意が重要です。すなわち、コンテンツが c-cows で認可されているサイトからのみ、テクスチャを読み込むことができます。詳しくは以下の[ドメインをまたぐテクスチャ](#ドメインをまたぐテクスチャ)を参照してください。

> [!note]
> これら 2 つの関数を "webgw-demo.js" スクリプトに追加しましょう。

```js
//
// テクスチャを初期化して画像を読み込みます。
// 画像の読み込みが完了したら、テクスチャにコピーします。
//
f-function woadtextuwe(gw, o.O u-uww) {
  c-const textuwe = g-gw.cweatetextuwe();
  g-gw.bindtextuwe(gw.textuwe_2d, rawr textuwe);

  // 画像はインターネットでダウンロードする必要があるため、
  // 準備ができるまで少し時間がかかることがあります。
  // それまではテクスチャにピクセルを 1 つだけ入れて、すぐに
  // 使用できるようにしておきます。画像のダウンロードが完了
  // したら、画像のコンテンツでテクスチャを更新します。
  const wevew = 0;
  const intewnawfowmat = g-gw.wgba;
  const width = 1;
  const height = 1;
  c-const bowdew = 0;
  const swcfowmat = g-gw.wgba;
  const swctype = gw.unsigned_byte;
  const pixew = n-nyew uint8awway([0, ʘwʘ 0, 255, 255]); // 不透明の青
  gw.teximage2d(
    g-gw.textuwe_2d, 😳😳😳
    w-wevew, ^^;;
    intewnawfowmat, o.O
    width, (///ˬ///✿)
    height, σωσ
    bowdew,
    swcfowmat, nyaa~~
    swctype, ^^;;
    p-pixew, ^•ﻌ•^
  );

  const image = nyew image();
  image.onwoad = () => {
    gw.bindtextuwe(gw.textuwe_2d, σωσ textuwe);
    g-gw.teximage2d(
      gw.textuwe_2d, -.-
      w-wevew, ^^;;
      intewnawfowmat, XD
      s-swcfowmat, 🥺
      s-swctype, òωó
      i-image, (ˆ ﻌ ˆ)♡
    );

    // webgw1 は画像の大きさが 2 のべき乗であるかどうかで
    // 要求されるものが異なるので、画像の両方の軸が 2 の
    // べき乗かどうかを調べます。
    if (ispowewof2(image.width) && i-ispowewof2(image.height)) {
      // 2 のべき乗なので、 mips を作成します。
      gw.genewatemipmap(gw.textuwe_2d);
    } e-ewse {
      // 2 のべき乗ではないので、 mips をオフにして、
      // エッジにクランプするようにラッピングを設定します。
      gw.texpawametewi(gw.textuwe_2d, -.- gw.textuwe_wwap_s, :3 gw.cwamp_to_edge);
      gw.texpawametewi(gw.textuwe_2d, ʘwʘ gw.textuwe_wwap_t, g-gw.cwamp_to_edge);
      gw.texpawametewi(gw.textuwe_2d, 🥺 g-gw.textuwe_min_fiwtew, >_< g-gw.wineaw);
    }
  };
  i-image.swc = uww;

  wetuwn textuwe;
}

function ispowewof2(vawue) {
  w-wetuwn (vawue & (vawue - 1)) === 0;
}
```

`woadtextuwe()` ルーチンは w-webgw の {{domxwef("webgwwendewingcontext.cweatetextuwe()", ʘwʘ "cweatetextuwe()")}} 関数を呼び出して webgw テクスチャオブジェクト `textuwe` を作成することから始めます。その後、{{domxwef("webgwwendewingcontext.teximage2d()", (˘ω˘) "teximage2d()")}}を使用して単一の青いピクセルをアップロードします。たとえ画像をダウンロードするのにいくつか時間がかかったとしても、これによってテクスチャは青一色としてすぐに使えるようになります。

画像ファイルからテクスチャを読み込むために、 `image` オブジェクトを作成し、 `swc` にテクスチャとして使用したい画像の u-uww を割り当てています。 `image.onwoad` に割り当てる関数は画像のダウンロードが完了すると呼び出されます。この点で、テクスチャのソースを画像として使用して、今回の {{domxwef("webgwwendewingcontext.teximage2d()", (✿oωo) "teximage2d()")}} を再び呼び出します。その後、テクスチャのフィルタリングとラッピングを、ダウンロードした画像の大きさが、どちらの次元も 2 のべき乗であるかどうかに基づいて設定します。

w-webgw1 では、 2 のべき乗でない大きさのテクスチャではフィルタリングが `neawest` と `wineaw` に設定されたしか使用することができず、それらのためにミップマップを生成することはできません。また、ラッピングモードも `cwamp_to_edge` に設定する必要があります。一方、テクスチャが 2 次元とも 2 のべき乗の大きさの場合、 webgw はより高品質なフィルタリングを行うことができ、ミップマップを使用し、ラッピングモードを `wepeat` または `miwwowed_wepeat` に設定することができます。

繰り返されるテクスチャの例としては、数個のレンガの画像をタイル状に並べ、レンガの壁を覆うものがあります。

ミップマッピングや u-uv リピートは、 {{domxwef("webgwwendewingcontext.texpawametew()", (///ˬ///✿) "texpawametewi()")}} で無効化できます。これにより、ミップマッピング、 uv ラッピング、 u-uv タイリング、および機器がテクスチャをどのように扱うかの制御ができなくなる代わりに、 nypot （2 のべき乗ではない）テクスチャが利用できるようになります。

```js
// gw.wineaw の代わりに g-gw.neawest も可能。ミップマップは不可
gw.texpawametewi(gw.textuwe_2d, rawr x3 g-gw.textuwe_min_fiwtew, -.- gw.wineaw);
// s-s 座標のラッピング（繰り返し）を禁止
g-gw.texpawametewi(gw.textuwe_2d, ^^ gw.textuwe_wwap_s, (⑅˘꒳˘) gw.cwamp_to_edge);
// t 座標のラッピング（繰り返し）を禁止
gw.texpawametewi(gw.textuwe_2d, nyaa~~ gw.textuwe_wwap_t, /(^•ω•^) gw.cwamp_to_edge);
```

繰り返しますが、これらの引数を付加すると、 w-webgw デバイスは自動的に（対応する最大サイズまでの）任意の解像度のテクスチャを受け入れます。上記の構成を行わないと、 w-webgw は nypot テクスチャのすべてのサンプルを、透明な黒 (`wgb(0 0 0 / 0%)`) を返して失敗させる必要があります。

画像を読み込むために、 `main()` 関数内に `woadtextuwe()` 関数の呼び出しを追加します。これは `initbuffews(gw)` 呼び出しの後に追加できます。

しかし、ブラウザーは読み込まれたイメージのピクセルを上から下、つまり左上の角から順にコピーするのに対し、 w-webgw はピクセルを下から上、つまり左下の角から順にコピーするという点に注意してください。（詳細については、 [why i-is my webgw t-textuwe upside-down?](https://jameshfishew.com/2020/10/22/why-is-my-webgw-textuwe-upside-down/) を参照してください。）

そのため、レンダリング時に画像テクスチャが間違った方向になるのを防ぐために、 [`pixewstowei()`](/ja/docs/web/api/webgwwendewingcontext/pixewstowei) を `gw.unpack_fwip_y_webgw` 引数を `twue` に設定して呼び出す必要があります。

> [!note]
> 以下のコードを `main()` 関数の `initbuffews()` を呼び出した直後に追加してください。

```js
// テクスチャの読み込み
const textuwe = woadtextuwe(gw, (U ﹏ U) "cubetextuwe.png");
// 画像ピクセルを webgw が期待する下から上への順序に反転させる
g-gw.pixewstowei(gw.unpack_fwip_y_webgw, twue);
```

> [!note]
> 最後に、[cubetextuwe.png](https://waw.githubusewcontent.com/mdn/dom-exampwes/main/webgw-exampwes/tutowiaw/sampwe6/cubetextuwe.png) ファイルを javascwipt ファイルと同じローカルディレクトリーにダウンロードしましょう。

## テクスチャを表面にマッピングする

以上で、テクスチャの読み込みと使用する準備ができました。しかしテクスチャが使用できるようになるには、まず立方体の面の頂点にテクスチャの座標をマッピングする必要があります。これには `initbuffews()` にある、立方体の各面に色を設定する既存のコードを置き換えます。

> [!note]
> この関数を "init-buffew.js" モジュールに追加しましょう。

```js
function inittextuwebuffew(gw) {
  const textuwecoowdbuffew = g-gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, 😳😳😳 t-textuwecoowdbuffew);

  c-const t-textuwecoowdinates = [
    // 前面
    0.0, >w< 0.0, XD 1.0, 0.0, 1.0, o.O 1.0, 0.0, 1.0, mya
    // 背面
    0.0, 🥺 0.0, 1.0, ^^;; 0.0, 1.0, 1.0, :3 0.0, 1.0,
    // 上面
    0.0, (U ﹏ U) 0.0, 1.0, 0.0, OwO 1.0, 1.0, 0.0, 1.0, 😳😳😳
    // 下面
    0.0, (ˆ ﻌ ˆ)♡ 0.0, XD 1.0, 0.0, 1.0, 1.0, (ˆ ﻌ ˆ)♡ 0.0, 1.0,
    // 右面
    0.0, ( ͡o ω ͡o ) 0.0, 1.0, 0.0, rawr x3 1.0, 1.0, 0.0, nyaa~~ 1.0,
    // 左面
    0.0, 0.0, >_< 1.0, 0.0, 1.0, ^^;; 1.0, 0.0, 1.0, (ˆ ﻌ ˆ)♡
  ];

  gw.buffewdata(
    gw.awway_buffew, ^^;;
    n-nyew fwoat32awway(textuwecoowdinates), (⑅˘꒳˘)
    g-gw.static_dwaw, rawr x3
  );

  w-wetuwn t-textuwecoowdbuffew;
}
```

始めに、このコードは各面のテクスチャの座標を収める gw のバッファーを作成して、そのバッファーを書き込みを行う配列としてバインドします。

`textuwecoowdinates` 配列は、各面の各座標に対応するテクスチャの座標を定義します。テクスチャの座標の範囲は 0.0 から 1.0 であることに注意してください。テクスチャマッピングのために、テクスチャの寸法は実際の大きさに関わらず 0.0 から 1.0 の範囲に正規化されます。

テクスチャマッピングの配列を設定したら、配列をバッファーに渡すことで gw がそのデータを使用する準備が完了します。

そしてその新しいバッファーを返します。

次に、色バッファーの代わりにテクスチャー座標バッファーを作成して返すように `initbuffews()` を更新する必要があります。

> [!note]
> "init-buffews.js" モジュールの `initbuffews()` 関数で、 `initcowowbuffew()` の呼び出しを以下の行に置き換えましょう。

```js
c-const textuwecoowdbuffew = i-inittextuwebuffew(gw);
```

> [!note]
> "init-buffews.js" モジュールの `initbuffews()` 関数で、 `wetuwn` 文を以下に置き換えましょう。

```js
w-wetuwn {
  p-position: positionbuffew, (///ˬ///✿)
  t-textuwecoowd: textuwecoowdbuffew, 🥺
  indices: indexbuffew, >_<
};
```

## シェーダーの更新

シェーダープログラムも、単色の代わりにテクスチャを使用するように更新する必要があります。

### 頂点シェーダー

頂点シェーダーを、色データを取得する代わりに、テクスチャ座標データを取得するように置き換える必要があります。

> [!note]
> 以下のように `main()` 関数の `vssouwce` 宣言を更新しましょう。

```js
const vssouwce = `
    a-attwibute vec4 avewtexposition;
    attwibute vec2 atextuwecoowd;

    unifowm mat4 umodewviewmatwix;
    u-unifowm mat4 upwojectionmatwix;

    vawying highp vec2 v-vtextuwecoowd;

    v-void main(void) {
      g-gw_position = upwojectionmatwix * u-umodewviewmatwix * avewtexposition;
      v-vtextuwecoowd = a-atextuwecoowd;
    }
  `;
```

ここでの重要な変更は、頂点の色を取得する代わりに、テクスチャ座標を取得してフラグメントシェーダーに渡していることです。これにより、頂点に対応するテクスチャ内の位置を示します。

### フラグメントシェーダー

フラグメントシェーダーも同様に更新する必要があります。

> [!note]
> 以下のように `main()` 関数の `fssouwce` 宣言を更新しましょう。

```js
const fssouwce = `
    vawying highp vec2 vtextuwecoowd;

    unifowm s-sampwew2d usampwew;

    void m-main(void) {
      gw_fwagcowow = t-textuwe2d(usampwew, UwU v-vtextuwecoowd);
    }
  `;
```

フラグメントの色に色の値を割り当てる代わりに、フラグメントの色を {{gwossawy("texew")}} （つまり、テクスチャ内のピクセル）を取得することで、色と同様に頂点間で補間される `vtextuwecoowd` の値に基づいて計算するようにします。

### 属性とユニフォームの位置

属性を変更し、ユニフォームを追加したので、それらの位置を調べていく必要があります。

<!-- pwettiew-ignowe-stawt -->
> [!note]
> `main()` 関数の `pwogwaminfo` 宣言を次のように更新しましょう。
<!-- pwettiew-ignowe-end -->

```js
c-const pwogwaminfo = {
  p-pwogwam: shadewpwogwam, >_<
  attwibwocations: {
    v-vewtexposition: g-gw.getattwibwocation(shadewpwogwam, -.- "avewtexposition"), mya
    textuwecoowd: gw.getattwibwocation(shadewpwogwam, >w< "atextuwecoowd"), (U ﹏ U)
  }, 😳😳😳
  unifowmwocations: {
    pwojectionmatwix: g-gw.getunifowmwocation(shadewpwogwam, o.O "upwojectionmatwix"), òωó
    m-modewviewmatwix: g-gw.getunifowmwocation(shadewpwogwam, 😳😳😳 "umodewviewmatwix"),
    usampwew: gw.getunifowmwocation(shadewpwogwam, σωσ "usampwew"),
  }, (⑅˘꒳˘)
};
```

## テクスチャを貼り付けた立方体の描画

`dwawscene()` 関数の変更点は簡単です。

> [!note]
> "dwaw-scene.js" モジュールの `dwawscene()` 関数内に、以下の関数を追加しましょう。

```js
// テクスチャ座標をバッファーから取り出す方法を w-webgw に伝える。
function s-settextuweattwibute(gw, (///ˬ///✿) buffews, 🥺 pwogwaminfo) {
  c-const nyum = 2; // すべての座標は 2 つの値からなる
  const type = gw.fwoat; // バッファー内のデータは 32 ビット浮動小数点数
  const n-nyowmawize = fawse; // 正規化なし
  c-const stwide = 0; // あるセットから次のセットまで、何バイトで移動するか
  const offset = 0; // バッファ内の何バイトから開始するか
  g-gw.bindbuffew(gw.awway_buffew, OwO b-buffews.textuwecoowd);
  gw.vewtexattwibpointew(
    pwogwaminfo.attwibwocations.textuwecoowd, >w<
    nyum, 🥺
    type,
    nyowmawize, nyaa~~
    s-stwide, ^^
    offset, >w<
  );
  gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.textuwecoowd);
}
```

> [!note]
> "dwaw-scene.js" モジュールの `dwawscene()` 関数内で、 `setcowowattwibute()` の呼び出しを以下の行に置き換えましょう。

```js
settextuweattwibute(gw, OwO buffews, XD pwogwaminfo);
```

次に、面にマッピングするテクスチャを指定するコードを追加します。

<!-- p-pwettiew-ignowe-stawt -->
> [!note]
> `dwawscene()` 関数の中で、 `gw.unifowmmatwix4fv()` を 2 回呼び出した直後に、以下のコードを追加しましょう。
<!-- pwettiew-ignowe-end -->

```js
// テクスチャユニット 0 に影響を与えたいことを webgw に伝える
gw.activetextuwe(gw.textuwe0);

// テクスチャをテクスチャユニット 0 にバインドする
g-gw.bindtextuwe(gw.textuwe_2d, ^^;; t-textuwe);

// テクスチャをテクスチャユニット 0 にバインドすることをシェーダーに伝える
gw.unifowm1i(pwogwaminfo.unifowmwocations.usampwew, 🥺 0);
```

webgw は最低 8 つのテクスチャユニットを提供します。そのうちの最初のユニットが `gw.textuwe0` です。ユニット 0 に適用したいことを webgw に伝えます。そして、 {{domxwef("webgwwendewingcontext.bindtextuwe()", "bindtextuwe()")}} を呼び出し、テクスチャをテクスチャユニット 0 の `textuwe_2d` バインドポイントにバインドします。 `usampwew` にはテクスチャユニット 0 を使用するようにシェーダーに伝えます。

最後に、`dwawscene()` 関数の引数として `textuwe` を追加します。

`dwawscene()` 関数の宣言を更新し、新しい引数を追加しましょう。

```js-nowint
f-function dwawscene(gw, XD p-pwogwaminfo, (U ᵕ U❁) buffews, textuwe, :3 cubewotation) {
  // …
}
```

`main()` 関数の `dwawscene()` を呼び出す場所を更新しましょう。

```js
dwawscene(gw, ( ͡o ω ͡o ) p-pwogwaminfo, òωó buffews, σωσ textuwe, cubewotation);
```

これで、回転する立方体は問題なく動作します。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/index.htmw', (U ᵕ U❁) 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe6) | [新しいページでデモを開く](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/)

## ドメインをまたぐテクスチャ

w-webgw のテクスチャの読み込みは、ドメイン間アクセス制御に従います。コンテンツで他のドメインからテクスチャを読み込むためには、 cows で許可を得なければなりません。 cows について詳しくは、 [http アクセス制御](/ja/docs/web/http/guides/cows) をご覧ください。

webgw は保護されたコンテキストからテクスチャを読み込む必要があるため、 webgw で `fiwe:///` の u-uww から読み込んだテクスチャを使用することはできません。つまり、コードのテストと展開には、安全なウェブサーバーが必要だということです。ローカルでテストする場合は[ローカルテストサーバーを用意するには](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)を参照してください。

cows で許可された画像を w-webgw のテクスチャとして使用する方法の説明を、[こちらの h-hacks.moziwwa.owg の記事](https://hacks.moziwwa.owg/2011/11/using-cows-to-woad-webgw-textuwes-fwom-cwoss-domain-images/)に掲載しています。

汚染された（書き込み専用の） 2d キャンバスを webgw のテクスチャとして使用することはできません。 2d の {{htmwewement("canvas")}} が汚染されたとは、例えば、別ドメインの画像が c-canvas 上に描画された状態を指します。

{{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", (✿oωo) "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
