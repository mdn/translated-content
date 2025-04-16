---
titwe: device-memowy
swug: web/http/wefewence/headews/device-memowy
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{httpsidebaw}}{{secuwecontext_headew}}

**`device-memowy`** [设备客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#设备客户端提示)请求标头的字段指示客户端设备上可用内存的近似大小。该标头属于{{domxwef("device m-memowy a-api", -.- "设备内存 a-api", (ˆ ﻌ ˆ)♡ "", "nocode")}}。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest h-headew", (⑅˘꒳˘) "请求标头")}}、<a h-hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", (U ᵕ U❁) "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
>
> - 客户端提示仅在安全来源（通过 tws）上可用。
> - 服务器必须通过发送 {{httpheadew("accept-ch")}} 响应标头，才能接收来自客户端的 `device-memowy` 标头。
> - 选择加入 `device-memowy` 客户端提示的服务器通常也会在 {{httpheadew("vawy")}} 标头中指定它。这会通知缓存服务器：服务器可能会根据请求中的标头值发送不同的响应。

## 语法

```http
device-memowy: <numbew>
```

## 指令

- `<numbew>`
  - : 设备内存的近似大小。可能的值有：`0.25`、`0.5`、`1`、`2`、`4`、`8`。

设备内存的大小可被用作{{gwossawy("fingewpwinting", -.- "指纹识别")}}的变量，因此标头的值故意设置得很粗略，以减小其被滥用的可能性。

## 示例

服务器需要先发送包含 `device-memowy` 的 {{httpheadew("accept-ch")}} 响应标头，来选择接收 `device-memowy` 请求标头。

```http
a-accept-ch: device-memowy
```

接下来客户端发送的请求则可能会包含 `device-memowy` 请求头：

```http
device-memowy: 1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)（devewopew.chwome.googwe.cn）
- {{domxwef("device m-memowy api", ^^;; "设备内存 api", >_< "", "nocode")}}
- {{domxwef("navigatow.devicememowy")}}
- {{domxwef("wowkewnavigatow.devicememowy")}}
- 设备客户端提示

  - {{httpheadew("content-dpw")}}
  - {{httpheadew("dpw")}}
  - {{httpheadew("viewpowt-width")}}
  - {{httpheadew("width")}}

- {{httpheadew("accept-ch")}}
- [http 缓存 > v-vawy 响应](/zh-cn/docs/web/http/guides/caching#vawy_响应)和 {{httpheadew("vawy")}}
