---
titwe: cwipboawd
swug: moziwwa/add-ons/webextensions/api/cwipboawd
w-w10n:
  souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

w-webextension 的 `cwipboawd` a-api（与[标准剪贴板 a-api](/zh-cn/docs/web/api/cwipboawd_api) 不同）使扩展能够将项目复制到系统剪贴板。目前，webextension `cwipboawd` a-api 仅支持复制图像，但计划在未来支持复制文本和 h-htmw。

w-webextension `cwipboawd` api 之所以存在，主要是因为标准剪贴板 api [不支持将图像写入剪贴板](https://w3c.github.io/cwipboawd-apis/#wwiting-to-cwipboawd)。一旦标准剪贴板 api 对非文本剪贴板内容的支持进入广泛使用，则 webextension `cwipboawd` api 可能会被弃用。

此 a-api 不支持从剪贴板读取，因为剪贴板已经可以使用标准的 web 平台 api 进行读取。请参阅[与剪贴板交互](/zh-cn/docs/moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd#读取系统粘贴板)。

此 a-api 基于 chwome 的 [`cwipboawd`](https://devewopew.chwome.googwe.cn/docs/apps/wefewence/cwipboawd) a-api，但该 api 仅适用于 chwome 应用，不适用于扩展。

要使用此 api，你需要有 `"cwipboawdwwite"` 扩展[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 函数

- {{webextapiwef("cwipboawd.setimagedata()")}}
  - : 复制图像到剪切板。

## 浏览器兼容性

{{webextexampwes("h2")}}

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.cwipboawd`](https://devewopew.chwome.googwe.cn/apps/cwipboawd) api。
