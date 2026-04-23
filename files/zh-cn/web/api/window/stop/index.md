---
title: Window：stop() 方法
short-title: stop()
slug: Web/API/Window/stop
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`window.stop()`** 方法会停止当前浏览上下文中正在进行的资源加载，其效果等同于浏览器的“停止”按钮。

由于脚本的执行方式限制，此方法无法中断父文档本身的加载过程，但它会停止图像、新窗口以及其他仍在加载的对象。

## 语法

```js-nolint
stop()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
window.stop();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
