---
title: Canvas チュートリアル
slug: Web/API/Canvas_API/Tutorial
tags:
  - Canvas
  - Graphics
  - Guide
  - HTML
  - HTML5
  - Intermediate
  - Web
translation_of: Web/API/Canvas_API/Tutorial
---
<div>{{CanvasSidebar}}</div>

<div><a href="/ja/docs/Web/API/Canvas_API"><img alt="" src="canvas_tut_examples.jpg" style="float: right; margin-left: 10px; margin-right: 10px;"></a></div>

<div class="summary">
<p><a href="/ja/docs/Web/HTML/Element/canvas"><strong><code>&lt;canvas&gt;</code></strong></a> 要素は、スクリプト (一般的に <a href="/ja/docs/Glossary/JavaScript">JavaScript</a>) を使って図形を描くために使われる新しい <a href="/ja/docs/Web/HTML">HTML</a> 要素です。例えば、グラフを描く、写真を合成する、または簡単な (または<a href="/ja/docs/Web/API/Canvas_API/A_basic_ray-caster">あまり簡単ではない</a>) アニメーションに使うことができます。このページの画像は後でこのチュートリアルの中でみる <a href="/ja/docs/Web/HTML/Element/canvas"><strong><code>&lt;canvas&gt;</code></strong></a> を実際に使った例です。</p>
</div>

<p><span class="seoSummary">このチュートリアルでは、2D グラフィックを描画するために <code>&lt;canvas&gt;</code> 要素を使用する方法を、基礎から説明します。提供する例は、 canvas で出来ることの、いくつかの明確なアイデアと、それを自分自身のコンテンツで作成開始できるようなコードスニペットを提供します。</span></p>

<p>Apple が OS X Dashboard のために WebKit に初めて導入した後、 <code>&lt;canvas&gt;</code> はブラウザーに実装されました。現在は、あらゆる主要ブラウザーが対応しています。</p>

<h2 id="Before_you_start">始める前に</h2>

<p><code>&lt;canvas&gt;</code> を使うことはそれほど難しくはありませんが、<a href="/ja/docs/Web/HTML">HTML</a> と <a href="/ja/docs/Web/JavaScript">JavaScript</a> の基本的な理解が必要です。一部の古いブラウザーは <code>&lt;canvas&gt;</code> 要素をサポートしていませんが、最近のバージョンの主要ブラウザーはすべてサポートしています。canvas の既定のサイズは、300 px × 150 px (幅 × 高さ) です。しかし、HTML の <code>height</code> および <code>width</code> プロパティを使用して、独自のサイズを定義することができます。canvas にグラフィックを描画するためには、JavaScript コンテキストオブジェクトを使用します。このオブジェクトは、グラフィックをその場で生成します。</p>

<h2 id="In_this_tutorial">チュートリアル</h2>

<ul>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Basic_usage">基本的な使い方</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes">図形を描く</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors">スタイルと色を適用する</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text">文字の描画</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Using_images">画像を使う</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Transformations">変形</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Compositing">合成とクリッピング</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations">基本的なアニメーション</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Advanced_animations">高度なアニメーション</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas">ピクセル操作</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility">ヒット領域とアクセシビリティ</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas">canvas を最適化する</a></li>
	<li><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Finale">最後に</a></li>
</ul>

<h2 id="See_also">関連情報</h2>

<ul>
	<li><a href="/ja/docs/Web/API/Canvas_API">Canvas トピックのページ</a></li>
	<li><a href="https://www.html5canvastutorials.com/">HTML5CanvasTutorials</a></li>
</ul>

<h2 id="A_note_to_contributors">貢献者への注記</h2>

<p>2013 年 6 月 17 日の週に発生した不運な技術的エラーにより、すべての過去の貢献者の属性を含む、このチュートリアルの履歴情報が失われました。この問題についておわびするとともに、この不運な事故を容赦願います。</p>

<div>{{ Next("Web/API/Canvas_API/Tutorial/Basic_usage") }}</div>
