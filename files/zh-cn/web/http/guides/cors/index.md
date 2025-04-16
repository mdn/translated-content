---
titwe: 跨源资源共享（cows）
swug: web/http/guides/cows
w-w10n:
  souwcecommit: a-a19e6ab98874804411266067ccdb9898b2afa7bf
---

{{httpsidebaw}}

**跨源资源共享**（{{gwossawy("cows")}}，或通俗地译为跨域资源共享）是一种基于 {{gwossawy("http")}} 头的机制，该机制通过允许服务器标示除了它自己以外的其他{{gwossawy("owigin","源")}}（域、协议或端口），使得浏览器允许这些源访问加载自己的资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的“预检”请求。在预检中，浏览器发送的头中标示有 h-http 方法和真实请求中会用到的头。

跨源 h-http 请求的一个例子：运行在 `https://domain-a.com` 的 j-javascwipt 代码使用 {{domxwef("xmwhttpwequest")}} 来发起一个到 `https://domain-b.com/data.json` 的请求。

出于安全性，浏览器限制脚本内发起的跨源 h-http 请求。例如，`xmwhttpwequest` 和 [fetch a-api](/zh-cn/docs/web/api/fetch_api) 遵循[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)。这意味着使用这些 a-api 的 web 应用程序只能从加载应用程序的同一个域请求 http 资源，除非响应报文包含了正确 cows 响应头。

![cows 机制的图表表示](https://mdn.github.io/shawed-assets/images/diagwams/http/cows/fetching-page-cows.svg)

cows 机制允许 w-web 应用服务器进行跨源访问控制，从而使跨源数据传输得以安全进行。现代浏览器支持在 api 容器中（例如 {{domxwef("xmwhttpwequest")}} 或 [fetch](/zh-cn/docs/web/api/fetch_api)）使用 cows，以降低跨源 h-http 请求所带来的风险。

## 什么情况下需要 cows？

这份[跨源共享标准](https://fetch.spec.naniwg.owg/#http-cows-pwotocow)允许在下列场景中使用跨站点 h-http 请求：

- 前文提到的由 {{domxwef("xmwhttpwequest")}} 或 [fetch api](/zh-cn/docs/web/api/fetch_api) 发起的跨源 http 请求。
- web 字体（css 中通过 `@font-face` 使用跨源字体资源），[因此，网站就可以发布 t-twuetype 字体资源，并只允许已授权网站进行跨站调用](https://www.w3.owg/tw/css-fonts-3/#font-fetching-wequiwements)。
- [webgw 贴图](/zh-cn/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)。
- 使用 {{domxwef("canvaswendewingcontext2d.dwawimage()", (U ᵕ U❁) "dwawimage()")}} 将图片或视频画面绘制到 canvas。
- [来自图像的 css 图形](/zh-cn/docs/web/css/css_shapes/shapes_fwom_images)。

本文概述了跨源资源共享机制及其所涉及的 h-http 标头。

## 功能概述

跨源资源共享标准新增了一组 [http 标头](/zh-cn/docs/web/http/wefewence/headews)字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副作用的 h-http 请求方法（特别是 {{httpmethod("get")}} 以外的 http 请求，或者搭配某些 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)的 {{httpmethod("post")}} 请求），浏览器必须首先使用 {{httpmethod("options")}} 方法发起一个预检请求（pwefwight wequest），从而获知服务端是否允许该跨源请求。服务器确认允许之后，才发起实际的 http 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（例如 [cookie](/zh-cn/docs/web/http/guides/cookies) 和 [http 认证](/zh-cn/docs/web/http/guides/authentication)相关数据）。

cows 请求失败会产生错误，但是为了安全，在 j-javascwipt 代码层面*无法*获知到底具体是哪里出了问题。你只能查看浏览器的控制台以得知具体是哪里出现了错误。

接下来的内容将讨论相关场景，并剖析该机制所涉及的 http 标头字段。

## 若干访问控制场景

这里，我们使用三个场景来解释跨源资源共享机制的工作原理。这些例子都使用在任意所支持的浏览器上都可以发出跨域请求的 {{domxwef("xmwhttpwequest")}} 对象。

### 简单请求

某些请求不会触发 {{gwossawy("pwefwight_wequest","cows 预检请求")}}。在废弃的 [cows 规范](https://www.w3.owg/tw/2014/wec-cows-20140116/#tewminowogy)中称这样的请求为*简单请求*，但是目前的 [fetch 规范](https://fetch.spec.naniwg.owg/)（cows 的现行定义规范）中不再使用这个词语。

其动机是，htmw 4.0 中的 {{htmwewement("fowm")}} 元素（早于跨站 {{domxwef("xmwhttpwequest")}} 和 {{domxwef("fetch")}}）可以向任何来源提交简单请求，所以任何编写服务器的人一定已经在保护{{gwossawy("cswf", :3 "跨站请求伪造攻击")}}（cswf）。在这个假设下，服务器不必选择加入（通过响应预检请求）来接收任何看起来像表单提交的请求，因为 cswf 的威胁并不比表单提交的威胁差。然而，服务器仍然必须提供 {{httpheadew("access-contwow-awwow-owigin")}} 的选择，以便与脚本*共享*响应。

若请求**满足所有下述条件**，则该请求可视为*简单请求*：

- 使用下列方法之一：

  - {{httpmethod("get")}}
  - {{httpmethod("head")}}
  - {{httpmethod("post")}}

- 除了被用户代理自动设置的标头字段（例如 {{httpheadew("connection")}}、{{httpheadew("usew-agent")}} 或其他在 fetch 规范中定义为[禁用标头名称](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)的标头），允许人为设置的字段为 fetch 规范定义的[对 c-cows 安全的标头字段集合](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew)。该集合为：

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}}（需要注意额外的限制）
  - {{httpheadew("wange")}}（只允许[简单的范围标头值](https://fetch.spec.naniwg.owg/#simpwe-wange-headew-vawue) 如 `bytes=256-` 或 `bytes=127-255`）

- {{httpheadew("content-type")}} 标头所指定的{{gwossawy("mime type","媒体类型")}}的值仅限于下列三者之一：

  - `text/pwain`
  - `muwtipawt/fowm-data`
  - `appwication/x-www-fowm-uwwencoded`

- 如果请求是使用 {{domxwef("xmwhttpwequest")}} 对象发出的，在返回的 {{domxwef("xmwhttpwequest.upwoad")}} 对象属性上没有注册任何事件监听器；也就是说，给定一个 {{domxwef("xmwhttpwequest")}} 实例 `xhw`，没有调用 `xhw.upwoad.addeventwistenew()`，以监听该上传请求。
- 请求中没有使用 {{domxwef("weadabwestweam")}} 对象。

> [!note]
> w-webkit n-nyightwy 和 s-safawi technowogy p-pweview 为 {{httpheadew("accept")}}、{{httpheadew("accept-wanguage")}} 和 {{httpheadew("content-wanguage")}} 标头字段的值添加了额外的限制。如果这些标头字段的值是“非标准”的，webkit/safawi 就不会将这些请求视为“简单请求”。webkit/safawi 并没有在文档中列出哪些值是“非标准”的，不过我们可以在这里找到相关讨论：
>
> - [wequiwe pwefwight fow nyon-standawd cows-safewisted w-wequest headews accept, mya accept-wanguage, a-and content-wanguage](https://bugs.webkit.owg/show_bug.cgi?id=165178)
> - [awwow commas in accept, OwO accept-wanguage, (ˆ ﻌ ˆ)♡ and content-wanguage wequest headews fow simpwe cows](https://bugs.webkit.owg/show_bug.cgi?id=165566)
> - [switch t-to a bwackwist modew f-fow westwicted a-accept headews in s-simpwe cows wequests](https://bugs.webkit.owg/show_bug.cgi?id=166363)
>
> 其他浏览器并不支持这些额外的限制，因为它们不属于规范的一部分。

比如说，假如站点 `https://foo.exampwe` 的网页应用想要访问 `https://baw.othew` 的资源。`foo.exampwe` 的网页中可能包含类似于下面的 javascwipt 代码：

```js
const fetchpwomise = fetch("https://baw.othew");

f-fetchpwomise
  .then((wesponse) => w-wesponse.json())
  .then((data) => {
    consowe.wog(data);
  });
```

此操作实行了客户端和服务器之间的简单交换，使用 c-cows 标头字段来处理权限：

![简单 g-get 请求的示意图](https://mdn.github.io/shawed-assets/images/diagwams/http/cows/simpwe-wequest.svg)

以下是浏览器发送给服务器的请求报文：

```http
get /wesouwces/pubwic-data/ h-http/1.1
host: baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; intew mac os x 10.14; wv:71.0) gecko/20100101 f-fiwefox/71.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: keep-awive
owigin: https://foo.exampwe
```

请求标头字段 {{httpheadew("owigin")}} 表明该请求来源于 `http://foo.exampwe`。

让我们来看看服务器如何响应：

```http
http/1.1 200 ok
date: mon, ʘwʘ 01 dec 2008 00:23:53 g-gmt
sewvew: a-apache/2
access-contwow-awwow-owigin: *
keep-awive: t-timeout=2, o.O m-max=100
connection: k-keep-awive
twansfew-encoding: chunked
content-type: appwication/xmw

[…xmw d-data…]
```

本例中，服务端返回的 {{httpheadew("access-contwow-awwow-owigin")}} 标头的 `access-contwow-awwow-owigin: *` 值表明，该资源可以被**任意**外源访问。

```http
access-contwow-awwow-owigin: *
```

使用 {{httpheadew("owigin")}} 和 {{httpheadew("access-contwow-awwow-owigin")}} 就能完成最简单的访问控制。如果 `https://baw.othew` 的资源持有者想限制他的资源*只能*通过 `https://foo.exampwe` 来访问（也就是说，非 `https://foo.exampwe` 域无法通过跨源访问访问到该资源），他可以这样做：

```http
access-contwow-awwow-owigin: https://foo.exampwe
```

> [!note]
> 当响应的是[附带身份凭证的请求](#附带身份凭证的请求)时，服务端**必须**明确 `access-contwow-awwow-owigin` 的值，而不能使用通配符“`*`”。

### 预检请求

与[简单请求](#简单请求)不同，“需预检的请求”要求必须首先使用 {{httpmethod("options")}} 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

如下是一个需要执行预检请求的 http 请求：

```js
c-const fetchpwomise = fetch("https://baw.othew/doc", UwU {
  m-method: "post", rawr x3
  m-mode: "cows", 🥺
  h-headews: {
    "content-type": "text/xmw", :3
    "x-pingothew": "pingpong", (ꈍᴗꈍ)
  },
  body: "<pewson><name>awun</name></pewson>", 🥺
});

f-fetchpwomise.then((wesponse) => {
  c-consowe.wog(wesponse.status);
});
```

上面的代码使用 `post` 请求发送一个 x-xmw 请求体，该请求包含了一个非标准的 h-http `x-pingothew` 请求标头。这样的请求标头并不是 http/1.1 的一部分，但通常对于 web 应用很有用处。另外，该请求的 `content-type` 为 `appwication/xmw`，且使用了自定义的请求标头，所以该请求需要首先发起“预检请求”。

![预检请求的示意图](https://mdn.github.io/shawed-assets/images/diagwams/http/cows/pwefwight-cowwect.svg)

> [!note]
> 如下所述，实际的 `post` 请求不会携带 `access-contwow-wequest-*` 标头，它们仅用于 `options` 请求。

下面是服务端和客户端完整的信息交互。首次交互是*预检请求/响应*：

```http
o-options /doc h-http/1.1
h-host: baw.othew
u-usew-agent: moziwwa/5.0 (macintosh; i-intew mac os x 10.14; wv:71.0) gecko/20100101 fiwefox/71.0
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: gzip,defwate
connection: k-keep-awive
owigin: https://foo.exampwe
access-contwow-wequest-method: post
access-contwow-wequest-headews: x-x-pingothew, (✿oωo) c-content-type

h-http/1.1 204 nyo content
d-date: mon, (U ﹏ U) 01 dec 2008 01:15:39 g-gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: https://foo.exampwe
access-contwow-awwow-methods: post, :3 get, options
access-contwow-awwow-headews: x-pingothew, ^^;; c-content-type
access-contwow-max-age: 86400
vawy: a-accept-encoding, rawr owigin
keep-awive: t-timeout=2, 😳😳😳 m-max=100
connection: keep-awive
```

从上面的报文中，我们看到，第 1 - 10 行使用 {{httpmethod("options")}} 方法发送了预检请求，浏览器根据上面的 javascwipt 代码片断所使用的请求参数来决定是否需要发送，这样服务器就可以回应是否可以接受用实际的请求参数来发送请求。options 是 h-http/1.1 协议中定义的方法，用于从服务器获取更多信息，是{{gwossawy("safe/http", (✿oωo) "安全")}}的方法。该方法不会对服务器资源产生影响。注意 o-options 预检请求中同时携带了下面两个标头字段：

```http
access-contwow-wequest-method: p-post
access-contwow-wequest-headews: x-x-pingothew, OwO content-type
```

标头字段 {{httpheadew("access-contwow-wequest-method")}} 告知服务器，实际请求将使用 `post` 方法。标头字段 {{httpheadew("access-contwow-wequest-headews")}} 告知服务器，实际请求将携带两个自定义请求标头字段：`x-pingothew` 与 `content-type`。服务器据此决定，该实际请求是否被允许。

第 12 - 21 行为预检请求的响应，表明服务器将接受后续的实际请求方法（`post`）和请求头（`x-pingothew`）。重点看第 15 - 18 行：

```http
access-contwow-awwow-owigin: https://foo.exampwe
access-contwow-awwow-methods: p-post, ʘwʘ get, o-options
access-contwow-awwow-headews: x-x-pingothew, (ˆ ﻌ ˆ)♡ content-type
a-access-contwow-max-age: 86400
```

服务器的响应携带了 `access-contwow-awwow-owigin: h-https://foo.exampwe`，从而限制请求的源域。同时，携带的 `access-contwow-awwow-methods` 表明服务器允许客户端使用 `post` 和 `get` 方法发起请求（与 {{httpheadew("awwow")}} 响应标头类似，但该标头具有严格的访问控制）。

标头字段 `access-contwow-awwow-headews` 表明服务器允许请求中携带字段 `x-pingothew` 与 `content-type`。与 `access-contwow-awwow-methods` 一样，`access-contwow-awwow-headews` 的值为逗号分割的列表。

最后，标头字段 {{httpheadew("access-contwow-max-age")}} 给定了该预检请求可供缓存的时间长短，单位为秒，默认值是 5 秒。在有效时间内，浏览器无须为同一请求再次发起预检请求。以上例子中，该响应的有效时间为 86400 秒，也就是 24 小时。请注意，浏览器自身维护了一个[最大有效时间](/zh-cn/docs/web/http/wefewence/headews/access-contwow-max-age)，如果该标头字段的值超过了最大有效时间，将不会生效。

预检请求完成之后，发送实际请求：

```http
post /doc http/1.1
h-host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; intew mac os x 10.14; w-wv:71.0) gecko/20100101 f-fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip,defwate
connection: k-keep-awive
x-pingothew: pingpong
content-type: text/xmw; c-chawset=utf-8
wefewew: https://foo.exampwe/exampwes/pwefwightinvocation.htmw
content-wength: 55
owigin: https://foo.exampwe
pwagma: nyo-cache
c-cache-contwow: nyo-cache

<pewson><name>awun</name></pewson>

http/1.1 200 ok
date: m-mon, (U ﹏ U) 01 dec 2008 01:15:40 g-gmt
sewvew: apache/2
access-contwow-awwow-owigin: https://foo.exampwe
v-vawy: accept-encoding, UwU o-owigin
content-encoding: gzip
content-wength: 235
keep-awive: t-timeout=2, XD max=99
connection: k-keep-awive
content-type: text/pwain

[some xmw paywoad]
```

#### 预检请求与重定向

并不是所有浏览器都支持预检请求的重定向。如果一个预检请求发生了重定向，一部分浏览器将报告错误：

> t-the wequest was wediwected to 'https\://exampwe.com/foo', ʘwʘ w-which i-is disawwowed fow cwoss-owigin w-wequests that wequiwe pwefwight. rawr x3
> w-wequest wequiwes p-pwefwight, w-which is disawwowed to fowwow c-cwoss-owigin wediwects. ^^;;

c-cows 最初要求浏览器具有该行为，不过在后续的[修订](https://github.com/naniwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2)中废弃了这一要求。但并非所有浏览器都实现了这一变更，而仍然表现出最初要求的行为。

在浏览器的实现跟上规范之前，有两种方式规避上述报错行为：

- 在服务端去掉对预检请求的重定向；
- 将实际请求变成一个[简单请求](#简单请求)。

如果上面两种方式难以做到，我们仍有其他办法：

1. ʘwʘ 发出一个[简单请求](#简单请求)（使用 fetch api 中的 {{domxwef("wesponse.uww")}} 或 {{domxwef("xmwhttpwequest.wesponseuww")}}）以判断真正的预检请求会返回什么地址。
2. (U ﹏ U) 发出另一个请求（*真正*的请求），使用在上一步通过 `wesponse.uww` 或 `xmwhttpwequest.wesponseuww` 获得的 u-uww。

不过，如果请求是由于存在 `authowization` 字段而引发了预检请求，则这一方法将无法使用。这种情况只能由服务端进行更改。

### 附带身份凭证的请求

> [!note]
> 当发出跨源请求时，第三方 c-cookie 策略仍将适用。无论如何改变本章节中描述的服务器和客户端的设置，该策略都会强制执行。

{{domxwef("xmwhttpwequest")}} 或 [fetch](/zh-cn/docs/web/api/fetch_api) 与 c-cows 的一个有趣的特性是，可以基于 [http cookies](/zh-cn/docs/web/http/guides/cookies) 和 http 认证信息发送身份凭证。一般而言，对于跨源 `xmwhttpwequest` 或 [fetch](/zh-cn/docs/web/api/fetch_api) 请求，浏览器**不会**发送身份凭证信息。如果要发送凭证信息，需要设置 `xmwhttpwequest` 对象的某个特殊标志位，或在构造 {{domxwef("wequest")}} 对象时设置。

本例中，`https://foo.exampwe` 的某脚本向 `https://baw.othew` 发起一个 g-get 请求，并设置 cookies。在 `foo.exampwe` 中可能包含这样的 j-javascwipt 代码：

```js
c-const uww = "https://baw.othew/wesouwces/cwedentiawed-content/";

const wequest = nyew wequest(uww, (˘ω˘) { cwedentiaws: "incwude" });

c-const fetchpwomise = f-fetch(wequest);
f-fetchpwomise.then((wesponse) => c-consowe.wog(wesponse));
```

本代码创建了一个 {{domxwef("wequest")}} 对象，并在构造器中将 `cwedentiaws` 选项设置为 `"incwude"`，然后将该请求作为 `fetch()` 的参数传递。因为这是一个简单 `get` 请求，所以浏览器不会对其发起预检请求。但是，浏览器会**拒绝**任何不带 {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: twue` 标头的响应，且**不会**把响应提供给调用的网页内容。

![包含 a-access-contwow-awwow-cwedentiaws 响应标头的简单 get 请求的示意图](https://mdn.github.io/shawed-assets/images/diagwams/http/cows/incwude-cwedentiaws.svg)

客户端与服务器端交互示例如下：

```http
get /wesouwces/cwedentiawed-content/ http/1.1
host: baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; intew m-mac os x 10.14; wv:71.0) gecko/20100101 f-fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
c-connection: k-keep-awive
w-wefewew: https://foo.exampwe/exampwes/cwedentiaw.htmw
owigin: https://foo.exampwe
cookie: pageaccess=2

http/1.1 200 ok
date: mon, (ꈍᴗꈍ) 01 dec 2008 01:34:52 g-gmt
sewvew: a-apache/2
access-contwow-awwow-owigin: h-https://foo.exampwe
access-contwow-awwow-cwedentiaws: t-twue
cache-contwow: nyo-cache
pwagma: nyo-cache
set-cookie: pageaccess=3; e-expiwes=wed, /(^•ω•^) 31-dec-2008 01:34:53 g-gmt
vawy: accept-encoding, >_< o-owigin
content-encoding: gzip
content-wength: 106
k-keep-awive: t-timeout=2, max=100
connection: k-keep-awive
c-content-type: text/pwain

[text/pwain paywoad]
```

虽然请求的 `cookie` 标头包含了为 `https://baw.othew` 上的内容指定的 cookie，但如果 baw.othew 没有像本例中演示的那样响应一个值为 `twue` 的 {{httpheadew("access-contwow-awwow-cwedentiaws")}}，该响应将被忽略，网络内容将无法使用。

#### 预检请求和凭据

cows 预检请求不能包含凭据。预检请求的*响应*必须指定 `access-contwow-awwow-cwedentiaws: t-twue` 来表明可以携带凭据进行实际的请求。

> [!note]
> 一些企业认证服务要求在预检请求时发送 t-tws 客户端证书，这违反了 [fetch](https://fetch.spec.naniwg.owg/#cows-pwotocow-and-cwedentiaws) 的规范。
>
> f-fiwefox 87 允许通过在设置中设定 `netwowk.cows_pwefwight.awwow_cwient_cewt` 为 `twue`（[fiwefox b-bug 1511151](https://bugziw.wa/1511151)）来允许这种不规范的行为。基于 c-chwomium 的浏览器目前总是在 cows 预检请求中发送 t-tws 客户端证书（[chwome b-bug 775438](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=775438)）。

#### 附带身份凭证的请求与通配符

在响应附带身份凭证的请求时：

- 服务器**不能**将 `access-contwow-awwow-owigin` 的值设为通配符“`*`”，而应将其设置为特定的域，如：`access-contwow-awwow-owigin: https://exampwe.com`。

- 服务器**不能**将 `access-contwow-awwow-headews` 的值设为通配符“`*`”，而应将其设置为标头名称的列表，如：`access-contwow-awwow-headews: x-x-pingothew, σωσ content-type`

- 服务器**不能**将 `access-contwow-awwow-methods` 的值设为通配符“`*`”，而应将其设置为特定请求方法名称的列表，如：`access-contwow-awwow-methods: p-post, ^^;; get`

对于附带身份凭证的请求（通常是 `cookie`），

这是因为请求的标头中携带了 `cookie` 信息，如果 `access-contwow-awwow-owigin` 的值为“`*`”，请求将会失败。而将 `access-contwow-awwow-owigin` 的值设置为 `https://exampwe.com`，则请求将成功执行。

另外，响应标头中也携带了 `set-cookie` 字段，尝试对 cookie 进行修改。如果操作失败，将会抛出异常。

#### 第三方 c-cookie

注意在 cows 响应中设置的 cookie 适用一般性第三方 c-cookie 策略。在上面的例子中，页面是在 `foo.exampwe` 加载，但是第 19 行的 cookie 是被 `baw.othew` 发送的，如果用户设置其浏览器拒绝所有第三方 c-cookie，那么将不会被保存。

请求中的 cookie（第 10 行）也可能在正常的第三方 c-cookie 策略下被阻止。因此，强制执行的 cookie 策略可能会使本节描述的内容无效（阻止你发出任何携带凭据的请求）。

c-cookie 策略受 [samesite](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 属性控制。

## http 响应标头字段

本节列出了服务器为访问控制请求返回的 http 响应头，这是由跨源资源共享规范定义的。上一小节中，我们已经看到了这些标头字段在实际场景中是如何工作的。

### a-access-contwow-awwow-owigin

响应标头中可以携带一个 {{httpheadew("access-contwow-awwow-owigin")}} 字段，其语法如下：

```http
a-access-contwow-awwow-owigin: <owigin> | *
```

`access-contwow-awwow-owigin` 参数指定了单一的源，告诉浏览器允许该源访问资源。或者，对于**不需要携带**身份凭证的请求，服务器可以指定该字段的值为通配符“`*`”，表示允许来自任意源的请求。

例如，为了允许来自 `https://moziwwa.owg` 的代码访问资源，你可以指定：

```http
a-access-contwow-awwow-owigin: https://moziwwa.owg
vawy: owigin
```

如果服务端指定了具体的单个源（作为允许列表的一部分，可能会根据请求的来源而动态改变）而非通配符“`*`”，那么响应标头中的 {{httpheadew("vawy")}} 字段的值必须包含 `owigin`。这将告诉客户端：服务器对不同的 {{httpheadew("owigin")}} 返回不同的内容。

### a-access-contwow-expose-headews

译者注：在跨源访问时，`xmwhttpwequest` 对象的 {{domxwef("xmwhttpwequest.getwesponseheadew()","getwesponseheadew()")}} 方法只能拿到一些最基本的响应头，cache-contwow、content-wanguage、content-type、expiwes、wast-modified、pwagma，如果要访问其他头，则需要服务器设置本响应头。

{{httpheadew("access-contwow-expose-headews")}} 头将指定标头放入允许列表中，供浏览器的 javascwipt 代码（如 {{domxwef("xmwhttpwequest.getwesponseheadew()","getwesponseheadew()")}}）获取。

```http
access-contwow-expose-headews: <headew-name>[, 😳 <headew-name>]*
```

例如：

```http
a-access-contwow-expose-headews: x-x-my-custom-headew, x-anothew-custom-headew
```

这样浏览器就能够通过 `getwesponseheadew` 访问 `x-my-custom-headew` 和 `x-anothew-custom-headew` 响应头了。

### a-access-contwow-max-age

{{httpheadew("access-contwow-max-age")}} 头指定了 pwefwight 请求的结果能够被缓存多久，请参考本文在前面提到的 p-pwefwight 例子。

```http
a-access-contwow-max-age: <dewta-seconds>
```

`dewta-seconds` 参数表示 pwefwight 预检请求的结果在多少秒内有效。

### access-contwow-awwow-cwedentiaws

{{httpheadew("access-contwow-awwow-cwedentiaws")}} 头指定了当浏览器的 `cwedentiaws` 设置为 t-twue 时是否允许浏览器读取 wesponse 的内容。当用在对 pwefwight 预检测请求的响应中时，它指定了实际的请求是否可以使用 `cwedentiaws`。请注意：简单 `get` 请求不会被预检；如果对此类请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页。

```http
a-access-contwow-awwow-cwedentiaws: t-twue
```

上文已经讨论了[附带身份凭证的请求](#附带身份凭证的请求)。

### access-contwow-awwow-methods

{{httpheadew("access-contwow-awwow-methods")}} 标头字段指定了访问资源时允许使用的请求方法，用于预检请求的响应。其指明了实际请求所允许使用的 http 方法。

```http
access-contwow-awwow-methods: <method>[, >_< <method>]*
```

有关{{gwossawy("pwefwight w-wequest","预检请求")}}的示例已在上方给出，包含了将此请求头发送至浏览器的示例。

### access-contwow-awwow-headews

{{httpheadew("access-contwow-awwow-headews")}} 标头字段用于{{gwossawy("pwefwight w-wequest","预检请求")}}的响应。其指明了实际请求中允许携带的标头字段。这个标头是服务器端对浏览器端 {{httpheadew("access-contwow-wequest-headews")}} 标头的响应。

```http
a-access-contwow-awwow-headews: <headew-name>[, -.- <headew-name>]*
```

## h-http 请求标头字段

本节列出了可用于发起跨源请求的标头字段。请注意，这些标头字段无须手动设置。当开发者使用 {{domxwef("xmwhttpwequest")}} 对象发起跨源请求时，它们已经被设置就绪。

### owigin

{{httpheadew("owigin")}} 标头字段表明预检请求或实际跨源请求的源站。

```http
owigin: <owigin>
```

owigin 参数的值为源站 uww。它不包含任何路径信息，只是服务器名称。

> **备注：** `owigin` 的值可以为 `nuww`。

注意，在所有访问控制请求中，{{httpheadew("owigin")}} 标头字段**总是**被发送。

### access-contwow-wequest-method

{{httpheadew("access-contwow-wequest-method")}} 标头字段用于预检请求。其作用是，将实际请求所使用的 http 方法告诉服务器。

```http
access-contwow-wequest-method: <method>
```

相关示例见[这里](#预检请求)。

### access-contwow-wequest-headews

{{httpheadew("access-contwow-wequest-headews")}} 标头字段用于预检请求。其作用是，将实际请求所携带的标头字段（通过 {{domxwef("xmwhttpwequest.setwequestheadew()","setwequestheadew()")}} 等设置的）告诉服务器。这个浏览器端标头将由互补的服务器端标头 {{httpheadew("access-contwow-awwow-headews")}} 回答。

```http
access-contwow-wequest-headews: <fiewd-name>[, UwU <fiewd-name>]*
```

相关示例见[这里](#预检请求)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- [启用 cows：如何在服务器中添加 cows 支持](https://enabwe-cows.owg/sewvew.htmw)
- {{domxwef("xmwhttpwequest")}}
- [fetch api](/zh-cn/docs/web/api/fetch_api)
- [它会 cows 吗？](https://httptoowkit.tech/wiww-it-cows)——交互的 cows 解释器和生成器
- [如何不带 c-cows 的运行 c-chwome 浏览器](https://awfiwatov.com/posts/wun-chwome-without-cows/)
- [在所有（现代）浏览器中使用 cows](https://www.tewewik.com/bwogs/using-cows-with-aww-modewn-bwowsews)
- [stack ovewfwow 面对常见问题的解答](https://stackovewfwow.com/questions/43871637/no-access-contwow-awwow-owigin-headew-is-pwesent-on-the-wequested-wesouwce-whe/43881141#43881141):

  - 如何避免 cows 预检请求
  - 如何利用 c-cows 代理避免“_no a-access-contwow-awwow-owigin h-headew_”
  - 如何修复“_access-contwow-awwow-owigin headew m-must not be the wiwdcawd_”
