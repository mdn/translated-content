---
title: Window.outerHeight
slug: Web/API/Window/outerHeight
---

{{APIRef}}

**`Window.outerHeight`** 只读属性返回整个浏览器窗口的高度（以像素为单位），包括侧边栏（如果存在）、窗口镶边（window chrome）和窗口调正边框（window resizing border/handle）。

## 备注

要改变窗口的大小，请查看 {{domxref("window.resizeBy()")}} 和 {{domxref("window.resizeTo()")}}。

要获取窗口的内层高度，即页面被显示区域的高度，可查看 {{domxref("window.innerHeight")}}。

### 图像示例

下面的示意图展示了 `outerHeight` 和 `innerHeight` 两者的不同。

![innerHeight 和 outerHeight](firefoxinnervsouterheight2.png)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}
