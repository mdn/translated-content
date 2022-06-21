---
title: 使用 SMIL 的 SVG 动画
slug: Web/SVG/SVG_animation_with_SMIL
tags:
  - Firefox 4
  - Gecko 2.0
  - 动画
translation_of: Web/SVG/SVG_animation_with_SMIL
---
<div class="note"><strong>注意：</strong>真正的 SVG 文档未来有望面世。在当下，示例将引导你入门，你可以查看<a href="/en/SVG/SVG_animation_with_SMIL#See_also" title="en/SVG/SVG animation with SMIL#See also">specification and other documents</a> 以了解语法详情。</div>

<p>Chrome 45 弃用了 SMIL，以利于 CSS 动画以及 Web 动画。</p>

<p>Firefox 4 利用<a class="external" href="http://www.w3.org/TR/REC-smil">Synchronized Multimedia Integration Language</a> (SMIL) 引入了对动画 SVG 的支持。SMIL 允许你：</p>

<ul>
 <li>变动一个元素的数字属性（x、y……）</li>
 <li>变动变形属性（translation 或 rotation）</li>
 <li>变动颜色属性</li>
 <li>物件方向与运动路径方向同步</li>
</ul>

<p>只要在一个 SVG 元素内添加一个 SVG 元素比如说{{ SVGElement("animate") }}，就能实现让元素动起来。下面是四个不同方法的示例：</p>

<p>自从 Chrome 45，SMIL 动画被弃用了，以利于 CSS 动画和 Web 动画。</p>

<h2 id="一个元素的动画属性">一个元素的动画属性</h2>

<p>下面的示例变动了一个圆的 cx 属性。为了做到这，我们在{{ SVGElement("circle") }} 元素里面添加了一个{{ SVGElement("animate") }}元素。对{{ SVGElement("animate") }} 元素来说，重要的属性有：</p>

<dl>
 <dt><strong>attributeName</strong></dt>
 <dd>变动的属性的属性名。</dd>
 <dt>from</dt>
 <dd>变动的初始值。</dd>
 <dt>to</dt>
 <dd>变动的终值</dd>
 <dt>dur</dt>
 <dd>动画的持续时间（举个例子，写“5s”代表 5 秒表）</dd>
</dl>

<p>如果你想在同一个元素里变动更多的属性，只要添加更多的{{ SVGElement("animate") }}元素。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Attribute Animation with SMIL&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
     &lt;svg width="300px" height="100px"&gt;
       &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
       &lt;circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1"&gt;
            &lt;animate attributeName="cx" from="0" to="100" dur="5s" repeatCount="indefinite" /&gt;
       &lt;/circle&gt;
     &lt;/svg&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="让变形属性变化起来">让变形属性变化起来</h2>

<p>{{ SVGElement("animateTransform") }} 元素用于变动<strong>transform</strong>属性。这个新元素是必要的，否则我们就不能让一个简单的、仅仅是一个数字的属性比如说<strong>x</strong>动起来。旋转属性看起来是这样的：<code>rotation(theta, x, y)</code>，这里<code>theta</code>是以角度数计量的角度，<code>x</code>和<code>y</code>都是绝对位置。在下面的示例中，将变动旋转的中心以及角度。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;SVG SMIL Animate with transform&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
     &lt;svg width="300px" height="100px"&gt;
       &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
       &lt;rect x="0" y="50" width="15" height="34" fill="blue" stroke="black" stroke-width="1" transform="rotation"&gt;

			&lt;animateTransform
            attributeName="transform"
            begin="0s"
            dur="20s"
            type="rotate"
            &lt;!-- Rotate from 0 to 360 degrees, and move from 60 to 100 in the x direction. --&gt;
            from="0 60 60"
            to="360 100 60"
            &lt;!-- Keep doing this until the drawing no longer exists. --&gt;
            repeatCount="indefinite"
			/&gt;
       &lt;/rect&gt;
     &lt;/svg&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="沿着路径动画">沿着路径动画</h2>

<p>{{ SVGElement("animateMotion") }}元素使一个元素的位置动起来，并顺着路径同步旋转。定义这个路径是与在{{ SVGElement("path") }}元素中定义路径的方法相同。你可以设置这个属性以定义对象是否与跟着路径的正切值旋转。</p>

<h3 id="示例1：线性运动">示例 1：线性运动</h3>

<p>在这个示例中，一个蓝色的圆球在左右边界之间弹动，一次又一次，永不停息。这个动画是用{{ SVGElement("animateMotion") }}元素操纵的。在这个例子中，我们建立了一个由<strong>M</strong>oveTo 命令和<strong>H</strong>orizontal-line 命令、<strong>Z</strong>命令构成的路径，<strong>M</strong>oveTo 命令命令指定动画路径的起始点，而<strong>H</strong>orizontal-line 命令把圆移到右边 300 像素处，<strong>Z</strong>命令闭合路径，建立一个回到起始点的回路。把<strong>repeatCount</strong>属性的值设置为<code>indefinite</code>，我们指明了反复循环的动画，只要 SVG 图像还存在就会一直循环下去。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;SVG SMIL Animate with Path&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px"&gt;
      &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
        &lt;circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1"&gt;
          &lt;animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" /&gt;
        &lt;/circle&gt;
      &lt;/svg&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p><a href="https://developer.mozilla.org/samples/svg/svganimdemo1.html">View live sample</a></p>

<h3 id="示例2：曲线运动">示例 2：曲线运动</h3>

<p>略有改变的示例，其运动路径是一条曲线，沿着路径的方向运动。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;SVG SMIL Animate with Path&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;svg width="300px" height="100px"&gt;
      &lt;rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" /&gt;
      &lt;rect x="0" y="0" width="20" height="20" fill="blue" stroke="black" stroke-width="1"&gt;
        &lt;animateMotion path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
          dur="3s" repeatCount="indefinite" rotate="auto"&gt;
      &lt;/rect&gt;
    &lt;/svg&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/en/SVG" title="en/SVG">SVG</a></li>
 <li><a class="external" href="http://www.w3.org/TR/SVG/animate.html">SVG 动画参考</a></li>
 <li><a class="external" href="http://www.w3.org/TR/REC-smil">SMIL 动画参考</a></li>
</ul>
