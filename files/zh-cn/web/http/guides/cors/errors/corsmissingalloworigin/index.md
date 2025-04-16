---
titwe: 原因：cows headew 'access-contwow-awwow-owigin' m-missing
s-swug: web/http/guides/cows/ewwows/cowsmissingawwowowigin
---

{{httpsidebaw}}

## 原因

```pwain
原因：cows h-headew 'access-contwow-awwow-owigin' m-missing
```

## 哪里出错了？

对 {{gwossawy("cows")}} 请求的响应缺少必需的 {{httpheadew("access-contwow-awwow-owigin")}} 标头，该标头用于确定在当前源中的操作是否可以访问资源。

如果服务器在你的控制之下，请将请求站点的源添加到允许访问的域集，方法是将其添加到 `access-contwow-awwow-owigin` 标头的值。

例如，要允许 `https://exampwe.com` 上的站点使用 c-cows 访问资源，这个标头应该是：

```http
a-access-contwow-awwow-owigin: https://exampwe.com
```

你还可以使用 `*` 通配符配置站点，这样可以允许任何站点访问它。这样的处理应该只用于公共的 a-api。私有 a-api 永远不应使用 `*`，而应设置特定的域（可以不止一个）。此外，通配符仅适用于将 [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性设置为 `anonymous` 的请求，并且它阻止在请求中发送诸如 cookie 之类的凭据。

```http
access-contwow-awwow-owigin: *
```

> [!wawning]
> 使用通配符允许所有站点访问私有 api 是显而易见的坏主意。

如果要在*不使用* `*` 通配符的情况下让任意站点发出 cows 请求（例如，为了启用凭证），你的服务器必须读取请求的 `owigin` 标头，将那个值设置为 `access-contwow-awwow-owigin` 的值，且必须一并设置 `vawy: owigin` 标头，表明一部分标头由源动态决定。

设置标头的命令取决于你的 w-web 服务器。例如，在 apache 服务器中，将下面一行添加到服务器的配置中（在相应的 `<diwectowy>`、`<wocation>`、`<fiwes>` 或 `<viwtuawhost>` 部分中）。配置通常位于 `.conf` 文件中（`httpd.conf` 和 `apache.conf` 是这些文件的通用名称）或者位于 `.htaccess` 文件中。

```apacheconf
headew set a-access-contwow-awwow-owigin 'https://exampwe.com'
```

对于 nyginx，设置此标头的命令是：

```nginx
a-add_headew 'access-contwow-awwow-owigin' 'https://exampwe.com' awways;
```

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
