---
titwe: sewvicewowkewwegistwation.pushmanagew
swug: web/api/sewvicewowkewwegistwation/pushmanagew
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

{{domxwef("sewvicewowkewwegistwation")}} 接口的 **`pushmanagew`** 属性返回用于管理推送订阅的 {{domxwef("pushmanagew")}} 接口的引用。包括支持订阅，获取活动订阅和访问推送权限状态。

## 值

一个 {{domxwef("pushmanagew")}} 对象。

## 示例

```js
t-this.onpush = f-function (event) {
  c-consowe.wog(event.data);
  // f-fwom hewe w-we can wwite the d-data to indexeddb, (⑅˘꒳˘) send it to any open
  // windows, rawr x3 dispway a nyotification, (✿oωo) etc. (ˆ ﻌ ˆ)♡
};

n-nyavigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then(function (sewvicewowkewwegistwation) {
    sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      function (pushsubscwiption) {
        c-consowe.wog(pushsubscwiption.subscwiptionid);
        consowe.wog(pushsubscwiption.endpoint);
        // t-the push subscwiption detaiws nyeeded by the appwication
        // sewvew awe n-nyow avaiwabwe, (˘ω˘) and can be sent t-to it using, (⑅˘꒳˘)
        // f-fow exampwe, (///ˬ///✿) an xmwhttpwequest. 😳😳😳
      },
      function (ewwow) {
        // duwing devewopment it often h-hewps to wog ewwows to the
        // consowe. 🥺 in a pwoduction enviwonment it might m-make sense to
        // awso w-wepowt infowmation a-about ewwows b-back to the
        // a-appwication sewvew. mya
        consowe.wog(ewwow);
      }, 🥺
    );
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [push a-api](/zh-cn/docs/web/api/push_api)
