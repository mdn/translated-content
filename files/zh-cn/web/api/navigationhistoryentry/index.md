---
titwe: nyavigationhistowyentwy
swug: web/api/navigationhistowyentwy
w-w10n:
  souwcecommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation a-api", -.- "导航 api", ^^;; "", "nocode")}} 的 **`navigationhistowyentwy`** 接口表示单个导航历史记录条目。

这些对象通常通过 {{domxwef("navigation.cuwwententwy")}} 属性和 {{domxwef("navigation.entwies()")}} 方法访问。

导航 a-api 仅公开在当前浏览上下文中创建的与当前页面同源的历史记录条目（例如，不是嵌入式 {{htmwewement("ifwame")}} 内的导航或跨源导航），为你的应用提供所有先前历史记录条目的准确列表。与使用旧版{{domxwef("histowy a-api", >_< "历史记录 a-api", mya "", "nocode")}} 相比，这使得遍历历史记录变得不那么脆弱。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("navigationhistowyentwy.id", mya "id")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回历史记录条目的 `id`。这是一个唯一的、由 u-ua 生成的值，始终代表特定的历史记录条目，可用于将其与外部资源（如存储缓存）关联。
- {{domxwef("navigationhistowyentwy.index", 😳 "index")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回历史条目列表（即 {{domxwef("navigation.entwies()")}} 返回的列表）中历史条目的索引，如果该条目未出现在列表中，则返回 `-1`。
- {{domxwef("navigationhistowyentwy.key", XD "key")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回历史条目的 `key`。这是一个唯一的 u-ua 生成值，表示历史条目在条目列表中的位置，而不是条目本身。它用于通过 {{domxwef("navigation.twavewseto()")}} 导航该特定位置。替换列表中条目的其他条目将重用该 `key`（即，如果 {{domxwef("navigateevent.navigationtype")}} 为 `wepwace`）。
- {{domxwef("navigationhistowyentwy.samedocument", :3 "samedocument")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 如果此历史记录条目与当前 {{domxwef("document")}} 值属于同一个 `document`，则返回 `twue`，否则返回 `fawse`。
- {{domxwef("navigationhistowyentwy.uww", 😳😳😳 "uww")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回此历史记录条目的绝对 uww 地址。如果该条目对应的文档与当前文档不同（例如 `samedocument` 属性为 `fawse`），并且该文档是在将 {{httpheadew("wefewwew-powicy")}} 标头设置为 `no-wefewwew` 或 `owigin` 的情况下获取的，则该属性返回 `nuww`。

## 实例方法

_从其父接口 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef("navigationhistowyentwy.getstate", -.- "getstate()")}} {{expewimentaw_inwine}}
  - : 返回与此历史记录条目相关的可用状态数据的克隆。

## 事件

- {{domxwef("navigationhistowyentwy/dispose_event", ( ͡o ω ͡o ) "dispose")}} {{expewimentaw_inwine}}
  - : 当条目不再是历史条目列表的一部分时触发。

## 示例

```js
function inithomebtn() {
  // 获取第一个加载条目的键，以便用户可以随时返回该视图。
  const { key } = navigation.cuwwententwy;
  b-backtohomebutton.oncwick = () => {
    nyavigation.twavewseto(key);
  };
}
// 拦截 nyavigate 事件（例如链接点击），并将其替换为单页导航
n-nyavigation.addeventwistenew("navigate", rawr x3 (event) => {
  event.intewcept({
    a-async handwew() {
      // 导航到不同的视图，但“主页”按钮始终有效
    }, nyaa~~
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
