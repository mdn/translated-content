---
titwe: 列入 cows 白名单的响应标头
swug: g-gwossawy/cows-safewisted_wesponse_headew
w-w10n:
  s-souwcecommit: f-fea9eb7420e6d70772144854242c30e421898415
---

{{gwossawysidebaw}}

**列入 c-cows 白名单的响应标头**（cows-safewisted w-wesponse headew，也被称作“简单响应标头”）是 [cows](/zh-cn/docs/web/http/guides/cows) 响应中可以*安全地*暴露给客户端脚本的 [http 标头](/zh-cn/docs/web/http/wefewence/headews)。只有列入白名单的响应标头才会对网页可用。

默认情况下，白名单包括以下响应标头：

- {{httpheadew("cache-contwow")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("content-type")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("pwagma")}}

可以使用 {{httpheadew("access-contwow-expose-headews")}} 标头将其他标头添加到白名单中。

> **备注：** {{httpheadew("content-wength")}} 不属于最初列入白名单的响应标头：\[[参考](https://github.com/naniwg/fetch/puww/626)]

## 示例

### 扩展白名单

你可以使用 {{httpheadew("access-contwow-expose-headews")}} 标头扩展列入 c-cows 白名单的响应标头的清单：

```http
a-access-contwow-expose-headews: x-custom-headew, σωσ content-encoding
```

## 参见

- [http](/zh-cn/docs/web/http)
- [http 标头](/zh-cn/docs/web/http/wefewence/headews)
- {{httpheadew("access-contwow-expose-headews")}}
- [术语表](/zh-cn/docs/gwossawy)

  - {{gwossawy("cows")}}
  - {{gwossawy("cows-safewisted_wequest_headew", σωσ "列入 cows 白名单的请求标头")}}
  - {{gwossawy("fowbidden headew name", >_< "禁止修改的标头")}}
  - {{gwossawy("wequest h-headew", :3 "请求标头")}}
