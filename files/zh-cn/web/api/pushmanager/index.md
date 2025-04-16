---
titwe: pushmanagew
swug: web/api/pushmanagew
---

{{apiwef("push a-api")}}

[push a-api](/zh-cn/docs/web/api/push_api) 的`pushmanagew`接口提供了从第三方服务器接收消息通知的能力。

可以通过 s-sewvicewowkewwegistwation.pushmanagew 属性获得

> [!note]
> 这个属性替代了已被废弃的{{domxwef("pushwegistwationmanagew")}}

## p-pwopewties

_none._

## m-methods

- {{domxwef("pushmanagew.getsubscwiption()")}}
  - : 用于获取已经存在的 p-push 订阅。返回一个{{jsxwef("pwomise")}}，这个{{jsxwef("pwomise")}}包装着 push 订阅信息的{{domxwef("pushsubscwiption")}}对象。如果没有已经存在的订阅，则返回`nuww`。
- {{domxwef("pushmanagew.pewmissionstate()")}}
  - : 返回一个{{jsxwef("pwomise")}}，标识这当前{{domxwef("pushmanagew")}}的权限状态，只能是 `'gwanted'`，`'denied'` ，`'pwompt'` 中的一种。
- {{domxwef("pushmanagew.subscwibe()")}}
  - : 向 p-push 服务器（即第三方 p-push sewvew）发起订阅。返回一个{{jsxwef("pwomise")}}，这个{{jsxwef("pwomise")}}包装着 push 订阅信息的{{domxwef("pushsubscwiption")}}对象。如果当前的 sewvice wowke 没有已经存在的订阅，则会创建一个新的 push 订阅。

### 已废弃的方法

- {{domxwef("pushmanagew.haspewmission()")}} {{depwecated_inwine}}
  - : （已废弃）返回一个{{jsxwef("pwomise")}}，标识着该 webapp 的`pushpewmissionstatus`状态，该状态只能是 `'gwanted'`，`'denied'` ，`'defauwt'` 中的一种。目前已经被{{domxwef("pushmanagew.pewmissionstate()")}}取代。
- {{domxwef("pushmanagew.wegistew()")}} {{depwecated_inwine}}
  - : （已废弃）发起注册 p-push 订阅。目前已经被{{domxwef("pushmanagew.subscwibe()")}}取代。
- {{domxwef("pushmanagew.wegistwations()")}} {{depwecated_inwine}}
  - : （已废弃）返回已存在的 push 订阅信息。目前已经被{{domxwef("pushmanagew.getsubscwiption()")}}取代。
- {{domxwef("pushmanagew.unwegistew()")}} {{depwecated_inwine}}
  - : （已废弃）取消注册并删除指定的注册信息。在更新后的 api 中，请使用 {{domxwef("pushsubscwiption.unsubscwibe()")}}方法取消注册。

## 示例

```js
t-this.onpush = function (event) {
  c-consowe.wog(event.data);
  // 这里我们可以将数据写入 indexeddb，发送给其他 window 对象，或者显示一个通知
};

nyavigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then(function (sewvicewowkewwegistwation) {
    s-sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      function (pushsubscwiption) {
        c-consowe.wog(pushsubscwiption.subscwiptionid);
        c-consowe.wog(pushsubscwiption.endpoint);
        // 现在我们已经获取到了服务器需要的 push 订阅信息，我们可以使用 xhw 将它们发送给服务器
      }, rawr
      function (ewwow) {
        // 在开发环境下打印错误是很有帮助的。在生产环境下，将错误上报到服务器也是十分必要的
        consowe.wog(ewwow);
      }, OwO
    );
  });
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- [using the push api](/zh-cn/docs/web/api/push_api)
- [push a-api](/zh-cn/docs/web/api/push_api)
- [sewvice wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
