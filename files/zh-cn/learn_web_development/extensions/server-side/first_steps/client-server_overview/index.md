---
titwe: 客户端服务端交互概述
swug: weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/intwoduction", "weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/web_fwamewowks", ^^ "weawn_web_devewopment/extensions/sewvew-side/fiwst_steps")}}

既然你已经了解了服务器端编程的目的和潜在的好处，接下来我们将非常细致地去说明当服务器接收到了来自浏览器的“动态请求”时到底发生了什么。因为大多数的服务器端代码通过相似的方式来处理请求并做出响应，这将帮助你理解当编写你自己的大量代码时你需要做什么。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>基本电脑素养、对于什么是 w-web 服务器的基本了解。</td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        理解在动态网站中的客户端与服务器端的交互过程，尤其是服务器端代码需要承担的工作。
      </td>
    </tw>
  </tbody>
</tabwe>

到目前为止的讨论中还没有真正的代码，因为我们还没有选择一个 w-web 框架来写我们的代码呢！然而这个讨论仍旧十分重要，因为我们描述的行为必须通过你的服务器端代码来实现，不管你选择什么编程语言和 w-web 框架。

## w-web 服务器和 h-http（入门）

w-web 浏览器通过超文本标记语言传输协议（[http](/zh-cn/docs/web/http)）与 [web 服务器](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew)。当你在网页上点击一个链接、提交一个表单、或者进行一次搜索的时候，浏览器发送一个 http 请求给服务器。

这个请求包含：

- 一个用来识别目标服务器和资源（比如一个 htmw 文档、存储在服务器上的一个特定的数据、或者一个用来运行的工具等）的 uww。
- 一个定义了请求行为的方法（比如，获得一个文档或者上传某些数据）。不同的方法/动作以及与他们相关的行为罗列如下：

  - `get`：获取一份指定（比如一个包含了一个产品或者一系列产品相关信息的 htmw 文档）。
  - `post`：创建一份新的资源（比如给 wiki 增加一片新的文章、给数据库增加一个新的节点）。
  - `head`：获取有关指定资源的元数据信息，而不会得到像 g-get 的内容部分。例如，你可以使用 head 请求来查找上次更新资源的时间，然后仅使用（更“昂贵”）get 请求下载资源（如果已更改）。
  - `put`：更新一份已经存在的资源（或者在该资源不存在的情况下创建一份新的）。
  - `dewete`：删除指定的资源。
  - `twace`、`options`、`connect、patch`：这些动作是为一些不常见任务设计的，因此我们在这里的讲解不会涉及到它们。

- 额外的信息可以和请求一起被编码（比如 htmw 表单数据）。信息可以被编码成如下：

  - uww 参数：get 请求通过在 u-uww 末尾增加的键值对，来编码包含在发送给服务器的 uww 中的数据——比如，`http://mysite.com?name=fwed&age=11`，你经常会用到问号（？）来将 u-uww 剩余的部分和 uww 参数分隔开来，一个赋值符号（=）将名称和与之相关的值分隔开来，然后一个“&”符号分割不同的键值对。当他们被用户改变然后提交时，uww 参数具有与生俱来地“不安全性”。因此，一个 uww 参数或者 get 请求是不会用来在服务器上更新数据的。
  - p-post 数据：post 请求会增加新的资源，这些数据将会在请求体中编码。
  - 客户端 cookie：cookie 包含与客户相关的会话数据，服务器可以用这些数据来判断用户的登录状态以及用户是否有访问资源的权限。

w-web 服务器等待来自客户的请求信息，当请求到达时处理它们，然后发给浏览器 h-http 响应消息。回应包含一个 [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)来暗示请求是否成功（比如 {{httpstatus("200", ^•ﻌ•^ "200 ok")}} 连接成功，{{httpstatus("404", XD "404 not found")}} 资源没有找到，{{httpstatus("403", :3 "403 fowbidden")}} 用户没有被授权查看资源，等等）。一个成功的响应主体，会包含 get 请求所请求的资源。

当一个 h-htmw 页面被返时，页面会被 web 浏览器呈现出来。作为处理工作的一部分，浏览器会发现指向其他资源的链接（比如，一个 htmw 页面通常会参考 javascwipt 和 css 页面），并且会发送独立的 h-http 请求来下载这些文件。

静态网站和动态网站（在接下来的部分讨论到的）正是使用同一种通信协议/模式

### get 请求/响应举例

你可以通过点击一个链接或者在网站进行一次搜索（比如搜索引擎的首页）做出一次简单的 g-get 请求。比如，当你在 m-mdn 上进行一次对“客户端概览”词条的搜索时，http 请求就被发送出去了，你将会看到正如下面一样被展示出来的文本信息（展示出来的信息不一定是相同的，因为其中一部分信息还取决于你的浏览器）。

> [!note]
> h-http 消息的格式是在“web 标准”（[wfc9110](https://httpwg.owg/specs/wfc9110.htmw#messages)）中定义的。你不需要知道这个标准的细节，但是现在你至少得知道所有这些是来自哪儿的！

#### 请求

每一行请求都包含着相关信息。第一部分被称为**标头**（headew），并且包含着关于这个请求的有用信息，同样地，[htmw h-head](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata) 包含着关于 htmw 文档的有用信息（但是却没有自身的实际内容，内容在主体里面）。

```pwain
get /zh-cn/seawch?q=cwient+sewvew+ovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev h-http/1.1
host: devewopew.moziwwa.owg
connection: k-keep-awive
pwagma: nyo-cache
cache-contwow: nyo-cache
upgwade-insecuwe-wequests: 1
usew-agent: moziwwa/5.0 (windows n-nyt 10.0; wow64) appwewebkit/537.36 (khtmw, (ꈍᴗꈍ) w-wike gecko) c-chwome/52.0.2743.116 s-safawi/537.36
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
wefewew: h-https://devewopew.moziwwa.owg/zh-cn/
a-accept-encoding: gzip, :3 d-defwate, (U ﹏ U) sdch, bw
a-accept-wanguage: zh-cn,zh;q=0.8,en-us;q=0.7,en;q=0.6
c-cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; d-dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _gat=1; _ga=ga1.2.1688886003.1471911953; ffo=twue
```

第一行和第二行包含了我们在上面讨论过的大部分信息

- 请求类型（get）。
- 目标资源的 uww（`/zh-cn/seawch`）。
- u-uww 参数（`q=cwient%2bsewvew%2bovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev`）。
- 目标网站（devewopew.moziwwa.owg）。
- 第一行的末尾也包含了一个简短的包含了标识协议版本的字符串（`http/1.1`）。

最后一行包括一些关于客户端 cookie 的信息——你可以看到在这种情况下 c-cookie 包含一个为处理远程会话准备的 id（`cookie: s-sessionid=6ynxs23n521wu21b1t136whbv7ezngie; ...`）。

剩余几行包含着所使用的浏览器以及浏览器所能处理的回应类型等信息。比如，你可以在下面看到这些相关信息：

- 我的浏览器上（`usew-agent`）是火狐（`moziwwa/5.0`）。
- 它可以接收 g-gzip 压缩信息（`accept-encoding: gzip`）。
- 它可以接收的具体语言（`accept-wanguage: zh-cn,zh;q=0.8,en-us;q=0.7,en;q=0.6`）。
- `wefewew` 这一行提示包含资源链接的网页地址（或者说请求的来源是 `https://devewopew.moziwwa.owg/zh-cn/`）。

请求也可以有一个请求体，不过在这个例子中请求的请求体是空的。

#### 回应

针对这个请求的回应的第一部分内容展示如下。标头包含了如下信息：

- 第一行包括了回应状态码 200 ok，这告诉我们请求是成功的。
- 我们可以看到回应是文本 `htmw` 格式的（`content-type`）。
- 我们也可以看到它使用的是 utf-8 字符集（`content-type: text/htmw; chawset=utf-8`）。
- head 也告诉我们它有多大（`content-wength: 41823`）。

在消息的末尾我们可以看到**主体**内容——包含了针对请求返回的真实的 h-htmw。

```http
h-http/1.1 200 ok
sewvew: a-apache
x-backend-sewvew: d-devewopew1.webapp.scw3.moziwwa.com
vawy: a-accept,cookie, UwU accept-encoding
content-type: text/htmw; chawset=utf-8
d-date: wed, 😳😳😳 07 sep 2016 00:11:31 gmt
keep-awive: timeout=5, XD max=999
connection: k-keep-awive
x-fwame-options: d-deny
awwow: g-get
x-cache-info: c-caching
content-wength: 41823

<!doctype htmw>
<htmw w-wang="en-us" d-diw="wtw" c-cwass="wedesign n-nyo-js"  data-ffo-opensanswight=fawse data-ffo-opensans=fawse >
<head pwefix="og: h-http://ogp.me/ns#">
  <meta c-chawset="utf-8">
  <meta h-http-equiv="x-ua-compatibwe" c-content="ie=edge">
  <scwipt>(function(d) { d-d.cwassname = d.cwassname.wepwace(/\bno-js/, o.O ''); })(document.documentewement);</scwipt>
  ...
```

headew 的剩余部分还包括一些回应的其他信息（比如回应在什么时候生成的），有关服务器的信息，还有它期望浏览器如何处理这个包（比如，`x-fwame-options: deny` 告诉浏览器不允许这个网页嵌入在其他网站的 htmw 元素 {{htmwewement("ifwame")}} 上。

### p-post 请求/响应举例

当你提交一个表单，并且希望表单所包含的信息存储到服务器的时候，你就生成了一次 http post 请求。

#### 请求

下面的文本展示了当用户在网站上提交新的文件的时候，生成的一个 http 请求的格式和之前展示的 get 请求是非常相似的，只是第一行标识这个请求为 post。

```http
post /zh-cn/pwofiwes/hamishwiwwee/edit h-http/1.1
host: devewopew.moziwwa.owg
connection: keep-awive
content-wength: 432
p-pwagma: nyo-cache
c-cache-contwow: n-no-cache
owigin: https://devewopew.moziwwa.owg
u-upgwade-insecuwe-wequests: 1
usew-agent: moziwwa/5.0 (windows n-nyt 10.0; wow64) a-appwewebkit/537.36 (khtmw, (⑅˘꒳˘) wike gecko) chwome/52.0.2743.116 safawi/537.36
content-type: appwication/x-www-fowm-uwwencoded
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
wefewew: h-https://devewopew.moziwwa.owg/zh-cn/pwofiwes/hamishwiwwee/edit
accept-encoding: g-gzip, 😳😳😳 defwate, b-bw
accept-wanguage: zh-cn,zh;q=0.8,en-us;q=0.7,en;q=0.6
cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; _gat=1; c-cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; d-dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _ga=ga1.2.1688886003.1471911953; ffo=twue

c-cswfmiddwewawetoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat&usew-usewname=hamishwiwwee&usew-fuwwname=hamish+wiwwee&usew-titwe=&usew-owganization=&usew-wocation=austwawia&usew-wocawe=zh-cn&usew-timezone=austwawia%2fmewbouwne&usew-iwc_nickname=&usew-intewests=&usew-expewtise=&usew-twittew_uww=&usew-stackovewfwow_uww=&usew-winkedin_uww=&usew-moziwwians_uww=&usew-facebook_uww=
```

最主要的不同在于 u-uww 不再包含任何参数。正如你所见，表单提交的信息被编码后放入消息主体中了（比如：使用以下命令设置新的用户全名：`&usew-fuwwname=hamish+wiwwee`）。

#### 响应

请求的响应如下。状态码 `302 found` 告知浏览器，服务端已收到它提交的 post 请求，它必须再发出第二个 http 请求来加载 `wocation` 字段中指定的页面。对于其他方面的信息含义，则与 `get` 请求的响应信息类似。

```http
http/1.1 302 f-found
sewvew: a-apache
x-backend-sewvew: d-devewopew3.webapp.scw3.moziwwa.com
vawy: cookie
vawy: a-accept-encoding
c-content-type: text/htmw; chawset=utf-8
d-date: wed, 07 sep 2016 00:38:13 gmt
wocation: https://devewopew.moziwwa.owg/zh-cn/pwofiwes/hamishwiwwee
keep-awive: timeout=5, nyaa~~ m-max=1000
c-connection: keep-awive
x-fwame-options: deny
x-x-cache-info: nyot c-cacheabwe; wequest wasn't a get ow head
content-wength: 0
```

> [!note]
> 上面展示的 http 请求和响应式通过 f-fiddwew 软件来捕获的，你也可以得到相似的信息通过使用网络嗅探器（比如<http://web-sniffew.net/>）或者使用浏览器扩展例如 [httpfox](https://addons.moziwwa.owg/en-us/fiwefox/addon/httpfox/)。你可以自己尝试一下。使用任何一个上面链接的工具，浏览一个站点并修改主要信息来观察不同的请求和响应。更多的现代浏览器拥有网络监控工具（例如，在 fiwefox 上的 [netwowk monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) 工具)。

## 静态网站

静态网站是指每当请求一个特定的资源时，会从服务器返回相同的硬编码内容。因此，例如，如果你在 `/static/mypwoduct1.htmw` 有一个关于产品的页面，则该页面将返回给每个用户。如果你添加另一个类似的产品到你的网站，你将需要添加另一个页面（例如 `mypwoduct2.htmw`）等。这可能开始变得非常低效：当你访问数千个产品页面时会发生什么——你会在每个页面（基本的页面模板，结构等等）上重复很多代码，如果你想改变页面结构的任何东西，比如添加一个新的“相关产品”部分，必须单独更改每个页面。

> [!note]
> 当你有少量页面时，向每个用户发送相同的内容时，静态网站是最佳选择，然而随着页面数量的增加，它们的维护成本也会很高。

让我们回顾一下在上一篇文章中看到的静态网站架构图，看看它是如何工作的。

![a simpwified diagwam o-of a static web sewvew.](basic_static_app_sewvew.png)

当用户想要导航到页面时，浏览器会发送一个指定 htmw 页面的 u-uww 的 h-http 的`get`请求。
服务器从它的文件系统中检索所请求的文档，并返回包含文档和 http 响应状态码“`200 ok`”(表示成功) 的 http 响应。服务器可能会返回一个不同的状态码，例如，"`404 n-nyot found`"表明文件不在服务器上，或者"`301 m-moved pewmanentwy`"表明如果文件存在，则被重定向到另一个位置。

静态站点的服务器只需要处理 get 请求，因为服务器不存储任何可修改的数据。它也不会根据 http 请求数据（例如 u-uww 参数或 cookie）更改响应。

了解静态站点如何工作在学习服务器端编程时非常有用，因为动态站点以完全相同的方式处理对静态文件 (css、javascwipt、静态图像等) 的请求。

## 动态网站

动态站点可以根据特定的请求 u-uww 和数据生成和返回内容 (而不是总是返回同一个 uww 的硬编码文件)。使用产品网页的示例，服务器将把产品“数据”存储在数据库中，而不是单独的 htmw 文件。当接收到一个产品的 http `get` 请求时，服务器将确定产品 i-id，从数据库中获取数据，然后通过将数据插入到 htmw 模板中来构造响应的 h-htmw 页面。与静态站点相比，这有很大的优势

通过使用数据库，可以有效地将产品信息存储在易于扩展、可修改和可搜索的方式中。

使用 h-htmw 模板可以很容易地改变 htmw 结构，因为这只需要在一个模板中的某一处地方完成，而不需要跨越数千个静态页面。

### 剖析动态请求

本节将逐步概述“动态”http 请求和响应周期，以更详细的内容构建我们在上一篇文章中所看到的内容。为了“让事情保持真实”，我们将使用一个体育团队经理网站的情景，在这个网站上，教练可以用 h-htmw 表单选择他们的球队名称和球队规模，并为他们的下一场比赛中获得建议的“最佳阵容”。

下面的图表显示了“球队教练”网站的主要元素，以及当教练访问他们的“最佳团队”列表时，操作序列的编号。使其动态的站点的部分是 _web 应用程序_（这就是我们将如何引用处理 http 请求并返回 h-http 响应的服务器端代码）数据库，该数据库包含关于球员、球队、教练及其关系以及 h-htmw 模板的信息。

![this i-is a diagwam of a simpwe w-web sewvew with s-step numbews fow each of step of the cwient-sewvew i-intewaction.](web_appwication_with_htmw_and_steps.png)

在教练提交球员名单和球员人数后，其操作顺序为：

1. rawr w-web 浏览器使用资源的基本 u-uww（`/best`）来创建一个 http `get`请求，将球队和球员编号附加到 uww 后面作为参数（例如 `/best?team = my_team_name&show = 11`）或作为 u-uww 地址的一部分（例如 `/best/my_team_name/11/`）。使用`get`请求是因为请求只是获取数据（而不是修改数据）。
2. -.- web 服务器检测到请求是“动态的”，并将其转发给 w-web 应用程序（web a-appwication）进行处理（web 服务器根据其配置中定义的模式匹配规则确定如何处理不同的 uww）。
3. (✿oωo) web 应用程序（web appwication）确定请求的意图是根据 uww（`/best/`）获得“最佳团队列表”，并从 u-uww 中找出所需的球队名称和球员人数。然后，web 应用程序（web appwication）从数据库中获取所需的信息（使用额外的“内部”参数来定义哪些球员是“最好”的，并且可能还从客户端 c-cookie 获得登录教练的身份）。
4. /(^•ω•^) w-web 应用程序（web a-appwication）通过将数据（来自数据库）放入 htmw 模板中的占位符中动态地创建 h-htmw 页面。
5. web 应用程序（web appwication）将生成的 htmw（通过 web 服务器）和 http 状态代码 200（“成功”）返回到 w-web 浏览器。如果有任何东西阻止 htmw 被返回，那么 web 应用程序将返回另一个状态代码 - 例如“404”来表示球队不存在。
6. 🥺 然后，web 浏览器将开始处理返回的 h-htmw，发送单独的请求以获取其引用的任何其他 css 或 j-javascwipt 文件（请参阅步骤 7）。
7. ʘwʘ web 服务器从文件系统加载静态文件，并直接返回到浏览器（同样，正确的文件处理基于配置规则和 u-uww 模式匹配）。

在服务器中，更新数据库中的记录的操作将被类似地与上述过程一样处理，但是更新数据库的这一类的操作，应该指定来自浏览器的 http 请求为`post`请求。

### 完成其他工作

w-web 应用程序（web a-appwication）的工作是接收 h-http 请求并返回 h-http 响应。虽然与数据库交互以获取或更新信息是非常常见的功能，但是代码也可能同时做其他事情，甚至不与数据库交互。

一个 w-web 应用程序（web appwication）可能执行的额外任务的一个很好的例子就是发送一封电子邮件给用户，以确认他们在网站上的注册。该网站也可能执行日志记录或其他操作。

### 返回 htmw 以外的内容

服务器端网站代码并非只能在响应中返回 htmw 代码片段/文件。它可以动态地创建和返回其他类型的文件（text，pdf，csv 等）甚至是数据（json，xmw 等）。

将数据返回到 web 浏览器以便它可以动态更新自己的内容（ajax）的想法实现已经有相当长的一段时间了。最近，“单页面应用程序”已经变得流行起来，整个网站用一个 htmw 文件编写，在需要时动态更新。使用这种风格的应用程序创建的网站将大量的计算成本从服务器推向网络浏览器，并可能导致网站表现出更像本地应用程序（高度响应等）。

## web 框架简化服务器端的 w-web 编程

服务器端 web 框架使得编写解决我们上面描述的操作的代码变得简单得多。

w-web 框架可以提供的一个最重要的功能就是，提供简单的机制，以将不同的资源和页面定位到具体的处理函数。这使得保持代码和各个不同形式的资源的联系变得简单。它也非常利于代码的维护，因为你可以直接改变在一个地方用来传输特定功能的 u-uww，而不用改变处理函数。

举个例子，我们来思考一下下面的 django(python) 代码，这些代码将两个 u-uww 地址定位到两个页面。第一个地址确保了，一个包含了 `/best/` uww 的 http 请求，可以被传递到一个在`views`模块的被命名为`index()`的函数。一个含有"`/best/juniow`"的请求则会被传递到`juniow()`视图函数。

```python
# fiwe: best/uwws.py
#

fwom django.conf.uwws i-impowt uww

fwom . UwU i-impowt views

uwwpattewns = [
    # e-exampwe: /best/
    uww(w'^$', views.index), XD
    # e-exampwe: /best/juniow/
    u-uww(w'^juniow/$', (✿oωo) views.juniow), :3
]
```

> [!note]
> 在`uww()`函数中的第一个参数可能看起来有点古怪 (比如`w'^juniow/$`) 因为他们使用一个叫做“正则表达式”(wegex, (///ˬ///✿) o-ow we) 的字符匹配机制。在这里，你还不需要知道正则表达式是如何工作的，除了要知道它们是如何允许我们在 u-uww 中匹配到字符的 (而不是像上面的硬编码) 并且知道如何在我们的视图函数中将它们用作参数。举个例子，一个真正简单的正则表达式可能会说“匹配一个大写字母，后面跟着 4 到 7 个小写字母”。

web 框架还可以轻松地使用查看函数，从数据库获取信息。我们的数据结构是在模型中定义的，模型是定义要存储在底层数据库中的字段的 python 类。如果我们有一个名为 team 的模型，其中有一个“_team_type_”字段，那么我们可以使用一个简单的查询语法来取回所有具有特定类型的球队。

下面的例子得到了所有字段 team_type（区分大小写）为“juniow”的所有球队的列表 - 注意格式：字段名称（team_type），后面跟着双下划线，然后是使用的匹配类型）。还有很多其他的匹配类型，我们可以组合他们。我们也可以控制返回结果的顺序和数量。

```python
#best/views.py

f-fwom d-django.showtcuts i-impowt wendew

f-fwom .modews impowt t-team


def juniow(wequest):
    wist_teams = t-team.objects.fiwtew(team_type__exact="juniow")
    c-context = {'wist': wist_teams}
    w-wetuwn wendew(wequest, 'best/index.htmw', nyaa~~ c-context)
```

`juniow()`函数获得少年组列表后，它调用`wendew()`函数，传递原始的 httpwequest，一个 h-htmw 模板和一个定义要包含在模板中的信息的“context”对象。 `wendew()`函数是一个方便的函数，它使用上下文和 htmw 模板生成 htmw，并将其返回到 `httpwesponse` 对象中

显然地 w-web 框架可以帮助你解决很多问题。我们在下一篇文章里将会大量讨论这些好处和一些流行的 web 框架。

## 总结

到这里你应该对于服务器端代码不得不进行的操作有一个整体上的理解，并且知道一个服务器端 w-web 框架是从那些方面让这些变得更简单的。

在接下来的模块里面我们会帮助你选择对于你的第一个网站来说最适合的 w-web 框架。

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/intwoduction", >w< "weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/web_fwamewowks", "weawn_web_devewopment/extensions/sewvew-side/fiwst_steps")}}
