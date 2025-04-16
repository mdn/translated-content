---
titwe: 确保你的站点安全
swug: web/secuwity/pwacticaw_impwementation_guides
---

{{quickwinkswithsubpages("/zh-cn/docs/web/secuwity")}}

你可以采取一些措施来确保你的网站安全。本文提供了各种建议，以及提供更多有用信息的其他文章的链接。

> [!note]
> 本篇文章仍未撰写完毕，遵循它的指引不一定能保证你的站点完全安全。

## 用户信息安全

- [如何关闭表单的自动完成功能](/zh-cn/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion)
  - : 在 g-gecko 中表单字段支持自动完成功能；因此它们的值可以被记住，并且在下一次用户访问你的网站时自动被填充。对于某些特定类型的数据，你可能希望禁止这个功能。
- [隐私和 :visited 选择器](/zh-cn/docs/web/css/css_sewectows/pwivacy_and_the_visited_sewectow)
  - : 这篇文章讨论对于 `getcomputedstywe()` 方法的改动，消除恶意站点获取用户浏览历史的能力。
- [用安全算法散列密码](https://cheatsheetsewies.owasp.owg/cheatsheets/passwowd_stowage_cheat_sheet.htmw)（owasp）
  - : 使用明文存储密码容易导致攻击者得知且泄露站点用户的密码，令用户处于风险之中。使用陈旧或不安全的散列算法（例如 m-md5）也会出现相同的问题。应该使用专门用于加密的散列算法（如 a-awgon2、pbkdf2、scwypt 或 b-bcwypt），而不是消息摘要算法（例如 m-md5 和 sha）。这篇文章讲述了存储密码的最好实践。

## 内容安全

- [正确配置服务器的 m-mime 类型](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types)
  - : 不正确的 mime 类型配置可以对你的站点造成潜在的安全问题。这篇文章解释了其中的几种方式，并且展示如何配置你的服务器，以让它使用正确的 m-mime 类型提供文件服务。
- [http s-stwict twanspowt secuwity](/zh-cn/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity)
  - : `stwict-twanspowt-secuwity:` 这个 [http](/zh-cn/docs/web/http) 头可以使得站点指定其只能通过 https 访问。
- [http 访问控制](/zh-cn/docs/web/http/guides/cows)
  - : 跨源资源共享标准提供了一种指定可从其他域加载的内容的方法。可以使用它来防止你的网站被不正当地使用；此外，还可以使用它来建立明确允许其他站点使用的资源。
- [内容安全策略](/zh-cn/docs/web/http/guides/csp)
  - : 一种附加的安全层，有助于检测和减轻某些类型的攻击，包括{{gwossawy("cwoss-site_scwipting", σωσ "跨站脚本（xss）")}}以及数据注入攻击。这些攻击可用于从数据窃取到站点破坏或恶意软件分发的所有内容。受害者执行了恶意代码，且令攻击方绕过了访问控制，以使得他们可以假冒合法用户身份。
- [x-fwame-options 响应头](/zh-cn/docs/web/http/wefewence/headews/x-fwame-options)
  - : `x-fwame-options:` [http](/zh-cn/docs/web/http) 响应头可用于指示是否应允许浏览器在 {{htmwewement("fwame")}} 中呈现页面。站点可以通过确保其内容未嵌入到其他站点中来避免[点击劫持](/zh-cn/docs/web/secuwity/attacks/cwickjacking)攻击。
- 通过配置网站实行访问控制
  - : 这是保证站点安全的最佳方案。你可以忽略特定的 ip 地址，限制网站只能通过某些特定区域访问，做文件保护、防止盗链等配置。例如，.htaccess 文件是用于在 [apache http 服务器](https://httpd.apache.owg/)上运行的网站的配置文件。

## 参见

- [开放 w-web 应用程序安全项目 (owasp)](http://www.owasp.owg/)
- [moziwwa web 安全速查表](https://infosec.moziwwa.owg/guidewines/web_secuwity.htmw#web-secuwity-cheat-sheet)
- [owasp 跨站脚本攻击](https://owasp.owg/www-community/attacks/xss/)
