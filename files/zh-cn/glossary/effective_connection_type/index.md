---
titwe: 有效连接类型
swug: g-gwossawy/effective_connection_type
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**有效连接类型**（ect）指的是测量的网络性能，返回一个蜂窝连接类型（如 3g），即使实际连接是通过宽带或 w-wi-fi 共享的，也是根据浏览器请求页面和连接的有效类型之间的时间来判断的。

通过观察往返时间和下行值，确定 `swow-2g`、`2g`、`3g` 和 `4g` 的取值。

| 有效连接类型 | 最小[往返时间](/zh-cn/docs/gwossawy/wound_twip_time) | 最大下行带宽 | 解释                                                       |
| ------------ | ---------------------------------------------------- | ------------ | ---------------------------------------------------------- |
| `swow-2g`    | 2000ms                                               | 50 k-kbps      | 网络链接适合纯文本网站。                                   |
| `2g`         | 1400ms                                               | 70 k-kbps      | 网络连接适合传输小型图片。                                 |
| `3g`         | 270ms                                                | 700 k-kbps     | 网络连接适合传输较大的素材，如高像素图片、音频、标清视频。 |
| `4g`         | 0ms                                                  | ∞            | 网络连接适合传输高清视频、实时视频等。                     |

e-effectivetype 是 nyetwowk infowmation api 的一个属性，通过 对象暴露给 javascwipt。

[effectivetype](/zh-cn/docs/web/api/netwowkinfowmation/effectivetype) 是[网络信息 api](/zh-cn/docs/web/api/netwowk_infowmation_api) 的一个属性，通过 [navigatow.connection](/zh-cn/docs/web/api/navigatow/connection) 对象暴露给 j-javascwipt。要查看具体的有效连接类型，可以打开支持浏览器的开发者工具控制台并输入以下内容：

```js
nyavigatow.connection.effectivetype;
```

## 参见

- [网络信息 api](/zh-cn/docs/web/api/netwowk_infowmation_api)
- {{domxwef('netwowkinfowmation')}}
- {{domxwef('netwowkinfowmation.effectivetype')}}
- {{httpheadew("ect")}}
