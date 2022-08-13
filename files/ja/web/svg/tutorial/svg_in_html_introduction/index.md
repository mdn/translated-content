---
title: SVG In HTML Introduction
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
tags:
  - Intermediate
  - NeedsUpdate
  - SVG
  - 中級者
translation_of: Web/SVG/Tutorial/SVG_In_HTML_Introduction
---
<h2 id="Overview" name="Overview">概要</h2>

<p>この記事と関連する例では、インラインの <a href="/ja/docs/SVG">SVG</a> をフォームの背景画像として使用する方法を示します。どのように <a href="/ja/docs/JavaScript">JavaScript</a> と <a href="/ja/docs/CSS">CSS</a> を利用すれば、通常の HTML を記述するのと同じ方法で画像を扱えるかを紹介しています。</p>

<h2 id="Source" name="Source">ソース</h2>

<p>こちらに<a class="external" href="/presentations/xtech2005/svg-canvas/SVGDemo.xml" title="presentations/xtech2005/svg-canvas/SVGDemo.xml">この例</a>のソースがあります。</p>

<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;XTech SVG Demo&lt;/title&gt;
&lt;style&gt;
  stop.begin { stop-color:yellow; }
  stop.end { stop-color:green; }
  body.invalid stop.end { stop-color:red; }
  #err { display:none; }
  body.invalid #err { display:inline; }
&lt;/style&gt;
&lt;script&gt;
  function signalError() {
    document.getElementById('body').setAttribute("class", "invalid");
  }
&lt;/script&gt;
&lt;/head&gt;
&lt;body id="body"
  style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;"&gt;
&lt;form&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;HTML Form&lt;/legend&gt;
    &lt;p&gt;&lt;label&gt;Enter something:&lt;/label&gt;
    &lt;input type="text"&gt;
    &lt;span id="err"&gt;Incorrect value!&lt;/span&gt;&lt;/p&gt;
    &lt;p&gt;&lt;input type="button" value="Activate!" onclick="signalError();"&gt;&lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;

&lt;svg
  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
  style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;"&gt;
  &lt;linearGradient id="gradient"&gt;
    &lt;stop class="begin" offset="0%"/&gt;
    &lt;stop class="end" offset="100%"/&gt;
  &lt;/linearGradient&gt;
  &lt;rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" /&gt;
  &lt;circle cx="50" cy="50" r="30" style="fill:url(#gradient)" /&gt;
&lt;/svg&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Discussion" name="Discussion">議論</h2>

<p>ページは主に通常の HTML, CSS, JavaScript を使用しています。唯一興味深いのは、その中に含まれている &lt;svg&gt; 要素です。この要素とその子は SVG 名前空間にあると宣言されています。この要素にはグラデーションと、グラデーションで塗りつぶされた2つの図形が含まれています。グラデーションの色停止点の色は CSS で設定されています。ユーザーがフォームに何か間違ったものを入力すると、スクリプトは &lt;body&gt; に <code>invalid</code> 属性を設定し、スタイル規則はグラデーションの <code>end-stop</code> の色を赤に変更します (別のスタイル規則によりエラーメッセージが表示されます)。</p>

<p>この方法は、以下のいくつかの点で有利です。</p>

<ul>
 <li>既存のサイトに含まれる通常の HTML フォームに対して、魅力のある対話式の背景を設定できます。</li>
 <li>SVG に対応していないブラウザーに対しても後方互換性があります。単純に背景が表示されないだけです。</li>
 <li>単純ながら、非常に効率的です。</li>
 <li>画像のサイズは動的に気の効いた方法で必要なサイズに変更されます。</li>
 <li>HTML と SVG の双方に適用するスタイルを宣言できます。</li>
 <li>同一のスクリプトで HTML と SVG の双方を操作できます。</li>
 <li>文書は、完全に標準準拠です。</li>
</ul>

<div class="note">
<p>DOM メソッドでリンクした画像を組み込まれた SVG 要素に追加するには、<code>href</code> の設定に <code>setAttributeNS</code> を使用してください。次の例のようにします:</p>

<pre class="brush: js"> var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "move.png");


</pre>
</div>

<h2 id="Details" name="Details">詳細</h2>

<p><code>viewBox</code> 属性は、SVG 画像の座標と相対的な論理座標系を構築します。この場合、画像は 100 対 100 で貼り付けられます。</p>

<p><code>preserveAspectRatio</code> 属性は、画像のアスペクト比を保ったまま、中心にそのままのサイズの画像を配置し、縦横ではみ出した部分を除きます。</p>

<p><code>style</code> 属性はフォームの背景になる SVG 要素を指します。</p>

<h2 id="Related_Links" name="Related_Links">関連リンク</h2>

<ul>
 <li>他の SVG in HTML の例: <a href="/ja/docs/SVG/Namespaces_Crash_Course/Example">A swarm of motes</a></li>
 <li><a class="external" href="http://jwatt.org/svg/demos/xhtml-with-inline-svg.xhtml">Working example</a> は、Mozilla と Adobe の SVG Viewer がインストールされた Internet Explorer の両方で動作します。(インライン SVG を Firefox と Internet Explorer の両方で動作させるには、ブラウザごとに異なる Content-Type のドキュメントを提供する必要があります。このため、ページをキャッシュするプロクシサーバに接続している場合は、サンプルを二回目に読み込んだブラウザでは間違った Content-Type を受け取るため、動作しないことがあります。)</li>
</ul>
