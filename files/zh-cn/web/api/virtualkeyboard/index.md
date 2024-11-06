---
title: VirtualKeyboard
slug: Web/API/VirtualKeyboard
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{SeeCompatTable}}{{APIRef("VirtualKeyboard API")}}{{securecontext_header}}

[虚拟键盘 API](/zh-CN/docs/Web/API/VirtualKeyboard_API) 的 **`VirtualKeyboard`** 接口用于具有屏幕虚拟键盘的设备（如平板电脑、手机或其他没有物理键盘的设备）。

`VirtualKeyboard` 接口使你可以选择不使用浏览器自动处理屏幕虚拟键盘的方式——通过减少视口的高度来为虚拟键盘腾出空间。你可以阻止浏览器改变视口大小、检测虚拟键盘的位置和大小，并通过编程方式显示或隐藏虚拟键盘。

你可以通过 {{domxref("navigator.virtualKeyboard")}} 访问 `VirtualKeyboard` 接口。

{{InheritanceDiagram}}

## 实例属性

_VirtualKeyboard 接口从其父接口 {{domxref("EventTarget")}} 继承属性。_

- {{DOMxRef("VirtualKeyboard.boundingRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 描述虚拟键盘几何结构的 {{domxref("DOMRect")}}。
- {{DOMxRef("VirtualKeyboard.overlaysContent")}} {{Experimental_Inline}}
  - : 一个{{jsxref('Boolean', '布尔值', "", 1)}}，定义浏览器是否应停止处理屏幕虚拟键盘。

## 实例方法

_VirtualKeyboard 接口从其父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref('VirtualKeyboard.show()')}} {{experimental_inline}}
  - : 显示虚拟键盘。
- {{domxref('VirtualKeyboard.hide()')}} {{experimental_inline}}
  - : 隐藏虚拟键盘。

## 事件

- {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} {{Experimental_Inline}}
  - : 当屏幕虚拟键盘的几何形状发生变化时（即虚拟键盘显示或隐藏时）触发。

## 示例

以下示例演示如何选择不使用自动虚拟键盘行为，并检测网页中虚拟键盘的几何形状：

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}}
- [使用虚拟键盘 API 实现完全控制](https://developer.chrome.google.cn/docs/web-platform/virtual-keyboard)
