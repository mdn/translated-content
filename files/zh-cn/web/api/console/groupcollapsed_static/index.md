---
title: console：groupCollapsed() 静态方法
slug: Web/API/console/groupCollapsed_static
---

{{APIRef("Console API")}}

**`console.groupCollapsed()`** 方法在 Web 控制台上创建一个新的分组。与 {{domxref("console.group()")}} 方法的不同点是，新建的分组默认是折叠的。用户必须点击一个按钮才能将折叠的内容打开。

调用 {{domxref("console.groupEnd()")}} 以回到父级分组。

参见 {{domxref("console")}} 文档中的[在控制台中使用分组](/zh-CN/docs/Web/API/console#在_console_中使用编组)以获取详情和示例。

{{AvailableInWorkers}}

## 语法

```js-nolint
groupCollapsed()
groupCollapsed(label)
```

### 参数

- `label`
  - : 分组的标签，为可选值。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
