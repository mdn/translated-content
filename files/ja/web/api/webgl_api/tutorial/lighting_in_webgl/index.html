---
title: WebGL でのライティング
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}</p>

<p>始めに WebGL について理解すべきことは、より広い OpenGL 標準とは異なり、WebGL はライティングをサポートしていないということです。これは自分自身で行う必要があります。幸いそれは難しいことではありませんので、この記事では基礎的な内容を扱います。</p>

<h2 id="Simulating_lighting_and_shading_in_3D" name="Simulating_lighting_and_shading_in_3D">3D のライティングとシェーディングをシミュレートする</h2>

<p>3D グラフィックにおけるシミュレートされたライティングの理論に詳しく触れるのはこの記事の範囲を大きく超えますが、その働きを知るのに役立ちます。ここでは深く触れませんので詳しくは、よく使われるライティングモデルについて解説している Wikipedia の <a href="http://en.wikipedia.org/wiki/Phong_shading">Phong shading</a> (<a class="external" href="http://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0">日本語版</a>) の記事をご覧ください。</p>

<p>ライティングには 3 種類の基本タイプがあります。</p>

<p><strong>環境光</strong> は環境全体に当たる光です。これは指向性がなく、環境内の表面に対して、その向きに関係なく均等に効果を与えます。</p>

<p><strong>指向性光源</strong> は特定の方向から投射される光源です。これは遠方から照らされる光源であり、すべての光線はお互い平行に届きます。例えば太陽光が指向性光源になります。</p>

<p><strong>点光源</strong> はある一点から全方向に向かって投射される光源です。これは現実にある多くの光源の通常動作です。例えば、電球は全方向に光を投射します。</p>

<p>今回は、単純な指向性光源と環境光のみを考慮することでライティングモデルを単純化します。反射光や点光源は扱いません。そして、環境光と1つの指向性光源を<a href="/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL">前のデモ</a>の回転するキューブに当てます。</p>

<p>点光源と反射光の概念を外したことにより、指向性光源を実装するために必要な情報は以下の 2 点になります:</p>

<ol>
 <li>各々の頂点と <strong>面法線</strong> を関連づける必要があります。これは頂点の表面に垂直なベクトルです。</li>
 <li>光線が向かう方向を知る必要があります。これは <strong>方向ベクトル</strong> として定義されます。</li>
</ol>

<p>そしてバーテックスシェーダーを、環境光および表面に当たった角度による指向性光源の効果を考慮して各頂点の色を調整するように更新します。シェーダーのコードを見て、ライティングを行う方法を見ていきましょう。</p>

<h2 id="Building_the_normals_for_the_vertices" name="Building_the_normals_for_the_vertices">頂点の法線を構築する</h2>

<p>始めに行うべきことは、キューブを構成する全頂点の法線の配列を作成することです。キューブは単純なオブジェクトですので、これは簡単にできます。より複雑なオブジェクトの場合は、明らかに法線の計算が難しくなります。</p>

<pre class="brush: js">cubeVerticesNormalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);

var vertexNormals = [
  // 前面
   0.0,  0.0,  1.0,
   0.0,  0.0,  1.0,
   0.0,  0.0,  1.0,
   0.0,  0.0,  1.0,

  // 背面
   0.0,  0.0, -1.0,
   0.0,  0.0, -1.0,
   0.0,  0.0, -1.0,
   0.0,  0.0, -1.0,

  // 上面
   0.0,  1.0,  0.0,
   0.0,  1.0,  0.0,
   0.0,  1.0,  0.0,
   0.0,  1.0,  0.0,

  // 底面
   0.0, -1.0,  0.0,
   0.0, -1.0,  0.0,
   0.0, -1.0,  0.0,
   0.0, -1.0,  0.0,

  // 右側面
   1.0,  0.0,  0.0,
   1.0,  0.0,  0.0,
   1.0,  0.0,  0.0,
   1.0,  0.0,  0.0,

  // 左側面
  -1.0,  0.0,  0.0,
  -1.0,  0.0,  0.0,
  -1.0,  0.0,  0.0,
  -1.0,  0.0,  0.0
];

gl.bufferData(gl.ARRAY_BUFFER, new WebGLFloatArray(vertexNormals), gl.STATIC_DRAW);
</pre>

<p>これは、今ではもう見慣れたものでしょう。新しいバッファを作成し、これを作業用の配列にバインドします。そして、<code>bufferData()</code> を呼び出して頂点の法線の配列をバッファに送り込みます。</p>

<p>次に、法線の配列をシェーダーの属性にバインドして、シェーダーのコードがその配列にアクセスできるようにするためのコードを <code>drawScene()</code> に追加します:</p>

<pre class="brush: js">gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
</pre>

<p>最後に、シェーダーに対して <strong>正規行列</strong> を生成して渡すための、一様な行列を構築するコードを更新する必要があります。これは、光源に関するキューブの現在の向きを処理する際に法線を変換するのに使用されます:</p>

<pre class="brush: js">var normalMatrix = mvMatrix.inverse();
normalMatrix = normalMatrix.transpose();
var nUniform = gl.getUniformLocation(shaderProgram, "uNormalMatrix");
gl.uniformMatrix4fv(nUniform, false, new WebGLFloatArray(normalMatrix.flatten()));
</pre>

<h2 id="Update_the_shaders" name="Update_the_shaders">シェーダーを更新する</h2>

<p>シェーダーが必要とするデータがすべて用意できましたので、次はシェーダーのコードを更新する必要があります。</p>

<h3 id="The_vertex_shader" name="The_vertex_shader">バーテックスシェーダー</h3>

<p>まずはバーテックスシェーダーを、環境光および指向性光源に基づいて各頂点のシェーディング値を生成するように更新します。以下のコードをご覧ください:</p>

<pre class="brush: html">&lt;script id="shader-vs" type="x-shader/x-vertex"&gt;
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
&lt;/script&gt;
</pre>

<p>頂点の位置が算出されると、頂点に対応するテクセルの座標が算出され、頂点のシェーディングの計算ができるようになります。</p>

<p>始めに行うのは、頂点の法線に正規行列を乗じることで、法線を現在のキューブの向きと位置に基づくものに変換することです。次に、変換された法線と方向ベクトル (光線が来る方向) の点乗積を計算することにより、頂点に適用されるべき指向性光源の光量を算出することができます。光量を 0 より小さくすることはできませんので、算出結果が 0 より小さくなった場合は、その値を 0 に固定します。</p>

<p>指向性光源の光量が算出されたら、環境光を取り込みさらに指向性光源の色と光量を足し込むことでライティングの値を決めることができます。この結果、フラグメントシェーダーが描画する各ピクセルの色を調整するために用いる RGB 値を得ることができます。</p>

<h3 id="The_fragment_shader" name="The_fragment_shader">フラグメントシェーダー</h3>

<p>フラグメントシェーダーは、バーテックスシェーダーが算出した光量の値を考慮するように更新する必要があります:</p>

<pre class="brush: js">&lt;script id="shader-fs" type="x-shader/x-fragment"&gt;
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    mediump vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
&lt;/script&gt;
</pre>

<p>ここでは以前の例で行ったようにテクセルの色を取り出しますが、フラグメントの色を設定する前に、光源の影響を考慮してテクセルの色を調整するため、テクセルの色に光量の値を掛け合わせます。</p>

<p>以上で完成です!</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample7/index.html', 670, 510)}}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample7">コードを確認する</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample7/">新しいページでデモを開く</a></p>

<h2 id="Exercises_for_the_reader" name="Exercises_for_the_reader">読者への課題</h2>

<p>基本的な頂点ごとのライティングを実装した今回の例は、単純なものであることは明らかです。より高度なグラフィックとしてピクセルごとのライティングを実装したいと考えるのは、正しい方向性です。</p>

<p>同様に、光源の方向、光源の色などについても実験してみるとよいでしょう。</p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}</p>
