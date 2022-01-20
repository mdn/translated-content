---
title: 运行实例
slug: MDN/Structures/Live_samples
tags:
  - Guide
  - Intermediate
  - MDN Meta
  - NeedsTranslation
  - Structures
  - TopicStub
translation_of: MDN/Structures/Live_samples
---
<div>{{MDNSidebar}}</div><p><span class="seoSummary">MDN 支持将文章中的示例代码转化为运行实例。运行实例可以包括 HTML、CSS、 JavaScript 的任意组合。</span>注意，“运行”的实例是<em> 非交互性 </em>的。它们仅仅由代码示例生成，只是用来展示示例的输出效果。本文在JavaScript语法的基础上说明了该系统的集体使用。</p>

<h2 id="运行实例系统如何工作">运行实例系统如何工作</h2>

<p>运行实例系统将所有代码整合为一个集合，再将这个集合融合到一个 HTML 文件中，然后在 内联框架{{HTMLElement("iframe")}} 中渲染这个文件。一个运行实例由两个部分构成：</p>

<ul>
 <li>一个代码块组成的集合</li>
 <li>一个调用（创建的框架或链接）该代码块结果的宏</li>
</ul>

<p>一个代码块的集合，在此上下文中，以行级或块级元素（类似 {{HTMLElement("div")}} ）的 id作为标识。</p>

<ul>
 <li>如果这个 id 属于一个块级元素，该集合将包含该块元素包含范围内的所有代码。</li>
 <li>如果这个编号属于一个行级元素，该集合将包含本行级元素之后到下个同级行级元素之前的所有代码。请注意，子元素下的代码块也会被包含，如果不希望这样的效果，可以使用块级元素的id。</li>
</ul>

<p>宏使用一个特殊的 URL 来取得一个分组中的代码示例：<code>https://<em>url-of-page</em>_samples_/<em>group-id</em></code>。 <code>group-id</code> 指代码所在行级或者块级元素的id。用来展示运行结果的框架(或页面)会运行在沙盒中，在安全条件下实现任何想在网络上实现的功能。当然，在实践中，代码需要针对于包含它的页面，否则会被社区编辑移除。</p>

<div class="note">
<p><strong>注意：</strong><strong>必须</strong>使用宏来展示运行实例的输出。为保安全，MDN 编辑器将会移除直接使用 <code>&lt;iframe&gt;</code> 标签的地方。</p>
</div>

<p>每个包含示例代码的 {{HTMLElement("pre")}}  段落都有一个 class 指示它由何种语言写成（HTML、CSS 或 JavaScript）。这些 class 的值是“brush: html”、“brush: css”或“brush: js”。这些 class 必须与代码匹配以被维基正确使用。一般情况下，当你在使用编辑器工具栏的语法高亮时候，这些属性会被自动添加。</p>

<p>运行实例系统由很多可用选项，我们会分解开来讲解。</p>

<h3 id="运行实例宏">运行实例宏</h3>

<p>你可以用两种宏来展示实例：</p>

<ul>
 <li><span class="templateLink"><code><a href="/en-US/docs/Template:EmbedLiveSample">EmbedLiveSample</a></code></span> 将一个运行实例嵌入到页面中</li>
 <li><span class="templateLink"><code><a href="/en-US/docs/Template:LiveSampleLink">LiveSampleLink</a></code></span> 创建一个链接，在新的页面中打开运行实例</li>
</ul>

<p>在很多情况下，可以很便捷地使用以上两种宏 <span class="templateLink"><code><a href="/en-US/docs/Template:EmbedLiveSample">EmbedLiveSample</a></code></span> 或 <span class="templateLink"><code><a href="/en-US/docs/Template:LiveSampleLink">LiveSampleLink</a></code></span> 。只要代码示例可以通过一个行级元素的id 或一个块级元素的id 的区分开，就可以简单的插入宏来实现功能。</p>

<h4 id="页内运行实例宏">页内运行实例宏</h4>

<pre class="syntaxbox notranslate"> \{{EmbedLiveSample(<em>block_ID</em>, <em>width</em>, <em>height</em>, <em>screenshot_URL</em>, <em>page_slug</em>)}}</pre>

<dl>
 <dt>block_ID</dt>
 <dd>必需。包含示例代码的元素的 id 。保证 ID正确的最好的办法是在内容表中查看 URL。</dd>
 <dt>width</dt>
 <dd>可选。创建的 {{HTMLElement("iframe")}} 元素的宽度，以 <code>px</code> 为单位。若忽略该项，系统会使用一个合理的默认宽度。请注意，如果需要指定该项，那么<strong>必须</strong>同时指定高度。</dd>
 <dt>height</dt>
 <dd>可选。创建的 {{HTMLElement("iframe")}} 元素的高度，以 <code>px</code> 为单位。若忽略该项，系统会使用一个合理的默认高度。请注意，如果需要指定该项，那么<strong>必须</strong>同时指定宽度。如果仅仅指定了高度和宽度中的一个，那么系统会应用默认尺寸。</dd>
 <dt>screenshot_URL</dt>
 <dd>可选。截屏 URL 显示了运行实例的效果。对于用户浏览器尚未支持的新技术很有用，他们就可以看到结果的快照。如果指定该项，截屏会带着相关标题显示在运行实例之后。</dd>
 <dt>page_slug</dt>
 <dd>可选。包含示例的页面的代称。若忽略该项，示例将会从宏所在页面拉取。</dd>
</dl>

<ol>
</ol>

<h4 id="链接运行实例宏">链接运行实例宏</h4>

<pre class="syntaxbox notranslate"> \{{LiveSampleLink(<em>block_ID</em>, <em>link_text</em>)}}</pre>

<dl>
 <dt>block_ID</dt>
 <dd>必需。根据标题或段落的 ID 识别示例。保证正确使用 ID 最好的办法是在页面的目录中查找 URL。</dd>
 <dt>link_text</dt>
 <dd>链接地址文本。</dd>
</dl>

<h2 id="使用运行实例系统">使用运行实例系统</h2>

<p>以下部分描述了一些运行实例系统的常见用例。</p>

<p>在所有这些用例中，必须点击编辑器的“<strong>保存更改</strong>”（将关闭编辑模式）才能看到运行实例。“预览变更”功能不可展示运行实例。</p>

<h3 id="将片段转为运行实例">将片段转为运行实例</h3>

<p>一个常见的用例是将 MDN 中已有代码片段转为运行实例。</p>

<h4 id="准备代码示例">准备代码示例</h4>

<p>第一步是添加代码片段，或根据内容和标记确认已有片段可以成为运行实例。代码片段必须组成一个完整可运行的示例。比如，如果已有 <code>CSS</code> 片段，那么需要添加一段 <code>HTML</code>。</p>

<p>每段代码都需要包含在正确标记其语言的 {{HTMLElement("pre")}} 块中，每块中只能包含一种语言。多数情况下，这些步骤都没问题，不过再检查一遍总是好的。工具栏中<strong> <code>PRE</code> </strong>图标旁的按钮是一个提供选择语法的下拉框（语法高亮）。该选项除了设置语法高亮以外，还标记了代码片段在运行实例系统中的语言。</p>

<div class="note">
<p><strong>注意：</strong>每种语言的代码可以分布在几个 {{HTMLElement("pre")}} 块里，所有代码会被连接起来。这个特性允许一块代码对应一块简介。这样有利于制作教程，比如代码间夹杂着大量的注释。</p>
</div>

<p>所以确认代码块被正确标记为其所用语言，然后你可以继续了。</p>

<div class="note">
<p><span style="font-size: 14px; line-height: 21px;"><strong>注意：</strong></span>当向MDN中粘贴内容时，请注意在粘贴带样式的内容时，可能会带来不需要的样式（比如复制高亮代码）。请尽量避免粘贴带样式的内容，在必须的情况下，请在源码模式中删除不需要的样式，或者使用“粘贴为纯文本”。</p>
</div>

<h4 id="插入运行实例宏">插入运行实例宏</h4>

<p>当代码准备好并被正确标记之后，需要插入宏来创建 <code>iframe</code>。</p>

<ol>
 <li>点击“<strong>插入运行实例框架</strong>”按钮（<img alt="" src="https://mdn.mozillademos.org/files/5383/insert-live-sample-btn.png" style="height: 18px; width: 19px;">），将会打开一个对话框可以配置。<img alt="" src="https://mdn.mozillademos.org/files/5385/sample-finder.png" style="height: 358px; width: 405px;"></li>
 <li>
  <p>在 <strong>Document</strong> 下方，输入包含实例的文章标题。默认是当前正被编辑的文章，但是可以被更改为 MDN 中的其它文章。这项特性允许在不同的页面中重用实例。（如果输入文字，将会出现一个部分匹配输入内容文章列表，可以从中选取需要的文章。）</p>
 </li>
 <li>在 <strong>Sections in Document</strong> 选项中，选取需要将包含实例的部分。</li>
 <li>点击 <strong>OK</strong> 按钮，生成并将宏插入到文章中，宏调用代码看起来是这样的：<br>
  <strong>\{{ EmbedLiveSample('Live_sample_demo') }}</strong></li>
</ol>

<h3 id="增加新的运行实例">增加新的运行实例</h3>

<p>在编辑一个新的一页需要插入运行实例时，编辑器做更多工作。</p>

<ol>
 <li>点击 <strong>Insert Code Sample Template</strong> 按钮（<img alt="" src="/files/4265/live-sample-button.png" style="height: 19px; width: 21px;">），将会出现这样的对话框。<br>
  <img alt="" src="https://mdn.mozillademos.org/files/5387/insert-live-sample-template.png" style="height: 155px; width: 251px;"></li>
 <li>输入运行实例的标题，请确保标题对于当前页面是有意义的。</li>
 <li>点击 <strong>OK</strong>。会创建一个新的标题，还有一个空的代码框，可以输入 HTML、CSS 或 JavaScript。</li>
 <li>删除不需要的标题的代码框。</li>
 <li>输入代码</li>
</ol>

<h2 id="Live_sample_demo" name="Live_sample_demo">查找需要更新的示例</h2>

<p>当查询实例的时候，有三种可能的更新方式。</p>

<ul>
 <li>将一个非运行实例转为运行实例</li>
 <li>解决运行实例的缺陷或错误</li>
 <li>在技术有变更时，提升或更新运行实例</li>
</ul>

<div class="note">
<p><strong>注意：</strong>如果发现包含需要更新到运行实例系统的文章，请为文章增加标签“ NeedsLiveSample ”。</p>
</div>

<h3 id="查找需要转为运行实例的示例">查找需要转为运行实例的示例</h3>

<p>MDN 上有很多老版本的并且使用运行实例系统的示例。我们希望可以将多数示例更新到运行实例。这将会提升网站的一致性和可用性。在访问 MDN 时，你一定经常看到这些例子。然而，很难如果你想要找到某个特定的例子来更新，不过有一些方法可以试一试。</p>

<ul>
 <li>查询<a href="/en-US/docs/tag/NeedsLiveSample" title="/en-US/docs/tag/NeedsLiveSamples">带“NeedsLiveSample”的页面</a>。这些页面被用户标记为需要更新。如果发现需要被更新到运行实例的页面但是没时间理科更新的话，你也需要将该页面加上这个标记。</li>
 <li>浏览可能包含示例的文档。比如 <a href="/en-US/docs/Web/JavaScript/Guide" title="/en-US/docs/Web/JavaScript/Guide">JavaScript Guide</a>、<a href="/en-US/docs/Web/HTML" title="/en-US/docs/Web/HTML">HTML documentation</a> 和 <a href="/en-US/docs/Web/CSS/Reference" title="/en-US/docs/Web/CSS/Reference">CSS reference</a>。</li>
 <li>查看类似“<a href="/en-US/search?q=example" title="/en-US/search?q=example">example</a>”或“<a href="/en-US/search?q=sample" title="/en-US/search?q=sample">sample</a>”的关键词的搜索结果页面。</li>
</ul>

<h2 id="Live_sample_demo" name="Live_sample_demo">运行实例演示</h2>

<p>这部分是使用“插入运行实例模板”按钮插入运行实例标题和代码块的结果。每种语言可以有不止一个代码块。同样也不需要有特定的顺序，所有代码会被混合匹配。</p>

<p>可以选取删除任何部分。如果不需要脚本，那么删掉脚本的标题和代码块就可以了。同样，也可以删掉其余任何代码块。</p>

<p>代码模板插入之后，可以增加一些代码，也可以加入一些注释。</p>

<h3 id="HTML">HTML</h3>

<p>这段 HTML 代码创建了一个段落和几个 <code>DIV</code> 可以展示信息。</p>

<pre class="brush: html notranslate">&lt;p&gt;A simple example of the live sample system in action.&lt;/p&gt;
&lt;div class="box"&gt;
  &lt;div id="item"&gt;Hello world!&lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<p>这段 CSS 代码为信息增加样式。</p>

<pre class="brush: css notranslate">.box {
  width: 200px;
  height: 100 px;
  border-radius: 6px;
  background-color: #ffaabb;
}

#item {
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
}
</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>这段代码很简单，只是增加了一个点击事件来弹出信息。</p>

<pre class="brush: js notranslate">var el = document.getElementById('item');
el.onclick = function() {
  alert('Owww, stop poking me!');
}
</pre>

<p>这里通过<code>\{{EmbedLiveSample('Live_sample_demo')}}</code>来展示上面实例运行的结果。</p>

<p>{{EmbedLiveSample('Live_sample_demo')}}</p>

<p>这是使用外链宏<code>\{{LiveSampleLink('Live_sample_demo', 'Live sample demo link')}}</code>来展示实例运行的结果。</p>

<p>{{LiveSampleLink('Live_sample_demo', 'Live sample demo link')}}的集合</p>
