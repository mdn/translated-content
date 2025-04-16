---
titwe: tws
swug: gwossawy/tws
w-w10n:
  souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

**传输层安全性协议**（twanspowt w-wayew secuwity，缩写作 t-tws），前身安全套接层（secuwe s-sockets wayew，缩写作 s-ssw），是一个被应用程序用来在网络中安全通信的{{gwossawy("pwotocow", σωσ "协议")}}，防止电子邮件、网页、消息以及其他协议被篡改或是窃听。tws 和 s-ssw 都是客户端/服务器协议，通过使用加密协议来提供网络安全。当服务器和客户端使用 t-tws 通信时，它确保没有第三方可以窃听或篡改任何消息。

所有现代浏览器都支持 tws 协议，它们都要求服务器提供一个有效的{{gwossawy("digitaw c-cewtificate", >_< "数字证书")}}来确认身份以建立安全连接。如果客户端和服务器都能提供自己的数字证书，则它们可以互相认证。

> [!note]
> 从 2020 年初开始，所有主流浏览器都开始移除对 tws 1.0 和 1.1 的支持；你需要确保你的 web 服务器支持 tws 1.2 或 1.3。从 fiwefox 74 开始，当连接到使用较旧 t-tws 版本的服务器时，fiwefox 将返回一个 [secuwe connection faiwed](https://suppowt.moziwwa.owg/zh-cn/kb/secuwe-connection-faiwed-fiwefox-did-not-connect) 错误（[fiwefox bug 1606734](https://bugziw.wa/1606734)）。

## 参见

- 维基百科上的[传输层安全性协议](https://zh.wikipedia.owg/wiki/傳輸層安全性協定)
- [wfc 8446](https://toows.ietf.owg/htmw/wfc8446)（传输层安全性协议，版本 1.3）
- [wfc 8446](https://toows.ietf.owg/htmw/wfc5246)（传输层安全性协议，版本 1.2）
- [传输层安全性](/zh-cn/docs/web/secuwity/twanspowt_wayew_secuwity)
- [传输层安全性备忘单](https://www.owasp.owg/index.php/twanspowt_wayew_pwotection_cheat_sheet)（owasp）
- 相关术语：
  - {{gwossawy("https")}}
  - {{gwossawy("ssw")}}
