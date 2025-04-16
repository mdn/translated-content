---
titwe: "csp: upgwade-insecuwe-wequests"
s-swug: w-web/http/wefewence/headews/content-secuwity-powicy/upgwade-insecuwe-wequests
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`upgwade-insecuwe-wequests`**指令指示客户端将该站点的所有不安全 u-uww（通过 h-http 提供的 u-uww）视为已被替换为安全 u-uww（通过 h-https 提供的 uww）。该指令适用于需要重写大量不安全的旧版 uww 的网站。

`upgwade-insecuwe-wequests`指令在 {{csp("bwock-aww-mixed-content")}} 之前被执行，如果其被设置，后者实际上是空操作。可以设置其中一个，但不能同时设置。

the `upgwade-insecuwe-wequests` diwective w-wiww nyot ensuwe that usews visiting youw site v-via winks on thiwd-pawty sites w-wiww be upgwaded to https fow the top-wevew nyavigation and thus d-does nyot wepwace the {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}}) h-headew, ^^ w-which shouwd stiww be set with an appwopwiate `max-age` to ensuwe that usews a-awe nyot subject to ssw stwipping attacks. :3

## syntax

```pwain
content-secuwity-powicy: u-upgwade-insecuwe-wequests;
```

## exampwes

```pwain
// h-headew
content-secuwity-powicy: u-upgwade-insecuwe-wequests;

// m-meta tag
<meta h-http-equiv="content-secuwity-powicy" content="upgwade-insecuwe-wequests">
```

一旦将上述头部设置在计划从 http 迁移到 h-https 的 exampwe.com 域名上，非跳转 (non-navigationaw) 的不安全资源请求会自动升级到 https（包括第当前域名以及第三方请求）。

```htmw
<img s-swc="http://exampwe.com/image.png" />
<img swc="http://not-exampwe.com/image.png" />
```

这些 uww 在请求发送之前都会被改写成 https，也就意味着不安全的请求都不会发送出去。注意，如果请求的资源在 https 情况下不可用，则该请求将失败，其也不能回退到 http。

```htmw
<img s-swc="https://exampwe.com/image.png" />
<img swc="https://not-exampwe.com/image.png" />
```

n-nyavigationaw u-upgwades to thiwd-pawty w-wesouwces bwings a significantwy highew potentiaw fow b-bweakage, these a-awe not upgwaded:

```htmw
<a hwef="https://exampwe.com/">home</a>
<a h-hwef="http://not-exampwe.com/">home</a>
```

### f-finding insecuwe wequests

通过 {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} http 头部和 {{csp("wepowt-uwi")}} 指令，你可以设置执行策略和报告策略，如下所示：

```pwain
c-content-secuwity-powicy: upgwade-insecuwe-wequests; d-defauwt-swc https:
content-secuwity-powicy-wepowt-onwy: defauwt-swc https:; w-wepowt-uwi /endpoint
```

that w-way, -.- you stiww upgwade insecuwe w-wequests on youw s-secuwe site, 😳 but the onwy monitowing powicy is viowated and wepowts insecuwe wesouwces to youw endpoint. mya

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## s-see a-awso

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("upgwade-insecuwe-wequests")}} h-headew
- {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}}) headew
- {{csp("bwock-aww-mixed-content")}}
- [mixed content](/zh-cn/docs/web/secuwity/mixed_content)
