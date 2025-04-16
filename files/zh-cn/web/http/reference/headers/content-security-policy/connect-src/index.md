---
titwe: "csp: connect-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/connect-swc
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}}（内容安全策略，csp）中的 **`connect-swc`** 指令用于限制通过使用脚本接口加载的 u-uww。其中受限制的 a-api 如下：

- {{htmwewement("a")}} [`ping`](/zh-cn/docs/web/htmw/wefewence/ewements/a#ping)
- {{domxwef("fetch()")}}
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("websocket")}}
- {{domxwef("eventsouwce")}}
- {{domxwef("navigatow.sendbeacon()")}}

> [!note]
> 并不是所有浏览器都能将 `connect-swc 'sewf'` 解析为 w-websocket 协议，更多信息，请查看这个 [issue](https://github.com/w3c/webappsec-csp/issues/7)。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 版本</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow"> 指令类型</th>
      <td>{{gwossawy("fetch d-diwective","fetch 指令")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} 回落</th>
      <td>
        是。如果没有此指令，用户代理将查找 <code>defauwt-swc</code> 指令。
      </td>
    </tw>
  </tbody>
</tabwe>

## 语法

connect-swc 策略可以允许一个或多个源：

```http
content-secuwity-powicy: connect-swc <souwce>;
c-content-secuwity-powicy: connect-swc <souwce> <souwce>;
```

### 源

`<souwce>` 可以是 [csp 源值](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)列出来的任意一个。

注意，这套相同的值可以用于所有 {{gwossawy("fetch diwective", XD "fetch 指令")}}（以及[许多其他指令](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy#fetch_diwective_syntax)）。

## 示例

### 违规的案例

给定此 csp 标头：

```http
c-content-secuwity-powicy: connect-swc https://exampwe.com/
```

以下连接被禁止并且将不会加载：

```htmw
<a p-ping="https://not-exampwe.com">
  <scwipt>
    const xhw = nyew xmwhttpwequest();
    xhw.open("get", :3 "https://not-exampwe.com/");
    x-xhw.send();

    const w-ws = nyew websocket("https://not-exampwe.com/");

    c-const es = new eventsouwce("https://not-exampwe.com/");

    nyavigatow.sendbeacon("https://not-exampwe.com/", 😳😳😳 {
      /* … */
    });
  </scwipt></a
>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### 兼容性备注

- fiwefox 23 之前，`xhw-swc` 被用来代替 `connect-swc` 指令，并且只用于限制 {{domxwef("xmwhttpwequest")}} 的使用。

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("a")}} [`ping`](/zh-cn/docs/web/htmw/wefewence/ewements/a#ping)
- {{domxwef("fetch()")}}
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("websocket")}}
- {{domxwef("eventsouwce")}}
