---
title: console：group() 静态方法
slug: Web/API/console/group_static
---

{{APIRef("Console API")}}

**`console.group()`** 方法在 [Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)上创建一个新的分组。随后输出到控制台上的内容都会被添加一个缩进，表示该内容属于当前分组，直到调用 {{domxref("console.groupEnd()")}} 之后，当前分组结束。

{{AvailableInWorkers}}

## 语法

```js-nolint
group()
group(label)
```

### 参数

- `label`
  - : 分组标签。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("console.groupEnd()")}}
