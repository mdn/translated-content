---
title: シェーダーを用いた WebGL での色の指定
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</p>

<p><a href="/ja/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context">前のデモンストレーション</a>で正方形を作り出すことができたら、次に明らかなステップは、それに色をつけることです。これは、シェーダーを変更することで実現できます。</p>

<h2 id="Applying_color_to_the_vertices" name="Applying_color_to_the_vertices">頂点に色を適用する</h2>

<p>GL ではオブジェクトは頂点のセットを用いて構築され、各頂点は位置と色の情報を持っています。デフォルトでは、他のピクセルの色 (および位置など、その他の属性すべて) は線形補完法を用いて計算され、自動的になめらかなグラデーションを生成します。前に使用したバーテックスシェーダーでは頂点に色の情報を適用していませんでした。バーテックスシェーダーとフラグメントシェーダーで各ピクセルに白色を固定で割り当てており、正方形全体が白一色で描画されました。</p>

<p>例えば、四隅が異なる色 (赤、青、緑、白) である正方形にグラデーションを作成したいとします。始めに行うことは、4 つの頂点にこれらの色を設定することです。これを行うには、まず頂点の色の配列を作成し、次にその配列を WebGL のバッファに格納します。これらは、以下に挙げるコードを <code>initBuffers()</code> 関数に追加することで実行します:</p>

<pre class="brush: js">  var colors = [
    1.0,  1.0,  1.0,  1.0,    // 白
    1.0,  0.0,  0.0,  1.0,    // 赤
    0.0,  1.0,  0.0,  1.0,    // 緑
    0.0,  0.0,  1.0,  1.0     // 青
  ];

  squareVerticesColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
</pre>

<p>このコードは 4 つの値が 4 組含まれている JavaScript の配列を作成することから始まります。各組は、それぞれの頂点の色を示します。続いてこれらの色情報を格納する WebGL バッファを新たに割り当てます。そして、配列を WebGL 浮動小数点数に変換してバッファに格納します。</p>

<p>これらの色情報を実際に使うためには、カラーバッファから適切な色情報を取り出すようにバーテックスシェーダーを変更しなければなりません:</p>

<pre class="brush: html">    &lt;script id="shader-vs" type="x-shader/x-vertex"&gt;
      attribute vec3 aVertexPosition;
      attribute vec4 aVertexColor;

      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;

      varying lowp vec4 vColor;

      void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor;
      }
    &lt;/script&gt;
</pre>

<p>ここでの各頂点に関する重要な違いは、色の配列内で対応する値を、頂点の色情報として設定していることです。</p>

<h2 id="Coloring_the_fragments" name="Coloring_the_fragments">フラグメントに色をつける</h2>

<p>復習として、以前はフラグメントシェーダーを以下のようにしていました:</p>

<pre class="brush: html">    &lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
      void main(void) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    &lt;/script&gt;
</pre>

<p>各ピクセルが補完された色を取り込むようにするため、<code>vColor</code> 変数から値を取り出すようにシェーダーを変更しなければなりません:</p>

<pre class="brush: html">    &lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
    	varying lowp vec4 vColor;

      void main(void) {
        gl_FragColor = vColor;
      }
    &lt;/script&gt;
</pre>

<p>これは単純な変更です。これにより各フラグメントは固定値ではなく、頂点からの相対的な位置に基づいて補完された色情報を受け取ります。</p>

<h2 id="Drawing_using_the_colors" name="Drawing_using_the_colors">色情報を用いて描画する</h2>

<p>次に、シェーダープログラムの色属性を初期化するコードを <code>initShaders()</code> ルーチンに追加しなければなりません:</p>

<pre class="brush: js">  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);
</pre>

<p>そして、実際に色情報を用いて正方形を描画するように drawScene() を変更することが可能になります:</p>

<pre class="brush: js">  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
</pre>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510)}}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3">コードを確認する</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample3/">新しいページでデモを開く</a></p>

<div>{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}</div>
