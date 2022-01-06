---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow()
tags:
  - CSS
  - CSS 関数
  - Reference
  - フィルター効果
  - 関数
translation_of: Web/CSS/filter-function/drop-shadow()
---
<div>{{cssref}}</div>

<p><strong><code>drop-shadow()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、入力画像にドロップシャドウ効果を適用します。結果は {{cssxref("&lt;filter-function&gt;")}} です。</p>

<div>{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>ドロップシャドウは効果的にぼけ、入力画像のアルファマスクのバージョンからずれ、特定の色で描かれて画像の下に混合されます。</p>

<div class="note">
<p><strong>注:</strong> この関数はいくらか {{Cssxref("box-shadow")}} プロパティと似ています。 <code>box-shadow</code> プロパティは要素の<em>ボックス全体</em>の背後に長方形の影を作成しますが、 <code>drop-shadow()</code> フィルター関数は<em>画像そのもの</em>の形 (アルファチャネル) に合った影を作成します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">drop-shadow(<var>offset-x</var> <var>offset-y</var> <var>blur-radius</var> <var>color</var>)</pre>

<p><code>drop-shadow()</code> 関数は &lt;shadow&gt; 型の引数 ({{cssxref("box-shadow")}} プロパティで定義) を受け付けますが、 <code>inset</code> キーワードがと <code><var>spread</var></code> 引数が許可されないという例外があります。</p>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>offset-x</var></code> <code><var>offset-y</var></code> <small>(必須)</small></dt>
 <dd>影のオフセットを指定する2つの {{cssxref("&lt;length&gt;")}} 値です。 <code><var>offset-x</var></code> は水平方向の距離を表し、負の数で影を要素の左方に配置します。 <code><var>offset-y</var></code> は垂直方向の距離を表し、負の数で影を要素の上方に配置します。どちらの値も <code>0</code> であれば、影は要素の真後ろに配置されます。</dd>
 <dt><code><var>blur-radius</var></code> <small>(任意)</small></dt>
 <dd>影をぼかす半径で、 {{cssxref("&lt;length&gt;")}} で指定します。値が大きくなるほど、影は広く薄くなります。指定されていない場合は、既定値の <code>0</code> になり、辺がはっきりとしてぼけなくなります。負の数は許可されていません。</dd>
 <dt><code><var>color</var></code> <small>(任意)</small></dt>
 <dd>影の色で、 {{cssxref("&lt;color&gt;")}} で指定します。指定されない場合の既定値は、ブラウザーによります。 Firefox 及び Internet Explorer {{cssxref("color")}} プロパティの値が使用されます。一方、 WebKit の影は既定で透明であり、この値を省略する使い方は限られています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css notranslate">/* 10px のぼかしで広がりのない黒い影 */
drop-shadow(16px 16px 10px black)

/* 1rem のぼかしで 3rem の広がりの赤っぽい影 */
drop-shadow(.5rem .5rem 1rem #e23)</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("&lt;filter-function&gt;")}}</li>
 <li>CSS の {{cssxref("box-shadow")}} プロパティ</li>
 <li>{{cssxref("filter-function/blur", "blur()")}}</li>
 <li>{{cssxref("filter-function/brightness", "brightness()")}}</li>
 <li>{{cssxref("filter-function/contrast", "contrast()")}}</li>
 <li>{{cssxref("filter-function/grayscale", "grayscale()")}}</li>
 <li>{{cssxref("filter-function/hue-rotate", "hue-rotate()")}}</li>
 <li>{{cssxref("filter-function/invert", "invert()")}}</li>
 <li>{{cssxref("filter-function/opacity", "opacity()")}}</li>
 <li>{{cssxref("filter-function/saturate", "saturate()")}}</li>
 <li>{{cssxref("filter-function/sepia", "sepia()")}}</li>
</ul>
