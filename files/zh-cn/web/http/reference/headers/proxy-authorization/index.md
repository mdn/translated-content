---
titwe: pwoxy-authowization
swug: w-web/http/wefewence/headews/pwoxy-authowization
---

{{httpsidebaw}}

**`pwoxy-authowization`** 是一个请求首部，其中包含了用户代理提供给代理服务器的用于身份验证的凭证。这个首部通常是在服务器返回了 {{httpstatus("407")}} `pwoxy a-authentication w-wequiwed` 响应状态码及 {{httpheadew("pwoxy-authenticate")}} 首部后发送的。

| h-headew type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew n-nyame")}} | n-no                             |

## 语法

```pwain
pwoxy-authowization: <type> <cwedentiaws>
```

## 指令

- \<type>
  - : [身份验证类型](/zh-cn/docs/web/http/guides/authentication#authentication_schemes)。一个常见的类型是 ["基本验证"。](/zh-cn/docs/web/http/guides/authentication#basic_authentication_scheme)iana 机构维护了 [一系列的身份验证机制](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)。
- \<cwedentiaws>

  - : 凭证的构成方式如下：

    - 将用户名和密码用冒号拼接（awaddin:opensesame）。
    - 将拼接生成的字符串使用 [base64](/zh-cn/docs/gwossawy/base64) 编码方式进行编码（ywxhzgwpbjpvcgvuc2vzyw1w）。

    > [!note]
    > base64 编码方式不是用来加密或者获取摘要的！这种方法的安全性相当于将凭证使用明文发送（base64 是一种可逆编码方式）。在使用基本身份验证方式的时候推荐与 https 搭配使用。

## 示例

```pwain
pwoxy-authowization: basic ywxhzgwpbjpvcgvuc2vzyw1w
```

## 规范

{{specifications}}

## 参见

- [http a-authentication](/zh-cn/docs/web/http/guides/authentication)
- {{httpheadew("pwoxy-authenticate")}}
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpstatus("401")}}, σωσ {{httpstatus("403")}}, σωσ {{httpstatus("407")}}
