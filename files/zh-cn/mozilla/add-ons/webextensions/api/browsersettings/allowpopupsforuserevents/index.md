---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，可用于启用或禁用网页在响应用户操作时打开弹出窗口的功能。

其底层值是一个布尔值。

默认情况下，浏览器允许网页在响应特定事件时打开弹出窗口：例如 [click](/zh-CN/docs/Web/API/Element/click_event)、[mouseup](/zh-CN/docs/Web/API/Element/mouseup_event)、[submit](/zh-CN/docs/Web/API/HTMLFormElement/submit_event)。如果 `allowPopupsForUserEvents` 设置为 `false`，则任何用户事件都无法打开弹出窗口。如果设置为 `true`，则默认事件集将被允许打开弹出窗口。

例如，假设网页有如下代码：

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com", "myPopup", "height=400,width=400");
});
```

默认情况下，这将打开一个弹出窗口。如果扩展将 `allowPopupsForUserEvents` 设置为 `false`，则不会打开弹出窗口，用户将被通知弹出窗口已被阻止。

## 浏览器兼容性

{{Compat}}

## 示例

切换设置：

```js
function toggleAllowPopup() {
  function toggle(current) {
    console.log(`当前值为：${current.value}`);
    browser.browserSettings.allowPopupsForUserEvents.set({
      value: !current.value,
    });
  }

  browser.browserSettings.allowPopupsForUserEvents.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowPopup();
});
```

{{WebExtExamples}}
