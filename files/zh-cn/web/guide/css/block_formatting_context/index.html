---
title: 块格式化上下文
slug: Web/Guide/CSS/Block_formatting_context
tags:
  - BFC
  - Block Formatting Context
  - CSS
  - 块格式化上下文
translation_of: Web/Guide/CSS/Block_formatting_context
---
<p>{{ CSSRef() }}</p>

<p><strong title="BFC">块格式化上下文（Block Formatting Context，BFC）</strong> 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。</p>

<p>下列方式会创建<strong>块格式化上下文</strong>：</p>

<ul>
 <li>根元素（<code>&lt;html&gt;）</code></li>
 <li>浮动元素（元素的 {{ cssxref("float") }} 不是 <code>none</code>）</li>
 <li>绝对定位元素（元素的 {{ cssxref("position") }} 为 <code>absolute</code> 或 <code>fixed</code>）</li>
 <li>行内块元素（元素的 {{ cssxref("display") }} 为 <code>inline-block</code>）</li>
 <li>表格单元格（元素的 {{ cssxref("display") }} 为 <code>table-cell</code>，HTML表格单元格默认为该值）</li>
 <li>表格标题（元素的 {{ cssxref("display") }} 为 <code>table-caption</code>，HTML表格标题默认为该值）</li>
 <li>匿名表格单元格元素（元素的 {{ cssxref("display") }} 为 <code>table<font face="Open Sans, arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">、</span></font></code><code>table-row</code>、 <code>table-row-group<font face="Open Sans, arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">、</span></font></code><code>table-header-group<font face="Open Sans, arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">、</span></font></code><code>table-footer-group</code>（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 <code>inline-table</code>）</li>
 <li>{{ cssxref("overflow") }} 计算值(Computed)不为 <code>visible</code> 的块元素</li>
 <li>{{ cssxref("display") }} 值为 <code><a href="https://drafts.csswg.org/css-display/#valdef-display-flow-root">flow-root</a></code> 的元素</li>
 <li>{{ cssxref("contain") }} 值为 <code>layout</code>、<code>content </code>或 <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">paint</span></font> 的元素</li>
 <li>弹性元素（{{ cssxref("display") }} 为 <code>flex</code> 或 <code>inline-flex </code>元素的直接子元素）</li>
 <li>网格元素（{{ cssxref("display") }} 为 <code>grid</code> 或 <code>inline-grid</code> 元素的直接子元素）</li>
 <li>多列容器（元素的 {{ cssxref("column-count") }} 或 {{ cssxref("column-width") }} 不为 <code>auto<font face="Open Sans, arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">，包括 </span></font></code><code>column-count</code> 为 <code>1</code>）</li>
 <li><code>column-span</code> 为 <code>all</code> 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（<a href="https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51">标准变更</a>，<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=709362">Chrome bug</a>）。</li>
</ul>

<p>块格式化上下文包含创建它的元素内部的所有内容.</p>

<p>块格式化上下文对浮动定位（参见 {{ cssxref("float") }}）与清除浮动（参见 {{ cssxref("clear") }}）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（<a href="/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">Margin collapsing</a>）也只会发生在属于同一BFC的块级元素之间。</p>

<h2 id="Specifications" name="Specifications">范例</h2>

<h3 id="让浮动内容和周围的内容等高">让浮动内容和周围的内容等高</h3>

<p>为了更好的理解BFC，我们先看看下面这些。</p>

<p>在下面的例子中，我们让 <code>&lt;div&gt;</code> 元素浮动，并给它一个边框效果。<code>&lt;div&gt; </code>里的内容现在已经在浮动元素周围浮动起来了。由于浮动的元素比它旁边的元素高，所以 <code>&lt;div&gt; </code>的边框穿出了浮动。正如我们在这篇文章中 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow">guide to in-flow and out of flow elements</a> 解释的，浮动脱离了文档流，所以 <code>&lt;div&gt;</code> 的 <code>background</code> 和 <code>border</code> 仅仅包含了内容，不包含浮动。</p>

<h4 id="使用overflow_auto">使用<code>overflow: auto</code></h4>

<p>创建一个会包含这个浮动的 BFC，通常的做法是设置父元素 <code>overflow: auto</code> 或者设置其他的非默认的 <code>overflow: visible</code> 的值。</p>

<p>设置 <code>overflow: auto</code> 创建一个新的BFC来包含这个浮动。我们的 <code>&lt;div&gt;</code> 元素现在变成布局中的迷你布局。任何子元素都会被包含进去。</p>

<p>使用 <code>overflow</code> 来创建一个新的 BFC，是因为 <code>overflow</code> 属性告诉浏览器你想要怎样处理溢出的内容。当你使用这个属性只是为了创建 BFC 的时候，你可能会发现一些不想要的问题，比如滚动条或者一些剪切的阴影，需要注意。另外，对于后续的开发，可能不是很清楚当时为什么使用 <code>overflow</code>。所以你最好添加一些注释来解释为什么这样做。</p>

<h4 id="使用display_flow-root">使用<code>display: flow-root</code></h4>

<p>一个新的 <code>display</code> 属性的值，它可以创建无副作用的 BFC。在父级块中使用 <code>display: flow-root</code> 可以创建新的 BFC。</p>

<p>给 <code>&lt;div&gt;</code> <code>display: flow-root</code> 属性后，<code>&lt;div&gt;</code> 中的所有内容都会参与 BFC，浮动的内容不会从底部溢出。</p>

<p>关于值 <code>flow-root</code>的这个名字，当你明白你实际上是在创建一个行为类似于根元素 （浏览器中的<code>&lt;html&gt;</code>元素） 的东西时，就能发现这个名字的意义了——即创建一个上下文，里面将进行 flow layout。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate"><code>&lt;div class="blue"&gt;&lt;/div&gt;
&lt;div class="red-outer"&gt;
  &lt;div class="red-inner"&gt;red inner&lt;/div&gt;
&lt;/div&gt;</code></pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate"><code>.blue, .red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}</code></pre>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 620)}}</p>

<h3 id="Exclude_external_floats">Exclude external floats</h3>

<p>In the following example, we are using <code>display:flow-root</code> and floats to implement double columns layout, beacuse an element in the normal flow that establishes a new <abbr title="Block Formatting Context">BFC</abbr> must not overlap the margin box of any floats in the same block formatting context as the element itself.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="notranslate">&lt;section&gt;
  &lt;div class="float"&gt;Try to resize this outer float&lt;/div&gt;
  &lt;div class="box"&gt;&lt;p&gt;Normal&lt;/p&gt;&lt;/div&gt;
&lt;/section&gt;
&lt;section&gt;
  &lt;div class="float"&gt;Try to resize this outer float&lt;/div&gt;
  &lt;div class="box" style="display:flow-root"&gt;&lt;p&gt;&lt;code&gt;display:flow-root&lt;/code&gt;&lt;p&gt;&lt;/div&gt;
&lt;/section&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="notranslate">section {
    height:150px;
}
.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
}
.box[style] {
    background-color: aliceblue;
    border: 5px solid steelblue;
}
.float {
    float: left;
    overflow: hidden; /* required by resize:both */
    resize: both;
    margin-right:25px;
    width: 200px;
    height: 100px;
    background-color: rgba(255, 255, 255, .75);
    border: 1px solid black;
    padding: 10px;
}
</pre>

<p>{{EmbedLiveSample("example2", 200, 300)}}</p>

<p>Rather than inline-blocks with width:&lt;percentage&gt;, in this case we don't have to specify the width of the right div.</p>

<p>Note that flexbox is a more efficient way to implement muti columns layout in morden CSS.</p>

<h3 id="外边距塌陷">外边距塌陷</h3>

<p>创建新的 BFC 避免两个相邻 <code>&lt;div&gt;</code> 之间的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">外边距合并</a> 问题</p>

<h4 id="HTML_3">HTML</h4>

<pre class="notranslate">&lt;div class="blue"&gt;&lt;/div&gt;
&lt;div class="red-outer"&gt;
  &lt;div class="red-inner"&gt;red inner&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="notranslate">.blue, .red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}
</pre>

<p>{{EmbedLiveSample("Margin_collapsing", 120, 120)}}</p>

<h2 id="Specifications" name="Specifications">规范</h2>

<table>
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Display', '#block-formatting-context', 'Block Formatting Context')}}</td>
   <td>{{Spec2('CSS3 Display')}}</td>
   <td>define BFC(abbr) etc.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visuren.html#block-formatting', 'Block Formatting Context')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="See_Also" name="See_Also">另见</h2>

<ul>
 <li>{{ cssxref("float") }}、{{ cssxref("clear") }}</li>
 <li>{{css_key_concepts}}</li>
</ul>
