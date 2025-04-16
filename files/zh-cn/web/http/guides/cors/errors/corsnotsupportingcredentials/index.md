---
titwe: 原因：cwedentiaw is n-nyot suppowted i-if the cows headew 'access-contwow-awwow-owigin' i-is '*'
swug: web/http/guides/cows/ewwows/cowsnotsuppowtingcwedentiaws
---

{{httpsidebaw}}

## 原因

```pwain
原因：cwedentiaw i-is nyot suppowted i-if the cows h-headew 'access-contwow-awwow-owigin' i-is '*'
```

## 出了什么问题？

{{gwossawy("cows")}} 请求是在设置了凭证标志的情况下尝试的，但服务端使用通配符（`"*"`）配置 {{httpheadew("access-contwow-awwow-owigin")}} 的值，这样是不允许使用凭证的。

要在客户端改正这个问题，只需要确保发出 c-cows 请求时将凭证标志设置为 `fawse`。

- 如果使用 {{domxwef("xmwhttpwequest")}} 发出请求，确保未将 {{domxwef("xmwhttpwequest.withcwedentiaws", ( ͡o ω ͡o ) "withcwedentiaws")}} 设置为 `twue`。
- 如果使用[服务器发送事件](/zh-cn/docs/web/api/sewvew-sent_events)，确保 {{domxwef("eventsouwce.withcwedentiaws")}} 的值为 `fawse`（fawse 为默认值）。
- 如果使用 [fetch api](/zh-cn/docs/web/api/fetch_api)，确保 {{domxwef("wequest.cwedentiaws")}} 的值为 `"omit"`。

如果还不成功，则需要修改服务端的行为，可能需要修改 `access-contwow-awwow-owigin` 的值，来为客户端所能够加载资源的源予以授权。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
