---
title: transition-delay
slug: Web/CSS/transition-delay
tags:
  - CSS
  - CSS トランジション
  - CSS プロパティ
  - Reference
  - リファレンス
translation_of: Web/CSS/transition-delay
---
<div>{{CSSRef}}</div>

<p>CSS の <code>transition-delay</code> プロパティは、値が変更されたときにプロパティの<a href="/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">トランジション効果</a>が始まるまでの待ち時間を指定します。</p>

<div>{{EmbedInteractiveExample("pages/css/transition-delay.html")}}</div>

<p class="hidden">この対話型サンプルのソースファイルは GitHub リポジトリに格納されています。対話型サンプルプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>待ち時間はゼロ、正の数、負の数で指定します。</p>

<ul>
 <li><code>0s</code> (又は <code>0ms</code>) の値は直ちにトランジション効果が始まります。</li>
 <li>正の数の場合は、指定された時間の長さの分だけトランジション効果が始まるのが遅れます。</li>
 <li>負の数の場合は、直ちにトランジション効果が、効果の途中から始まります。言い換えれば、効果は指定された時間の長さの分だけ既に実行されていたかのように動きます。</li>
</ul>

<p>複数の待ち時間を指定することができ、複数のプロパティのトランジションを行うときに有用です。それぞれの待ち時間は、マスターリストである {{cssxref("transition-property")}} プロパティによって指定された対応するプロパティに適用されます。マスターリストよりも指定された待ち時間が少ない場合は、充足するまで待ち時間のリストが繰り返して使用されます。また待ち時間の数が多い場合は、リストが適切な長さに切り詰められます。どちらの場合も、 CSS の宣言として妥当です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers">/* &lt;time&gt; 値 */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* グローバル値 */
transition-delay: inherit;
transition-delay: initial;
transition-delay: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;time&gt;</code></dt>
 <dd>プロパティの値の変更からアニメーション効果が始まるまでの待ち時間を表す {{cssxref("&lt;time&gt;")}} 形式の値。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<div>
<div id="delay_0_5s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
<p><code>transition-delay: 0.5s</code></p>

<div class="hidden">
<pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

<pre class="brush:css;">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:0.5s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:0.5s;
    transition-timing-function: linear;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
     -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:0.5s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:0.5s;
    transition-timing-function: linear;
}
</pre>

<pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
</div>

<div>{{EmbedLiveSample("delay_0_5s",275,150)}}</div>
</div>

<div id="delay_1s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
<p><code>transition-delay: 1s</code></p>

<div class="hidden">
<pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

<pre class="brush:css;">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
     -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:1s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:1s;
    transition-timing-function: linear;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:1s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:1s;
    transition-timing-function: linear;
}
</pre>

<pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
</div>

<div>{{EmbedLiveSample("delay_1s",275,150)}}</div>
</div>

<div id="delay_2s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
<p><code>transition-delay: 2s</code></p>

<div class="hidden">
<pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

<pre class="brush:css;">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:2s;
    transition-timing-function: linear;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:2s;
    transition-timing-function: linear;
}
</pre>

<pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
</div>

<div>{{EmbedLiveSample("delay_2s",275,150)}}</div>
</div>

<div id="delay_4s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
<p><code>transition-delay: 4s</code></p>

<div class="hidden">
<pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

<pre class="brush:css;">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:4s;
    transition-timing-function: ease-in-out;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:4s;
    transition-timing-function: ease-in-out;
}
</pre>

<pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
</div>

<div>{{EmbedLiveSample("delay_4s",275,150)}}</div>
</div>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '#transition-delay-property', 'transition-delay')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.transition-delay")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">CSS トランジションの利用</a></li>
 <li>{{domxref("TransitionEvent")}}</li>
</ul>
