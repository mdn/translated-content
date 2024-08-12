---
title: action.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/openPopup
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

打开浏览器操作的弹窗。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

在 Firefox 的稳定版中，你只能在[用户操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_actions)的处理程序中调用此函数。参见[浏览器兼容性](#浏览器兼容性)。

## 语法

```js-nolint
browser.action.openPopup(
  options // 可选的对象
)
```

### 参数

- `details` {{optional_inline}}

  - : 一个含有下列属性的对象：

    - `windowId` {{optional_inline}}
      - : `integer`，要打开弹窗的那一窗口，默认为当前窗口。

### 返回值

没有兑现任何参数的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 示例

当用户选择上下文菜单项时打开弹窗：

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.action.openPopup();
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
