---
title: "Blocked: Storage access requests from trackers"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedTracker
l10n:
  sourceCommit: ab458cefeb4e268c9298e1c6b8119c80397dc9ef
---

由于浏览器识别到该请求来自跟踪器，且内容阻止功能已启用，因此访问 Cookie 或存储的请求被阻止。

## 消息

Firefox：

```plain
鉴于已开启内容拦截功能，而这个请求来自跟踪器，已拦截“X”对 Cookie 或存储空间的访问请求。
```

## 可采取的措施

可通过以下方式更改或移除权限：

- 前往*设置 > 隐私与安全 > 增强型跟踪保护*，然后
  - 使用*管理例外*…按钮添加例外
  - 选择*自定义*内容阻止选项，并取消勾选*跟踪性内容*复选框

如果被阻止的资源不需要身份验证，你可以通过向相关元素添加 `crossorigin="anonymous"` 属性来修复警告消息。

## 参见

- [support.mozilla.org](https://support.mozilla.org/) 上的 [Firefox 桌面版的增强型跟踪保护](<https://support.mozilla.org/zh-CN/kb/Firefox 桌面版的增强跟踪保护>)
- [`crossorigin` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
