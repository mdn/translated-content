---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
l10n:
  sourceCommit: 53c832f09b5f55b2cbe040907bff8abfb7b57f72
---

{{AddonSidebar}}

设置侧边栏的图标。

你可以通过提供一个图片文件的路径，或一个 {{WebExtAPIRef('sidebarAction.ImageDataType')}} 对象来指定单独一个图标。

你也可以通过提供一个包含多个路径或 `ImageData` 对象的字典来指定多个不同尺寸的图标，这样图标就不必为具有不同像素密度的设备进行缩放。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 图标类型

你的扩展应该在 [`sidebar_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) 清单键中指定侧边栏的图标。这被称为“_清单图标_”。

如果你没有在 `sidebar_action` 键中指定图标，你将得到浏览器的默认图标。这被称为“_默认图标_”。

如果你使用 `setIcon()` 设置一个新图标，并包含 `tabId` 选项，那么将仅为指定的标签页设置图标。这个图标称为“_标签页特定图标_”。

如果你使用 `setIcon()` 设置一个新图标，并包含 `windowId` 选项，那么将仅为给定的窗口设置图标。这个图标称为“_窗口特定图标_”，并将出现在该窗口的所有没有设置标签页特定图标的标签页中。

如果你使用 `setIcon()` 设置一个新图标，并省略 `tabId` 和 `windowId` 选项，那么这将设置“_全局图标_”。全局图标将出现在所有没有设置标签页特定图标的标签页中，且其窗口没有设置窗口特定图标的标签页中。

## 语法

```js-nolint
let settingIcon = browser.sidebarAction.setIcon(
  details         // 对象
)
```

### 参数

- `details`

  - : `object`。包含如下属性的对象：

    - `imageData` {{optional_inline}}

      - : {{WebExtAPIRef('sidebarAction.ImageDataType')}} 或 `object`。这要么是一个单一的 `ImageData` 对象，要么是一个字典对象。

        使用字典对象来指定多个不同尺寸的 `ImageData` 对象，这样图标就不必为具有不同像素密度的设备进行缩放。如果 `imageData` 是一个字典，那么每个属性的值是一个 `ImageData` 对象，其名称是其大小，例如：

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

    - `path` {{optional_inline}}

      - : `string` 或 `object`。这要么是指向图标文件的相对路径，要么是一个字典对象。

        使用字典对象来指定多个不同尺寸的图标文件，这样图标就不必为具有不同像素密度的设备进行缩放。如果 `path` 是一个字典，那么每个属性的值是一个相对路径，其名称是其大小，例如：

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

        如果 `path` 是一个空字符串，浏览器将使用默认图标。

        如果 `path` 不为空但不指向图标文件，那么图标将被隐藏。

        如果 `path` 是 `null`，并且指定了 `tabId`，并且指定的标签页设置了标签页特定图标：那么如果设置了全局图标，该标签页的特定图标将重置为全局图标，否则将被重置为清单图标。

        如果 `path` 是 `null`，并且省略了 `tabId`，并且设置了全局图标，那么它将被重置为清单图标。

    - `tabId` {{optional_inline}}
      - : `integer`。仅为指定的标签页设置图标。
    - `windowId` {{optional_inline}}
      - : `integer`。仅为指定的窗口设置图标。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，函数将失败且图标不会被设置。
- 如果同时省略 `windowId` 和 `tabId`，则设置全局图标。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当图标被设置时将会不带任何参数地兑现。

## 浏览器兼容性

{{Compat}}

## 示例

下面的代码在用户点击浏览器操作时切换活动标签页的侧边栏图标：

```js
let on = false;

function toggle(tab) {
  if (on) {
    browser.sidebarAction.setIcon({
      path: "off.svg",
      tabId: tab.id,
    });
    on = false;
  } else {
    browser.sidebarAction.setIcon({
      path: "on.svg",
      tabId: tab.id,
    });
    on = true;
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Opera 的 [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API。
