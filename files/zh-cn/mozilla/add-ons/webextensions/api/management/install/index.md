---
title: management.install()
slug: Mozilla/Add-ons/WebExtensions/API/management/install
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

安装并启用给定 URL 的主题扩展。

此 API 需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)，并且只能用于已签名的主题。

这是一个异步函数，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
browser.management.install(options)
```

### 参数

- options
  - : 包含 [addons.mozilla.org](https://addons.mozilla.org) 上的主题 XPI 文件的 URL 和可选的 XPI 文件哈希的对象（使用 sha256 或更强的哈希算法）。

### 返回值

A [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an object, containing the `ExtensionID` defined for the theme in manifest.json.

## 浏览器兼容性

{{Compat}}

## 示例

Cycle through a list of themes:

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
    console.log(`Theme installed: ${id}`);
  } catch (e) {
    console.error(`Installation failed: ${e}`);
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
