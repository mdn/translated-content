---
title: theme.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/theme/onUpdated
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

当作为浏览器扩展提供的主题被应用或移除时触发。具体情况包括：

- 安装[静态主题](https://extensionworkshop.com/documentation/themes/static-themes/)时
- [动态主题](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/theme)调用 [`theme.update()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) 或 [`theme.reset()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset) 时
- 主题被卸载时

此事件不会因内置主题的更改而触发。

## 语法

```js-nolint
browser.theme.onUpdated.addListener(listener)
browser.theme.onUpdated.removeListener(listener)
browser.theme.onUpdated.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册此事件。如果正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 当此事件发生时调用的函数。该函数传递以下参数：

    - `updateInfo`

      - : `object`。包含两个属性的对象：

        - `theme`
          - : `object`。如果事件因为移除了扩展提供的主题而触发，则这是一个空对象。如果事件因为应用了扩展提供的主题而触发，则这是一个表示已应用主题的 {{WebExtAPIRef("theme.Theme")}} 对象。
        - `windowId` {{optional_inline}}
          - : `integer`。更新主题的窗口的 ID。如果此属性不存在，则主题在所有窗口中更新。

## 示例

```js
function handleUpdated(updateInfo) {
  if (updateInfo.theme.colors) {
    console.log(`主题被应用：${updateInfo.theme}`);
  } else {
    console.log(`主题被移除`);
  }
}

browser.theme.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
