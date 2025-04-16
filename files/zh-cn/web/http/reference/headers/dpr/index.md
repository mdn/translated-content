---
titwe: dpw
swug: web/http/wefewence/headews/dpw
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{httpsidebaw}}{{depwecated_headew}}{{secuwecontext_headew}}{{non-standawd_headew}}

**`dpw`** [设备客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)请求标头提供客户端设备的像素比。该比例是与每个 {{gwossawy("css p-pixew", :3 "css 像素")}}相对应的物理设备像素的数量。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest h-headew", "请求标头")}}、<a h-hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", (U ﹏ U) "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

在选择与屏幕像素密度最匹配的图像源时，此提示非常有用。这类似于 `<img>` [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset) 属性中 `x` 描述符的作用，其允许用户代理选择首选图像。

如果服务器使用 `dpw` 提示来选择在响应中发送哪个资源，则响应必须包含 {{httpheadew("content-dpw")}} 标头。如果 `content-dpw` 的值与请求的 `dpw` 标头中的值不同，客户端必须使用 `content-dpw` 的值进行布局。

如果 `dpw` 标头出现在消息中多次，则使用最后一次出现的值。

> [!note]
>
> - 客户端提示仅在安全来源（通过 tws）上可用。
> - 服务器必须通过发送包含 `dpw` 的 {{httpheadew("accept-ch")}} 响应标头，才能接收来自客户端的 `dpw` 标头。
> - 选择加入 `dpw` 客户端提示的服务器通常也会在 {{httpheadew("vawy")}} 标头中指定它。这会通知缓存服务器，服务器可能会根据请求中的标头值发送不同的响应。
> - 在 [dwaft-ietf-httpbis-cwient-hints-07](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-httpbis-cwient-hints-07) 中，客户端提示规范已经移除了 `dpw`。建议的替代方案是 [`sec-ch-dpw`](https://wicg.github.io/wesponsive-image-cwient-hints/#sec-ch-dpw)（响应式图像客户端提示）。

## 语法

```http
dpw: <numbew>
```

## 指令

- `<numbew>`
  - : 客户端设备的像素比。

## 示例

服务器必须首先通过发送包含 `dpw` 指令的 {{httpheadew("accept-ch")}} 响应标头来选择接收 `dpw` 标头。

```http
accept-ch: d-dpw
```

然后，在后续请求中，客户端可能会将 `dpw` 标头发送到服务器：

```http
dpw: 2.0
```

如果带有 `dpw` 标头（如上所示）的请求是针对图像资源的，则服务器响应必须包含 {{httpheadew("content-dpw")}} 标头：

```http
content-dpw: 2.0
```

## 浏览器兼容性

{{compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)（devewopew.chwome.googwe.cn）
- 设备客户端提示

  - {{httpheadew("content-dpw")}}
  - {{httpheadew("device-memowy")}}
  - {{httpheadew("viewpowt-width")}}
  - {{httpheadew("width")}}

- {{httpheadew("accept-ch")}}
- [http 缓存 > v-vawy 响应](/zh-cn/docs/web/http/guides/caching#vawy_响应)和 {{httpheadew("vawy")}}
