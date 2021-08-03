---
title: WebGL 入門
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}<br>
 <a href="http://www.khronos.org/webgl/">WebGL</a> をサポートするブラウザーでは、プラグインを使用することなく HTML <a href="/ja/docs/Web/API/Canvas_API"><code>canvas</code></a> 内で 3D グラフィックスをレンダリングするための、<a href="http://www.khronos.org/opengles/">OpenGL ES</a> 2.0 に基づく API をウェブコンテンツで使用できます。WebGL のプログラムは JavaScript で記述する制御コードと、コンピュータの Graphics Processing Unit (GPU) で実行する特殊効果コード (シェーダーコード) で構成されます。WebGL 要素は他の HTML 要素と混ぜられ、他のページ部品やページの背景と合成されます。</p>

<p>この記事では、WebGL の基礎を紹介します。ここでは、3D グラフィックスに関する数学的な知識を理解していることを前提とします。よって、OpenGL そのものの説明は行いません。</p>

<p>このチュートリアルで使用するコード例は、<a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial">GitHub の webgl-examples リポジトリー</a>で確認できます。</p>

<p>この一連の記事が WebGL 自体を紹介していることに注意してください。ただし <a href="https://threejs.org/">THREE.js</a> など、WebGL の機能をカプセル化する多くのフレームワークが利用でき、3D アプリケーションとゲームを簡単に構築することが可能です。</p>

<h2 id="Preparing_to_render_in_3D" name="Preparing_to_render_in_3D">3D 描画の準備</h2>

<p>レンダリングに WebGL を使用するために最初に必要なのは canvas です。以下の HTML フラグメントは、サンプルが描画される canvas を宣言します。</p>

<pre class="brush: html notranslate">&lt;body&gt;
  &lt;canvas id="glCanvas" width="640" height="480"&gt;&lt;/canvas&gt;
&lt;/body&gt;
</pre>

<h3 id="Preparing_the_WebGL_context" name="Preparing_the_WebGL_context">WebGL コンテキストの準備</h3>

<p>JavaScript コードの <code>main()</code> 関数は、スクリプトがロードされるときに呼び出されます。その目的は、WebGL コンテキストをセットアップし、コンテンツのレンダリングを開始することです。</p>

<pre class="brush: js notranslate">//
// ここからスタート
//
function main() {
  const canvas = document.querySelector("#glCanvas");
  // GL コンテキストを初期化する
  const gl = canvas.getContext("webgl");

  // WebGL が使用可能で動作している場合にのみ続行します
  if (gl === null) {
    alert("WebGL を初期化できません。ブラウザーまたはマシンがサポートしていない可能性があります。");
    return;
  }

  // クリアカラーを黒に設定し、完全に不透明にします
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 指定されたクリアカラーでカラーバッファをクリアします
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;

</pre>

<p>ここで最初に行うことはキャンバスへの参照を取得し、それを <code>canvas</code> という名前の変数に割り当てることです。</p>

<p>キャンバスを取得したら、<a href="/ja/docs/Web/API/HTMLCanvasElement/getContext">getContext</a> を呼び出して文字列 <code>"webgl"</code> を渡すことにより、キャンバスの <a href="/ja/docs/Web/API/WebGLRenderingContext">WebGLRenderingContext</a> を取得しようとします。ブラウザーが webgl をサポートしていない場合、<code>getContext</code> は <code>null</code> を返します。その場合はユーザーにメッセージを表示して終了します。</p>

<p>コンテキストが正常に初期化された場合、変数 <code>gl</code> はそれへの参照です。この場合、クリアカラーを黒に設定し、そのカラーのコンテキストをクリア (背景色でキャンバスを再描画) します。</p>

<p>この時点で、WebGL コンテキストが正常に初期化されるのに十分なコードがあり、コンテンツを受信する準備ができて待機している大きな黒い空のボックスになります。</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample1/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample1">コードを確認する</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample1/">新しいページでデモを開く</a></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://dev.opera.com/articles/introduction-to-webgl-part-1/">An introduction to WebGL</a>: Luz Caballero が著し、dev.opera.com で公開しています。この記事では WebGL とは何かやどのように WebGL が動作するか (レンダリングパイプラインの概念を含む) を説明して、WebGL ライブラリーをいくつか紹介しています。</li>
 <li><a href="http://webglfundamentals.org/">WebGL Fundamentals</a></li>
 <li><a href="http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html">An intro to modern OpenGL:</a> Joe Groff が OpenGL に関するすばらしい記事シリーズを著しており、OpenGL の歴史から重要なグラフィックスパイプラインの概念までの説明、およびどのように OpenGL が動作するかを示すデモを紹介しています。OpenGL の知識を持っていない場合は、ここから始めるとよいでしょう。</li>
</ul>

<div>{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}</div>
