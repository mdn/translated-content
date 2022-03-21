---
title: background-position
slug: Web/CSS/background-position
tags:
  - Background
  - CSS Background
  - CSS Property
  - Reference
translation_of: Web/CSS/background-position
---
<p>{{CSSRef}}</p>

<p><strong><code>background-position</code></strong> 为每一个背景图片设置初始位置。 这个位置是相对于由 {{cssxref("background-origin")}} 定义的位置图层的。</p>

<p>{{EmbedInteractiveExample("pages/css/background-position.html")}}</p>

<h2 id="Syntax" name="Syntax">语法</h2>

<pre class="brush: css">/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* &lt;percentage&gt; values */
background-position: 25% 75%;

/* &lt;length&gt; values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: unset;
</pre>

<p><code><strong>background-position</strong></code> 属性被指定为一个或多个 &lt;<a href="/zh-CN/docs/Web/CSS/position_value">position</a>&gt; 值，用逗号隔开。</p>

<h3 id="Values" name="Values">值</h3>

<ul>
 <li>关键字 <code>center</code>，用来居中背景图片。</li>
 <li>关键字 <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code> 中的一个。用来指定把这个项目<em>（原文为 item）放在哪</em>一个边缘。另一个维度被设置成 50%，所以这个项目（原文为 item）被放在指定边缘的中间位置。</li>
 <li>{{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。指定相对于左边缘的 x 坐标，y 坐标被设置成 50%。</li>
</ul>

<ul>
 <li>如果一个值是  <code>top</code> 或  <code>bottom</code>，那么另一个值不应该是 <code>top</code> 或 <code>bottom</code>。</li>
 <li>如果一个值是  <code>left</code> 或   <code>right</code>，那么另一个值不应该是 <code>left</code> 或 <code>right</code> 。</li>
</ul>

<ul>
 <li>+50px（将图片的左边界对齐容器的中线）</li>
 <li>0px（图片的左边界与容器左边界重合）</li>
 <li>-100px（将图片相对容器左移100px，这意味着图片中部的100px内容将出现在容器中）</li>
 <li>-200px（将图片相对容器左移200px，这意味着图片右部分的100px内容将出现在容器中）</li>
 <li>-250px（将图片相对容器左移250px，这意味着图片的右边界对齐容器的中线）</li>
</ul>

<p>    另外需要注意，如果背景图片的大小和容器一样，那设置百分比的值将永远无效，因为“容器和图片的差”为0（图片永远填满容器，并且图片的相对位置和容器的相对位置永远重合）。在这种情况下，需要为偏移使用绝对值（例如px）。</p>

<dl>
 <dt><code>&lt;position&gt;</code></dt>
 <dd>  一个 {{cssxref("&lt;position&gt;")}} 定义一组 x/y 坐标（相对于一个元素盒子模型的边缘），来放置这个项目<em>（原文为 item）</em>。它可以被定义为一个值或者两个值。如果被定义为两个值，那么第一个值代表水平位置，第二个代表垂直垂直位置。如果只指定一个值，那么第二个值默认为 <code>center</code>。</dd>
 <dd>
 <p><strong>一个值的语法:</strong> 这个值可以是：</p>
 </dd>
 <dd>
 <p><strong>两个值的语法:</strong> 一个定义 x 坐标，另一个定义 y 坐标。每个值可以是：</p>

 <ul>
  <li>关键字 <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code> 中的一个。 如果这里给出 <code>left</code> 或 <code>right</code>，那么这个值定义 x 轴位置，另一个值定义 y 轴位置。如果这里给出 <code>top</code> 或  <code>bottom</code>，那么这个值定义 y 轴位置，另一个值定义 x 轴位置。</li>
  <li>{{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。如果另一个值是  <code>left</code> 或  <code>right</code>，那么这个值（指 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}）定义相对于上边缘的 y 轴位置。 如果两个值都是 <code>&lt;length&gt;</code> 或 <code>&lt;percentage&gt;</code>，那么第一个值定义 x 轴位置，第二个定义 y 轴位置。</li>
 </ul>

 <p>注意：</p>
 </dd>
 <dd>
 <ul>
 </ul>

 <p>也就是说，<code>top top</code> 和 <code>left left </code>是无效的。</p>
 </dd>
 <dt>至于百分比：</dt>
 <dd><br>
 百分比值的偏移指定图片的相对位置和容器的相对位置重合。值0%代表图片的左边界（或上边界）和容器的左边界（上边界）重合。值100%代表图片的右边界（或下边界）和容器的右边界（或下边界）重合。值50%则代表图片的中点和容器的中点重合。<br>
 <br>
 当指定百分比值的时候，实际上执行了以下的计算公式（该公式可以用数学方式定义图片和容器相对位置重合）：<br>
 <br>
 <code>(container width - image width) * (position x%) = (x offset value)<br>
 (container height - image height) * (position y%) = (y offset value)</code><br>
 <br>
 使用X坐标来举个例子，假设有一个300px宽的图片，将这个图片使用到一个100px宽的容器中，并且将background-size设置成自动：<br>
 <br>
 <code>100px - 300px = -200px (容器和图片的宽度差)</code><br>
 <br>
 当对background-position设置值依次为-25%，0%，50%，100%，125%，得到图片相对容器的偏移值为：<br>
 <br>
 <code>-200px * -25% = 50px<br>
 -200px * 0% = 0px<br>
 -200px * 50% = -100px<br>
 -200px * 100% = -200px<br>
 -200px * 125% = -250px</code><br>
 <br>
 对于这些例子中设置的偏移，图片相对容器真实的偏移值就是：</dd>
 <dt></dt>
</dl>

<h3 id="语法规范">语法规范</h3>

{{csssyntax}}

<h2 id="例子">例子</h2>

<p>下面三个例子使用 {{cssxref("background")}} 来创建一个包含一个星星的黄色长方形元素。每个例子中，星星的位置是不一样的。第三个例子阐明了如何</p>

<p>为两个不同的背景图片指定位置。</p>

<h4 id="HTML_内容" style="font-size: 1.28571428571429rem;">HTML 内容</h4>

<pre class="brush: html  language-html" style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal;"><code class="language-html" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; direction: ltr; white-space: pre;"><span class="tag token" style="color: #990055;"><span class="tag token"><span class="punctuation token" style="color: #999999;">&lt;</span>div</span> <span class="attr-name token" style="color: #669900;">class</span><span class="attr-value token" style="color: #0077aa;"><span class="punctuation token" style="color: #999999;">=</span><span class="punctuation token" style="color: #999999;">"</span>exampleone<span class="punctuation token" style="color: #999999;">"</span></span><span class="punctuation token" style="color: #999999;">&gt;</span></span>Example One<span class="tag token" style="color: #990055;"><span class="tag token"><span class="punctuation token" style="color: #999999;">&lt;/</span>div</span><span class="punctuation token" style="color: #999999;">&gt;</span></span>
<span class="tag token" style="color: #990055;"><span class="tag token"><span class="punctuation token" style="color: #999999;">&lt;</span>div</span> <span class="attr-name token" style="color: #669900;">class</span><span class="attr-value token" style="color: #0077aa;"><span class="punctuation token" style="color: #999999;">=</span><span class="punctuation token" style="color: #999999;">"</span>exampletwo<span class="punctuation token" style="color: #999999;">"</span></span><span class="punctuation token" style="color: #999999;">&gt;</span></span>Example Two<span class="tag token" style="color: #990055;"><span class="tag token"><span class="punctuation token" style="color: #999999;">&lt;/</span>div</span><span class="punctuation token" style="color: #999999;">&gt;</span></span>
<span class="tag token" style="color: #990055;"><span class="tag token"><span class="punctuation token" style="color: #999999;">&lt;</span>div</span> <span class="attr-name token" style="color: #669900;">class</span><span class="attr-value token" style="color: #0077aa;"><span class="punctuation token" style="color: #999999;">=</span><span class="punctuation token" style="color: #999999;">"</span>examplethree<span class="punctuation token" style="color: #999999;">"</span></span><span class="punctuation token" style="color: #999999;">&gt;</span></span>Example Three<span class="tag token" style="color: #990055;"><span class="tag token"><span class="punctuation token" style="color: #999999;">&lt;/</span>div</span><span class="punctuation token" style="color: #999999;">&gt;</span></span></code></pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;"></div>

<h4 id="CSS_内容" style="font-size: 1.28571428571429rem;">CSS 内容</h4>

<pre class="brush: css  language-css" style="padding: 1em 0px 1em 30px; font-size: 14px; white-space: normal;"><code class="language-css" style="font-family: Consolas, Monaco, 'Andale Mono', monospace; direction: ltr; white-space: pre;"><span class="comment token" style="color: #708090;">/* 被所有 div 共享 */</span>
<span class="selector token" style="color: #669900;">div </span><span class="punctuation token" style="color: #999999;">{</span>
    <span class="property token" style="color: #990055;">background-color</span><span class="punctuation token" style="color: #999999;">:</span> #FFEE99<span class="punctuation token" style="color: #999999;">;</span>
    <span class="property token" style="color: #990055;">background-repeat</span><span class="punctuation token" style="color: #999999;">:</span> no-repeat<span class="punctuation token" style="color: #999999;">;</span>
    <span class="property token" style="color: #990055;">width</span><span class="punctuation token" style="color: #999999;">:</span> 300px<span class="punctuation token" style="color: #999999;">;</span>
    <span class="property token" style="color: #990055;">height</span><span class="punctuation token" style="color: #999999;">:</span> 80px<span class="punctuation token" style="color: #999999;">;</span>
    <span class="property token" style="color: #990055;">margin-bottom</span><span class="punctuation token" style="color: #999999;">:</span> 12px<span class="punctuation token" style="color: #999999;">;</span>
<span class="punctuation token" style="color: #999999;">}</span>


<span class="comment token" style="color: #708090;">/* 这些例子使用 `background` 缩写 */</span>
<span class="selector token" style="color: #669900;">.exampleone </span><span class="punctuation token" style="color: #999999;">{</span>
    <span class="property token" style="color: #990055;">background</span><span class="punctuation token" style="color: #999999;">:</span> <span class="token url" style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;">url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif")</span> #FFEE99 2.5cm bottom no-repeat<span class="punctuation token" style="color: #999999;">;</span>
<span class="punctuation token" style="color: #999999;">}</span>
<span class="selector token" style="color: #669900;">.exampletwo </span><span class="punctuation token" style="color: #999999;">{</span>
    <span class="property token" style="color: #990055;">background</span><span class="punctuation token" style="color: #999999;">:</span> <span class="token url" style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;">url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif")</span> #FFEE99 3em 50% no-repeat<span class="punctuation token" style="color: #999999;">;</span>
<span class="punctuation token" style="color: #999999;">}</span>

<span class="comment token" style="color: #708090;">/*
多背景图片：每个图片依次和相应的 `background-position` 匹配
*/</span>
<span class="selector token" style="color: #669900;">.examplethree </span><span class="punctuation token" style="color: #999999;">{</span>
    <span class="property token" style="color: #990055;">background-image</span><span class="punctuation token" style="color: #999999;">:</span>    <span class="token url" style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;">url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif")</span>,
                         <span class="token url" style="background: rgba(255, 255, 255, 0.498039); color: #a67f59;">url("https://mdn.mozillademos.org/files/7693/catfront.png")</span><span class="punctuation token" style="color: #999999;">;</span>
    <span class="property token" style="color: #990055;">background-position</span><span class="punctuation token" style="color: #999999;">:</span> 0px 0px,
                         center<span class="punctuation token" style="color: #999999;">;</span>
<span class="punctuation token" style="color: #999999;">}</span></code></pre>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 0px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 19px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 38px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 57px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 76px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 95px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 114px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 133px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 152px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 171px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 190px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 209px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 228px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 247px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 266px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 285px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 304px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 323px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 342px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 361px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 380px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 399px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 418px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 437px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 456px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 475px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 494px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 513px; background: 0px 0px;"></div>

<div class="line-number" style="margin-top: 1em; position: absolute; left: 0px; right: 0px; line-height: inherit; top: 532px; background: 0px 0px;"></div>

<h4 id="结果" style="font-size: 1.28571428571429rem;">结果</h4>

<p>{{EmbedLiveSample('例子', 420, 200)}}</p>

<h2 id="Specifications" name="Specifications">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Backgrounds', '#background-position', 'background-position')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>Added support for multiple backgrounds, the four-value syntax and modified the percentage definition to match implementations.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'colors.html#propdef-background-position', 'background-position')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Allows for the mix of keyword values and {{cssxref("&lt;length&gt;")}} and {{cssxref("&lt;percentage&gt;")}} values.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#background-position', 'background-position')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">浏览器兼容性</h2>

<p>{{Compat("css.properties.background-position")}}</p>

<h2 id="See_also" name="See_also">参见</h2>

<ul>
 <li>{{cssxref("background-position-x")}}</li>
 <li>{{cssxref("background-position-y")}}</li>
 <li>{{cssxref("background-position-inline")}}</li>
 <li>{{cssxref("background-position-block")}}</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Multiple_backgrounds" title="CSS/Multiple backgrounds">Using multiple backgrounds</a></li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
