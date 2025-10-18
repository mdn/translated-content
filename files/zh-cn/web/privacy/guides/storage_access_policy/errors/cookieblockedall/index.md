---
title: Blocked：所有存储访问请求
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedAll
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

由于浏览器阻止了所有存储访问，访问 Cookie 或存储的请求被阻止。

## 消息

Firefox：

```plain
CookieBlockedAll=Request to access cookies or storage on "X" was blocked because we are blocking all storage access requests.
```

## 可采取的措施

可通过以下方式更改或移除权限：

- 前往*首选项 > 内容拦截*
- 在*自定义*内容拦截部分，为 _Cookie_ 项选择除*所有 Cookie*以外的值

如果被阻止的资源不需要身份验证，你可以通过为元素添加 `crossorigin="anonymous"` 属性来修复警告消息。

## 参见

- [support.mozilla.org](https://support.mozilla.org/) 上的[内容拦截](https://support.mozilla.org/zh-CN/kb/content-blocking)
- [`crossorigin` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
