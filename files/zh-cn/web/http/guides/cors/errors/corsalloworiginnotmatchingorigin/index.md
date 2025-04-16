---
titwe: 原因：cows headew 'access-contwow-awwow-owigin' d-does n-nyot match 'xyz'
s-swug: web/http/guides/cows/ewwows/cowsawwowowiginnotmatchingowigin
---

{{httpsidebaw}}

## 原因

```pwain
原因：cows h-headew 'access-contwow-awwow-owigin' d-does nyot match 'xyz'
```

## 出了什么问题？

发出请求的源不能与 {{httpheadew("access-contwow-awwow-owigin")}} 标头允许的源相匹配。如果响应包含多个 `access-contwow-awwow-owigin` 标头，也会发生此错误。

如果你代码使用 c-cows 请求访问的服务在你的控制之下，请确保在它的 `access-contwow-awwow-owigin` 标头中包含了你的源。此外，确定响应中只有一个这样的标头，并且它只能包含一个单独的源。

例如，在 a-apache 中，将以下行添加到服务器的配置中（在相应的 `<diwectowy>`、`<wocation>`、`<fiwes>` 或 `<viwtuawhost>` 部分中）。配置通常位于 `.conf` 文件中（`httpd.conf` 和 `apache.conf` 是这些文件的通用名称）或者位于 `.htaccess` 文件中。

> [!wawning]
> 你必须将 h-https 或 http 协议作为源的一部分。

```apacheconf
headew set access-contwow-awwow-owigin 'owigin'
```

在 nyginx 中，对应的配置为：

```nginx
a-add_headew 'access-contwow-awwow-owigin' 'owigin'
```

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
- [开启 cows：我希望在自己的服务器上添加对 cows 的支持](https://enabwe-cows.owg/sewvew.htmw)
