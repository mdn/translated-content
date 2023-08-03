---
title: 什么是 URL？
slug: Learn/Common_questions/Web_mechanics/What_is_a_URL
---

本文讨论了统一资源定位符 (URL)，并解释了他们是什么，以及如何被构建的。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你首先需要知道<a href="/zh-CN/docs/Learn/How_the_Internet_works">
          互联网是如何工作的</a
        >，<a href="/zh-CN/docs/Learn/Common_questions/What_is_a_web_server"
          >什么是网络服务器</a
        >
        以及
        <a href="/zh-CN/docs/Learn/Common_questions/What_are_hyperlinks"
          >网络中超链接的概念</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>你将会学习到 URL 是什么，以及它在网络上是如何工作的。</td>
    </tr>
  </tbody>
</table>

## 概述

和 {{Glossary("Hypertext")}} 以及 {{Glossary("HTTP")}} 一样，**URL** 是 Web 中的一个核心概念。它是{{Glossary("Browser","浏览器")}}用来检索 web 上公布的任何资源的机制。

**URL** 代表着是统一资源定位符（Uniform Resource Locator）。URL 无非就是一个给定的独特资源在 Web 上的地址。理论上说，每个有效的 URL 都指向一个唯一的资源。这个资源可以是一个 HTML 页面，一个 CSS 文档，一幅图像，等等。而在实际中，也有一些例外，最常见的情况就是一个 URL 指向了不存在的或是被移动过的资源。由于通过 URL 呈现的资源和 URL 本身由 Web 服务器处理，因此 web 服务器的拥有者需要认真地维护资源以及与它关联的 URL。

## 自主学习

_还没有可用的资料。[Please, consider contributing](/zh-CN/docs/MDN/Getting_started)._

## 深入探索

### 基础：剖析 URL

下面是一些 URL 的示例：

```
https://developer.mozilla.org
https://developer.mozilla.org/zh-CN/docs/Learn/
https://developer.mozilla.org/zh-CN/search?q=URL
```

您可以将上面的这些网址输进您的浏览器地址栏来告诉浏览器加载相关联的页面（或资源）。

一个 URL 由不同的部分组成，其中一些是必须的，而另一些是可选的。让我们以下面这个 URL 为例看看其中最重要的部分：

![完整的 URL](mdn-url-all.png)

## 协议

![Scheme](mdn-url-protocol@x2_update.png)

`http` 是协议。它表明了浏览器必须使用何种协议。它通常都是 HTTP 协议或是 HTTP 协议的安全版，即 HTTPS。Web 需要它们二者之一，但浏览器也知道如何处理其他协议，比如 `mailto:`（打开邮件客户端）或者 `ftp:`（处理文件传输），所以当你看到这些协议时，不必惊讶。

## Authority

![Authority](mdn-url-authority.png)

- `www.example.com` 是域名。它表明正在请求哪个 Web 服务器。或者，可以直接使用{{Glossary("IP address")}}，但是因为它不太方便，所以它不经常在网络上使用。
- `:80` 是端口。它表示用于访问 Web 服务器上的资源的技术“门”。如果 Web 服务器使用 HTTP 协议的标准端口（HTTP 为 80，HTTPS 为 443）来授予其资源的访问权限，则通常会被忽略。否则是强制性的。

## 资源路径

![文件路径](mdn-url-path@x2.png)

`/path/to/myfile.html` 是网络服务器上资源的路径。在 Web 的早期阶段，像这样的路径表示 Web 服务器上的物理文件位置。如今，它主要是由没有任何物理现实的 Web 服务器处理的抽象。

## 参数

![参数](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` 是提供给网络服务器的额外参数。这些参数是用 `&` 符号分隔的键/值对列表。在返回资源之前，Web 服务器可以使用这些参数来执行额外的操作。每个 Web 服务器都有自己关于参数的规则，唯一可靠的方式来知道特定 Web 服务器是否处理参数是通过询问 Web 服务器所有者。

## 锚点

![锚点](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` 是资源本身的另一部分的锚点。锚点表示资源中的一种“书签”，给浏览器显示位于该“加书签”位置的内容的方向。例如，在 HTML 文档上，浏览器将滚动到定义锚点的位置;在视频或音频文档上，浏览器将尝试转到锚代表的时间。值得注意的是，＃后面的部分（也称为片段标识符）从来没有发送到请求的服务器。

> **备注：** 这里是关于 URL 的[一些额外的部分和一些额外的规则](https://zh.wikipedia.org/wiki/统一资源定位符)，但它们对于普通用户或 Web 开发者不是非常重要。你不必担心这个，要构筑和使用完全实用的 URL 不必了解这些。

你可能想到一个 URL 类似普通信件的地址：协议代表你要使用的邮政服务，域名是城市或者城镇，端口则像邮政编码；路径代表着你的信件所有递送的大楼；参数则提供额外的信息，如大楼所在单元；最后，锚点表示信件的收件人。

### 如何使用 URL

可以直接在浏览器的地址栏里输入任何 URL，来获得后台的资源。但是这仅仅是冰山一角。

{{Glossary("HTML")}} 语言 — [后续会再来讨论](/zh-CN/docs/Learn/HTML/HTML_tags) — 对 URLs 有大量的使用：

- 为在其他文档中新建链接，用 {{HTMLElement("a")}} ;
- 为将文档与它的相关资源关联，用各种标签如 {{HTMLElement("link")}} 或 {{HTMLElement("script")}} ;
- 为显示多媒体如图片 (用 {{HTMLElement("img")}} ), 视频 (用 {{HTMLElement("video")}} ), 声音和音乐 (用 {{HTMLElement("audio")}} ), 等等;
- 为显示其他 HTML 文档，用 {{HTMLElement("iframe")}} .

其他大量使用 URLs 的技术如 {{Glossary("CSS")}} 或 {{Glossary("JavaScript")}}, 这些才是 Web 的中心。

### 绝对 URL 和相对 URL

我们上面看到的是一个绝对的 URL，但也有一个叫做相对 URL 的东西。我们来看看这个区别意味着什么呢？

URL 的必需部分在很大程度上取决于使用 URL 的上下文。在浏览器的地址栏中，网址没有任何上下文，因此您必须提供一个完整的（或绝对的）URL，就像我们上面看到的一样。您不需要包括协议（浏览器默认使用 HTTP）或端口（仅当目标 Web 服务器使用某些异常端口时才需要），但 URL 的所有其他部分都是必需的。

当文档中使用 URL 时，例如 HTML 页面中的内容有所不同。因为浏览器已经有文档自己的 URL，它可以使用这些信息来填写该文档中可用的任何 URL 的缺失部分。我们可以通过仅查看 URL 的路径部分来区分绝对 URL 和相对 URL。**如果 URL 的路径部分以“/”字符开头，则浏览器将从服务器的顶部根目录获取该资源，而不引用当前文档给出的上下文**。

我们来看一些例子来使这个更清楚。

#### 绝对 URL 示例

<table>
  <tbody>
    <tr>
      <td>完整网址（与之前使用的网址相同）</td>
      <td><pre>https://developer.mozilla.org/zh-CN/docs/Learn</pre></td>
    </tr>
    <tr>
      <td>隐去协议</td>
      <td>
        <pre>//developer.mozilla.org/zh-CN/docs/Learn</pre>
        <p>
          在这种情况下，浏览器将使用与用于加载该 URL 的文档相同的协议来调用该 URL。
        </p>
      </td>
    </tr>
    <tr>
      <td>隐去域名</td>
      <td>
        <pre>/zh-CN/docs/Learn</pre>
        <p>
          这是 HTML 文档中绝对 URL 最常见的用例。浏览器将使用与用于加载托管该 URL 的文档相同的协议和相同的域名。<strong>注意</strong>：不可能省略该域名而不省略协议。
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### 相对 URL 示例

为了更好地了解以下示例，我们假设从位于以下 URL 的文档中调用 URL： `https://developer.mozilla.org/zh-CN/docs/Learn`

<table>
  <tbody>
    <tr>
      <td>子资源</td>
      <td>
        <pre>Skills/Infrastructure/Understanding_URLs</pre>
        <p>因为该 URL 不以 / 开头，浏览器将尝试在包含当前资源的子目录中查找文档。所以在这个例子中，我们真的想要达到这个 URL <code>https://developer.mozilla.org/zh-CN/docs/Learn/Skills/Infrastructure/Understanding_URLs</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>回到目录树中</td>
      <td>
        <pre>../CSS/display</pre>
        <p>
          在这种情况下，我们使用从 UNIX 文件系统世界继承的../写入约定来告诉我们要从一个目录上升的浏览器。在这里，我们要达到以下 URL：https://developer.mozilla.org/zh-CN/docs/Learn/../CSS/display，可以将其简化为：https://developer.mozilla.org/zh-CN/docs/CSS/display
        </p>
      </td>
    </tr>
  </tbody>
</table>

### 语义 URL

尽管 URL 具有非常的技术性，但 URL 表示一个可读性的网站入口点。它们可以被记住，并且任何人都可以将它们输入浏览器的地址栏。人是 Web 的核心，因此建立所谓的 _[semantic URLs](http://en.wikipedia.org/wiki/Semantic_URL)_ 被认为是最佳实践。语义 URL 使用具有固有含义的单词，任何人都可以理解，无论他们的技术水平如何。

语言语义当然与电脑无关。您可能经常看到看起来像随机字符混搭的网址。但创建人类可读的 URL 有很多优点：

- 操作它们更容易
- 它根据用户在哪里，他们在做什么，他们正在阅读或在网络上进行互动来澄清用户的情况。
- 一些搜索引擎可以使用这些语义来改进相关页面的分类。

## 下一步

- [理解域名](/zh-CN/docs/Learn/Common_questions/What_is_a_domain_name)
