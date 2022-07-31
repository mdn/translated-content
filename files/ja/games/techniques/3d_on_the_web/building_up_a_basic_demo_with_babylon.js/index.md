---
title: Building up a basic demo with Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
translation_of: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
---
<div>{{GamesSidebar}}</div>

<p class="summary">Babylon.jsは開発者に使われている最も有名な3Dゲームエンジンです。他のどんな3Dと同様に、より迅速に共通の3D機能を実装するのを助けるプラグイン機能を提供します。この記事ではBabylon.jsを使った基礎を通じて開発環境の構築、必要なHTML構造、JavaScriptの書き方を提供します。</p>

<p>はじめに、簡単なデモを作ることに挑戦します。 — 立方体をレンダリングさせます。もしThree.js、PlayCanvas、A-Frame（もしくは同様の他の3Dライブラリー）と一緒に基本的なデモシリーズをすでに動かしていたら、camera、light、といったオブジェクト達と同様のコンセプトが動くことをBabylon.jsで気づくかも知れません。</p>

<h2 id="環境構築">環境構築</h2>

<p>Babylon.jsの開発を始めるにあたって、そんなに多くのものを必要としません。以下によってすぐに始めるべきです。:</p>

<ul>
 <li>最新のFirefoxやChromeと言った十分なWebGLのサポートのあるモダンブラウザを使っていることを確かめて下さい。</li>
 <li>作業用のディレクトリを作成して下さい。</li>
 <li>ディレクトリに最新のBabylon.jsエンジンをコピーして保存して下さい。</li>
 <li>Babylon.jsドキュメントを別のタブに開いて下さい。 — 参照するのに役に立ちます。</li>
</ul>

<h2 id="HTML構造">HTML構造</h2>

<p>ここに使うHTMLの構造を示します: </p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;MDN Games: Babylon.js demo&lt;/title&gt;
    &lt;style&gt;
        html,body,canvas { margin: 0; padding: 0; width: 100%; height: 100%; font-size: 0; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script src="babylon.js"&gt;&lt;/script&gt;
&lt;canvas id="render-canvas"&gt;&lt;/canvas&gt;
&lt;script&gt;
    var canvas = document.getElementById("render-canvas");
    /* all our JavaScript code goes here */
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>ここには文書の {{htmlelement("title")}} (タイトル) や、Babylon.js がその内容を描画するための{{htmlelement("canvas")}} 要素の幅や高さが利用可能なビューポート領域全体を占めるようにする CSS など、文書の基本的な情報が含まれています。 初めの{{htmlelement("script")}}要素はBabylon.jsに含みます。; サンプルコードを次に書いていきます。 これらはすでに含まれていて可変な一つの助けになります。そしてそれは、<code>&lt;canvas&gt;要素の参照を保存していくものになります。</code>.</p>

<p>読み続ける前に<code>index.html</code>.として、作業ディレクトリに新しいテキストファイルとしてこのコードをコピーして下さい。</p>

<h2 id="Babylon.jsエンジンの初期化">Babylon.jsエンジンの初期化</h2>

<p>はじめに、ゲームの開発を始める前にBabylon.jsエンジンのインスタンスを作らなければなりません。(レンダーするための<code>&lt;canvas&gt;要素を省きます</code> )  次の<code>&lt;script&gt;要素のボタンのコードを次に付け加えます</code>:</p>

<pre class="brush: js">var engine = new BABYLON.Engine(canvas);
</pre>

<p>BABYLONグローバルオブジェクトはエンジンにおいてすべてのBabylon.js機能を可能にするものを含みます。</p>

<h2 id="sceneの作成">sceneの作成</h2>

<p>sceneはゲームのコンテンツを表示する場所です。デモの新しいオブジェクトを作成する一方でscreenでそれらが見えるようにするためにそこにすべてをsceneに付け加えます。ちょうど以下のようなコードに従って次の行を加えることでsceneを作ってみましょう。:</p>

<pre class="brush: js">var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
</pre>

<p> </p>

<p>このようにsceneは作られて、2番目の行を書いてバックグラウンドカラーをグレーにします。</p>

<h2 id="レンダリングのループを作る">レンダリングのループを作る</h2>

<p>sceneが見えるようにするためにレンダーをしなければなりません。<code>&lt;script&gt;要素で終わるこれらの要素を加えてちょうど&lt;/script&gt;の前で閉じます。</code></p>

<pre class="brush: js">var renderLoop = function () {
    scene.render();
};
engine.runRenderLoop(renderLoop);

</pre>

<p>エンジンの<code>runRenderLoop()メソッドが使われるとrenderLoop()関数がフレームの中で繰り返し実行されます。ループは止めろという命令があるまで永久に繰り返しレンダーが行われます。</code></p>

<h2 id="cameraの作成">cameraの作成</h2>

<p>セットアップコードは標準的なsceneの構成要素であるcameraやlightやオブジェクトを実行するためのものが必要な場所です。cameraをはじめましょう。— 以下の行をあなたのコードに加えましょうこの行はsceneを作成したり、<code>clearColor</code>.を定義するための行です。</p>

<pre class="brush: js">var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);
</pre>

<p> </p>

<p>Babylon.jsにはたくさんのcameraを可能にするものがあります。<code>FreeCameraは最も基本的で普遍的なものの1つです。初期化するために3つのパラメータを通す必要があります。</code>:<code>どんな名前で使いたいか、3Dで示したい座標、加えたいシーン。</code></p>

<div class="note">
<p><strong>Note</strong>: あなたはここで使う <code>BABYLON.Vector3()メソッドに注意を払うだろう</code>  — この定義はsceneでの3Dの位置を決めるものである。 Babylon.js は完全な数学のライブラリーをバンドルしていて、それはベクトル、色、行列などを操作するものなのである。</p>
</div>

<h2 id="lightをここに置きます">lightをここに置きます</h2>

<p>Babylon.jsには様々なlightソースがあります。最も基本的なものの1つに<code>PointLightがあり、それはフラッシュライトのような働きをします。</code> — 与えられた方向からスポットライトを照らします。カメラの定義の下に次の行を加えましょう。</p>

<pre class="brush: js">var light = new BABYLON.PointLight("light", new BABYLON.Vector3(10, 10, 0), scene);

</pre>

<p>パラメーターはカメラの定義に非常によく似ています。:lightの名前、3D空間の位置、ライトを与えたいscene。</p>

<h2 id="幾何構造">幾何構造</h2>

<p>今、sceneが適当で3Dを形作ることができるようになって、レンダリングします。Babylon.jsのさらなる開発のスピードアップのために単一文のコードで即座に形作ることのできる前定義の原始的なまとまりを提供する必要があります。これらは立方体で球体で円柱でもっと複雑な形状を形作ることも可能です。それでは、箱形の幾何構造の設定を始めてみましょう。---次のように新しいコードを加えてみましょう。</p>

<pre class="brush: js">var box = BABYLON.Mesh.CreateBox("box", 2, scene);
</pre>

<p> </p>

<p>メッシュは幾何学的形状を作り出すエンジンの方法です。ですのでmaterialはあとからこれらを適応することを簡単にすることができます。この場合ではサイズが2であることやsceneに加えたい宣言やを含んだMesh.CreateBoxメソッドを用いることで箱形を創りあげることができます。</p>

<p> </p>

<div class="note">
<p><strong>Note</strong>: サイズや位置の値は（例えば箱形のサイズ）は単位がなく、基本的にあなたのsceneに適していると考えられるすべてのものにできます。---ミリメーター、メーター、フィート、あるいはマイル ---あなたができるもののうち</p>
</div>

<p>もし、ファイルを保存して、ブラウザをリフレッシュを今できれば、正方形を見ることができるでしょう。なぜならcameraに焦点が当たっているからです。オブジェクトにとって良いことはscene上にそれらを動かすことができることです。しかしながら望めば例えば回転や拡大・縮小を行うことができます。それでは箱形を少し回転させてみましょう。それからさらにもう一つの面をみることができます。 --- 以下のようなこれらの行を付け加えて下さい。</p>

<p> </p>

<pre class="brush: js">box.rotation.x = -0.2;
box.rotation.y = -0.4;
</pre>

<p> </p>

<p>同時にこれらの箱は黒く見えます。なぜなら面にmaterialを定義していないからです。それでは次で扱いましょう。</p>

<h2 id="Material">Material</h2>

<p>Materialはオブジェクトを覆うものです。---カラーや表面のテクスチャといったものです。この場合では単純な青を箱形に塗ります。これらには使うことのできるたくさんのタイプのmaterialがありますが今は標準的なものをすれば十分です。以下のようなこれらの行を加えて下さい。</p>

<pre class="brush: js">var boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
</pre>

<p> </p>

<p>StandardMaterialは2つのパラメータを持ちます。:名前、付け加えたいsceneの名前。二つ目の行はemissiveColorを定義するものです。 --- 我々に見えるようにするものの一つ。機能を定義するためにColor3のビルトインを使うことができます。三番目の行は箱形のmaterialを新しく作り出す割り当てをします。</p>

<p>おめでとう。Babylon.jsの環境を使った3Dのオブジェクトを初めて創り出しました。あなたが考えているよりも簡単にできたのではないでしょうか？ここにどのように見えるべきか示します。</p>

<p><img alt="Blue Babylon.js 3D box on the gray background." src="https://end3r.github.io/MDN-Games-3D/Babylon.js/img/cube.png" style="display: block; height: 490px; margin: 0px auto; width: 600px;"></p>

<p>そして今まで作ったコードはここです。</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/9zoeo5sy/","","350")}}</p>

<p><a href="https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/cube.html">ここでGithubでもみることができます。</a></p>

<h2 id="もっと形に変化を加える">もっと形に変化を加える</h2>

<p>もうすでにscene上に箱形があります。;さらに形に変化を加えていきましょう。</p>

<h3 id="トーラス">トーラス</h3>

<p>さらにトーラスを加えていきましょう。次の以下のような行を加えて下さい。</p>

<pre class="brush: js">var torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
</pre>

<p> </p>

<p>これはトーラスを創り出し、sceneを付け加えます。パラメーターはname（名前）、diameter（直径）、 thickness（厚さ）、 tessellation（セグメントの数）そして付け加えるscene。左に少し位置を置いたり、もっとよく見えるようにx軸を回転します。さあ、materialを追加しましょう。</p>

<p> </p>

<pre class="brush: js">var torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
</pre>

<p> </p>

<p>それは箱の要素のように見えます。 — 　標準的なmaterialを作っています。灰色にしたり、トーラスの配分をしていっています。</p>

<p> </p>

<h3 id="円柱">円柱</h3>

<p>円柱をもう作っていて、トーラスを作ったのと同じ方法でもうすでに正確にmaterialがなされています。スクリプトの一番下にもう一度次のコードを加えましょう。</p>

<pre class="brush: js">var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;
var cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
</pre>

<p> </p>

<p>円柱のパラメーターはname（名前）、height（高さ）、 diameter（頂点の倍率）、diameter（底の倍率）, tessellation（テッセレーション）, height subdivisions（高さの分割）、そして加えたいscene。それから立方体をちょっと右に位置したり、ちょっと回転させたり、3Dの形に見えるようにしたり、黄色のmaterialを与えたりします。</p>

<p>今ここでsceneが右に見えるようになるべきです。</p>

<p><img alt="Light gray torus, blue box and yellow cylinder created with Babylon.js on the gray background." src="https://end3r.github.io/MDN-Games-3D/Babylon.js/img/shapes.png" style="display: block; height: 210px; margin: 0px auto; width: 600px;"></p>

<p>これは動きますが、少し退屈です。ゲームの中ではいつも何か起こります。 — 　アニメーションを見ることができます。—　それではそれらのアニメーションによって、それらの形に命を生まれさせましょう。</p>

<h2 id="アニメーション">アニメーション</h2>

<p>私たちはすでに形作る位置に適当なpositionやrotationといったものを使うことができます。私たちはそれらをスケールすることもできました。正確なアニメーションを示すために、コードの終わりのレンダリングのループの内側にこれらの値の変化を作る必要があります。なのでそれらはすべてのフレームで更新されます。ちょうどrenderLoopの前にアニメーションを使うだろうための助けになる可変的な---t---を定義して下さい。そしてこのようにループの内側にすべてのフレームにおいてそれを減じて下さい。</p>

<p> </p>

<pre class="brush: js">var t = 0;
var renderLoop = function () {
    scene.render();
    t -= 0.01;
    // animation code goes here
};
engine.runRenderLoop(renderLoop);
</pre>

<p> </p>

<p>可変的なtはすべてのレンダーされたフレーム上で値が増えていくでしょう。</p>

<p> </p>

<h3 id="回転">回転</h3>

<p>回転を適応していくには、renderLoopファンクションの終わりにこの行を追加していくのと同じくらい簡単です。:</p>

<pre class="brush: js">box.rotation.y = t*2;
</pre>

<p> </p>

<p>y軸に沿って箱が回転していくでしょう。</p>

<h3 id="スケーリング">スケーリング</h3>

<p>以前にトーラスをスケールした一つの下にこの行を加えましょう。</p>

<p> </p>

<pre class="brush: js">torus.scaling.z = Math.abs(Math.sin(t*2))+0.5;
</pre>

<p> </p>

<p>これらはアニメーションの見た目や感覚を良くするためのちょっとした調整です。値によってどのようにアニメーションが魅力的に見えるか経験することができます。</p>

<h3 id="Moving">Moving</h3>

<p>円柱の位置を直接動かすことによってシーン上で私たちは円柱を動かすことができます。過去の一つの下にこの行を加えましょう。</p>

<pre class="brush: js">cylinder.position.y = Math.sin(t*3);
</pre>

<p> </p>

<p>Math.sin()ファンクションのおかげで円柱がy軸に沿って沈んだり浮かんだりするでしょう。</p>

<h2 id="結論">結論</h2>

<p>見ることのできるライブの例に沿って、ここに最終的なコードを載せます。</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/8r66fdvp/","","350")}}</p>

<p>もし、自分でローカル環境で自分自身で行いたい場合は、<a href="https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/shapes.html"> GitHub</a> をみたり、<a href="https://github.com/end3r/MDN-Games-3D/">repository</a> をフォークするこができます。今やあなたはBabylon.jsエンジンの基礎を知り、幸せな演習をしました。</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="http://learningbabylonjs.com/">Learning Babylon.js book</a></li>
</ul>
