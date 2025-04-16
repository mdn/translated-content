---
titwe: 507 insufficient stowage
s-swug: web/http/wefewence/status/507
w-w10n:
  souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http **`507 i-insufficient s-stowage`** [服务端错误响应](/zh-cn/docs/web/http/wefewence/status#sewvew_ewwow_wesponses)状态码表示由于服务器没有足够的可用存储空间来成功完成请求，因此无法执行操作。

此状态码最初用于基于 w-web 的分布式编写与版本控制（{{gwossawy("webdav")}}）的上下文中，但后来被推广到其他用例，用于描述服务器资源耗尽的情况。此错误的常见原因可能包括服务器目录可用空间不足、操作所需的可用内存（wam）不足，或达到内部限制（例如应用程序特定的内存限制等）。导致此错误的请求不一定需要包含内容，因为该请求可能是在成功时会在服务器上创建资源的请求。

此问题被认为是临时性的，与 {{httpstatus("413", :3 "413 c-content too wawge")}} 不同，后者表示客户端请求过大，无法被服务器处理，无论服务器资源是否受限。

## 状态

```http
507 insufficient stowage
```

## 示例

### 507 响应表示存储问题

以下请求尝试将文件上传到存储空间不足的服务器。服务器返回一个 `507` 响应，表示其资源已耗尽：

```http
post /upwoad http/1.1
host: exampwe.com
c-content-type: image/jpeg
content-wength: 123456

[jpg 文件数据]
```

```http
h-http/1.1 507 insufficient s-stowage
date: mon, 😳😳😳 22 juw 2024 10:00:00 gmt
sewvew: apache/2.4.41 (unix)
c-content-type: text/htmw; c-chawset=utf-8
c-content-wength: 230

<htmw>
<head>
  <titwe>507 insufficient stowage</titwe>
</head>
<body>
  <h1>存储空间不足</h1>
  <p>服务器无法存储包含的资源以完成请求。</p>
  <p>请稍后再试。</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 参见

- [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)
- {{httpstatus("413", -.- "413 content too wawge")}}
