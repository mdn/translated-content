---
title: Three.jsでデモを作る
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
tags:
  - 3D
  - Canvas
  - WebGL
  - three.js
  - アニメーション
  - カメラ
  - ゲーム
  - チュートリアル
  - ライト
  - レンダリング
  - 初心者
translation_of: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
---
<div>{{GamesSidebar}}</div>

<p class="summary">典型的な3Dゲームのシーン――どんなにシンプルなものでも――には、標準的な項目、すなわち座標に配置された物体、それを見るカメラ、より良い見た目を作る照明と質感の設定、生き生きとしたアニメーションなどが含まれているでしょう。<strong>Three.js</strong> は他の3Dライブラリと同じように、一般的な機能を迅速に実装するための組み込み関数を提供します。この記事では、開発環境の設定や必要なHTML構造、3つの基本的なオブジェクトの構築や初歩的なデモの制作方法など、Three を使用する上での基本的なことがらを解説します。</p>

<div class="note">
<p><strong>Note</strong>: 私たちは Three を有名な <a href="/ja/docs/Web/API/WebGL_API">WebGL</a>ライブラリの1つであり、簡単に使い始められるという理由で選びました。Three が他のWebGLライブラリと比べて優秀だというつもりはありません。<a href="http://www.ambiera.com/copperlicht/index.html">CopperLicht</a>, <a href="http://www.glge.org/">GLGE</a>, <a href="http://osgjs.org/">OSG.js</a>, <a href="https://code.google.com/p/o3d/">O3D</a>,その他のあなたが使いやすい物を試すと良いでしょう。</p>
</div>

<h2 id="Environment_setup" name="Environment_setup">環境構築</h2>

<p>あなたがThree.jsで開発を始める上で、必要なものはあまりありません。少なくとも、</p>

<ul>
 <li>最新版の Firefox や Chrome など、良く WebGL をサポートしているモダンブラウザを使用してください。</li>
 <li>デモを保存するディレクトリを用意してください。</li>
 <li><a href="http://threejs.org/build/three.min.js">最新で最小版のThree.js</a> をそのディレクトリに保存してください。</li>
 <li>ブラウザの別のタブで <a href="http://threejs.org/docs/">Three.js documentation</a> を開いてください — 参照するのに便利です。</li>
</ul>

<h2 id="HTML_structure" name="HTML_structure">HTMLの構造</h2>

<p>これが今回使用するHTMLのコードです。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;title&gt;MDN Games: Three.js demo&lt;/title&gt;
	&lt;style&gt;
		body { margin: 0; padding: 0; }
		canvas { width: 100%; height: 100%; }
	&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script src="three.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	/* 私たちの JavaScript コードはここに来ます */
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>このコード内には<code>title</code>のような基本的な情報と<code>canvas</code>要素の幅(<code>width)</code>と高さ(<code>height</code>)を定義する CSS があり、Three.js が全体を使えるようにするために<code>canvas</code>要素が表示領域全体を埋める必要があります。初めの<code>script</code>要素でThree.js ライブラリを埋め込み、2つ目の<code>script</code>要素にサンプルコードを記述していきます。すでに組み込み変数にウィンドウの幅、高さが代入されています。</p>

<p>先に進む前に、このコードを新しいテキストファイルにコピーしデモ用ディレクトリに<code>index.html</code>として保存しましょう。</p>

<h2 id="Renderer" name="Renderer">レンダラ</h2>

<p>レンダラは、ブラウザにおいてシーンを表示する役割を持ちます。デフォルトは WebGL ですが、他にもCanvas や SVG,CSS,DOM といったレンダラがあります。これらは、それぞれシーンがどのようにレンダリングされるかが全く異なり、そのため WebGL と CSS では実装方法が異なります。しかし、レンダリングには様々な方法があるにも関わらず、利用者は全く同じように感じます。この仕組みのおかげで、使いたい技術をブラウザがサポートしていない場合に、サポートされる別のレンダラを使うこともできます。</p>

<pre class="brush: js">var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);
</pre>

<p>新しく WebGL レンダラを作成し、前項で指定した画面いっぱいと同じサイズに設定し、DOM に要素を追加します。あなたは初めの行の <code>antialias</code> というパラメータに気づいたかもしれません。これにより、オブジェクトの境界がよりスムーズにレンダリングされます。また、<code>setClearColor()</code>関数を使って背景色をデフォルトの黒から明るい灰色に変更することができます。</p>

<p>このコードを、<code>index.html</code> の 2番目の {{htmlelement("script")}} 要素として、JavaScript コメント直下に追加しましょう。</p>

<h2 id="Scene" name="Scene">シーン</h2>

<p>シーンは全てが起こる場所です。新たにオブジェクトを作るときは、シーン内にそれを追加することで画面に表示されるようになります。Three.jsではシーンは <code>Scene</code> オブジェクトで表します。前項のコードの下にこれを追加し、シーンを作成しましょう。</p>

<pre class="brush: js">var scene = new THREE.Scene();
</pre>

<p>追加されると、<code>.add()</code>関数を使いオブジェクトをそのシーンに追加できるようになります。</p>

<h2 id="Camera" name="Camera">カメラ</h2>

<p>私たちは既にレンダリングされたシーンは持っていますが、作業の成果を見るにはカメラが必要になります――カメラのない撮影セットを想像すればいいでしょう――。次のコードでは、カメラを3次元座標の指定位置に配置し、オブジェクトの方に向かせることで、何でも見ることができるようになります。</p>

<pre class="brush: js">var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
camera.position.z = 50;
scene.add(camera);
</pre>

<p>前項のコードの下にこのコードを追加しましょう。</p>

<p>カメラは他のタイプ(Cube,Orthographic)も利用できますが、最も簡単なのは Perspective です。これを初期化するには、視野角とアスペクト比を設定する必要があります。前者は見る世界の広さを決め、後者はレンダリングするときにオブジェクトが正しい縦横比で表示されるようにします。上のコードについての解説は以下の通りです。</p>

<ul>
 <li>視野角に70を指定しましたが、様々な値を試すのも良いでしょう。値が高いほど一度に表示される世界が広くなります。魚眼レンズの写真と普通のカメラの写真のような違いです。デフォルトでは50にセットされています。</li>
 <li>アスペクト比はウィンドウの今の縦横比に合わせ、動的に変化します。勿論比率を固定することもできます。例えば、ワイドスクリーンの16:9などです。デフォルト値は1(1:1)です。</li>
 <li>50にセットされた<code>z</code>座標は、カメラとシーンのz軸上の距離を指定します。ここにカメラを置いているので、シーンにあるオブジェクトを眺めることができます。50に指定すれば近すぎたり遠すぎたりせず、オブジェクトのサイズによりますが視野に映ることができるでしょう。<code>x</code>や<code>y</code>(もちろん<code>z</code>も)座標を指定しない場合、デフォルトで0がセットされます。</li>
</ul>

<p>これらのパラメータを調整し、シーンがカメラにどのように映るかを確認する必要があるでしょう。</p>

<div class="note">
<p><strong>Note</strong>: これらの座標（カメラの z 座標など）のパラメータに決まった単位は存在しないため、シーンに適している単位(ミリメートル、メートル、フィートやマイルでも)で構いません。あなたの決めるところです。</p>
</div>

<h2 id="Rendering_the_scene" name="Rendering_the_scene">シーンのレンダリング</h2>

<p>全ての準備が終わりましたが、まだ私たちは何も目にしていません。レンダラを作ったなら、全てをレンダリングしましょう。<code>render()</code>は、そのレンダリングを<code>requestAnimationFrame()</code>の助けを借り行います。このコードは、全フレームで常にシーンがレンダリングされるようになります。</p>

<pre class="brush: js">function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();
</pre>

<p>こうすることで常にフレームからレンダリング処理が呼び出され、レンダラがカメラに映るシーンをレンダリングします。<code>render()</code>を宣言することでこのループが開始され、永遠に続きます。</p>

<p>また、このコードを前項までのコードの下に追加しましょう。ファイルを上書きし、ブラウザで開きます。グレー一色の画面が表示されるでしょう。おめでとうございます！</p>

<h2 id="Geometry" name="Geometry">ジオメトリ</h2>

<p>シーンが正しくレンダリングできることが確認できました。次は、3Dシェイプを追加してみましょう。開発を助けるために、Three.jsにはいくつかのプリミティブなシェイプが既に定義されています。このプリミティブを使うと、1行のコードでシェイプを追加することができます。キューブやボール、円柱、さらに複雑な形状もあります。与えられた図形に必要な頂点、面を描画するような処理はThreeが行うため、開発者はより高度なコーディングに意識を向けることができます。</p>

<p>初めに、キューブのシェイプのジオメトリを定義し、前項の<code>render()</code>の上にこのコードを書きましょう。</p>

<pre class="brush: js">var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
</pre>

<p>このコードでは、10x10x10の簡単な立方体が生成されます。ジオメトリだけでは不十分で、シェイプにはマテリアルが必要です。</p>

<h2 id="Material" name="Material">マテリアル</h2>

<p>マテリアルとは、色やテクスチャとして物体の表面を覆うものです。今回は、前項のキューブに色を付けるためシンプルな青を使います。マテリアルには、Basic,Phong,Lambertといった事前に定義されたものがあります。後で後ろ2つを使ってみましょうか。今はBasicで十分です。</p>

<pre class="brush: js">var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
</pre>

<p>前項で追加した定義の下にこれを追加しましょう。</p>

<p>遂にマテリアルも使えるようになりました。さて、次は何をしますか？</p>

<h2 id="Mesh" name="Mesh">メッシュ</h2>

<p>マテリアルをシェイプのジオメトリに適用させるには、メッシュを使用します。メッシュは、マテリアルをシェイプの表面に適用してくれます。</p>

<pre class="brush: js">var cube = new THREE.Mesh(boxGeometry, basicMaterial);
</pre>

<p>もう一回前項で追加したコードの下にこれを追加しましょう。</p>

<h2 id="Adding_the_cube_to_the_scene" name="Adding_the_cube_to_the_scene">キューブをシーンに追加する</h2>

<p>これまでに、ジオメトリやマテリアルを定義してキューブを作り出しました。最後に私たちが行うべきことはシーンに追加することです。さきほどのコードの下にこれを追加してください。</p>

<pre class="brush: js">scene.add(cube);
</pre>

<p>コードを保存してページをリフレッシュすると、オブジェクトがカメラの方向を向いているのでオブジェクトは正方形に見えます。オブジェクトの良いところは、シーン内で移動できるということです。例えば、私たちの思うままに回転や拡大縮小を行ったり。キューブを少し回転させ、複数の面を見てみましょう。また、コードの下にこれを追加します。</p>

<pre class="brush: js">cube.rotation.set(0.4, 0.2, 0);
</pre>

<p>おめでとうございます、あなたは3Dの世界にオブジェクトを生み出しました！これで、あなたが思うよりも簡単であることは証明できたでしょうか？　きっとこんな画面があることでしょう。</p>

<p><img alt="Blue cube on a gray background rendered with Three.js." src="https://mdn.mozillademos.org/files/11849/cube.png" style="display: block; height: 400px; margin: 0px auto; width: 600px;"></p>

<p>ここまでのサンプルコードは、ここで配布しています。</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}</p>

<p><a href="https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html">GitHubでチェックアウト</a>することもできます。</p>

<h2 id="More_shapes_and_materials" name="More_shapes_and_materials">シェイプやマテリアルの追加</h2>

<p>今度は、シーンにシェイプをさらに追加し、色々なシェイプやマテリアル、ライト等々を探検してみましょう。今のキューブを左に動かし、新たな友人のためのスペースを作ってあげます。また、コードにこれを書き足してください。</p>

<pre class="brush: js">cube.position.x = -25;
</pre>

<p>さて、さらにシェイプとマテリアルを追加しましょう。あなたは Phong マテリアルに覆われたリングに何を加えたいですか？　キューブを定義するコードの下に、次のコードを書き足してみましょう。　</p>

<pre class="brush: js">var torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
var torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
</pre>

<p>これらのコードは、リング状のジオメトリを追加します。<code>TorusGeometry()</code>関数では、半径、管の径、半径の分割数、管の分割数を定義できます。PhongマテリアルはBasicマテリアルより光沢がありますが、今はリングは黒く見えています。</p>

<p>私たちは、事前に定義されたもっと楽しいシェイプを選択できます。もっと遊ぼう。リングを定義するコードの下にこれを書き足しましょう。</p>

<pre class="brush: js">var dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xEAEFF2});
var dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
</pre>

<p>このコードで私たちは、12の面を持つ多面体を追加しました。<code>DodecahedronGeometry()</code>関数では、オブジェクトのサイズを定義することができます。このオブジェクトには Lambert マテリアルを使用しています。これは Phong マテリアルと似ていますが、比べると光沢がありません。しかし、やはりこれも黒に見えます。オブジェクトの座標を右にずらしているので、キューブやリングと違う場所に表示されるでしょう。</p>

<p>先程言ったように、新しいオブジェクトは今黒く見えています。Phong、Lambert マテリアルをきれいに表示するには、ライトを導入しましょう。</p>

<h2 id="Lights" name="Lights">ライト</h2>

<p>Three.jsには様々な種類の光源があります。最も基本的なものは <code>PointLight</code> で、懐中電灯のように光り、決められた方向をスポットライトのように照らします。シェイプの定義の下に、これを書き足しましょう。</p>

<pre class="brush: js">var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);
</pre>

<p>このコードでは、ライトの照らすべき方向を定義し、その方向をシーンの中心から少しずらすことで全てのオブジェクトの一部を照らすようにし、シーンに追加します。これで3つ全てのオブジェクトがきれいに表示されます。ドキュメントでAmbient,Directional,Hemisphere,spotなど他の光源の種類を調べるのも良いでしょう。是非、シーンに別の種類を配置し、影響を見てみてください。</p>

<p><img alt="Shapes: blue cube, dark yellow torus and dark gray dodecahedron on a gray background rendered with Three.js." src="https://mdn.mozillademos.org/files/11851/shapes.png" style="height: 400px; width: 600px;"></p>

<p>しかし、これでは相当退屈です。ゲームの世界は、常に何かが起こっているのです。例えば、アニメーションが表示されたり。だったら、このオブジェクトたちに命を吹き込んで、アニメーションさせてみましょう。</p>

<h2 id="Animation" name="Animation">アニメーション</h2>

<p>私たちはすでに回転を使ってキューブの位置を調節しました。シェイプのスケーリング、位置の変更を行うこともできます。アニメーションを表示するには、レンダリングのループの中で該当する値を変更します。それがフレームごとに反映されます。</p>

<h3 id="Rotation" name="Rotation">回転</h3>

<p>回転の指定は素直です。各フレームで指定された方向に角度を変化させます。このコードを、<code>render()</code>で使った<code>requestAnimationFrame()</code>のあとに追加しましょう。</p>

<pre class="brush: js">cube.rotation.y += 0.01;
</pre>

<p>これで、キューブは毎フレームごとに回転してゆきます。少しずつ。そのため、とても滑らかに見えるでしょう。</p>

<h3 id="Scaling" name="Scaling">スケーリング</h3>

<p>私たちはオブジェクトをスケーリングすることもできます。値を指定することで、それを成長させたり、縮小させたりできます。もっと面白くしましょう。まず、経過時間をカウントする変数 t を実装しましょう。<code>render()</code>の前に追加してください。</p>

<pre class="brush: js">var t = 0;
</pre>

<p>さて、フレームごとに値が増えるようにしましょう。<code>requestAnimationFrame()</code>のすぐ後にこれを書き足しましょう。</p>

<pre class="brush: js">t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
</pre>

<p>私たちは <code>Math.sin</code> を使うことで非常に面白い結果を見ることができました。sin()は周期的な値を返すため、リングは大きくなったり小さくなったりを繰り返します。返り値を <code>Math.abs</code> でラップするため、必ず0以上の値を得ることができます。スケールに負の値が指定されたとき、スケーリングは全く予期できません。もしそうであった場合、半分の時間はリングは真っ黒になったでしょう。</p>

<p>遂に、動かします。</p>

<h3 id="Moving" name="Moving">動く、動く</h3>

<p>回転やスケーリングだけでなく、シーンの中でオブジェクトをさらに自由に動かすこともできます。<code>requestAnimationFrame()</code>のすぐ後にこれを書き足しましょう。</p>

<pre class="brush: js">dodecahedron.position.y = -7*Math.sin(t*2);
</pre>

<p>このコードでは各フレームの y座標に sin() の値を適用することで十二面体を上下に動かします。また、少し調節して、クールに見えるようにしています。この値を変更して、アニメーションにどのような変化が起きるかを見てみるのもよいでしょう。</p>

<h2 id="Conclusion" name="Conclusion">まとめ</h2>

<p>これは最終的なコードです。</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}</p>

<p>あなたは今までのコードを<a href="https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html">GitHubで見る</a>こともできるし、ローカル環境で遊びたいと思ったら<a href="https://github.com/end3r/MDN-Games-3D/">リポジトリをフォークする</a>こともできます。今あなたは Three.js の基本を理解しているでしょう。このページの親ページである <a href="/ja/docs/Games/Techniques/3D_on_the_web">Web上の3Dに関するドキュメント</a>に行くこともできます。</p>

<p>WebGLを実際に触ることで、内部で何が起こっているのかをより理解することもできます。私たちの<a href="/ja/docs/Web/API/WebGL_API">WebGLドキュメンテーション</a>を参考にしてみてください。</p>
