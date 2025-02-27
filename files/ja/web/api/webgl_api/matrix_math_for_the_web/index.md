---
title: ウェブの行列計算
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 0ac4a25134bd20e40bc5ba214c32a7e908dc7aad
---

{{DefaultAPISidebar("WebGL")}}

行列は、空間内のオブジェクトの変換を表すために使用でき、画像を構築したり、ウェブ上でデータを視覚化したりするときに、多くの主要な種類の計算を実行するために使用されます。 この記事では、行列を作成する方法と、[CSS 座標変換](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) および `matrix3d` transform 型でそれらを使用する方法について説明します。

この記事では [CSS](/ja/docs/Web/CSS) を使用して説明を簡略化しますが、行列は [WebGL](/ja/docs/Web/API/WebGL_API)、[WebXR](/ja/docs/Web/API/WebXR_Device_API)（VR および AR）API、[GLSL シェーダー](/ja/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders)などのさまざまなテクノロジーで使用されるコアコンセプトです。 この記事は、[MDN コンテンツキット](https://github.com/gregtatum/mdn-matrix-math)としても入手できます。 実際の例では、`MDN` という名前のグローバルオブジェクトで使用できる[ユーティリティ関数](https://github.com/gregtatum/mdn-webgl)のコレクションを使用しています。

## 変換行列

行列には多くの種類がありますが、私たちが興味を持っているのは 3D 変換行列です。 これらの行列は、 4×4 のグリッドに配置された 16 個の値のセットで構成されています。 [JavaScript](/ja/docs/Web/JavaScript) では、行列を配列として表すのは簡単です。

まず、**単位行列** (identity matrix) について検討します。 これは特別な変換行列であり、スカラー乗算での 1 と同じように機能します。 n \* 1 = n と同様に、任意の行列に単位行列を乗算すると、元の行列と値が一致する結果の行列が得られます。

単位行列は JavaScript では次のようになります。

```js
let identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
```

単位行列の乗算とはどのようなものでしょうか？ 最も簡単な例は、単一の点に単位行列を乗算することです。 3D の点に必要なのは 3 つの値 (`x`、`y`、`z`) だけであり、変換行列は 4×4 の値の行列なので、点には 4 番目の次元を追加する必要があります。 慣例により、この次元は**視点距離** (perspective) と呼ばれ、文字 `w` で表されます。 一般的には、 `w` を 1 に設定すると、計算がうまくいきます。

w 成分を点に追加した後、行列と点がどのようにきれいに並んでいるかに注目してください。

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1]

[4, 3, 2, 1] // Point at [x, y, z, w]
```

`w` 成分には、この記事の範囲外のいくつかの追加の用途があります。 [WebGL のモデル、ビュー、投影](/ja/docs/Web/API/WebGL_API/WebGL_model_view_projection)に関する記事を調べて、どのように役立つかを覗いてみてください。

### 行列と点の乗算

このサンプルコードでは、行列と点を乗算する関数 `multiplyMatrixAndPoint()` を定義しています。

```js
// 点 • 行列
function multiplyMatrixAndPoint(matrix, point) {
  // 行列の各部分に、列 c、行 r の番号で単純な変数名を付けます
  let c0r0 = matrix[0],
    c1r0 = matrix[1],
    c2r0 = matrix[2],
    c3r0 = matrix[3];
  let c0r1 = matrix[4],
    c1r1 = matrix[5],
    c2r1 = matrix[6],
    c3r1 = matrix[7];
  let c0r2 = matrix[8],
    c1r2 = matrix[9],
    c2r2 = matrix[10],
    c3r2 = matrix[11];
  let c0r3 = matrix[12],
    c1r3 = matrix[13],
    c2r3 = matrix[14],
    c3r3 = matrix[15];

  // 次に、点にある単純な名前を設定します
  let x = point[0];
  let y = point[1];
  let z = point[2];
  let w = point[3];

  // 1番目の列の各部分に対して点を乗算し、次に合計します
  let resultX = x * c0r0 + y * c0r1 + z * c0r2 + w * c0r3;

  // 2番目の列の各部分に対して点を乗算し、次に合計します
  let resultY = x * c1r0 + y * c1r1 + z * c1r2 + w * c1r3;

  // 3番目の列の各部分に対して点を乗算し、次に合計します
  let resultZ = x * c2r0 + y * c2r1 + z * c2r2 + w * c2r3;

  // 4番目の列の各部分に対して点を乗算し、次に合計します
  let resultW = x * c3r0 + y * c3r1 + z * c3r2 + w * c3r3;

  return [resultX, resultY, resultZ, resultW];
}
```

上記の関数を使用して、点に行列を掛けることができます。 単位行列を使用すると、元の行列と同じ行列が返されます。 これは、単位行列を掛けた行列は常にそれ自体と等しいためです。

```js
// identityResult を [4,3,2,1] に設定します
let identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

同じ点を返すことはあまり役に立ちませんが、点に対して便利な操作を実行できる他の種類の行列があります。 次のセクションでは、これらの行列のいくつかを示します。

### 2 つの行列の乗算

行列と点を乗算することに加えて、2 つの行列を乗算することもできます。 上記の関数は、このプロセスを支援するために再利用できます。

```js
// 行列B • 行列A
function multiplyMatrices(matrixA, matrixB) {
  // 2番目の行列を行にスライスします
  let row0 = [matrixB[0], matrixB[1], matrixB[2], matrixB[3]];
  let row1 = [matrixB[4], matrixB[5], matrixB[6], matrixB[7]];
  let row2 = [matrixB[8], matrixB[9], matrixB[10], matrixB[11]];
  let row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];

  // 各行に行列Aを掛けます
  let result0 = multiplyMatrixAndPoint(matrixA, row0);
  let result1 = multiplyMatrixAndPoint(matrixA, row1);
  let result2 = multiplyMatrixAndPoint(matrixA, row2);
  let result3 = multiplyMatrixAndPoint(matrixA, row3);

  // 結果の行を単一の行列に戻します
  return [
    result0[0],
    result0[1],
    result0[2],
    result0[3],
    result1[0],
    result1[1],
    result1[2],
    result1[3],
    result2[0],
    result2[1],
    result2[2],
    result2[3],
    result3[0],
    result3[1],
    result3[2],
    result3[3],
  ];
}
```

この関数の動作を見てみましょう。

```js
let someMatrix = [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1];

let identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// someMatrix と同等の新しい配列を返します
let someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);
```

> [!WARNING]
> これらの行列関数は、説明を明確にするために書かれており、速度やメモリ管理のためには書かれていません。 これらの関数は多くの新しい配列を作成しますが、これはガベージコレクションのために、リアルタイム操作に特にコストがかかる可能性があります。 実際の製品コードでは、最適化された関数を使用するのが最善です。 [glMatrix](https://glmatrix.net/) は、速度とパフォーマンスに重点を置いたライブラリーの例です。 glMatrix ライブラリーの焦点は、更新ループの前に割り当てられるターゲット配列を持つことです。

## 平行移動行列

**平行移動行列** (translation matrix) は単位行列に基づいており、3D グラフィックスで使用され、3 つの方向（`x`、`y`、`z`）の 1 つまたは複数に点またはオブジェクトを移動します。 平行移動を考える最も簡単な方法は、コーヒーカップを手に取るようなものです。 コーヒーがこぼれないように、コーヒーカップは直立させ、同じ方向に向ける必要があります。 それは、テーブルから離れて空中をあちこちと移動できます。

コーヒーを口の中に注ぐには、カップを傾けたり回転させたりする必要があるため、実際には平行移動行列だけを使用してコーヒーを飲むことはできません。 これを行うために使用する行列の種類（巧妙に**[回転行列](#回転行列)**と呼ばれます）を後で見ていきます。

```js
let x = 50;
let y = 100;
let z = 0;

let translationMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
```

3 つの軸に沿った距離を平行移動行列の対応する位置に配置し、3D 空間を移動するために必要な点または行列に掛けます。

## 行列で DOM を操作する

行列を使い始める本当に簡単な方法は、CSS {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}} を使用することです。 まず、コンテンツを含む単純な {{htmlelement("div")}} を設定します。 スタイルは示しませんが、幅と高さが固定され、ページの中央に配置されます。 `<div>` には transform 用の遷移セットがあるため、何が行われているかを簡単に確認できるように行列がアニメーション化されます。

```html
<div id="move-me" class="transformable">
  <h2>Move me with a matrix</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
</div>
```

最後に、各例で 4×4 マトリックスを生成し、`<div>` のスタイルを更新して、transform を適用し、`matrix3d` に設定します。 行列が 4 行 4 列で構成されている場合でも、行列は 16 個の値の 1 行につぶされていることに注意してください。 行列は常に JavaScript の 1 次元のリストに格納されます。

```js
// 行列の配列から matrix3d スタイルプロパティを作成します
function matrixArrayToCssMatrix(array) {
  return `matrix3d(${array.join(",")})`;
}

// DOM 要素を取得します
let moveMe = document.getElementById("move-me");

// 次のような結果を返します: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1);"
let matrix3dRule = matrixArrayToCssMatrix(translationMatrix);

// transform を設定します
moveMe.style.transform = matrix3dRule;
```

[JSFiddle で見る](https://jsfiddle.net/tatumcreative/g24mgw6y/)

![行列による平行移動の例](matrix-translation.jpg)

## 拡大縮小行列

**拡大縮小行列** (scale matrix) は、幅、高さ、奥行きの 3 つの次元の 1 つ以上で何かを大きくまたは小さくします。 典型的な（デカルト）座標では、これによりオブジェクトが対応する方向に伸縮します。

幅、高さ、奥行きのそれぞれに適用する変更の量は、左上隅から右下に向かって斜めに配置されます。

```js
let w = 1.5; // width  (x)
let h = 0.7; // height (y)
let d = 1; // depth  (z)

let scaleMatrix = [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
```

[JSFiddle で見る](https://jsfiddle.net/tatumcreative/fndd6e1b/)

![行列による拡大縮小の例](matrix-scale.jpg)

## 回転行列

**回転行列** (rotation matrix) は、点またはオブジェクトを回転させるために使用します。 回転行列は、拡大縮小行列や平行移動行列よりも少し複雑に見えます。 これは、三角関数を使用して回転を実行します。 この節では、手順を完全な詳細に分解しませんが（[Wolfram MathWorld のこの記事](https://mathworld.wolfram.com/RotationMatrix.html)を調べてください）、説明のためにこの例を取り上げます。

まず、行列を使用せずに原点を中心に点を回転させるコードを次に示します。

```js
// 行列なしで原点を中心に手動で点を回転
let point = [10, 2];

// 原点からの距離を計算します
let distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);

// ラジアンで 60 度に相当
let rotationInRadians = Math.PI / 3;

let transformedPoint = [
  Math.cos(rotationInRadians) * distance,
  Math.sin(rotationInRadians) * distance,
];
```

これらのタイプのステップを行列にエンコードし、`x`、`y`、`z` の各次元に対してそれを行うことができます。下記は反時計回りの Z 軸回転を左手座標系で表したものです。

```js
let sin = Math.sin;
let cos = Math.cos;

// 注: これらの変換には視点距離がないため、
//     この時点での回転は div を縮小するためにのみ示されます

let a = Math.PI * 0.3; // ラジアンでの回転量

// Z 軸を中心に回転
let rotateZMatrix = [
  cos(a),
  -sin(a),
  0,
  0,
  sin(a),
  cos(a),
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
];
```

[JSFiddle で見る](https://jsfiddle.net/9vr2dorz)

![回転行列の例](matrix-rotation.jpg)

3 つの軸のそれぞれを中心に回転するための回転行列を返す関数のセットを次に示します。 大きな注意点の 1 つは、視点距離が適用されていないため、まだとても 3D に感じられない可能性があることです。 平面度 (flatness) は、カメラが遠くのオブジェクトにズームインで非常に接近したときと同じです。遠近感 (sense of perspective) がなくなります。

```js
function rotateAroundXAxis(a) {
  return [1, 0, 0, 0, 0, cos(a), -sin(a), 0, 0, sin(a), cos(a), 0, 0, 0, 0, 1];
}

function rotateAroundYAxis(a) {
  return [cos(a), 0, sin(a), 0, 0, 1, 0, 0, -sin(a), 0, cos(a), 0, 0, 0, 0, 1];
}

function rotateAroundZAxis(a) {
  return [cos(a), -sin(a), 0, 0, sin(a), cos(a), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
```

[JSFiddle で見る](https://jsfiddle.net/tatumcreative/tk072doc/)

## 行列合成

行列の本当の力は、**行列合成** (matrix composition) に由来します。 特定のクラスの行列を掛け合わせると、変換の履歴が保持され、元に戻すことができます。 つまり、平行移動、回転、拡大縮小の行列がすべて組み合わされている場合、行列の順序を逆にして再適用すると、元の点が返されます。

行列を乗算する順序は重要です。 数値を乗算する場合、 a \* b = c と b \* a = c はどちらも正しいです。 例えば、3 \* 4 = 12 と 4 \* 3 = 12 です。 数学では、これらの数値は**可換** (commutative) であると説明されます。 順序が入れ替わった場合、行列では同じであることが保証されないため、行列は**非可換** (non-commutative) です。

もう 1 つのマインドベンダーは、WebGL および CSS での行列乗算は、操作が直感的に発生するのとは逆の順序で発生する必要があることです。 例えば、何かを 80% 縮小し、200 ピクセル下に移動してから、原点を中心に 90 度回転すると、疑似コードでは次のようになります。

```plain
transformation = rotate * translate * scale
```

### 複数の変換の合成

行列の合成に使用する関数は `multiplyArrayOfMatrices()` です。 これは、この記事の冒頭で紹介した[ユーティリティ関数](https://github.com/gregtatum/mdn-webgl)のセットの一部です。 行列の配列を取り、それらを掛け合わせて結果を返します。 WebGL シェーダーコードでは、これは言語に組み込まれており、`*` 演算子を使用できます。 さらに、この例では、上で定義した行列を返す `scale()` 関数と `translate()` 関数を使用しています。

```js
let transformMatrix = MDN.multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // ステップ 3: 90度回転
  translate(0, 200, 0), // ステップ 2: 100ピクセル下に移動
  scale(0.8, 0.8, 0.8), // ステップ 1: 縮小
]);
```

[JSFiddle で見る](https://jsfiddle.net/tatumcreative/qxxg3yvc/)

![行列合成の例](matrix-composition.jpg)

最後に、行列がどのように機能するかを示す楽しい手順は、手順を逆にして、行列を元の単位行列に戻すことです。

```js
let transformMatrix = MDN.multiplyArrayOfMatrices([
  scale(1.25, 1.25, 1.25), // ステップ 6: 縮小を元に戻す
  translate(0, -200, 0), // ステップ 5: 移動を元に戻す
  rotateAroundZAxis(-Math.PI * 0.5), // ステップ 4: 回転を元に戻す
  rotateAroundZAxis(Math.PI * 0.5), // ステップ 3: 90度回転
  translate(0, 200, 0), // ステップ 2: 100ピクセル下に移動
  scale(0.8, 0.8, 0.8), // ステップ 1: 縮小
]);
```

## 行列が重要である理由

行列が重要なのは、空間内のさまざまな変換を記述することができる小さな数の集合で構成されているからです。行列はプログラムの中で簡単に共有できます。さまざまな座標空間を行列で記述することができ、いくつかの行列の乗算によって、ある座標空間から別の座標空間へデータ集合を移動させることができます。行列は、それを生成するために使用した前回変換のすべての部分を効果的に記憶します。

WebGL で使用する場合、グラフィックスカードは、空間内の多数の点に行列を乗算するのに特に適しています。 点の配置、照明の計算、アニメのキャラクターのポーズなどのさまざまな操作はすべて、この基本的なツールに依存しています。
