---
title: console：dir() 静态方法
slug: Web/API/console/dir_static
---

{{APIRef("Console API")}}

**`console.dir()`** 方法可以显示指定 JavaScript 对象的属性列表，并以交互式的形式展现。输出结果呈现为分层列表，包含展开/折叠的三角形图标，可用于查看子对象的内容。

换句话说，`console.dir()` 是一种在控制台中查看指定 JavaScript 对象的所有属性的方法，开发人员可以通过这种方式轻松获取对象的属性。

{{AvailableInWorkers}}

![console-dir.png](console-dir.png)

## 语法

```js-nolint
dir(object);
```

## 参数

- `object`
  - : 应输出其属性的 JavaScript 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Microsoft Edge 关于 `console.dir()` 的文档](https://learn.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Node.js 关于 `console.dir()` 的文档](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chrome 关于 `console.dir()` 的文档](https://developer.chrome.google.cn/docs/devtools/console/api/#dir)
