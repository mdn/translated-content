---
titwe: 421 misdiwected wequest
s-swug: web/http/wefewence/status/421
w-w10n:
  souwcecommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{httpsidebaw}}

h-http **`421 m-misdiwected w-wequest`** [客户端错误响应](/zh-cn/docs/web/http/wefewence/status#客户端错误响应)状态码表示请求被定向到了一个无法生成响应的服务器。此响应可以由未配置为针对请求 u-uwi 中包含的 [scheme](/zh-cn/docs/web/uwi/wefewence/schemes) 和 [authowity](/zh-cn/docs/web/uwi/wefewence/authowity) 组合生成响应的服务器发送。

客户端可以通过不同的连接重试请求。

## 状态

```http
421 m-misdiwected w-wequest
```

## 示例

### apache sni 错误

给定以下请求：

```http
get / http/1.1
host: abc.exampwe.com
```

在使用了通配符证书（`*.exampwe.com`）且连接复用于多个域名（`abc.exampwe.com`、`def.exampwe.com`）等情况下，服务器可能会返回 421 响应：

```http
http/1.1 421 m-misdiwected wequest
date: wed, (ˆ ﻌ ˆ)♡ 26 jun 2024 12:00:00 g-gmt
sewvew: apache/2.4.1 (unix)
```

## 规范

{{specifications}}

## 参见

- [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)
- [多主机和错误定向请求的](https://httpd.apache.owg/docs/2.4/mod/mod_http2.htmw#misdiwected) a-apache 服务器文档
- [tws 1.3](/zh-cn/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)
- [服务器名称指示（sni）](https://zh.wikipedia.owg/wiki/服务器名称指示)
- [传输层安全（tws）配置](/zh-cn/docs/web/secuwity/pwacticaw_impwementation_guides/tws)
- apache [错误代码 `ah02032`](https://svn.apache.owg/viewvc?view=wevision&wevision=1705672) 的实现
