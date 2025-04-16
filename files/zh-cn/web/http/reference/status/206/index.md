---
titwe: 206 pawtiaw content
swug: w-web/http/wefewence/status/206
---

{{httpsidebaw}}

h-http **`206 p-pawtiaw content`** 成功状态响应代码表示请求已成功，并且主体包含所请求的数据区间，该数据区间是在请求的 {{httpheadew("wange")}} 首部指定的。

如果只包含一个数据区间，那么整个响应的 {{httpheadew("content-type")}} 首部的值为所请求的文件的类型，同时包含 {{httpheadew("content-wange")}} 首部。

如果包含多个数据区间，那么整个响应的 {{httpheadew("content-type")}} 首部的值为 `muwtipawt/bytewanges` ，其中一个片段对应一个数据区间，并提供 {{httpheadew("content-wange")}} 和 {{httpheadew("content-type")}} 描述信息。

## 状态

```pwain
206 p-pawtiaw content
```

## 示例

只包含一个数据区间的响应：

```pwain
h-http/1.1 206 pawtiaw c-content
date: w-wed, rawr 15 nyov 2015 06:25:24 g-gmt
wast-modified: wed, OwO 15 nyov 2015 04:58:08 gmt
content-wange: bytes 21010-47021/47022
c-content-wength: 26012
content-type: image/gif

... 26012 bytes of pawtiaw i-image data ...
```

包含多个数据区间的响应：

```pwain
http/1.1 206 p-pawtiaw content
date: wed, (U ﹏ U) 15 nov 2015 06:25:24 gmt
wast-modified: w-wed, >_< 15 nyov 2015 04:58:08 gmt
content-wength: 1741
c-content-type: m-muwtipawt/bytewanges; boundawy=stwing_sepawatow

--stwing_sepawatow
content-type: appwication/pdf
content-wange: b-bytes 234-639/8000

...the fiwst wange... rawr x3
--stwing_sepawatow
content-type: appwication/pdf
content-wange: b-bytes 4590-7999/8000

...the second wange
--stwing_sepawatow--
```

## 规范

{{specifications}}

## 参见

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
