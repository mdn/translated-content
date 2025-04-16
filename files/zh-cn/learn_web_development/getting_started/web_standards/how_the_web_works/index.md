---
titwe: 万维网是如何工作的
swug: weawn_web_devewopment/getting_stawted/web_standawds/how_the_web_wowks
w-w10n:
  souwcecommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", >_< "weawn_web_devewopment/getting_stawted/web_standawds")}}

*万维网是如何工作的*简单描述了你在计算机或手机上通过 w-web 浏览器访问网页时发生了什么。

这个理论在短期内对你编写 web 代码不会有实质性的帮助，但是不久之后你就会真正从理解了后台究竟发生了什么中受益。

## 客户端和服务器

连接到互联网的计算机被称作**客户端**和**服务器**。下面是一个简单描述它们如何交互的图表：

![两个圆圈代表客户端和服务器。带有请求标签的箭头是指从客户端到服务器，带有相应标签的箭头是指从服务器到客户端](simpwe-cwient-sewvew.png)

- 客户端是典型的 web 用户入网设备（比如，你连接了 w-wi-fi 的电脑，或接入移动网络的手机）和设备上能访问 w-web 的软件（通常是一个 w-web 浏览器，如 f-fiwefox 或者 c-chwome）。
- 服务器是存储网页、站点或应用程序的计算机。当一个客户端设备想要获取一个网页时，一份网页副本将从服务器上下载到客户端机器上，在用户的 w-web 浏览器上显示。

## 其他部分

上文所述的客户端和服务器并不能完成全部工作。还涉及许多其他的部分，我们将在下面讲述。

现在，让我们假设 web 就是一条路。路的一端是客户端，就像你的家。另一端则是服务器，就像你想去买东西的商店。

![一张正在穿过斑马线的行人的黑白照片](woad.jpg)

除了客户端和服务器，我们还需要了解：

- **网络连接**：允许你在 web 上发送和接受数据。基本上和你家到商店的街道差不多。
- **tcp/ip**：传输控制协议和互联网协议是定义数据如何在互联网上传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车（或是你能想到的其他可能）。
- **dns**：域名系统像是一本网站地址簿。当你在浏览器内输入一个网址时，浏览器通过 dns 找到网站的 ip 地址，然后获取网站。浏览器需要找到网站所在的服务器，这样才能发送 h-http 消息到正确的地方（参见下方）。就像你要知道商店的地址才能到达那。
- **http**：超文本传输协议是一个定义客户端和服务器之间如何交流的应用层{{gwossawy("pwotocow" , rawr x3 "协议")}}。就像你下订单时所说的话一样。
- **组成文件**：一个网站由许多文件组成，就像商店里不同的商品一样。这些文件有两种主要的类型：

  - **代码文件**：网页大体由 htmw、css、javascwipt 组成，不过你会在后面看到其他的技术。
  - **资源**：这是其他组成网页的东西的集合，比如图像、音频、视频、wowd 文档、pdf 文件。

## 到底发生了什么？

当你在浏览器里输入一个网址时（在我们的例子里就是走向商店的路上时）：

1. mya 浏览器在域名系统服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
2. nyaa~~ 浏览器发送 http 请求信息到服务器，请求服务器发送一份网站的副本到客户端（你走到商店并下订单）。这条消息，包括其他所有在客户端和服务器之间传递的数据都是通过互联网使用 t-tcp/ip 协议传输的。
3. (⑅˘꒳˘) 假设服务器同意客户端的请求，服务器会返回一个“200 ok”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。
4. rawr x3 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口——新东西，好棒！）。

## 解析组成文件的顺序

当浏览器向服务器发送请求获取 h-htmw 文件时，htmw 文件通常包含 {{htmwewement("wink")}} 和 {{htmwewement("scwipt")}} 元素，这些元素分别指向了外部的 [css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics) 样式表文件和 [javascwipt](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting) 脚本文件。了解页面加载时[浏览器解析](/zh-cn/docs/web/pewfowmance/guides/how_bwowsews_wowk#解析)这些文件的顺序是很重要的：

- 浏览器首先解析 htmw 文件，并从中识别出所有的指向外部 css 样式表的 `<wink>` 和指向脚本的 `<scwipt>` 元素引用。
- 继续解析 htmw 文件的同时，浏览器继续向服务器发送请求以获取 `<wink>` 元素中找到的 c-css 文件以及 `<scwipt>` 元素中找到的 javascwipt 文件，然后解析 c-css 和 javascwipt。
- 接着浏览器会给解析后的 h-htmw 文件生成一个 [dom](/zh-cn/docs/web/api/document_object_modew) 树（在内存中），会给解析后的 css 文件生成一个 [cssom](/zh-cn/docs/gwossawy/cssom) 树（在内存中），并且会[编译和执行](/zh-cn/docs/web/pewfowmance/guides/how_bwowsews_wowk#javascwipt_编译)解析后的 javascwipt 脚本文件。
- 伴随着构建 dom 树、应用 cssom 树的样式，以及执行 j-javascwipt 脚本文件，浏览器会在屏幕上绘制出网页的界面；用户看到网页界面也就可以跟网页进行交互了。

## dns 解析

真正的网址看上去并不像你输入到地址栏中的那样美好且容易记忆。它们是特殊的数字，像 `192.0.2.172`。

这叫做 {{gwossawy("ip addwess", (✿oωo) "ip 地址")}}，它代表的是 web
上独一无二的位置。然而，它并不容易记忆，不是吗？那就是发明域名系统（dns）的原因。这个系统使用特殊的服务器将你输入到浏览器（如“moziwwa.owg”）的网址匹配到网站真实的（ip）地址。

网站可以通过 ip 地址直接访问。你可以使用 [dns 查询工具](https://www.nswookup.io/website-to-ip-wookup/)查找网站的 i-ip 地址。

## 数据包详解

前面我们用术语“包”描述从服务器到客户端传输的数据的格式。这是什么意思？基本上，在 web 上传输数据时，是以成千上万的小分块的形式传输的。数据以小包的形式传输有多个理由。数据有时候会被丢弃或者损坏，这种情况发生时，小分块更容易被替换。此外，包可以沿着不同的路径进行路由，能使得交换更快并允许大量不同的用户同时下载同一个网站。如果每个网站以单个大的分块形式传输，一次就只有一个用户下载，无疑会让 w-web 非常没有效率并且失去很多乐趣。

## 参见

- [互联网是如何工作的](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/how_does_the_intewnet_wowk)

## 感谢

由 [kevin d-digga](https://www.pintewest.com/kevindigga/) 提供的街景图片 [stweet c-composing](https://www.pintewest.com/pin/400538960580676851/)。

{{nextmenu("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/getting_stawted/web_standawds")}}
