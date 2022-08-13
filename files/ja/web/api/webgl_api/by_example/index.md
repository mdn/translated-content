---
title: 実例による WebGL
slug: Web/API/WebGL_API/By_example
tags:
  - Beginner
  - Example
  - Graphics
  - Learn
  - WebGL
translation_of: Web/API/WebGL_API/By_example
---
<div>{{learnsidebar}}{{IncludeSubnav("/ja/Learn")}}</div>

<p>{{Next("Learn/WebGL/By_example/Detect_WebGL")}}</p>

<div id="webgl-by-example">
<div class="summary">
<p>実例による WebGL は、WebGL の概念と機能を短く説明する一連の実例サンプルです<span class="seoSummary">。</span>実例はトピックと難易度順に従って並んでおり、WebGL レンダリングコンテキスト、シェダープログラミング、テクスチャ、ジオメトリ、ユーザーインタラクションなどを網羅しています。</p>
</div>

<div id="webgl-by-example-big-list">
<h2 id="Examples_by_topic" name="Examples_by_topic">トピック別の実例</h2>

<p>実例は難易度の低い順に並んでいます。単なる長い一覧ではなく、トピックごとにさらに分割された内容になっています。最初に基本レベル、後に中級や上級レベルで話し合う必要がある時など、トピックを何度か見直す事があります。</p>

<p>シェーダー、ジオメトリ、{{Glossary("GPU")}}メモリーを使って処理する代わりに、最初のプログラムでは実例で WebGL を少しずつ理解を深めていきます。私たちはそれがより効果的な学習体験に繋がり、最終的には概念の深い理解に繋がると信じています。</p>

<p>実例に関する説明は本文とコード内のコメントの両方にあります。より高度な実例では、以前に説明したコードのコメントは繰り返さないため、すべてのコメントを読んでコードを理解しておく必要があります。</p>

<div>
<h3 id="Getting_to_know_the_rendering_context" name="Getting_to_know_the_rendering_context">レンダリングコンテキストを知る</h3>

<dl>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Detect_WebGL">WebGL を検出する</a></dt>
 <dd>この例では{{Glossary("WebGL")}}レンダリングコンテキストを検出して、結果をユーザーに描画します</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Clearing_with_colors">カラーのクリア</a></dt>
 <dd>単色でレンダリングコンテキストをクリアします</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Clearing_by_clicking">クリックしてクリア</a></dt>
 <dd>ユーザー操作とグラフィック操作を組み合わせる方法です。ユーザーがクリックした時にレンダリングコンテキストをランダムなカラーでクリアします</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Simple_color_animation">単純なカラーアニメーション</a></dt>
 <dd>基本的なカラーアニメーションで、毎秒ごとに異なったランダムなカラーで{{Glossary("WebGL")}}描画バッファをクリアする事によって行われます</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Color_masking">カラーマスキング</a></dt>
 <dd>カラーマスキングを適用して、表示色の範囲を特定の色合いに制限する事によってランダムな色を修正します</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Basic_scissoring">基本的な切り取り</a></dt>
 <dd>切り取り操作で単純な長方形や正方形を描きます</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Canvas_size_and_WebGL">キャンバスサイズと WebGL</a></dt>
 <dd>この例ではブラウザーウィンドウに描画されるように、キャンバスサイズを{{Glossary("CSS")}}ピクセル単位の要素サイズに設定する（または設定しない）影響について理解を深めていきます</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Boilerplate_1">定型文1</a></dt>
 <dd>WebGL の初期化をより簡単に行う JavaScript ユーティリティ関数の定義について説明します。このコードは繰り返しになるためこれから表示しなくなります</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Scissor_animation">切り取りアニメーション</a></dt>
 <dd>切り取りやクリア操作の楽しいアニメーション</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Raining_rectangles">雨のように長方形を降らせる</a></dt>
 <dd>単色のクリア、切り取り、アニメーション、ユーザーインタラクションをデモする単純なゲーム</dd>
</dl>
</div>

<div>
<h3 id="Shader_programming_basics" name="Shader_programming_basics">シェーダープログラミングの基本</h3>

<dl>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Hello_GLSL">Hello GLSL</a></dt>
 <dd>単色の正方形を描画する基本的なシェーダープログラミング</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Hello_vertex_attributes">Hello vertex attributes</a></dt>
 <dd>頂点属性によるシェーダプログラミングとユーザーインタラクションの結合</dd>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Textures_from_code">Textures from code</a></dt>
 <dd>フラグメントシェーダを使用した手続き型テクスチャリングの簡単なデモ</dd>
</dl>
</div>

<div>
<h3 id="Miscellaneous_advanced_examples" name="Miscellaneous_advanced_examples">その他、高度な実例</h3>

<dl>
 <dt><a href="/ja/docs/Learn/WebGL/By_example/Video_textures">Video textures</a></dt>
 <dd>この例ではビデオファイルをテクスチャとして使用します</dd>
</dl>
</div>
</div>
</div>

<p>{{Next("Learn/WebGL/By_example/Detect_WebGL")}}</p>
