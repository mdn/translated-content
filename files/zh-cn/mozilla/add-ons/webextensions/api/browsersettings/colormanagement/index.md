---
title: browserSettings.colorManagement
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/colorManagement
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，用于查询和设置浏览器的颜色管理特性。

默认情况下，Firefox 会对已标记的媒体应用颜色管理，并对未标记的媒体默认使用 sRGB。这种行为意味着某些未标记的媒体（例如动画和电影制作中使用的媒体）可能会被进行不必要的颜色校正。使用这些设置可以防止这种情况发生。

该对象具有以下属性：

- `mode`
  - : 表示颜色管理模式的字符串。有效值为 `off`、`full` 和 `tagged_only`。
- `useNativeSRGB`
  - : 表示是否使用内置的 sRGB 颜色管理的布尔值。
- `useWebRenderCompositor`
  - : 表示是否使用 WebRender 合成器的布尔值。

## 浏览器兼容性

{{Compat}}

## 示例

将颜色模式设置为“full”：

```js
function logResult(result) {
  console.log(`设置已修改：${result}`);
}

browser.browserSettings.colorManagement.mode
  .set({ value: "full" })
  .then(logResult);
```

获取原生 sRGB 颜色管理的颜色模式：

```js
function logResult(result) {
  console.log(`当前 useNativeSRGB 值： ${result.value}`);
}

browser.browserSettings.colorManagement.useNativeSRGB.get({}).then(logResult);
```

{{WebExtExamples}}
