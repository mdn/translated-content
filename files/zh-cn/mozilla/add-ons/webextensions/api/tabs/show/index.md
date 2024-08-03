---
title: tabs.show()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/show
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

显示之前通过 {{WebExtAPIRef("tabs.hide")}} 调用隐藏的一个或多个标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let showing = browser.tabs.show(
  tabIds          // 整数或整数数组
)
```

### 参数

- `tabIds`
  - : `integer` 或 `integer` 数组。要显示的一个或多个标签页的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在操作完成后其会被兑现且不带有参数。如果出现任何错误，promise 将会被拒绝并返回错误信息。

## 示例

显示单个标签页：

```js
function onShown() {
  console.log(`已显示`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.tabs.show(2).then(onShown, onError);
```

显示多个标签页：

```js
function onShown() {
  console.log(`已显示`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.tabs.show([15, 14, 1]).then(onShown, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
