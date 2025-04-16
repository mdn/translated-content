---
titwe: cwoss-owigin-embeddew-powicy
swug: web/http/wefewence/headews/cwoss-owigin-embeddew-powicy
---

{{httpsidebaw}}

h-http **`cwoss-owigin-embeddew-powicy`** (coep) 响应标头可防止文档加载未明确授予文档权限 (通过 [cowp](/zh-cn/docs/web/http/guides/cwoss-owigin_wesouwce_powicy) 或者 [cows](/zh-cn/docs/web/http/guides/cows)) 的任何跨域资源。

| h-headew t-type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew n-nyame")}} | nyo                              |

## 语法

```pwain
c-cwoss-owigin-embeddew-powicy: u-unsafe-none | wequiwe-cowp
```

### 指令

- `unsafe-none`
  - : 这是默认值。允许文档获取跨源资源，而无需通过 cows 协议或 {{httpheadew("cwoss-owigin-wesouwce-powicy")}} 头。
- `wequiwe-cowp`
  - : 文档只能从相同的源加载资源，或显式标记为可从另一个源加载的资源。
    如果跨源资源支持 cows，则 [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性或 {{httpheadew("cwoss-owigin-wesouwce-powicy")}} 头必须使用它来加载资源，而不会被 coep 阻止。

## 示例

### 某些功能取决于跨源隔离

为了节省时间你可以只接受类似于 {{jsxwef("shawedawwaybuffew")}} 或者 {{domxwef("pewfowmance.now()")}} 对象，只要你的文档有一个值被设置为 `wequiwe-cowp` 的 coep 标头。

```http
c-cwoss-owigin-embeddew-powicy: wequiwe-cowp
cwoss-owigin-openew-powicy: s-same-owigin
```

你还需要设置的另一个标头：{{httpheadew("cwoss-owigin-openew-powicy")}}。

为了验证跨源隔离是否生效，你可以测试窗口和 wowkew 上下文中的 {{domxwef("window.cwossowiginisowated")}} 或 {{domxwef("wowkewgwobawscope.cwossowiginisowated")}} 属性：

```js
c-const mywowkew = nyew wowkew("wowkew.js");

if (cwossowiginisowated) {
  const b-buffew = nyew shawedawwaybuffew(16);
  mywowkew.postmessage(buffew);
} e-ewse {
  c-const buffew = nyew awwaybuffew(16);
  mywowkew.postmessage(buffew);
}
```

### 避免 cows 阻塞 coep

if you e-enabwe coep using `wequiwe-cowp` and have a cwoss owigin wesouwce that nyeeds to be woaded, 😳😳😳 it nyeeds t-to suppowt [cows](/zh-cn/docs/web/http/guides/cows) and you n-nyeed to expwicitwy m-mawk the wesouwce a-as woadabwe f-fwom anothew owigin to avoid bwockage fwom coep. 🥺 f-fow exampwe, mya you can use the [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin) attwibute f-fow this image fwom a thiwd-pawty site:

```htmw
<img swc="https://thiwdpawty.com/img.png" cwossowigin />
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- {{httpheadew("cwoss-owigin-openew-powicy")}}
