---
title: CanvasRenderingContext2D.drawWindow()
slug: conflicting/Web/API/CanvasRenderingContext2D/drawImage
original_slug: Web/API/CanvasRenderingContext2D/drawWindow
---
{{APIRef}} {{deprecated_header}}

**`CanvasRenderingContext2D.drawWindow()`** 是 Canvas 2D API 在 `canvas` 内部画布上渲染一个窗体区域的已弃用的非标准接口。 用来渲染窗口可视区的内容，忽略窗口的剪切和滚动。

这个 API 不能在 Web 内容中应用。它是一个同步的 API，并且由于它不能对裂变的跨域 `iframe` （译者注：我也不知道这裂变是个啥），如果你的浏览器扩展中使用这一 API 的话，建议你改用 {{WebExtAPIRef('tabs.captureTab')}} 。如果你的代码是针对 chrome 的话，用来自父进程的 [WindowGlobalParent.drawSnapshot](https://searchfox.org/mozilla-central/rev/9b282b34b5/dom/chrome-webidl/WindowGlobalActors.webidl#81-98) 接口可能会更合适。

## 语法

```
void ctx.drawWindow(window, x, y, w, h, bgColor[, flags]);
```

### 参数

- `window`
  - : 需要渲染的{{domxref("Window")}} 。
- x
  - : 窗体的 X 坐标。
- y
  - : 窗体的 Y 坐标。
- w
  - : 窗体的宽度。
- h
  - : 窗体的高度。
- `bgColor`

  - : {{domxref("DOMString")}}，描述当窗体渲染到 canvas 之前，进行填充的颜色。 颜色可以是透明/半透明。它被赋值为 CSS 颜色字符串（例如： `rgb()` 或者 `rgba()）。`
    注意：

    - 如果"`rgba(0,0,0,0)`"用来当背景色，图像透明的地方窗体也是透明的。
    - 顶级的预览文档通常不会是透明的，因为用户的背景色偏好设置会被应用。但是{{HTMLElement("iframe", "iframes")}} 是透明的，如果页面没有设置背景。
    - 如果不透明的颜色做为背景色，渲染速度会更快，因为我们不需要计算窗体的透明度。

- flags {{optional_inline}}

  - : 用来更好的控制 `drawWindow` 。Flags 可以使用或运算符进行连接。

    | 常量                             | 值     | 描述                                                                                                                                       |
    | -------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
    | `DRAWWINDOW_DRAW_CARET`          | `0x01` | 绘制时，如果被占用，显示插入符。                                                                                                           |
    | `DRAWWINDOW_DO_NOT_FLUSH`        | `0x02` | 不要清空待定的布局通知，否则会被批量挂起。                                                                                                 |
    | `DRAWWINDOW_DRAW_VIEW`           | `0x04` | 绘制滚动条，并滚动当前的视口。                                                                                                             |
    | `DRAWWINDOW_USE_WIDGET_LAYERS`   | `0x08` | 使用小部件层进行有效的管理。这意味着可以使用硬件加速，但是实际上会变慢，并且降低品质。不管怎样，它都会更准确地反映已经渲染到屏幕上的像素。 |
    | `DRAWWINDOW_ASYNC_DECODE_IMAGES` | `0x10` | 不需要同步解码图像 - 绘制我们已经有的。                                                                                                    |

## 示例

这个方法在 canvas 中绘制了一个 DOM 窗口的内容快照。例子：

```js
ctx.drawWindow(window, 0, 0, 100, 200, "rgb(255,255,255)");
```

以像素为单位，相对可视区左上角的矩形框内，使用白色作为背景色，在 canvas 中绘制当前窗口的内容。如果指定"`rgba(255,255,255,0)`" 作为颜色，则内容的背景色是透明的（造成绘制速度变慢）。

使用纯白色"`rgb(255,255,255)`"或者透明颜色之外的任何背景，都不是一个好的主意。就像所有浏览器要做的，多数网站期望他们界面透明的部分绘制到白色背景上。

使用这个方法，可以使用任意内容填充隐藏的 IFRAME（例如：CSS-styled HTML text 或者 SVG）并绘制到 canvas 中。为了适应当前的变形，它会缩放、旋转。

Ted Mielczarek 的 [标签预览](http://ted.mielczarek.org/code/mozilla/tabpreview/) 扩展使用这种技术，在 chrome 中提供网页的缩略图。源代码可以作为参考。

## 规范描述

目前的规范或者草案不包含此章节。这是一个不标准的、仅供内部使用的 API。

## 浏览器兼容性

{{Compat("api.CanvasRenderingContext2D.drawWindow")}}
参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
