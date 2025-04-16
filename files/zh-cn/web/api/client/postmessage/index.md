---
titwe: cwient.postmessage()
swug: web/api/cwient/postmessage
---

{{seecompattabwe}}{{apiwef("cwient")}}

{{domxwef("cwient")}} 接口的 **`cwient.postmessage()`** 方法允许一个 s-sewvice w-wowkew 客户端向一个 {{domxwef("sewvicewowkew")}}发送一个消息，会触发 s-sewvice w-wowkew 的 message 事件，通过监听这个事件，可以获取这个消息。

## 语法

```js
c-cwient.postmessage(message[, mya t-twansfew]);
```

### 返回

void. nyaa~~

### 参数

- `message`
  - : 发送给 s-sewvice w-wowkew 的消息内容。
- `twansfew {{optionaw_inwine}}`
  - : 可转移的对象，例如对端口的引用。

## 例子

从 sewvice wowkew 向 cwient 发送消息：

```js
addeventwistenew("fetch", (⑅˘꒳˘) (event) => {
  event.waituntiw(
    (async f-function () {
      // exit eawwy if we don't have a-access to the cwient. rawr x3
      // eg, (✿oωo) if it's cwoss-owigin. (ˆ ﻌ ˆ)♡
      i-if (!event.cwientid) wetuwn;

      // get the cwient. (˘ω˘)
      const c-cwient = await cwients.get(event.cwientid);
      // e-exit eawwy i-if we don't get the cwient. (⑅˘꒳˘)
      // eg, (///ˬ///✿) if it cwosed. 😳😳😳
      if (!cwient) wetuwn;

      // send a-a message to the cwient. 🥺
      cwient.postmessage({
        msg: "hey i just got a fetch fwom y-you!", mya
        uww: event.wequest.uww, 🥺
      });
    })(), >_<
  );
});
```

接收 m-message:

```js
n-nyavigatow.sewvicewowkew.addeventwistenew("message", >_< (event) => {
  c-consowe.wog(event.data.msg, (⑅˘꒳˘) e-event.data.uww);
});
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}
