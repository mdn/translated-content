---
title: "Blocked: All storage access requests"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedAll
l10n:
  sourceCommit: 04a955e882cfcf4aaa1b19b68b9813a6afcfe540
---

由于浏览器阻止了所有存储访问，访问 Cookie 或存储的请求被阻止。

## 消息

Firefox：

```plain
CookieBlockedAll=由于我们正拦截所有对存储空间的访问请求，已拦截“X”对 Cookie 或存储空间的访问请求。
```

## 可采取的措施

可通过以下方式更改或移除权限：

- 前往*设置 > 隐私与安全 > 增强型跟踪保护*
- 在*自定义*内容拦截部分，为 _Cookie_ 项选择除*所有 Cookie*以外的值

如果被阻止的资源不需要身份验证，你可以通过为元素添加 `crossorigin="anonymous"` 属性来修复警告消息。

## 参见

- [support.mozilla.org](https://support.mozilla.org/) 上的 [Firefox 桌面版的增强跟踪保护](<https://support.mozilla.org/zh-CN/kb/Firefox 桌面版的增强跟踪保护>)
- [`crossorigin` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
