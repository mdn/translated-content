---
title: 从 object 到 iframe——其他嵌入技术
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

现在，你应该已经掌握了将图像、视频和音频嵌入到网页上的诀窍了。此刻，让我们继续深入学习，来看一些能让你在网页中嵌入各种类型内容的元素：{{htmlelement("iframe")}}、{{htmlelement("embed")}} 和 {{htmlelement("object")}} 元素。`<iframe>` 用于嵌入其他网页，另外两个元素则用于嵌入外部资源，例如 PDF 文件。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识、<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >安装基础软件</a
        >、<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >文件处理</a
        >的基本知识、熟悉 HTML 基础知识（阅读<a
          href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >开始学习 HTML</a
        >）以及本模块中以前的文章。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解如何使用 {{htmlelement("object")}}、{{htmlelement("embed")}} 以及 {{htmlelement("iframe")}} 元素，在网页中嵌入内容，例如 PDF 文档和其他网页。
      </td>
    </tr>
  </tbody>
</table>

## 嵌入的简史

在 Web 发展历程的很久以前，非常流行使用**框架**（frame）来创建网站——网站的各个小部分被存储在各自的 HTML 页面中。这些页面被嵌入到一个名为**框架集**的主文档中，其允许你指定每个框架在屏幕上所占的区域，这有点像是设定表格的列和行的大小。在 90 年代中后期，这种做法被认为是最流行的，并且有证据显示，这样将网页分割成更小的部分确实可以提高下载速度——这在当时缓慢的网络连接下尤其明显。然而，随着网络速度的提升，框架的许多问题开始凸显，这些问题远远超过了它的优点，因此现在已经很少看到有人使用这种技术了。

不久之后（20 世纪 90 年代末，21 世纪初），插件技术开始流行起来，例如 [Java Applet](/zh-CN/docs/Glossary/Java) 和 [Flash](/zh-CN/docs/Glossary/Adobe_Flash)——web 开发者借助这些技术将丰富的内容（例如视频和动画等）嵌入到网页中，这些内容不能通过 HTML 单独实现。嵌入这些技术是通过诸如 {{htmlelement("object")}} 和较少使用的 {{htmlelement("embed")}} 元素来实现的，当时它们非常有用。由于包括无障碍、安全性、文件大小在内的许多问题，它们现在已经被淘汰了。如今，大多数浏览器已不再支持 Flash 等插件。

最后，{{htmlelement("iframe")}} 元素出现了（连同其他嵌入内容的方式，如 {{htmlelement("canvas")}}、{{htmlelement("video")}} 等），它提供了将整个 web 页面嵌入到另一个网页的方法，就像它是另一个网页的一个 {{htmlelement("img")}} 之类的元素一样。现在经常使用该元素。

了解完历史之后，让我们继续往下看，了解如何使用它们。

## 动手练习：典型嵌入的使用

> [!NOTE]
> 考虑到中国大陆学习者可能无法访问英文原文的某些示例网站，下文的部分示例已经替换为更易于访问和实践的网站。

在这篇文章中，我们将直接进入动手练习部分，让你立即体会到嵌入技术的实用性。大家都非常熟悉 [Bilibili](https://www.bilibili.com/)，但很多人不了解它所提供的一些分享功能。让我们来看看如何借助 {{htmlelement("iframe")}}，将 Bilibili 上的视频嵌入到页面中。

1. 首先，去 Bilibili 找一个喜欢的视频。
2. 在视频下方，可以看到*分享*按钮（样式为一个向右箭头），鼠标停留在那个按钮上，可以看到一些分享选项。
3. 选择“嵌入代码”选项，会出现“成功复制到剪贴板”的提示。
4. 将复制的代码粘贴到下面的*输入*框里，看看*输出*结果是什么。

此外，你还可以试试在示例中嵌入 [OpenStreetMap](https://www.openstreetmap.org/)：

1. 去 OpenStreetMap 找一个喜欢的地图。
2. 鼠标点击到 UI 右侧的“分享”图标。
3. 选择 _HTML_ 选项。
4. 下面的文本框中会提供一些 `<iframe>` 代码，请复制它。
5. 将复制的代码粘贴到下面的*输入*框，看看*输出*结果是什么。

如果你犯了某些错误，你可以点击*重置*按钮以重置编辑器。如果你实在无法解决，可以按下*显示答案*按钮以借鉴答案。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 250px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符</p>

<textarea
  id="code"
  class="input"
  style="width: 95%;min-height: 100px;"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}
h2 {
  font-size: 16px;
}
.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}
body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

const htmlSolution =
  '<iframe src="https://player.bilibili.com/player.html?aid=19390801&bvid=BV1bW411n7fY&cid=31621681&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">\n</iframe>\n\n<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=120.1198983192444%2C30.235600118473787%2C120.16195535659791%2C30.258529710286673&amp;layer=mapnik" style="border: 1px solid black">\n</iframe>';
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// 防止 Tab 键使 textarea 失去焦点，
// 转而使其在当前光标位置插入一个制表符

textarea.onkeydown = function (e) {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// 每次用户更新文本区域代码时，更新已保存的用户代码

textarea.onkeyup = function () {
  // 我们只希望在显示用户代码时保存状态，
  // 而不保存答案，以防止答案覆盖用户代码
  if (solution.value === "显示答案") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }
  updateCode();
};
```

{{ EmbedLiveSample('动手练习：典型嵌入的使用', 700, 600) }}

## iframe 详解

是不是很简单又有趣呢？你可以通过 {{htmlelement("iframe")}} 元素将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入你的网站，这些内容你可能无法直接控制，也不想实现自己的版本——例如来自在线视频提供商的视频、[Disqus](https://disqus.com/) 等评论系统、在线地图提供商、广告横幅等。甚至本课程使用的实时可编辑示例就是使用 `<iframe>` 实现的。

在深入了解如何使用 `<iframe>` 元素之前，需要注意一些安全问题。假设你想使用 {{htmlelement("iframe")}} 元素来在自己的网页上包含 MDN 词汇表，你可能会尝试像下一个代码示例那样操作。如果你将下面的代码添加到你的页面中，接下来发生的事可能会出乎你的预料：你会遇到错误消息，而不是词汇表页面：

```html
<head>
  <style>
    iframe {
      border: none;
    }
  </style>
</head>
<body>
  <iframe
    src="https://developer.mozilla.org/zh-CN/docs/Glossary"
    width="100%"
    height="500"
    allowfullscreen
    sandbox>
    <p>
      <a href="/zh-CN/docs/Glossary">
        为不支持 iframe 的浏览器预留的后备链接
      </a>
    </p>
  </iframe>
</body>
```

如果你查看浏览器的控制台，你会看到类似以下的错误消息：

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

下面的[安全性](#安全隐患)部分将详细介绍为什么会出现此错误，但首先让我们了解一下我们的代码在做什么。

此示例包括使用 `<iframe>` 所需的基本要素：

- [`border: none`](/zh-CN/docs/Web/CSS/Reference/Properties/border)
  - : 如果使用此属性，`<iframe>` 将不会显示周围的边框。否则，默认情况下，浏览器会显示 `<iframe>` 的边框（通常我们不希望显示边框）。
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : 如果设置，则可以通过[全屏 API](/zh-CN/docs/Web/API/Fullscreen_API) 将 `<iframe>` 置于全屏模式（稍微超出本文的范围）。
- [`src`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#src)
  - : 该属性与 {{htmlelement("video")}}/{{htmlelement("img")}} 中的同名属性一样，包含指向要嵌入的文档的 URL。
- [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#width) 和 [`height`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#height)
  - : 这些属性指定 iframe 的宽度和高度。
- [`sandbox`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : 该属性比起支持其他 `<iframe>` 特性，需要更新的浏览器才能工作（例如 IE 10 及更高版本），该属性可以提高安全性设置；我们将在下一节中更加详细地谈到。

> [!NOTE]
> 要想提高速度，最好在主内容完成加载后，再使用 JavaScript 设置 iframe 的 `src` 属性。这使你的页面可以更快可用，并减少你的官方页面加载时间（它是一个重要的 {{glossary("SEO")}} 指标）。

### 安全隐患

我们在前面提到了安全问题——现在我们来详细介绍一下这一点。你第一次并不需要完全理解所有内容；我们只想让你意识到这一问题，然后在你更有经验并开始考虑在你的实验和工作中使用 `<iframe>` 时为你提供参考。此外，没有必要害怕和拒绝使用 `<iframe>`——你只需要谨慎一点。继续看下去吧……

浏览器制造商和 Web 开发人员已经深刻认识到，如果 Web 上的恶意人士（通常称为**黑客**，或者更准确地说，**破解者**）试图发起攻击，或者欺骗人们做一些他们不想做的事情，比如泄露敏感信息（如用户名和密码），那么 iframe 是常见目标（正式术语：**攻击向量**）。因此，规范工程师和浏览器开发人员已经开发了各种安全机制，以使 `<iframe>` 更安全，并且还有一些最佳实践需要考虑——我们将在下面介绍其中一些。

> [!NOTE]
> [点击劫持](/zh-CN/docs/Web/Security/Attacks/Clickjacking)是一种常见的 iframe 攻击，黑客将一个不可见的 iframe 嵌入到你的文档中（或将你的文档嵌入到他们自己的恶意网站），并使用它来获取用户的交互。这是一种常见的误导用户或窃取敏感数据的方式。

一个简单的例子——尝试在浏览器中加载上面的例子——你也可以 [在 Github 上找到它](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)（[参见源代码](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)）。与你期望的页面不同，你可能会看到某种类型的消息，内容类似于“无法打开此页面”，如果你查看[浏览器开发工具](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)中的*控制台*，你将看到一条信息消息告知你原因。在 Firefox 中，消息类似于*由于“X-Frame-Options”指令设置为“DENY”，因此无法在 iframe 中加载“https\://developer.mozilla.org/zh-CN/docs/Glossary”*。这是因为构建 MDN 的开发人员在服务器上设置了一个选项，禁止将网站页面嵌入到 `<iframe>` 中（参见下面的[配置 CSP 指令](#配置_scp_指令)）。这是有原因的——整个 MDN 页面在其他页面中嵌入并不合适，除非你希望将它们嵌入到你的网站上并将它们声明为你自己的页面——或者通过点击劫持来尝试窃取数据，这两者都是非常糟糕的行为。而且，如果每个人这样做，额外的带宽成本将给 Mozilla 带来很大压力。

#### 只有在必要时嵌入

有时嵌入第三方内容（例如 YouTube 视频和地图）有很多好处，但如果你只在完全需要时嵌入第三方内容，你可以省去很多麻烦。网络安全的一个很好的经验法则是“_你怎么谨慎都不为过，如果你决定要做某件事，应再三检查；如果别人做过，在被证明安全之前，都应假设这很危险。_”

除了安全问题，你还应该意识到知识产权问题。无论在线内容还是离线内容，绝大部分内容都是有版权的，甚至是一些你没想到会有版权的内容（例如，[Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) 上的大多数图片）。不要在网页上展示一些不属于你的内容，除非你是所有者或所有者给了你明确的、书面的许可。侵犯版权受到的惩罚是很严厉的。再说一次，再小心也不为过。

如果内容有相关许可，你必须遵守许可条款。例如，MDN 上的内容遵守 [CC-BY-SA 许可](/zh-CN/docs/MDN/Writing_guidelines/Attrib_copyright_license#文档)，这意味着，如果你要引用我们的内容，就必须[用适当的方式注明来源](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution)，无论你是否对内容做了实质性的修改。

#### 使用 HTTPS

{{Glossary("HTTPS")}} 是 {{Glossary("HTTP")}} 的加密版本。你应该尽可能使用 HTTPS 为你的网站提供服务：

1. HTTPS 减少了远程内容在传输过程中被篡改的机会，
2. HTTPS 防止嵌入式内容访问你的父文档中的内容，反之亦然。

要想为网站启用 HTTPS，你需要安装特殊的安全证书。许多托管提供商提供了支持 HTTPS 的托管服务，无需你自己进行任何设置即可安装证书。但是，如果你*确实*需要自己动手为网站设置 HTTPS 支持，[Let's Encrypt](https://letsencrypt.org/) 提供了工具和说明，可以自动创建和安装所需的证书，并支持包括 Apache Web 服务器、Nginx 和其他常用的 Web 服务器。Let's Encrypt 的工具旨在使该过程尽可能简单，因此强烈建议使用它或其他可用的方法来启用你的网站的 HTTPS。

> [!NOTE]
> [Github pages](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) 允许默认情况下通过 HTTPS 提供内容。如果你正在使用其他的托管，请向你的托管服务商确定他们为基于 HTTPS 的内容托管提供哪些支持。

#### 始终使用 `sandbox` 属性

想尽可能减少攻击者在你的网站上做坏事的机会，那么你应该仅给嵌入的内容*完成自己工作所需的权限*。当然，这也适用于你自己的内容。[沙盒](<https://zh.wikipedia.org/wiki/沙盒_(電腦安全)>)技术为此而诞生，沙盒是一个容器，其仅允许包含在内部的代码以适当的方式执行（或者用于测试），而无法对其他代码库（意外或恶意）造成任何损害。

未沙盒化的内容可以执行 JavaScript、提交表单、弹出窗口等。默认情况下，你应该使用没有参数的 `sandbox` 属性来强制执行所有可用的限制，如我们前面的示例所示。

如果绝对需要某些权限，你可以（在 `sandbox=""` 属性值内）逐个添加它们——请参阅 [`sandbox`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#sandbox) 所有可用选项的参考条目。其中重要的一点是，你*永远不*应该同时添加 `allow-scripts` 和 `allow-same-origin` 到你的 `sandbox` 属性中——在这种情况下，嵌入的内容可以绕过阻止站点执行脚本的[同源安全策略](/zh-CN/docs/Glossary/Same-origin_policy)，并使用 JavaScript 完全关闭沙盒。

> [!NOTE]
> 如果攻击者可以欺骗人们直接访问恶意内容（在 `iframe` 之外），则沙盒无法提供保护。如果某些内容可能是恶意的（例如，用户生成的内容），请保证其是从不同的{{glossary("domain", "域")}}向你的主站点提供的。

#### 配置 CSP 指令

{{Glossary("CSP")}} 全称是[**内容安全策略**](/zh-CN/docs/Web/HTTP/Guides/CSP)，它提供了[一组 HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)（访问 web 服务器时与网页一起发送的元数据），旨在提高 HTML 文档的安全性。在 `<iframe>` 的安全性方面，你可以[_配置服务器发送适当的 `X-Frame-Options` 标头_](/zh-CN/docs/Web/HTTP/Reference/Headers/X-Frame-Options)。这样可以防止其他网站在其网页中嵌入你的内容（这将导致[点击劫持](/zh-CN/docs/Web/Security/Attacks/Clickjacking)和一系列其他攻击），正如我们之前看到的那样，MDN 的开发人员已经做了这些工作。

> [!NOTE]
> 你可以阅读 Frederik Braun 的帖子[论 X-Frame-Options 安全性标头](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/)来获取有关此主题的更多背景信息。显然，其已经超出了本文所解释内容的范围。

## \<embed> 和 \<object> 元素

{{htmlelement("embed")}} 和 {{htmlelement("object")}} 元素的功能不同于 {{htmlelement("iframe")}}——这些元素是通用的嵌入外部内容（如 PDF）的工具。

然而，你不太可能使用这些元素。如果你需要展示 PDF，通常最好的方式是链接它们，而不是直接在页面中展示。

在过去，这些元素也用于嵌入由浏览器{{Glossary("Plugin", "插件")}}（如 {{Glossary("Adobe Flash")}}，但这个技术现在已经废弃了，不为现代浏览器所支持）处理的内容。

如果你确实需要嵌入插件内容，那么你至少需要以下信息：

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">{{htmlelement("embed")}}</th>
      <th scope="col">{{htmlelement("object")}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>嵌入内容的 {{glossary("URL")}}</td>
      <td><a href="/zh-CN/docs/Web/HTML/Reference/Elements/embed#src"><code>src</code></a></td>
      <td><a href="/zh-CN/docs/Web/HTML/Reference/Elements/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        嵌入内容的<em>准确</em>{{glossary("MIME type", '媒体类型')}}
      </td>
      <td><a href="/zh-CN/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/zh-CN/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        由插件控制的盒子高度和宽度（以 CSS 像素为单位）
      </td>
      <td>
         <a href="/zh-CN/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/zh-CN/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/zh-CN/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/zh-CN/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>用作后备资源的独立的 HTML 内容，以防资源不可用</td>
      <td>不受支持（<code>&#x3C;noembed></code> 已过时）</td>
      <td>
        包含在 <code>&#x3C;object></code> 的开和闭标签之间
      </td>
    </tr>
  </tbody>
</table>

让我们来看一个将 PDF 文件嵌入网页的 `<object>` 示例（查看[实时示例](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)和[源代码](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)）：

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDF 是纸质文件与数字文件之间重要的转换桥梁，但它[在无障碍上有些问题](https://webaim.org/techniques/acrobat/acrobat)，并且可能难以在小屏幕上阅读。尽管它们在一些圈子中仍然受欢迎，但是我们最好是用链接指向它们，而不是将其嵌入到网页中，以便它们可以在单独的页面上被下载或被阅读。

## 技能测试！

你已经到达了本文的末尾，但你能记住最重要的信息吗？在继续之前，你可以进行一些进一步的测试，以验证你是否记住了这些信息。请查看[测试你的技能：多媒体和嵌入](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Multimedia_and_embedding)。

## 总结

在 web 文档中嵌入其他内容可能是一件相当复杂的事。因此，在本文中，我们试图以一些简单而熟悉的例子作为引子来介绍，这样可以立即让人感觉到它与实际生活相关，同时也暗示了涉及技术的一些更高级的特性。最初，你可能只会使用嵌入功能来包括地图和视频等第三方内容在你的网页上。但随着你经验的增长，你可能会发现更多的使用场景。

除了在这里讨论的技术之外，还有许多其他涉及嵌入外部内容的技术。我们在之前的文章中已经了解了一些技术，如 {{htmlelement("video")}}、{{htmlelement("audio")}} 和 {{htmlelement("img")}}，但还有更多等待你去探索的技术，比如 {{htmlelement("canvas")}}，它用于 JavaScript 生成的 2D 和 3D 图形，以及 {{SVGElement("svg")}}，用于嵌入矢量图形。在本模块的下一篇文章中，我们将深入了解 SVG。
