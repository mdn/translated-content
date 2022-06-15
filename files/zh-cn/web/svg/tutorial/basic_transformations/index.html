---
title: 基础变形
slug: Web/SVG/Tutorial/Basic_Transformations
translation_of: Web/SVG/Tutorial/Basic_Transformations
---
<div>{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}</div>

<p>现在我们准备好开始扭曲我们美丽的图像了。但是首先，让我们正式地介绍{{SVGElement("g")}}元素。利用这个助手，你可以把属性赋给一整个元素集合。实际上，这是它唯一的目的。一个示例：</p>

<pre class="brush: xml">&lt;g fill="red"&gt;
  &lt;rect x="0" y="0" width="10" height="10" /&gt;
  &lt;rect x="20" y="0" width="10" height="10" /&gt;
&lt;/g&gt;
</pre>

<p>输出两个红色矩形。</p>

<p>所有接下来的变形都会用一个元素的<code>transform</code>属性总结。变形可以连缀，只要把它们连接起来就行，用空格隔开。</p>

<h2 id="平移">平移</h2>

<p>你能把元素移动一段距离，甚至你可以根据相应的属性定位它。<code>translate()</code>变形方法专门效力于这个目的。</p>

<pre class="brush: xml">&lt;rect x="0" y="0" width="10" height="10" transform="translate(30,40)" /&gt;
</pre>

<p>该示例将呈现一个矩形，移到点 (30,40)，而不是出现在点 (0,0)。</p>

<p>如果没有指定第二个值，它默认被赋值<em>0</em>。</p>

<h2 id="旋转">旋转</h2>

<p>旋转一个元素是相当常见的任务。使用<code>rotate() 变形就可以了：</code></p>

<pre class="brush: xml">&lt;rect x="20" y="20" width="20" height="20" transform="rotate(45)" /&gt;
</pre>

<p>该示例显示了一个方形，旋转了 45 度。<code>rotate()</code>的值是用角度数指定的。</p>

<h2 id="斜切">斜切</h2>

<p>利用一个矩形制作一个斜菱形。可用<code>skewX()</code>变形和<code>skewY()</code>变形。每个需要一角度以确定元素斜切到多远。</p>

<h2 id="缩放">缩放</h2>

<p><code>scale() 变形</code>改变了元素的尺寸。它需要两个数字，作为比率计算如何缩放。0.5 表示收缩到 50%。<em>如果第二个数字被忽略了，它默认等于第一个值。</em></p>

<h2 id="用matrix()实现复杂变形">用<code>matrix() 实现复杂变形</code></h2>

<p>所有上面的变形可以表达为一个 2x3 的变形矩阵。组合一些变形，可以直接用<code>matrix(a, b, c, d, e, f) 变形</code>设置结果矩阵，利用下面的矩阵，它把来自上一个坐标系统的坐标映射到新的坐标系统：</p>

<p><math display="block"><semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\{ \begin{matrix} x_{\mathrm{prevCoordSys}} = a x_{\mathrm{newCoordSys}} + c y_{\mathrm{newCoordSys}} + e \\ y_{\mathrm{prevCoordSys}} = b x_{\mathrm{newCoordSys}} + d y_{\mathrm{newCoordSys}} + f \end{matrix} \right. </annotation></semantics></math></p>

<p>请看<a href="/en-US/docs/Web/SVG/Attribute/transform#General_Transformation">关于 SVG 变形文档的具体实例</a>。关于该属性的详细信息可以在<a href="http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined">SVG 推荐标准</a>上找到。</p>

<h2 id="坐标系统上的效果">坐标系统上的效果</h2>

<p>如果使用了变形，你会在元素内部建立了一个新的坐标系统，应用了这些变形，你为该元素和它的子元素指定的单位可能不是 1:1 像素映射。但是依然会根据这个变形进行歪曲、斜切、转换、缩放操作。</p>

<pre class="brush: xml">&lt;g transform="scale(2)"&gt;
  &lt;rect width="50" height="50" /&gt;
&lt;/g&gt;
</pre>

<p>上面示例中的结果矩形将是 100x100px，如果你使用了比如说 userSpaceOnUse 等属性，将出现更吸引人的效果。</p>

<h2 id="SVG嵌在SVG内部">SVG 嵌在 SVG 内部</h2>

<p>比之 HTML，SVG 允许你无缝嵌入别的 svg 元素。因此你可以利用内部<code>svg</code>元素的属性<code>viewBox</code>、属性<code>width</code>和属性<code>height</code>简单创建一个新的坐标系统。</p>

<pre class="brush: xml">&lt;svg xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;svg width="100" height="100" viewBox="0 0 50 50"&gt;
    &lt;rect width="50" height="50" /&gt;
  &lt;/svg&gt;
&lt;/svg&gt;
</pre>

<p>以上示例基本上跟它上面的示例有同样的效果，也就是矩形将是指定的两倍大。</p>

<div>{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}</div>
