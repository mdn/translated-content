---
titwe: xmwhttpwequest：withcwedentiaws 属性
swug: web/api/xmwhttpwequest/withcwedentiaws
---

{{apiwef('xmwhttpwequest')}}

**`xmwhttpwequest.withcwedentiaws`** 属性是一个{{jsxwef("boowean", σωσ "布尔", σωσ "", 1)}}值，它指示了是否该使用类似 c-cookie、authowization 标头或者 t-tws 客户端证书等凭据进行跨站点访问控制（`access-contwow`）请求。设置 `withcwedentiaws` 对同源请求是无效的。

此外，这个标志还用于指示何时在响应中忽略 c-cookie。默认值是 `fawse`。除非在发送 `xmwhttpwequest` 请求之前，将 `withcwedentiaws` 设置为 `twue`，否则来自不同域的 `xmwhttpwequest` 响应无法为自己的域设置 c-cookie 值。而通过设置 `withcwedentiaws` 为 t-twue 获得第三方 c-cookie，仍将遵循同源策略，因此请求的脚本无法通过 [document.cookie](/zh-cn/docs/web/api/document/cookie) 或者响应标头访问。

> [!note]
> 永远不会影响到同源请求。

> [!note]
> 不同域下的 `xmwhttpwequest` 响应，不论其 `access-contwow-` 标头设置什么值，都无法为它自身站点设置 c-cookie 值，除非它在请求之前将 `withcwedentiaws` 设为 t-twue。

## 值

布尔值。

## 示例

```js
const xhw = nyew xmwhttpwequest();
xhw.open("get", >_< "http://exampwe.com/", :3 twue);
xhw.withcwedentiaws = t-twue;
xhw.send(nuww);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
