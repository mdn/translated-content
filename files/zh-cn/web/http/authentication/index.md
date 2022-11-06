---
title: HTTP 身份验证
slug: Web/HTTP/Authentication
---

{{HTTPSidebar}}

HTTP 提供一个用于权限控制和认证的通用框架。最常用的 HTTP 认证方案是 HTTP Basic authentication。本页介绍了通用的 HTTP 认证框架以及展示如何通过 HTTP Basic authentication 来限制权限访问您的服务器。

## 通用的 HTTP 认证框架

{{RFC("7235")}} 定义了一个 HTTP 身份验证框架，服务器可以用来针对客户端的请求发送 {{glossary("challenge")}}（质询信息），客户端则可以用来提供身份验证凭证。质询与应答的工作流程如下：服务器端向客户端返回 {{HTTPStatus("401")}}（Unauthorized，未被授权的）状态码，并在 {{HTTPHeader("WWW-Authenticate")}} 首部提供如何进行验证的信息，其中至少包含有一种质询方式。之后有意向证明自己身份的客户端可以在新的请求中添加 {{HTTPHeader("Authorization")}} 首部字段进行验证，字段值为身份验证凭证信息。通常客户端会弹出一个密码框让用户填写，然后发送包含有恰当的 `Authorization` 首部的请求。

![](http-auth-sequence-diagram.png)

在上图所示的基本身份验证过程中，信息交换须通过 HTTPS(TLS) 连接来保证安全。

### 代理认证

与上述同样的询问质疑和响应原理适用于代理认证。下面介绍一个中间代理需要认证的例子。资源认证和代理认证可以并存，区别于独立的头信息和响应状态码。代理认证，询问质疑的状态码是 {{HTTPStatus("407")}}（必须提供代理证书），响应头{{HTTPHeader("Proxy-Authenticate")}}至少包含一个可用的质制，并且请求头{{HTTPHeader("Proxy-Authorization")}}用作提供证书给代理服务器。

### 访问拒绝

当（代理）服务器收到一个合法认证信息时，若该认证不能获取请求资源的权限，（代理）服务器会返回{{HTTPStatus("403")}}响应状态，说明用户证书权限不够，与 {{HTTPStatus("401")}} 未认证和 {{HTTPStatus("407")}} 未代理认证不同。

### 跨域图片认证

一个被浏览器最近修复了的潜在的安全漏洞是跨域图片的认证。从 [Firefox 59](/zh-CN/Firefox/Releases/59) 起，浏览器在加载不同域的图片资源时，将不会再弹出 HTTP 认证对话框（{{bug(1423146)}}）。如果攻击者可以将任意图片嵌入到第三方页面中，禁止弹出 HTTP 认证对话框可避免用户的身份凭证被窃取。

### HTTP 认证的字符编码

浏览器使用 `utf-8` 编码用户名和密码。Firefox 曾使用 `ISO-8859-1`，但为与其他浏览器保持一致改为 `utf-8`，也为了避免 {{bug(1419658)}} 中所描述的潜在问题。

### `WWW-Authenticate` 与 `Proxy-Authenticate` 首部

{{HTTPHeader("WWW-Authenticate")}} 与 {{HTTPHeader("Proxy-Authenticate")}} 响应消息首部指定了为获取资源访问权限而进行身份验证的方法。它们需要明确要进行验证的方案，这样希望进行授权的客户端就知道该如何提供凭证信息。这两个首部的语法形式如下：

```plain
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

在这里，\<type> 指的是验证的方案（“基本验证方案”是最常见的验证方案，[会在下面进行介绍](/zh-CN/docs/Web/HTTP/Authentication#Basic_authentication_scheme)）。realm 用来描述进行保护的区域，或者指代保护的范围。它可以是类似于 "Access to the staging site" 的消息，这样用户就可以知道他们正在试图访问哪一空间。

### `Authorization` 与 `Proxy-Authorization` 首部

{{HTTPHeader("Authorization")}} 与 {{HTTPHeader("Proxy-Authorization")}} 请求消息首部包含有用来向（代理）服务器证明用户代理身份的凭证。这里同样需要指明验证的类型，其后跟有凭证信息，该凭证信息可以被编码或者加密，取决于采用的是哪种验证方案。

```plain
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### 验证方案

通用 HTTP 身份验证框架可以被多个验证方案使用。不同的验证方案会在安全强度以及在客户端或服务器端软件中可获得的难易程度上有所不同。

最常见的验证方案是“基本验证方案”（"Basic"），该方案会在下面进行详细阐述。IANA 维护了[一系列的验证方案](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)，除此之外还有其他类型的验证方案由虚拟主机服务提供，例如 Amazon AWS。常见的验证方案包括：

- **Basic** (查看 {{rfc(7617)}}，base64 编码凭证。详情请参阅下文.),
- **Bearer** (查看 {{rfc(6750)}}，bearer 令牌通过 OAuth 2.0 保护资源),
- **Digest** (查看 {{rfc(7616)}}，只有 md5 散列 在 Firefox 中支持，查看 {{bug(472823)}} 用于 SHA 加密支持),
- **HOBA** (查看 {{rfc(7486)}}（草案），**H**TTP **O**rigin-**B**ound 认证，基于数字签名),
- **Mutual** (查看 [draft-ietf-httpauth-mutual](https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11)),
- **AWS4-HMAC-SHA256** (查看 [AWS docs](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)).

## 基本验证方案

"Basic" HTTP 验证方案是在 {{rfc(7617)}}中规定的，在该方案中，使用用户的 ID/密码作为凭证信息，并且使用 base64 算法进行编码。

### 基本验证方案的安全性

由于用户 ID 与密码是是以明文的形式在网络中进行传输的（尽管采用了 base64 编码，但是 base64 算法是可逆的），所以基本验证方案并不安全。基本验证方案应与 HTTPS / TLS 协议搭配使用。假如没有这些安全方面的增强，那么基本验证方案不应该被来用保护敏感或者极具价值的信息。

### 使用 Apache 限制访问和基本身份验证

要对 Apache 服务器上的目录进行密码保护，你需要一个 `.htaccess` 和 a `.htpasswd` 文件。

该 `.htaccess` 文件格式通常看起来像这样：

```plain
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

该 `.htaccess` 文件引用一个 `.htpasswd` 文件，其中每行用冒号（“：”）分隔的用户名和密码。你不能看到真实的密码因为它们是 [encrypted](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (在这个例子中是使用了 MD5). 你可以命名`.htpasswd` 文件 为你所喜欢的名字，但是应该保证这个文件不被其他人访问。(Apache 通常配置阻止访问 `.ht*` 类的文件).

```plain
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### nginx 访问限制和基本认证

在 nginx 配置中，对需要保护的 location 你需要做如下配置：`auth_basic 指令提供密码保护域的名称；auth_basic_user_file 指令指定包含用户密文的证书的文件（与 apache 例子中一致）`

在 nginx 中，你需要指定一个保护区域和该 `auth_basic` 指令提供的保护区域名字。然后该 `auth_basic_user_file` 指令指向一个`.htpasswd` 包含加密用户凭据的文件，就像上面的 apache 例子。

```plain
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### 使用 URL 中的身份凭证进行的访问（~~已废弃~~）

许多客户端同时支持避免弹出登录框，而是使用包含用户名和密码的经过编码的 URL，如下所示：

```plain example-bad
https://username:password@www.example.com/
```

**这种 URL 是不赞成使用的。**在 Chrome 中，URL 中的 username:password@ 部分甚至会因为安全原因而被移除。Firefox 则会检查该站点是否真的需要身份验证，假如不是，则会弹出一个警告窗口：你即将使用用户名“username”登录”www\.example.com“站点，但是该站点不需要进行身份验证。这可能是在试图进行欺诈。

## 相关内容

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
