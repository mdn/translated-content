---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
---

{{HTTPSidebar}}

**`SourceMap`** [HTTP](/zh-CN/docs/Web/HTTP) 响应头链接生成的代码到一个 [source map](/zh-CN/docs/Tools/Debugger/How_to/Use_a_source_map)，使浏览器能够重建原始的资源然后显示在调试器里。

| Header 类型                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### 指令

- `<url>`
  - : 指向一个 source map 文件的一个相对（于请求的 URL）或者一个绝对的 URL。

## 例子

```plain
SourceMap: /path/to/file.js.map
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Firefox Developer Tools: using a source map](/zh-CN/docs/Tools/Debugger/How_to/Use_a_source_map)
