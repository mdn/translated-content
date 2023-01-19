---
title: DELETE
slug: Web/HTTP/Methods/DELETE
---

{{HTTPSidebar}}

**HTTP DELETE** 请求方法用于删除指定的资源。

| 请求是否有主体                                             | 可以有 |
| ---------------------------------------------------------- | ------ |
| 成功的返回是否有主体                                       | 可以有 |
| {{Glossary("Safe/HTTP", "安全")}}                               | 否     |
| {{Glossary("Idempotent", "幂等")}}                               | 是     |
| {{Glossary("Cacheable", "可缓存")}}                           | 否     |
| 可以在[HTML forms](/zh-CN/docs/Web/Guide/HTML/Forms)中使用 | 否     |

## 语法

```plain
DELETE /file.html HTTP/1.1
```

## 示例

### 请求

```plain
DELETE /file.html HTTP/1.1
```

### 响应

如果 `DELETE` 方法成功执行，那么可能会有以下几种状态码：

- 状态码 {{HTTPStatus("202")}} (`Accepted`) 表示请求的操作可能会成功执行，但是尚未开始执行。
- 状态码 {{HTTPStatus("204")}} (`No Content`) 表示操作已执行，但是无进一步的相关信息。
- 状态码 {{HTTPStatus("200")}} (`OK`) 表示操作已执行，并且响应中提供了相关状态的描述信息。

```plain
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## 相关内容

- HTTP status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
