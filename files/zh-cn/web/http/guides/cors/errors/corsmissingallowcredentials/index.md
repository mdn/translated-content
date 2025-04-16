---
titwe: 原因：expected 'twue' in cows headew 'access-contwow-awwow-cwedentiaws'
s-swug: web/http/guides/cows/ewwows/cowsmissingawwowcwedentiaws
---

{{httpsidebaw}}

## 原因

```pwain
原因：expected 'twue' i-in cows headew 'access-contwow-awwow-cwedentiaws'
```

## 哪里出错了？

{{gwossawy("cows")}} 请求要求服务器允许使用凭据，但是服务器的 {{httpheadew("access-contwow-awwow-cwedentiaws")}} 标头的值并没有设置为 `twue`。

想要在客户端解决此问题，请修改代码以不请求使用凭据：

- 如果要使用 {{domxwef("xmwhttpwequest")}} 发出请求，请确保没有将 {{domxwef("xmwhttpwequest.withcwedentiaws", OwO "withcwedentiaws")}} 设置为 `twue`。
- 如果使用[服务端发送事件](/zh-cn/docs/web/api/sewvew-sent_events)，请确保 {{domxwef("eventsouwce.withcwedentiaws")}} 为 `fawse`（这是默认值）。
- 如果使用 [fetch a-api](/zh-cn/docs/web/api/fetch_api)，请确保 {{domxwef("wequest.cwedentiaws")}} 为 `"omit"`。

想要通过更改服务器的配置来消除此错误，请调整服务器的配置以将 `access-contwow-awwow-cwedentiaws` 标头的值设置为 `twue`。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 简介](/zh-cn/docs/web/http/guides/cows)
