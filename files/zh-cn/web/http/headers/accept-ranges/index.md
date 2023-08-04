---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
---

{{HTTPSidebar}}

服务器使用 HTTP 响应头 **`Accept-Ranges`** 标识自身支持范围请求 (partial requests)。字段的具体值用于定义范围请求的单位。

当浏览器发现`Accept-Ranges`头时，可以尝试*继续*中断了的下载，而不是重新开始。

| 头部类型                                                    | {{Glossary("Response header")}} |
| ----------------------------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}}（禁止修改的 HTTP 头） | 否                              |

## 语法

```plain
Accept-Ranges: bytes
Accept-Ranges: none
```

## 指令

- `none`
  - : 不支持任何范围请求单位，由于其等同于没有返回此头部，因此很少使用。不过一些浏览器，比如 IE9，会依据该头部去禁用或者移除下载管理器的暂停按钮。
- `bytes`
  - : 范围请求的单位是 bytes（字节）。

## 示例

```plain
Accept-Ranges: bytes
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
