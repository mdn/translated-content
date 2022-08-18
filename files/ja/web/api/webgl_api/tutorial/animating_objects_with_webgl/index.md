---
title: WebGL でのオブジェクトのアニメーティング
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>

<p>前の例で作成したコードはすでに、WebGL のシーンを 15 ミリ秒ごとに再描画するよう設定されています。今までは単純に、毎回同じものをそのまま再描画していました。これから、正方形が実際に動くようにコードを変えていきます。</p>

<p>今回の例では 2D の正方形を 3 次元空間で、実際に回転や移動させます。これにより、作成したのは 2D のオブジェクトですが、それは 3D 空間に存在していることが証明されます。</p>

<h2 id="Making_the_square_rotate" name="Making_the_square_rotate">正方形を回転させる</h2>

<p>正方形を回転させてみましょう。始めに、正方形の回転をたどる変数が必要です:</p>

<pre class="brush: js">var squareRotation = 0.0;
</pre>

<p>そして、描画する際に正方形に回転を適用するよう、<code>drawScene()</code> 関数を更新することが必要です。正方形の初期描画位置に移した後、回転を以下のように適用します:</p>

<pre class="brush: js">mvPushMatrix();
mvRotate(squareRotation, [1, 0, 1]);
</pre>

<p>これを現在のモデルビュー行列に保存し、そして行列を現在の <code>squareRotation</code> の値を基に、X 軸および Z 軸で回転させます。</p>

<p>描画後は、元の行列に戻さなければなりません:</p>

<pre class="brush: js">  mvPopMatrix();
</pre>

<p>後に描画する別のオブジェクトを回転させてしまうことを防ぐために、元の行列を保存および復元します。今回の例では他に描画するものがありませんので、これは役目がありません。</p>

<p>実際に動かすために、時間がたつにつれて <code>squareRotation</code> の値を変えていくコードを追加しなければなりません。これは最後にアニメーションを行った時刻を追跡する新たな変数 (<code>lastSquareUpdateTime</code> と呼びましょう) を作成することで実現できるので、<code>drawScene()</code> 関数の末尾に以下のコードを追加します。:</p>

<pre class="brush: js">  var currentTime = Date.now();
  if (lastSquareUpdateTime) {
  	var delta = currentTime - lastSquareUpdateTime;

  	squareRotation += (30 * delta) / 1000.0;
  }

  lastSquareUpdateTime = currentTime;
</pre>

<p>このコードは正方形をどれだけ回転させるかを決めるために、最後に <code>squareRotation</code> の値を更新してから経過した時間を使用しています。</p>

<h2 id="Making_the_square_move" name="Making_the_square_move">正方形を動かす</h2>

<p>同様に、描画前に位置情報を変えていくことで正方形を移動させることができます。以下の例で、いくつかの基本的なアニメーションを行ってみます (当然ながら、実際はここまで極端に動かそうとは思わないでしょう) 。</p>

<p>新しい変数で、移動する際の各軸のオフセットをたどりましょう:</p>

<pre class="brush: js">var squareXOffset = 0.0;
var squareYOffset = 0.0;
var squareZOffset = 0.0;
</pre>

<p>また、各軸の値をどれだけ変化させるかを以下の変数で示します:</p>

<pre class="brush: js">var xIncValue = 0.2;
var yIncValue = -0.4;
var zIncValue = 0.3;
</pre>

<p>そして先ほどの回転させるサンプルコードを、以下のコードを追加して更新します:</p>

<pre class="brush: js">    squareXOffset += xIncValue * ((30 * delta) / 1000.0);
    squareYOffset += yIncValue * ((30 * delta) / 1000.0);
    squareZOffset += zIncValue * ((30 * delta) / 1000.0);

    if (Math.abs(squareYOffset) &gt; 2.5) {
      xIncValue = -xIncValue;
      yIncValue = -yIncValue;
      zIncValue = -zIncValue;
    }
</pre>

<p>最後に、以下のコードを <code>drawScene()</code> 関数に追加します:</p>

<pre class="brush: js">mvTranslate([squareXOffset, squareYOffset, squareZOffset]);</pre>

<p>以上で、正方形が回転するとともにズームイン・ズームアウトしながら、環境内を近づいたり遠ざかったりするようランダムに動き回ります。これはスクリーンセーバーのようです。</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample4/index.html', 670, 510)}}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample4">コードを確認する</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample4/">新しいページでデモを開く</a></p>

<h2 id="More_matrix_operations" name="More_matrix_operations">さらに行列を操作する</h2>

<p>この例は、行列をスタックから取り出す・スタックへ格納する 2 つのルーチンや、与えられた角度の値に基づいて行列を回転させるルーチンといった、高度な行列操作を行っています。参考として、以下にそれを掲載します:</p>

<pre class="brush: js">var mvMatrixStack = [];

function mvPushMatrix(m) {
  if (m) {
    mvMatrixStack.push(m.dup());
    mvMatrix = m.dup();
  } else {
    mvMatrixStack.push(mvMatrix.dup());
  }
}

function mvPopMatrix() {
  if (!mvMatrixStack.length) {
    throw("空の行列スタックからポップすることはできません。");
  }

  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, v) {
  var inRadians = angle * Math.PI / 180.0;

  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
  multMatrix(m);
}
</pre>

<p>これらのルーチンは、以前 Vlad Vukićević 氏が記述されたサンプルより取り入れています。</p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>
