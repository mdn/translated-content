---
title: management.install()
slug: Mozilla/Add-ons/WebExtensions/API/management/install
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

安装并启用来自给定 URL 的主题扩展。

此 API 需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)，并且仅适用于已签名的主题。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
browser.management.install(options)
```

### 参数

- options
  - : 包含 [addons.mozilla.org](https://addons.mozilla.org) 上的主题 XPI 文件的 URL 和可选的 XPI 文件散列值（使用 sha256 或更强的散列算法）的对象。

### 返回值

[Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现为包含对应主题在其 manifest.json 中定义的 `ExtensionID` 的对象。

## 浏览器兼容性

{{Compat}}

## 示例

遍历一系列的主题：

```js
"use strict";

const themes = [
  "https://addons.mozilla.org/zh-CN/firefox/downloads/file/1063216/insightscare-1.0-fx.xpi",
  "https://addons.mozilla.org/zh-CN/firefox/downloads/file/1063419/orange_roses-1.0-fx.xpi",
  "https://addons.mozilla.org/zh-CN/firefox/downloads/file/1062647/sticktoyourguns-2.0-fx.xpi",
  "https://addons.mozilla.org/zh-CN/firefox/downloads/file/0/bad_url.xpi",
];

let current;

async function install(url) {
  try {
    current = url;
    const { id } = await browser.management.install({ url });
    console.log(`安装了主题：${id}`);
  } catch (e) {
    console.error(`主题安装失败：${e}`);
  }
}

browser.browserAction.onClicked.addListener(() => {
  const id = themes.indexOf(current);
  install(themes[(id + 1) % themes.length]);
});

for (const url of themes) {
  browser.menus.create({
    title: url,
    onclick: () => install(url),
    contexts: ["browser_action"],
  });
}
```

{{WebExtExamples}}
