---
title: WebGL を用いた 3D オブジェクトの作成
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

正方形に 5 つの面を追加して立体化し、キューブを作成しましょう。これを効率的に行うために、`gl.drawArrays()` メソッドを呼び出して頂点情報を直接使用する描画方法から、頂点の配列をテーブルとして扱い、`gl.drawElements()` を呼び出して、そのテーブルの各頂点情報を参照して各面の頂点を定義する方法に切り替えます。

留意点: それぞれの面について 4 個の頂点を定義しなければなりませんが、各頂点は 3 つの面で共有されます。24 個の頂点すべてのリスト構築することで、やり取りするデータを少なくできます。そして座標を指示するには、座標の完全なセットを渡すのではなく、リストのインデックスを用いて座標を指し示します。なぜ頂点が 8 個ではなく 24 個必要かと考えるかもしれません。これは、それぞれの角に色が異なる 3 つの面が接しており、ひとつの頂点は特定の 1 色しか持たないためです。従って各頂点について、面ごとに色が異なる 3 つのコピーを作成します。

## キューブの頂点の位置を定義する

始めに `initBuffers()` のコードを更新して、キューブの頂点の位置のバッファを作成します。この方法は正方形を作る場合と同じですが、24 個の座標 (1 面につき 4 個) がありますのでコードはとても長くなります:

```js
var vertices = [
  // 前面
  -1.0, -1.0,  1.0,
   1.0, -1.0,  1.0,
   1.0,  1.0,  1.0,
  -1.0,  1.0,  1.0,

  // 背面
  -1.0, -1.0, -1.0,
  -1.0,  1.0, -1.0,
   1.0,  1.0, -1.0,
   1.0, -1.0, -1.0,

  // 上面
  -1.0,  1.0, -1.0,
  -1.0,  1.0,  1.0,
   1.0,  1.0,  1.0,
   1.0,  1.0, -1.0,

  // 底面
  -1.0, -1.0, -1.0,
   1.0, -1.0, -1.0,
   1.0, -1.0,  1.0,
  -1.0, -1.0,  1.0,

  // 右側面
   1.0, -1.0, -1.0,
   1.0,  1.0, -1.0,
   1.0,  1.0,  1.0,
   1.0, -1.0,  1.0,

  // 左側面
  -1.0, -1.0, -1.0,
  -1.0, -1.0,  1.0,
  -1.0,  1.0,  1.0,
  -1.0,  1.0, -1.0
];
```

## 頂点の色を定義する

24 個の座標それぞれについて、色の配列を作成しなければなりません。このコードでは始めに各面の色を定義します。次にループを用いてこれらの配列を各頂点の色情報に変換しています。

```js
var colors = [
  [1.0,  1.0,  1.0,  1.0],    // 前面: 白
  [1.0,  0.0,  0.0,  1.0],    // 背面: 赤
  [0.0,  1.0,  0.0,  1.0],    // 上面: 緑
  [0.0,  0.0,  1.0,  1.0],    // 底面: 青
  [1.0,  1.0,  0.0,  1.0],    // 右側面: 黄
  [1.0,  0.0,  1.0,  1.0]     // 左側面: 紫
];

var generatedColors = [];

for (j=0; j<6; j++) {
  var c = colors[j];

  for (var i=0; i<4; i++) {
    generatedColors = generatedColors.concat(c);
  }
}

var cubeVerticesColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesColorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(generatedColors), gl.STATIC_DRAW);
```

## エレメント配列を定義する

頂点の配列を生成したら、次にエレメントの配列を作成します。

```js
var cubeVerticesIndexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);

// この配列はそれぞれの面を 2 つの三角形として定義しており、
// 各三角形の位置を指定するために、頂点の配列を指し示す
// インデックスを使用します。

var cubeVertexIndices = [
  0,  1,  2,      0,  2,  3,    // 前面
  4,  5,  6,      4,  6,  7,    // 背面
  8,  9,  10,     8,  10, 11,   // 上面
  12, 13, 14,     12, 14, 15,   // 底面
  16, 17, 18,     16, 18, 19,   // 右側面
  20, 21, 22,     20, 22, 23    // 左側面
];

// エレメントの配列を GL に渡す

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
```

`cubeVertexIndices` 配列はそれぞれの面を 2 つの三角形として定義し、それら三角形の頂点はキューブの頂点の配列に対するインデックスで指定しています。よって、キューブは 12 個の三角形の集合体として表されます。

## キューブを描画する

次に `drawScene()` 関数に、キューブのインデックスバッファを用いて描画するためのコードを追加する必要がありますので、新たな `bindBuffer()` および `drawElements()` の呼び出しを追加します:

```js
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
setMatrixUniforms();
gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
```

キューブの各面は 2 個の三角形で構成されますので、1 面あたり 6 個・キューブ全体では 36 個の頂点が存在することになります。ただし、それらの多くは重複しています。しかし、インデックスの配列は単なる数値のみで構成されていますので、アニメーションのフレームごとに渡すデータの量が過度に多くなることはありません。

以上で、6 つの面が鮮やかな色で塗られたキューブが回転しながら跳ね回るアニメーションが完成しました。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
