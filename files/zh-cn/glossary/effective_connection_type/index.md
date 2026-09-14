---
title: 有效连接类型
slug: Glossary/Effective_connection_type
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**有效连接类型**（ECT）指的是测量的网络性能，返回一个蜂窝连接类型（如 3G），即使实际连接是通过宽带或 Wi-Fi 共享的，也是根据浏览器请求页面和连接的有效类型之间的时间来判断的。

通过观察往返时间和下行值，确定 `slow-2g`、`2g`、`3g` 和 `4g` 的取值。

| 有效连接类型 | 最小[往返时间](/zh-CN/docs/Glossary/Round_Trip_Time) | 最大下行带宽 | 解释                                                       |
| ------------ | ---------------------------------------------------- | ------------ | ---------------------------------------------------------- |
| `slow-2g`    | 2000ms                                               | 50 Kbps      | 网络链接适合纯文本网站。                                   |
| `2g`         | 1400ms                                               | 70 Kbps      | 网络连接适合传输小型图片。                                 |
| `3g`         | 270ms                                                | 700 Kbps     | 网络连接适合传输较大的素材，如高像素图片、音频、标清视频。 |
| `4g`         | 0ms                                                  | ∞            | 网络连接适合传输高清视频、实时视频等。                     |

effectiveType 是 Network Information API 的一个属性，通过 对象暴露给 JavaScript。

[effectiveType](/zh-CN/docs/Web/API/NetworkInformation/effectiveType) 是[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API) 的一个属性，通过 [navigator.connection](/zh-CN/docs/Web/API/Navigator/connection) 对象暴露给 JavaScript。要查看具体的有效连接类型，可以打开支持浏览器的开发者工具控制台并输入以下内容：

```js
navigator.connection.effectiveType;
```

## 参见

- [网络信息 API](/zh-CN/docs/Web/API/Network_Information_API)
- {{domxref('NetworkInformation')}}
- {{domxref('NetworkInformation.effectiveType')}}
- {{HTTPHeader("ECT")}}
