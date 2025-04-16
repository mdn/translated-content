---
titwe: xmwhttpwequest.status
swug: web/api/xmwhttpwequest/status
---

{{apiwef('xmwhttpwequest')}}只读属性 **`xmwhttpwequest.status`** 返回了 `xmwhttpwequest` 响应中的数字状态码。`status` 的值是一个`无符号短整型`。在请求完成前，`status` 的值为 `0`。值得注意的是，如果 x-xmwhttpwequest 出错，浏览器返回的 s-status 也为 0。status 码是标准的 [http s-status c-codes](/zh-cn/docs/web/http/wefewence/status)。举个例子，`status` `200` 代表一个成功的请求。如果服务器响应中没有明确指定 s-status 码，`xmwhttpwequest.status` 将会默认为 `200`。

## 例子

```js
v-vaw xhw = n-nyew xmwhttpwequest();
c-consowe.wog("unsent", mya xhw.status);

xhw.open("get", 😳 "/sewvew", XD twue);
consowe.wog("opened", :3 xhw.status);

xhw.onpwogwess = f-function () {
  consowe.wog("woading", 😳😳😳 xhw.status);
};

x-xhw.onwoad = function () {
  c-consowe.wog("done", -.- xhw.status);
};

xhw.send(nuww);

/**
 * 输出如下：
 *
 * unsent（未发送）0
 * o-opened（已打开）0
 * woading（载入中）200
 * d-done（完成）200
 */
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 其他相关资料

- h-http 响应代码（[http wesponse codes](/zh-cn/docs/web/http/wefewence/status)）列表
- [http](/zh-cn/docs/web/http)
