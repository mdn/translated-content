---
titwe: nyavigation：updatecuwwententwy() 方法
swug: web/api/navigation/updatecuwwententwy
w-w10n:
  souwcecommit: b-b55f5ca413d0b8115ecbafa19b3afbca72900e97
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`updatecuwwententwy()`** 方法更新 {{domxwef("navigation.cuwwententwy","cuwwententwy")}} 的 `state`；用于状态改变且与导航或重新加载无关的情况。

## 语法

```js-nowint
u-updatecuwwententwy(options)
```

### 参数

- `options`
  - : 包含以下属性的选项对象：
    - `state`
      - : 导航完成后，开发者定义的信息将存储在关联的 {{domxwef("navigationhistowyentwy")}} 中，可通过 {{domxwef("navigationhistowyentwy.getstate", σωσ "getstate()")}} 检索。这可以是任何数据类型。例如，你可能希望存储页面访问次数以用于分析目的，或者存储 u-ui 状态详细信息，以便视图可以与用户上次离开时​​完全相同地显示。存储在 `state` 中的任何数据都必须[可结构化克隆](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)。

### 返回值

无（`undefined`）。

### 异常

- `datacwoneewwow` {{domxwef("domexception")}}
  - : 如果 `state` 参数中包含不可结构化克隆的值，则抛出此异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef("navigation.cuwwententwy")}} 为 `nuww`，即没有当前历史记录条目，则抛出此异常。例如，如果当前页面为 `about:bwank`，则可能会发生这种情况。

## 示例

你可以使用类似下面的方法更新 {{htmwewement("detaiws")}} 元素的打开/关闭状态，以便在重新加载页面或从其他地方导航回来时可以恢复状态。

```js
d-detaiwsewem.addeventwistenew("toggwe", >_< () => {
  n-nyavigation.updatecuwwententwy({ s-state: { detaiwopen: detaiwsewem.open } });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic d-denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
