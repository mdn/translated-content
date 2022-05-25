---
title: HTML 介绍
slug: learn/HTML/Introduction_to_HTML
tags:
  - HTML介绍
  - 文本
  - 结构
  - 链接
translation_of: Learn/HTML/Introduction_to_HTML
---
<div>{{LearnSidebar}}</div>

<p class="summary">就其核心而言， {{glossary("HTML")}} 是一种相当简单的、由不同<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/元素" title="zh-CN/docs/Glossary/Element">元素</a>组成的标记语言，它可以应用于文本片段，使文本在文档中具有不同的含义（它是一个段落吗？它是一个项目列表吗？它是一个表格吗？），将文档结构化为逻辑块（文档是否有头部？有三列内容？有一个导航菜单？），并且可以将图片，影像等内容嵌入到页面中。本模块将介绍前两个，并且介绍一些理解HTML所需的基本概念和语法。</p>

<h2 id="前提">前提</h2>

<p>在开始这个模块之前，你不需要预先具有任何HTML的知识，但是你需要至少熟悉一些使用电脑的基础，会被动地使用网络（也就是仅需要看着它，浏览内容）。你应该为电脑配置一个基本的工作环境，这在<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software">安装基本软件</a>的页面中有详细说明，并且需要懂得如何创建和管理文件，这在<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files">处理文件</a>页面中有详细说明 —— 它们都是我们纯新手<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web">web开发入门</a>模块的一部分。</p>

<div class="note">
<p><strong>注意：</strong>如果你工作在一个无权创建自己文件的电脑/平板/其他设备上，你需要在一个在线编程工具上试验 （大多数）代码示例，如 <a href="http://jsbin.com/">JSBin</a> 或者 <a href="https://glitch.com/">Glitch</a>等。</p>
</div>

<h2 id="指南">指南</h2>

<p>这个模块包含以下文章，这些文章会帮你过一遍HTML所有的基本理论，并且提供足够的实践机会。</p>

<dl>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started">HTML入门</a></dt>
 <dd>涵盖了HTML绝对基础的知识来帮助你入门——我们定义元素、属性和其他重要术语，以及它们属于语言的哪个部分。我们也会展示一个典型的HTML 页面是如何被结构化的，以及一个 HTML 元素是如何被结构化的 ，并且解释另一些基础但重要的语言特性。一路下来，我们会与一些 HTML一起玩耍，来激发你的兴趣！</dd>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML">Head中有什么？HTML中的元数据</a></dt>
 <dd>当页面被加载后HTML中的head部分<strong>是不会</strong>被显示在web浏览器中的。它包含了许多信息，例如网页的标题{{htmlelement("title")}}，指向{{glossary("CSS")}}的链接（如果你想用CSS来设计HTML内容的样式），指向自定义网站图标的链接和一些元数据（关于HTML本身的数据，例如它的作者和描述这个文档的关键字）。</dd>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML 文字处理基础 </a></dt>
 <dd>HTML的主要工作之一就是给予文本意义（也被叫做<strong>语义</strong>），所以浏览器就知道如何正确的显示文本了。这篇文章关注于如何用HTML来将文本块分解为结构化的标题和段落、强调和加粗单词 、创建列表和其他。</dd>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">创建超链接</a></dt>
 <dd>超链接真的很重要 - 它们是使Web成为一个Web。本文介绍了创建链接所需的语法，并讨论了链接的最佳实践。</dd>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting">高级文本排版</a></dt>
 <dd>HTML中有许多其他元素可以用于格式化文本，我们没有在<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML 文字处理基础</a>中提到它们。这些元素不太知名，但了解它们仍然有用。在这篇文章里，你将学习如何标记引文、描述列表、计算机代码和其他类似的文本、下标和上标、联系信息等。</dd>
 <dt><a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/文件和网站结构">文档和网站结构</a></dt>
 <dd>除了定义页面的各个部分（例如“段落”或“图像”）外，HTML也用于定义网站的区域（例如“标题”，“导航菜单”，“主内容列“）。本文探讨如何规划基本网站结构，以及如何编写HTML以表示此结构。</dd>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML">调试 HTML</a></dt>
 <dd>编写HTML是好的，但如果出现了什么问题，而且你没能找到代码中的错误在哪里的话，本文将向你介绍一些可以帮上忙的工具。</dd>
</dl>

<h2 id="考核">考核</h2>

<p>以下考核将测试你对上述指南中HTML基础知识的理解。</p>

<dl>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter">制造一份信件</a></dt>
 <dd>我们或早或晚都学会了如何写一封信，这也是一个不错的用来测试我们的文本格式化技能例子！所以在这个评估中，你会得到一封信来标记。</dd>
 <dt><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content"> 结构化页面内容</a></dt>
 <dd>此评估测试你能否使用HTML构建简单的内容页面，其中包含页眉、页脚、导航菜单、主要内容和侧边栏。</dd>
</dl>

<h2 id="相关链接">相关链接</h2>

<dl>
 <dt><a href="https://mozilla.github.io/content/web-lit-whitepaper/">网络文化基础 2</a></dt>
 <dd>一个优秀的Mozilla基础课程，探索和测试在HTML模块介绍中讨论的许多技能。学习者熟悉阅读，写作和参与这个六部分模块的网络。通过生产和协作掌握网络的基础。</dd>
 <dt></dt>
</dl>

<div class="note">
<h2 id="反馈">反馈</h2>

<p><a href="https://www.surveygizmo.com/s3/4871248/MDN-Guides-Survey">点击这里进入我们的调查</a>来协助我们完善这份指南和教程.</p>
</div>
