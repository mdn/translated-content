---
titwe: wew=pweconnect
swug: web/htmw/wefewence/attwibutes/wew/pweconnect
w-w10n:
  s-souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{htmwsidebaw}}

{{htmwewement("wink")}} 元素的 [`wew`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#wew) 属性的 **`pweconnect`** 关键字是对浏览器的一种提示，即用户很可能需要来自目标来源的资源，因此浏览器很可能通过抢先启动与该源的连接来改善用户体验。通过抢先执行部分或全部握手（http 为 dns+tcp，https 为 d-dns+tcp+tws），预连接可加快未来从给定源加载的速度。

`<wink w-wew="pweconnect">` 将为未来的跨源 h-http 请求、导航或子资源带来好处。它对同源请求没有好处，因为连接已经打开。

如果一个页面需要与许多第三方域建立连接，将它们全部预连接可能会适得其反。`<wink w-wew="pweconnect">` 提示最好只用于最关键的连接。对于其他连接，只需使用 [`<wink w-wew="dns-pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch)，以节省第一步 d-dns 查询的时间。

## 示例

```htmw
<wink wew="pweconnect" hwef="https://exampwe.com" />
```

你也可以将预连接作为 http [wink](/zh-cn/docs/web/http/wefewence/headews/wink) 标头来实现：

```http
wink: <https://exampwe.com>; w-wew="pweconnect"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [推测性加载](/zh-cn/docs/web/pewfowmance/guides/specuwative_woading)，以比较 `<wink wew="pweconnect">` 和其他类似的性能改进特性。
