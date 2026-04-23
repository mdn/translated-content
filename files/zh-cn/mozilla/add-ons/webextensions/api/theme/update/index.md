---
title: theme.update()
slug: Mozilla/Add-ons/WebExtensions/API/theme/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

根据 {{WebExtAPIRef("theme.Theme", "Theme")}} 对象的内容更新浏览器主题。

要使用此方法，扩展程序必须在其 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中请求 `"theme"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 语法

```js-nolint
browser.theme.update(
  windowId,    // 整型
  theme        // 对象
)
```

### 参数

- `windowId` {{optional_inline}}
  - : `integer`。窗口的 ID。如果提供了此参数，主题仅应用于该窗口。如果省略此参数，主题将应用于所有窗口。
- `theme`
  - : `object`。一个 {{WebExtAPIRef("theme.Theme", "Theme")}} 对象，指定要修改的 UI 元素的值。

## 示例

将浏览器主题设置为使用一个太阳图案，并配有一个互补的背景颜色：

```js
const suntheme = {
  images: {
    theme_frame: "sun.jpg",
  },
  colors: {
    frame: "#CF723F",
    tab_background_text: "#111",
  },
};

browser.theme.update(suntheme);
```

仅为聚焦的窗口设置主题：

```js
const day = {
  images: {
    theme_frame: "sun.jpg",
  },
  colors: {
    frame: "#CF723F",
    tab_background_text: "#111",
  },
};

browser.menus.create({
  id: "set-theme",
  title: "设置主题",
  contexts: ["all"],
});

async function updateThemeForCurrentWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  browser.theme.update(currentWindow.id, day);
}

browser.menus.onClicked.addListener(updateThemeForCurrentWindow);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
