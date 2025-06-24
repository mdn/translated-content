---
title: 万维网是如何工作的
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

*万维网是如何工作的*简单描述了你在计算机或手机上通过 Web 浏览器访问网页时发生了什么。

这个理论在短期内对你编写 Web 代码不会有实质性的帮助，但是不久之后你就会真正从理解了后台究竟发生了什么中受益。

## 客户端和服务器

连接到互联网的计算机被称作**客户端**和**服务器**。下面是一个简单描述它们如何交互的图表：

![两个圆圈代表客户端和服务器。带有请求标签的箭头是指从客户端到服务器，带有相应标签的箭头是指从服务器到客户端](simple-client-server.png)

- 客户端是典型的 Web 用户入网设备（比如，你连接了 Wi-Fi 的电脑，或接入移动网络的手机）和设备上能访问 Web 的软件（通常是一个 Web 浏览器，如 Firefox 或者 Chrome）。
- 服务器是存储网页、站点或应用程序的计算机。当一个客户端设备想要获取一个网页时，一份网页副本将从服务器上下载到客户端机器上，在用户的 Web 浏览器上显示。

## 其他部分

上文所述的客户端和服务器并不能完成全部工作。还涉及许多其他的部分，我们将在下面讲述。

现在，让我们假设 Web 就是一条路。路的一端是客户端，就像你的家。另一端则是服务器，就像你想去买东西的商店。

![一张正在穿过斑马线的行人的黑白照片](road.jpg)

除了客户端和服务器，我们还需要了解：

- **网络连接**：允许你在 Web 上发送和接受数据。基本上和你家到商店的街道差不多。
- **TCP/IP**：传输控制协议和互联网协议是定义数据如何在互联网上传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车（或是你能想到的其他可能）。
- **DNS**：域名系统像是一本网站地址簿。当你在浏览器内输入一个网址时，浏览器通过 DNS 找到网站的 IP 地址，然后获取网站。浏览器需要找到网站所在的服务器，这样才能发送 HTTP 消息到正确的地方（参见下方）。就像你要知道商店的地址才能到达那。
- **HTTP**：超文本传输协议是一个定义客户端和服务器之间如何交流的应用层{{Glossary("Protocol" , "协议")}}。就像你下订单时所说的话一样。
- **组成文件**：一个网站由许多文件组成，就像商店里不同的商品一样。这些文件有两种主要的类型：
  - **代码文件**：网页大体由 HTML、CSS、JavaScript 组成，不过你会在后面看到其他的技术。
  - **资源**：这是其他组成网页的东西的集合，比如图像、音频、视频、Word 文档、PDF 文件。

## 到底发生了什么？

当你在浏览器里输入一个网址时（在我们的例子里就是走向商店的路上时）：

1. 浏览器在域名系统服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
2. 浏览器发送 HTTP 请求信息到服务器，请求服务器发送一份网站的副本到客户端（你走到商店并下订单）。这条消息，包括其他所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。
3. 假设服务器同意客户端的请求，服务器会返回一个“200 OK”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。
4. 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口——新东西，好棒！）。

## 解析组成文件的顺序

当浏览器向服务器发送请求获取 HTML 文件时，HTML 文件通常包含 {{htmlelement("link")}} 和 {{htmlelement("script")}} 元素，这些元素分别指向了外部的 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 样式表文件和 [JavaScript](/zh-CN/docs/Learn_web_development/Core/Scripting) 脚本文件。了解页面加载时[浏览器解析](/zh-CN/docs/Web/Performance/Guides/How_browsers_work#解析)这些文件的顺序是很重要的：

- 浏览器首先解析 HTML 文件，并从中识别出所有的指向外部 CSS 样式表的 `<link>` 和指向脚本的 `<script>` 元素引用。
- 继续解析 HTML 文件的同时，浏览器继续向服务器发送请求以获取 `<link>` 元素中找到的 CSS 文件以及 `<script>` 元素中找到的 JavaScript 文件，然后解析 CSS 和 JavaScript。
- 接着浏览器会给解析后的 HTML 文件生成一个 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 树（在内存中），会给解析后的 CSS 文件生成一个 [CSSOM](/zh-CN/docs/Glossary/CSSOM) 树（在内存中），并且会[编译和执行](/zh-CN/docs/Web/Performance/Guides/How_browsers_work#javascript_编译)解析后的 JavaScript 脚本文件。
- 伴随着构建 DOM 树、应用 CSSOM 树的样式，以及执行 JavaScript 脚本文件，浏览器会在屏幕上绘制出网页的界面；用户看到网页界面也就可以跟网页进行交互了。

## DNS 解析

真正的网址看上去并不像你输入到地址栏中的那样美好且容易记忆。它们是特殊的数字，像 `192.0.2.172`。

这叫做 {{Glossary("IP Address", "IP 地址")}}，它代表的是 Web
上独一无二的位置。然而，它并不容易记忆，不是吗？那就是发明域名系统（DNS）的原因。这个系统使用特殊的服务器将你输入到浏览器（如“mozilla.org”）的网址匹配到网站真实的（IP）地址。

网站可以通过 IP 地址直接访问。你可以使用 [DNS 查询工具](https://www.nslookup.io/website-to-ip-lookup/)查找网站的 IP 地址。

## 数据包详解

前面我们用术语“包”描述从服务器到客户端传输的数据的格式。这是什么意思？基本上，在 Web 上传输数据时，是以成千上万的小分块的形式传输的。数据以小包的形式传输有多个理由。数据有时候会被丢弃或者损坏，这种情况发生时，小分块更容易被替换。此外，包可以沿着不同的路径进行路由，能使得交换更快并允许大量不同的用户同时下载同一个网站。如果每个网站以单个大的分块形式传输，一次就只有一个用户下载，无疑会让 Web 非常没有效率并且失去很多乐趣。

## 参见

- [互联网是如何工作的](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## 感谢

由 [kevin digga](https://www.pinterest.com/kevindigga/) 提供的街景图片 [Street composing](https://www.pinterest.com/pin/400538960580676851/)。

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
