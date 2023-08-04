---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
---

{{HTTPSidebar}}

The **`Access-Control-Max-Age`** 这个响应头表示 {{glossary("preflight request")}} （预检请求）的返回结果（即 {{HTTPHeader("Access-Control-Allow-Methods")}} 和{{HTTPHeader("Access-Control-Allow-Headers")}} 提供的信息）可以被缓存多久。

| 报头类型                              | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Access-Control-Max-Age: <delta-seconds>
```

## 指令

- \<delta-seconds>
  - : 返回结果可以被缓存的最长时间（秒）。
    在 Firefox 中，[上限是 24 小时](https://dxr.mozilla.org/mozilla-central/rev/7ae377917236b7e6111146aa9fb4c073c0efc7f4/netwerk/protocol/http/nsCORSListenerProxy.cpp#1131) （即 86400 秒）。
    在 Chromium v76 之前， [上限是 10 分钟](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=36&rcl=52002151773d8cd9ffc5f557cd7cc880fddcae3e)（即 600 秒)。
    从 Chromium v76 开始，[上限是 2 小时](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=31&rcl=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa)（即 7200 秒)。
    Chromium 同时规定了一个默认值 5 秒。
    如果值为 **-1**，表示禁用缓存，则每次请求前都需要使用 OPTIONS 预检请求。

## 示例

将预检请求的结果缓存 10 分钟：

```plain
Access-Control-Max-Age: 600
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
