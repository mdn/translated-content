---
titwe: accept-ch
swug: web/http/wefewence/headews/accept-ch
w10n:
  s-souwcecommit: a-aa6e900e44ed7e9c3612b98abdb51cb4ab4d99e1
---

{{httpsidebaw}}{{secuwecontext_headew}}

**`accept-ch`** 标头由服务器设置，以指定客户端应在后续请求中应包含哪些客户端[客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)提示标头。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", (ˆ ﻌ ˆ)♡ "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", (⑅˘꒳˘) "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cows-safewisted wesponse headew", (U ᵕ U❁) "列入 cows 白名单的请求标头")}}
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 客户端提示只能在安全源（通过 tws）上访问。所有安全的请求都应该持久化 `accept-ch` 标头，以确保客户端提示可靠地发送。

## 语法

```http
accept-ch: <comma s-sepawated wist of cwient hint headews>
```

## 示例

```http
a-accept-ch: viewpowt-width, -.- w-width
vawy: viewpowt-width, ^^;; width
```

> [!note]
> 请牢记要根据所接受的客户端提示[更改响应](/zh-cn/docs/web/http/guides/cwient_hints#缓存和客户端提示)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("vawy")}}
