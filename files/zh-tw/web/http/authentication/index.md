---
title: HTTP authentication
slug: Web/HTTP/Authentication
---

{{HTTPSidebar}}

HTTP 提供一個用來存取控制及身分驗證框架. 最普遍的 HTTP 身分驗證是基於"Basic" schema. 本頁將介紹 HTTP framework for authentication 以及如何限制存取你的伺服器 and HTTP "Basic" schema.

## The general HTTP authentication framework

{{RFC("7235")}} 定義了 HTTP 身分驗證框架，它可以被使用於 server to {{glossary("challenge")}} a client request 以及 client 提供身分驗證資訊. The challenge and response flow works like this: The server responds to a client with a {{HTTPStatus("401")}} (Unauthorized) response status and provides information on how to authorize with a {{HTTPHeader("WWW-Authenticate")}} response header containing at least one challenge. A client that wants to authenticate itself with a server can then do so by including an {{HTTPHeader("Authorization")}} request header field with the credentials. Usually a client will present a password prompt to the user and will then issue the request including the correct `Authorization` header.

![](http-auth-sequence-diagram.png)

In the case of a "Basic" authentication like shown in the figure, the exchange **must** happen over an HTTPS (TLS) connection to be secure.

### Proxy authentication

The same challenge and response mechanism can be used for _proxy authentication_. In this case, it is an intermediate proxy that requires authentication. As both resource authentication and proxy authentication can coexist, a different set of headers and status codes is needed. In the case of proxies, the challenging status code is {{HTTPStatus("407")}} (Proxy Authentication Required), the {{HTTPHeader("Proxy-Authenticate")}} response header contains at least one challenge applicable to the proxy, and the {{HTTPHeader("Proxy-Authorization")}} request header is used for providing the credentials to the proxy server.

### Access forbidden

If a (proxy) server receives valid credentials that are not adequate to gain access for a given resource, the server should respond with the {{HTTPStatus("403")}} `Forbidden` status code. Unlike {{HTTPStatus("401")}} `Unauthorized` or {{HTTPStatus("407")}} `Proxy Authentication Required`, authentication is impossible for this user.

### Authentication of cross-origin images

A potential security hole that has recently been fixed by browsers is authentication of cross-site images. From [Firefox 59](/zh-TW/docs/Mozilla/Firefox/Releases/59) onwards, image resources loaded from different origins to the current document are no longer able to trigger HTTP authentication dialogs ([Firefox bug 1423146](https://bugzil.la/1423146)), preventing user credentials being stolen if attackers were able to embed an arbitrary image into a third-party page.

### Character encoding of HTTP authentication

Browsers use `utf-8` encoding for usernames and passwords. Firefox used to use `ISO-8859-1`, but changed over to `utf-8` for parity with other browsers, and to avoid potential problems as described in [Firefox bug 1419658](https://bugzil.la/1419658).

### `WWW-Authenticate` and `Proxy-Authenticate` headers

The {{HTTPHeader("WWW-Authenticate")}} and {{HTTPHeader("Proxy-Authenticate")}} response headers define the authentication method that should be used to gain access to a resource. They need to specify which authentication scheme is used, so that the client that wishes to authorize knows how to provide the credentials. The syntax for these headers is the following:

```plain
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Here, `<type>` is the authentication scheme ("Basic" is the most common scheme and [introduced below](/zh-TW/docs/Web/HTTP/Authentication#Basic_authentication_scheme)). The _realm_ is used to describe the protected area or to indicate the scope of protection. This could be a message like "Access to the staging site" or similar, so that the user knows to which space they are trying to get access to.

### `Authorization` and `Proxy-Authorization` headers

The {{HTTPHeader("Authorization")}} and {{HTTPHeader("Proxy-Authorization")}} request headers contain the credentials to authenticate a user agent with a (proxy) server. Here, the type is needed again followed by the credentials, which can be encoded or encrypted depending on which authentication scheme is used.

```plain
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### Authentication schemes

The general HTTP authentication framework is used by several authentication schemes. Schemes can differ in security strength and in their availability in client or server software.

The most common authentication scheme is the "Basic" authentication scheme which is introduced in more details below. IANA maintains a [list of authentication schemes](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), but there are other schemes offered by host services, such as Amazon AWS. Common authentication schemes include:

- **Basic** (see {{rfc(7617)}}, base64-encoded credentials. See below for more information.),
- **Bearer** (see {{rfc(6750)}}, bearer tokens to access OAuth 2.0-protected resources),
- **Digest** (see {{rfc(7616)}}, only md5 hashing is supported in Firefox, see [Firefox bug 472823](https://bugzil.la/472823) for SHA encryption support),
- **HOBA** (see {{rfc(7486)}} (draft), **H**TTP **O**rigin-**B**ound **A**uthentication, digital-signature-based),
- **Mutual** (see [draft-ietf-httpauth-mutual](https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11)),
- **AWS4-HMAC-SHA256** (see [AWS docs](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)).

## Basic authentication scheme

The "Basic" HTTP authentication scheme is defined in {{rfc(7617)}}, which transmits credentials as user ID/password pairs, encoded using base64.

### Security of basic authentication

As the user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme is not secure. HTTPS / TLS should be used in conjunction with basic authentication. Without these additional security enhancements, basic authentication should not be used to protect sensitive or valuable information.

### Restricting access with Apache and basic authentication

To password-protect a directory on an Apache server, you will need a `.htaccess` and a `.htpasswd` file.

The `.htaccess` file typically looks like this:

```plain
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

The `.htaccess` file references a `.htpasswd` file in which each line contains of a username and a password separated by a colon (":"). You can not see the actual passwords as they are [encrypted](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (md5 in this case). Note that you can name your `.htpasswd` file differently if you like, but keep in mind this file shouldn't be accessible to anyone. (Apache is usually configured to prevent access to `.ht*` files).

```plain
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Restricting access with nginx and basic authentication

For nginx, you will need to specify a location that you are going to protect and the `auth_basic` directive that provides the name to the password-protected area. The `auth_basic_user_file` directive then points to a .htpasswd file containing the encrypted user credentials, just like in the Apache example above.

```plain
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Access using credentials in the URL

Many clients also let you avoid the login prompt by using an encoded URL containing the username and the password like this:

```plain example-bad
https://username:password@www.example.com/
```

**The use of these URLs is deprecated**. In Chrome, the `username:password@` part in URLs is even [stripped out](https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7) for security reasons. In Firefox, it is checked if the site actually requires authentication and if not, Firefox will warn the user with a prompt "You are about to log in to the site “www\.example.com” with the username “username”, but the website does not require authentication. This may be an attempt to trick you."

## See also

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
