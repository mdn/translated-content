---
title: 处理文件
slug: Learn/Getting_started_with_the_web/Dealing_with_files
tags:
  - HTML
  - 初学者
  - 指南
  - 文件
  - 理论
  - 网站
translation_of: Learn/Getting_started_with_the_web/Dealing_with_files
---
<p>{{LearnSidebar}}</p>

<p>{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}</p>

<div class="summary">
<p>网站由文本、代码、样式表、媒体内容等多种文件组成。构建站点时要确保文件夹结构组织合理，文件之间交互畅通，没有明显错误，然后再<a href="https://developer.mozilla.org/zh-CN/Learn/Getting_started_with_the_web/Publishing_your_website">上传至服务器</a>。本节将讨论组织网站文件要注意的一些问题。</p>
</div>

<h2 id="网站应该保存在何处？">网站应该保存在何处？</h2>

<p>对于本地网站，应将所有相关文件放在一个单独文件夹中，可以映射出服务器端站点文件结构。文件夹存在哪儿都可以，只要容易找到，比如桌面、用户家目录，或是系统根目录。</p>

<ol>
 <li>确定网站项目储存位置。在该位置下创建一个文件夹（比如 <code>web-projects</code>）。所有网站项目都存在一处。</li>
 <li>在这个文件夹里再新建一个文件夹（比如 <code>test-site</code>，读者可自由发挥想象），来存放第一个网站。</li>
</ol>

<h2 id="关于大小写和空格的提示">关于大小写和空格的提示</h2>

<p>你会注意到，文中所有的文件夹名和文件都使用小写字母，且没有空格。这是因为：</p>

<ol>
 <li>很多计算机，特别是 Web 服务器，是对大小写敏感的。比如，如果你保存一张图片 <code>test-site/MyImage.jpg</code>，然后在另一处试图以 <code>test-site/myimage.jpg</code> 访问这张图片，可能会失败。</li>
 <li>浏览器、Web 服务器，还有编程语言处理空格的方式不一致。比如，一些系统会将包含空格的文件名其视为两个。一些服务器将会把文件名里的空格替换为 “%20”（URI 里空格的编码），从而使链接遭到破坏。最好使用中划线，而不是下划线来分离单词：对比 <code>my-file.html</code> 和 <code>my_file.html</code> 。</li>
</ol>

<p>简言之，文件名中应使用连字符。谷歌搜索引擎把连字符当作单词的分隔符， 但不会识别下划线。基于此，最好在一开始就养成习惯，文件夹和文件名使用小写，用短横线而不是空格来分隔。可以避免许多问题。</p>

<h2 id="网站应该使用什么结构？">网站应该使用什么结构？</h2>

<p>下面来看看测试网站应该使用什么结构。最基本、最常见的结构是：一个主页、一个图片文件夹、一个样式表文件夹和一个脚本文件夹：</p>

<ol>
 <li><code><strong>index.html</strong></code> ：这个文件一般包含主页内容，即用户第一次访问站点时看到的文本和图像。使用文本编辑器在 <code>test-site</code> 文件夹中新建 <code>index.html</code>。</li>
 <li><strong><code>images</code> 文件夹 </strong>：这个文件夹包含站点中的所有图像。在 <code>test-site</code> 文件夹中新建 <code>images</code> 文件夹。</li>
 <li><strong><code>styles</code> 文件夹 </strong>：这个文件夹包含站点所需样式表（比如，设置文本颜色和背景颜色）。在 <code>test-site</code> 文件夹中新建一个 <code>styles</code> 文件夹。</li>
 <li><strong><code>scripts</code> 文件夹 </strong>：这个文件夹包含提供站点交互功能的 JavaScript 代码（比如读取数据的按钮）。在 <code>test-site</code> 文件夹中新建一个 <code>scripts</code> 文件夹。</li>
</ol>

<div class="note">
<p><strong>注：</strong>Windows 中查看完整文件名有点小麻烦，因为 Windows 默认开启“<strong>隐藏已知文件类型扩展名</strong>”选项。在 Windows 8/10 中，可以打开资源管理器，选择“<strong>查看</strong>”选项卡，在“<strong>显示/隐藏</strong>”列中，选中“<strong>文件扩展名</strong>”复选框。其它 Windows 版本操作方法可在网上搜索。</p>
</div>

<h2 id="文件路径">文件路径</h2>

<p>为使文件间正常交互，应为每个文件提供访问路径，让一个文件知道另一个文件的位置。作为演示，我们在 <code>index.html</code> 文件中插入一小段 HTML，让其显示 <a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like">设计网站外观</a> 小节中的火狐图案。</p>

<ol>
 <li>将火狐图案保存到 <code>images</code> 文件夹。</li>
 <li>打开 <code>index.html</code> 文件，粘贴以下代码。现在看不懂不用担心，以后会慢慢讲解。
  <pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;我的测试页面&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;img src="" alt="我的测试页面"&gt;
  &lt;/body&gt;
&lt;/html&gt; </pre>
 </li>
 <li><code>&lt;img src="" alt="我的测试页面"&gt;</code> 是在页面里插入图像的 HTML 代码。我们需要告诉 HTML 图像的位置。这张图片在<em> images </em>目录下<em>，</em>而<em> images </em>目录与 <code>index.html</code> 处于同级目录。要从 <code>index.html</code> 所处一级目录进入图片所在目录，所需的文件路径是 <code>images/image-filename.png</code> 。例如，这里的图像叫做 <code>firefox-icon.png</code> ，所以文件路径就是 <code>images/firefox-icon.png</code> 。</li>
 <li>在 HTML 代码里 <code>src＝""</code> 的双引号中插入文件路径。</li>
 <li>保存 HTML 文件，然后使用浏览器打开（双击文件）。火狐图案显示出来了！</li>
</ol>

<p><img alt="基础网页截图，FireFox 标志：一只盘旋在地球上的火狐" src="https://mdn.mozillademos.org/files/9229/website-screenshot.png" style="display: block; height: 542px; margin: 0px auto; width: 690px;"></p>

<p>文件路径的一些通用规则：</p>

<ul>
 <li>若引用的目标文件与 HTML 文件同级，只需直接使用文件名，比如 <code>my-image.jpg</code> 。</li>
 <li>要引用子文件夹中的文件，要在路径前写下目录名并加一个斜杠，比如 <code>subdirectory/my-image.jpg</code> 。</li>
 <li>若引用的目标文件位于 HTML 文件的<strong>上级</strong>，需要加上两个点。比如，如果 <code>index.html</code> 在 <code>test-site</code> 下面的一个子目录而 <code>my-image.png</code> 在 <code>test-site</code> 目录，你可以在 <code>index.html</code> 里使用 <code>../my-image.png</code> 引用 <code>my-image.png</code> 。</li>
 <li>以上方法可以随意组合，比如 <code>../subdirectory/another-subdirectory/my-image.png</code>。</li>
</ul>

<div class="note"><strong>注：</strong>Windows 文件系统使用反斜杠而不是正斜杠，比如 <code>C:\Windows</code> 。但与 HTML 没什么关系，即使在 Windows 上做 Web 开发，代码中仍应使用正斜杠。</div>

<p>大功告成。现在站点文件夹结构应该类似于：</p>

<p><img alt="macOS 访达呈现的文件夹结构，包含1个图像文件夹（包含1幅图案）、1个样式表文件夹、1个脚本文件夹、1个主页" src="https://mdn.mozillademos.org/files/9231/file-structure.png" style="display: block; height: 577px; margin: 0px auto; width: 929px;"></p>

<p>{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}</p>

<h2 id="本章目录">本章目录</h2>

<ul>
 <li id="Installing_basic_software"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software">安装基础软件</a></li>
 <li id="What_will_your_website_look_like"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like">设计网站外观</a></li>
 <li id="Dealing_with_files"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files">处理文件</a></li>
 <li id="HTML_basics"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML 基础</a></li>
 <li id="CSS_basics"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS 基础</a></li>
 <li id="JavaScript_basics"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript 基础</a></li>
 <li id="Publishing_your_website"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/Publishing_your_website">发布网站</a></li>
 <li id="How_the_web_works"><a href="/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works">Web 工作机制</a></li>
</ul>
