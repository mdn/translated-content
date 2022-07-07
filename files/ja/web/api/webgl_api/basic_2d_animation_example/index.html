---
title: 基本的な 2D WebGL アニメーションの例
slug: Web/API/WebGL_API/Basic_2D_animation_example
tags:
  - 2D Animation
  - 2D Graphics
  - Animation
  - Drawing
  - Example
  - WebGL
  - WebGL API
translation_of: Web/API/WebGL_API/Basic_2D_animation_example
---
<div>{{WebGLSidebar}}</div>

<div id="live-sample">
<p>この WebGL の例では、キャンバスを作成し、その中に WebGL を使用して回転する四角形をレンダリングします。シーンを表すために使用する座標系は、キャンバスの座標系と同じです。つまり、(0, 0) は左上隅にあり、右下隅は (600, 460) となります。</p>

<h2 id="Vertex_shader" name="Vertex_shader">頂点シェーダー</h2>

<p>まず頂点シェーダーを見てみましょう。いつものように、シーンに使用している座標をクリップスペース座標に変換することです (つまり (0, 0) がコンテキストの中心にあり、コンテキストの実際のサイズに関係なく各軸が -1.0 から 1.0 に伸びるシステムです)</p>

<pre class="brush: html">&lt;script id="vertex-shader" type="x-shader/x-vertex"&gt;
  attribute vec2 aVertexPosition;

  uniform vec2 uScalingFactor;
  uniform vec2 uRotationVector;

  void main() {
    vec2 rotatedPosition = vec2(
      aVertexPosition.x * uRotationVector.y +
            aVertexPosition.y * uRotationVector.x,
      aVertexPosition.y * uRotationVector.y -
            aVertexPosition.x * uRotationVector.x
    );

    gl_Position = vec4(rotatedPosition * uScalingFactor, 0.0, 1.0);
  }
&lt;/script&gt;</pre>

<p>メインプログラムは属性 <code>aVertexPosition</code> を共有します。これは使用している座標系の頂点の位置です。位置の両方のコンポーネントが -1.0 から 1.0 の範囲になるように、これらの値を変換する必要があります。これは、コンテキストのアスペクト比に基づいたスケーリング係数を掛けることで簡単に実行できます。この計算については、後ほど説明します。</p>

<p>形状も回転し、変換を適用することでそれを行うことができます。最初にそれを行います。頂点の回転位置は、JavaScript コードによって計算された均一な <code>uRotationVector</code> にある回転ベクトルを適用して計算されます。</p>

<p>次に、<code>uScalingFactor</code> の JavaScript コードによって提供されるスケーリングベクトルを回転位置に乗算することにより、最終位置が計算されます。2D で描画しているため、<code>z</code> と <code>w</code> の値はそれぞれ 0.0 と 1.0 に固定されています。</p>

<p>次に、標準 WebGL グローバル変数の <code>gl_Position</code> へ変換および回転された頂点の位置を設定します。</p>

<h2 id="Fragment_shader" name="Fragment_shader">フラグメントシェーダー</h2>

<p>次はフラグメントシェーダーです。その役割はレンダリングされる形状の各ピクセルの色を返すことです。ライティングが適用されていない、テクスチャのないソリッドオブジェクトを描画しているため、これは非常に簡単です:</p>

<pre class="brush: html">&lt;script id="fragment-shader" type="x-shader/x-fragment"&gt;
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform vec4 uGlobalColor;

  void main() {
    gl_FragColor = uGlobalColor;
  }
&lt;/script&gt;</pre>

<p>これは必要に応じて <code>float</code> 型の精度を指定することから始まります次に uniform 修飾子付きの <code>uGlobalColor</code> の値をグローバル変数 <code>gl_FragColor</code> へ設定します。これは、JavaScript コードにより正方形の描画に使用される色に設定されます。</p>

<h2 id="HTML" name="HTML">HTML</h2>

<p>HTML は、WebGL コンテキストを取得する {{HTMLElement("canvas")}} のみで構成されています。</p>

<pre class="brush: html">&lt;canvas id="glcanvas" width="600" height="460"&gt;
  Oh no! Your browser doesn't support canvas!
&lt;/canvas&gt;</pre>

<h2 id="JavaScript" name="JavaScript">JavaScript</h2>

<h3 id="Globals_and_initialization" name="Globals_and_initialization">グローバル変数と初期化</h3>

<p>まず、グローバル変数。ここではこれらについては説明しません。代わりに、今後のコードで使用される場合について説明します。</p>

<pre class="brush: js">let gl = null;
let glCanvas = null;

// Aspect ratio and coordinate system
// details

let aspectRatio;
let currentRotation = [0, 1];
let currentScale = [1.0, 1.0];

// Vertex information

let vertexArray;
let vertexBuffer;
let vertexNumComponents;
let vertexCount;

// Rendering data shared with the
// scalers.

let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

// Animation timing

let previousTime = 0.0;
let degreesPerSecond = 90.0;
</pre>

<p>プログラムの初期化は <code>startup()</code> と呼ばれる {{event("load")}} イベントハンドラーによって処理します:</p>

<pre class="brush: js">window.addEventListener("load", startup, false);

function startup() {
  glCanvas = document.getElementById("glcanvas");
  gl = glCanvas.getContext("webgl");

  const shaderSet = [
    {
      type: gl.VERTEX_SHADER,
      id: "vertex-shader"
    },
    {
      type: gl.FRAGMENT_SHADER,
      id: "fragment-shader"
    }
  ];

  shaderProgram = buildShaderProgram(shaderSet);

  aspectRatio = glCanvas.width/glCanvas.height;
  currentRotation = [0, 1];
  currentScale = [1.0, aspectRatio];

  vertexArray = new Float32Array([
      -0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
      -0.5, 0.5, 0.5, -0.5, -0.5, -0.5
  ]);

  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);

  vertexNumComponents = 2;
  vertexCount = vertexArray.length/vertexNumComponents;

  currentAngle = 0.0;
  rotationRate = 6;

  animateScene();
}</pre>

<p>WebGL コンテキスト <code>gl</code> を取得し、シェーダープログラムを構築することから始める必要があります。ここでは、プログラムに複数のシェーダーを非常に簡単に追加できるように設計されたコードを使用しています。配列 <code>shaderSet</code> にはオブジェクトのリストが含まれ、各オブジェクトはプログラムにコンパイルされる 1 つのシェーダー関数を記述しています。各関数には、タイプ (<code>gl.VERTEX_SHADER</code> または <code>gl.FRAGMENT_SHADER</code> のいずれか) と ID (シェーダーのコードを含む {{HTMLElement("script")}} 要素の ID)。</p>

<p>シェーダーセットは <code>buildShaderProgram()</code> 関数に渡され、コンパイルされリンクされたシェーダープログラムを返します。次にこれがどのように機能するかを見ていきます。</p>

<p>シェーダープロシェグラムが構築し、幅を高さで割ってからコンテキストのアスペクト比を計算します。次に、アニメーションの現在の回転ベクトルを <code>[0, 1]</code> に設定し、スケーリングベクトルを <code>[1.0, aspectRatio]</code> に設定します。頂点シェーダーで見たスケーリングベクトルは、-1.0 から 1.0 の範囲に合うように座標をスケーリングするために使用されます。</p>

<p>次に頂点の配列が {{jsxref("Float32Array")}} として作成され、三角形ごとに 6 つの座標 (3 つの 2D 頂点) が描画され、合計 12 個の値が作成されます。</p>

<p>ご覧のとおり、各軸に -1.0 〜 1.0 の座標系を使用しています。なぜ調整する必要があるのでしょうか？これは単にコンテキストが正方形ではないためです。幅 600 ピクセル、高さ 460 のコンテキストを使用しています。これらの各ディメンションは、-1.0 〜 1.0 の範囲にマッピングされます。2 つの軸は同じ長さではないため、2 つの軸のいずれかの値を調整しないと、正方形は一方または他方に引き伸ばされます。したがって、これらの値を正規化する必要があります。</p>

<p>頂点配列が作成されたら、{{domxref("WebGLRenderingContext.createBuffer", "gl.createBuffer()")}} を呼び出し、それらを含む新しい GL バッファーを作成します。{{domxref("WebGLRenderingContext.bindBuffer", "gl.bindBuffer()")}} を呼び出して標準の WebGL 配列バッファー参照をバインドし、{{domxref("WebGLRenderingContext.bufferData", "gl.bufferData()")}} を使用して頂点データをバッファーにコピーします。<code>gl.STATIC_DRAW</code> の使用法が指定されており、データは 1 回だけ設定され、変更されることはありませんが、繰り返し使用されることを WebGL に伝えます。これにより、WebGL は、その情報に基づいてパフォーマンスを向上させる可能性のある、適用可能な最適化を検討します。</p>

<p>WebGL に提供される頂点データを使用して、<code>vertexNumComponents</code> を各頂点のコンポーネントの数 (2D 頂点であるため 2) に設定し、<code>vertexCount</code> を頂点リストの頂点の数に設定します。</p>

<p>次に、まだ回転を実行していないため、現在の回転角度 (度) を 0.0 に設定し、回転速度 (画面の更新期間ごとの度、通常 60 FPS) を 6 に設定します。</p>

<p>最後に、<code>animateScene()</code> が呼び出されて、最初のフレームをレンダリングし、アニメーションの次のフレームのレンダリングをスケジュールします。</p>

<h3 id="Compiling_and_linking_the_shader_program" name="Compiling_and_linking_the_shader_program">シェーダープログラムのコンパイルとリンク</h3>

<h4 id="Constructing_and_linking_the_program" name="Constructing_and_linking_the_program">プログラムの構築とリンク</h4>

<p><code>buildShaderProgram()</code> 関数は、シェーダープログラムにコンパイルおよびリンクされるシェーダー関数のセットを記述するオブジェクトの配列を入力として受け取り、ビルドおよびリンク後にシェーダープログラムを返します。</p>

<pre class="brush: js">function buildShaderProgram(shaderInfo) {
  let program = gl.createProgram();

  shaderInfo.forEach(function(desc) {
    let shader = compileShader(desc.id, desc.type);

    if (shader) {
      gl.attachShader(program, shader);
    }
  });

  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log("Error linking shader program:");
    console.log(gl.getProgramInfoLog(program));
  }

  return program;
}</pre>

<p>まず、{{domxref("WebGLRenderingContext.createProgram", "gl.createProgram()")}} は新しい空の GLSL プログラムを作成するために呼び出されます。</p>

<p>次に、指定されたシェーダーのリスト内の各シェーダーに対して、<code>compileShader()</code> 関数を呼び出してコンパイルし、ビルドするシェーダー関数のIDとタイプを渡します。前述のように、これらの各オブジェクトには、シェーダーコードが存在する <code>&lt;script&gt;</code> 要素の ID とシェーダーのタイプが含まれます。コンパイルされたシェーダーは、{{domxref("WebGLRenderingContext.attachShader", "gl.attachShader()")}} へ渡すことでシェーダープログラムにアタッチされます。</p>

<div class="note">
<p>実際には、ここよりさらに一歩進んで、<code>&lt;script&gt;</code> 要素の <code>type</code> 属性の値を見て、シェーダーのタイプを判断できます。</p>
</div>

<p>すべてのシェーダーがコンパイルされると、{{domxref("WebGLRenderingContext.linkProgram", "gl.linkProgram()")}} を使用してプログラムがリンクされます。</p>

<p>プログラムのリンク中にエラーが発生した場合、エラーメッセージはコンソールに記録されます。</p>

<p>最後に、コンパイルされたプログラムが呼び出し元に返されます。</p>

<h4 id="Compiling_an_individual_shader" name="Compiling_an_individual_shader">個々のシェーダーをコンパイルする</h4>

<p>以下の <code>compileShader()</code> 関数は、単一のシェーダーをコンパイルするために <code>buildShaderProgram()</code> によって呼び出されます。</p>

<pre class="brush: js">function compileShader(id, type) {
  let code = document.getElementById(id).firstChild.nodeValue;
  let shader = gl.createShader(type);

  gl.shaderSource(shader, code);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log(`Error compiling ${type === gl.VERTEX_SHADER ? "vertex" : "fragment"} shader:`);
    console.log(gl.getShaderInfoLog(shader));
  }
  return shader;
}</pre>

<p>コードは指定された ID を持つ {{HTMLElement("script")}} 要素内に含まれるテキストノードの値を取得することにより、HTML ドキュメントから取得されます。次に {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}} を使用して、指定されたタイプの新しいシェーダーが作成されます。</p>

<p>ソースコードは {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}} を通して新しいシェーダーに送信され、そのときシェーダーは {{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}} を使用してコンパイルされます。</p>

<p>コンパイルエラーはコンソールに記録されます。生成されるメッセージに正しいシェーダータイプの文字列を挿入するための<a href="/ja/docs/Web/JavaScript/Reference/Template_literals">テンプレートリテラル</a>文字列の使用に注意してください。実際のエラーの詳細は、{{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}}を呼び出すことによって取得されます。</p>

<p>最後に、コンパイルされたシェーダーが呼び出し元 (<code>buildShaderProgram()</code> 関数) へ返します。</p>

<h3 id="Drawing_and_animating_the_scene" name="Drawing_and_animating_the_scene">シーンの描画とアニメーション化</h3>

<p><code>animateScene()</code> 関数は各アニメーションフレームをレンダリングするために呼び出されます。</p>

<pre class="brush: js">function animateScene() {
  gl.viewport(0, 0, glCanvas.width, glCanvas.height);
  gl.clearColor(0.8, 0.9, 1.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  let radians = currentAngle * Math.PI / 180.0;
  currentRotation[0] = Math.sin(radians);
  currentRotation[1] = Math.cos(radians);

  gl.useProgram(shaderProgram);

  uScalingFactor =
      gl.getUniformLocation(shaderProgram, "uScalingFactor");
  uGlobalColor =
      gl.getUniformLocation(shaderProgram, "uGlobalColor");
  uRotationVector =
      gl.getUniformLocation(shaderProgram, "uRotationVector");

  gl.uniform2fv(uScalingFactor, currentScale);
  gl.uniform2fv(uRotationVector, currentRotation);
  gl.uniform4fv(uGlobalColor, [0.1, 0.7, 0.2, 1.0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  aVertexPosition =
      gl.getAttribLocation(shaderProgram, "aVertexPosition");

  gl.enableVertexAttribArray(aVertexPosition);
  gl.vertexAttribPointer(aVertexPosition, vertexNumComponents,
        gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.TRIANGLES, 0, vertexCount);

  window.requestAnimationFrame(function(currentTime) {
    let deltaAngle = ((currentTime - previousTime) / 1000.0)
          * degreesPerSecond;

    currentAngle = (currentAngle + deltaAngle) % 360;

    previousTime = currentTime;
    animateScene();
  });
}</pre>

<p>アニメーションのフレームを描画するために最初に行う必要があるのは、背景を目的の色にクリアすることです。この場合、{{HTMLElement("canvas")}} のサイズに基づいてビューポートを設定し、{{domxref("WebGLRenderingContext.clearColor", "clearColor()")}} を呼び出して使用する色を設定します。コンテンツをクリアするとき、{{domxref("WebGLRenderingContext.clear", "clear()")}} でバッファーをクリアします。</p>

<p>次に、現在の回転ベクトルは、現在の回転角度 (<code>currentAngle</code>) を {{interwiki("wikipedia", "ラジアン")}} に変換し、回転ベクトルの最初のコンポーネントを {{interwiki("wikipedia", "三角関数", "sin")}} に設定し、2 番目のコンポーネントを {{interwiki("wikipedia", "三角関数", "cos")}} へ設定します。<code>currentRotation</code> ベクトルは、現在の角度 <code>currentAngle</code> にある {{interwiki("wikipedia", "単位円")}} 上のポイントの位置です。</p>

<p>{{domxref("WebGLRenderingContext.useProgram", "useProgram()")}} は、以前に確立した GLSL シェーディングプログラムをアクティブにするために呼び出されます。次に、JavaScript コードとシェーダー間 ({{domxref("WebGLRenderingContext.getUniformLocation", "getUniformLocation()")}} を使用) で情報を共有するために使用される各 uniform の位置を取得します。</p>

<p><code>uScalingFactor</code> という名前の uniform は、以前に計算された <code>currentScale</code> 値に設定されます。覚えているかもしれませんが、これはコンテキストのアスペクト比に基づいて座標系を調整するために使用される値です。これは {{domxref("WebGLRenderingContext.uniform2fv", "uniform2fv()")}} を使用して行われます (これは 2 値の浮動小数点ベクトルであるため)。</p>

<p><code>uRotationVector</code> は、同じく <code>uniform2fv()</code> を使用して、現在の回転ベクトル (<code>currentRotation</code>) に設定されます。</p>

<p><code>uGlobalColor</code> は {{domxref("WebGLRenderingContext.uniform4fv", "uniform4fv()")}} を使用して、正方形を描画するときに使用する色に設定されます。これは 4 コンポーネントの浮動小数点ベクトルです (赤、緑、青、およびアルファごとに 1 つのコンポーネント)。</p>

<p>これですべてが終ったので、頂点バッファーを設定して形状を描画できます。まず、{{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}} を呼び出すことにより、形状の三角形の描画に使用される頂点のバッファーを設定します。次に、{{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}} を呼び出して、シェーダープログラムから頂点位置属性のインデックスを取得します。</p>

<p>頂点位置属性のインデックスが <code>aVertexPosition</code> で利用可能になったので、<code>enableVertexAttribArray()</code> を呼び出して位置属性を有効にし、シェーダープログラム (特に頂点シェーダー) で使用できるようにします。</p>

<p>次に、{{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}} を呼び出すことにより、頂点バッファーが <code>aVertexPosition</code> 属性にバインドされます。このステップはほとんど副作用であるため、このステップは明らかではありません。ただし、結果として、<code>aVertexPosition</code> にアクセスすると、頂点バッファーからデータを取得するようになります。</p>

<p>シェイプの頂点バッファーと頂点を 1 つずつ頂点シェーダーに配信するために使用される <code>aVertexPosition</code> 属性との間に関連付けがあれば、{{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}} を呼び出してシェイプを描画する準備が整います。</p>

<p>この時点で、フレームが描画されました。あとは、次の描画をスケジュールするだけです。ここでは {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出して、ブラウザーが画面を更新する準備ができたときにコールバック関数を実行するように要求します。</p>

<p><code>requestAnimationFrame()</code> コールバックは、フレーム描画が開始された時間を指定する単一のパラメーター <code>currentTime</code> を入力として受け取ります。それと、最後のフレームが描画された保存時間、<code>previousTime</code>、および正方形が回転する1秒あたりの度数 (<code>degreesPerSecond</code>) を使用して、<code>currentAngle</code> の新しい値を計算します。次に、<code>previousTime</code> の値が更新され、<code>animateScene()</code> を呼び出して次のフレームを描画します (そして、次のフレームが描画されるように無限にスケジュールします )。</p>
</div>

<h2 id="Result" name="Result">結果</h2>

<p>これは 1 つの単純なオブジェクトを描画しているだけの非常に単純な例ですが、ここで使用されている概念ははるかに複雑なアニメーションに拡張されます。</p>

<p>{{EmbedLiveSample("live-sample", 660, 500)}}</p>

<h2 id="See_also" name="See_also">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebGL_API">WebGL API</a></li>
 <li><a href="/ja/docs/Web/API/WebGL_API/Tutorial">WebGL チュートリアル</a></li>
</ul>
