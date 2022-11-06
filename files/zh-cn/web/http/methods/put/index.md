---
title: PUT
slug: Web/HTTP/Methods/PUT
---

{{HTTPSidebar}}

**HTTP PUT 请求方法**使用请求中的负载创建或者替换目标资源。

`PUT` 与 {{HTTPMethod("POST")}} 方法的区别在于，PUT 方法是幂等的：调用一次与连续调用多次是等价的（即没有副作用），而连续调用多次 POST 方法可能会有副作用，比如将一个订单重复提交多次。

| Request has body                                          | Yes |
| --------------------------------------------------------- | --- |
| Successful response has body                              | No  |
| {{Glossary("Safe")}}                              | No  |
| {{Glossary("Idempotent")}}                      | Yes |
| {{Glossary("Cacheable")}}                          | No  |
| Allowed in [HTML forms](/zh-CN/docs/Web/Guide/HTML/Forms) | No  |

## 语法

```plain
PUT /new.html HTTP/1.1
```

## 示例

### 请求

```plain
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### 应答

如果目标资源不存在，并且 PUT 方法成功创建了一份，那么源头服务器必须返回{{HTTPStatus("201")}} (`Created`) 来通知客户端资源已创建。

```plain
HTTP/1.1 201 Created
Content-Location: /new.html
```

如果目标资源已经存在，并且依照请求中封装的表现形式成功进行了更新，那么，源头服务器必须返回{{HTTPStatus("200")}} (`OK`) 或者{{HTTPStatus("204")}} (`No Content`) 来表示请求的成功完成。

```plain
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
