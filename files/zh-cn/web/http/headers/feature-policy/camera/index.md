---
title: 'Feature-Policy: camera'
slug: Web/HTTP/Headers/Feature-Policy/camera
translation_of: Web/HTTP/Headers/Feature-Policy/camera
---
{{HTTPSidebar}}

HTTP{{HTTPHeader("Feature-Policy")}} 头当中的`camera`指令控制着当前的文档是否允许使用视频输入设备。当这些策略被开启时，由{{domxref("MediaDevices.getUserMedia()")}} 返回的{{jsxref("Promise")}}将会 reject 一个 {{domxref("NotAllowedError")}}错误。

## 语法结构

```plain
Feature-Policy: camera <allowlist>;
```

- \<allowlist>
  - : {{page("Web/HTTP/Feature_Policy/Using_Feature_Policy", "allowlist")}}

## 默认策略

默认值为 `'self'。`

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
