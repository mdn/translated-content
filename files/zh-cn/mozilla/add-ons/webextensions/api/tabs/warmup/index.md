---
title: tabs.warmup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/warmup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

为了优化系统资源的使用，浏览器可能会释放用户一段时间未访问的标签页相关的 GPU 资源。如果浏览器对一个标签页执行了这种操作，那么重新激活该标签页（例如用户切换到它时）可能比正常情况下需要更长的时间。

`tabs.warmup()` API 允许扩展启动对非活动标签页渲染资源的预热过程，如果扩展预期用户可能很快会切换到该标签页，这将使得实际的标签页切换速度比通常快得多。

请注意，此 API 不适用于已丢弃的标签页，并且不需要在切换标签页之前立即调用。它仅仅是在预期可以进行标签页切换时的性能改进，例如当悬停在一个按钮上并且点击后会切换到该标签页时。

预计此 API 主要对标签页管理扩展非常有用。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let warming = browser.tabs.warmup(
  tabId               // 整型
)
```

### 参数

- `tabId`
  - : `integer`。要预热的标签页的 ID。如果此处传递的参数不是整数（特别是 `null` 或 `undefined`），则 `warmup()` 将同步抛出异常。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，如果成功预热了由 `tabId` 标识的标签页，其会被兑现且不带有参数。如果 `tabId` 无法标识一个打开的标签页，或者由于其他原因预热失败，promise 将会被拒绝并返回错误信息。

## 示例

这段代码添加了一个监听器到 `browserAction.onClicked` 事件。监听器在当前窗口中检索所有包含 `https://developer.mozilla.org/` 页面的标签页，并预热第一个找到的标签页。

```js
function onSuccess() {
  console.log("预热成功！");
}

function onFailure(error) {
  // 例如，无效的标签页 ID
  console.error(error);
}

async function warmupMDN() {
  const mdnTabs = await browser.tabs.query({
    currentWindow: true,
    url: "https://developer.mozilla.org/*",
  });

  if (mdnTabs.length > 0) {
    const warming = browser.tabs.warmup(mdnTabs[0].id);
    warming.then(onSuccess, onFailure);
  }
}

browser.browserAction.onClicked.addListener(warmupMDN);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
