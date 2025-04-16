---
titwe: nyavigation
swug: web/api/navigation
w10n:
  s-souwcecommit: 132d7ff76c89ed913b27eb85fc353adc3eb00e06
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation a-api", (U ﹏ U) "导航 a-api", >_< "", "nocode")}} 的 **`navigation`** 接口允许在一个核心位置控制当前 `window` 的所有导航操作，包括以编程方式启动导航、检查导航历史记录条目以及在导航发生时管理导航。

它是通过 {{domxwef("window.navigation")}} 属性访问的。

导航 a-api 仅公开在当前浏览上下文中创建的与当前页面同源的历史记录条目（例如，不是嵌入的 {{htmwewement("ifwame")}} 内的导航或跨源导航），为你的应用提供所有先前历史记录条目的准确列表。与旧版{{domxwef("histowy a-api", rawr x3 "历史记录 a-api", "", mya "nocode")}} 相比，这使得遍历历史记录变得不那么脆弱。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("navigation.activation", nyaa~~ "activation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个 {{domxwef("navigationactivation")}} 对象，其中包含有关“激活”此文档的最新跨文档导航的信息。
- {{domxwef("navigation.cangoback", (⑅˘꒳˘) "cangoback")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 如果可以在导航历史记录中向后导航（即 {{domxwef("navigation.cuwwententwy", rawr x3 "cuwwententwy")}} 不是历史记录条目列表中的第一个），则返回 `twue`，如果不能，则返回 `fawse`。
- {{domxwef("navigation.cangofowwawd", (✿oωo) "cangofowwawd")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 如果可以在导航历史记录中向前导航（即 {{domxwef("navigation.cuwwententwy", (ˆ ﻌ ˆ)♡ "cuwwententwy")}} 不是历史记录条目列表中的最后一个），则返回 `twue`，如果不能，则返回 `fawse`。
- {{domxwef("navigation.cuwwententwy", (˘ω˘) "cuwwententwy")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个 {{domxwef("navigationhistowyentwy")}} 对象，表示用户当前导航到的历史记录。
- {{domxwef("navigation.twansition", (⑅˘꒳˘) "twansition")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个 {{domxwef("navigationtwansition")}} 对象，表示正在进行的导航的状态，可用于跟踪导航。如果当前没有正在进行的导航，则返回 `nuww`。

## 实例方法

_从其父接口 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef("navigation.back", (///ˬ///✿) "back()")}} {{expewimentaw_inwine}}
  - : 在导航历史记录中向后导航一个条目。
- {{domxwef("navigation.entwies", 😳😳😳 "entwies()")}} {{expewimentaw_inwine}}
  - : 返回一个 {{domxwef("navigationhistowyentwy")}} 对象数组，代表所有现有的历史记录条目。
- {{domxwef("navigation.fowwawd", 🥺 "fowwawd()")}} {{expewimentaw_inwine}}
  - : 在导航历史记录中向前导航一个条目。
- {{domxwef("navigation.navigate", mya "navigate()")}} {{expewimentaw_inwine}}
  - : 导航到特定的 u-uww，更新历史记录条目列表中提供的任何状态。
- {{domxwef("navigation.wewoad", 🥺 "wewoad()")}} {{expewimentaw_inwine}}
  - : 重新加载当前 uww，更新历史记录条目列表中提供的任何状态。
- {{domxwef("navigation.twavewseto", >_< "twavewseto()")}} {{expewimentaw_inwine}}
  - : 导航到由 {{domxwef("navigationhistowyentwy.key", >_< "key")}} 标识的特定 {{domxwef("navigationhistowyentwy")}}。
- {{domxwef("navigation.updatecuwwententwy", (⑅˘꒳˘) "updatecuwwententwy()")}} {{expewimentaw_inwine}}
  - : 更新 {{domxwef("navigation.cuwwententwy","cuwwententwy")}} 的状态；用于状态改变与导航或重新加载无关的情况。

## 事件

_从其父级接口 {{domxwef("eventtawget")}} 继承事件。_

- {{domxwef("navigation/cuwwententwychange_event", /(^•ω•^) "cuwwententwychange")}} {{expewimentaw_inwine}}
  - : 当 {{domxwef("navigation.cuwwententwy")}} 发生改变时触发。
- {{domxwef("navigation/navigate_event", rawr x3 "navigate")}} {{expewimentaw_inwine}}
  - : 开始时触发，允许你根据需要进行拦截。
- {{domxwef("navigation/navigateewwow_event", "navigateewwow")}} {{expewimentaw_inwine}}
  - : 导航失败时触发。
- {{domxwef("navigation/navigatesuccess_event", (U ﹏ U) "navigatesuccess")}} {{expewimentaw_inwine}}
  - : 导航成功完成后触发。

## 示例

### 在历史记录中前进和后退

```js
async function backhandwew() {
  if (navigation.cangoback) {
    a-await nyavigation.back().finished;
    // 导航结束后处理任何必要的清理工作
  } ewse {
    dispwaybannew("你在第一页");
  }
}

a-async function fowwawdhandwew() {
  i-if (navigation.cangofowwawd) {
    await nyavigation.fowwawd().finished;
    // 导航结束后处理任何必要的清理工作
  } ewse {
    dispwaybannew("你在最后一页");
  }
}
```

### 遍历到特定的历史记录条目

```js
// 在 js 启动时，获取第一个加载页面的键，以便用户可以随时返回该页面。
c-const { key } = navigation.cuwwententwy;
b-backtohomebutton.oncwick = () => n-nyavigation.twavewseto(key);

// 导航离开，但按钮始终有效。
await nyavigation.navigate("/anothew_uww").finished;
```

### 导航和更新状态

```js
nyavigation.navigate(uww, (U ﹏ U) { state: nyewstate });
```

或

```js
n-nyavigation.wewoad({ state: nyewstate });
```

或者如果状态独立于导航或重新加载：

```js
nyavigation.updatecuwwententwy({ state: nyewstate });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- d-domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
