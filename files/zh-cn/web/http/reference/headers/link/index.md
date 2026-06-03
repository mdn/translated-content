---
title: Link
slug: Web/HTTP/Reference/Headers/Link
---

HTTP 实体报头 **`Link`** 提供了序列化 HTTP 头部链接的方法。它在语义上与 HTML 元素 {{HTMLElement("link")}} 相等。

## 语法

```plain
Link: < uri-reference >; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : URI reference 必须要用 `<` 和 `>`来关闭。

### 参数

link 头部包含以 `;` 分隔的参数，这些参数与 HTML 元素 {{HTMLElement("link")}} 的属性一致。

## 示例

URI 必须要用 `<` 和 `> 来关闭：`

```http example-good
Link: <https://example.com>; rel="preload"
```

```http example-bad
Link: https://bad.example; rel="preload"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPStatus(103, "103 Early Hints")}}
