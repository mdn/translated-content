---
title: ScreenDetailed：availLeft 属性
short-title: availLeft
slug: Web/API/ScreenDetailed/availLeft
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

{{domxref("ScreenDetailed")}} 接口的 **`availLeft`** 只读属性是一个数字，表示操作系统虚拟屏幕排列中可用屏幕区域的 x 坐标（左边缘），相对于[多屏原点](/zh-CN/docs/Web/API/Window_Management_API/Multi-screen_origin)。

该值等于 {{domxref("ScreenDetailed.left")}} 属性，加上屏幕左侧绘制的所有操作系统 UI 元素的宽度。这些区域无法放置窗口，因此 `availLeft` 可以告诉你实际可用于打开或放置窗口的区域的左边界。

> [!NOTE]
> 所有浏览器都在 `Screen` 接口上提供了 `availLeft` 属性的非标准实现。使用细节见下面的[非标准示例](#非标准示例)；与这种非标准实现相关的浏览器支持信息见 [`Screen`](/zh-CN/docs/Web/API/Screen#浏览器兼容性) 参考页。

## 值

一个数字。

## 示例

### Window Management API 示例

```js
// 在支持 Window Management API 的浏览器中可用
const screenDetails = await window.getScreenDetails();

// 返回第一块屏幕的 availLeft 值
const screen1AvailLeft = screenDetails.screens[0].availLeft;
```

### 非标准示例

```js
// 在所有浏览器中可用
// 返回当前屏幕的 availLeft 值
const screenAvailLeft = window.screen.availLeft;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Window Management API](/zh-CN/docs/Web/API/Window_Management_API)
