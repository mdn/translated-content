---
title: CanvasRenderingContext2D.drawWidgetAsOnScreen()
slug: orphaned/Web/API/CanvasRenderingContext2D/drawWidgetAsOnScreen
original_slug: Web/API/CanvasRenderingContext2D/drawWidgetAsOnScreen
---
{{APIRef}} {{non-standard_header}}这个内部使用非标准的 Canvas 2D API 的方法**`CanvasRenderingContext2D.drawWidgetAsOnScreen() 为 Canvas（画布）上的窗口提供了根部件。不像`**{{domxref("CanvasRenderingContext2D.drawWindow", "drawWindow()")}}这个 API，它使用操作系统来获取屏幕上部件的快照而不是从 Gecko 自己的组合中读取

这个 API 用在 Web 内容上。它只支持 Windows 系统中 Chrome 进程中使用 OMTC 的小部件

## 句法

```plain
void ctx.drawWidgetAsOnScreen(window);
```

### 参数

- `window`
  - : {{domxref("Window")}} 提供。

## 说明

不是当前规范或者草案的一部分。这是一个内部使用的无标准的 API.

## 浏览器兼容性

{{Compat("api.CanvasRenderingContext2D.drawWidgetAsOnScreen")}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}。
- {{domxref("CanvasRenderingContext2D.drawWindow()")}}
