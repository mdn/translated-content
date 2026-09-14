---
title: "Blocked: All third-party storage access requests"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedForeign
l10n:
  sourceCommit: 04a955e882cfcf4aaa1b19b68b9813a6afcfe540
---

由于请求来自第三方（不同源）且内容拦截已启用，访问 Cookie 或存储的请求已被阻止。

## 消息

Firefox：

```plain
CookieBlockedForeign=由于我们正拦截所有第三方对存储空间的访问请求，且内容拦截已开启，已拦截“X”对 Cookie 或存储空间的访问请求。
```

## 可采取的措施

你可以前往*设置 > 隐私与安全 > 增强型跟踪保护*，并使用*管理例外*…按钮添加例外，从而修改或删除权限。

如果被阻止的资源不需要身份验证，你可以通过向相关元素添加 `crossorigin="anonymous"` 属性来修复警告消息。

## 参见

- [support.mozilla.org](https://support.mozilla.org/) 上的 [Firefox 桌面版的增强跟踪保护](<https://support.mozilla.org/zh-CN/kb/Firefox 桌面版的增强跟踪保护>)
- [`crossorigin` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
