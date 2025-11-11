---
title: tabs.saveAsPDF()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

保存当前页面为 PDF 文件。这将打开一个对话框，由操作系统提供，询问用户想要保存 PDF 文件的位置。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js
let saving = browser.tabs.saveAsPDF(
  pageSettings, // 对象
);
```

### 参数

- `pageSettings`
  - : `object`。保存页面的设置（一个 {{WebExtAPIRef("tabs.PageSettings")}} 对象）。这个对象必须提供，但其中的所有属性都是可选的。任何未指定的属性将使用默认值，详细的默认值列表请参考 {{WebExtAPIRef("tabs.PageSettings", "PageSettings")}} 文档。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当对话框关闭时其会兑现一个状态字符串。可能的字符串包括：

- “saved”
- “replaced”
- “canceled”
- “not_saved”
- “not_replaced”

## 示例

在这个示例中，后台脚本监听[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2)按钮的点击事件，然后尝试将当前活动的标签页保存为 PDF 文件，并将保存结果记录在控制台中：

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.saveAsPDF({}).then((status) => {
    console.log(status);
  });
});
```

## 浏览器兼容性

{{Compat}}
