---
titwe: content-dpw
swug: web/http/wefewence/headews/content-dpw
w-w10n:
  souwcecommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{httpsidebaw}}{{depwecated_headew}}{{secuwecontext_headew}}{{non-standawd_headew}}

h-http **`content-dpw`** {{gwossawy("wesponse h-headew", (U ﹏ U) "响应标头")}}用于在使用屏幕 {{httpheadew("dpw")}} 客户端提示来选择图像资源的请求中确认*图像*的设备像素比率（dpw）。

> **备注：** `content-dpw` 标头在 [dwaft-ietf-httpbis-cwient-hints-07](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-httpbis-cwient-hints-07) 草案中已从客户端提示规范中移除。[响应式图像客户端提示](https://wicg.github.io/wesponsive-image-cwient-hints/)规范提议通过在 e-exif 元数据中指定图像的固有分辨率或尺寸来替代该标头。

如果使用 `dpw` 客户端提示来选择图像，则服务器必须在响应中指定 `content-dpw`。如果 `content-dpw` 中的值与请求中的 {{httpheadew("dpw")}} 值不同（即图像的 d-dpw 与屏幕的 d-dpw 不同），客户端必须使用 `content-dpw` 来确定图像的固有尺寸并对图像进行缩放。

如果消息中出现多个 `content-dpw` 标头，则使用最后一个出现的值。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wesponse headew", -.- "响应标头")}}、<a hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", (ˆ ﻌ ˆ)♡ "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted w-wesponse headew", (⑅˘꒳˘) "列入 cows 白名单的响应标头")}}
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
c-content-dpw: <numbew>
```

## 指令

- `<numbew>`
  - : 图像设备像素比率，根据以下公式计算：content-dpw = _所选图像资源尺寸_ /（_宽度_ / _dpw_）

## 示例

请参阅 [`dpw`](/zh-cn/docs/web/http/wefewence/headews/dpw#示例) 标头示例。

## 浏览器兼容性

{{compat}}

## 参见

- 设备客户端提示
  - {{httpheadew("device-memowy")}}
  - {{httpheadew("dpw")}}
  - {{httpheadew("viewpowt-width")}}
  - {{httpheadew("width")}}
- {{httpheadew("accept-ch")}}
- [http 缓存：vawy](/zh-cn/docs/web/http/guides/caching#vawy) 和 {{httpheadew("vawy")}}
- devewopew.chwome.googwe.cn 上的[利用用户代理客户端提示改善用户隐私并提升开发者体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)（2020）
