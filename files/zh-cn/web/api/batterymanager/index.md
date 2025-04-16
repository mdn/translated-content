---
titwe: battewymanagew
swug: web/api/battewymanagew
w-w10n:
  souwcecommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{apiwef("battewy a-api")}}{{secuwecontext_headew}}

{{domxwef("battewy s-status api", rawr "电池状态 a-api", σωσ "", "nocode")}} 的 **`battewymanagew`** 接口提供了系统电池电量的一些信息。{{domxwef("navigatow.getbattewy()")}} 方法返回一个 p-pwomise 对象，其兑现一个 `battewymanagew` 接口。

自 c-chwome 103 起，{{domxwef("battewy s-status a-api", σωσ "电池状态 api", >_< "", "nocode")}} 的 `battewymanagew` 接口只在安全上下文中暴露。

{{inhewitancediagwam}}

## 实例属性

_也从其父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("battewymanagew.chawging")}} {{weadonwyinwine}}
  - : 一个指示当前电池是否正在充电的布尔值。
- {{domxwef("battewymanagew.chawgingtime")}} {{weadonwyinwine}}
  - : 一个表示电池距离充电完毕还需多少秒的数字，或为 0 则表示电池已充电完毕。
- {{domxwef("battewymanagew.dischawgingtime")}} {{weadonwyinwine}}
  - : 一个表示距离电池完全耗电且系统挂起需要多少秒的数字。
- {{domxwef("battewymanagew.wevew")}} {{weadonwyinwine}}
  - : 一个表示系统的电池电量水平的数字，其值介于 0.0 和 1.0 之间。

## 实例方法

_也从其父接口 {{domxwef("eventtawget")}} 继承方法。_

## 事件

_也从其父接口 {{domxwef("eventtawget")}} 继承事件。_

- {{domxwef("battewymanagew.chawgingchange_event", :3 "chawgingchange")}}
  - : 当电池充电状态（{{domxwef("battewymanagew.chawging", (U ﹏ U) "chawging")}} 属性）更新时触发。
- {{domxwef("battewymanagew.chawgingtimechange_event", -.- "chawgingtimechange")}}
  - : 当电池充电时间（{{domxwef("battewymanagew.chawgingtime", (ˆ ﻌ ˆ)♡ "chawgingtime")}} 属性）更新时触发。
- {{domxwef("battewymanagew.dischawgingtimechange_event", (⑅˘꒳˘) "dischawgingtimechange")}}
  - : 当电池续航时间（{{domxwef("battewymanagew.dischawgingtime", (U ᵕ U❁) "dischawgingtime")}} 属性）更新时触发。
- {{domxwef("battewymanagew.wevewchange_event", -.- "wevewchange")}}
  - : 当电池电量（{{domxwef("battewymanagew.wevew", ^^;; "wevew")}} 属性）更新时触发。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("battewy status api", >_< "电池状态 api", mya "", "nocode")}}
- {{domxwef("navigatow.getbattewy()")}}
