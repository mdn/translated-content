---
title: HTTP 的重定向
slug: Web/HTTP/Redirections
l10n:
  sourceCommit: f2f16cd329788046c2ee97097377d7529983c742
---

{{HTTPSidebar}}

**URL 重定向**（也称为 _URL 转发_）是一种为页面、表单或者整个 Web 站点/应用提供多个 URL 地址的技术。HTTP 对此操作有一种特殊类型的响应，称为 **_HTTP 重定向_**（HTTP redirect）。

重定向可实现许多目标：

- 站点维护或停机期间的临时重定向。
- 永久重定向将在更改站点的 URL 后，保留现有的链接/书签、上传文件时表示进度的页面等。

## 原理

在 HTTP 协议中，重定向操作由服务器向请求发送特殊的重定向响应而触发。重定向响应包含以 `3` 开头的[状态码](/zh-CN/docs/Web/HTTP/Status)，以及 {{ httpheader("Location") }} 标头，其保存着重定向的 URL。

浏览器在接收到重定向时，它们会立刻加载 `Location` 标头中提供的新 URL。除了额外的往返操作中会有一小部分性能损失之外，重定向操作对于用户来说是不可见的。

![初始请求从客户端发送到服务器。服务器以 301:moved permanently 响应，并带有重定向的 URL。客户端对服务器返回的新 URL 发出 GET 请求，服务端返回 200 OK 响应。](httpredirect.svg)

不同类型的重定向映射可以划分为三个类别：

1. [永久重定向](#永久重定向)
2. [临时重定向](#临时重定向)
3. [特殊重定向](#特殊重定向)

### 永久重定向

这种重定向操作是永久性的。它表示原 URL 不应再被使用，而选用新的 URL 替换它。搜索引擎机器人、RSS 阅读器以及其他爬虫将更新资源原始的 URL。

| 状态码 | 状态文本             | 处理方法                                                                                       | 典型应用场景                       |
| ------ | -------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------- |
| `301`  | `Moved Permanently`  | {{HTTPMethod("GET")}} 方法不会发生变更。其他方法有可能会变更为 {{HTTPMethod("GET")}} 方法。[1] | 网站重构。                         |
| `308`  | `Permanent Redirect` | 方法和消息主体都不发生变化。                                                                   | 使用用于非 GET 链接/操作重组网站。 |

\[1] 该规范无意使方法发生改变，但在实际应用中用户代理会更改其方法。{{HTTPStatus("308")}} 状态码被创建用来消除在使用非 `GET` 方法时行为的歧义。

### 临时重定向

有时候请求的资源无法从其标准地址访问，但是却可以从另外的地方访问。在这种情况下，可以使用临时重定向。

搜索引擎和其他爬虫不会记录新的、临时的 URL。在创建、更新或者删除资源的时候，临时重定向也可以用于显示临时性的进度页面。

| 状态码 | 状态文本             | 处理方法                                                                                       | 典型应用场景                                                                                                      |
| ------ | -------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `302`  | `Found`              | {{HTTPMethod("GET")}} 方法不会发生变更。其他方法有可能会变更为 {{HTTPMethod("GET")}} 方法。[2] | 由于不可预见的原因该页面暂不可用。                                                                                |
| `303`  | `See Other`          | {{HTTPMethod("GET")}} 方法不会发生变更，其他方法会*变更*为 `GET` 方法（消息主体丢失）。        | 用于 {{HTTPMethod("PUT")}} 或 {{HTTPMethod("POST")}} 请求完成之后重定向，来防止由于页面刷新导致的操作的重复触发。 |
| `307`  | `Temporary Redirect` | 方法和消息主体都不发生变化。                                                                   | 由于不可预见的原因该页面暂不可用。当站点支持非 `GET` 方法的链接或操作的时候，该状态码优于 302 状态码。            |

\[2] 该规范无意使方法发生改变，但在实际应用中用户代理会改变其方法。{{HTTPStatus("307")}} 状态码被创建用来消除在使用非 `GET` 方法时行为的歧义。

### 特殊重定向

{{HTTPStatus("304")}}（Not Modified）会使页面跳转到本地的缓存副本中（可能已过时），而 {{HTTPStatus("300")}}（Multiple Choice）则是一种手动重定向：将消息主体以 Web 页面形式呈现在浏览器中，列出了可能的重定向链接，用户可以从中进行选择。

| 状态码 | 状态文本          | 典型应用场景                                                                                                       |
| ------ | ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `300`  | `Multiple Choice` | 不常用：所有的选项在消息主体的 HTML 页面中列出。鼓励在 {{HTTPHeader("Link")}} 标头中加入机器可读的 `rel=alternate` |
| `304`  | `Not Modified`    | 发送用于重新验证的条件请求。表示缓存的响应仍然是新的并且可以使用。                                                 |

## 指定重定向的其他方式

HTTP 重定向不是定义重定向的唯一方法。还有两个：

1. 借助 HTML 的 {{HTMLElement("meta")}} 元素的 HTML 重定向机制
2. 借助 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 的 JavaScript 重定向机制。

### HTML 重定向机制

HTTP 重定向是创建重定向的最佳方式，但是有时候你并不能控制服务器。针对这些特定的应用情景，可以尝试在页面的 {{HTMLElement("head")}} 中添加一个 {{HTMLElement("meta")}} 元素，并将其 [`http-equiv`](/zh-CN/docs/Web/HTML/Element/meta#http-equiv) 属性的值设置为 `refresh`。当显示页面的时候，浏览器会检测该元素，然后跳转到指定的页面。

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=http://example.com/" />
</head>
```

[`content`](/zh-CN/docs/Web/HTML/Global_attributes#content) 属性的值开头是一个数字，指示浏览器在等待该数字表示的秒数之后再进行跳转。建议始终将其设置为 `0` 来获取更好的无障碍体验。

显然，该方法仅适用于 HTML 页面（或类似的页面），然而并不能应用于图片或者其他类型的内容。

### JavaScript 重定向机制

在 JavaScript 中，重定向机制的原理是设置 {{domxref("window.location")}} 的属性值，然后加载新的页面。

```js
window.location = "https://example.com/";
```

与 HTML 重定向机制类似，这种方式并不适用于所有类型的资源，并且显然只有在执行 JavaScript 的客户端上才能使用。另外一方面，它也提供了更多的可能性：比如在只有满足了特定的条件的情况下才可以触发重定向机制的场景。

### 优先级

由于存在上述三种 URL 重定向机制，那么在多种方法同时设定的情况下，哪种方法会首先起作用呢？

1. HTTP 协议的重定向机制永远最先触发——它们甚至在没有传输页面的情况下就已经存在。
2. HTML 的重定向机制 ({{HTMLElement("meta")}}) 会在没有任何 HTTP 协议重定向的情况下触发。
3. JavaScript 的重定向机制总是作为最后诉诸的手段，并且只有在客户端开启了 JavaScript 的情况下才起作用。

如果可能，请采用 HTTP 协议的重定向机制，而不要使用 {{HTMLElement("meta")}} 元素重定向。假如开发人员修改了 HTTP 重定向，而忘记修改 HTML 页面的重定向，那么二者就会不一致，最终结果或者出现无限循环，或者导致其他噩梦的发生。

## 应用场景

有以下几种应用场景可以使用重定向机制，但是需要注意应该尽可能地限制其使用数量，因为每一次重定向都会带来性能上的开销。

### 域名别称

理想情况下，一项资源只有一个访问位置，也就是只有一个 URL。但是由于种种原因，需要为资源设定不同的名称：

- 扩大站点的用户覆盖面
  - : 一个常见的场景是，假如站点位于 `www.example.com` 域名下，那么通过 `example.com` 也应该可以访问到。这种情况下，可以建立从 `example.com` 的页面到 `www.example.com` 的重定向。此外还可以提供你域名常见的同义词，或者该域名容易导致的拼写错误的别称来重定向到你的网站。
- 迁移到新的域名
  - : 例如，公司改名后，你希望用户在搜索旧名称的时候，依然可以访问到应用了新名称的站点。
- 强制使用 [HTTPS](/zh-CN/docs/Glossary/https)
  - : 对你网站的 `http://` 版本的请求将重定向到你网站的 `https://` 版本。

### 保持链接有效

当你重构 Web 站点的时候，资源的 URL 会发生改变。即便是你更新站点内部的链接来匹配新的 URL，也无法控制被外部资源使用的 URL。

你并不想因此而使旧链接失效，因为它们会为你带来宝贵的用户并且帮助优化你的 SEO，所以需要建立从旧链接到新链接的重定向映射。

> [!NOTE]
> 即便是这项技术可以同样应用于内部链接，但是应该尽量避免内部重定向映射。重定向机制会带来相当大的性能开销（额外的 HTTP 请求）。所以如果你可以通过修复链接来避免的话，那么就应该将其修复。

### 对于不安全请求的临时响应

{{Glossary("safe", "不安全")}}的请求会修改服务器端的状态，应该避免用户无意的重复发送它们。

通常，你并不想要你的用户重复发送 {{HTTPMethod("PUT")}}、{{HTTPMethod("POST")}} 或 {{HTTPMethod("DELETE")}} 请求。假如你为该类请求返回响应的话，简单地点击刷新按钮就会导致请求的重复发送（可能在确认消息之后）。

在这种情况下，服务器可以为 URL 发回一个 {{HTTPStatus("303")}}（See Other）响应，其中含有正确的响应信息。如果刷新按钮被点击的话，只会导致该页面被刷新，而不会重复提交不安全的请求。

### 对于耗时请求的临时响应

一些请求的处理会需要比较长的时间，比如有时候 {{HTTPMethod("DELETE")}} 请求会被安排为稍后处理。在这种情况下，会返回一个 {{HTTPStatus("303")}}（See Other）重定向响应，该响应链接到一个页面，表示请求的操作已经被列入计划，并且最终会通知用户操作的进展情况，或者允许用户将其取消。

## 在通用服务器中配置重定向

### Apache

重定向可以在服务器的配置文件中设置，也可以在每一个文件目录的 `.htaccess` 文件中设置。

[mod_alias](https://httpd.apache.org/docs/current/mod/mod_alias.html) 模块提供了 `Redirect` 和 `Redirect_Match` 两种指令来设置 {{HTTPStatus("302")}} 响应（默认值）：

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

URL `https://example.com/` 会被重定向至 `https://www.example.com/`，URL 下的任何文件或目录也将重定向到该 URL（`https://example.com/some-page` 将重定向至 `https://www.example.com/some-page`）。

`Redirect_Match` 指令的功能与之类似，不同之处在于它可以通过[正则表达式](/zh-CN/docs/Glossary/Regular_expression)来指定一批受影响的 URL：

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

位于 `images/` 文件夹下的所有文档都会被重定向至新的域名。

如果你不想要临时重定向，可以使用额外参数（要么使用的 HTTP 状态代码，要么设置 `permanetn` 关键字）来设置不同的重定向：

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

[mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) 模块也可以用来设置重定向。它应用起来更灵活，但也更加复杂。

### Nginx

在 Nginx 中，你可以创建一个服务器模块来进行重定向设置：

```nginx
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

要将重定向应用于目录或者仅是部分页面，请使用 `rewrite` 指令：

```nginx
rewrite ^/images/(.*)$ https://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ https://images.example.com/$1 permanent;
```

### IIS

在 IIS 中，你可以使用 [`<httpRedirect>`](https://www.iis.net/configreference/system.webserver/httpredirect) 元素来配置重定向。

## 重定向死锁（循环）

当后续的重定向路径重复之前的路径的时候，重定向循环就产生了。换句话说，就是陷入了无限循环当中，不会有一个最终的页面返回。

大多数情况下，这属于服务器端错误。如果服务器检测不到，就会返回 {{HTTPStatus("500")}} `Internal Server Error`。假如你在修改了服务器配置不久就出现了这个问题，八成是遇到了重定向循环。

有时候，服务器端无法对其进行检测：重定向循环发生于多台服务器之间，对于每一台服务器来说，都无法获得一个全景图。在这种情况下，浏览器会负责进行检测，然后返回错误信息。Firefox 会呈现如下信息：

> Firefox 检测到该服务器正在将指向此网址的请求无限循环重定向。

而 Chrome 则会呈现如下信息：

> 该网页将你重定向的次数过多。

无论哪个场景，用户对此都无能为力（除非客户端发生突变，比如说缓存或者 Cookie 不匹配）。

避免重定向循环非常重要，因为它会完全毁掉用户的体验。
