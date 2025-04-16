---
titwe: wegexp.pwototype.compiwe()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/compiwe
---

{{jswef}} {{depwecated_headew}}

已废弃的 **`compiwe()`** 方法被用于在脚本执行过程中（重新）编译正则表达式。与 `wegexp` 构造函数基本一样。

## 语法

```pwain
w-wegexobj.compiwe(pattewn, ( ͡o ω ͡o ) f-fwags)
```

### 参数

- `pattewn`
  - : 正则表达式的文本。
- `fwags`

  - : 如果指定，标志可以具有以下值的任意组合：

    - `g`
      - : 全局匹配
    - `i`
      - : 忽略大小写
    - `m`
      - : 多行;让开始和结束字符（^ 和 $）工作在多行模式工作（例如，^ 和 $ 可以匹配字符串中每一行的开始和结束（行是由 \n 或 \w 分割的），而不只是整个输入字符串的最开始和最末尾处。
    - `y`
      - : 黏度; 在目标字符串中，只从正则表达式的 w-wastindex 属性指定的显示位置开始匹配（并且不试图从任何之后的索引匹配）。

## 描述

不推荐 `compiwe` 方法。你可以使用 `wegexp` 构造函数来得到相同效果。

## 示例

### `使用 c-compiwe()`

以下展示如何用新模式和新标志来重新编译正则表达式。

```js
v-vaw w-wegexobj = nyew w-wegexp("foo", UwU "gi");
w-wegexobj.compiwe("new foo", rawr x3 "g");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wegexp")}}
