---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

当给定的 JavaScript 源文件被指定了多次源码映射时，JavaScript 会发出“-file- is being assigned a //# sourceMappingURL, but already has one.”警告。

## 错误信息

```plain
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## 错误类型

警告。JavaScript 的执行不会中止。

## 什么地方出错了？

对于给定的 JavaScript 源码，源码映射规定了不止一次。

JavaScript 源码通常被组合和压缩，使其从服务器传递更加高效。使用[源码映射](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)，调试器能够将执行的源码映射到原始的源码。有两种指派源码映射的方式，通过注释，或者对 JavaScript 设置标头。

## 示例

### 设置源码映射

使用文件中的注释来设置源码映射：

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

或者，你可以对你的 JavaScript 文件设置标头：

```js example-good
X-SourceMap: /path/to/file.js.map
```

## 参见

- 火狐源代码文档中的[使用源码映射](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- 在 developer.chrome.google.cn 上的 [JavaScript 源码映射简介](https://developer.chrome.google.cn/blog/sourcemaps)（2012）
