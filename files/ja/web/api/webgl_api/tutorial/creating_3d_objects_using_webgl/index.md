---
title: WebGL を用いた 3D オブジェクトの作成
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

正方形を三次元空間に入れて 5 つの面を追加し、立方体を作成しましょう。これを効率的に行うために、 {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} メソッドを呼び出して頂点を直接使用して描画する方法から、 {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} を呼び出して頂点配列を表として使用し、その表の個々の頂点を参照して各面の頂点の位置を定義する方法に切り替えましょう。

留意点: それぞれの面について 4 つの頂点を定義しなければなりませんが、各頂点は 3 つの面で共有されます。座標の集合をすべて移動するのではなく、 24 個の頂点の配列を作り、その配列のインデックスで各頂点を参照することで、渡されるデータを大幅に減らすことができます。なぜ頂点が 8 個ではなく、 24 個も必要なのかと思われるかもしれませんが、それぞれの角は異なる色の 3 つの面に属し、それぞれの頂点が単一の固有の色を持つ必要があるからです。そのため、それぞれの頂点について、 3 つの異なる色で 3 つのコピーを作成します。

## 立方体の頂点の位置を定義する

始めに `initBuffers()` のコードを更新して、立方体の頂点の位置を示すバッファーを構築しましょう。この方法は平面の正方形を作る場合と同じですが、頂点が 24 個（1 面につき 4 個）ありますので、コードは多少長くなります。

> [!NOTE]
> "init-buffers.js" モジュールの `initPositionBuffer()` 関数で、 `positions` 宣言を次のコードに置き換えてください。

```js
const positions = [
  // 前面
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // 背面
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // 上面
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // 底面
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // 右側面
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // 左側面
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];
```

頂点に z 成分を追加したので、 `vertexPosition` 属性の `numComponents` を 3 に更新する必要があります。

> [!NOTE]
> "draw-scene.js" モジュールの `setPositionAttribute()` 関数で、定数 `numComponents` を `2` から `3` に変更しましょう。

```js
const numComponents = 3;
```

## 頂点の色を定義する

24 個の座標それぞれについて、色の配列を作成しなければなりません。このコードでは始めに各面の色を定義します。次にループを用いてこれらの配列を各頂点の色情報に変換しています。

> [!NOTE]
> "init-buffers.js" モジュールの `initColorBuffer()` 関数で、 `colors` 宣言を次のコードに置き換えましょう。

```js
const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // 前面: 白
  [1.0, 0.0, 0.0, 1.0], // 背面: 赤
  [0.0, 1.0, 0.0, 1.0], // 上面: 緑
  [0.0, 0.0, 1.0, 1.0], // 底面: 青
  [1.0, 1.0, 0.0, 1.0], // 右側面: 黄
  [1.0, 0.0, 1.0, 1.0], // 左側面: 紫
];

// 色の配列をすべての頂点の表に変換すうｒ

var colors = [];

for (var j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];
  // 各色を面の 4 つの頂点に対して 4 回繰り返します。
  colors = colors.concat(c, c, c, c);
}
```

## 要素配列の定義

頂点の配列が生成されたら、要素の配列を構築する必要があります。

> [!NOTE]
> "init-buffer.js" モジュールに以下の関数を追加しましょう。

```js
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // この配列はそれぞれの面を 2 つの三角形として定義しており、
  // 各三角形の位置を指定するために、頂点の配列を指し示す
  // インデックスを使用します。

  const indices = [
    0,
    1,
    2,
    0,
    2,
    3, // 前面
    4,
    5,
    6,
    4,
    6,
    7, // 背面
    8,
    9,
    10,
    8,
    10,
    11, // 上面
    12,
    13,
    14,
    12,
    14,
    15, // 底面
    16,
    17,
    18,
    16,
    18,
    19, // 右側面
    20,
    21,
    22,
    20,
    22,
    23, // 左側面
  ];

  // 要素の配列を GL に渡す

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW,
  );

  return indexBuffer;
}
```

`indices` 配列はそれぞれの面を 2 つの三角形として定義し、それらの三角形の頂点は立方体の頂点の配列に対するインデックスで指定しています。よって、立方体は 12 個の三角形の集合体として表されます。

次に、この新しい関数を `initBuffers()` から呼び出して、作成したバッファー を返す必要があります。

> [!NOTE]
> "init-buffers.js" モジュールの `initBuffers()` 関数の終わりに以下のコードを追加し、既存の `return` 文を置き換えましょう。

```js
const indexBuffer = initIndexBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};
```

## 立方体の描画

次に、立方体のインデックスバッファーを使用して描画するコードを `drawScene()` 関数に追加し、新しい {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} と {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} 呼び出しを追加する必要があります。

> **メモ:** `drawScene()` 関数の中で、 `gl.useProgram` の行の直前に以下のコードを追加しましょう。

```js
// どのインデックスを頂点のインデックスに使用するかを WebGL に指示する
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

> [!NOTE]
> "draw-scene.js" モジュールの `drawScene()` 関数で、 2 つの `gl.uniformMatrix4fv` 呼び出しの後で、 `gl.drawArrays()` 行を含むブロックを以下のブロックに置き換えましょう。

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

立方体の各面は 2 個の三角形で構成されますので、1 面あたり 6 個、立方体全体では 36 個の頂点が存在することになります。ただし、それらの多くは重複しています。

最後に、変数 `squareRotation` を `cubeRotation` に置き換えて、 x 軸周りの 2 つ目の回転を追加してみましょう。

> [!NOTE]
> "webgl-demo.js" ファイルの始めには、 `squareRotation` 宣言を次の行に置き換えましょう。

```js
let cubeRotation = 0.0;
```

> [!NOTE]
> 関数 `drawScene()` の宣言で、 `squareRotation` を `cubeRotation` に置き換えましょう。

```js-nolint
function drawScene(gl, programInfo, buffers, cubeRotation) {
```

> **メモ:** `drawScene()` 関数の `mat4.rotate` 呼び出しを以下のコードに置き換えましょう。

```js
mat4.rotate(
  modelViewMatrix, // 宛先の行列
  modelViewMatrix, // 回転する行列
  cubeRotation, // ラジアンの回転量
  [0, 0, 1],
); // 回転軸 (Z)
mat4.rotate(
  modelViewMatrix, // 宛先の行列
  modelViewMatrix, // 回転する行列
  cubeRotation * 0.7, // ラジアンの回転量
  [0, 1, 0],
); // 回転軸 (Y)
mat4.rotate(
  modelViewMatrix, // 宛先の行列
  modelViewMatrix, // 回転する行列
  cubeRotation * 0.3, // ラジアンの回転量
  [1, 0, 0],
); // 回転軸 (X)
```

> **メモ:** `main()` 関数内で、 `drawScene()` を呼び出して `squareRotation` を更新するコードを、代わりに `cubeRotation` を渡して更新するように置き換えます。

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

これで立方体が回転するアニメーションができ、 6 つの面が鮮やかに色づけされました。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
