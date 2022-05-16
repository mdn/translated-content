---
title: 标记信件
slug: learn/HTML/Introduction_to_HTML/Marking_up_a_letter
tags:
  - HTML
  - 初学者
  - 文件头
  - 文本
  - 标记
  - 格式
  - 测验
  - 超链接
translation_of: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}</div>

<p class="summary">写信是每个人的必备技能，它也是测验文本格式化技能的一个不错的办法呀！ 本次测验要求你为你一封写好的信做出标记，以测验你基础和高级的 HTML 文本格式化技能，包括超链接等等。此外将测验你对一些 HTML <code>&lt;head&gt;</code> 内容的熟悉程度。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">预备知识：</th>
   <td>阅读并掌握以下文章的内容：<a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/Getting_started">开始学习 HTML</a> 、<a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML">“头”里有什么？HTML 元信息</a>、<a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML 文字处理初步</a>、<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">创建超链接</a> 和 <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting">高级文字格式</a>。</td>
  </tr>
  <tr>
   <th scope="row">学习目标：</th>
   <td>测验对 HTML 文本格式和超链接基本和高级用法、HTML <code>&lt;head&gt;</code> 内容的理解程度。</td>
  </tr>
 </tbody>
</table>

<h2 id="起点">起点</h2>

<p>开始测验之前，请先<a href="https://github.com/roy-tian/learning-area/tree/master/html/introduction-to-html/marking-up-a-letter-start">下载信件的起始文本和CSS代码</a>。然后用文本编辑器（用 <a class="external-icon external" href="http://jsbin.com/">JSBin</a> 或 <a class="external-icon external" href="https://glitch.com/">Glitch</a> 等在线编辑工具亦可）创建一个新的 <code>.html</code> 文件来进行测验。</p>

<h2 id="项目概要">项目概要</h2>

<p>本项目中，你的任务为一封大学内网信件进行标记，这封信是研究人员对一名学生有关申请博士学位问题的回复。</p>

<p>块/结构语义：</p>

<ul>
 <li>你应该使用适当的结构来构造整体文档，包括doctype、<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html" title="HTML &lt;html>元素表示HTML文档的根（顶层元素），因此也称为根元素。所有其他元素必须是此元素的后代。"><code>&lt;html&gt;</code></a> 、 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head" title="HTML &lt;head>元素提供有关文档的一般信息（元数据），包括其标题和其脚本和样式表的链接。"><code>&lt;head&gt;</code></a>和<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body" title="HTML &lt;body>元素表示HTML文档的内容。文档中只能有一个&lt;body>元素。"><code>&lt;body&gt;</code></a>元素。</li>
 <li>除下面提到的几点之外，这封信应该被标记成有着段落和标题的结构。 这封信有 1 个顶级标题（“回复：”那行）和 3 个二级标题。</li>
 <li>使用适当类型的列表标记该学期的开学时间、学习科目和异域舞蹈。</li>
 <li>两个地址应该放在<code><a href="/zh-CN/docs/Web/HTML/Element/address">&lt;address&gt;</a></code>元素下. 每行的地址应该放在新的一行而不是新的段落.</li>
</ul>

<p>内联语义：</p>

<ul>
 <li>应着重显示发信人和收信人的姓名（以及“电话”和“电子邮件”字样）。</li>
 <li>用适当的元素把文档中的四个日期标记成机器可读的日期。</li>
 <li>为信中第一个地址和第一个日期设置一个类属性“<code>sender-column</code>”，这样就能通过添加CSS 来使它们右对齐，以符合经典信件的布局。</li>
 <li>信件正文中有 2 个首字母缩略词/缩写词，标记出它们的扩展形式。</li>
 <li>正确标注 6 个下标/上标（位于化学方程式、科学计数法中）。</li>
 <li>试着标记至少对两个单词进行着重（<code>&lt;strong&gt;</code>）/ 强调（<code>&lt;em&gt;</code>）显示。</li>
 <li>有两个地方应加上超链接，要为它们添加适当的标题。链接指向 https://example.com/ 即可。</li>
 <li>用适当的元素标记校训和引文。</li>
</ul>

<p>文档的头部：</p>

<ul>
 <li>用适当的元标签把文档的字符集声明为 utf-8。</li>
 <li>用适当的元标签说明信件的作者。</li>
 <li>用适当的标签引入我们提供的 CSS 代码。</li>
</ul>

<h2 id="提示和技巧">提示和技巧</h2>

<ul>
 <li>使用 <a class="external external-icon" href="https://validator.w3.org/">W3C HTML验证器</a> 来验证 HTML，验证通过有额外加分。</li>
 <li>完成这个测验不需要任何 CSS 知识，只需把现成的 CSS 放到 HTML 元素里就好。</li>
</ul>

<h2 id="范例">范例</h2>

<p>以下截图展示了这封信标记完成后可能的外观（可 <a class="external external-icon" href="https://roy-tian.github.io/learning-area/html/introduction-to-html/marking-up-a-letter-finished/">在线查看</a>）。</p>

<p><img alt="排版信件截图" src="https://mdn.mozillademos.org/files/16534/letter.jpg" style="border: 1px solid black; display: block; margin: 0px auto;"></p>

<h2 id="测验">测验</h2>

<p>如果你是在课堂上进行这个测验，你可以把作品交给导师或教授去打分了。如果你是在自学，也可以在 <a href="https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294">本节测验的讨论页</a> 或者 <a href="https://wiki.mozilla.org/IRC">Mozilla 聊天室 </a>的 <a href="irc://irc.mozilla.org/mdn">#mdn</a> 频道取得帮助。要自己先尝试，作弊是不会有收获的！</p>

<p>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}</p>

<h2 id="本章目录">本章目录</h2>

<ul>
 <li><a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/Getting_started">开始学习 HTML</a></li>
 <li><a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML">“头”里有什么？HTML 元信息</a></li>
 <li><a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML 文字处理初步</a></li>
 <li><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">创建超链接</a></li>
 <li><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting">高级文字格式</a></li>
 <li><a href="/zh-CN/docs/learn/HTML/Introduction_to_HTML/文件和网站结构">文档和站点结构</a></li>
 <li><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML">HTML 调试</a></li>
 <li><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter">课程测验：为信件排版</a></li>
 <li><a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content">课程测验：构建内容丰富的网页</a></li>
</ul>
