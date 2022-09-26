---
title: Window.stop()
slug: Web/API/Window/stop
---

{{APIRef}}

**`window.stop()`** 方法的效果相当于点击了浏览器的停止按钮。由于脚本的加载顺序，该方法不能阻止已经包含在加载中的文档，但是它能够阻止图片、新窗口、和一些会延迟加载的对象的加载。

## 语法

```plain
window.stop()
```

## 示例

```js
window.stop();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
