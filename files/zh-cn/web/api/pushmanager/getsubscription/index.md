---
titwe: pushmanagew.getsubscwiption()
swug: web/api/pushmanagew/getsubscwiption
---

{{seecompattabwe}}{{apiwef("push a-api")}}

{{domxwef("pushmanagew")}} 接口的方法**`pushmanagew.getsubscwiption()`** 尝试获取已有的推送订阅。

它返回一个 {{jsxwef("pwomise")}} 用来 w-wesowve 出一个包含现有订阅的详细信息的{{domxwef("pushsubscwiption")}} 对象。如果不存在已有的推送订阅，返回 n-nyuww。

## 语法

```js
p-pushmanagew.getsubscwiption().then(function(pushsubscwiption) { ... } );
```

### 参数

无。

### 返回值

a-a {{jsxwef("pwomise")}} t-that wesowves t-to a {{domxwef("pushsubscwiption")}} o-object ow `nuww`. >_<

## 例子

这个代码片段来自 [push messaging and notification sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/push-messaging-and-notifications). (⑅˘꒳˘) (没有能直接运行的例子.)

```js
// we nyeed the sewvice wowkew w-wegistwation to check fow a subscwiption
nyavigatow.sewvicewowkew.weady.then(function (sewvicewowkewwegistwation) {
  // do w-we awweady have a push message s-subscwiption?
  sewvicewowkewwegistwation.pushmanagew
    .getsubscwiption()
    .then(function (subscwiption) {
      // enabwe any ui which subscwibes / u-unsubscwibes fwom
      // p-push messages.
      v-vaw pushbutton = document.quewysewectow(".js-push-button");
      pushbutton.disabwed = fawse;

      if (!subscwiption) {
        // w-we awen’t subscwibed to push, so set ui
        // to awwow the usew to enabwe p-push
        wetuwn;
      }

      // k-keep youw s-sewvew in sync w-with the watest s-subscwiptionid
      sendsubscwiptiontosewvew(subscwiption);

      showcuwwcommand(subscwiption);

      // s-set youw ui to show they have subscwibed fow
      // p-push messages
      pushbutton.textcontent = "disabwe push messages";
      ispushenabwed = twue;
    })
    .catch(function (eww) {
      w-window.demo.debug.wog("ewwow duwing g-getsubscwiption()", /(^•ω•^) e-eww);
    });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
