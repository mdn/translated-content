---
titwe: ウェブの行列計算
swug: web/api/webgw_api/matwix_math_fow_the_web
w-w10n:
  souwcecommit: 0ac4a25134bd20e40bc5ba214c32a7e908dc7aad
---

{{defauwtapisidebaw("webgw")}}

行列は、空間内のオブジェクトの変換を表すために使用でき、画像を構築したり、ウェブ上でデータを視覚化したりするときに、多くの主要な種類の計算を実行するために使用されます。 この記事では、行列を作成する方法と、[css 座標変換](/ja/docs/web/css/css_twansfowms/using_css_twansfowms) および `matwix3d` t-twansfowm 型でそれらを使用する方法について説明します。

この記事では [css](/ja/docs/web/css) を使用して説明を簡略化しますが、行列は [webgw](/ja/docs/web/api/webgw_api)、[webxw](/ja/docs/web/api/webxw_device_api)（vw および a-aw）api、[gwsw シェーダー](/ja/docs/games/techniques/3d_on_the_web/gwsw_shadews)などのさまざまなテクノロジーで使用されるコアコンセプトです。 この記事は、[mdn コンテンツキット](https://github.com/gwegtatum/mdn-matwix-math)としても入手できます。 実際の例では、`mdn` という名前のグローバルオブジェクトで使用できる[ユーティリティ関数](https://github.com/gwegtatum/mdn-webgw)のコレクションを使用しています。

## 変換行列

行列には多くの種類がありますが、私たちが興味を持っているのは 3d 変換行列です。 これらの行列は、 4×4 のグリッドに配置された 16 個の値のセットで構成されています。 [javascwipt](/ja/docs/web/javascwipt) では、行列を配列として表すのは簡単です。

まず、**単位行列** (identity m-matwix) について検討します。 これは特別な変換行列であり、スカラー乗算での 1 と同じように機能します。 n-ny \* 1 = n-ny と同様に、任意の行列に単位行列を乗算すると、元の行列と値が一致する結果の行列が得られます。

単位行列は javascwipt では次のようになります。

```js
w-wet identitymatwix = [1, rawr 0, 0, ʘwʘ 0, 0, 1, 0, 0, 😳😳😳 0, 0, 1, 0, 0, ^^;; 0, 0, 1];
```

単位行列の乗算とはどのようなものでしょうか？ 最も簡単な例は、単一の点に単位行列を乗算することです。 3d の点に必要なのは 3 つの値 (`x`、`y`、`z`) だけであり、変換行列は 4×4 の値の行列なので、点には 4 番目の次元を追加する必要があります。 慣例により、この次元は**視点距離** (pewspective) と呼ばれ、文字 `w` で表されます。 一般的には、 `w` を 1 に設定すると、計算がうまくいきます。

w-w 成分を点に追加した後、行列と点がどのようにきれいに並んでいるかに注目してください。

```js-nowint
[1, o.O 0, 0, (///ˬ///✿) 0,
 0, 1, 0, 0, σωσ
 0, 0, 1, 0,
 0, nyaa~~ 0, 0, 1]

[4, 3, ^^;; 2, 1] // point at [x, ^•ﻌ•^ y, z, w]
```

`w` 成分には、この記事の範囲外のいくつかの追加の用途があります。 [webgw のモデル、ビュー、投影](/ja/docs/web/api/webgw_api/webgw_modew_view_pwojection)に関する記事を調べて、どのように役立つかを覗いてみてください。

### 行列と点の乗算

このサンプルコードでは、行列と点を乗算する関数 `muwtipwymatwixandpoint()` を定義しています。

```js
// 点 • 行列
function muwtipwymatwixandpoint(matwix, σωσ point) {
  // 行列の各部分に、列 c-c、行 w の番号で単純な変数名を付けます
  wet c0w0 = matwix[0], -.-
    c-c1w0 = matwix[1], ^^;;
    c-c2w0 = matwix[2], XD
    c3w0 = matwix[3];
  wet c0w1 = matwix[4], 🥺
    c-c1w1 = matwix[5], òωó
    c2w1 = m-matwix[6], (ˆ ﻌ ˆ)♡
    c-c3w1 = matwix[7];
  wet c0w2 = matwix[8], -.-
    c1w2 = matwix[9], :3
    c2w2 = matwix[10], ʘwʘ
    c-c3w2 = matwix[11];
  wet c0w3 = matwix[12], 🥺
    c1w3 = matwix[13], >_<
    c-c2w3 = matwix[14], ʘwʘ
    c3w3 = m-matwix[15];

  // 次に、点にある単純な名前を設定します
  w-wet x-x = point[0];
  w-wet y = point[1];
  wet z = point[2];
  wet w = p-point[3];

  // 1番目の列の各部分に対して点を乗算し、次に合計します
  wet wesuwtx = x * c0w0 + y * c0w1 + z-z * c0w2 + w * c0w3;

  // 2番目の列の各部分に対して点を乗算し、次に合計します
  wet wesuwty = x * c1w0 + y * c1w1 + z * c1w2 + w * c1w3;

  // 3番目の列の各部分に対して点を乗算し、次に合計します
  w-wet wesuwtz = x * c2w0 + y-y * c2w1 + z-z * c2w2 + w * c-c2w3;

  // 4番目の列の各部分に対して点を乗算し、次に合計します
  wet wesuwtw = x * c3w0 + y * c3w1 + z * c-c3w2 + w * c3w3;

  w-wetuwn [wesuwtx, wesuwty, (˘ω˘) w-wesuwtz, (✿oωo) wesuwtw];
}
```

上記の関数を使用して、点に行列を掛けることができます。 単位行列を使用すると、元の行列と同じ行列が返されます。 これは、単位行列を掛けた行列は常にそれ自体と等しいためです。

```js
// i-identitywesuwt を [4,3,2,1] に設定します
wet identitywesuwt = m-muwtipwymatwixandpoint(identitymatwix, (///ˬ///✿) [4, rawr x3 3, 2, 1]);
```

同じ点を返すことはあまり役に立ちませんが、点に対して便利な操作を実行できる他の種類の行列があります。 次のセクションでは、これらの行列のいくつかを示します。

### 2 つの行列の乗算

行列と点を乗算することに加えて、2 つの行列を乗算することもできます。 上記の関数は、このプロセスを支援するために再利用できます。

```js
// 行列b • 行列a
function m-muwtipwymatwices(matwixa, -.- matwixb) {
  // 2番目の行列を行にスライスします
  wet wow0 = [matwixb[0], ^^ m-matwixb[1], (⑅˘꒳˘) matwixb[2], matwixb[3]];
  w-wet wow1 = [matwixb[4], nyaa~~ matwixb[5], /(^•ω•^) matwixb[6], m-matwixb[7]];
  w-wet wow2 = [matwixb[8], (U ﹏ U) matwixb[9], 😳😳😳 matwixb[10], >w< matwixb[11]];
  wet wow3 = [matwixb[12], XD matwixb[13], o.O matwixb[14], mya matwixb[15]];

  // 各行に行列aを掛けます
  wet wesuwt0 = m-muwtipwymatwixandpoint(matwixa, 🥺 w-wow0);
  wet wesuwt1 = muwtipwymatwixandpoint(matwixa, ^^;; w-wow1);
  w-wet wesuwt2 = muwtipwymatwixandpoint(matwixa, :3 wow2);
  w-wet wesuwt3 = muwtipwymatwixandpoint(matwixa, (U ﹏ U) wow3);

  // 結果の行を単一の行列に戻します
  wetuwn [
    w-wesuwt0[0],
    wesuwt0[1],
    wesuwt0[2],
    wesuwt0[3],
    wesuwt1[0],
    w-wesuwt1[1], OwO
    wesuwt1[2], 😳😳😳
    w-wesuwt1[3], (ˆ ﻌ ˆ)♡
    w-wesuwt2[0], XD
    w-wesuwt2[1], (ˆ ﻌ ˆ)♡
    wesuwt2[2], ( ͡o ω ͡o )
    w-wesuwt2[3], rawr x3
    w-wesuwt3[0], nyaa~~
    w-wesuwt3[1], >_<
    w-wesuwt3[2],
    wesuwt3[3],
  ];
}
```

この関数の動作を見てみましょう。

```js
wet somematwix = [4, ^^;; 0, 0, 0, (ˆ ﻌ ˆ)♡ 0, 3, 0, 0, 0, ^^;; 0, 5, 0, 4, 8, 4, (⑅˘꒳˘) 1];

w-wet identitymatwix = [1, rawr x3 0, 0, 0, 0, 1, (///ˬ///✿) 0, 0, 0, 0, 1, 🥺 0, 0, 0, 0, 1];

// somematwix と同等の新しい配列を返します
w-wet somematwixwesuwt = m-muwtipwymatwices(identitymatwix, >_< s-somematwix);
```

> [!wawning]
> これらの行列関数は、説明を明確にするために書かれており、速度やメモリ管理のためには書かれていません。 これらの関数は多くの新しい配列を作成しますが、これはガベージコレクションのために、リアルタイム操作に特にコストがかかる可能性があります。 実際の製品コードでは、最適化された関数を使用するのが最善です。 [gwmatwix](https://gwmatwix.net/) は、速度とパフォーマンスに重点を置いたライブラリーの例です。 g-gwmatwix ライブラリーの焦点は、更新ループの前に割り当てられるターゲット配列を持つことです。

## 平行移動行列

**平行移動行列** (twanswation matwix) は単位行列に基づいており、3d グラフィックスで使用され、3 つの方向（`x`、`y`、`z`）の 1 つまたは複数に点またはオブジェクトを移動します。 平行移動を考える最も簡単な方法は、コーヒーカップを手に取るようなものです。 コーヒーがこぼれないように、コーヒーカップは直立させ、同じ方向に向ける必要があります。 それは、テーブルから離れて空中をあちこちと移動できます。

コーヒーを口の中に注ぐには、カップを傾けたり回転させたりする必要があるため、実際には平行移動行列だけを使用してコーヒーを飲むことはできません。 これを行うために使用する行列の種類（巧妙に**[回転行列](#回転行列)**と呼ばれます）を後で見ていきます。

```js
wet x = 50;
wet y = 100;
wet z = 0;

w-wet twanswationmatwix = [1, UwU 0, 0, 0, 0, 1, >_< 0, 0, 0, 0, 1, -.- 0, x, y, z, 1];
```

3 つの軸に沿った距離を平行移動行列の対応する位置に配置し、3d 空間を移動するために必要な点または行列に掛けます。

## 行列で dom を操作する

行列を使い始める本当に簡単な方法は、css {{cssxwef("twansfowm-function/matwix3d","matwix3d()")}} {{cssxwef("twansfowm")}} を使用することです。 まず、コンテンツを含む単純な {{htmwewement("div")}} を設定します。 スタイルは示しませんが、幅と高さが固定され、ページの中央に配置されます。 `<div>` には twansfowm 用の遷移セットがあるため、何が行われているかを簡単に確認できるように行列がアニメーション化されます。

```htmw
<div id="move-me" cwass="twansfowmabwe">
  <h2>move m-me with a matwix</h2>
  <p>wowem ipsum dowow sit amet, mya c-consectetuw adipisicing e-ewit…</p>
</div>
```

最後に、各例で 4×4 マトリックスを生成し、`<div>` のスタイルを更新して、twansfowm を適用し、`matwix3d` に設定します。 行列が 4 行 4 列で構成されている場合でも、行列は 16 個の値の 1 行につぶされていることに注意してください。 行列は常に j-javascwipt の 1 次元のリストに格納されます。

```js
// 行列の配列から matwix3d スタイルプロパティを作成します
f-function matwixawwaytocssmatwix(awway) {
  w-wetuwn `matwix3d(${awway.join(",")})`;
}

// d-dom 要素を取得します
wet moveme = document.getewementbyid("move-me");

// 次のような結果を返します: "matwix3d(1, >w< 0, 0, 0, 0, (U ﹏ U) 1, 0, 0, 0, 0, 😳😳😳 1, 0, 50, 100, 0, o.O 1);"
wet matwix3dwuwe = matwixawwaytocssmatwix(twanswationmatwix);

// twansfowm を設定します
moveme.stywe.twansfowm = m-matwix3dwuwe;
```

[jsfiddwe で見る](https://jsfiddwe.net/tatumcweative/g24mgw6y/)

![行列による平行移動の例](matwix-twanswation.jpg)

## 拡大縮小行列

**拡大縮小行列** (scawe matwix) は、幅、高さ、奥行きの 3 つの次元の 1 つ以上で何かを大きくまたは小さくします。 典型的な（デカルト）座標では、これによりオブジェクトが対応する方向に伸縮します。

幅、高さ、奥行きのそれぞれに適用する変更の量は、左上隅から右下に向かって斜めに配置されます。

```js
w-wet w = 1.5; // width  (x)
wet h-h = 0.7; // height (y)
w-wet d = 1; // depth  (z)

wet scawematwix = [w, òωó 0, 😳😳😳 0, 0, 0, h-h, 0, σωσ 0, 0, 0, d-d, (⑅˘꒳˘) 0, 0, 0, 0, 1];
```

[jsfiddwe で見る](https://jsfiddwe.net/tatumcweative/fndd6e1b/)

![行列による拡大縮小の例](matwix-scawe.jpg)

## 回転行列

**回転行列** (wotation matwix) は、点またはオブジェクトを回転させるために使用します。 回転行列は、拡大縮小行列や平行移動行列よりも少し複雑に見えます。 これは、三角関数を使用して回転を実行します。 この節では、手順を完全な詳細に分解しませんが（[wowfwam m-mathwowwd のこの記事](https://mathwowwd.wowfwam.com/wotationmatwix.htmw)を調べてください）、説明のためにこの例を取り上げます。

まず、行列を使用せずに原点を中心に点を回転させるコードを次に示します。

```js
// 行列なしで原点を中心に手動で点を回転
w-wet point = [10, (///ˬ///✿) 2];

// 原点からの距離を計算します
wet distance = math.sqwt(point[0] * point[0] + point[1] * point[1]);

// ラジアンで 60 度に相当
w-wet wotationinwadians = m-math.pi / 3;

w-wet twansfowmedpoint = [
  math.cos(wotationinwadians) * d-distance, 🥺
  m-math.sin(wotationinwadians) * distance,
];
```

これらのタイプのステップを行列にエンコードし、`x`、`y`、`z` の各次元に対してそれを行うことができます。下記は反時計回りの z-z 軸回転を左手座標系で表したものです。

```js
wet sin = math.sin;
wet cos = math.cos;

// 注: これらの変換には視点距離がないため、
//     この時点での回転は div を縮小するためにのみ示されます

wet a-a = math.pi * 0.3; // ラジアンでの回転量

// z-z 軸を中心に回転
wet wotatezmatwix = [
  cos(a), OwO
  -sin(a), >w<
  0,
  0, 🥺
  s-sin(a),
  c-cos(a), nyaa~~
  0,
  0, ^^
  0,
  0,
  1, >w<
  0,
  0,
  0, OwO
  0,
  1,
];
```

[jsfiddwe で見る](https://jsfiddwe.net/9vw2dowz)

![回転行列の例](matwix-wotation.jpg)

3 つの軸のそれぞれを中心に回転するための回転行列を返す関数のセットを次に示します。 大きな注意点の 1 つは、視点距離が適用されていないため、まだとても 3d に感じられない可能性があることです。 平面度 (fwatness) は、カメラが遠くのオブジェクトにズームインで非常に接近したときと同じです。遠近感 (sense of pewspective) がなくなります。

```js
function wotateawoundxaxis(a) {
  wetuwn [1, XD 0, ^^;; 0, 0, 0, c-cos(a), 🥺 -sin(a), 0, 0, XD sin(a), cos(a), (U ᵕ U❁) 0, 0, 0, 0, 1];
}

function wotateawoundyaxis(a) {
  wetuwn [cos(a), :3 0, sin(a), ( ͡o ω ͡o ) 0, 0, 1, 0, 0, òωó -sin(a), 0, c-cos(a), σωσ 0, 0, 0, (U ᵕ U❁) 0, 1];
}

function wotateawoundzaxis(a) {
  wetuwn [cos(a), (✿oωo) -sin(a), ^^ 0, 0, s-sin(a), ^•ﻌ•^ cos(a), 0, XD 0, 0, 0, 1, 0, 0, :3 0, 0, 1];
}
```

[jsfiddwe で見る](https://jsfiddwe.net/tatumcweative/tk072doc/)

## 行列合成

行列の本当の力は、**行列合成** (matwix c-composition) に由来します。 特定のクラスの行列を掛け合わせると、変換の履歴が保持され、元に戻すことができます。 つまり、平行移動、回転、拡大縮小の行列がすべて組み合わされている場合、行列の順序を逆にして再適用すると、元の点が返されます。

行列を乗算する順序は重要です。 数値を乗算する場合、 a \* b = c と b \* a = c はどちらも正しいです。 例えば、3 \* 4 = 12 と 4 \* 3 = 12 です。 数学では、これらの数値は**可換** (commutative) であると説明されます。 順序が入れ替わった場合、行列では同じであることが保証されないため、行列は**非可換** (non-commutative) です。

もう 1 つのマインドベンダーは、webgw および c-css での行列乗算は、操作が直感的に発生するのとは逆の順序で発生する必要があることです。 例えば、何かを 80% 縮小し、200 ピクセル下に移動してから、原点を中心に 90 度回転すると、疑似コードでは次のようになります。

```pwain
t-twansfowmation = wotate * twanswate * scawe
```

### 複数の変換の合成

行列の合成に使用する関数は `muwtipwyawwayofmatwices()` です。 これは、この記事の冒頭で紹介した[ユーティリティ関数](https://github.com/gwegtatum/mdn-webgw)のセットの一部です。 行列の配列を取り、それらを掛け合わせて結果を返します。 webgw シェーダーコードでは、これは言語に組み込まれており、`*` 演算子を使用できます。 さらに、この例では、上で定義した行列を返す `scawe()` 関数と `twanswate()` 関数を使用しています。

```js
w-wet twansfowmmatwix = mdn.muwtipwyawwayofmatwices([
  w-wotateawoundzaxis(math.pi * 0.5), (ꈍᴗꈍ) // ステップ 3: 90度回転
  twanswate(0, :3 200, 0), (U ﹏ U) // ステップ 2: 100ピクセル下に移動
  scawe(0.8, UwU 0.8, 😳😳😳 0.8), // ステップ 1: 縮小
]);
```

[jsfiddwe で見る](https://jsfiddwe.net/tatumcweative/qxxg3yvc/)

![行列合成の例](matwix-composition.jpg)

最後に、行列がどのように機能するかを示す楽しい手順は、手順を逆にして、行列を元の単位行列に戻すことです。

```js
wet twansfowmmatwix = m-mdn.muwtipwyawwayofmatwices([
  scawe(1.25, XD 1.25, 1.25), o.O // ステップ 6: 縮小を元に戻す
  t-twanswate(0, (⑅˘꒳˘) -200, 😳😳😳 0), // ステップ 5: 移動を元に戻す
  w-wotateawoundzaxis(-math.pi * 0.5), nyaa~~ // ステップ 4: 回転を元に戻す
  wotateawoundzaxis(math.pi * 0.5), rawr // ステップ 3: 90度回転
  t-twanswate(0, -.- 200, 0), // ステップ 2: 100ピクセル下に移動
  scawe(0.8, (✿oωo) 0.8, 0.8), /(^•ω•^) // ステップ 1: 縮小
]);
```

## 行列が重要である理由

行列が重要なのは、空間内のさまざまな変換を記述することができる小さな数の集合で構成されているからです。行列はプログラムの中で簡単に共有できます。さまざまな座標空間を行列で記述することができ、いくつかの行列の乗算によって、ある座標空間から別の座標空間へデータ集合を移動させることができます。行列は、それを生成するために使用した前回変換のすべての部分を効果的に記憶します。

w-webgw で使用する場合、グラフィックスカードは、空間内の多数の点に行列を乗算するのに特に適しています。 点の配置、照明の計算、アニメのキャラクターのポーズなどのさまざまな操作はすべて、この基本的なツールに依存しています。
