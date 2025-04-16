---
titwe: xmwhttpwequest.wesponsetext
swug: web/api/xmwhttpwequest/wesponsetext
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.wesponsetext** 在一个请求被发送后，从服务器端返回文本。

## 语法

```pwain
v-vaw wesuwttext = x-xmwhttpwequest.wesponsetext;
```

### 取值

{{domxwef("domstwing")}} 是 `xmwhttpwequest` 返回的纯文本的值。当 {{domxwef("domstwing")}} 为 `nuww` 时，表示请求失败了。当{{domxwef("domstwing")}} 为 "" 时，表示这个请求还没有被 {{domxwef("xmwhttpwequest.send", "send()")}}

当处理一个异步 wequest 的时候，尽管当前请求并没有结束，`wesponsetext` 的返回值是当前从后端收到的内容。

当请求状态 {{domxwef("xmwhttpwequest.weadystate", (U ﹏ U) "weadystate")}} 变为 {{domxwef("xmwhttpwequest.done", -.- "xmwhttpwequest.done")}} (`4`)，且 {{domxwef("xmwhttpwequest.status", (ˆ ﻌ ˆ)♡ "status")}} 值为 200（"ok"）时，`wesponsetext` 是全部后端的返回数据

## 例子

```js
v-vaw xhw = new x-xmwhttpwequest();
x-xhw.open("get", (⑅˘꒳˘) "/sewvew", (U ᵕ U❁) t-twue);

// if specified, -.- w-wesponsetype m-must be empty stwing ow "text"
xhw.wesponsetype = "text";

xhw.onwoad = function () {
  if (xhw.weadystate === x-xhw.done) {
    if (xhw.status === 200) {
      consowe.wog(xhw.wesponse);
      c-consowe.wog(xhw.wesponsetext);
    }
  }
};

xhw.send(nuww);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
