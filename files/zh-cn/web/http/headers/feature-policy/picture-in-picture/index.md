---
title: 'Feature-Policy: picture-in-picture'
slug: Web/HTTP/Headers/Feature-Policy/picture-in-picture
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Picture in picture
  - Reference
  - Experimental
translation_of: Web/HTTP/Headers/Feature-Policy/picture-in-picture
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP 的标头字段 {{HTTPHeader("Feature-Policy")}} 设置 `picture-in-picture` 指令表示是否允许当前的文档通过相应的 API 以画中画模式视频。

## 语法

```
Feature-Policy: picture-in-picture <allowlist>;
```

- \<allowlist>
  - : 允许使用该功能的源列表。参见 [`Feature-Policy`](/zh-CN/docs/Web/HTTP/Headers/Feature-Policy#syntax)。

## 默认策略

截至 2019 年 6 月，[规范草案](https://wicg.github.io/picture-in-picture/#feature-policy) 和 [Google Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=806249#c17) 将默认允许列表设置为 `*`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Feature-Policy")}} 标头
- [Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
