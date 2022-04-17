---
title: row-gap (grid-row-gap)
slug: Web/CSS/row-gap
translation_of: Web/CSS/row-gap
---
<div>{{CSSRef}}</div>

<p> <strong><code>row-gap</code></strong> 该 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> 属性用来设置行元素之间的间隙({{glossary("gutters","gutter")}}) 大小。</p>

<div>{{EmbedInteractiveExample("pages/css/grid-row-gap.html")}}</div>



<div class="note">
<p><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a> 起初是用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-gap" rel="nofollow" title="此页面仍未被本地化, 期待您的翻译!"><code>grid-row-gap</code></a> 属性来定义的，目前逐渐被 <code>row-gap</code> 替代。但是，为了兼容那些不支持 <code>row-gap</code> 属性的浏览器，你需要像上面的例子一样使用带有前缀的属性。</p>
</div>

<h2 id="语法">语法</h2>

<pre class="brush: css no-line-numbers">/* &lt;length&gt; values */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* &lt;percentage&gt; value */
row-gap: 10%;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: unset;
</pre>

<h3 id="值">值</h3>

<dl>
 <dt><code>&lt;length-percentage&gt;</code></dt>
 <dd>表示行之间的间隔宽度。 {{cssxref("&lt;percentage&gt;")}} 表示相对栅格容器的百分比。</dd>
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
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[4]">#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox &gt; div {
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;

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

<pre class="brush: css; highlight[6]">#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid &gt; div {
  background-color: lime;
}
</pre>

<h4 id="结果_2">结果</h4>

<p>{{EmbedLiveSample('Grid布局', 'auto', 120)}}</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Box Alignment", "#propdef-row-gap", "row-gap")}}</td>
   <td>{{Spec2("CSS3 Box Alignment")}}</td>
   <td>初始定义</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<h3 id="在Flex布局中的兼容性">在Flex布局中的兼容性</h3>

<p>{{Compat("css.properties.row-gap.flex_context")}}</p>

<h3 id="在网格布局中的兼容性">在网格布局中的兼容性</h3>

<p>{{Compat("css.properties.row-gap.grid_context")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>相关CSS: {{cssxref("column-gap")}}, {{cssxref("gap")}}</li>
 <li>Grid布局指南: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters">Basic concepts of grid layout - Gutters</a></em></li>
</ul>
