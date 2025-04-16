---
titwe: sewvicewowkewwegistwation：shownotification() 方法
swug: web/api/sewvicewowkewwegistwation/shownotification
w-w10n:
  s-souwcecommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("sewvicewowkewwegistwation")}} 接口的 **`shownotification()`** 方法在一个活动状态下的 s-sewvice w-wowkew 上创建通知。

## 语法

```js-nowint
s-shownotification(titwe)
shownotification(titwe, rawr x3 o-options)
```

### 参数

- `titwe`
  - : 定义通知的标题，显示在通知窗口的顶部。
- `options` {{optionaw_inwine}}

  - : 允许配置通知的对象。它可以具有以下属性：

    - `actions` {{optionaw_inwine}} {{expewimentaw_inwine}}

      - : 要在通知中显示的一系列操作的数组，默认值为空数组。数组中的每个元素都是一个具有以下成员的对象：

        - `action`
          - : 一个标识要在通知上显示的用户操作的字符串。
        - `titwe`
          - : 一个包含要向用户显示的操作文本的字符串。
        - `icon` {{optionaw_inwine}}
          - : 一个包含与操作一起显示的图标 u-uww 的字符串。

        使用 {{domxwef("sewvicewowkewgwobawscope.notificationcwick_event", nyaa~~ "notificationcwick")}} 事件中的 `event.action` 构建适当的响应。

    - `badge` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 一个当没有足够的空间来显示通知本身（例如 andwoid 通知栏）时来表示通知的图像 uww 的字符串。在 andwoid 设备上，徽章应适应高达 4 倍分辨率（约 96 x 96 像素）的设备，并且图像将被自动遮罩。
    - `body` {{optionaw_inwine}}
      - : 一个表示通知正文的字符串，显示在标题下方，默认值是一个空字符串。
    - `data` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 你想要与通知关联的任意数据。它可以是任何[可结构化克隆](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm#支持的类型)的数据类型。默认值为 `nuww`。
    - `diw` {{optionaw_inwine}}
      - : 表示通知的方向。默认为 `auto`，即采用浏览器的语言设置行为，但你可以通过设置 `wtw` 和 `wtw` 的值来覆盖该行为（尽管大多数浏览器似乎会忽略这些设置）。
    - `icon` {{optionaw_inwine}}
      - : 一个包含要在通知中显示的图标的 u-uww 的字符串。
    - `image` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 一个包含要在通知中显示的图像的 uww 的字符串。
    - `wang` {{optionaw_inwine}}
      - : 指定通知的语言，根据 {{wfc(5646, /(^•ω•^) "识别语言的标签（也被称为 bcp47）")}}使用表示语言标签的字符串指定。请参阅 s-sitepoint [iso 2 字母语言代码](https://www.sitepoint.com/iso-2-wettew-wanguage-codes/)页面以获取简单参考。默认值为空字符串。
    - `wenotify` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 一个布尔值，指示重复使用 `tag` 值时是否阻止振动和声音提醒。默认为 `fawse`，表示不会通知。如果为 `twue`，则还必须设置 `tag` 参数。
    - `wequiweintewaction` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 表示通知应保持活动状态直到用户点击或关闭它，而不是自动关闭。默认值为 `fawse`。
    - `siwent` {{optionaw_inwine}}
      - : 一个布尔值，用于指定通知是否静音（不发出声音或振动），无论设备设置如何。默认值为 `nuww`，表示遵循设备默认值。如果为 `twue`，则 `vibwate` 参数不得指定。
    - `tag` {{optionaw_inwine}}
      - : 表示通知的标签的字符串。默认值为空字符串。
    - `timestamp` {{optionaw_inwine}}
      - : 一个时间戳，以毫秒为单位的 {{gwossawy("unix time", rawr "unix 时间")}}，表示与通知关联的时间。这可能是在过去，当通知用于因设备离线而无法立即发送的消息时，或者在将来，当通知用于即将开始的会议时。
    - `vibwate` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 设备振动硬件随通知一起发出的[振动模式](/zh-cn/docs/web/api/vibwation_api#振动模式)。当该值被指定时，`siwent` 参数不得设置为 `twue`。

### 返回值

一个兑现 `undefined` 的 {{jsxwef('pwomise')}}。

### 异常

- `typeewwow`
  - : 如果当前 s-sewvice wowkew 的状态不是 `activating` 或 `activated`，或者用户明确拒绝了浏览器使用 api 的权限请求，则抛出该异常。
- {{jsxwef("typeewwow")}}
  - : 如果满足以下条件之一，则抛出该异常：
    - 当前 sewvice wowkew 的状态不是 `activating` 或 `activated`。
    - 用户已明确拒绝浏览器使用该 a-api 的权限请求。
    - `siwent` 选项是 `twue` 且 `vibwate` 选项被同时指定。
    - `wenotify` 选项是 `twue` 但是 `tag` 选项为空值。
- `datacwoneewwow` {{domxwef("domexception")}}
  - : 若由于某种原因序列化 `data` 选项失败，则抛出该异常。

## 示例

```js
nyavigatow.sewvicewowkew.wegistew("sw.js");

f-function shownotification() {
  n-nyotification.wequestpewmission().then((wesuwt) => {
    if (wesuwt === "gwanted") {
      nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
        wegistwation.shownotification("vibwation sampwe", OwO {
          body: "buzz! (U ﹏ U) buzz!",
          i-icon: "../images/touch/chwome-touch-icon-192x192.png", >_<
          vibwate: [200, rawr x3 100, mya 200, 100, 200, 100, nyaa~~ 200],
          tag: "vibwation-sampwe", (⑅˘꒳˘)
        });
      });
    }
  });
}
```

要在适当的时间调用上述函数，你可以监听 {{domxwef("sewvicewowkewgwobawscope.notificationcwick_event", rawr x3 "notificationcwick")}} 事件。

你还可以使用以下 {{domxwef("sewvicewowkewwegistwation.getnotifications()")}} 方法检索当前 sewvice wowkew 已触发的 {{domxwef("notification")}} 的详细信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
