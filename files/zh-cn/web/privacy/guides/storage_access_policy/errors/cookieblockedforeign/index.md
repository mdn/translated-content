---
title: Blocked：所有第三方存储访问请求
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedForeign
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

由于请求来自第三方（不同源）且内容拦截已启用，访问 Cookie 或存储的请求已被阻止。

## 消息

Firefox：

```plain
CookieBlockedForeign=Request to access cookies or storage on "X" was blocked because we are blocking all third-party storage access requests and content blocking is enabled.
```

## 可采取的措施

可通过以下方式更改或移除权限：

- 前往*首选项 > 内容拦截*，然后
- 使用*管理例外*…按钮添加例外
- 选择*自定义*内容拦截并取消勾选 _Cookie_ 复选框

如果被阻止的资源不需要身份验证，你可以通过向相关元素添加 `crossorigin="anonymous"` 属性来修复警告消息。

## 参见

- [support.mozilla.org](https://support.mozilla.org/) 上的[内容拦截](https://support.mozilla.org/zh-CN/kb/content-blocking)
- [`crossorigin` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
