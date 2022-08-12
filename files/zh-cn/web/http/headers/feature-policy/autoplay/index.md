---
title: 'Feature-Policy: autoplay'
slug: Web/HTTP/Headers/Feature-Policy/autoplay
translation_of: Web/HTTP/Headers/Feature-Policy/autoplay
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `autoplay` directive controls whether the current document is allowed to autoplay media requested through the {{domxref("HTMLMediaElement")}} interface. When this policy is enabled and there were no user gestures, the {{domxref("Promise")}} returned by {{domxref("HTMLMediaElement.play()")}} will reject with a `DOMException`. The {{htmlattrxref("autoplay", "audio")}} attribute on {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements will be ignored.

For more details on autoplay and autoplay blocking, see the article [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide).

## 语法

```plain
Feature-Policy: autoplay <可选>;
```

- \<allowlist>
  - : {{page("Web/HTTP/Feature_Policy/Using_Feature_Policy", "allowlist")}} 默认值是`'self'`.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
