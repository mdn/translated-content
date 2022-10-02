---
title: PATCH
slug: Web/HTTP/Methods/PATCH
---

{{HTTPSidebar}}

在 HTTP 协议中，请求方法 **PATCH** 用于对资源进行部分修改。

在 HTTP 协议中， {{HTTPMethod("PUT")}} 方法已经被用来表示对资源进行整体覆盖，而 {{HTTPMethod("POST")}} 方法则没有对标准的补丁格式的提供支持。不同于 `PUT` 方法，而与 `POST` 方法类似，`PATCH` 方法是非幂等的，这就意味着连续多个的相同请求会产生不同的效果。

要判断一台服务器是否支持 `PATCH` 方法，那么就看它是否将其添加到了响应首部 {{HTTPHeader("Allow")}} 或者 {{HTTPHeader("Access-Control-Allow-Methods")}}（在跨域访问的场合，CORS）的方法列表中。

另外一个支持 PATCH 方法的隐含迹象是 {{HTTPHeader("Accept-Patch")}} 首部的出现，这个首部明确了服务器端可以接受的补丁文件的格式。

| Request has body                                          | Yes |
| --------------------------------------------------------- | --- |
| Successful response has body                              | No  |
| {{Glossary("Safe")}}                              | No  |
| {{Glossary("Idempotent")}}                      | No  |
| {{Glossary("Cacheable")}}                          | No  |
| Allowed in [HTML forms](/zh-CN/docs/Web/Guide/HTML/Forms) | No  |

## 语法

```plain
PATCH /file.txt HTTP/1.1
```

## 示例

### 请求

```plain
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### 响应

{{HTTPStatus("204")}} 状态码表示这是一个操作成功的响应，因为响应中不带有消息主体。

```plain
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – 用于明确服务器端可以接受的补丁文件的格式。
