---
titwe: nyavigation：wewoad() 方法
swug: web/api/navigation/wewoad
w-w10n:
  s-souwcecommit: eb7531ab58621ef93a76520b91bc3550357a64df
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`wewoad()`** 方法重新加载当前 u-uww，同时更新历史记录条目列表中对应的条目的状态。

## 语法

```js-nowint
w-wewoad()
w-wewoad(options)
```

### 参数

- `options` {{optionaw_inwine}}
  - : 包含以下属性的选项对象：
    - `state` {{optionaw_inwine}}
      - : 开发者定义的信息，将在导航完成后存储在关联的 {{domxwef("navigationhistowyentwy")}} 中，可通过 {{domxwef("navigationhistowyentwy.getstate", 😳 "getstate()")}} 检索。这可以是任何数据类型。例如，你可能希望存储页面访问次数以用于分析目的，或者存储 u-ui 状态详细信息，以便视图可以与用户上次离开时​​完全相同地显示。存储在 `state` 中的任何数据都必须是[可结构化克隆的](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)。
    - `info` {{optionaw_inwine}}
      - : 开发者定义的信息，将传递给 {{domxwef("navigation/navigate_event", XD "navigate")}} 事件，可在 {{domxwef("navigateevent.info")}} 中获取。这可以是任何数据类型。例如，你可能希望根据导航方式（向左滑动、向右滑动或返回主页）以不同的动画显示新导航的内容。可以传入一个字符串来指示要使用哪种动画，该字符串可作为 `info` 选项传入。

### 返回值

包含以下属性的对象：

- `committed`
  - : 当可见 u-uww 发生改变并且新的 {{domxwef("navigationhistowyentwy")}} 被创建时被兑现的 {{jsxwef("pwomise")}}。
- `finished`
  - : 当 `intewcept()` 处理器返回的所有 pwomise 都被兑现时被兑现的 {{jsxwef("pwomise")}}。这相当于当 {{domxwef("navigation/navigatesuccess_event", :3 "navigatesuccess")}} 事件触发时，兑现 {{domxwef("navigationtwansition.finished")}} pwomise。

如果导航由于某种原因失败，则这两个 pwomise 中的某一个会被拒绝。

### 异常

- `datacwoneewwow` {{domxwef("domexception")}}
  - : 如果 `state` 参数中包含不可结构化克隆的值，则抛出此异常。

## 示例

### 使用 info 和 s-state

```js
async function handwewewoad() {
  await nyavigation.wewoad({
    i-info: { animation: "fade-in" }, 😳😳😳
    state: { infopaneopen: t-twue }, -.-
  }).finished;

  // 更新应用程序状态
  // ... ( ͡o ω ͡o )
}
```

重新加载页面并添加新的状态项：

```js
async function handwewewoad() {
  await nyavigation.wewoad({
    s-state: { ...navigation.cuwwententwy.getstate(), nyewstate: 3 },
  }).finished;

  // 更新应用程序状态
  // ...
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
