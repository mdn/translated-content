---
title: filter
slug: Web/CSS/filter
tags:
  - CSS
  - SVG
  - SVG Filter
  - filter
translation_of: Web/CSS/filter
---
<p>{{CSSRef}}</p>

<p><strong><code>filter</code> </strong><span style="background-color: #fafafa; color: #2b2b2b; font-family: arial,sans-serif;">CSS属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染。</span></p>

<p>CSS 标准里包含了一些已实现预定义效果的函数。你也可以参考一个 SVG <span style="background-color: #fafafa; color: #2b2b2b; font-family: arial,sans-serif;">滤镜</span>，通过一个 URL 链接到 SVG <span style="background-color: #fafafa; color: #2b2b2b; font-family: arial,sans-serif;">滤镜元素</span>(<a href="/en-US/docs/Web/SVG/Element/filter" style="line-height: 1.5;" title="/en/SVG/Element/filter">SVG filter element</a>)。</p>

<div>{{EmbedInteractiveExample("pages/css/filter.html")}}</div>



<h2 id="语法">语法</h2>

<pre class="brush:css no-line-numbers notranslate">/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* &lt;filter-function&gt; values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: unset;</pre>

<p>设置一种函数，方法如下：</p>

<pre class="notranslate">filter: &lt;filter-function&gt; [&lt;filter-function&gt;]* | none
</pre>

<p>给SVG元素 {{SVGElement("filter")}} 引用滤镜, 如下：</p>

<pre class="notranslate">filter: url(file.svg#filter-element-id)</pre>

<h3 id="插值">插值</h3>

<p>如果起始和结束过滤器都有一个不含 {{cssxref("&lt;url&gt;")}} 的相同长度的函数列表，则会根据其指定的规则对其每个过滤器函数进行插值。如果它们的长度不同，较长列表中确实的等效过滤器函数将使用空白的值添加到较短列表的尾部，然后所有的过滤器函数根据其特定的规则插值。如果一个过滤器是<code>none</code>则会使用过滤器函数的默认值替换函数列表，然后根据特定的规则进行插值，否则使用离散插值。</p>

<h2 id="函数">函数</h2>

<p>使用 CSS 滤镜属性，你需要设定下面某一函数的值。如果该值无效，函数返回 <code>none</code>。除特殊说明外，函数的值如果接受百分比值（如 <code>34%</code>），那么该函数也接受小数值（如0.34）。</p>

<p>当单个 <code>filter</code> 属性具有两个或多个函数时，其结果将与将两个或多个 <code>filter</code> 属性分别应用于相同的函数时的结果不同</p>

<h3 id="SVG_filter">SVG filter</h3>

<h4 id="url">url()</h4>

<p>获取指向SVG过滤器的URI，该 <a href="/zh-CN/docs/Web/SVG/Element/filter">SVG filter</a> 可以嵌入到外部XML文件中。</p>

<pre class="brush: css notranslate">filter: url(resources.svg#c1)</pre>

<h3 id="Filter_函数">Filter 函数</h3>

<h4 id="blur">blur()</h4>

<p>{{cssxref("filter-function/blur", "blur()")}} 函数将高斯模糊应用于输入图像。<code>radius</code> 定义了高斯函数的标准偏差值，或者屏幕上有多少像素相互融合，因此，较大的值将产生更多的模糊。若没有设置值，默认为<code>0</code>。该参数可以指定为 CSS 长度，但不接受百分比值。</p>

<pre class="brush: css notranslate">filter: blur(5px)
</pre>

<pre class="brush: html notranslate">&lt;svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%"&gt;
    &lt;feGaussianBlur in="SourceGraphic" stdDeviation="5"/&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('blur_example','100%','236px','','', 'no-codepen')}}</p>

<h4 id="brightness">brightness()</h4>

<p>{{cssxref("filter-function/brightness", "brightness()")}} 函数将线性乘法器应用于输入图像，使其看起来或多或少地变得明亮。值为 <code>0％</code> 将创建全黑图像。值为 <code>100％</code> 会使输入保持不变。其他值是效果的线性乘数。如果值大于 <code>100%</code> 提供更明亮的结果。若没有设置值，默认为 <code>1</code>。</p>

<pre class="brush: css notranslate">filter: brightness(2)</pre>

<pre class="brush: html notranslate">&lt;svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="brightness"&gt;
    &lt;feComponentTransfer&gt;
      &lt;feFuncR type="linear" slope="[amount]"/&gt;
      &lt;feFuncG type="linear" slope="[amount]"/&gt;
      &lt;feFuncB type="linear" slope="[amount]"/&gt;
    &lt;/feComponentTransfer&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('brightness_example','100%','231px','','', 'no-codepen')}}</p>

<h4 id="contrast">contrast()</h4>

<p>{{cssxref("filter-function/contrast", "contrast()")}} 函数可调整输入图像的对比度。值是 <code>0%</code> 的话，图像会全黑。值是 <code>100%</code>，图像不变。值可以超过 <code>100%</code>，意味着会运用更低的对比。若没有设置值，默认是 <code>1</code>。</p>

<pre class="brush: css notranslate">filter: contrast(200%)
</pre>

<pre class="brush: html notranslate">&lt;svg height="0" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="contrast"&gt;
    &lt;feComponentTransfer&gt;
      &lt;feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/&gt;
      &lt;feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/&gt;
      &lt;feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/&gt;
    &lt;/feComponentTransfer&gt;
  &lt;/filter&gt;
&lt;/svg&gt;
</pre>

<div id="contrast_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_3.jpeg" id="img1" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_3.jpg" id="img2" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 240 151"&gt;
 &lt;filter id="contrast"&gt;
    &lt;feComponentTransfer&gt;
      &lt;feFuncR type="linear" slope="2" intercept="-0.5"/&gt;
      &lt;feFuncG type="linear" slope="2" intercept="-0.5"/&gt;
      &lt;feFuncB type="linear" slope="2" intercept="-0.5"/&gt;
    &lt;/feComponentTransfer&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3712/Test_Form_3.jpeg" filter="url(#contrast)" width="240px" height="151px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3713/Test_Form_3_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:contrast(200%);
  -webkit-filter:contrast(200%);
  -o-filter:contrast(200%);
  -ms-filter:contrast(200%);
  filter:contrast(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('contrast_example','100%','203px','','', 'no-codepen')}}</p>

<h4 id="drop-shadow">drop-shadow()</h4>

<p>{{cssxref("filter-function/drop-shadow", "drop-shadow()")}} 函数对输入图像应用阴影效果。阴影可以设置模糊度的，以特定颜色画出的遮罩图的偏移版本，最终合成在图像下面。 函数接受<code>&lt;shadow&gt;</code>（在CSS3背景中定义）类型的值，除了 <code>inset</code> 和 <code>spread</code> 关键字。该函数与已有的 {{cssxref("box-shadow")}} 属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。<code>&lt;shadow&gt;</code> 参数如下：</p>

<dl>
 <dt><code>&lt;offset-x&gt;</code> <code>&lt;offset-y&gt;</code> <small>(必须)</small></dt>
 <dd>这是设置阴影偏移量的两个 {{cssxref("&lt;length&gt;")}} 值。 <code>&lt;offset-x&gt;</code> 设定水平方向距离，负值会使阴影出现在元素左边。 <code>&lt;offset-y&gt;</code>设定垂直距离，负值会使阴影出现在元素上方。查看 {{cssxref("&lt;length&gt;")}} 了解可能的单位.<br>
 <font face="Open Sans, sans-serif">如果两个值都是 </font><code>0</code>, 则阴影出现在元素正后面 (如果设置了<span style="line-height: 1.5;"> </span><code style="font-style: normal; line-height: 1.5;">&lt;blur-radius&gt;</code><span style="line-height: 1.5;"> 且/或 </span><code>&lt;spread-radius&gt;</code> 也<span style="line-height: 1.5;">会有模糊效果</span><span style="line-height: 1.5;">).</span></dd>
 <dt><code>&lt;blur-radius&gt;</code> <small>(可选)</small></dt>
 <dd>这是第三个 {{cssxref("&lt;length&gt;")}} 值。值越大，越模糊，所以阴影可以变得更大或更淡。不允许负值。若未设定，默认是 <code>0</code> (则阴影的边界很锐利)。</dd>
 <dt><code>&lt;color&gt;</code> <small>(可选)</small></dt>
 <dd>查看 {{cssxref("&lt;color&gt;")}} 了解该值可能的关键字和标记。若未设定，颜色值基于浏览器 —— 通常是 {{cssxref("&lt;color&gt;")}} 属性的值，但请注意，在这种情况下，Safari 当前会绘制透明阴影。<s>在 Gecko (Firefox), Presto (Opera) 和 Trident (Internet Explorer) 中， 会应用 {{cssxref("&lt;color&gt;")}} 属性的值。另外，如果颜色值省略，WebKit 中阴影是透明的。</s></dd>
</dl>

<pre class="brush: css notranslate">filter: drop-shadow(16px 16px 10px black)</pre>

<pre class="brush: html notranslate">&lt;svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg"&gt;
 &lt;filter id="drop-shadow"&gt;
    &lt;feGaussianBlur in="SourceAlpha" stdDeviation="[radius]"/&gt;
    &lt;feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/&gt;
    &lt;feFlood flood-color="[color]"/&gt;
    &lt;feComposite in2="offsetblur" operator="in"/&gt;
    &lt;feMerge&gt;
      &lt;feMergeNode/&gt;
      &lt;feMergeNode in="SourceGraphic"/&gt;
    &lt;/feMerge&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('shadow_example','100%','300px','','', 'no-codepen')}}</p>

<h4 id="grayscale">grayscale()</h4>

<p>{{cssxref("filter-function/grayscale", "grayscale()")}}  函数将改变输入图像灰度。<code>amount</code> 的值定义了转换的比例。值为 <code>100%</code> 则完全转为灰度图像，值为 <code>0%</code> 图像无变化。值在 <code>0%</code> 到 <code>100%</code> 之间，则是效果的线性乘数。若未设置值，默认是 <code>0</code>。</p>

<pre class="brush: css notranslate">filter: grayscale(100%)</pre>

<div id="grayscale_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_5.jpeg" id="img1" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_5.jpg" id="img2" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 184"&gt;
 &lt;filter id="grayscale"&gt;
    &lt;feColorMatrix type="matrix"
               values="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3716/Test_Form_5.jpeg" filter="url(#grayscale)" width="276px" height="184px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_5_s.jpg" id="img4" class="internal default" src="/files/3717/Test_Form_5_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:grayscale(100%);
  -webkit-filter:grayscale(100%);
  -o-filter:grayscale(100%);
  -ms-filter:grayscale(100%);
  filter:grayscale(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('grayscale_example','100%','209px','','', 'no-codepen')}}</p>

<h4 id="hue-rotate">hue-rotate()</h4>

<p>{{cssxref("filter-function/hue-rotate", "hue-rotate()")}} 函数在输入图像上应用色相旋转。<code>angle</code> 一值设定图像会被调整的色环角度值。值为 <code>0deg</code>，则图像无变化。若值未设置值，默认为 <code>0deg</code>。该值虽然没有最大值，超过 <code>360deg</code> 的值相当于又绕一圈。</p>

<pre class="brush: css notranslate">filter: hue-rotate(90deg)</pre>

<pre class="brush: html notranslate">&lt;svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="svgHueRotate" &gt;
    &lt;feColorMatrix type="hueRotate" values="[angle]" /&gt;
  &lt;filter /&gt;
&lt;/svg&gt;</pre>

<div id="huerotate_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_6.jpeg" id="img1" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_6.jpg" id="img2" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 266 190"&gt;
 &lt;filter id="hue-rotate"&gt;
    &lt;feColorMatrix type="hueRotate"
               values="90"/&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3718/Test_Form_6.jpeg" filter="url(#hue-rotate)" width="266px" height="190px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_6_s.jpg" id="img4" class="internal default" src="/files/3719/Test_Form_6_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:hue-rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
  -o-filter:hue-rotate(90deg);
  -ms-filter:hue-rotate(90deg);
  filter:hue-rotate(90deg); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('huerotate_example','100%','221px','','', 'no-codepen')}}</p>

<h4 id="invert">invert()</h4>

<p>{{cssxref("filter-function/invert", "invert()")}} 函数反转输入图像。<code>amount</code> 的值定义转换的比例。<code>100%</code> 的价值是完全反转。值为 <code>0%</code> 则图像无变化。值在 <code>0%</code> 和 <code>100%</code> 之间，则是效果的线性乘数。 若值未设置值，默认为 <code>0</code>。</p>

<pre class="brush: css notranslate">filter: invert(100%)</pre>

<div id="invert_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_7.jpeg" id="img1" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_7.jpg" id="img2" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 183 276"&gt;
 &lt;filter id="invert"&gt;
    &lt;feComponentTransfer&gt;
        &lt;feFuncR type="table" tableValues="1 0"/&gt;
        &lt;feFuncG type="table" tableValues="1 0"/&gt;
        &lt;feFuncB type="table" tableValues="1 0"/&gt;
    &lt;/feComponentTransfer&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3720/Test_Form_7.jpeg" filter="url(#invert)" width="183px" height="276px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_7_s.jpg" id="img4" class="internal default" src="/files/3721/Test_Form_7_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: invert(100%);
  -webkit-filter: invert(100%);
  -o-filter: invert(100%);
  -ms-filter: invert(100%);
  filter: invert(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('invert_example','100%','407px','','', 'no-codepen')}}</p>

<h4 id="opacity">opacity()</h4>

<p>{{cssxref("filter-function/opacity", "opacity()")}}  转化图像的透明程度。<code>amount</code> 的值定义转换的比例。值为 <code>0%</code> 则是完全透明，值为 <code>100%</code> 则图像无变化。值在 <code>0%</code> 和 <code>100%</code> 之间，则是效果的线性乘数。也相当于图像样本乘以数量。 若值未设置，值默认是<code>1</code>。该函数与已有的 <code>opacity</code> 属性很相似，不同之处在于通过 <code>filter</code>，一些浏览器为了提升性能会提供硬件加速。</p>

<pre class="brush: css notranslate">filter: opacity(50%)</pre>

<div id="opacity_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_14.jpeg" id="img1" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_14.jpg" id="img2" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 183"&gt;
 &lt;filter id="opacity"&gt;
    &lt;feComponentTransfer&gt;
        &lt;feFuncA type="table" tableValues="0 0.5"&gt;
    &lt;/feComponentTransfer&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3725/Test_Form_14.jpeg" filter="url(#opacity)" width="276px" height="183px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_14_s.jpg" id="img4" class="internal default" src="/files/3726/Test_Form_14_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: opacity(50%);
  -webkit-filter: opacity(50%);
  -o-filter: opacity(50%);
  -ms-filter: opacity(50%);
  filter: opacity(50%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('opacity_example','100%','210px','','', 'no-codepen')}}</p>

<h4 id="saturate">saturate()</h4>

<p>{{cssxref("filter-function/saturate", "saturate()")}} 函数转换图像饱和度。<code>amount</code> 的值定义转换的比例。值为 <code>0%</code> 则是完全不饱和，值为 <code>100%</code> 则图像无变化。其他值是效果的线性乘数。超过 <code>100%</code> 则有更高的饱和度。 若未设置值，默认为 <code>1</code>。</p>

<pre class="brush: css notranslate">filter: saturate(200%)</pre>

<div id="saturate_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_9.jpeg" id="img1" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_9.jpg" id="img2" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 201 239"&gt;
 &lt;filter id="saturate"&gt;
    &lt;feColorMatrix type="saturate"
               values="2"/&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3722/Test_Form_9.jpeg" filter="url(#saturate)" width="201px" height="239px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_9_s.jpg" id="img4" class="internal default" src="/files/3724/Test_Form_9_s.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: saturate(200%);
  -webkit-filter: saturate(200%);
  -o-filter: saturate(200%);
  -ms-filter: saturate(200%);
  filter: saturate(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('saturate_example','100%','332px','','', 'no-codepen')}}</p>

<h4 id="sepia">sepia()</h4>

<p> {{cssxref("filter-function/sepia", "sepia()")}} 函数将图像转换为深褐色。<code>amount</code> 的值定义转换的比例。值为 <code>100%</code> 则完全是深褐色的，值为 <code>0%</code> 图像无变化。值在 <code>0%</code> 到 <code>100%</code> 之间，值是效果的线性乘数。若未设置，值默认是 <code>0</code>。</p>

<pre class="brush: css notranslate">filter: sepia(100%)</pre>

<div id="sepia_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_12.jpeg" id="img1" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_12.jpg" id="img2" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 259 194"&gt;
 &lt;filter id="sepia"&gt;
    &lt;feColorMatrix type="matrix"
               values="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0"/&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3727/Test_Form_12.jpeg" filter="url(#sepia)" width="259px" height="194px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_12_s.jpg" id="img4" class="internal default" src="/files/3728/Test_Form_12_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: sepia(100%);
  -webkit-filter: sepia(100%);
  -o-filter: sepia(100%);
  -ms-filter: sepia(100%);
  filter: sepia(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('sepia_example','100%','229px','','', 'no-codepen')}}</p>

<h2 id="复合函数">复合函数</h2>

<p>你可以组合任意数量的函数来控制渲染。下面的例子可以增强图像的对比度和亮度。</p>

<pre class="brush: css notranslate">filter: contrast(175%) brightness(3%)</pre>

<div id="combination_example" class="hidden">
<pre class="brush: html notranslate">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th align="left" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th align="left" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_8.jpeg" id="img1" class="internal default" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_8.jpg" id="img2" class="internal default" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_8_s.jpg" id="img4" class="internal default" src="/files/3730/Test_Form_8_s.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css notranslate">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: contrast(175%) brightness(103%);
  -webkit-filter: contrast(175%) brightness(103%);
  -o-filter: contrast(175%) brightness(103%);
  -ms-filter: contrast(175%) brightness(103%);
  filter: contrast(175%) brightness(103%);
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<p>{{EmbedLiveSample('combination_example','100%','209px','','', 'no-codepen')}}</p>

<h2 id="正式定义">正式定义</h2>

<p>{{cssinfo}}</p>

<h2 id="形式语法">形式语法</h2>

{{csssyntax}}

<h2 id="示例">示例</h2>

<h3 id="应用_filter_功能">应用 filter 功能</h3>

<p>下面显示了使用预定义功能的示例。有关特定示例，请参见每个功能。</p>

<pre class="brush: css notranslate">.mydiv { filter: grayscale(50%) }

/* gray all images by 50% and blur by 10px */
img {
  filter: grayscale(0.5) blur(10px);
}</pre>

<h3 id="应用_SVG_filter">应用 SVG filter</h3>

<p>将 URL 函数与 SVG 资源一起使用的示例如下：</p>

<pre class="brush: css notranslate">.target { filter: url(#c1); }

.mydiv { filter: url(commonfilters.xml#large-blur) }
</pre>

<h2 id="规范">规范</h2>

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
   <td>{{ SpecName('Filters 1.0', '#FilterProperty', 'filter') }}</td>
   <td>{{ Spec2('Filters 1.0') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">浏览器兼容性</h2>

<p>{{Compat("css.properties.filter")}}</p>

<h2 id="查看更多">查看更多</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Applying_SVG_effects_to_HTML_content">Applying SVG effects to HTML content</a></li>
 <li>The {{Cssxref("mask")}} property</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/filters/understanding-css/">Understanding CSS filters</a>, HTML5Rocks! article</li>
 <li><a href="https://cssgenerator.org/filter-css-generator.html">Filter CSS Generator</a> - CSS Filter Live Demonstration and Generation</li>
</ul>
