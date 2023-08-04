---
title: Web 和 Web 标准
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
---

{{learnsidebar}}

这篇文章提供了一些有用的 Web 背景知识——它是如何产生的，什么是 Web 标准技术，它们是如何协同工作的，为什么“Web 开发人员”是一个很好的职业选择，以及您将在本课程中学习哪些最佳做法。

## Web 简史

我们会简单叙述，因为别处已有很多关于 Web 历史的详尽说明，稍后我们会链接到它们（如果那您对更多细节内容感兴趣，也请试着在您惯用的搜索引擎中搜索“Web 的历史”以获取相关内容。）

在 20 世纪 60 年代末期，美国军方开发了一个名为 [ARPANET](/zh-CN/docs/Glossary/Arpanet) 的通信网络。这可以认为是 Web 的先驱，因为它基于 [分组交换（packet switching）](https://en.wikipedia.org/wiki/Packet_switching) 进行工作，并且首次实现了 [TCP/IP 协议族（TCP/IP protocol suite）](https://en.wikipedia.org/wiki/Internet_protocol_suite) 。这两种技术构成了互联网基础设施的基础。

1980 年，Tim Berners-Lee（通常称之为 TimBL）写了一个叫 ENQUIRE 的笔记本程序，这个程序实现了不同节点之间链接的概念。听起来有点熟悉对吧？

快进到 1989 年，TimBL 在 CERN 撰写了 [《Information Management: A Proposal》](https://www.w3.org/History/1989/proposal.html) 和《HyperText》 ；这两个出版物共同为 Web 将如何工作做了铺垫。两个出版物获得了极大的关注，这足以说服 TimBL 的上司让他继续前进，并创建一个全球超文本系统。

到 1990 年底，TimBL 已经创建了运行第一个版本的 Web 所需的所有东西—— [HTTP](/zh-CN/docs/Web/HTTP)，[HTML](/zh-CN/docs/Web/HTML)，名为 [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) 的第一个 Web 浏览器，一个 HTTP 服务器和一些用于查看的网页。

在随后的几年中，随着多个浏览器的发布，数以千计 Web 服务器的建立，上百万网页的生成，Web 爆发式发展。OK，这只是对事件非常粗略的描述，但我向您说过会简单叙述。

最后一个值得分享的重要事件在 1994 年，TimBL 建立了[万维网联盟（World Wide Web Consortium，W3C）](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)，该组织汇集了来自许多不同技术公司的代表，共同制定 Web 技术规范。随后其他的技术像 [CSS](/zh-CN/docs/Web/CSS) 和 [JavaScript](/zh-CN/docs/Web/JavaScript) 出现了，Web 开始看起来更像我们现在所了解的 Web。

## Web 标准

**Web 标准**是我们用来建立 Web 网站的技术。这些标准存在于名为规范的较长的技术文档中，该文档详细说明了技术应如何工作。这些文档对于学习如何使用它们所描述的技术并不是很有用（这就是我们建立像 MDN Web Docs 这样的网站的原因），而是旨在供软件工程师用来实现这些技术（通常在 Web 浏览器中）。

例如，[HTML Living Standard](https://html.spec.whatwg.org/multipage/) 描述了应如何实现 HTML（所有 HTML 元素及其关联的 API 和其他相关技术）。

Web 标准是由标准机构创建的——这些机构邀请不同技术公司的人员聚集在一起，并就如何以最佳方式实现所有用例达成共识。W3C 是最著名的 Web 标准组织，但还有其他组织，例如[WHATWG](https://whatwg.org/)（负责 HTML 语言的现代化），[ECMA](https://www.ecma-international.org/)（发布基于 JavaScript 的 ECMAScript 标准），[Khronos](https://www.khronos.org/)（发布 3D 图形技术，例如 Web GL）等。

### “开放”标准

Web 标准的关键方面之一，TimBL 和 W3C 从一开始就认同的一点，Web（和 Web 技术）应该自由地贡献和使用，并且不受专利/许可的约束。因此，任何人都可以编写代码免费建立网站，并且任何人都可以为编写规范的标准创建过程做出贡献。

由于 Web 技术是开放的，因此在许多不同公司之间的协作中，这意味着没有一家公司可以控制它，这确实是一件好事。您不会希望任何一家公司突然决定将整个 Web 置于付费壁垒之后，或者发布每个人都必须购买以继续制作网站的新版 HTML，或者更糟糕的是，仅仅将他们不再感兴趣的网站关闭。

这一点允许 Web 保持免费可用，使其成为公共资源。

### 不要破坏 Web

关于开放式 Web 标准，您将听到的另一句话是“不要破坏 Web”——这句话是说，引入的任何新 Web 技术都应向后兼容以前的版本（即旧网站仍将继续工作），并向前兼容（将未来的技术与我们目前拥有的技术兼容）。在阅读此处介绍的学习材料时，您将开始学习如何通过一些非常精妙的设计和做法来实现这一点。

## Web 开发者是一个很好的选择

如果您正在寻找工作，网络行业是一个非常有吸引力的市场。最新公布的数据表明，目前全球大约有 1900 万网络开发人员，并且这个数字在接下来的十年中将增长两倍以上。同时，该行业存在技能短缺的问题，那么还有什么更好的时间来学习 Web 开发呢？

然而，这并不仅仅是娱乐或者游戏——建立网站比以前要复杂得多，并且您必须花一些时间来研究要用到的所有不同的技术，所有您需要了解的技巧和最佳的技术做法，以及所有需要实现的典型模式。真正起步需要花几个月的时间，然后您需要继续学习，继续练习和完善自己的技术，以使您的知识与 Web 平台上出现的所有新工具和功能步调一致。

_唯一不变的就是变化。_

这听起来很难？不用担心——我们致力于为您提供入门所需的一切，事情将会变得更加轻松。一旦您适应了网络的不断变化和不确定性，您将开始享受乐趣。作为 Web 社区的一员，您将拥有整个 Web 的联系人和有用的资料来帮助您，并且您将开始享受它所带来的创造的可能性。

你现在是数字创意家了。享受这种体验和谋生的可能性吧。

## 现代网络技术概述

如果您想成为前端 Web 开发人员，可以学习多种技术。在本节中，我们将简要描述它们。有关其中某些功能是如何协同工作的详尽说明，请阅读我们的文章 [Web 是如何工作的](/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)。

### 浏览器

您可能此刻正在 Web 浏览器中阅读这些文字（除非您已将其打印出来，或正在使用辅助技术，例如屏幕阅读器将其读给您听）。Web 浏览器是人们用来浏览 Web 的软件程序，包括 [Firefox](https://www.mozilla.org/en-US/firefox/)、[Chrome](https://www.google.com/chrome/)、[Opera](https://www.opera.com/)、[Safari](https://www.apple.com/safari/) 和 [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge).

### HTTP

超文本传输协议（Hypertext Transfer Protocol，[HTTP](/zh-CN/docs/Web/HTTP/Basics_of_HTTP)），它允许 Web 浏览器与 Web 服务器（存储网站的位置）进行通信。典型的通信就像这样

```plain
"你好 Web 服务器。你可以给我用于渲染 bbc.co.uk 的文件吗？"

"当然啦 Web 浏览器 —— 给你"

[下载文件并渲染 Web 页面]
```

HTTP 消息（称为请求和响应）的实际语法不是人类可读的，但这个例子为您提供了基本概念。

### HTML , CSS , 和 JavaScript

[HTML](/zh-CN/docs/Web/HTML)，[CSS](/zh-CN/docs/Web/CSS)，和 [JavaScript](/zh-CN/docs/Web/JavaScript) 是您用来建立网站的三种主要技术：

- 超文本标记语言（HTML）是一种标记语言，由可以包装（标记）内容以赋予其含义（语义）和结构的各种元素组成。简单的 HTML 看起来像这样：

  ```html
  <h1>这是一个顶级标题</h1>

  <p>这是一个文本段落</p>

  <img src="cat.jpg" alt="我家猫猫的图片" />
  ```

  如果我们采用房屋建筑类比的话，HTML 就像房屋的地基和墙壁一样，赋予房屋结构并将其结合在一起。

- 级联样式表（Cascading Style Sheets，CSS）是一种基于规则的语言，用于将样式应用于 HTML，例如，设置文本和背景颜色，添加边框，设置动画效果或以某种方式布置页面。作为一个简单的示例，以下代码会将我们的 HTML 段落变为红色：

  ```css
  p {
    color: red;
  }
  ```

  在房屋类比中，CSS 就像用来使房屋看起来更漂亮的油漆，墙纸，地毯和油画。

- 从动态样式切换到从服务器获取更新，再到复杂的 3D 图形， **JavaScript** 是我们用来向网站添加交互性的编程语言。以下简单的 JavaScript 将在内存中存储对我们段落的引用，并更改其中的文本：

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "我们改变了文本！";
  ```

  在房屋类比中，JavaScript 就像炊具，电视，微波炉或吹风机，这些东西为您的房屋提供了有用的功能。

### 开发工具

一旦了解了可用于构建网页的“原始”技术（例如 HTML，CSS 和 JavaScript），您很快就会发现各种可用于使工作更轻松或更有效的工具。例如：

- 现代浏览器中的 [开发人员工具（developer tools）](/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)可用于调试代码。
- 可用于运行测试以显示您的代码是否按预期运行的 [测试工具（Testing tools）](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing)。
- 建立在 JavaScript 之上的库和框架，使您可以更快，更有效地构建某些类型的网站。
- 所谓的“Linters” ，它包含了一组规则，检查您的代码之后，会突出显示您未正确遵循规则的地方。
- Minifiers，它将代码文件中的所有空格删除以使其更小，从而可以更快地从服务器下载。

### 服务器端语言和框架

HTML，CSS 和 JavaScript 是前端（或客户端）语言，这意味着它们由浏览器运行以生成用户可以使用的网站前端。

还有另一类语言，称为后端（或服务器端）语言，这意味着它们先在服务器上运行，然后再将结果发送到浏览器进行显示。服务器端语言的一种典型用法是从数据库中获取一些数据并生成一些 HTML 以包含该数据，然后再将 HTML 发送给浏览器以将其显示给用户。

服务器端语言的例子包括 ASP.NET，Python，PHP 和 NodeJS。

## Web 最佳做法

我们已经简要讨论了用于构建网站的技术。现在，让我们讨论应该采用的最佳做法，以确保以最佳方式使用这些技术。

在进行 Web 开发时，不确定性的主要原因来自以下实际情况：您不知道每个用户将使用哪类技术条件来查看您的网站：

- 用户 1 可能正在带有狭窄屏幕的 iPhone 上观看它。
- 用户 2 可能正在连接了宽屏显示器的 Windows 笔记本电脑上查看它。
- 用户 3 可能是盲人，并且使用屏幕阅读器向他们朗读网页。
- 用户 4 可能正在使用无法运行现代浏览器的旧台式机。

因为您不完全知道用户将使用什么，所以您需要进行防御性设计——使您的网站尽可能灵活，以便上述所有用户都可以使用它，即使他们可能得到并不完全相同的体验。简而言之，我们正在努力使所有人都能使用 Web。

在学习的某些时候，您将遇到以下概念。

- **跨浏览器兼容性**（Cross-browser compatibility）是一种确保您的网页能够在尽可能多的设备上运行的做法。这包括使用所有浏览器都支持的技术，为可以处理这些浏览器的浏览器提供更好的体验（逐步增强），和/或编写代码，从而使之退回到较旧的浏览器中更简单但仍可用的体验（平稳降级）。它还涉及大量测试，以查看某些浏览器是否有任何故障，然后进行更多工作来修复这些故障。
- **响应式网页设计**（Responsive Web design）是一种使功能和布局变得灵活以便它们可以自动适应不同的浏览器的做法。一个明显的例子是在桌面上的宽屏浏览器中以一种方式进行布局，但在手机浏览器中以另一种更紧凑的单列布局的网站。现在请尝试调整浏览器窗口的宽度，然后看看会发生什么。
- **性能**（Performance）意味着要尽快加载网站，而且还应使其直观易用，以使用户不会碰壁离开。
- **无障碍**（Accessibility）意味着使您的网站可供尽可能多的不同类型的人使用（相关概念是多样性和包容性，以及包容性设计）。这包括视力障碍，听力障碍，认知障碍或肢体障碍的人。它也不仅仅局限于残疾人——也包含年轻人或老年人、来自不同文化的人、使用移动设备的人、或网络连接不可靠或缓慢的人。
- **国际化**（Internationalization）意味着使网站可以供来自不同文化背景的人使用，这些人会说和您不同的语言。这一点可以考虑一些技术手段（例如，更改布局以使其对于从右到左甚至垂直的语言仍然可以正常使用）和人为手段（例如，使用简单的非俚语，以便使以您的语言作为第二或第三语言的人更可能理解您的文字）。
- **隐私与安全**（Privacy & Security）这两个概念相关但不同。隐私是指允许人们私下从事其业务，而不是监视他们或收集您绝对不需要的更多数据。安全性是指以安全的方式构建您的网站，以使恶意用户无法从您或您的用户那里窃取信息。

## 参见

- [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [How does the internet work?](/zh-CN/docs/Learn/Common_questions/How_does_the_Internet_work)
