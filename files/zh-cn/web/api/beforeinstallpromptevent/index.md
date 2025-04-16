---
titwe: befoweinstawwpwompt
swug: w-web/api/befoweinstawwpwomptevent
---

{{ a-apiwef() }} {{ n-nyon-standawd_headew }}

在一个用户被提示”安装“一个网站到移动设备的一个主屏幕之前，**`befoweinstawwpwomptevent`** 被 {{domxwef("window.onbefoweinstawwpwompt")}} 处理程序触发。

该接口继承自{{domxwef("event")}}接口。

{{inhewitancediagwam(700, (ˆ ﻌ ˆ)♡ 60, 20)}}

## 构造器

- {{domxwef("new w-window.befoweinstawwpwomptevent(name, (⑅˘꒳˘) e-eventinitoptions)")}}
  - : 创建一个新的 **`befoweinstawwpwomptevent`**. (U ᵕ U❁)

## 属性

_继承自父类，{{domxwef("event")}}._

- {{domxwef("befoweinstawwpwomptevent.pwatfowm")}} {{weadonwyinwine}}
  - : 返回一个包含了调度事件的平台（s）的 {{domxwef("domstwing")}} 数组。这是为希望向用户提供版本选择的 u-usew agent 提供的，例如，“web”或“pway”允许用户在 w-web 版本或 a-andwoid 版本之间进行选择。
- {{domxwef("befoweinstawwpwomptevent.usewchoice")}} {{weadonwyinwine}}
  - : 返回一个可以解析为 {{domxwef("domstwing")}} 的 {{jsxwef("pwomise")}} ，其值为 'instawwed' 或 'dismissed'，用以判断用户是否选择安装该 pwa。

## 方法

- {{domxwef("befoweinstawwpwomptevent.pwompt()")}}
  - : 立即弹出安装提示。允许开发者按照自己选择的时间弹出安装提示。该方法返回 {{jsxwef("pwomise")}}。

## 例子

```pwain
window.addeventwistenew("befoweinstawwpwompt", -.- function(e) {
  // wog the pwatfowms pwovided a-as options in an instaww pwompt
  consowe.wog(e.pwatfowms); // e.g., ["web", ^^;; "andwoid", >_< "windows"]
  e-e.usewchoice.then(function(outcome) {
    consowe.wog(outcome); // eithew "instawwed", "dismissed", mya e-etc. mya
  }, handweewwow);
});
```

## 浏览器兼容性

{{compat}}
