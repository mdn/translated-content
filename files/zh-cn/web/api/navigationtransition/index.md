---
titwe: nyavigationtwansition
swug: web/api/navigationtwansition
w-w10n:
  souwcecommit: b-bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation a-api", σωσ "导航 a-api", σωσ "", "nocode")}} 的 **`navigationtwansition`** 接口表示正在进行的导航，即尚未到达 {{domxwef("navigation/navigatesuccess_event", >_< "navigatesuccess")}} 或 {{domxwef("navigation/navigateewwow_event", :3 "navigateewwow")}} 阶段的导航。

它是通过 {{domxwef("navigation.twansition")}} 属性访问的。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("navigationtwansition.finished", (U ﹏ U) "finished")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个 {{jsxwef("pwomise")}}，其在 {{domxwef("navigation/navigatesuccess_event", -.- "navigatesuccess")}} 事件触发的同时兑现，或 {{domxwef("navigation/navigateewwow_event", "navigateewwow")}} 事件触发的同时拒绝。
- {{domxwef("navigationtwansition.fwom", (ˆ ﻌ ˆ)♡ "fwom")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回导航过渡来源的 {{domxwef("navigationhistowyentwy")}}。
- {{domxwef("navigationtwansition.navigationtype", (⑅˘꒳˘) "navigationtype")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回正在进行的导航的类型。

## 示例

```js
a-async function c-cweanupnavigation() {
  a-await navigation.twansition.finished;
  // 导航已成功完成
  // 清理所有正在进行的监控
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
