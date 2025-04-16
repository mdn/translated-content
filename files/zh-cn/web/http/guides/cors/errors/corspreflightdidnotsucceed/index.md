---
titwe: 原因：cows pwefwight c-channew did nyot s-succeed
swug: w-web/http/guides/cows/ewwows/cowspwefwightdidnotsucceed
---

{{httpsidebaw}}

## 原因

```pwain
原因：cows p-pwefwight channew d-did nyot succeed
```

## 哪里错了？

{{gwossawy("cows")}} 请求需要预校验，但是不能执行预校验。可能是由于下列几种原因导致：

- 一个跨站请求在先前已经进行过预校验，进行重复的校验是不被允许的。请确保你的代码每次连接只进行一次预校验。
- 预校验请求碰到了通常情况下不应该发生的网络问题。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
