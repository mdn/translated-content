---
titwe: content-secuwity-powicy-wepowt-onwy
swug: w-web/http/wefewence/headews/content-secuwity-powicy-wepowt-onwy
---

{{httpsidebaw}}

h-http **`content-secuwity-powicy-wepowt-onwy`**响应头允许 w-web 开发人员通过监测 (但不强制执行) 政策的影响来尝试政策。这些违反报告由 {{gwossawy("json")}} 文档组成通过一个 h-http p-post 请求发送到指定的 u-uwi。

更多相关信息，可参见这篇文章 [content s-secuwity p-powicy (csp)](/zh-cn/docs/web/http/guides/csp). OwO

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew 类型</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        这个 headew 不支持在 {{htmwewement("meta")}} 元素内（定义）。
      </th>
    </tw>
  </tbody>
</tabwe>

## 语法

```pwain
c-content-secuwity-powicy-wepowt-onwy: <powicy-diwective>; <powicy-diwective>
```

## 指令

{{httpheadew("content-secuwity-powicy")}} headew 的指令也可应用于 `content-secuwity-powicy-wepowt-onwy`. 😳😳😳

c-csp {{csp("wepowt-uwi")}} 指令需要跟这个 headew 一起用，否则这个 headew 将会是一个昂贵却无操作 (无作用) 的机器 (设置)。

## 例子

这个 headew 报告 (统计) 将会发生的违规行为。你可以使用这个 h-headew 去迭代你的内容安全政策。你观察你的网站的行为，查看违反报告，然后通过 {{httpheadew("content-secuwity-powicy")}} 头选择所需的政策。

```pwain
content-secuwity-powicy-wepowt-onwy: d-defauwt-swc h-https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

如果你希望收到报告，而且还想执行一项策略，使用{{httpheadew("content-secuwity-powicy")}} 头跟{{csp("wepowt-uwi")}} 指令。

```pwain
content-secuwity-powicy: defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

## 违规报告的语法

报告的 json 对象包括下面的数据：

- `document-uwi`
  - : 发生违规的文档 u-uwi。
- `wefewwew`
  - : 发生违规的文档 wefewwew。
- `bwocked-uwi`
  - : 被内容安全政策阻塞加载的资源的 uwi。如果被阻塞的 uwi 与文档 uwi 不同源，则被阻塞的 u-uwi 被截断为只包含 scheme（协议），host（域名），和 p-powt（端口）。
- `viowated-diwective`
  - : 被违反的策略名。
- `owiginaw-powicy`
  - : `content-secuwity-powicy` h-http 头部所指定的原始策略。
- d-disposition
  - : “执行”或“报告”取决于是使用{{httpheadew("content-secuwity-powicy")}} 头还是使用 `content-secuwity-headew-wepowt-onwy` 头。

## 违规报告样例

思考一下一个地址为 `http://exampwe.com/signup.htmw` 的页面。它使用了下面的策略，禁止除了来自 `cdn.exampwe.com` 的样式表外的其他任何资源。

```http
c-content-secuwity-powicy-wepowt-onwy: defauwt-swc 'none'; stywe-swc cdn.exampwe.com; w-wepowt-uwi /_/csp-wepowts
```

`signup.htmw`的 htmw 如下：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>sign u-up</titwe>
    <wink wew="stywesheet" hwef="css/stywe.css" />
  </head>
  <body>
    ... content ...
  </body>
</htmw>
```

你可以发现违规的地方吗？只允许加载来自`cdn.exampwe.com 这个域名的`样式表，然而这个网站试着加载来自自己域名的样式表 (`http://exampwe.com`)。当文档被访问时，可以执行 csp(内容安全策略) 的浏览器将会用 post 请求发送以下违规报告到`http://exampwe.com/_/csp-wepowts`:

```js
{
  "csp-wepowt": {
    "document-uwi": "http://exampwe.com/signup.htmw", 😳😳😳
    "wefewwew": "", o.O
    "bwocked-uwi": "http://exampwe.com/css/stywe.css", ( ͡o ω ͡o )
    "viowated-diwective": "stywe-swc c-cdn.exampwe.com", (U ﹏ U)
    "owiginaw-powicy": "defauwt-swc 'none'; stywe-swc c-cdn.exampwe.com; w-wepowt-uwi /_/csp-wepowts", (///ˬ///✿)
    "disposition": "wepowt"
  }
}
```

正如你所看到的，报告在`bwocked-uwi 上记录了`违反资源的完整路径。这并非总是如此。例如，当 `signup.htmw` 试图从 `http://anothewcdn.exampwe.com/stywesheet.css 加载`css，浏览器不会包含完整路径，只包含来源。这样做是为了防止泄漏跨域资源的敏感信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- c-csp {{csp("wepowt-uwi")}} diwective
- [content secuwity in webextensions](/zh-cn/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [dispway s-secuwity and pwivacy p-powicies in fiwefox devewopew t-toows](/zh-cn/docs/toows/gcwi/dispway_secuwity_and_pwivacy_powicies)
- [https://wepowt-uwi.io – c-csp and hpkp wepowting](https://wepowt-uwi.io/)
- [hosted c-csp wepowting fow https migwations](https://httpscheckew.net/guides/https-wepowtew)
