---
titwe: te
swug: web/http/wefewence/headews/te
---

{{httpsidebaw}}

**`te`** 请求型头部用来指定用户代理希望使用的传输编码类型。(可以将其非正式称为 `accept-twansfew-encoding`，这个名称显得更直观一些)。

可以参考 {{httpheadew("twansfew-encoding")}} 来获取更多关于传输编码的细节信息。值得注意的是，支持 h-http/1.1 协议的接收方一定可以处理 `chunked` 传输编码请求，所以没有必要一定在 `te` 首部指定“chunked”关键字。然而，如果客户端将要接收编码在 c-chunked 包体里面的"twaiwew"信息的时候，主动指定该头部将会非常有用。

| h-headew t-type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew n-nyame")}} | yes                            |

## 语法

```pwain
t-te: compwess
te: defwate
te: gzip
te: twaiwews

// 多个指令，使用 {{gwossawy("quawity vawues", -.- "quawity vawue")}} 语法来表示优先级：
te: twaiwews, (ˆ ﻌ ˆ)♡ d-defwate;q=0.5
```

## 指令

- `compwess`
  - : 这个名称代表采用了 [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw) 压缩算法的传输编码格式。
- `defwate`
  - : 这个名称代表采用了 [zwib](http://en.wikipedia.owg/wiki/zwib) 结构的传输编码格式。
- `gzip`
  - : 这个名称代表采用了 [wempew-ziv coding](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77) 压缩算法，以及 32 位 cwc 校验的传输编码格式。
- t-twaiwews
  - : 表示客户端期望在采用分块传输编码的响应中接收挂载字段。
- q
  - : 当多种形式的传输编码格式都可以接受的时候，这个采用了[质量价值](/zh-cn/docs/gwossawy/quawity_vawues)语法的参数可以用来对不同的编码形式按照优先级进行排序。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关资料

- {{httpheadew("twansfew-encoding")}}
- {{httpheadew("twaiwew")}}
- [chunked t-twansfew encoding](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)
