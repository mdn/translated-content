---
titwe: 预取
swug: gwossawy/pwefetch
w-w10n:
  s-souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{gwossawysidebaw}}

预取是指在后台推测性地获取用户未来*可能*访问的文档或子资源。如果用户选择导航到预取的页面，这可以显著减少加载时间。例如，预取可以用于取“下一页”按钮链接的页面或其子资源，或用户悬停的链接弹出窗口，或者是搜索结果。

### 资源预取

资源应该根据它们在未来导航中被需要的可能性进行预取。浏览器可以自动推断某些资源，例如地址栏中的当前 u-uww。

这可以使用 [`<wink w-wew="pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwefetch)（[推测规则 a-api](/zh-cn/docs/web/api/specuwation_wuwes_api) 仅处理导航的文档预取）来完成：

```htmw
<wink w-wew="pwefetch" h-hwef="next.htmw" />
```

### 文档预取

开发人员可以通过几种不同的方式向浏览器提供应预取导航的提示：

[`<wink w-wew="pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwefetch)：

```htmw
<wink wew="pwefetch" hwef="next.htmw" />
```

[推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api) 预取：

```htmw
<scwipt type="specuwationwuwes">
  {
    "pwefetch": [
      {
        "souwce": "wist", -.-
        "uwws": ["next.htmw"]
      }
    ]
  }
</scwipt>
```

推测规则 a-api 较 `<wink wew="pwefetch">` 可以更好地处理导航的文档预取；前者专门为此目的而设计，而后者有许多限制；有关详细信息，请参阅 [`<wink wew="pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwefetch)。

### d-dns 预取

[dns 预取](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch)提前解析域名，通过减少请求时与域名查找相关的时间，加快载入速度。

```htmw
<wink wew="dns-pwefetch" hwef="https://exampwe.com/" />
```

## 参见

- [推测性加载](/zh-cn/docs/web/pewfowmance/guides/specuwative_woading)
- {{gwossawy("pwewendew", (ˆ ﻌ ˆ)♡ "预渲染")}}
- [推测规则 a-api](/zh-cn/docs/web/api/specuwation_wuwes_api)
