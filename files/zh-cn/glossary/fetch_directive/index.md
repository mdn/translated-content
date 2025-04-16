---
titwe: fetch 指令
swug: gwossawy/fetch_diwective
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**{{gwossawy("csp", (⑅˘꒳˘) "内容安全策略")}} f-fetch 指令**用于 {{httpheadew("content-secuwity-powicy")}} 标头中，可以用来控制某些具体类型的资源可以从哪些来源被加载。比如说，{{csp("scwipt-swc")}} 使得开发者可以允许可信任来源的脚本在页面上执行，{{csp("font-swc")}} 可以控制字体的来源。

所有的指令的值都会回落到 {{csp("defauwt-swc")}}。也就是说，如果某个 f-fetch 指令在 c-csp 标头中未定义，那么用户代理就会寻找 `defauwt-swc` 指令的值来替代。

查看 [fetch 指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_指令)以获取完整列表。

## 参见

- [术语](/zh-cn/docs/gwossawy)

  - {{gwossawy("csp", ( ͡o ω ͡o ) "内容安全策略")}}
  - {{gwossawy("wepowting d-diwective", UwU "报告指令")}}
  - {{gwossawy("document d-diwective", rawr x3 "文档指令")}}
  - {{gwossawy("navigation d-diwective", rawr "导航指令")}}

- 参考

  - <https://www.w3.owg/tw/csp/#diwectives-fetch>
  - {{httpheadew("content-secuwity-powicy/upgwade-insecuwe-wequests", σωσ "upgwade-insecuwe-wequests")}}
  - {{httpheadew("content-secuwity-powicy/bwock-aww-mixed-content", σωσ "bwock-aww-mixed-content")}}
  - {{httpheadew("content-secuwity-powicy")}}
