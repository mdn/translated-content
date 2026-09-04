---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
---

{{deprecated_header}}

已废弃的 **`compile()`** 方法被用于在脚本执行过程中（重新）编译正则表达式。与 `RegExp` 构造函数基本一样。

## 语法

```plain
regexObj.compile(pattern, flags)
```

### 参数

- `pattern`
  - : 正则表达式的文本。
- `flags`
  - : 如果指定，标志可以具有以下值的任意组合：
    - `g`
      - : 全局匹配
    - `i`
      - : 忽略大小写
    - `m`
      - : 多行;让开始和结束字符（^ 和 $）工作在多行模式工作（例如，^ 和 $ 可以匹配字符串中每一行的开始和结束（行是由 \n 或 \r 分割的），而不只是整个输入字符串的最开始和最末尾处。
    - `y`
      - : 黏度; 在目标字符串中，只从正则表达式的 lastIndex 属性指定的显示位置开始匹配（并且不试图从任何之后的索引匹配）。

## 描述

不推荐 `compile` 方法。你可以使用 `RegExp` 构造函数来得到相同效果。

## 示例

### `使用 compile()`

以下展示如何用新模式和新标志来重新编译正则表达式。

```js
var regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("RegExp")}}
