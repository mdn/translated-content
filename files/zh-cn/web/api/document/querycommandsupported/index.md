---
title: Document.queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
---

{{ApiRef("DOM")}}{{deprecated_header}}

**`Document.queryCommandSupported()`** 方法确定浏览器是否支持指定的编辑指令。

## 语法

```plain
isSupported = document.queryCommandSupported(command);
```

- `command`
  - : 待确定是否支持的命令。

如果命令不被支持，将触发 `NotSupportedError` 异常。

另外：

- 如果命令没有值或未启用，将返回空字符串。
- "fontSize" 命令将被特殊处理，如果值被重写，它将返回最近似标准尺寸的整数倍像素大小。
- 如果命令的值已被重写，将由重写返回。
- 否则，此命令返回命令的值，如同 {{domxref("document.queryCommandValue()")}}.

## 示例

```js
var flg = document.queryCommandSupported("SelectAll");

if (flg) {
  // ...Do something
}
```

## 规范

此特性不属于任何规范，也不再有望被标准化。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.execCommand")}}
