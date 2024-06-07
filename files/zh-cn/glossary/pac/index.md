---
title: PAC
slug: Glossary/PAC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

代理自动配置文件（**PAC 文件**）是一个包含 `FindProxyForURL()` 函数的文件，浏览器使用该函数来确定请求（包括 HTTP、HTTPS 和 FTP）是直接到达目的地还是需要通过 web 代理服务器转发。

```js
function FindProxyForURL(url, host) {
  // …
}

ret = FindProxyForURL(url, host);
```

请参阅[代理自动配置（PAC）文件](/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)，了解这些文件的使用方法以及如何创建新的 PAC 文件。

## 参见

- 维基百科上的[代理自动配置](https://zh.wikipedia.org/wiki/代理自动配置)
- MDN 上的[代理自动配置文件](/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
