---
title: Sec-Fetch-Dest
slug: Web/HTTP/Headers/Sec-Fetch-Dest
---

{{HTTPSidebar}}

**`Sec-Fetch-Dest`** {{Glossary("Fetch metadata request header", "Fetch 元数据请求标头")}}指示请求的目标，即数据的来源以及如何使用这些获取到的数据。

这允许服务器根据请求是否采用了适当的使用方式来确定是否为请求提供服务。例如，具有 `audio` 目标的请求应请求音频数据，而不是其他类型的资源（例如，包含敏感用户信息的文档）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Fetch Metadata Request Header", "Fetch 元数据请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的消息首部")}}</th>
      <td>是（带有 <code>Sec-</code> 前缀）</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```
Sec-Fetch-Dest: audio
Sec-Fetch-Dest: audioworklet
Sec-Fetch-Dest: document
Sec-Fetch-Dest: embed
Sec-Fetch-Dest: empty
Sec-Fetch-Dest: font
Sec-Fetch-Dest: frame
Sec-Fetch-Dest: iframe
Sec-Fetch-Dest: image
Sec-Fetch-Dest: manifest
Sec-Fetch-Dest: object
Sec-Fetch-Dest: paintworklet
Sec-Fetch-Dest: report
Sec-Fetch-Dest: script
Sec-Fetch-Dest: serviceworker
Sec-Fetch-Dest: sharedworker
Sec-Fetch-Dest: style
Sec-Fetch-Dest: track
Sec-Fetch-Dest: video
Sec-Fetch-Dest: worker
Sec-Fetch-Dest: xslt
```

如果此标头包含任何其他的值，服务器应忽略它。

## 指令

> **备注：** 这些指令对应于 {{domxref("Request.destination")}} 返回的值。

- `audio`
  - : 目标是音频数据。这可能源自 HTML {{HTMLElement("audio")}} 标签。
- `audioworklet`
  - : 目标是获取供 audio worklet 使用的数据。这可能源于对 {{domxref("Worklet.addModule()", "audioWorklet.addModule()")}} 的调用。
- `document`
  - : 目标是文档（HTML 或 XML），请求是用户发起的顶级导航的结果（例如，由用户单击链接产生）。
- `embed`
  - : 目标是嵌入内容。这可能源自 HTML {{HTMLElement("embed")}} 标签。
- `empty`
  - : 目标是空字符串。这用于没有自己值的目标。例如：`fetch()`、{{domxref("navigator.sendBeacon()")}}、{{domxref("EventSource")}}、{{domxref("XMLHttpRequest")}}、{{domxref("WebSocket")}} 等等。
- `font`
  - : 目标是字体。这可能源自 CSS {{cssxref("@font-face")}}。
- `frame`
  - : 目标是 frame。这可能源自 HTML {{HTMLElement("frame")}} 标签。
- `iframe`
  - : 目标是 iframe。这可能源自 HTML {{HTMLElement("iframe")}} 标签。
- `image`
  - : 目标是图片。这可能源自 HTML {{HTMLElement("image")}}、SVG {{SVGElement("image")}}、CSS {{cssxref("background-image")}}、CSS {{cssxref("cursor")}}、CSS {{cssxref("list-style-image")}} 等等。
- `manifest`
  - : 目标是 mainfest。这可能源自 HTML [\<link rel=manifest>](/zh-CN/docs/Web/HTML/Link_types/manifest)。
- `object`
  - : 目标是对象，这可能源自 {{HTMLElement("object")}} 标签。
- `paintworklet`
  - : 目标是 paint worklet。这可能源自对 {{domxref('Worklet.addModule', 'CSS.PaintWorklet.addModule()')}} 的调用。
- `report`
  - : 目标是报告（如一份内容安全策略报告）。
- `script`
  - : 目标是一个脚本。这可能源自 HTML {{HTMLElement("script")}} 标签或对 {{domxref("WorkerGlobalScope.importScripts()")}} 的调用。
- `serviceworker`
  - : 目标是 service worker。这可能源于对 {{domxref("ServiceWorkerContainer.register","navigator.serviceWorker.register()")}} 的调用。
- `sharedworker`
  - : 目标是 shared worker。这可能源自 {{domxref("SharedWorker")}}。
- `style`
  - : 目标是 style。这可能源自 HTML {{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} 或者 CSS {{cssxref("@import")}}。
- `track`
  - : 目标是 HTML text track。这可能源自 HTML {{HTMLElement("track")}} 标签。
- `video`
  - : 目标是视频数据。这可能源自于 {{HTMLElement("video")}} 标签。
- `worker`
  - : 目标是 {{domxref("Worker")}}。
- `xslt`
  - : 目标是 XSLT 转换。

## 示例

{{HTMLElement("img")}} 元素生成的跨域请求将具有以下的 HTTP 请求标头（请注意，目标是 `image`）：

```
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关的标头

  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}
  - {{HTTPHeader("Sec-Fetch-User")}}

- [使用 Fetch 元数据使你的资源免受 Web 攻击](https://web.dev/fetch-metadata/) (web.dev)
- [Fetch 元数据请求标头 playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
