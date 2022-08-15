---
title: transition-delay
slug: Web/CSS/transition-delay
translation_of: Web/CSS/transition-delay
browser-compat: css.properties.transition-delay
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<h2 id="Summary">Summary</h2>

<p><strong><code>transition-delay</code></strong> CSS 속성은 transition될 속성이 transition 요청을 받은 이후 실제로 <a href="/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">transition하기</a>까지 기다려야하는 시간의 양을 지정합니다.</p>

<p>A value of <code>0s</code>, or <code>0ms</code>, indicates that the property will begin to animate its transition immediately when the value changes; positive values will delay the start of the transition effect for the corresponding number of seconds. Negative values cause the transition to begin immediately, but to cause the transition to seem to begin partway through the animation effect.</p>

<p>You may specify multiple delays; each delay will be applied to the corresponding property as specified by the {{cssxref("transition-property")}} property, which acts as a master list. If there are fewer delays specified than in the master list, missing values are set to the initial value (<code>0s</code>). If there are more delays, the list is simply truncated to the right size. In both case the CSS declaration stays valid.</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* &lt;time&gt; values */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Global values */
transition-delay: inherit;
transition-delay: initial;
transition-delay: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;time&gt;</code></dt>
 <dd>Is a {{cssxref("&lt;time&gt;")}} denoting the amount of time to wait between a property's value changing and the start of the animation effect.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

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

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">Using CSS transitions</a></li>
 <li>{{domxref("TransitionEvent")}}</li>
</ul>
