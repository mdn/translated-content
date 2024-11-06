---
title: WebGL でのライティング
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

始めに WebGL について理解すべきことは、より広い OpenGL 標準とは異なり、WebGL はライティングをサポートしていないということです。これは自分自身で行う必要があります。幸いそれは難しいことではありませんので、この記事では基礎的な内容を扱います。

## 3D のライティングとシェーディングをシミュレートする

3D グラフィックにおけるシミュレートされたライティングの理論に詳しく触れるのはこの記事の範囲を大きく超えますが、その働きを知るのに役立ちます。ここでは深く触れませんので詳しくは、よく使われるライティングモデルについて解説している Wikipedia の [Phong shading](http://en.wikipedia.org/wiki/Phong_shading) ([日本語版](http://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0)) の記事をご覧ください。

ライティングには 3 種類の基本タイプがあります。

**環境光** は環境全体に当たる光です。これは指向性がなく、環境内の表面に対して、その向きに関係なく均等に効果を与えます。

**指向性光源** は特定の方向から投射される光源です。これは遠方から照らされる光源であり、すべての光線はお互い平行に届きます。例えば太陽光が指向性光源になります。

**点光源** はある一点から全方向に向かって投射される光源です。これは現実にある多くの光源の通常動作です。例えば、電球は全方向に光を投射します。

今回は、単純な指向性光源と環境光のみを考慮することでライティングモデルを単純化します。反射光や点光源は扱いません。そして、環境光と 1 つの指向性光源を[前のデモ](/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)の回転するキューブに当てます。

点光源と反射光の概念を外したことにより、指向性光源を実装するために必要な情報は以下の 2 点になります:

1. 各々の頂点と **面法線** を関連づける必要があります。これは頂点の表面に垂直なベクトルです。
2. 光線が向かう方向を知る必要があります。これは **方向ベクトル** として定義されます。

そしてバーテックスシェーダーを、環境光および表面に当たった角度による指向性光源の効果を考慮して各頂点の色を調整するように更新します。シェーダーのコードを見て、ライティングを行う方法を見ていきましょう。

## 頂点の法線を構築する

始めに行うべきことは、キューブを構成する全頂点の法線の配列を作成することです。キューブは単純なオブジェクトですので、これは簡単にできます。より複雑なオブジェクトの場合は、明らかに法線の計算が難しくなります。

```js
cubeVerticesNormalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);

var vertexNormals = [
  // 前面
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

  // 背面
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

  // 上面
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

  // 底面
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

  // 右側面
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,

  // 左側面
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
];

gl.bufferData(
  gl.ARRAY_BUFFER,
  new WebGLFloatArray(vertexNormals),
  gl.STATIC_DRAW,
);
```

これは、今ではもう見慣れたものでしょう。新しいバッファを作成し、これを作業用の配列にバインドします。そして、`bufferData()` を呼び出して頂点の法線の配列をバッファに送り込みます。

次に、法線の配列をシェーダーの属性にバインドして、シェーダーのコードがその配列にアクセスできるようにするためのコードを `drawScene()` に追加します:

```js
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
```

最後に、シェーダーに対して **正規行列** を生成して渡すための、一様な行列を構築するコードを更新する必要があります。これは、光源に関するキューブの現在の向きを処理する際に法線を変換するのに使用されます:

```js
var normalMatrix = mvMatrix.inverse();
normalMatrix = normalMatrix.transpose();
var nUniform = gl.getUniformLocation(shaderProgram, "uNormalMatrix");
gl.uniformMatrix4fv(
  nUniform,
  false,
  new WebGLFloatArray(normalMatrix.flatten()),
);
```

## シェーダーを更新する

シェーダーが必要とするデータがすべて用意できましたので、次はシェーダーのコードを更新する必要があります。

### バーテックスシェーダー

まずはバーテックスシェーダーを、環境光および指向性光源に基づいて各頂点のシェーディング値を生成するように更新します。以下のコードをご覧ください:

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute highp vec3 aVertexNormal;
  attribute highp vec3 aVertexPosition;
  attribute highp vec2 aTextureCoord;

  uniform highp mat4 uNormalMatrix;
  uniform highp mat4 uMVMatrix;
  uniform highp mat4 uPMatrix;

  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;

    // ライティング効果を適用する

    highp vec3 ambientLight = vec3(0.6, 0.6, 0.6);
    highp vec3 directionalLightColor = vec3(0.5, 0.5, 0.75);
    highp vec3 directionalVector = vec3(0.85, 0.8, 0.75);

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
</script>
```

頂点の位置が算出されると、頂点に対応するテクセルの座標が算出され、頂点のシェーディングの計算ができるようになります。

始めに行うのは、頂点の法線に正規行列を乗じることで、法線を現在のキューブの向きと位置に基づくものに変換することです。次に、変換された法線と方向ベクトル (光線が来る方向) の点乗積を計算することにより、頂点に適用されるべき指向性光源の光量を算出することができます。光量を 0 より小さくすることはできませんので、算出結果が 0 より小さくなった場合は、その値を 0 に固定します。

指向性光源の光量が算出されたら、環境光を取り込みさらに指向性光源の色と光量を足し込むことでライティングの値を決めることができます。この結果、フラグメントシェーダーが描画する各ピクセルの色を調整するために用いる RGB 値を得ることができます。

### フラグメントシェーダー

フラグメントシェーダーは、バーテックスシェーダーが算出した光量の値を考慮するように更新する必要があります:

```js
<script id="shader-fs" type="x-shader/x-fragment">
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    mediump vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
</script>
```

ここでは以前の例で行ったようにテクセルの色を取り出しますが、フラグメントの色を設定する前に、光源の影響を考慮してテクセルの色を調整するため、テクセルの色に光量の値を掛け合わせます。

以上で完成です!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample7/index.html', 670, 510)}}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample7) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample7/)

## 読者への課題

基本的な頂点ごとのライティングを実装した今回の例は、単純なものであることは明らかです。より高度なグラフィックとしてピクセルごとのライティングを実装したいと考えるのは、正しい方向性です。

同様に、光源の方向、光源の色などについても実験してみるとよいでしょう。

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
