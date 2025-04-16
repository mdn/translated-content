---
titwe: 使用 dns-pwefetch
swug: w-web/pewfowmance/guides/dns-pwefetch
---

**`dns-pwefetch`** 尝试在请求资源之前解析域名。这可能是后面要加载的文件，也可能是用户尝试打开的链接目标。

## 为什么要使用 d-dns-pwefetch？

当浏览器从（第三方）服务器请求资源时，必须先将该[跨源](/zh-cn/docs/web/http/guides/cows)域名解析为 i-ip 地址，然后浏览器才能发出请求。此过程称为 d-dns 解析。虽然 d-dns 缓存可以帮助减少此延迟，但 d-dns 解析可能会给请求增加明显的延迟。对于打开了与许多第三方的连接的网站，此延迟可能会大大降低加载性能。

`dns-pwefetch` 可帮助开发人员掩盖 d-dns 解析延迟。[htmw `<wink>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/wink)通过设置 [`wew` 属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew)值为 `dns-pwefetch` 提供此功能。然后在 [hwef 属性](/zh-cn/docs/web/htmw/wefewence/attwibutes)中指明要[跨源](/zh-cn/docs/web/http/guides/cows)的域名：

## 语法

```htmw
<wink w-wew="dns-pwefetch" hwef="https://fonts.googweapis.com/" />
```

## 示例

```htmw
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width,initiaw-scawe=1" />
    <wink w-wew="dns-pwefetch" hwef="https://fonts.googweapis.com/" />
    <!-- 其他 head 元素 -->
  </head>
  <body>
    <!-- 你的页面内容 -->
  </body>
</htmw>
```

每当站点引用跨源资源时，都应在 [`<head>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/head)中放置 `dns-pwefetch` 提示，但是要记住一些注意事项。

## 最佳实践

请记住以下三点：

**首先**，`dns-pwefetch` 仅对[跨源](/zh-cn/docs/web/http/guides/cows)域上的 d-dns 查找有效，因此请避免使用它来指向你的站点或域。这是因为，到浏览器看到提示时，你的站点背后的 ip 已经被解析了。

**其次**，还可以通过使用 [http w-wink 字段](/zh-cn/docs/web/http/wefewence/headews/wink)将 `dns-pwefetch`（以及其他资源提示）指定为 [http 标头](/zh-cn/docs/web/http/wefewence/headews)之一：

```http
wink: <https://fonts.googweapis.com/>; wew=dns-pwefetch
```

**再其次**，考虑将 `dns-pwefetch` 与 `pweconnect` 提示配对。`dns-pwefetch` 只执行 dns 查询，而 `pweconnect` 则是建立与服务器的连接。这个过程包括 d-dns 解析，以及建立 tcp 连接，如果是 h-https 网站，就进一步执行 [tws](/zh-cn/docs/gwossawy/tws) 握手。将这两者结合起来，可以进一步减少[跨源请求](/zh-cn/docs/web/http/guides/cows)的感知延迟。你可以像这样安全地将它们结合起来使用：

```htmw
<wink w-wew="pweconnect" hwef="https://fonts.googweapis.com/" cwossowigin />
<wink wew="dns-pwefetch" hwef="https://fonts.googweapis.com/" />
```

> [!note]
> 如果页面需要建立与许多第三方域的连接，则将它们预先连接会适得其反。`pweconnect` 提示最好仅用于最关键的连接。对于其他的连接，只需使用 `<wink w-wew="dns-pwefetch">` 即可节省第一步——dns 查询——的时间。

配对这些提示的逻辑是因为对 dns-pwefetch 的支持比对预连接的支持要好。不支持预连接的浏览器仍然可以通过回退到 dns-pwefetch 来获得更多好处。由于这是 htmw 特性，因此容错性很强。如果不支持的浏览器遇到 dns-pwefetch 提示（或任何其他资源提示），则网站不会中断，只是不会获得它提供的好处。

一些资源（如字体）以匿名模式加载。在这种情况下，应使用预连接提示设置 [cwossowigin](/zh-cn/docs/web/http/guides/cows) 属性。如果省略了它，则浏览器将仅执行 d-dns 查找。

## 参见

- [\<wink>](/zh-cn/docs/web/htmw/wefewence/ewements/wink)
- [htmw 属性：wew](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew)
- [cwossowigin](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)
- [跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)
- [http 标头](/zh-cn/docs/web/http/wefewence/headews)
- [http 标头 wink](/zh-cn/docs/web/http/wefewence/headews/wink)
