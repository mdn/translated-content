---
title: WebGL2RenderingContext：deleteSync() 方法
slug: Web/API/WebGL2RenderingContext/deleteSync
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGL2RenderingContext.deleteSync()`** 方法用于删除指定的 {{domxref("WebGLSync")}} 对象。

## 语法

```js-nolint
deleteSync(sync)
```

### 参数

- `sync`
  - : 要删除的 {{domxref("WebGLSync")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

`gl` 必须是一个 {{domxref("WebGL2RenderingContext")}}。`WebGLSync` 对象在 WebGL 1 中不可用。

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);

// …

gl.deleteSync(sync);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLSync")}}
