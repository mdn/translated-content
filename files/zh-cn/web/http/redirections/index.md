---
title: HTTP 的重定向
slug: Web/HTTP/Redirections
---

{{HTTPSidebar}}

URL 重定向，也称为 URL 转发，是一种当实际资源，如单个页面、表单或者整个 Web 应用被迁移到新的 URL 下的时候，保持（原有）链接可用的技术。HTTP 协议提供了一种特殊形式的响应—— HTTP 重定向（HTTP redirects）来执行此类操作。

重定向可实现许多目标：

- 站点维护或停机期间的临时重定向。
- 永久重定向将在更改站点的 URL，上传文件时的进度页等之后保留现有的链接/书签。
- 上传文件时的表示进度的页面。

## 原理

在 HTTP 协议中，重定向操作由服务器通过发送特殊的响应（即 redirects）而触发。HTTP 协议的重定向响应的状态码为 3xx。

浏览器在接收到重定向响应的时候，会采用该响应提供的新的 URL，并立即进行加载；大多数情况下，除了会有一小部分性能损失之外，重定向操作对于用户来说是不可见的。

![](httpredirect.png)

不同类型的重定向映射可以划分为三个类别：

1. [永久重定向](/zh-CN/docs/Web/HTTP/Redirections#Permanent_redirections)
2. [临时重定向](/zh-CN/docs/Web/HTTP/Redirections#Temporary_redirections)
3. [特殊重定向](/zh-CN/docs/Web/HTTP/Redirections#Special_redirections)

### 永久重定向

这种重定向操作是永久性的。它表示原 URL 不应再被使用，而应该优先选用新的 URL。搜索引擎机器人会在遇到该状态码时触发更新操作，在其索引库中修改与该资源相关的 URL。

| 编码  | 含义               | 处理方法                                                                                                                 | 典型应用场景                                               |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| `301` | Moved Permanently  | {{HTTPMethod("GET")}} 方法不会发生变更，其他方法有可能会变更为 {{HTTPMethod("GET")}} 方法。[\[1\]](#attr1) | 网站重构。                                                 |
| `308` | Permanent Redirect | 方法和消息主体都不发生变化。                                                                                             | 网站重构，用于非 GET 方法。(with non-GET links/operations) |

\[1] 该规范无意使方法发生改变，但在实际应用中用户代理会这么做。308 状态码被创建用来消除在使用非 GET 方法时的歧义行为。

### 临时重定向

有时候请求的资源无法从其标准地址访问，但是却可以从另外的地方访问。在这种情况下可以使用临时重定向。

搜索引擎不会记录该新的、临时的链接。在创建、更新或者删除资源的时候，临时重定向也可以用于显示临时性的进度页面。

| 编码  | 含义                 | 处理方法                                                                                                                 | 典型应用场景                                                                                                                                   |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}} 方法不会发生变更，其他方法有可能会变更为 {{HTTPMethod("GET")}} 方法。[\[2\]](#attr2) | 由于不可预见的原因该页面暂不可用。在这种情况下，搜索引擎不会更新它们的链接。                                                                   |
| `303` | `See Other`          | {{HTTPMethod("GET")}} 方法不会发生变更，其他方法会**变更**为 GET 方法（消息主体会丢失）。                         | 用于{{HTTPMethod("PUT")}} 或 {{HTTPMethod("POST")}} 请求完成之后进行页面跳转来防止由于页面刷新导致的操作的重复触发。              |
| `307` | `Temporary Redirect` | 方法和消息主体都不发生变化。                                                                                             | 由于不可预见的原因该页面暂不可用。在这种情况下，搜索引擎不会更新它们的链接。当站点支持非 GET 方法的链接或操作的时候，该状态码优于 302 状态码。 |

\[2] 该规范无意使方法发生改变，但在实际应用中用户代理会这么做。307 状态码被创建用来消除在使用非 GET 方法时的歧义行为。

### 特殊重定向

除了上述两种常见的重定向之外，还有两种特殊的重定向。{{HTTPStatus("304")}}（Not Modified，资源未被修改）会使页面跳转到本地陈旧的缓存版本当中（该缓存已过期 (?)），而 {{HTTPStatus("300")}}（Multiple Choice，多项选择）则是一种手工重定向：以 Web 页面形式呈现在浏览器中的消息主体包含了一个可能的重定向链接的列表，用户可以从中进行选择。

| 编码  | 含义              | 典型应用场景                                                                                                           |
| ----- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choice` | 不常用：所有的选项在消息主体的 HTML 页面中列出。鼓励在 {{HTTPHeader("Link")}} 头部加入机器可读的 `rel=alternate` |
| `304` | `Not Modified`    | 发送用于重新验证的条件请求。表示缓存的响应仍然是新鲜的并且可以使用。                                                   |

## 设定重定向映射的其他方法

HTTP 协议中重定向机制并非唯一的重定向映射的方式。其他两种方法包括：

1. 借助 HTML 的 meta 元素的 HTML 重定向机制
2. 借助 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 的 JavaScript 重定向机制。

### HTML 重定向机制

HTTP 协议中重定向机制是应该优先采用的创建重定向映射的方式，但是有时候 Web 开发者对于服务器没有控制权，或者无法对其进行配置。针对这些特定的应用情景，Web 开发者可以在精心制作的 HTML 页面的 {{HTMLElement("head")}} 部分添加一个 {{HTMLElement("meta")}} 元素，并将其 {{htmlattrxref("http-equiv", "meta")}} 属性的值设置为 `refresh` 。当显示页面的时候，浏览器会检测该元素，然后跳转到指定的页面。

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=http://example.com/" />
</head>
```

{{htmlattrxref("content")}} 属性的值开头是一个数字，指示浏览器在等待该数字表示的秒数之后再进行跳转。建议始终将其设置为 0 来获取更好的无障碍。

显然，该方法仅适用于 HTML 页面（或类似的页面），然而并不能应用于图片或者其他类型的内容。

> **备注：** 注意这种机制会使浏览器的回退按钮失效：可以返回含有这个头部的页面，但是又会立即跳转。

### JavaScript 重定向机制

在 JavaScript 中，重定向机制的原理是设置 {{domxref("window.location")}} 的属性值，然后加载新的页面。

```js
window.location = "http://example.com/";
```

与 HTML 重定向机制类似，这种方式并不适用于所有类型的资源，并且显然只有在支持 JavaScript 的客户端上才能使用。另外一方面，它也提供了更多的可能性，比如在只有满足了特定的条件的情况下才可以触发重定向机制的场景。

### 优先级

由于存在上述三种 URL 重定向机制，那么在多种方法同时设定的情况下，哪种方法会首先起作用呢？优先级顺序如下：

1. HTTP 协议的重定向机制永远最先触发，即便是在没有传送任何页面——也就没有页面被（客户端）读取——的情况下。
2. HTML 的重定向机制 ({{HTMLElement("meta")}}) 会在 HTTP 协议重定向机制未设置的情况下触发。
3. JavaScript 的重定向机制总是作为最后诉诸的手段，并且只有在客户端开启了 JavaScript 的情况下才起作用。

任何情况下，只要有可能，就应该采用 HTTP 协议的重定向机制，而不要使用 {{HTMLElement("meta")}} 标签。假如开发人员修改了 HTTP 重定向映射而忘记修改 HTML 页面的重定向映射，那么二者就会不一致，最终结果或者出现无限循环，或者导致其他噩梦的发生。

## 应用场景

有以下几种应用场景可以使用重定向机制，但是需要注意应该尽可能地限制其使用数量，因为每一次重定向都会带来性能上的开销。

### 域名别称

理想情况下，一项资源只有一个访问位置，也就是只有一个 URL。但是由于种种原因，需要为资源设定不同的名称（即不同的域名，例如带有和不带有 www 前缀的 URL，以及简短易记的 URL 等）。在这种情况下，实用的方法是将其重定向到那个实际的（标准的）URL，而不是复制资源。

在以下几种情况下可以使用域名别称：

- 扩大站点的用户覆盖面。
  - : 一个常见的场景是，假如站点位于 `www.example.com` 域名下，那么通过 `example.com` 也应该可以访问到。这种情况下，可以建立从 `example.com` 的页面到 `www.example.com` 的重定向映射。此外还可以提供常见的同义词，或者该域名容易导致的拼写错误的域名别称。
- 迁移到另外一个域名。
  - : 例如，公司改名后，你希望用户在搜索旧名称的时候，依然可以访问到应用了新名称的站点。
- 强制使用 HTTPS 协议。
  - : 对于 HTTP 版本站点的请求会被重定向至采用了 HTTPS 协议的版本。

### 保持链接有效

当你重构 Web 站点的时候，资源的 URL 会发生改变。即便是你可以更新站点内部的链接来适应新的命名体系，但无法控制被外部资源使用的 URL。

你并不想因此而使旧链接失效，因为它们会为你带来宝贵的用户（并且帮助优化你的 SEO），所以需要建立从旧链接到新链接的重定向映射。

> **备注：** 即便是这项技术可以同样应用于内部链接，但是应该尽量避免内部重定向映射。重定向机制会带来相当大的性能开销（额外的 HTTP 请求），所以如果你可以通过修复链接来避免的话，那么就应该将其修复。

### 对于不安全请求的临时响应

不安全（{{Glossary("safe", "Unsafe")}}）请求会修改服务器端的状态，应该避免用户无意的重复操作。

通常，你并不想要你的用户重复发送 {{HTTPMethod("PUT")}}、{{HTTPMethod("POST")}} 或 {{HTTPMethod("DELETE")}} 请求。假如你仅仅为该类请求返回响应的话，简单地点击刷新按钮就会（可能会有一个确认信息）导致请求的重复发送。

在这种情况下，服务器可以返回一个 {{HTTPStatus("303")}} (See Other) 响应，其中含有合适的响应信息。如果刷新按钮被点击的话，只会导致该页面被刷新，而不会重复提交不安全的请求。

### 对于耗时请求的临时响应

一些请求的处理会需要比较长的时间，比如有时候 {{HTTPHeader("DELETE")}} 请求会被安排为稍后处理。在这种情况下，会返回一个 {{HTTPStatus("303")}} (See Other) 重定向响应，该响应链接到一个页面，表示请求的操作已经被列入计划，并且最终会通知用户操作的进展情况，或者允许用户将其取消。

## 在通用服务器中配置重定向

### Apache

重定向映射可以在服务器的配置文件中设置，也可以在每一个文件目录的 .htaccess 文件中设置。

[mod_alias](https://httpd.apache.org/docs/current/mod/mod_alias.html) 模块提供了 `Redirect` 和 `Redirect_Match` 两种指令来设置 {{HTTPStatus("302")}} 响应（默认值）：

```plain
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

URL `https://example.com/` 会被重定向至 `https://www.example.com/` ，URL 下的任何文件或目录也将重定向到该 URL（`https://example.com/some-page` 将重定向至 `https://www.example.com/some-page`）。

`Redirect_Match` 指令的功能与之类似，不同之处在于它可以通过[正则表达式](/zh-CN/docs/Glossary/Regular_expression)来指定一批受影响的 URL：

```plain
RedirectMatch ^/images/(.*)$ http://images.example.com/$1
```

位于 `images/` 文件夹下的所有文档都会被重定向至新的域名。

如果你不想要设置临时跳转，那么可是使用额外的参数（使用 HTTP 状态码或者 permanent 关键字）来进行设置：

```plain
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

[mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) 模块也可以用来设置重定向映射。它应用起来更灵活，但也更加复杂。

### Nginx

在 Nginx 中，你可以创建一个服务器模块来进行重定向设置：

```plain
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

可以使用 rewrite 指令来针对一个文件目录或者一部分页面应用重定向设置：

```plain
rewrite ^/images/(.*)$ http://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ http://images.example.com/$1 permanent;
```

### IIS

在 IIS 中，你可以使用 [`<httpRedirect>`](https://www.iis.net/configreference/system.webserver/httpredirect) 元素来配置重定向映射。

## 重定向死锁（循环）

当后续的重定向路径重复之前的路径的时候，重定向循环就产生了。换句话说，就是陷入了无限循环当中，不会有一个最终的页面返回。

大多数情况下，这属于服务器端错误。如果服务器检测不到，就会返回 {{HTTPStatus("500")}} `Internal Server Error` 。假如你在修改了服务器配置不久就出现了这个问题，八成是遇到了重定向循环。

有时候，服务器端无法对其进行检测：重定向循环发生于多台服务器之间，对于每一台服务器来说，都无法获得一个全景图。在这种情况下，浏览器会负责进行检测，然后返回错误信息。Firefox 会呈现如下信息：

```plain
Firefox has detected that the server is redirecting the request for this address in a way that will never complete.
Firefox 检测到服务器正在试图将请求进行重定向，而这种重定向永远不会完结。
```

而 Chrome 则会呈现如下信息：

```plain
This Webpage has a redirect loop
本页面包含有重定向循环。
```

无论哪个场景，用户对此都无能为力 (除非客户端发生突变，比如说缓存或者 Cookie 不匹配)

避免重定向循环非常重要，因为它会完全毁掉用户的体验。
