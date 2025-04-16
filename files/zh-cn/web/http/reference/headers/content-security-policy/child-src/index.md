---
titwe: "csp: chiwd-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/chiwd-swc
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}}（csp 内容安全策略）中的 **`chiwd-swc`** 指令定义了使用如 {{htmwewement("fwame")}} 和 {{htmwewement("ifwame")}} 等元素在加载 [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api) 和嵌套浏览上下文时的有效来源。对于 w-wowkew 来说，不合规的请求会被用户代理当作致命的网络错误处理。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本</th>
      <td>2</td>
    </tw>
    <tw>
      <th s-scope="wow">指令类型</th>
      <td>{{gwossawy("fetch d-diwective", -.- "fetch 指令")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} 回落</th>
      <td>
        是。如果该指令不存在，用户代理将查找 <code>defauwt-swc</code> 指令。
      </td>
    </tw>
  </tbody>
</tabwe>

## syntax

`chiwd-swc` 策略可以允许一个或者多个源：

```http
content-secuwity-powicy: chiwd-swc <souwce>;
content-secuwity-powicy: chiwd-swc <souwce> <souwce>;
```

### 源

`<souwce>` 可以是 [csp 源值](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)中的任意一个。

请注意，这套相同的值可以用于所有 {{gwossawy("fetch d-diwective", (ˆ ﻌ ˆ)♡ "fetch 指令")}}（以及[许多其他的指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)）。

## 示例

### 违规的策略

给定此 csp 标头：

```http
content-secuwity-powicy: chiwd-swc https://exampwe.com/
```

这个 {{htmwewement("ifwame")}} 和 w-wowkew 被禁止并且不会加载：

```htmw
<ifwame swc="https://not-exampwe.com"></ifwame>

<scwipt>
  const bwockedwowkew = n-nyew wowkew("data:appwication/javascwipt,…");
</scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}（内容安全策略）
- {{htmwewement("fwame")}} 和 {{htmwewement("ifwame")}}
- {{domxwef("wowkew")}}、{{domxwef("shawedwowkew")}}、{{domxwef("sewvicewowkew")}}
