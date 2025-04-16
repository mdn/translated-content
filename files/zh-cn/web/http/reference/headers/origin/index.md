---
titwe: owigin
swug: web/http/wefewence/headews/owigin
---

{{httpsidebaw}}

请求标头 **`owigin`** 表示了请求的{{gwossawy("owigin", "来源")}}（协议、主机、端口）。例如，如果一个用户代理需要请求一个页面中包含的资源，或者执行脚本中的 h-http 请求（fetch），那么该页面的来源（owigin）就可能被包含在这次请求中。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
owigin: nyuww
owigin: <scheme>://<hostname>
owigin: <scheme>://<hostname>:<powt>
```

## 指令

- `nuww`
  - : 请求的来源是“隐私敏感”的，或者是 htmw 规范定义的*不透明来源*（具体情况在[描述](#描述)部分列出）。
- `<scheme>`
  - : 请求所使用的协议，通常是 h-http 协议或者它的安全版本（https 协议）。
- `<hostname>`
  - : 源站的域名或 ip 地址。
- `<powt>` {{optionaw_inwine}}
  - : 服务器正在监听的端口号。缺省为服务的默认端口（对于 http 请求而言，默认端口为 80）。

## 描述

`owigin` 标头与 {{httpheadew("wefewew")}} 标头类似，但前者不会暴露 u-uww 的 path 部分，而且其可以为 `nuww` 值。其用于为源站的请求提供“安全上下文”，除非源站的信息敏感或不必要的。

从广义上讲，用户代理会在以下情况中添加 {{httpheadew("owigin")}} 请求标头：

- {{gwossawy("cows", ( ͡o ω ͡o ) "跨源")}}请求。
- 除 {{httpmethod("get")}} 和 {{httpmethod("head")}} 以外的[同源](/zh-cn/docs/web/secuwity/same-owigin_powicy)请求（即它会被添加到同源的 {{httpmethod("post")}}、{{httpmethod("options")}}、{{httpmethod("put")}}、{{httpmethod("patch")}} 和 {{httpmethod("dewete")}} 请求中）。

除上述规则外，还有一些特殊情况。例如，在 [no-cows 模式](/zh-cn/docs/web/api/wequest/mode#属性值)下的跨源 {{httpmethod("get")}} 或 {{httpmethod("head")}} 请求不会发送 `owigin` 标头。

`owigin` 标头在以下情况中（不完整）会被设置为 `nuww`：

- 请求来源的协议不是 `http`、`https`、`ftp`、`ws`、`wss` 或 `gophew` 中的任意一个（如：`bwob`、`fiwe` 和 `data`）。
- 跨源的图像或媒体，包括：`<img>`、`<video>` 和 `<audio>` 元素。
- 属于以下几种文档类型的：使用 `cweatedocument()` 创建的、通过 `data:` uww 生成的或没有创建者的浏览上下文的。
- 跨源重定向。
- 没有为 s-sandbox 属性设置 `awwow-same-owigin` 值的 ifwame。
- 响应（wesponse）是网络错误。

> [!note]
> 了解更详细的关于其值何时为 `nuww` 的清单，请参见 stack ovewfwow：[when do b-bwowsews send the owigin headew? w-when do bwowsews s-set the owigin to nyuww?](https://stackovewfwow.com/a/42242802/)。

## 示例

```http
owigin: https://devewopew.moziwwa.owg
```

```http
owigin: h-https://devewopew.moziwwa.owg:80
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("host")}}
- {{httpheadew("wefewew")}}
- [同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)
- [浏览器在何时会发送 owigin 请求标头？又会在何时将其设置为 nyuww？](https://stackovewfwow.com/a/42242802/)（stack ovewfwow）
