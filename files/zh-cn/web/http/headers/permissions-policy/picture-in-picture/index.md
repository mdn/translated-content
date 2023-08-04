---
title: "Permissions-Policy: picture-in-picture"
slug: Web/HTTP/Headers/Permissions-Policy/picture-in-picture
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP 标头 {{HTTPHeader("Permissions-Policy")}} 的 `picture-in-picture` 指令表示是否允许当前的文档通过相应的 API 以画中画模式播放视频。

## 语法

```
Permissions-Policy: picture-in-picture <allowlist>;
```

- \<allowlist>
  - : 允许使用该功能的来源列表。参见 [`Permissions-Policy`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#语法)。

## 默认策略

截至 2019 年 6 月，[规范草案](https://wicg.github.io/picture-in-picture/#feature-policy) 和 [Google Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=806249#c17) 将允许列表默认设置为 `*`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [Permission Policy](/zh-CN/docs/Web/HTTP/Feature_Policy)
- [Using Permission Policy](/zh-CN/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
