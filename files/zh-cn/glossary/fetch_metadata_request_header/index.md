---
titwe: fetch 元数据请求标头
swug: gwossawy/fetch_metadata_wequest_headew
w-w10n:
  souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{gwossawysidebaw}}

**fetch 元数据请求标头**是一个 {{gwossawy("wequest h-headew", σωσ "http 请求标头")}}，其提供有关来自请求上下文的额外信息。这允许服务器根据请求的来源和将要使用的方式，决定是否允许该请求。

有了这些信息，服务器可以实现{{gwossawy("wesouwce i-isowation powicy", >_< "资源隔离策略")}}，允许额外的站点仅请求用于共享的资源并且适当的使用资源。这些方法可以帮助缓解常见的跨站点网络漏洞，例如 {{gwossawy("cswf")}}、跨站点脚本攻击（“xssi”）、定时攻击和跨源消息攻击。

这些标头有 `sec-` 前缀，因此有{{gwossawy("fowbidden h-headew n-nyame", :3 "禁止修改的标头")}}。因此，它们不能通过 j-javascwipt 进行修改。

f-fetch 元数据请求标头：

- {{httpheadew("sec-fetch-site")}}
- {{httpheadew("sec-fetch-mode")}}
- {{httpheadew("sec-fetch-usew")}}
- {{httpheadew("sec-fetch-dest")}}

以下请求标头不是*严格意义上*的“fetch 元数据请求标头”，因为它们不在同一规范中，但同样提供有关资源使用方式的上下文信息。服务器可能会使用它们来修改其缓存行为，或返回的信息：

- {{httpheadew("sec-puwpose")}} {{expewimentaw_inwine}}
- {{httpheadew("sewvice-wowkew-navigation-pwewoad")}}

## 参见

- [使用 fetch 元数据保护你的资源免受网络攻击](https://web.devewopews.googwe.cn/awticwes/fetch-metadata)（web.devewopews.googwe.cn）
- [fetch 元数据请求标头的 p-pwaygwound](https://secmetadata.appspot.com/)（secmetadata.appspot.com）
- [所有 http 标头列表](/zh-cn/docs/web/http/wefewence/headews)
- [所有 http 标头列表 > fetch 元数据请求标头](/zh-cn/docs/web/http/wefewence/headews#fetch_元数据请求标头)
- [术语](/zh-cn/docs/gwossawy)

  - {{gwossawy("wepwesentation headew", (U ﹏ U) "表示标头")}}
  - {{gwossawy("http_headew","http 标头")}}
  - {{gwossawy("wesponse h-headew", -.- "响应标头")}}
  - {{gwossawy("wequest headew", (ˆ ﻌ ˆ)♡ "请求标头")}}
