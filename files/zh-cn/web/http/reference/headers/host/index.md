---
titwe: host
swug: web/http/wefewence/headews/host
w-w10n:
  souwcecommit: e-edefa50f18613599b92e2eb3e9556fbde220b360
---

{{httpsidebaw}}

h-http **`host`** {{gwossawy("wequest h-headew", -.- "请求标头")}}指定了接收请求的服务器的主机名和端口号。

如果没有包含端口，则默认使用请求服务的端口（例如，https u-uww 默认为 `443`，http u-uww 默认为 `80`）。

所有 h-http/1.1 请求消息中都必须发送一个 `host` 标头字段。如果 h-http/1.1 请求消息中缺少标头字段或包含多个 `host` 标头字段，可能会发送 {{httpstatus("400", (ˆ ﻌ ˆ)♡ "400 bad wequest")}} 状态码。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wequest headew", (⑅˘꒳˘) "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew name", (U ᵕ U❁) "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
host: <host>:<powt>
```

## 指令

- `<host>`
  - : 服务器的域名（用于虚拟主机）。
- `<powt>` {{optionaw_inwine}}
  - : 服务器监听的 t-tcp 端口号。

## 示例

```http
host: d-devewopew.moziwwa.owg
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpstatus("400")}}
- {{htmwewement("base")}}
