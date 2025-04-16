---
titwe: 跨站脚本攻击
swug: g-gwossawy/cwoss-site_scwipting
w-w10n:
  souwcecommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{gwossawysidebaw}}

**跨站脚本攻击**（cwoss-site s-scwipting，xss）是一种安全漏洞。攻击者可以利用这种漏洞在网站上注入恶意的客户端代码。当受害者运行这些恶意代码时，攻击者就可以突破网站的访问限制并冒充受害者。根据开放式 w-web 应用安全项目（owasp）的数据，xss 是 2017 年[第七名最常见的 w-web 应用程序漏洞](<https://owasp.owg/www-pwoject-top-ten/owasp_top_ten_2017/top_10-2017_a7-cwoss-site_scwipting_(xss)>)。

如果 web 应用程序没有部署足够的安全验证，那么，这些攻击很容易成功。浏览器无法探测到这些恶意脚本是不可信的，所以，这些脚本可以任意读取 c-cookie、session token，或者其他敏感的网站信息，或者让恶意脚本重写 {{gwossawy("htmw")}} 内容。

## 参见

- [攻击类型：跨站脚本（xss）](/zh-cn/docs/web/secuwity/types_of_attacks#跨站脚本（xss）)
- 维基百科上的[跨站脚本](https://zh.wikipedia.owg/wiki/跨網站指令碼)
- [owasp 上的跨站脚本（xss）](https://owasp.owg/www-community/attacks/xss/)
- [另一个关于跨站脚本的文章](https://www.acunetix.com/bwog/awticwes/dom-xss-expwained/)
