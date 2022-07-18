---
title: GLSL シェーダー
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
tags:
  - Beginner
  - Fragment Shader
  - GLSL
  - OpenGL
  - Shader
  - WebGL
  - texture shader
  - three.js
  - vertex shader
translation_of: Games/Techniques/3D_on_the_web/GLSL_Shaders
---
<div>{{GamesSidebar}}</div>

<p class="summary">シェーダーは、C と同様の構文を持つ特別な OpenGL シェーディング言語である GLSL (OpenGL Shading Language) を使用します。 GLSL はグラフィックスパイプラインによって直接実行されます。 シェーダーには、頂点 (バーテックス) シェーダーとフラグメント (ピクセル) シェーダーの2種類があります。 頂点シェーダーは、形状の位置を 3D 描画座標に変換します。 フラグメントシェーダーは、形状の色やその他の属性のレンダリングを計算します。</p>

<p>GLSL は JavaScript ほど直感的ではありません。 GLSL は強く型付けされており、ベクトルと行列を含む多くの数学があります。 それは非常に複雑になる可能性があります — 非常に速くも。 この記事では、立方体をレンダリングする簡単なコード例を作成します。 背景となるコードを高速化するために、Three.js API を使用します。</p>

<p><a href="/ja/docs/Games/Techniques/3D_on_the_web/Basic_theory">基本理論</a>の記事から覚えているかもしれませんが、頂点は 3D 座標系の点です。 頂点は追加のプロパティを持つことがあります。 3D 座標系は空間を定義し、頂点はその空間内の形状を定義するのに役立ちます。</p>

<h2 id="shader_types" name="shader_types">シェーダーの種類</h2>

<p>シェーダーは基本的に、画面に何かを描画するために必要な機能です。 シェーダーは、このような操作のために最適化された <a href="https://ja.wikipedia.org/wiki/Graphics_Processing_Unit">GPU</a> (graphics processing unit) で実行されます。 シェーダーの対処に GPU を使用することで、数値計算の一部を CPU から開放します。 これにより、CPU は、コードの実行などの他のタスクに処理能力を集中することができます。</p>

<h3 id="vertex_shader" name="vertex_shader">頂点シェーダー</h3>

<p>頂点シェーダーは 3D 空間の座標を操作し、頂点ごとに1回呼び出されます。 頂点シェーダーの目的は、<code>gl_Position</code> 変数を設定することです。 これは、特別なグローバルな組み込み GLSL 変数です。 <code>gl_Position</code> は、現在の頂点の位置を格納するために使用されます。</p>

<p><code>void main()</code> 関数は、<code>gl_Position</code> 変数を定義する標準的な方法です。 <code>void main()</code> 内のすべては、頂点シェーダーによって実行されます。 頂点シェーダーは、3D 空間での頂点の位置を 2D 画面に投影する方法を含む変数を生成します。</p>

<h3 id="fragment_shader" name="fragment_shader">フラグメントシェーダー</h3>

<p>フラグメント（またはテクスチャー）シェーダーは、処理される各ピクセルの RGBA (赤、緑、青、アルファ) 色を定義します。 単一のフラグメントシェーダーは、ピクセルごとに1回呼び出されます。 フラグメントシェーダーの目的は、<code>gl_FragColor</code> 変数を設定することです。 <code>gl_FragColor</code> は、<code>gl_Position</code> のような組み込みの GLSL 変数です。</p>

<p>計算の結果、RGBA 色に関する情報を含む変数が得られます。</p>

<h2 id="demo" name="demo">デモ</h2>

<p>これらのシェーダーの動作を説明する簡単なデモを作成しましょう。 最初に <a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js">Three.js のチュートリアル</a>を読んで、シーンの概念、そのオブジェクト、およびマテリアルを把握してください。</p>

<div class="note">
<p><strong>Note</strong>: シェーダーを作成するために Three.js やその他のライブラリを使用する必要はなく、純粋な <a href="/ja/docs/Web/API/WebGL_API">WebGL</a> (Web Graphics Library) で十分です。 ここでは Three.js を使用して、背景となるコードを非常に単純でわかりやすくしているため、シェーダーのコードに集中することができます。 Three.js やその他の 3D ライブラリーは、多くのことを抽象化します。 このような例を生の WebGL で作成する場合は、実際に機能させるために多くの追加コードを作成する必要があります。</p>
</div>

<h3 id="Environment_setup" name="Environment_setup">環境設定</h3>

<p>WebGL シェーダーを使うには、それほど多くは必要ありません。 次のことが必要です。</p>

<ul>
 <li>最新の Firefox や Chrome など、<a href="/ja/docs/Web/API/WebGL_API">WebGL</a> を適切にサポートする最新のブラウザーを使用していることを確認してください。</li>
 <li>実験を保存するディレクトリを作成します。</li>
 <li><a href="https://threejs.org/build/three.min.js">最小化された最新の Three.js ライブラリー</a>のコピーをディレクトリ内に保存します。</li>
</ul>

<h3 id="HTML_structure" name="HTML_structure">HTML の構造</h3>

<p>使用する HTML の構造は次のとおりです。</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;title&gt;MDN Games: Shaders demo&lt;/title&gt;
	&lt;style&gt;
		body { margin: 0; padding: 0; font-size: 0; }
		canvas { width: 100%; height: 100%; }
	&lt;/style&gt;
	&lt;script src="three.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;script id="vertexShader" type="x-shader/x-vertex"&gt;
	// vertex shader's code goes here
  &lt;/script&gt;
  &lt;script id="fragmentShader" type="x-shader/x-fragment"&gt;
	// fragment shader's code goes here
  &lt;/script&gt;
  &lt;script&gt;
	// scene setup goes here
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>ドキュメントの {{htmlelement("title")}} のような基本情報と、Three.js がページに挿入する {{htmlelement("canvas")}} 要素の <code>width</code> と <code>height</code> をビューポートのフルサイズに設定するための CSS が含まれています。 {{htmlelement("head")}} の {{htmlelement("script")}} 要素には、ページの Three.js ライブラリーが含まれています。 {{htmlelement("body")}} タグの3つのスクリプトタグにコードを記述します。</p>

<ol>
 <li>最初のものには、頂点シェーダーを含みます。</li>
 <li>2つ目は、フラグメントシェーダーを含みます。</li>
 <li>3つ目は、シーンを生成する実際の JavaScript コードを含みます。</li>
</ol>

<p>先に進む前に、このコードを新しいテキストファイルにコピーして、作業ディレクトリに <code>index.html</code> として保存してください。 このファイルでは、シェーダーがどのように機能するかを説明するために、単純な立方体を特徴とするシーンを作成します。</p>

<h3 id="The_cubes_source_code" name="The_cubes_source_code">立方体のソースコード</h3>

<p>すべてを最初から作成する代わりに、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js">Three.js を使った基本的なデモの構築</a>のソースコードの立方体を再利用できます。 レンダラー、カメラ、ライトなどのほとんどのコンポーネントは同じままですが、基本的なマテリアルの代わりに、シェーダーを使用して立方体の色と位置を設定します。</p>

<p><a href="https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html">GitHub の cube.html ファイル</a>に移動し、2番目の {{htmlelement("script")}} 要素内からすべての JavaScript コードをコピーして、現在の例の3番目の <code>&lt;script&gt;</code> 要素に貼り付けます。 <code>index.html</code> を保存してブラウザーでロードすると、青い立方体が表示されます。</p>

<h3 id="The_vertex_shader_code" name="The_vertex_shader_code">頂点シェーダーのコード</h3>

<p>続けて、簡単な頂点シェーダーを作成しましょう。 ボディの最初の <code>&lt;script&gt;</code> タグ内に以下のコードを追加します。</p>

<pre class="brush: glsl notranslate">void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
</pre>

<p>結果の <code>gl_Position</code> は、モデルビュー行列と射影行列に各ベクトルを乗算して、いずれの場合も最終的な頂点位置を取得することによって計算されます。</p>

<div class="note">
<p><strong>Note</strong>: <a href="/ja/docs/Games/Techniques/3D_on_the_web/Basic_theory#Vertex_processing">頂点処理の段落</a>から、<em>モデル変換</em>、<em>ビュー変換</em>、および<em>投影変換</em>について詳しく知ることができます。 また、この記事の最後にあるリンクからも、詳細を学ぶことができます。</p>
</div>

<p><code>projectionMatrix</code> と <code>modelViewMatrix</code> はどちらも Three.js によって提供され、ベクトルは新しい 3D 位置を渡します。 これにより、元の立方体がシェーダーを介して平行移動され <code>x</code> 軸に沿って 10 単位、<code>z</code> 軸に沿って 5 単位移動します。 4番目のパラメーターは無視して、デフォルトの <code>1.0</code> 値のままにしておくことができます。 これは、3D 空間の頂点位置のクリッピングを操作するために使用されますが、今回のケースでは必要ありません。</p>

<h3 id="The_texture_shader_code" name="The_texture_shader_code">テクスチャーシェーダーのコード</h3>

<p>次に、テクスチャーシェーダーをコードに追加します。 以下のコードをボディの2番目の <code>&lt;script&gt;</code> タグに追加します。</p>

<pre class="brush: glsl notranslate">void main() {
	gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
</pre>

<p>これにより、RGBA 色が設定され、現在の水色が再現されます。 最初の3つの浮動小数点値（<code>0.0</code> から <code>1.0</code> の範囲）は赤、緑、青のチャンネルを表し、4番目の値はアルファ透明度 (<code>0.0</code> の完全に透明から <code>1.0</code> の完全に不透明の範囲) を表します。</p>

<h3 id="Applying_the_shaders" name="Applying_the_shaders">シェーダーの適用</h3>

<p>新しく作成したシェーダーを実際に立方体に適用するには、最初に <code>basicMaterial</code> の定義をコメントアウトします。</p>

<pre class="brush: js notranslate">// var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
</pre>

<p>次に、<a href="http://threejs.org/docs/#Reference/Materials/ShaderMaterial"><code>shaderMaterial</code></a> を作成します。</p>

<pre class="brush: js notranslate">var shaderMaterial = new THREE.ShaderMaterial( {
	vertexShader: document.getElementById( 'vertexShader' ).textContent,
	fragmentShader: document.getElementById( 'fragmentShader' ).textContent
});
</pre>

<p>このシェーダーマテリアルは、スクリプトからコードを取得し、マテリアルが割り当てられているオブジェクトに適用します。</p>

<p>次に、立方体を定義する行で、<code>basicMaterial</code> を置き換える必要があります。</p>

<pre class="brush: js notranslate">var cube = new THREE.Mesh(boxGeometry, basicMaterial);
</pre>

<p>これを、新しく作成した <code>shaderMaterial</code> にします。</p>

<pre class="brush: js notranslate">var cube = new THREE.Mesh(boxGeometry, shaderMaterial);
</pre>

<p>Three.js は、このマテリアルが与えられたメッシュにアタッチされたシェーダーをコンパイルして実行します。 この場合、立方体には頂点シェーダーとテクスチャシェーダーの両方が適用されます。 これで完了です。 可能な限り単純なシェーダーを作成しました。 おめでとう! 立方体は次のようになります。</p>

<p><img alt="Three.js の青い立方体のデモ" src="http://end3r.github.io/MDN-Games-3D/Shaders/img/cube.png" style="display: block; margin: 0px auto;"></p>

<p>見た目は Three.js の立方体のデモとまったく同じですが、シェーダーを使用すると、位置がわずかに異なり、青色が同じになります。</p>

<h2 id="Final_code" name="Final_code">最終的なコード</h2>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;script src="https://end3r.github.io/MDN-Games-3D/Shaders/js/three.min.js"&gt;&lt;/script&gt;
&lt;script id="vertexShader" type="x-shader/x-vertex"&gt;
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
    }
&lt;/script&gt;
&lt;script id="fragmentShader" type="x-shader/x-fragment"&gt;
    void main() {
        gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
    }
&lt;/script&gt;
</pre>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xDDDDDD, 1);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
    camera.position.z = 50;
    scene.add(camera);

    var boxGeometry = new THREE.BoxGeometry(10, 10, 10);

    var shaderMaterial = new THREE.ShaderMaterial( {
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent
    });

    var cube = new THREE.Mesh(boxGeometry, shaderMaterial);
    scene.add(cube);
    cube.rotation.set(0.4, 0.2, 0);

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css notranslate">body { margin: 0; padding: 0; font-size: 0; }
canvas { width: 100%; height: 100%; }
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Final_code', '100%', '400', '', 'Games/Techniques/3D_on_the_web/GLSL_Shaders') }}</p>

<h2 id="Conclusion" name="Conclusion">結び</h2>

<p>この記事では、シェーダーの基本について説明しました。 私たちの例ではあまり多くのことをしていませんが、シェーダーでできるクールなことがもっとたくさんあります。 <a href="http://shadertoy.com/">ShaderToy</a> で本当にクールなものをチェックして、インスピレーションを得て、それらのソースから学んでください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217">WebGL の学習</a> — 一般的な WebGL の知識について (アーカイブ、英語、和訳あり)</li>
 <li><a href="http://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html">WebGL の基本での WebGL のシェーダーと GLSL</a> — GLSL 固有の情報について (英語、和訳あり)</li>
</ul>
