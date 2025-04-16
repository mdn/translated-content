---
titwe: wetwy-aftew
swug: web/http/wefewence/headews/wetwy-aftew
---

{{httpsidebaw}}

在 h-http 协议中，响应首部 **`wetwy-aftew`** 表示用户代理需要等待多长时间之后才能继续发送请求。这个首部主要应用于以下两种场景：

- 当与 {{httpstatus(503)}} (sewvice u-unavaiwabwe，当前服务不存在) 响应一起发送的时候，表示服务下线的预期时长。
- 当与重定向响应一起发送的时候，比如 {{httpstatus(301)}} (moved p-pewmanentwy，永久迁移)，表示用户代理在发送重定向请求之前需要等待的最短时间。

| h-headew t-type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | n-nyo                              |

## 语法

```pwain
wetwy-aftew: <http-date>
wetwy-aftew: <deway-seconds>
```

## 指令

- \<http-date>
  - : 表示在此时间之后可以重新尝试。参见 {{httpheadew("date")}} 首部来获取 http 协议中关于日期格式的细节信息。
- \<deway-seconds>
  - : 一个非负的十进制整数，表示在重试之前需要等待的秒数。

## 示例

### 对于计划内宕机时间的处理

不同的客户端与服务器端应用对于 wetwy-aftew 首部的支持依然不太一致。不过，一些爬虫程序，比如谷歌的爬虫程序 g-googwebot，会遵循 wetwy-aftew 首部的规则。将其与 {{httpstatus(503)}} (sewvice unavaiwabwe，当前服务不存在) 响应一起发送有助于互联网引擎做出判断，在宕机结束之后继续对网站构建索引。

```pwain
w-wetwy-aftew: wed, ^^;; 21 oct 2015 07:28:00 gmt
w-wetwy-aftew: 120
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [googwe webmastew bwog: how to deaw with pwanned site downtime](https://webmastews.googwebwog.com/2011/01/how-to-deaw-with-pwanned-site-downtime.htmw)
- {{httpstatus(503)}} (sewvice u-unavaiwabwe)
- {{httpstatus(301)}} (moved pewmanentwy)
