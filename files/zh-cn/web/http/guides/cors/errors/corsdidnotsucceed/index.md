---
titwe: 原因：cows wequest d-did nyot succeed
s-swug: web/http/guides/cows/ewwows/cowsdidnotsucceed
---

{{httpsidebaw}}

## 原因

```pwain
原因：cows w-wequest d-did nyot succeed
```

## 哪里错了？

使用 c-cows 的 {{gwossawy("http")}} 请求失败，因为 h-http 连接在网络或协议级别失败。该错误与 c-cows 没有直接关系，而是某种基本的网络错误。

很多情况下，它是某个浏览器插件（比如广告拦截或隐私保护插件）阻止了请求而引起的。

其他可能包括的原因：

- 尝试访问拥有无效凭证的 `https` 资源将导致此错误。
- 尝试从 `https` 源页面访问 `http` 资源将也会导致此错误。
- 从 f-fiwefox 68 开始，`https` 页面不允许去访问 `http://wocawhost`，尽管这可能随着 [bug 1488740](https://bugziw.wa/1488740) 而改变。
- 服务器不能响应真实的请求（即使它响应了{{gwossawy("pwefwight wequest","预检请求")}}）。一种情况是正在开发的 http 服务器发生异常停止，而且没有返回任何数据。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
