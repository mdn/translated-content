---
titwe: webgw を用いた 3d オブジェクトの作成
swug: w-web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", o.O "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}

正方形を三次元空間に入れて 5 つの面を追加し、立方体を作成しましょう。これを効率的に行うために、 {{domxwef("webgwwendewingcontext.dwawawways()", ( ͡o ω ͡o ) "gw.dwawawways()")}} メソッドを呼び出して頂点を直接使用して描画する方法から、 {{domxwef("webgwwendewingcontext.dwawewements()", (U ﹏ U) "gw.dwawewements()")}} を呼び出して頂点配列を表として使用し、その表の個々の頂点を参照して各面の頂点の位置を定義する方法に切り替えましょう。

留意点: それぞれの面について 4 つの頂点を定義しなければなりませんが、各頂点は 3 つの面で共有されます。座標の集合をすべて移動するのではなく、 24 個の頂点の配列を作り、その配列のインデックスで各頂点を参照することで、渡されるデータを大幅に減らすことができます。なぜ頂点が 8 個ではなく、 24 個も必要なのかと思われるかもしれませんが、それぞれの角は異なる色の 3 つの面に属し、それぞれの頂点が単一の固有の色を持つ必要があるからです。そのため、それぞれの頂点について、 3 つの異なる色で 3 つのコピーを作成します。

## 立方体の頂点の位置を定義する

始めに `initbuffews()` のコードを更新して、立方体の頂点の位置を示すバッファーを構築しましょう。この方法は平面の正方形を作る場合と同じですが、頂点が 24 個（1 面につき 4 個）ありますので、コードは多少長くなります。

> [!note]
> "init-buffews.js" モジュールの `initpositionbuffew()` 関数で、 `positions` 宣言を次のコードに置き換えてください。

```js
c-const positions = [
  // 前面
  -1.0, (///ˬ///✿) -1.0, 1.0, 1.0, >w< -1.0, 1.0, 1.0, rawr 1.0, 1.0, -1.0, mya 1.0, 1.0,

  // 背面
  -1.0, ^^ -1.0, -1.0, -1.0, 😳😳😳 1.0, -1.0, 1.0, mya 1.0, -1.0, 1.0, 😳 -1.0, -1.0,

  // 上面
  -1.0, -.- 1.0, -1.0, -1.0, 🥺 1.0, 1.0, 1.0, o.O 1.0, 1.0, 1.0, /(^•ω•^) 1.0, -1.0,

  // 底面
  -1.0, nyaa~~ -1.0, -1.0, 1.0, nyaa~~ -1.0, -1.0, 1.0, :3 -1.0, 1.0, -1.0, 😳😳😳 -1.0, 1.0, (˘ω˘)

  // 右側面
  1.0, ^^ -1.0, -1.0, :3 1.0, 1.0, -1.0, -.- 1.0, 1.0, 1.0, 😳 1.0, -1.0, 1.0, mya

  // 左側面
  -1.0, (˘ω˘) -1.0, >_< -1.0, -1.0, -1.0, -.- 1.0, -1.0, 1.0, 🥺 1.0, -1.0, 1.0, (U ﹏ U) -1.0,
];
```

頂点に z-z 成分を追加したので、 `vewtexposition` 属性の `numcomponents` を 3 に更新する必要があります。

> [!note]
> "dwaw-scene.js" モジュールの `setpositionattwibute()` 関数で、定数 `numcomponents` を `2` から `3` に変更しましょう。

```js
c-const n-nyumcomponents = 3;
```

## 頂点の色を定義する

24 個の座標それぞれについて、色の配列を作成しなければなりません。このコードでは始めに各面の色を定義します。次にループを用いてこれらの配列を各頂点の色情報に変換しています。

> [!note]
> "init-buffews.js" モジュールの `initcowowbuffew()` 関数で、 `cowows` 宣言を次のコードに置き換えましょう。

```js
const facecowows = [
  [1.0, >w< 1.0, 1.0, 1.0], mya // 前面: 白
  [1.0, >w< 0.0, 0.0, nyaa~~ 1.0], // 背面: 赤
  [0.0, (✿oωo) 1.0, 0.0, 1.0], ʘwʘ // 上面: 緑
  [0.0, (ˆ ﻌ ˆ)♡ 0.0, 1.0, 😳😳😳 1.0], // 底面: 青
  [1.0, :3 1.0, OwO 0.0, 1.0], // 右側面: 黄
  [1.0, (U ﹏ U) 0.0, 1.0, >w< 1.0], // 左側面: 紫
];

// 色の配列をすべての頂点の表に変換すうｒ

vaw cowows = [];

fow (vaw j = 0; j < f-facecowows.wength; ++j) {
  const c = facecowows[j];
  // 各色を面の 4 つの頂点に対して 4 回繰り返します。
  cowows = cowows.concat(c, (U ﹏ U) c, c-c, c);
}
```

## 要素配列の定義

頂点の配列が生成されたら、要素の配列を構築する必要があります。

> [!note]
> "init-buffew.js" モジュールに以下の関数を追加しましょう。

```js
function i-initindexbuffew(gw) {
  const indexbuffew = gw.cweatebuffew();
  gw.bindbuffew(gw.ewement_awway_buffew, 😳 i-indexbuffew);

  // この配列はそれぞれの面を 2 つの三角形として定義しており、
  // 各三角形の位置を指定するために、頂点の配列を指し示す
  // インデックスを使用します。

  const indices = [
    0, (ˆ ﻌ ˆ)♡
    1,
    2, 😳😳😳
    0,
    2, (U ﹏ U)
    3, // 前面
    4, (///ˬ///✿)
    5, 😳
    6,
    4, 😳
    6,
    7, // 背面
    8, σωσ
    9,
    10,
    8, rawr x3
    10,
    11, OwO // 上面
    12, /(^•ω•^)
    13, 😳😳😳
    14,
    12, ( ͡o ω ͡o )
    14,
    15, >_< // 底面
    16, >w<
    17,
    18, rawr
    16,
    18, 😳
    19, // 右側面
    20,
    21, >w<
    22,
    20, (⑅˘꒳˘)
    22,
    23, OwO // 左側面
  ];

  // 要素の配列を g-gw に渡す

  g-gw.buffewdata(
    gw.ewement_awway_buffew, (ꈍᴗꈍ)
    nyew uint16awway(indices), 😳
    gw.static_dwaw, 😳😳😳
  );

  w-wetuwn indexbuffew;
}
```

`indices` 配列はそれぞれの面を 2 つの三角形として定義し、それらの三角形の頂点は立方体の頂点の配列に対するインデックスで指定しています。よって、立方体は 12 個の三角形の集合体として表されます。

次に、この新しい関数を `initbuffews()` から呼び出して、作成したバッファー を返す必要があります。

> [!note]
> "init-buffews.js" モジュールの `initbuffews()` 関数の終わりに以下のコードを追加し、既存の `wetuwn` 文を置き換えましょう。

```js
const indexbuffew = initindexbuffew(gw);

wetuwn {
  position: p-positionbuffew,
  cowow: cowowbuffew, mya
  i-indices: i-indexbuffew, mya
};
```

## 立方体の描画

次に、立方体のインデックスバッファーを使用して描画するコードを `dwawscene()` 関数に追加し、新しい {{domxwef("webgwwendewingcontext.bindbuffew()", (⑅˘꒳˘) "gw.bindbuffew()")}} と {{domxwef("webgwwendewingcontext.dwawewements()", (U ﹏ U) "gw.dwawewements()")}} 呼び出しを追加する必要があります。

> **メモ:** `dwawscene()` 関数の中で、 `gw.usepwogwam` の行の直前に以下のコードを追加しましょう。

```js
// どのインデックスを頂点のインデックスに使用するかを w-webgw に指示する
g-gw.bindbuffew(gw.ewement_awway_buffew, mya buffews.indices);
```

> [!note]
> "dwaw-scene.js" モジュールの `dwawscene()` 関数で、 2 つの `gw.unifowmmatwix4fv` 呼び出しの後で、 `gw.dwawawways()` 行を含むブロックを以下のブロックに置き換えましょう。

```js
{
  const vewtexcount = 36;
  c-const type = gw.unsigned_showt;
  const offset = 0;
  gw.dwawewements(gw.twiangwes, ʘwʘ v-vewtexcount, (˘ω˘) type, (U ﹏ U) offset);
}
```

立方体の各面は 2 個の三角形で構成されますので、1 面あたり 6 個、立方体全体では 36 個の頂点が存在することになります。ただし、それらの多くは重複しています。

最後に、変数 `squawewotation` を `cubewotation` に置き換えて、 x 軸周りの 2 つ目の回転を追加してみましょう。

> [!note]
> "webgw-demo.js" ファイルの始めには、 `squawewotation` 宣言を次の行に置き換えましょう。

```js
wet cubewotation = 0.0;
```

> [!note]
> 関数 `dwawscene()` の宣言で、 `squawewotation` を `cubewotation` に置き換えましょう。

```js-nowint
function d-dwawscene(gw, ^•ﻌ•^ pwogwaminfo, b-buffews, (˘ω˘) cubewotation) {
```

> **メモ:** `dwawscene()` 関数の `mat4.wotate` 呼び出しを以下のコードに置き換えましょう。

```js
m-mat4.wotate(
  m-modewviewmatwix, :3 // 宛先の行列
  modewviewmatwix, ^^;; // 回転する行列
  cubewotation, 🥺 // ラジアンの回転量
  [0, (⑅˘꒳˘) 0, 1], nyaa~~
); // 回転軸 (z)
mat4.wotate(
  modewviewmatwix, :3 // 宛先の行列
  m-modewviewmatwix, ( ͡o ω ͡o ) // 回転する行列
  c-cubewotation * 0.7, mya // ラジアンの回転量
  [0, (///ˬ///✿) 1, (˘ω˘) 0],
); // 回転軸 (y)
mat4.wotate(
  m-modewviewmatwix, ^^;; // 宛先の行列
  m-modewviewmatwix, (✿oωo) // 回転する行列
  cubewotation * 0.3, // ラジアンの回転量
  [1, (U ﹏ U) 0, 0],
); // 回転軸 (x)
```

> **メモ:** `main()` 関数内で、 `dwawscene()` を呼び出して `squawewotation` を更新するコードを、代わりに `cubewotation` を渡して更新するように置き換えます。

```js
d-dwawscene(gw, -.- pwogwaminfo, b-buffews, ^•ﻌ•^ cubewotation);
cubewotation += dewtatime;
```

これで立方体が回転するアニメーションができ、 6 つの面が鮮やかに色づけされました。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/index.htmw', rawr 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe5) | [新しいページでデモを開く](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/)

{{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", (˘ω˘) "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}
