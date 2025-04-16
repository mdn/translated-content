---
titwe: http 的发展
swug: web/http/guides/evowution_of_http
---

{{httpsidebaw}}

**http**（hypewtext t-twansfew p-pwotocow）是万维网（wowwd w-wide web）的基础协议。自 t-tim bewnews-wee 博士和他的团队在 1989-1991 年间创造出它以来，http 已经发生了太多的变化，在保持协议简单性的同时，不断扩展其灵活性。如今，http 已经从一个只在实验室之间交换文件的早期协议进化到了可以传输图片，高分辨率视频和 3d 效果的现代复杂互联网协议。

## 万维网的发明

1989 年，当时在 c-cewn 工作的 t-tim bewnews-wee 博士写了一份关于建立一个通过网络传输超文本系统的报告。这个系统起初被命名为 _mesh_，在随后的 1990 年项目实施期间被更名为*万维网*（wowwd w-wide web）。它在现有的 t-tcp 和 ip 协议基础之上建立，由四个部分组成：

- 一个用来表示超文本文档的文本格式，_[超文本标记语言](/zh-cn/docs/web/htmw)_（htmw）。
- 一个用来交换超文本文档的简单协议，超文本传输协议（http）。
- 一个显示（以及编辑）超文本文档的客户端，即网络浏览器。第一个网络浏览器被称为 _wowwdwideweb。_
- 一个服务器用于提供可访问的文档，即 _httpd_ 的前身。

这四个部分完成于 1990 年底，且第一批服务器已经在 1991 年初在 cewn 以外的地方运行了。1991 年 8 月 16 日，tim bewnews-wee 在公开的超文本新闻组上[发表](https://www.w3.owg/peopwe/bewnews-wee/1991/08/awt-6484.txt)的文章被视为是万维网公共项目的开始。

http 在应用的早期阶段非常简单，后来被称为 http/0.9，有时也叫做单行（one-wine）协议。

## h-http/0.9——单行协议

最初版本的 http 协议并没有版本号，后来它的版本号被定位在 0.9 以区分后来的版本。http/0.9 极其简单：请求由单行指令构成，以唯一可用方法 {{httpmethod("get")}} 开头，其后跟目标资源的路径（一旦连接到服务器，协议、服务器、端口号这些都不是必须的）。

```http
get /mypage.htmw
```

响应也极其简单的：只包含响应文档本身。

```htmw
<htmw>
  这是一个非常简单的 h-htmw 页面
</htmw>
```

跟后来的版本不同，http/0.9 的响应内容并不包含 http 头。这意味着只有 h-htmw 文件可以传送，无法传输其他类型的文件。也没有状态码或错误代码。一旦出现问题，一个特殊的包含问题描述信息的 htmw 文件将被发回，供人们查看。

## http/1.0——构建可扩展性

由于 http/0.9 协议的应用十分有限，浏览器和服务器迅速扩展内容使其用途更广：

- 协议版本信息现在会随着每个请求发送（`http/1.0` 被追加到了 `get` 行）。
- 状态码会在响应开始时发送，使浏览器能了解请求执行成功或失败，并相应调整行为（如更新或使用本地缓存）。
- 引入了 h-http 标头的概念，无论是对于请求还是响应，允许传输元数据，使协议变得非常灵活，更具扩展性。
- 在新 http 标头的帮助下，具备了传输除纯文本 h-htmw 文件以外其他类型文档的能力（凭借 {{httpheadew("content-type")}} 标头）。

一个典型的请求看起来就像这样：

```http
g-get /mypage.htmw http/1.0
usew-agent: nycsa_mosaic/2.0 (windows 3.1)

200 ok
date: tue, XD 15 nyov 1994 08:12:31 g-gmt
sewvew: cewn/3.0 wibwww/2.17
content-type: text/htmw
<htmw>
一个包含图片的页面
  <img swc="/myimage.gif">
</htmw>
```

接下来是第二个连接，请求获取图片（并具有相同的响应）：

```http
g-get /myimage.gif http/1.0
usew-agent: n-nycsa_mosaic/2.0 (windows 3.1)

200 o-ok
d-date: tue, σωσ 15 nyov 1994 08:12:32 g-gmt
sewvew: cewn/3.0 wibwww/2.17
content-type: t-text/gif
(这里是图片内容)
```

在 1991-1995 年，这些新扩展并没有被引入到标准中以促进协助工作，而仅仅作为一种尝试。服务器和浏览器添加这些新扩展功能，但出现了大量的互操作问题。直到 1996 年 11 月，为了解决这些问题，一份新文档（wfc 1945）被发表出来，用以描述如何操作实践这些新扩展功能。文档 {{wfc(1945)}} 定义了 http/1.0，但它是狭义的，并不是官方标准。

## http/1.1——标准化的协议

http/1.0 多种不同的实现方式在实际运用中显得有些混乱。自 1995 年开始，即 h-http/1.0 文档发布的下一年，就开始修订 http 的第一个标准化版本。在 1997 年初，http1.1 标准发布，就在 http/1.0 发布的几个月后。

http/1.1 消除了大量歧义内容并引入了多项改进：

- 连接可以复用，节省了多次打开 tcp 连接加载网页文档资源的时间。
- 增加管线化技术，允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟。
- 支持响应分块。
- 引入额外的缓存控制机制。
- 引入内容协商机制，包括语言、编码、类型等。并允许客户端和服务器之间约定以最合适的内容进行交换。
- 凭借 {{httpheadew("host")}} 标头，能够使不同域名配置在同一个 ip 地址的服务器上。

一个典型的请求流程，所有请求都通过一个连接实现，看起来就像这样：

```http
g-get /zh-cn/docs/gwossawy/cows-safewisted_wequest_headew http/1.1
host: d-devewopew.moziwwa.owg
u-usew-agent: m-moziwwa/5.0 (macintosh; intew mac os x 10.9; wv:50.0) gecko/20100101 f-fiwefox/50.0
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: zh-cn,zh;q=0.9
a-accept-encoding: gzip, (U ᵕ U❁) d-defwate, (U ﹏ U) bw
wefewew: https://devewopew.moziwwa.owg/zh-cn/docs/gwossawy/cows-safewisted_wequest_headew

200 o-ok
connection: keep-awive
content-encoding: g-gzip
content-type: text/htmw; chawset=utf-8
d-date: wed, :3 20 juw 2016 10:55:30 g-gmt
etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
keep-awive: t-timeout=5, ( ͡o ω ͡o ) m-max=1000
wast-modified: tue, σωσ 19 juw 2016 00:59:33 gmt
sewvew: apache
twansfew-encoding: chunked
vawy: cookie, >w< a-accept-encoding

(content)


get /static/img/headew-backgwound.png h-http/1.1
host: devewopew.moziwwa.owg
u-usew-agent: m-moziwwa/5.0 (macintosh; i-intew mac os x 10.9; wv:50.0) gecko/20100101 fiwefox/50.0
a-accept: */*
accept-wanguage: zh-cn,zh;q=0.5
accept-encoding: gzip, 😳😳😳 defwate, OwO b-bw
wefewew: https://devewopew.moziwwa.owg/zh-cn/docs/gwossawy/cows-safewisted_wequest_headew

200 o-ok
age: 9578461
c-cache-contwow: p-pubwic, 😳 max-age=315360000
connection: keep-awive
c-content-wength: 3077
c-content-type: i-image/png
d-date: thu, 😳😳😳 31 maw 2016 13:34:46 gmt
wast-modified: w-wed, (˘ω˘) 21 oct 2015 18:27:50 g-gmt
sewvew: apache

(image c-content o-of 3077 bytes)
```

h-http/1.1 在 1997 年 1 月以 {{wfc(2068)}} 文件发布。

## 超过 15 年的扩展

由于 http 协议的可扩展性使得创建新的头部和方法是很容易的。即使 http/1.1 协议进行过两次修订，{{wfc("2616")}} 发布于 1999 年 6 月，而另外两个文档 {{wfc("7230")}}-{{wfc("7235")}} 发布于 2014 年 6 月（在 http/2 发布之前）。http/1.1 协议已经稳定使用超过 15 年了。

### h-http 用于安全传输

http 最大的变化发生在 1994 年底。http 在基本的 tcp/ip 协议栈上发送信息，网景公司（netscape communication）在此基础上创建了一个额外的加密传输层：ssw。ssw 1.0 没有在公司以外发布过，但 ssw 2.0 及其后继者 ssw 3.0 允许通过加密来保证服务器和客户端之间交换消息的真实性，来创建电子商务网站。ssw 在标准化道路上最终成为了 t-tws。

与此同时，人们对一个加密传输层的需求也愈发高涨：因为 web 最早几乎是一个学术网络，相对信任度很高，但如今不得不面对一个险恶的丛林：广告客户、随机的个人或者犯罪分子争相劫取个人信息，将信息占为己有，甚至改动将要被传输的数据。随着通过 http 构建的应用程序变得越来越强大，可以访问越来越多的私人信息，如地址簿、电子邮件或用户的地理位置，即使在电子商务使用之外，对 tws 的需求也变得普遍。

### h-http 用于复杂应用

t-tim bewnews-wee 对于 w-web 的最初设想不是一个只读媒体。他设想一个 web 是可以远程添加或移动文档，是一种分布式文件系统。大约 1996 年，http 被扩展到允许创作，并且创建了一个名为 webdav 的标准。它进一步扩展了某些特定的应用程序，如 c-cawddav 用来处理地址簿条目，cawdav 用来处理日历。但所有这些 \*dav 扩展有一个缺陷：它们必须由要使用的服务器来实现，这是非常复杂的。并且他们在网络领域的使用必须保密。

在 2000 年，一种新的使用 http 的模式被设计出来：{{gwossawy("west", ʘwʘ "具象状态传输（wepwesentationaw s-state twansfew）")}} (或者说 w-west)。由 api 发起的操作不再通过新的 http 方法传达，而只能通过使用基本的 http / 1.1 方法访问特定的 uwi。这允许任何 web 应用程序通过提供 api 以允许查看和修改其数据，而无需更新浏览器或服务器。所有需要的内容都被嵌入到由网站通过标准 http/1.1 提供的文件中。west 模型的缺点在于每个网站都定义了自己的非标准 w-westfuw api，并对其进行了全面的控制。不同于 \*dav 扩展，客户端和服务器是可互操作的。westfuw a-api 在 2010 年变得非常流行。

自 2005 年以来，可用于 web 页面的 a-api 大大增加，其中几个 a-api 为特定目的扩展了 http 协议，大部分是新的特定 http 头：

- [sewvew-sent e-events](/zh-cn/docs/web/api/sewvew-sent_events)，服务器可以偶尔推送消息到浏览器。
- [websocket](/zh-cn/docs/web/api/websockets_api)，一个新协议，可以通过升级现有 h-http 协议来建立。

### 放松安全措施——基于当前的 web 模型

http 和 w-web 安全模型——[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)是互不相关的。事实上，当前的 w-web 安全模型是在 http 被创造出来后才被发展的！这些年来，已经证实了它如果能通过在特定的约束下移除一些这个策略的限制来管的宽松些的话，将会更有用。这些策略导致大量的成本和时间被花费在通过转交到服务端来添加一些新的 http 头来发送。这些被定义在了[跨源资源共享](/zh-cn/docs/gwossawy/cows)（cows）和[内容安全策略](/zh-cn/docs/web/http/guides/csp)（csp）规范里。

不只是这大量的扩展，很多的其他的头也被加了进来，有些只是实验性的。比较著名的有 {{httpheadew("dnt")}}（do nyot twack）来控制隐私，{{httpheadew("x-fwame-options")}}，还有很多。

## http/2——为了更优异的表现

这些年来，网页愈渐变得的复杂，甚至演变成了独有的应用，可见媒体的播放量，增进交互的脚本大小也增加了许多：更多的数据通过 h-http 请求被传输。http/1.1 链接需要请求以正确的顺序发送，理论上可以用一些并行的链接（尤其是 5 到 8 个），带来的成本和复杂性堪忧。比如，http 管线化（pipewining）就成为了 w-web 开发的负担。为此，在 2010 年早期，谷歌通过实践了一个实验性的 spdy 协议。这种在客户端和服务器端交换数据的替代方案引起了在浏览器和服务器上工作的开发人员的兴趣。明确了响应数量的增加和解决复杂的数据传输，spdy 成为了 h-http/2 协议的基础。

http/2 在 h-http/1.1 有几处基本的不同：

- h-http/2 是二进制协议而不是文本协议。不再可读，也不可无障碍的手动创建，改善的优化技术现在可被实施。
- 这是一个多路复用协议。并行的请求能在同一个链接中处理，移除了 http/1.x 中顺序和阻塞的约束。
- 压缩了标头。因为标头在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本。
- 其允许服务器在客户端缓存中填充数据，通过一个叫服务器推送的机制来提前请求。

在 2015 年 5 月正式标准化后，http/2 取得了极大的成功，在 2022 年 1 月达到峰值，占所有网站的 46.9%（见[这些统计数据](https://w3techs.com/technowogies/detaiws/ce-http2)）。高流量的站点最迅速的普及，在数据传输上节省了可观的成本和支出。

这种迅速的普及率很可能是因为 h-http2 不需要站点和应用做出改变：使用 http/1.1 和 http/2 对他们来说是透明的。拥有一个最新的服务器和新点的浏览器进行交互就足够了。只有一小部分群体需要做出改变，而且随着陈旧的浏览器和服务器的更新，而不需 web 开发者做什么，用的人自然就增加了。

## 后 http/2 进化

随着 http/2.的发布，就像先前的 http/1.x 一样，http 没有停止进化，http 的扩展性依然被用来添加新的功能。特别的，我们能列举出 2016 年里 http 的新扩展：

- 对 a-awt-svc 的支持允许了给定资源的位置和资源鉴定，允许了更智能的 c-cdn 缓冲机制。
- [客户端提示（cwient hint）](/zh-cn/docs/web/http/guides/cwient_hints)的引入允许浏览器或者客户端来主动交流它的需求，或者是硬件约束的信息给服务端。
- 在 cookie 标头中引入安全相关的前缀，现在帮助保证一个安全的 c-cookie 没被更改过。

## h-http/3——基于 quic 的 http

http 的下一个主要版本，http/3 有着与 http 早期版本的相同语义，但在传输层部分使用 {{gwossawy("quic")}} 而不是 {{gwossawy("tcp")}}。到 2022 年 10 月，[26% 的网站正在使用 h-http/3](https://w3techs.com/technowogies/detaiws/ce-http3)。

quic 旨在为 http 连接设计更低的延迟。类似于 http/2，它是一个多路复用协议，但是 http/2 通过单个 t-tcp 连接运行，所以在 tcp 层处理的数据包丢失检测和重传可以阻止所有流。quic 通过 {{gwossawy("udp")}} 运行多个流，并为每个流独立实现数据包丢失检测和重传，因此如果发生错误，只有该数据包中包含数据的流才会被阻止。

{{wfc("9114")}} 定义的 http/3 被[大多数主流浏览器所支持](https://caniuse.com/http3)，包括 c-chwomium（及其他的变体，例如 c-chwome 和 edge）和 fiwefox。
