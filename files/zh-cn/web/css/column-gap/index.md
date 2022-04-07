---
title: column-gap
slug: Web/CSS/column-gap
translation_of: Web/CSS/column-gap
---
<div>{{CSSRef}}</div>

<p><code><strong>column-gap</strong></code> 该 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> 属性用来设置元素列之间的间隔 ({{glossary("gutters","gutter")}}) 大小。</p>

<div>{{EmbedInteractiveExample("pages/css/column-gap.html")}}</div>

<div>{{EmbedInteractiveExample("pages/css/grid-column-gap.html")}}</div>



<p><code>column-gap</code>一开始是 <a href="/en-US/docs/Web/CSS/CSS_Columns">Multi-column 布局</a> 下的特有属性，后来在其他布局中也使用这个属性。如 <a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">Box Alignment</a> 中的表述，该属性已经在Multi-column（多列布局）、Flexible Box（弹性盒子）以及 Grid layouts（网格布局）中使用。</p>

<div class="note">
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a> 起初是用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-gap" rel="nofollow" title="此页面仍未被本地化, 期待您的翻译!"><code>grid-gap</code></a> 属性来定义的，目前逐渐被 <code>gap</code> 替代。但是，为了兼容那些不支持 <code>gap</code> 属性的浏览器，你需要像上面的例子一样使用带有前缀的属性。</p>
</div>

<h2 id="Syntax" name="Syntax">语法</h2>

<pre><code>/* Keyword value */
column-gap: normal;

/* &lt;length&gt; values */
column-gap: 3px;
column-gap: 2.5em;

/* &lt;percentage&gt; value */
column-gap: 3%;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: unset;</code></pre>

<p> <code>column-gap</code> 属性有以下值来表示。</p>

<h3 id="取值">取值</h3>

<p><code>normal</code></p>

<dl>
 <dd>表示列之间的间隔宽度。在 <code>多列布局</code> 时默认间隔为1em，其他类型布局默认间隔为 0。</dd>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>用{{cssxref("&lt;length&gt;")}}来定义列之间的间隔大小。而且 {{cssxref("&lt;length&gt;")}} 值必须是非负数的。</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>用{{cssxref("&lt;percentage&gt;")}}（百分比）来定义列之间的间隔大小。同样的，{{cssxref("&lt;percentage&gt;")}} 值也必须是非负数的。</dd>
</dl>

<h3 id="正式语法">正式语法</h3>

{{csssyntax}}

<h2 id="示例">示例</h2>

<h3 id="Flex布局">Flex布局</h3>

<p>{{SeeCompatTable}}</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="flexbox"&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[4]">#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox &gt; div {
  background-color: lime;
  flex: auto;
}
</pre>

<h4 id="结果">结果</h4>

<p>{{EmbedLiveSample('Flex布局', "auto", "120px")}}</p>

<h3 id="Grid布局">Grid布局</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div id="grid"&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<div class="hidden">
<pre class="brush: css">#grid {
  grid-column-gap: 20px;
}</pre>
</div>

<pre class="brush: css; highlight[6]">#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid &gt; div {
  background-color: lime;
}
</pre>

<h4 id="结果_2">结果</h4>

<p>{{EmbedLiveSample("Grid布局", "auto", "120px")}}</p>

<h3 id="Multi-column布局">Multi-column布局</h3>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;p class="content-box"&gt;
  This is some multi-column text with a 40px column
  gap created with the CSS `column-gap` property.
  Don't you think that's fun and exciting? I sure do!
&lt;/p&gt;
</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush:css">.content-box {
  column-count: 3;
  column-gap: 40px;
}
</pre>

<h4 id="结果_3">结果</h4>

<p>{{EmbedLiveSample("Multi-column布局", "auto", "120px")}}</p>

<h2 id="规范">规范</h2>

<table>
 <thead>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Box Alignment", "#column-row-gap", "column-gap")}}</td>
   <td>{{Spec2("CSS3 Box Alignment")}}</td>
   <td>在弹性布局和网格布局中应用</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Grid", "#gutters", "column-gap")}}</td>
   <td>{{Spec2("CSS3 Grid")}}</td>
   <td>描述在网格布局中的作用</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Multicol", "#column-gap", "column-gap")}}</td>
   <td>{{Spec2("CSS3 Multicol")}}</td>
   <td>初始化定义</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Specifications" name="Specifications">浏览器兼容性</h2>



<h3 id="在_Flex_布局中的兼容性">在 Flex 布局中的兼容性</h3>

<p>{{Compat("css.properties.column-gap.flex_context")}}</p>

<h3 id="在_Grid_布局中的兼容性">在 Grid 布局中的兼容性</h3>

<p>{{Compat("css.properties.column-gap.grid_context")}}</p>

<h3 id="在_Multi-column_布局中的兼容性">在 Multi-column 布局中的兼容性</h3>

<p>{{Compat("css.properties.column-gap.multicol_context")}}</p>

<h2 id="参见">参见</h2>

<article>
<ul>
 <li>相关CSS属性: {{cssxref("row-gap")}}, {{cssxref("gap")}}</li>
 <li>Grid 布局指南: <em><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters">Basic concepts of grid layout - Gutters</a></em></li>
 <li>Multi-column 布局指南: <em><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns">Styling Columns</a></em></li>
</ul>
</article>
