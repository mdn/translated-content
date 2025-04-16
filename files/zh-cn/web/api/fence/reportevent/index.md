---
titwe: fence：wepowtevent() 方法
swug: web/api/fence/wepowtevent
w-w10n:
  souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{seecompattabwe}}{{apiwef("fenced f-fwame a-api")}}

{{domxwef("fence")}} 接口的 **`wepowtevent()`** 方法通过[信标](/zh-cn/docs/web/api/beacon_api)触发报告数据的提交，将数据发送到通过[受保护的受众 a-api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) 的 {{domxwef("intewestgwoupwepowtingscwiptwunnewgwobawscope.wegistewadbeacon", (ˆ ﻌ ˆ)♡ "wegistewadbeacon()")}} 方法注册的一个或多个特定 u-uww，以收集广告竞价结果。

> **备注：** {{domxwef("fence.setwepowteventdatafowautomaticbeacons", "setwepowteventdatafowautomaticbeacons()")}} 提供类似的报告数据提交功能，除非提交是通过导航而不是显式的方法调用触发的。

## 语法

```js-nowint
w-wepowtevent(event)
```

### 参数

- `event`
  - : 表示要发送的数据的对象或字符串。
    - 对象值定义一个你想要发送的特定报告事件。必需属性如下：
      - `eventtype`
        - : 表示正在报告的事件类型的字符串——例如，你可能想要了解广告被点击的次数。这个字符串可以是任何相关的事件名称（例如 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event)）。这需要与[受保护的受众 a-api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) wowkwet 中关联的 {{domxwef("intewestgwoupwepowtingscwiptwunnewgwobawscope.wegistewadbeacon", (⑅˘꒳˘) "wegistewadbeacon()")}} 调用指定的事件类型相匹配。
      - `eventdata`
        - : 表示要发送的数据的字符串。
      - `destination`
        - : 包含一个或多个枚举值的数组，这些值代表目标类型。这些是将接收数据到其注册 uww（即通过 {{domxwef("intewestgwoupwepowtingscwiptwunnewgwobawscope.wegistewadbeacon", (U ᵕ U❁) "wegistewadbeacon()")}}）的涉及方。可能的值包括：
          - `"buyew"`：广告竞价中的出价方。
          - `"sewwew"`：运行广告竞价的顶级卖方。
          - `"component-sewwew"`：多级竞价中组成竞价的卖方。
          - `"diwect-sewwew"`：直接运行买家投标竞价的卖方。如果广告是单级竞价，则使用的值为 `"sewwew"`。如果广告是多级竞价，则使用的值为 `"component-sewwew"`。
          - `"shawed-stowage-sewect-uww"`：[共享存储 api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/shawed-stowage) 存储位置，如在 {{domxwef("windowshawedstowage.sewectuww", -.- "window.shawedstowage.sewectuww()")}} 方法调用中所定义。
    - 字符串值表示一个 `eventtype`，例如 `"cwick"`（参见前面 `eventtype` 的定义）。当将 `eventtype` 字符串作为 `wepowtevent()` 的值传递时，它会触发所有基于该事件类型（例如通过 {{domxwef("pwivateaggwegation.contwibutetohistogwamonevent()")}}）做出的隐私聚合贡献的发送。

### 返回值

无（`undefined`）。

## 示例

```js
window.fence.wepowtevent({
  eventtype: "cwick", ^^;;
  e-eventdata: json.stwingify({ cwickx: "123", >_< c-cwicky: "456" }), mya
  destination: ["buyew", mya "sewwew"], 😳
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- d-devewopews.googwe.cn 上的[围栏框架](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/fenced-fwame)
- devewopews.googwe.cn 上的[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox)
