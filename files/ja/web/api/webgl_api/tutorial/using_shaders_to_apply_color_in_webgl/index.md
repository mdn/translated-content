---
title: シェーダーを用いた WebGL での色の指定
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

[前のデモンストレーション](/ja/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)で正方形を作り出すことができたら、次の明確なステップは、それに色をつけることです。これは、シェーダーを変更することで実現できます。

## 頂点に色を適用する

GL ではオブジェクトは頂点の集合を用いて構築され、各頂点は位置と色の情報を持っています。既定では、他のピクセルの色（および位置など、その他の属性すべて）は補完を用いて計算され、自動的になめらかなグラデーションを生成します。前に使用した頂点シェーダーでは頂点に色の情報を適用していませんでした。頂点シェーダーとフラグメントシェーダーで各ピクセルに白色を固定で割り当てており、正方形全体が白一色で描画されました。

例えば、四隅が異なる色（赤、青、緑、白）である正方形にグラデーションを作成したいとします。始めに行うことは、4 つの頂点にこれらの色を設定することです。これを行うには、まず頂点の色の配列を作成し、次にその配列を WebGL のバッファーに格納します。これらは、以下に挙げるコードを `initBuffers()` 関数に追加することで実行します。

> [!NOTE]
> 以下の関数を `init-buffers.js` モジュールに追加してください。

```js-nolint
function initColorBuffer(gl) {
  const colors = [
    1.0,  1.0,  1.0,  1.0,    // 白
    1.0,  0.0,  0.0,  1.0,    // 赤
    0.0,  1.0,  0.0,  1.0,    // 緑
    0.0,  0.0,  1.0,  1.0,    // 青
  ];

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return colorBuffer;
}
```

このコードは、各頂点の色に 1 つずつ、 4 つの 4 値ベクトルを含む JavaScript 配列を作成することから始まります。次に、これらの色を格納するために新しい WebGL バッファーが割り当てられ、配列が浮動小数点数に変換されてバッファーに格納されます。

もちろん、この新しい関数を `initBuffers()` から呼び出して、作成した新しいバッファーを返す必要もあります。

> [!NOTE]
> `initBuffers()` 関数の終わりで、既存の `return` 文の代わりに以下のコードを追加してください。

```js
const colorBuffer = initColorBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
};
```

これらの色を使用するには、カラーバッファーから適切な色を引き出すように頂点シェーダーを更新する必要があります。

> [!NOTE]
> 以下のように `main()` 関数の `vsSource` 宣言を更新してください。

```js
// 頂点シェーダープログラム

const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;
```

ここでの重要な違いは、各頂点に対して、 `varying` を使用してその色をフラグメントシェーダーに渡していることです。

## フラグメントに色をつける

各ピクセルの補間色を取得するために、フラグメントシェーダーを `vColor` から値を取得するように変更する必要があります。

> [!NOTE]
> 以下のように `main()` 関数の `fsSource` 宣言を更新してください。

```js
// フラグメントシェーダープログラム

const fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;
```

これにより各フラグメントは固定値ではなく、頂点からの相対的な位置に基づいて補完された色情報を受け取るようになります。

## 色情報を用いて描画する

次に、色の属性の場所を調べて、シェーダープログラムにその属性を設定するには、コードを追加する必要があります。

> [!NOTE]
> `main()` 関数の `programInfo` 宣言を次のように更新してください。

```js
// シェーダープログラムを使用するために必要な情報をすべて収集します。
// シェーダープログラムが aVertexPosition、aVertexColor にどの属性を
// 使用しているかを調べ、ユニフォームの位置も調べてください。
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
  },
};
```

次に、 `drawScene()` は正方形を描画するときにこれらの色を使用する必要があります。

> [!NOTE]
> 以下の関数を `draw-scene.js` モジュールに追加してください。

```js
// カラーバッファーから vertexColor 属性に色を取り出す方法を WebGL に
// 指示します。
function setColorAttribute(gl, buffers, programInfo) {
  const numComponents = 4;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexColor,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
}
```

> [!NOTE]
> `setColorAttribute()` 関数は、 `drawScene()` から、 `gl.useProgram()` を呼び出す直前に呼ばれます。

```js
setColorAttribute(gl, buffers, programInfo);
```

結果は次のようになるでしょう。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample3/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample3) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
