---
title: Firefox 65 for developers
slug: Mozilla/Firefox/Releases/65
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 65 中将影响开发者的更改信息。Firefox 65 是当前的 [Nightly 版本](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), 将于 2019 年 1 月 29 日发布。

## 为网页开发者带来的改变

### 开发者工具

#### 移除

### HTML

事件现在可以在禁用状态下的 HTML 元素上进行分发，如设置了 `disabled` 属性的 {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}}，和 {{htmlelement("textarea")}} ([Firefox bug 329509](https://bugzil.la/329509))。

#### 移除

### CSS

- 已去除 {{cssxref("image-rendering")}} 属性的 `crisp-edges` 值的前缀 ([Firefox bug 1496617](https://bugzil.la/1496617)) 。
- {{cssxref("scrollbar-color")}} 的 `auto` 值现在现在被解析为 `auto`，而不是两种颜色 ([Firefox bug 1501418](https://bugzil.la/1501418))。

#### 移除

- `layout.css.shape-outside.enabled` 设置已被移除；{{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}，和 {{cssxref("shape-image-threshold")}} 不再支持关闭 ([Firefox bug 1504387](https://bugzil.la/1504387))。
- Firefox 用户{{cssxref("user-select")}}的几个仅限的属性已被删除：`-moz-all`, `tri-state`, `element`, `elements`, 和 `toggle`. Firefox 仅限 `-moz-text` 属性仍在内部使用，故只是在 Web 内容中禁用 参见 [Firefox bug 1492958](https://bugzil.la/1492958).

### SVG

_无变化。_

#### 移除

### JavaScript

#### 移除

### APIs

_无变化。_

#### 新的 APIs

#### DOM

- {{domxref("Performance.toJSON()")}} has been exposed to [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) ([Firefox bug 1504958](https://bugzil.la/1504958)).
- {{domxref("XMLHttpRequest")}} requests will now throw a `NetworkError` if the requested content type is a `Blob`, and the request method is not `GET` ([Firefox bug 1502599](https://bugzil.la/1502599)).

#### DOM events

- Going forward, only one {{domxref("Window.open()")}} call is allowed per event ([Firefox bug 675574](https://bugzil.la/675574)).

#### Service workers

- The {{domxref("Response.redirect()")}} method now correctly throws a `TypeError` if a non-valid URL is specified as the first parameter ([Firefox bug 1503276](https://bugzil.la/1503276)).
- The {{domxref("ServiceWorkerContainer.register()")}} and {{domxref("WorkerGlobalScope.importScripts()")}} (when used by a service worker) methods will now accept any files with a valid [JavaScript MIME type](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types) ([Firefox bug 1354577](https://bugzil.la/1354577)).

#### Media, Web Audio, 和 WebRTC

- 增加了对 [WebP](/zh-CN/docs/Glossary/webp) Google 压缩图像文件的支持 ([bug 1294490](https://bugzilla.mozilla.org/show_bug.cgi?id=1294490)) 。

#### Canvas 和 WebGL

#### 移除

- [Mutation events](/zh-CN/docs/Web/Guide/Events/Mutation_events) 在 shadow trees 上已经被禁用 ([Firefox bug 1489858](https://bugzil.la/1489858)).
- The non-standard {{domxref("MediaStream")}} property `currentTime` has been removed ([Firefox bug 1502927](https://bugzil.la/1502927)).
- The obsolete {{domxref("BasicCardRequest.supportedTypes")}} property is no longer supported by the Payment Request API; instead of requiring the web app or site to figure out what type of card is being used, it's now the server's job to deal with it ([Firefox bug 1504032](https://bugzil.la/1504032)).

### 安全

_无变化。_

#### 移除

### 插件

_无变化。_

#### 移除

### 其他

_无变化。_

#### 移除

## 为附加组件开发者带来的改变

### API 变化

#### 移除

### Manifest 变化

#### 移除

## 更早期的版本

{{Firefox_for_developers(65)}}
