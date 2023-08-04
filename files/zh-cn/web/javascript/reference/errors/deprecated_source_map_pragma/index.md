---
title: "SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
---

{{jsSidebar("Errors")}}

## 信息

```plain
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## 错误类型

{{jsxref("SyntaxError")}} 的警告。不会终止 JavaScript 的执行。

## 哪里错了？

在 JavaScript 源码中使用了已废弃的 source map 语法。

JavaScript 源代码经常被组合和压缩，以便能更高效地从服务器获取它们。使用了 [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)，调试器就可以将正在执行的代码映射到原始源文件。

因为在 IE 浏览器中，只要页面存在 `//@cc_on` 注释，都会被 IE JScript 引擎解释为要打开条件编译，所以 source map 的规范更改了语法。[条件编译注释](https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx) 是 IE 的一个鲜为人知的特性，但是它破坏了 [jQuery](https://bugs.jquery.com/ticket/13274) 和其他库的 source map。

## 示例

### 废弃的语法

使用 "@" 符号的语法已经被废弃了。

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### 标准语法

使用 "#" 符号代替。

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

或者，您也可以为 JavaScript 文件设置 header，以避免添加注释：

```js example-good
X-SourceMap: /path/to/file.js.map
```

## 参见

- [How to use a source map – Firefox Tools documentation](/zh-CN/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Introduction to source maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
