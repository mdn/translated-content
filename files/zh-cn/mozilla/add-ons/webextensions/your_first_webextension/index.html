---
title: 你的第一个拓展
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
tags:
  - WebExtentions
  - 指南
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---
<div>{{AddonSidebar}}</div>

<p>在这篇文章中，我们将为 Firefox 创建一个扩展。这个扩展只是给从 "firefox.org" 或其任意子域名加载的任何页面添加一个红色边框。</p>

<p>该示例的源代码位于 GitHub：<a href="https://github.com/mdn/webextensions-examples/tree/master/borderify">https://github.com/mdn/webextensions-examples/tree/master/borderify</a></p>

<p>首先，你需要 Firefox 45 或更高版本。</p>

<h2 id="编写扩展">编写扩展</h2>

<p>创建一个新的目录并切换到该目录。例如，在你的命令行/终端，你可以这么做：</p>

<pre class="brush: bash">mkdir borderify
cd borderify</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>现在，在 "borderify" 目录内直接创建文件 "manifest.json"。文件内容如下：</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}</pre>

<ul>
 <li>前三个键：<code><a href="/zh-CN/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code>、<code><a href="/zh-CN/Add-ons/WebExtensions/manifest.json/name">name</a></code> 和 <code><a href="/zh-CN/Add-ons/WebExtensions/manifest.json/version">version</a></code> 是强制的，包含有扩展的基本元数据。</li>
 <li><code><a href="/zh-CN/Add-ons/WebExtensions/manifest.json/description">description</a></code> 是可选的，但建议使用「该描述将显示在附加组件管理器上」.</li>
 <li><code><a href="/zh-CN/Add-ons/WebExtensions/manifest.json/icons">icons</a></code> 是可选的，但建议使用「它允许你给扩展指定一个图标，将显示在附加组件管理器上」.</li>
</ul>

<p>这里最有意思的键是 <code><a href="/zh-CN/Add-ons/WebExtensions/manifest.json/content_scripts">content_scripts</a></code>，它告诉 Firefox 加载脚本到其 URL 匹配特定模式的网页。本例中，我们要求 Firefox 加载脚本 "borderify.js" 到任何来自 "mozilla.org" 或其子域的 HTTP 或 HTTPS 页面。</p>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Content_scripts">进一步了解内容脚本 content script</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Match_patterns">进一步了解模式匹配 pattern matching</a></li>
</ul>

<div class="warning">
<p><strong>警告：</strong> <a href="/zh-CN/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID">某些情况下，你需要给你的扩展指定一个 ID</a>。如果你需要指定一个附加组件 ID，请在 <code>manifest.json</code> 中添加 <code><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings">browser_specific_settings</a></code> 键，并设置其 <code>gecko.id</code> 属性：</p>

<pre class="brush: json">"browser_specific_settings": {
  "gecko": {
    "id": "borderify@example.com"
  }
}</pre>
</div>

<h3 id="iconsborder-48.png">icons/border-48.png</h3>

<p>扩展应该有一个图标。这将显示在附加组件管理器加载项的列表中。我们的 manifest.json 保证了会有一个图标 "icons/border-48.png"。</p>

<p>在 "borderify" 目录下直接创建 "icons" 目录，并在 "icons" 目录下保存一个名为 "border-48.png"的图标。你可以使用<a href="https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png">我们的示例</a>中的，来自谷歌材料设计语言 (Material Design) 中的图标，遵循 <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike</a> 协议。</p>

<p>如果您选择使用自己的图标，它也应该是 48×48 像素。你也可以为高分辨率显示器提供一个 96x96 的像素图标，在 manifest.json 的 <code>icons</code> 对象中添加 <code>96</code> 属性即可：</p>

<pre class="brush: json">"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}</pre>

<p>或者，也可以在这里提供一个 SVG 文件，它会被正确地缩放。(不过：如果你正在使用 SVG 并且你的图标包含文字，有可能想要用你的 SVG 编辑器的“转换为路径”工具来拼和文字，这样图标会以一个恒定的大小/位置来缩放。）</p>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/manifest.json/icons">了解更多关于指定图标的内容</a></li>
</ul>

<h3 id="borderify.js">borderify.js</h3>

<p>最后，在 "borderify" 目录下直接创建 "borderify.js" 文件，并写入下面的内容：</p>

<pre class="brush: js">document.body.style.border = "5px solid red";</pre>

<p>manifest.json 文件中 <code>content_scripts</code> 的键给出了一条模式匹配，该脚本便会被加载到匹配的页面中。该脚本会像页面加载自己的脚本一样被加载，可以直接访问该文档。</p>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Content_scripts">了解更多关于内容脚本的内容。</a></li>
</ul>

<h2 id="测试一下">测试一下</h2>

<p>首先，仔细检查文件是否在正确的位置：</p>

<pre>borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json</pre>

<h3 id="安装">安装</h3>

<p>打开 Firefox 的 <a href="/zh-CN/docs/Tools/about:debugging">about:debugging</a> 页面，点击”This Firefox" (在新版本的 Firefox 里），点击 "临时加载附加组件（Load Temporary Add-on）" 按钮，并选择你的附加组件目录：</p>

<p>{{EmbedYouTube("cer9EUKegG4")}}</p>

<p>附加组件将会被安装，直到下次重启浏览器失效。</p>

<p>或者，你可以通过 <a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext">web-ext</a> 工具从命令行来运行扩展。</p>

<h3 id="测试">测试</h3>

<p>现在尝试访问"mozilla.org", 你将会在页面上看到有个红色的边框</p>

<p>{{EmbedYouTube("rxBQl2Z9IBQ")}}</p>

<div class="note">
<p><strong>备注：</strong> 不要在 addons.mozilla.org 上尝试！内容脚本（Content Script) 当前在那个域名下是被限制的。</p>
</div>

<p>尝试一下编辑内容脚本更改边框的颜色，或做页面内容别的修改，保存内容脚本，然后通过单击 <strong>about:debugging</strong> 页面下的 “刷新”按钮重新加载附加的文件。你可以马上看到的变化：</p>

<p>{{EmbedYouTube("NuajE60jfGY")}}</p>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">学习更多关于加载附加组件</a></li>
</ul>

<h2 id="打包和发布">打包和发布</h2>

<p>为了给其他人使用你的插件，您需要打包，并将其提交给 Mozilla 进行签名。要了解更多有关，请参考 <a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension">"发布你的扩展"</a>。</p>

<h2 id="下一步">下一步</h2>

<p>现在，你已经在开发 Firefox 的一个 Web 扩展的过程中得到了一些想法，尝试：</p>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Your_second_WebExtension">写一个更加复杂的 WebExtension</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">阅读更多关于 WebExtensions 的剖析</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples">探索更多关于扩展的示例</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next_">发现开发，测试，和发布扩展需要的东西</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next_#Continue_your_learning_experience">进一步的学习</a></li>
</ul>
