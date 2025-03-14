---
title: 中间人攻击（MitM）
slug: Glossary/MitM
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

中间人攻击（**Man-in-the-middle attack**，MitM）会在消息发出方和接收方之间拦截双方通讯。举例来说，Wi-Fi 路由器就可以被破解用来进行中间人攻击。

用日常生活中的写信来类比的话：你给朋友写了一封信，邮递员可以把每一份你寄出去的信都拆开看，甚至把信的内容改掉，然后重新封起来，再寄出去给你的朋友。朋友收到信之后给你回信，邮递员又可以拆开看，看完随便改，改完封好再送到你手上。你全程都不知道自己寄出去的信和收到的信都经过邮递员这个“中间人”转手和处理——换句话说，对于你和你朋友来讲，邮递员这个“中间人”角色是不可见的。

对于实际生活中的信件沟通和线上的信息交流来说，中间人攻击都是很难防范的，这里有一些小建议：

- 不要忽视浏览器弹出的证书警告！你可能访问的是钓鱼网站或者假冒的服务器；
- 公共网络环境下，没有 HTTPS 加密的敏感网站不可信；
- 在登录账号前检查地址栏中是否为 HTTPS，确保使用了加密；

## 参见

- OWASP 文章：[中间人攻击](https://www.owasp.org/index.php/Man-in-the-middle_attack)
- PortSwigger：[最新的中间人攻击新闻](https://portswigger.net/daily-swig/mitm)
- 维基百科：[中间人攻击](https://zh.wikipedia.org/zh-cn/中间人攻击)
