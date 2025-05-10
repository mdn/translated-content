---
title: webNavigation.onCommitted
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCommitted
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当导航被提交时触发。至少部分新文档已从服务器接收，且浏览器已决定切换到新文档。

## 语法

```js-nolint
browser.webNavigation.onCommitted.addListener(
  listener,                 // 函数
  filter                    // 可选对象
)
browser.webNavigation.onCommitted.removeListener(listener)
browser.webNavigation.onCommitted.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册为此事件的监听器。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : `object`。有关导航事件的详细信息。请参阅 [details](#details_2) 部分了解更多信息。

- `filter` {{optional_inline}}
  - : `object`。包含单个属性 `url` 的对象，该属性是 {{WebExtAPIRef("events.UrlFilter")}} 对象的 `Array`。如果包含此参数，则仅当目标 URL 匹配数组中至少一个 `UrlFilter` 时，事件才会触发。如果省略此参数，则事件会为所有转换触发。

## 附加对象

### details

- `tabId`
  - : `integer`。即将发生导航的标签页的 ID。
- `url`
  - : `string`。给定框架将导航到的 URL。
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`。此值在现代浏览器中未设置。当设置时，它表示运行此标签页渲染器的进程 ID。
- `frameId`
  - : `integer`。即将发生导航的框架。`0` 表示导航发生在标签页的顶级浏览上下文中，而不是嵌套的 {{HTMLElement("iframe")}} 中。正值表示导航发生在嵌套的 iframe 中。框架 ID 对于给定的标签页和进程是唯一的。
- `parentFrameId`
  - : `integer`。此框架的父框架的 ID。如果是顶级框架，则设置为 `-1`。
- `timeStamp`
  - : `number`。导航被提交的时间，以 [自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time) 表示。
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}。导航的原因。（例如，如果用户点击了链接，则为 "link"；如果用户重新加载了页面，则为 "reload"。）
- `transitionQualifiers`
  - : `Array` of {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}。有关导航的额外信息：例如，是否存在服务器或客户端重定向。

## 浏览器兼容性

{{Compat}}

## 示例

记录 `onCommitted` 的目标 URL 和额外的转换信息，如果目标 URL 的主机名包含 "example.com" 或以 "developer" 开头。

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCommitted(details) {
  console.log(`目标 URL: ${details.url}`);
  console.log(`转换类型：${details.transitionType}`);
  console.log(`转换限定符：${details.transitionQualifiers}`);
}

browser.webNavigation.onCommitted.addListener(logOnCommitted, filter);
```

{{WebExtExamples}}

> [! 注意]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。
