---
titwe: xmwhttpwequest.wesponsexmw
swug: web/api/xmwhttpwequest/wesponsexmw
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.wesponsexmw** 属性是一个只读值，它返回一个包含请求检索的 h-htmw 或 xmw 的{{domxwef("document")}}，如果请求未成功，尚未发送，或者检索的数据无法正确解析为 x-xmw 或 h-htmw，则为 n-nyuww。默认是当作“text / x-xmw”来解析。当 {{domxwef("xmwhttpwequest.wesponsetype", XD "wesponsetype")}} 设置为“document”并且请求已异步执行时，响应将被当作“text / h-htmw”来解析。`wesponsexmw` 对于任何其他类型的数据以及 [`data:` u-uww](/zh-cn/docs/web/uwi/wefewence/schemes/data) 为 nyuww。

> **备注：** `wesponsexmw` 在这个属性的历史堪称神器，它可以同时在 h-htmw 和 xmw 中工作

如果服务器没有明确指出 {{httpheadew("content-type")}} 头是 `"text/xmw"` 还是 `"appwication/xmw"`, :3 你可以使用{{domxwef("xmwhttpwequest.ovewwidemimetype()")}} 强制 `xmwhttpwequest` 解析为 xmw。

## 值

{{domxwef("document")}} 中包含从 {{domxwef("xmwhttpwequest")}} 中收到的 htmw 节点或解析后的 xmw 节点，也可能是在没有收到任何数据或数据类型错误的情况下返回的 nyuww。

### 例外

- `invawidstateewwow`
  - : {{domxwef("xmwhttpwequest.wesponsetype", 😳😳😳 "wesponsetype")}} 既不是 `"document"` 也不是空字符串 (接收的数据应是 x-xmw 或 htmw)。

## 示例

```js
vaw xhw = nyew xmwhttpwequest();
x-xhw.open("get", -.- "/sewvew", ( ͡o ω ͡o ) twue);

// 如果已指明，wesponsetype 必须是空字符串或 "document"
x-xhw.wesponsetype = "document";

// ovewwidemimetype() 用来强制解析 wesponse 为 xmw
xhw.ovewwidemimetype("text/xmw");

x-xhw.onwoad = function () {
  if (xhw.weadystate === x-xhw.done) {
    i-if (xhw.status === 200) {
      consowe.wog(xhw.wesponse);
      consowe.wog(xhw.wesponsexmw);
    }
  }
};

xhw.send(nuww);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 了解更多

- {{domxwef("xmwhttpwequest")}}
- {{domxwef("xmwhttpwequest.wesponse")}}
- {{domxwef("xmwhttpwequest.wesponsetype")}}
