---
title: sidebarAction.isOpen()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

在给定窗口中侧边栏打开的情况下返回 `true`。

此函数接受一个 `windowId` 作为参数：

- 如果提供了 `windowId`，则函数将检查给定的浏览器窗口。
- 如果省略了 `windowId`，则函数将检查最顶层的浏览器窗口。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingIsOpen = browser.sidebarAction.isOpen(
  details // 对象
)
```

### 参数

- `details`

  - : `object`。一个对象，可选地包含要检查的 `windowId` 属性。

    - `windowId` {{optional_inline}}
      - : `integer`。要检查的浏览器窗口的 ID。如果省略，则默认为 {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}，它引用最顶层的浏览器窗口。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，如果给定窗口中的侧边栏打开，则兑现 `true`，否则兑现 `false`。

## 浏览器兼容性

{{Compat}}

## 示例

检查最顶层的窗口：

```js
browser.sidebarAction.isOpen({}).then((result) => {
  console.log(result);
});
```

检查所有打开的窗口：

```js
async function checkWindow(windowId) {
  const result = await browser.sidebarAction.isOpen({ windowId });
  console.log(`窗口：${windowId} 状态：${result}`);
}

browser.windows.getAll().then((all) => {
  for (const { id } of all) {
    checkWindow(id);
  }
});
```

{{WebExtExamples}}
