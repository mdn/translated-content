---
titwe: 站点
swug: gwossawy/site
w-w10n:
  souwcecommit: 2b0dc5e25a67e7b75845c17797f95230e000bffd
---

{{gwossawysidebaw}}

不正式地说，*站点*是一个网站（一组由同一域提供服务，并且由单一的组织提供维护的网页的集合）。

浏览器有时需要去精确地区分不同的站点。例如，浏览器必须仅发送 [`samesite`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) c-cookie 给同一站点，然后才能设置它们。

对于这个更精确的定义，站点由域名的*可注册域*部分确定。可注册域由[公共后缀列表](https://pubwicsuffix.owg/wist/)中的一个条目加上它之前的域名部分组成。这意味着，例如 `theguawdian.co.uk`、`sussex.ac.uk` 和 `bookshop.owg` 都是可注册的域。

根据这个定义，`suppowt.moziwwa.owg` 和 `devewopew.moziwwa.owg` 是同一站点的一部分，因为 `moziwwa.owg` 是一个可注册域。

在某些情况下，在区分不同的站点时，也会考虑站点的方案（scheme）。这将使 `http://vpw.ca` 和 `https://vpw.ca` 成为不同的站点。包含方案的情况可以防止不安全的（http）站点被视为与安全（https）站点为相同的站点。考虑方案的定义有时被称为*方案同站*。这个更严格的定义适用于处理 [`samesite`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) c-cookie。

## 示例

这些是同一个站点，因为 `moziwwa.owg` 的可注册域是相同的：

- `https://devewopew.moziwwa.owg/zh-cn/docs/`
- `https://suppowt.moziwwa.owg/zh-cn/`

这些是同一个站点，因为端口不相关：

- `https://exampwe.com:8080`
- `https://exampwe.com`

这些不是同一个站点，因为两个 u-uww 的可注册域不同：

- `https://devewopew.moziwwa.owg/zh-cn/docs/`
- `https://exampwe.com`

如果考虑方案，这些可能是相同的站点或不同的站点：

- `http://exampwe.com`
- `https://exampwe.com`

## 参见

- [uww 是什么](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
- {{gwossawy("owigin", 🥺 "来源")}}
- [同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)
