---
title: シェーダーを用いた WebGL での色の指定
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

[前のデモンストレーション](/ja/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)で正方形を作り出すことができたら、次に明らかなステップは、それに色をつけることです。これは、シェーダーを変更することで実現できます。

## 頂点に色を適用する

GL ではオブジェクトは頂点のセットを用いて構築され、各頂点は位置と色の情報を持っています。デフォルトでは、他のピクセルの色 (および位置など、その他の属性すべて) は線形補完法を用いて計算され、自動的になめらかなグラデーションを生成します。前に使用したバーテックスシェーダーでは頂点に色の情報を適用していませんでした。バーテックスシェーダーとフラグメントシェーダーで各ピクセルに白色を固定で割り当てており、正方形全体が白一色で描画されました。

例えば、四隅が異なる色 (赤、青、緑、白) である正方形にグラデーションを作成したいとします。始めに行うことは、4 つの頂点にこれらの色を設定することです。これを行うには、まず頂点の色の配列を作成し、次にその配列を WebGL のバッファに格納します。これらは、以下に挙げるコードを `initBuffers()` 関数に追加することで実行します:

```js
  var colors = [
    1.0,  1.0,  1.0,  1.0,    // 白
    1.0,  0.0,  0.0,  1.0,    // 赤
    0.0,  1.0,  0.0,  1.0,    // 緑
    0.0,  0.0,  1.0,  1.0     // 青
  ];

  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
```

このコードは 4 つの値が 4 組含まれている JavaScript の配列を作成することから始まります。各組は、それぞれの頂点の色を示します。続いてこれらの色情報を格納する WebGL バッファを新たに割り当てます。そして、配列を WebGL 浮動小数点数に変換してバッファに格納します。

これらの色情報を実際に使うためには、カラーバッファから適切な色情報を取り出すようにバーテックスシェーダーを変更しなければなりません:

```html
    <script id="shader-vs" type="x-shader/x-vertex">
      attribute vec3 aVertexPosition;
      attribute vec4 aVertexColor;

      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;

      varying lowp vec4 vColor;

      void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor;
      }
    </script>
```

ここでの各頂点に関する重要な違いは、色の配列内で対応する値を、頂点の色情報として設定していることです。

## フラグメントに色をつける

復習として、以前はフラグメントシェーダーを以下のようにしていました:

```html
    <script id="shader-fs" type="x-shader/x-fragment">
      void main(void) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    </script>
```

各ピクセルが補完された色を取り込むようにするため、`vColor` 変数から値を取り出すようにシェーダーを変更しなければなりません:

```html
    <script id="shader-fs" type="x-shader/x-fragment">
      varying lowp vec4 vColor;

      void main(void) {
        gl_FragColor = vColor;
      }
    </script>
```

これは単純な変更です。これにより各フラグメントは固定値ではなく、頂点からの相対的な位置に基づいて補完された色情報を受け取ります。

## 色情報を用いて描画する

次に、シェーダープログラムの色属性を初期化するコードを `initShaders()` ルーチンに追加しなければなりません:

```js
  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);
```

そして、実際に色情報を用いて正方形を描画するように drawScene() を変更することが可能になります:

```js
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
```

{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510)}}

[コードを確認する](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3) | [新しいページでデモを開く](http://mdn.github.io/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
