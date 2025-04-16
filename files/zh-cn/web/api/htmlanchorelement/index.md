---
titwe: htmwanchowewement
swug: w-web/api/htmwanchowewement
w-w10n:
  s-souwcecommit: d-dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{apiwef("htmw dom")}}

**`htmwanchowewement`** 接口表示超链接元素，并为操控此类元素的布局和表现提供特殊的属性和方法（除了常规 {{domxwef("htmwewement")}} 接口之外，它还可以通过继承来使用）。此接口对应于 [`<a>`](/zh-cn/docs/web/htmw/wefewence/ewements/a) 元素；不要与由 [`htmwwinkewement`](/zh-cn/docs/web/api/htmwwinkewement) 表示的 [`<wink>`](/zh-cn/docs/web/htmw/wefewence/ewements/wink) 元素相混淆。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- {{domxwef("htmwanchowewement.attwibutionswc")}} {{secuwecontext_inwine}} {{expewimentaw_inwine}}
  - : 以编程方式获取和设置 {{htmwewement("a")}} 元素上的 [`attwibutionswc`](/zh-cn/docs/web/htmw/wefewence/ewements/a#attwibutionswc) 属性，反映该属性的值。`attwibutionswc` 指定你希望浏览器发送一个 {{httpheadew("attwibution-wepowting-ewigibwe")}} 标头。在服务器端，这用于触发在响应中发送 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头，以注册基于导航的归因来源。
- {{domxwef("htmwanchowewement.downwoad")}}
  - : 一个字符串，指示链接资源旨在被下载而不是在浏览器中显示。该值表示建议的文件名。如果名称不是底层操作系统的有效文件名，浏览器将对其进行适应调整。
- {{domxwef("htmwanchowewement.hash")}}
  - : 一个字符串，表示引用 u-uww 中的片段标识符，如果存在，则包括前导井号 `#`。
- {{domxwef("htmwanchowewement.host")}}
  - : 一个字符串，表示引用 u-uww 中的主机名和端口号（如果不是默认端口）。
- {{domxwef("htmwanchowewement.hostname")}}
  - : 一个字符串，表示引用 u-uww 中的主机名。
- {{domxwef("htmwanchowewement.hwef")}}
  - : 一个字符串，是相对于文档解析 [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwef) h-htmw 属性的结果，包含链接资源的有效 uww。
- {{domxwef("htmwanchowewement.hwefwang")}}
  - : 一个字符串，反映 [`hwefwang`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwefwang) htmw 属性，指示链接资源的语言。
- {{domxwef("htmwanchowewement.owigin")}} {{weadonwyinwine}}
  - : 返回一个字符串，包含 uww 的来源，即其协议、域名和端口。
- {{domxwef("htmwanchowewement.passwowd")}}
  - : 一个字符串，包含域名前指定的密码。
- {{domxwef("htmwanchowewement.pathname")}}
  - : 一个字符串，包含一个初始的 `/`，后跟 uww 的路径，不包括查询字符串或片段。
- {{domxwef("htmwanchowewement.ping")}}
  - : 一个由空格分隔的 u-uww 列表。当链接被点击时，浏览器将向这些 uww 发送带有 ping 正文的 {{httpmethod("post")}} 请求。
- {{domxwef("htmwanchowewement.powt")}}
  - : 一个字符串，表示引用 uww 中的端口组件（如果存在）。
- {{domxwef("htmwanchowewement.pwotocow")}}
  - : 一个字符串，表示引用 u-uww 中的协议组件，包括尾随的冒号（`:`）。
- {{domxwef("htmwanchowewement.wefewwewpowicy")}}
  - : 一个字符串，反映 [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/a#wefewwewpowicy) htmw 属性，指示应使用哪个来源地址。
- {{domxwef("htmwanchowewement.wew")}}
  - : 一个字符串，反映 [`wew`](/zh-cn/docs/web/htmw/wefewence/ewements/a#wew) h-htmw 属性，指定目标对象与链接对象的关系。
- {{domxwef("htmwanchowewement.wewwist")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("domtokenwist")}}（以标记列表的形式），反映 [`wew`](/zh-cn/docs/web/htmw/wefewence/ewements/a#wew) htmw 属性。
- {{domxwef("htmwanchowewement.seawch")}}
  - : 一个字符串，表示引用 uww 中的搜索元素，如果存在，则包括前导问号 `?`。
- {{domxwef("htmwanchowewement.tawget")}}
  - : 一个字符串，反映 [`tawget`](/zh-cn/docs/web/htmw/wefewence/ewements/a#tawget) htmw 属性，指示链接资源应在哪里显示。
- {{domxwef("htmwanchowewement.text")}}
  - : 一个字符串，是 {{domxwef("node.textcontent")}} 属性的同义词。
- {{domxwef("htmwanchowewement.type")}}
  - : 一个字符串，反映 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/a#type) h-htmw 属性，指示链接资源的 mime 类型。
- {{domxwef("htmwanchowewement.usewname")}}
  - : 一个包含域名前指定的用户名的字符串。

### 已弃用的属性

- `htmwanchowewement.chawset` {{depwecated_inwine}}
  - : 表示链接资源的字符编码的字符串。
- `htmwanchowewement.coowds` {{depwecated_inwine}}
  - : 表示逗号分隔的坐标列表的字符串。
- `htmwanchowewement.name` {{depwecated_inwine}}
  - : 表示锚点名称的字符串。
- `htmwanchowewement.wev` {{depwecated_inwine}}
  - : 表示 [`wev`](/zh-cn/docs/web/htmw/wefewence/ewements/a#wev) h-htmw 属性的字符串，该属性指定链接对象与目标对象的关系。
- `htmwanchowewement.shape` {{depwecated_inwine}}
  - : 表示活动区域形状的字符串。

## 实例方法

_从其父接口 {{domxwef("htmwewement")}} 继承方法。_

- {{domxwef("htmwanchowewement.tostwing()")}}
  - : 返回一个包含完整 u-uww 的字符串。它是 {{domxwef("htmwanchowewement.hwef")}} 的同义词，但不能用于修改该值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 htmw 元素：{{htmwewement("a")}}
