---
title: HTTP 身份验证
slug: Web/HTTP/Authentication
---

{{HTTPSidebar}}

HTTP 提供一个用于权限控制和认证的通用框架。本页介绍了通用的 HTTP 认证框架，并且展示了如何通过 HTTP 的“Basic”模式限制对你服务器的访问。

## 通用的 HTTP 认证框架

{{RFC("7235")}} 定义了一个 HTTP 身份验证框架，服务器可以用来质询（{{glossary("challenge")}}）客户端的请求，客户端则可以提供身份验证凭据。

质询与响应的工作流程如下：

1. 服务器端向客户端返回 {{HTTPStatus("401")}}（Unauthorized，未被授权的）响应状态码，并在 {{HTTPHeader("WWW-Authenticate")}} 响应标头提供如何进行验证的信息，其中至少包含有一种质询方式。
2. 之后，想要使用服务器对自己身份进行验证的客户端，可以通过包含凭据的 {{HTTPHeader("Authorization")}} 请求标头进行验证。
3. 通常，客户端会向用户显示密码提示，然后发送包含正确的 `Authorization` 标头的请求。

![](http-auth-sequence-diagram.png)

上述整体的信息流程，对于大多数（并非是全部）[身份验证方案](#身份验证方案)都是相同的。标头中的真实信息和编码的方式确实发生了变化。

> **警告：** 上图使用的“Basic”身份验证方案会对凭据进行编码，但是并不会进行加密。除非信息交换通过安全的连接（HTTPS/TLS），否则这件事极其不安全的。

### 代理认证

与上述同样的询问质疑和响应原理适用于代理认证。由于资源认证和代理认证可以并存，区别于独立的标头和响应状态码。对于代理，询问质疑的状态码是 {{HTTPStatus("407")}}（必须提供代理证书），响应标头 {{HTTPHeader("Proxy-Authenticate")}} 至少包含一个可用的质询，并且请求标头 {{HTTPHeader("Proxy-Authorization")}} 用作向代理服务器提供凭据。

### 禁止访问

如果（代理）服务器收到*无效*的凭据，它应该响应 {{HTTPStatus("401")}} `Unauthorized` 或 {{HTTPStatus("407")}} `Proxy Authentication Required`，用户可以发送新的请求或替换 {{HTTPHeader("Authorization")}} 标头字段。

如果（代理）服务器接受的有效凭据**不足以**访问给定的资源，服务器将响应 {{HTTPStatus("403")}} `Forbidden` 状态码。与 {{HTTPStatus("401")}} `Unauthorized` 或 {{HTTPStatus("407")}} `Proxy Authentication Required` 不同的是，该用户无法进行身份验证并且浏览器不会提出新的的尝试。

在所有情况下，服务器更可能返回 {{HTTPStatus("404")}} `Not Found` 状态码，以向没有足够权限或者未正确身份验证的用户隐藏页面的存在。

### 跨源图片认证

一个被浏览器最近修复了的潜在的安全漏洞是跨站点图片的认证。从 [Firefox 59](/zh-CN/Firefox/Releases/59) 起，浏览器在从不同源的加载图片资源到当前的文档时，将不会再触发 HTTP 认证对话框（[Firefox bug 1423146](https://bugzil.la/1423146)），如果攻击者可以将任意图片嵌入到第三方页面中，禁止触发 HTTP 认证对话框可避免用户的身份凭据被窃取。

### HTTP 认证的字符编码

浏览器使用 `utf-8` 编码用户名和密码。

Firefox 曾使用 `ISO-8859-1`，但为与其他浏览器保持一致改为 `utf-8`，也为了避免 [Firefox bug 1419658](https://bugzil.la/1419658) 中所描述的潜在问题。

### WWW-Authenticate 与 Proxy-Authenticate 标头

{{HTTPHeader("WWW-Authenticate")}} 与 {{HTTPHeader("Proxy-Authenticate")}} 响应标头指定了为获取资源访问权限而进行身份验证的方法。它们需要明确要进行验证的方案，这样希望进行授权的客户端就知道该如何提供凭据。

这两个标头的语法形式如下：

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

在这里，`<type>` 指的是验证的方案（“Basic”是最常见的验证方案，[会在下面进行介绍](/zh-CN/docs/Web/HTTP/Authentication#Basic_authentication_scheme)）。realm 用来描述进行保护的区域，或者指代保护的范围。它可以是类似于“Access to the staging site”的消息，这样用户就可以知道他们正在试图访问哪一空间。

### Authorization 与 Proxy-Authorization 标头

{{HTTPHeader("Authorization")}} 与 {{HTTPHeader("Proxy-Authorization")}} 请求标头包含有用来向（代理）服务器证明用户代理身份的凭据。这里同样需要指明验证的 `<type>`，其后跟有凭据信息，该凭据信息可以被编码或者加密，取决于采用的是哪种验证方案。

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### 身份验证方案

通用 HTTP 身份验证框架可以被多个验证方案使用。不同的验证方案会在安全强度以及在客户端或服务器端软件中可获得的难易程度上有所不同。

IANA 维护了[一系列的验证方案](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)，除此之外还有其他类型的验证方案由虚拟主机服务提供，例如 Amazon AWS。

常见的验证方案包括：

- **Basic**
  - : 参见 {{rfc(7617)}}，base64 编码凭据。详情请参阅下文。
- **Bearer**
  - : 参见 {{rfc(6750)}}，bearer 令牌通过 OAuth 2.0 保护资源。
- **Digest**
  - : 参见 {{rfc(7616)}}，Firefox 93 及更高版本支持 SHA-256 算法。以前的版本仅支持 MD5 散列（不建议）。
- **HOBA**
  - : 参见 {{rfc(7486)}}，阶段三，**H**TTP **O**rigin-**B**ound 认证，基于数字签名。
- **Mutual**
  - : 参见 {{rfc(8120)}}
- **Negotiate** / **NTLM**
  - : 参见 [RFC4599](https://www.ietf.org/rfc/rfc4559.txt)
- **VAPID**
  - : 参见 {{rfc(8292)}}
- **SCRAM**
  - : 参见 {{rfc(7804)}}
- **AWS4-HMAC-SHA256**
  - : 参见 [AWS 文档](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)。此方案用于 AWS3 服务器验证。

方案在安全强度以及在客户端或服务器软件中的可用性方面可能有所不同。

“Basic”身份验证方案安全性很差，但得到了广泛的支持且易于设置。下文将更详细地介绍它。

## Basic 验证方案

“Basic”HTTP 验证方案是在 {{rfc(7617)}} 中规定的，在该方案中，使用用户的 ID/密码作为凭据信息，并且使用 base64 算法进行编码。

### Basic 验证方案的安全性

由于用户 ID 与密码是是以明文的形式在网络中进行传输的（尽管采用了 base64 编码，但是 base64 算法是可逆的），所以基本验证方案并**不安全**。basic 验证方案应与 HTTPS/TLS 协议搭配使用。假如没有这些安全方面的增强，那么 basic 验证方案不应该被来用保护敏感或者极具价值的信息。

### 使用 Apache 限制访问和 basic 身份验证

要对 Apache 服务器上的目录进行密码保护，你需要一个 `.htaccess` 和 a `.htpasswd` 文件。

该 `.htaccess` 文件格式通常看起来像这样：

```plain
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

该 `.htaccess` 文件引用一个 `.htpasswd` 文件，其中每行用冒号（`:`）分隔的用户名和密码。你不能看到真实的密码因为它们是[散列](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html)（在这个例子中是使用了 MD5）。你可以命名 `.htpasswd` 文件为你所喜欢的名字，但是应该保证这个文件不被其他人访问。(Apache 通常配置阻止访问 `.ht*` 类的文件).

```plain
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### nginx 访问限制和 basic 认证

在 nginx 配置中，你需要指定一个要保护的 location 并且 `auth_basic` 指令提供密码保护区域的名称。

`auth_basic_user_file` 指令指定包含加密的用户凭据 `.htpasswd` 文件，就像上面的 apache 例子。

```plain
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### 使用 URL 中的身份凭据进行的访问

许多客户端同时支持避免弹出登录框，而是使用包含用户名和密码的经过编码的 URL，如下所示：

```plain example-bad
https://username:password@www.example.com/
```

**这种 URL 已被弃用**。在 Chrome 中，URL 中的 `username:password@` 部分甚至会因为安全原因而被[移除](https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7)。Firefox 则会检查该站点是否真的需要身份验证，假如不是，则会弹出一个警告窗口：你即将使用用户名 `username` 登录 `www.example.com` 站点，但是该站点不需要进行身份验证。这可能是在试图进行欺诈。

## 参见

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}、{{HTTPStatus("403")}}、{{HTTPStatus("407")}}
