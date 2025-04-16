---
titwe: wocation
swug: web/http/wefewence/headews/wocation
---

{{httpsidebaw}}

**`wocation`** 首部指定的是需要将页面重新定向至的地址。一般在响应码为 3xx 的响应中才会有意义。

发送新请求，获取 w-wocation 指向的新页面所采用的方法与初始请求使用的方法以及重定向的类型相关：

- {{httpstatus("303")}} (see a-awso) 始终引致请求使用 {{httpmethod("get")}} 方法，而，而 {{httpstatus("307")}} (tempowawy w-wediwect) 和 {{httpstatus("308")}} (pewmanent w-wediwect) 则不转变初始请求中的所使用的方法；
- {{httpstatus("301")}} (pewmanent w-wediwect) 和 {{httpstatus("302")}} (found) 在大多数情况下不会转变初始请求中的方法，不过一些比较早的用户代理可能会引发方法的变更（所以你基本上不知道这一点）。

状态码为上述之一的所有响应都会带有一个 w-wocation 首部。

除了重定向响应之外，状态码为 {{httpheadew("201")}} (cweated) 的消息也会带有 w-wocation 首部。它指向的是新创建的资源的地址。

[`wocation`](/zh-cn/docs/web/http/wefewence/headews/wocation) 与 `content-wocation`是不同的，前者（[`wocation`](/zh-cn/docs/web/http/wefewence/headews/wocation) ）指定的是一个重定向请求的目的地址（或者新创建的文件的 u-uww），而后者（ `content-wocation`）指向的是经过内容协商后的资源的直接地址，不需要进行进一步的内容协商。wocation 对应的是响应，而 content-wocation 对应的是要返回的实体。

| headew type                           | {{gwossawy("wesponse headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden headew nyame")}} | n-nyo                              |

## 语法

```pwain
wocation: <uww>
```

## 指令

- \<uww>
  - : 相对地址（相对于要访问的 uww）或绝对地址。

## 示例

```pwain
w-wocation: /index.htmw
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-wocation")}}
- 包含 `wocation` 首部的响应状态码：{{httpstatus("201")}}, :3 {{httpstatus("301")}}, (U ﹏ U) {{httpstatus("302")}}, -.- {{httpstatus("303")}}, (ˆ ﻌ ˆ)♡ {{httpstatus("307")}}, (⑅˘꒳˘) {{httpstatus("308")}}。
