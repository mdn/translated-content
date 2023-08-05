---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
---

{{jsSidebar("Errors")}}

## 消息

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## 错误类型

一个警告。JavaScript 的执行不会中止。

## 哪里有问题？

对于给定的 JavaScript 源码，源码映射规定了不止一次。

JavaScript 源码通常被组合和压缩，使其从服务器传递更加高效。使用了[源码映射](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)，调试器能够将执行的源码映射到原始的源码。有两种指派源码映射的方式，通过注释，或者对 JavaScript 设置标题。

## 示例

使用文件中的注释来设置源码映射：

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

或者，你可以对你的 JavaScript 文件设置一个标题：

```js example-good
X-SourceMap: /path/to/file.js.map
```

## 另见

- [如何使用源码映射 – Firefox Tools documentation](/zh-CN/docs/Tools/Debugger/How_to/Use_a_source_map)
- [源码映射简介 – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
