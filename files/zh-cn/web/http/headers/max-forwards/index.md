---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
---
{{HTTPSidebar}}

**`Max-Forwards`** 是一个通用报文首部，在 Trace 或 Options 方法中，该字段以十进制整数形式指定可经过的服务器最大数目。服务器在往下一个服务器转发请求之前，Max-Forwards 的值减 1 后重新赋值。当服务器接收到 Max-Forwards 值为 0 的请求时，则不再进行转发，而是直接返回响应。

## 语法
```plain
Max-Forwards: <interger>
```

## 示例
```plain
Max-Forwards: 10
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容
- [Trace](/zh-CN/docs/Web/HTTP/Methods/TRACE)
- [Options](/zh-CN/docs/Web/HTTP/Methods/OPTIONS)