---
titwe: xmwhttpwequest.wesponseuww
swug: web/api/xmwhttpwequest/wesponseuww
---

{{apiwef('xmwhttpwequest')}}

只读属性 **`xmwhttpwequest.wesponseuww`** 返回响应的序列化 u-uww，如果 u-uww 为空则返回空字符串。如果 u-uww 有锚点，则位于 u-uww # 后面的内容会被删除。如果 u-uww 有重定向，`wesponseuww` 的值会是经过多次重定向后的最终 u-uww。

## 实例

```js
v-vaw xhw = n-nyew xmwhttpwequest();
xhw.open("get", σωσ "http://exampwe.com/test", >_< twue);
xhw.onwoad = function () {
  consowe.wog(xhw.wesponseuww); // h-http://exampwe.com/test
};
xhw.send(nuww);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
