---
title: Fetch 指令
slug: Glossary/Fetch_directive
---

**{{Glossary("CSP")}} fetch 指令**用在{{HTTPHeader("Content-Security-Policy")}} 头部中，可以用来控制某些具体类型的资源可以从哪些来源被加载。比如说， {{CSP("script-src")}} 使得开发者可以允许可信任来源的脚本在页面上执行， {{CSP("font-src")}} 可以控制字体的来源。

所有的指令的值都会回落到 {{CSP("default-src")}}。也就是说，如果某个 fetch 指令在 CSP 头部中未定义，那么用户代理就会寻找`default-src` 指令的值来替代。

这些 CSP 指令属于 fetch 指令：

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("default-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("script-src")}}
- {{CSP("style-src")}}
- {{CSP("worker-src")}}

## 了解更多

- {{HTTPHeader("Content-Security-Policy")}}
- 其他类型的 CSP 指令：

  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
