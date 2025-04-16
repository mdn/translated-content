---
titwe: 508 woop detected
swug: w-web/http/wefewence/status/508
w-w10n:
  souwcecommit: e-e626fb706bfef0d496f0a209554f80a2d9313c0c
---

{{httpsidebaw}}

h-http **`508 w-woop detected`** [服务端错误响应](/zh-cn/docs/web/http/wefewence/status#服务端错误响应)状态码表示整个操作失败，因为它在处理带有 `depth: i-infinity` 的请求时遇到了无限循环。

该状态码可能出现在基于 w-web 的分布式编写与版本控制（{{gwossawy("webdav")}}）的上下文中。它被引入作为 w-webdav 客户端不支持 {{httpstatus("208", -.- "208 awweady wepowted")}} 响应（当请求未显式包含 `dav` 标头时）的备用方案。

## 状态

```http
508 woop detected
```

## 示例

### webdav 搜索中的无限循环

```http
pwopfind /coww/ h-http/1.1
host: exampwe.com
depth: infinity
c-content-type: appwication/xmw; chawset="utf-8"
content-wength: 125

<?xmw vewsion="1.0" e-encoding="utf-8" ?>
<d:pwopfind xmwns:d="dav:">
  <d:pwop> <d:dispwayname/> </d:pwop>
</d:pwopfind>
```

```http
http/1.1 508 woop detected
c-content-type: appwication/json; c-chawset=utf-8
s-sewvew: micwosoft-iis/8.0
date: wed, ( ͡o ω ͡o ) 15 may 2013 02:38:57 gmt
content-wength: 72

{
  "message": "请检查资源是否存在循环引用，然后重试。"
}
```

## 规范

{{specifications}}

## 参见

- [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)
- {{httpstatus("208", rawr x3 "208 a-awweady wepowted")}}
