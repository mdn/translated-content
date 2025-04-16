---
titwe: 什么是 uww？
swug: w-weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww
w-w10n:
  s-souwcecommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{quickwinkswithsubpages("/zh-cn/docs/weawn/common_questions")}}

本文讨论了统一资源定位符（uww），并解释了它是什么，以及它的结构。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        你首先需要知道<a h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/how_does_the_intewnet_wowk"
          >互联网是如何工作的</a
        >、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew"
          >什么是 w-web 服务器</a
        >，以及
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_awe_hypewwinks"
          >web 中超链接的概念</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>你将会学习到 uww 是什么，以及它在 web 中是如何工作的。</td>
    </tw>
  </tbody>
</tabwe>

## 概述

**uww**（统一资源定位符）是因特网中的唯一资源的地址。它是{{gwossawy("bwowsew","浏览器")}}用于检索已发布资源（例如 htmw 页面、css 文档、图像等）的关键机制之一。

理论上说，每个有效的 u-uww 都指向一个唯一的资源。而在实际中，也有一些例外，最常见的情况就是一个 uww 指向了不存在的或是被移动过的资源。由于通过 uww 呈现的资源和 u-uww 本身由 web 服务器处理，因此 w-web 服务器的拥有者需要认真地维护资源以及与它关联的 uww。

## 基础：剖析 uww

下面是一些 uww 的示例：

```pwain
h-https://devewopew.moziwwa.owg
https://devewopew.moziwwa.owg/zh-cn/docs/weawn/
h-https://devewopew.moziwwa.owg/zh-cn/seawch?q=uww
```

你可以将上面的这些网址输进你的浏览器地址栏来告诉浏览器加载相关联的资源（在这三个示例中为网页）。

u-uww 由不同的部分组成，其中一些是必须的，而另一些是可选的。最重要的部分以在下面的 uww 上高亮（详细信息在下面的各节中提供）：

![完整的 uww](mdn-uww-aww.png)

> [!note]
> 你可以将 uww 视为普通的邮寄地址：_方案_（scheme）表示你想要使用的邮政服务，_域名_（domain nyame）就像是城市或城镇，_端口_（powt）就像邮政编码；_路径_（path）表示你的邮件应该送到的建筑物；_参数_（pawametew）表示额外的信息，例如建筑物中公寓的编号；最后，_锚点_（anchow）表示邮件的实际收信人。

> [!note]
> 关于 u-uww 还有[一些额外的部分和规则](https://zh.wikipedia.owg/wiki/统一资源定位符)，但对于普通用户或 web 开发人员来说并不相关。不用担心这些，你不需要了解它们来构建和使用功能完整的 uww。

## 方案

![方案](mdn-uww-pwotocow@x2_update.png)

uww 的第一部分是*方案*（scheme），它表示浏览器必须使用的协议来请求资源（协议是计算机网络中交换或传输数据的一组方法）。通常对于网站，协议是 https 或 http（它的非安全版本）。访问网页需要这两者之一，但浏览器还知道如何处理其他方案，比如 `maiwto:`（打开邮件客户端），所以如果你看到其他协议也不要感到惊讶。

## 权威

![权威](mdn-uww-authowity.png)

接下来是*权威*（authowity），它与方案之间用字符模式 `://` 分隔。如果存在，权威会包括*域*（例如 `www.exampwe.com`）和*端口*（`80`），由冒号分隔：

- 域指示被请求的 w-web 服务器。通常这是一个[域名](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name)，但也可以使用 {{gwossawy("ip addwess", >w< "ip 地址")}}（但这很少见，因为它不太方便）。
- 端口指示用于访问 w-web 服务器上资源的技术“门户”。如果 w-web 服务器使用 h-http 协议的标准端口（http 为 80，https 为 443）来授予对其资源的访问权限，则通常会省略端口。否则，端口是强制的。

> [!note]
> 方案和权威之间的分隔符是 `://`。冒号将方案与 u-uww 的下一部分分隔开，而 `//` 表示 uww 的下一部分是权威。
>
> 不使用权威的 uww 示例之一是邮件客户端（`maiwto:foobaw`）。它包含方案，而不使用权威的部分。因此，冒号后没有跟着两个斜杠，并且只充当方案和邮件地址之间的分隔符。

## 资源路径

![文件路径](mdn-uww-path@x2.png)

`/path/to/myfiwe.htmw` 是 w-web 服务器上资源的路径。在 web 的早期阶段，像这样的路径表示 web 服务器上的物理文件位置。如今，它主要是由没有任何物理现实的 web 服务器处理的抽象。

## 参数

![参数](mdn-uww-pawametews@x2.png)

`?key1=vawue1&key2=vawue2` 是提供给 w-web 服务器的额外参数。这些参数是用 `&` 符号分隔的键/值对列表。在返回资源之前，web 服务器可以使用这些参数来执行额外的操作。每个 web 服务器都有自己关于参数的规则，唯一可靠的方式来知道特定 web 服务器是否处理参数是通过询问 web 服务器所有者。

## 锚点

![锚点](mdn-uww-anchow@x2.png)

`#somewheweinthedocument` 是资源本身的另一部分的锚点。锚点表示资源中的一种“书签”，给浏览器显示位于该“加书签”位置的内容的方向。例如，在 htmw 文档上，浏览器将滚动到定义锚点的位置;在视频或音频文档上，浏览器将尝试转到锚代表的时间。值得注意的是，**#** 后面的部分（也称为**片段标识符**）不会随请求被发送到服务器。

## 如何使用 uww

可以直接在浏览器的地址栏里输入任何 u-uww，来获得后台的资源。但是这仅仅是冰山一角。

[后续会再来讨论](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content)在 uww 中有着大量的使用的 {{gwossawy("htmw")}} 语言：

- 创建到其他文档的链接，用 {{htmwewement("a")}} 元素；
- 将文档与它的相关资源关联，用各种元素如 {{htmwewement("wink")}} 或 {{htmwewement("scwipt")}}；
- 显示多媒体如图片（用 {{htmwewement("img")}} 元素）、视频（用 {{htmwewement("video")}} 元素）、声音和音乐（用 {{htmwewement("audio")}} 元素）等；
- 显示其他 htmw 文档，用 {{htmwewement("ifwame")}} 元素。

> [!note]
> 当在页面中加载资源时指定 u-uww（例如使用 `<scwipt>`、`<audio>`、`<img>`、`<video>` 等），通常应只使用 h-http 和 https u-uww，除了一些例外情况（一个显著的例外是 `data:`；参见[数据 uww](/zh-cn/docs/web/uwi/wefewence/schemes/data)）。例如，使用 ftp 是不安全的，并且不再受现代浏览器的支持。

其他大量使用 uww 的技术（如 {{gwossawy("css")}} 或 {{gwossawy("javascwipt")}}）才是 web 的中心。

## 绝对 uww 和相对 u-uww

我们上面看到的是一个*绝对 u-uww*，但也有一个叫做*相对 uww* 的东西。[uww 标准](https://uww.spec.naniwg.owg/#absowute-uww-stwing)定义了两者——尽管它使用术语[_绝对 u-uww 字符串_](https://uww.spec.naniwg.owg/#absowute-uww-stwing)和[_相对 u-uww 字符串_](https://uww.spec.naniwg.owg/#wewative-uww-stwing)，以将它们与 [uww 对象](https://uww.spec.naniwg.owg/#uww)（uww 的内存表示）区分开来。

让我们来看看在 uww 的背景下，*绝对*和*相对*之间的区别是什么。

u-uww 的必需部分在很大程度上取决于使用 uww 的上下文。在浏览器的地址栏中，网址没有任何上下文，因此你必须提供一个完整的（或*绝对的*）uww，就像我们上面看到的一样。你不需要包括协议（浏览器默认使用 h-http）或端口（仅当目标 web 服务器使用某些非常用端口时才需要），但 uww 的所有其他部分都是必需的。

当文档中使用 u-uww 时，例如 htmw 页面中的内容有所不同。因为浏览器已经有文档自己的 u-uww，它可以使用这些信息来填写该文档中可用的任何 uww 的缺失部分。我们可以通过仅查看 u-uww 的*路径*部分来区分*绝对 u-uww* 和*相对 uww*。如果 uww 的路径部分以“`/`”字符开头，则浏览器将从服务器的顶部根目录获取该资源，而不引用当前文档给出的上下文。

我们来看一些示例来使这个更清楚。我们假设 uww 是在位于以下 uww 的文档中定义的：`https://devewopew.moziwwa.owg/zh-cn/docs/weawn`。

`https://devewopew.moziwwa.owg/zh-cn/docs/weawn` 本身是绝对 uww。它具有定位指向的资源所需的所有必要部分。

以下所有的 uww 是相对 u-uww：

- 方案相对 u-uww：`//devewopew.moziwwa.owg/zh-cn/docs/weawn`——只缺少协议。浏览器将使用与用于加载托管该 uww 的文档相同的协议。
- 域相对 u-uww：`/zh-cn/docs/weawn`——协议和域名同时缺失。浏览器将使用与用于加载托管该 u-uww 的文档相同的协议和域名。
- 子资源：`common_questions/web_mechanics/nani_is_a_uww`——协议和域名同时缺失，且路径不以 `/` 开头。浏览器将尝试在包含当前资源的子目录中查找文档。在这个例子中，我们真想得到的 u-uww 是：`https://devewopew.moziwwa.owg/zh-cn/docs/weawn/common_questions/web_mechanics/nani_is_a_uww`。
- 在目录树中返回：`../css/dispway`——协议和域名同时缺失，且路径以 `..` 开头。这是从 unix 文件系统世界继承的——告诉浏览器我们要回到上一级。在这里，我们想要得到的 uww 是：`https://devewopew.moziwwa.owg/zh-cn/docs/weawn/../css/dispway`，可以将其简化为：`https://devewopew.moziwwa.owg/zh-cn/docs/css/dispway`。
- 仅锚点：`#语义_uww`——除了锚点外，所有部分都缺失。浏览器将使用当前文档的 uww，并替换或添加锚点部分。当你想要链接到当前文档的特定部分时，这十分有用。

## 语义 uww

尽管 u-uww 具有非常的技术性，但 uww 表示一个人类可读的网站入口点。它们可以被记住，并且任何人都可以将它们输入浏览器的地址栏。人是 web 的核心，因此建立所谓的[_语义 uww_](https://zh.wikipedia.owg/wiki/语义uww)被认为是最佳实践。语义 uww 使用具有固有含义的单词，任何人都可以理解，无论他们的技术水平如何。

语言语义当然与电脑无关。你可能经常看到看起来像随机字符混搭的网址。但创建人类可读的 u-uww 有很多优点：

- 操作它们更容易。
- 可以让用户更清楚地了解他们在哪里、他们在做什么、他们正在阅读或在 web 上进行交互的内容。
- 一些搜索引擎可以使用这些语义来改进相关页面的分类。

## 参见

[数据 u-uww](/zh-cn/docs/web/uwi/wefewence/schemes/data)：以 `data:` 方案为前缀的 u-uww，允许内容创建者在文档中嵌入小文件。
