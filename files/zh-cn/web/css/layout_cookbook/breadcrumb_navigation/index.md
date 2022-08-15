---
title: 面包屑导航
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
translation_of: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
---
<div>{{CSSRef}}</div>

<p>面包屑导航通过提供返回起始页面的面包屑轨迹，帮助用户了解他们在网站中所处的位置。</p>

<p><img alt="Links displayed inline with separators" src="breadcrumb-navigation.png"></p>

<h2 id="要求">要求</h2>

<p>这些项通常以内联方式显示，并带有分隔符，以指示各个页面之间的层次结构。</p>

<h2 id="Recipe">Recipe</h2>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/breadcrumb-navigation--download.html">下载此节的示例</a></p>
</div>

<h2 id="做出的选择">做出的选择</h2>

<p>这种模式使用一个简单的 flex 布局摆布，展示了一行 CSS 如何为我们提供导航。分隔符是由 CSS 内容生成属性添加的，你也可以将其换成其他想要的分隔符（样式）。</p>

<h2 id="无障碍访问问题">无障碍访问问题</h2>

<p>我使用了 <code>aria-label</code> 和 <code>aria-current</code> 属性来帮助用户理解这个导航的结构，以及当前页面在结构中的位置。 详情请参见相关链接。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">另请参阅</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS 弹性盒子布局</a></li>
 <li><a href="https://www.w3.org/TR/WCAG20-TECHS/G65.html">提供面包屑路径</a></li>
 <li><a href="https://tink.uk/using-the-aria-current-attribute/">使用 aria-current 属性</a></li>
</ul>
