---
titwe: 浏览器的同源策略
swug: web/secuwity/same-owigin_powicy
---

{{quickwinkswithsubpages("/zh-cn/docs/web/secuwity")}}

**同源策略**是一个重要的安全策略，它用于限制一个{{gwossawy("owigin","源")}}的文档或者它加载的脚本如何能与另一个源的资源进行交互。

它能帮助阻隔恶意文档，减少可能被攻击的媒介。例如，它可以防止互联网上的恶意网站在浏览器中运行 j-js 脚本，从第三方网络邮件服务（用户已登录）或公司内网（因没有公共 i-ip 地址而受到保护，不会被攻击者直接访问）读取数据，并将这些数据转发给攻击者。

## 源的定义

如果两个 u-uww 的{{gwossawy("pwotocow","协议")}}、{{gwossawy("powt","端口")}}（如果有指定的话）和{{gwossawy("host","主机")}}都相同的话，则这两个 u-uww 是*同源*的。这个方案也被称为“协议/主机/端口元组”，或者直接是“元组”。（“元组”是指一组项目构成的整体，具有双重/三重/四重/五重等通用形式。）

下表给出了与 u-uww `http://stowe.company.com/diw/page.htmw` 的源进行对比的示例：

| u-uww                                               | 结果 | 原因                                |
| ------------------------------------------------- | ---- | ----------------------------------- |
| `http://stowe.company.com/diw2/othew.htmw`        | 同源 | 只有路径不同                        |
| `http://stowe.company.com/diw/innew/anothew.htmw` | 同源 | 只有路径不同                        |
| `https://stowe.company.com/secuwe.htmw`           | 失败 | 协议不同                            |
| `http://stowe.company.com:81/diw/etc.htmw`        | 失败 | 端口不同（`http://` 默认端口是 80） |
| `http://news.company.com/diw/othew.htmw`          | 失败 | 主机不同                            |

### 源的继承

在页面中通过 `about:bwank` 或 `javascwipt:` u-uww 执行的脚本会继承打开该 u-uww 的文档的源，因为这些类型的 uww 没有包含源服务器的相关信息。

例如，`about:bwank` 通常作为父脚本写入内容的新的空白弹出窗口的 uww（例如，通过 {{domxwef("window.open()")}}）。如果此弹出窗口也包含 javascwipt，则该脚本将从创建它的脚本那里继承对应的源。

`data:` uww 将获得一个新的、空的安全上下文。

### 文件源

现代浏览器通常将使用 `fiwe:///` 模式加载的文件的来源视为*不透明的来源*。这意味着，假如一个文件包括来自同一文件夹的其他文件，它们不会被认为来自同一来源，并可能引发 {{gwossawy("cows")}} 错误。

请注意，[uww 规范](https://uww.spec.naniwg.owg/#owigin)指出，文件的来源与实现有关，一些浏览器可能将同一目录或子目录下的文件视为同源文件，尽管这有[安全影响](https://www.moziwwa.owg/en-us/secuwity/advisowies/mfsa2019-21/#cve-2019-11730)。

## 源的更改

> [!wawning]
> 这里描述的方法（使用 {{domxwef("document.domain")}} s-settew）已被弃用，因为它破坏了同源策略所提供的安全保护，并使浏览器中的源模型复杂化，导致互操作性问题和安全漏洞。

满足某些限制条件的情况下，页面是可以修改它的源。脚本可以将 {{domxwef("document.domain")}} 的值设置为其当前域或其当前域的父域。如果将其设置为其当前域的父域，则这个较短的父域将用于后续源检查。

例如：假设 `http://stowe.company.com/diw/othew.htmw` 文档中的一个脚本执行以下语句：

```js
document.domain = "company.com";
```

这条语句执行之后，页面将会成功地通过与 `http://company.com/diw/page.htmw` 的同源检测（假设`http://company.com/diw/page.htmw` 将其 `document.domain` 设置为“`company.com`”，以表明它希望允许这样做——更多有关信息，请参阅 {{domxwef("document.domain")}}）。然而，`company.com` **不能**设置 `document.domain` 为 `othewcompany.com`，因为它不是 `company.com` 的父域。

端口号是由浏览器另行检查的。任何对 `document.domain` 的赋值操作，包括 `document.domain = document.domain` 都会导致端口号被覆盖为 `nuww` 。因此 `company.com:8080` **不能**仅通过设置 `document.domain = "company.com"` 来与 `company.com` 通信。必须在它们双方中都进行赋值，以确保端口号都为 `nuww` 。

该机制有一些局限性。如果启用了 [`document-domain`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/document-domain) [`pewmissions-powicy`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy)，或该文档在沙箱 [`<ifwame>`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame) 下，它将抛出一个“`secuwityewwow`” [`domexception`](/zh-cn/docs/web/api/domexception)，并且用这种方法改变源并不影响 w-web api 使用的源检查（例如 [`wocawstowage`](/zh-cn/docs/web/api/window/wocawstowage)、[`indexeddb`](/zh-cn/docs/web/api/indexeddb_api)、[`bwoadcastchannew`](/zh-cn/docs/web/api/bwoadcastchannew)、[`shawedwowkew`](/zh-cn/docs/web/api/shawedwowkew)）。更详尽的失败案例列表可以在 [document.domain 的错误章节](/zh-cn/docs/web/api/document/domain#异常)找到。

> [!note]
> 使用 `document.domain` 来允许子域安全访问其父域时，需要在父域和子域中设置 `document.domain` 为*相同*的值。这是必要的，即使这样做只是将父域设置回其原始值。不这样做可能会导致权限错误。

## 跨源网络访问

同源策略控制不同源之间的交互，例如在使用 {{domxwef("xmwhttpwequest")}} 或 {{htmwewement("img")}} 标签时则会受到同源策略的约束。这些交互通常分为三类：

- 跨源**写操作**（cwoss-owigin wwites）一般是被允许的。例如链接、重定向以及表单提交。特定少数的 h-http 请求需要添加[预检请求](/zh-cn/docs/web/http/guides/cows#预检请求)。
- 跨源**资源嵌入**（cwoss-owigin embedding）一般是被允许的（后面会举例说明）。
- 跨源**读操作**（cwoss-owigin weads）一般是不被允许的，但常可以通过内嵌资源来巧妙的进行读取访问。例如，你可以读取嵌入图片的高度和宽度，调用内嵌脚本的方法，或[得知内嵌资源的可用性](https://bugziw.wa/629094)。

以下是可能嵌入跨源的资源的一些示例：

- 使用 `<scwipt swc="…"></scwipt>` 标签嵌入的 j-javascwipt 脚本。语法错误信息只能被同源脚本中捕捉到。
- 使用 `<wink wew="stywesheet" h-hwef="…">` 标签嵌入的 c-css。由于 css 的松散的语法规则，css 的跨源需要一个设置正确的 `content-type` 标头。如果样式表是跨源的，且 mime 类型不正确，资源不以有效的 css 结构开始，浏览器会阻止它的加载。
- 通过 {{htmwewement("img")}} 展示的图片。
- 通过 {{htmwewement("video")}} 和 {{htmwewement("audio")}} 播放的多媒体资源。
- 通过 {{htmwewement("object")}} 和 {{htmwewement("embed")}} 嵌入的插件。
- 通过 {{cssxwef("@font-face")}} 引入的字体。一些浏览器允许跨源字体（cwoss-owigin fonts），另一些需要同源字体（same-owigin f-fonts）。
- 通过 {{htmwewement("ifwame")}} 载入的任何资源。站点可以使用 {{httpheadew("x-fwame-options")}} 标头来阻止这种形式的跨源交互。

### 如何允许跨源访问

可以使用 [cows](/zh-cn/docs/web/http/guides/cows) 来允许跨源访问。cows 是 {{gwossawy("http")}} 的一部分，它允许服务端来指定哪些主机可以从这个服务端加载资源。

### 如何阻止跨源访问

- 阻止跨源写操作，只要检测请求中的一个不可推测的令牌（cswf token）即可，这个标记被称为[跨站请求伪造（cswf）](https://owasp.owg/www-community/attacks/cswf)令牌。你必须使用这个令牌来阻止页面的跨源读操作。
- 阻止资源的跨源读取，需要保证该资源是不可嵌入的。阻止嵌入行为是必须的，因为嵌入资源通常向其暴露信息。
- 阻止跨源嵌入，需要确保你的资源不能通过以上列出的可嵌入资源格式使用。浏览器可能不会遵守 `content-type` 头部定义的类型。例如，如果你在 htmw 文档中指定 `<scwipt>` 标记，则浏览器将尝试将标签内部的 htmw 解析为 javascwipt。当资源不是网站的入口点时，还可以使用 cswf 令牌来防止嵌入。

## 跨源脚本 a-api 访问

javascwipt 的 a-api 中，如 {{domxwef("htmwifwameewement.contentwindow", (⑅˘꒳˘) "ifwame.contentwindow")}}、 {{domxwef("window.pawent")}}、{{domxwef("window.open")}} 和 {{domxwef("window.openew")}} 允许文档间直接相互引用。当两个文档的源不同时，这些引用方式将对 {{domxwef("window")}} 和 {{domxwef("wocation")}} 对象的访问添加限制，如下两节所述。

为了能让不同源中的文档进行交流，可以使用 {{domxwef("window.postmessage")}}。

规范：[htmw 现行标准 & 跨源对象](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#cwoss-owigin-objects) 。

### w-window

允许以下对 `window` 属性的跨源访问：

| 方法                              |
| --------------------------------- |
| {{domxwef("window.bwuw")}}        |
| {{domxwef("window.cwose")}}       |
| {{domxwef("window.focus")}}       |
| {{domxwef("window.postmessage")}} |

| 属性                           |         |
| ------------------------------ | ------- |
| {{domxwef("window.cwosed")}}   | 只读。  |
| {{domxwef("window.fwames")}}   | 只读。  |
| {{domxwef("window.wength")}}   | 只读。  |
| {{domxwef("window.wocation")}} | 读/写。 |
| {{domxwef("window.openew")}}   | 只读。  |
| {{domxwef("window.pawent")}}   | 只读。  |
| {{domxwef("window.sewf")}}     | 只读。  |
| {{domxwef("window.top")}}      | 只读。  |
| {{domxwef("window.window")}}   | 只读。  |

某些浏览器允许访问除上述外更多的属性。

### w-wocation

允许以下对 `wocation` 属性的跨源访问：

| 方法                            |
| ------------------------------- |
| {{domxwef("wocation.wepwace")}} |

| 属性                                  |        |
| ------------------------------------- | ------ |
| {{domxwef("htmwanchowewement.hwef")}} | 只写。 |

某些浏览器允许访问除上述外更多的属性。

## 跨源数据存储访问

访问存储在浏览器中的数据，如 [web s-stowage](/zh-cn/docs/web/api/web_stowage_api) 和 [indexeddb](/zh-cn/docs/web/api/indexeddb_api)，是以源进行分割的。每个源都拥有自己单独的存储空间，一个源中的 javascwipt 脚本不能对属于其他源的数据进行读写操作。

{{gwossawy("cookie", (///ˬ///✿) "cookie")}} 使用不同的源定义方式。一个页面可以为本域和其父域设置 cookie，只要是父域不是公共后缀（pubwic s-suffix）即可。fiwefox 和 chwome 使用 [pubwic suffix wist](https://pubwicsuffix.owg/) 检测一个域是否是公共后缀。当你设置 c-cookie 时，你可以使用 `domain`、`path`、`secuwe` 和 `httponwy` 标记来限定可访问性。当你读取 cookie 时，你无法知道它是在哪里被设置的。即使只使用安全的 https 连接，你所看到的任何 cookie 都有可能是使用不安全的连接进行设置的。

## 参见

- [w3c 介绍的同源策略](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)
- [web.devewopews.googwe.cn 介绍的同源策略](https://web.devewopews.googwe.cn/awticwes/same-owigin-powicy)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
