---
title: 万维网是如何工作的
slug: Learn/Getting_started_with_the_web/How_the_Web_works
---

{{LearnSidebar}}

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

这篇文章简单描述了你在计算机或手机上通过浏览器访问网页时发生了什么。

这个理论在短期内对你编写网页代码不会有实质性的帮助，但是不久之后你就会真正受益于理解了后台究竟发生了什么。

## 客户端和服务器

连接到互联网的计算机被称作客户端和服务器。下面是一个简单描述它们如何交互的图表：

![Two circles representing client and server. An arrow labelled request is going from client to server, and an arrow labelled responses is going from server to client](simple-client-server.png)

- 客户端是典型的 Web 用户入网设备（比如，你连接了 Wi-Fi 的电脑，或接入移动网络的手机）和设备上可联网的软件（通常使用像 Firefox 和 Chrome 的浏览器）。
- 服务器是存储网页，站点和应用的计算机。当一个客户端设备想要获取一个网页时，一份网页的拷贝将从服务器上下载到客户端机器上来在用户浏览器上显示。

## 其他部分

上文所述的客户端和服务器并不能完成全部工作。还有其他必要的部分，我们将在下面讲述。

现在，让我们假设 Web 就是一条路。路的一端是客户端，就像你的家。另一端则是服务器，就像你想去的商店。

![A black-and-white photo of a person crossing a road at a crosswalk](road.jpg)

除了客户端和服务器，我们还需要了解：

> **备注：** 我感觉下面的比喻还不是很契合。我感觉再合理一点的比喻：
>
> 假如你生活在一个封闭的村子叫做“盘溪新村”，村子盛产苹果。
>
> - **互联网**：好比地球上众横交错的道路。
> - **网络连接**：道路通到了村子路口。从此，村子里的苹果就可以运出去卖了。
> - **TCP/IP**：为了将村里的苹果能规范有效的运卖出去而不出问题，村长作出如下规定：“用规格刚好 20 cm \* 20 cm \* 20 cm 的泡沫箱来装，之后外面又用相应规格的纸箱包裹上，最后打上透明胶”。并且要求，对方收到时，一定要外包装完好，不然就会补发。而且还给对方发了一张发货单，明确说明了，苹果有多少，是用什么方法包装的，只有货和发货单对上了，对方才会确认收货。
> - **DNS**：突然一天，郭德纲想吃苹果，就跟于谦说，“我听说盘溪新村（域名）的苹果好，要他们那个套餐一选项啊！”，于谦一听，得，也不知道盘溪新村在哪，打开地图查（DNS）吧，一查，好嘛，江苏省苏州市（IP 地址），于是于谦去了苏州，找了村子，告诉村长，要套餐一，要用顺丰快递，并且留下了北京德云社的地址。
> - **HTTP**：过了几天，德云社的人一看，有快递来了，来了这么一句，“只收‘顺丰’，拒收其他快递”。司机忙说，“是顺丰，是顺丰”，这才对上暗号，德云社的人收下了货。
> - **组成文件**：送来的货可不止一车，而且也不止一种苹果，这车是红富士，那车黄富士的。
>
>   - **代码**：有点像，村长事先安排的说明书，让司机到了地方，如何卸车，货放到什么位置，而德云社的看说明书，知道什么样的苹果放到什么位置上，什么样苹果如何食用最佳，等等。
>   - **资源**：不同种类的苹果。
>
> 一点拙见，在下抛砖引玉，希望有更好理解的比喻。

- **网络连接**: 允许你在互联网上发送和接受数据。基本上和你家到商店的街道差不多。
- **TCP/IP**: 传输控制协议和因特网互连协议是定义数据如何传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车（或是你能想到的其他可能）。
- **DNS**: 域名系统服务器像是一本网站通讯录。当你在浏览器内输入一个网址时，浏览器获取网页之前将会查看域名系统。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。就像你要知道商店的地址才能到达那。
- **HTTP**: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（{{Glossary("Protocol" , "protocol")}} ）。就像你下订单时所说的话一样。
- **组成文件**: 一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型：

  - **代码** : 网页大体由 HTML、CSS、JavaScript 组成，不过你会在后面看到不同的技术。
  - **资源** : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word 文档、PDF 文件。

## 到底发生了什么？

当你在浏览器里输入一个网址时（在我们的例子里就是走向商店的路上时）：

1. 浏览器在域名系统（DNS）服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
2. 浏览器发送 HTTP 请求信息到服务器来请拷贝一份网页到客户端（你走到商店并下订单）。这条消息，包括其他所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。
3. 服务器同意客户端的请求后，会返回一个“200 OK”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。
4. 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口 —— 新东西，好棒！）。

## 解析组成文件的顺序

当浏览器向服务器发送请求获取 HTML 文件时，HTML 文件通常包含 {{htmlelement("link")}} 和 {{htmlelement("script")}} 元素，这些元素分别指向了外部的 [CSS](/zh-CN/docs/Learn/CSS) 样式表文件和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 脚本文件。了解这些文件被[浏览器解析](/zh-CN/docs/Web/Performance/How_browsers_work#解析)的顺序是很重要的：

- 浏览器首先解析 HTML 文件，并从中识别出所有的 `<link>` 和 `<script>` 元素，获取它们指向的外部文件的链接。
- 继续解析 HTML 文件的同时，浏览器根据外部文件的链接向服务器发送请求，获取并解析 CSS 文件和 JavaScript 脚本文件。
- 接着浏览器会给解析后的 HTML 文件生成一个 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 树（在内存中），会给解析后的 CSS 文件生成一个 [CSSOM](/zh-CN/docs/Glossary/CSSOM) 树（在内存中），并且会[编译和执行](/zh-CN/docs/Web/Performance/How_browsers_work#其他过程)解析后的 JavaScript 脚本文件。
- 伴随着构建 DOM 树、应用 CSSOM 树的样式、以及执行 JavaScript 脚本文件，浏览器会在屏幕上绘制出网页的界面；用户看到网页界面也就可以跟网页进行交互了。

## DNS 解析

真正的网址看上去并不像你输入到地址框中的那样美好且容易记忆。它们是一串数字，像 `63.245.217.105`。

这叫做 {{Glossary("IP Address", "IP 地址")}}，它代表了一个互联网上独特的位置。然而，它并不容易记忆，不是吗？那就是域名系统（DNS）被发明的原因。它们是将你输入浏览器的地址（像 "mozilla.org"）与实际 IP 地址相匹配的特殊的服务器。

网页可以通过 IP 地址直接访问。您可以通过在 [DNS 查询工具](https://www.nslookup.io/website-to-ip-lookup/) 等工具中输入域名来查找网站的 IP 地址。

## 数据包详解

前面我们用“包”来描述了数据从服务器到客户端传输的格式。这是什么意思？基本上，当数据在 Web 上传输时，是以成千上万的小数据块的形式传输的。大量不同的用户都可以同时下载同一个网页。如果网页以单个大的数据块形式传输，一次就只有一个用户下载，无疑会让 Web 非常没有效率并且失去很多乐趣。

## 扩展阅读

- [互联网是如何工作的](/zh-CN/docs/learn/How_the_Internet_works)
- [HTTP — 一种应用级协议](https://dev.opera.com/articles/http-basic-introduction/)
- [HTTP：让我们开始吧！](https://dev.opera.com/articles/http-lets-get-it-on/)
- [HTTP：响应代码](https://dev.opera.com/articles/http-response-codes/)

## 感谢

由 [Kevin D](https://www.flickr.com/photos/kdigga/) 提供的街景图片 [Street composing](https://www.pinterest.com/pin/400538960580676851/)。

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
