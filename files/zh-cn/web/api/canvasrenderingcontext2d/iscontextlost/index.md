---
title: CanvasRenderingContext2D：isContextLost() 方法
slug: Web/API/CanvasRenderingContext2D/isContextLost
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.isContextLost()`** 方法用于检查渲染上下文是否丢失（且尚未重置）。这可能由于驱动程序崩溃、内存耗尽等原因发生。

如果用户代理检测到画布后备存储丢失，它会在相关的 [`HTMLCanvasElement`](/zh-CN/docs/Web/API/HTMLCanvasElement) 上触发 [`contextlost` 事件](/zh-CN/docs/Web/API/HTMLCanvasElement/contextlost_event)。如果这个事件没有被取消，用户代理将尝试将后备存储重置为默认状态（相当于调用 {{domxref("CanvasRenderingContext2D.reset()")}}）。成功后，它会触发 [`contextrestored` 事件](/zh-CN/docs/Web/API/HTMLCanvasElement/contextrestored_event)，表示上下文已准备好重新初始化和重绘。

## 语法

```js-nolint
isContextLost()
```

### 参数

无。

### 返回值

如果渲染上下文已丢失，则返回 `true`；否则返回 `false`。

### 示例

```js
const ctx = canvas.getContext("2d");

if (ctx.isContextLost()) {
  console.log("上下文已丢失");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- [`HTMLCanvasElement: contextlost` 事件](/zh-CN/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`HTMLCanvasElement: contextrestored` 事件](/zh-CN/docs/Web/API/HTMLCanvasElement/contextrestored_event)
