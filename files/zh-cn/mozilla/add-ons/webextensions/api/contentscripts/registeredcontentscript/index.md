---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

`RegisteredContentScript` 是通过调用 {{WebExtAPIRef("contentScripts.register()")}} 返回的，表示在该调用中注册的内容脚本。

它定义了一个函数 {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister", "unregister()")}}，可以用于取消注册内容脚本。

> [!NOTE]
> 如果此对象被销毁（例如因为超出了其作用域），那么内容脚本将自动取消注册，因此你应该保持对此对象的引用，以便内容脚本保持注册的状态。

## 方法

- {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister","unregister()")}}
  - : 取消注册此对象表示的内容脚本。

## 浏览器兼容性

{{Compat}}

## 示例

此代码在单击浏览器操作时切换注册的内容脚本：

```js
let registered = null;

async function register() {
  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [
      {
        code: "document.body.innerHTML = '<h1>这个页面被吃掉了<h1>'",
      },
    ],
    runAt: "document_idle",
  });
}

function toggle() {
  if (registered) {
    registered.unregister();
    registered = null;
  } else {
    register();
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}
