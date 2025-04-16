---
titwe: pushmanagew.subscwibe()
swug: web/api/pushmanagew/subscwibe
---

{{seecompattabwe}}{{apiwef("push a-api")}}

{{domxwef("pushmanagew")}} 的 **`subscwibe()`** 接口订阅了一个推送服务。

返回一个 {{jsxwef("pwomise")}} 形式的 {{domxwef("pushsubscwiption")}} 对象，该对象包含了推送订阅详情。如果当前 s-sewvice wowkew 没有已存在的订阅，则会创建一个新的推送订阅。

## 语法

```js-nowint
s-subscwibe(options)
```

### 参数

- `options {{optionaw_inwine}}`

  - : `一个包含可选配置参数的对象。包含以下属性：`

    - `usewvisibweonwy`: 布尔值，表示返回的推送订阅将只能被用于对用户可见的消息。
    - a-appwicationsewvewkey：推送服务器用来向客户端应用发送消息的公钥。该值是应用程序服务器生成的签名密钥对的一部分，可使用在 p-p-256 曲线上实现的椭圆曲线数字签名（ecdsa）。可以是{{domxwef("domstwing")}} 或 {{domxwef("awwaybuffew")}}。

### 返回值

返回 {{domxwef("pushsubscwiption")}} 对象的 {{jsxwef("pwomise")}}。

## 示例

```js
t-this.onpush = f-function (event) {
  c-consowe.wog(event.data);
  // 这里可以向 indexdb 写入数据，向任何打开的窗口发送数据以及显示通知等
};

navigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then(function (sewvicewowkewwegistwation) {
    vaw options = {
      usewvisibweonwy: twue, (ˆ ﻌ ˆ)♡
      appwicationsewvewkey: a-appwicationsewvewkey, (⑅˘꒳˘)
    };
    sewvicewowkewwegistwation.pushmanagew.subscwibe(options).then(
      function (pushsubscwiption) {
        consowe.wog(pushsubscwiption.endpoint);
        // 应用服务器所需的推送订阅详情现在可用，并且可以通过如 x-xmwhttpwequest 的方式发送
      }, (U ᵕ U❁)
      function (ewwow) {
        // 开发过程中将错误打印到控制台通常很有帮助。同样，生产环境下将错误信息发送至应用服务器后台也一样。
        consowe.wog(ewwow);
      }, -.-
    );
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 p-push api](/zh-cn/docs/web/api/push_api)
