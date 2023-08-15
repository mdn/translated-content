---
title: 选择 www 或非 www URL
slug: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
---

{{HTTPSidebar}}

网站所有者经常会问的一个问题是选择非 www 的还是 www 的 URL。本文提供了选择建议。

## 什么是域名？

在一个 HTTP 网址中，在开头 `http://` 或 `https://` 后的第一个子字符串称为域名。该域名被托管到了文档所在的服务器。

一个服务器不一定是一个独立的物理机：几个服务器可以驻留在同一台物理机器上。此外，一个服务器可以通过多台机器进行处理，协作处理响应或平衡它们之间的请求负载。重点在于，从语义上去理解，_一个域名代表一个单独的服务器_。

## 那么，我只能选择其中一个做为我的网站的网址？

- **是的**，你必须选择其中之一，且一直使用。你可以任选一个作为规范域名，但选好后就要保持下去。这样，无论是对用户，还是对搜索引擎，你的网站能保持更好的一致性。这包括始终链接到所选域名（如果你在网站中使用相对网址，这不应该很难），以及在分享链接时（比如通过电子邮件/社交网络等）始终使用同一个域名。
- **不必**，你可以两个都采用。关键是，你要明确且始终将其中一个作为官方域名，**这个官方域名被称为*规范*名称**。你所有的绝对链接应该使用它。但即便如此，另一个域名仍可以起作用：HTTP 有两种可用的技术，它们可以向你的用户——或是搜索引擎——说明哪一个是规范域名，同时也能让非规范域名起作用并提供用户期待的页面。

所以，选择其中一个作为你的规范域名！下面有两种技术允许非规范域名仍然起作用。

## 规范网址方式

下面有不同的方式来指定哪个网址是*规范的*。

### 使用 HTTP 301 重定向

在这种情况下，你需要配置接收 HTTP 请求的那台服务器（一般来说 www 和非 www 网址在同一台），让其用恰当的 HTTP {{HTTPStatus(301)}} 响应来应答所有发往非规范的域名的请求。这会将尝试使访问非规范网址的浏览器重定向到其规范的等效网址。例如，选择了非 www 网址作为规范网址后，所有向 www 网址的请求，都应该被重定向到不含 www 的等效网址。

例如：

1. 服务器收到向 `http://www.example.org/whaddup` 的请求（当规范域名是 example.org 时）。
2. 服务器回应代码 {{HTTPStatus(301)}}，以及标头 `{{HTTPHeader("Location")}}: http://example.org/whaddup`。
3. 该客户端向规范域名下的地址——`http://example.org/whaddup`——发送请求。

[HTML5 boilerplate project](https://github.com/h5bp/html5-boilerplate) 中的一个例子演示了[如何配置一台 Apache 服务器将一个域名重定向到另一个](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258)。

### 使用 \<link rel="canonical">

将一个特殊的 HTML {{HTMLElement("link")}} 元素添加到网页，就能指明网页的规范地址。它对页面的普通读者没有影响，但会告诉搜索引擎爬虫这个页面实际在哪。这样一来，搜索引擎不会对同一页面索引多次——这可能导致页面被视为重复内容或垃圾内容，甚至于搜索引擎结果中会删除你的页面或者降低你的排名。

当加入这个标签，在两个域名中提供相同的内容，会告诉搜索引擎哪个域名是规范的。以前面的例子为例，`http://www.example.org/whaddup` 将提供与 `http://example.org/whaddup` 相同的内容，但有一个额外的 {{HTMLElement("link")}} 头部元素：

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

与前一种方法不同的是，在浏览器历史记录中非 www 和 www 的网址是独立的条目。

## 使你页面都有效

有了这些技术，你可以配置服务器对 www 前缀和非 www 前缀的域名进行正确的响应。你无法预测用户会在浏览器地址栏输入哪个 URL，你需要做的就是选择一个作为你的规范地址，然后将另一个地址重定向到它。

## 根据情况决定

可以认为这是一个非常主观的[自行车棚效应](http://bikeshed.com/)。如果你想更深入地阅读，这里有一些资源：

- www.netlify.com 上的[使用裸域名的选项](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains)（2020）
- www.wpbeginner.com 上的 [WWW 和非 WWW——哪个更适合 WordPress 的 SEO？](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/)（2023）

## 参见

- [有关人们在地址栏中输入内容的统计信息](http://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/)（2011）
