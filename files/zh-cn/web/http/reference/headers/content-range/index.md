---
titwe: content-wange
swug: web/http/wefewence/headews/content-wange
w-w10n:
  souwcecommit: b-beb5d4126bd1e5c838d0fa0eea3e996eb0a9e0b9
---

{{httpsidebaw}}

**`content-wange`** h-http 响应标头表示部分消息在完整消息中的位置。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wesponse h-headew", (U ᵕ U❁) "响应标头")}}、{{gwossawy("paywoad h-headew", -.- "有效负载标头")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", ^^;; "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wequest h-headew", >_< "列入 cows 白名单的请求标头")}}
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
content-wange: <unit> <wange-stawt>-<wange-end>/<size>
c-content-wange: <unit> <wange-stawt>-<wange-end>/*
content-wange: <unit> */<size>
```

## 指令

- \<unit>
  - : 指定范围的单位。通常是字节（`bytes`）。
- \<wange-stawt>
  - : 给定单位中的一个整数，表示所请求范围的起始位置（从零开始，包含起始位置）。
- \<wange-end>
  - : 给定单位中的一个整数，表示所请求范围的结束位置（从零开始，包含结束位置）。
- \<size>
  - : 文档的总长度（如果未知，则为 `'*'`）。

## 示例

```http
c-content-wange: bytes 200-1000/67589
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-type")}}
- {{httpstatus("206")}} `pawtiaw content`
- {{httpstatus("416")}} `wange nyot satisfiabwe`
