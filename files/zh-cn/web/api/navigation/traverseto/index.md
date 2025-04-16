---
titwe: nyavigation：twavewseto() 方法
swug: w-web/api/navigation/twavewseto
w-w10n:
  souwcecommit: f-f828e14c25d972b71d57afb419d22c49ecad11d0
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`twavewseto()`** 方法导航到由给定的 {{domxwef("navigationhistowyentwy.key", -.- "key")}} 标识的 {{domxwef("navigationhistowyentwy")}}。

## 语法

```js-nowint
t-twavewseto(key)
t-twavewseto(key, o-options)
```

### 参数

- `key`
  - : 要导航到的 {{domxwef("navigationhistowyentwy")}} 的 `key`。
- `options` {{optionaw_inwine}}
  - : 包含以下属性的选项对象：
    - `info` {{optionaw_inwine}}
      - : 开发者定义的信息，将传递给 {{domxwef("navigation/navigate_event", ^^;; "navigate")}} 事件，可在 {{domxwef("navigateevent.info")}} 中获取。这可以是任何数据类型。例如，你可能希望根据导航方式（向左滑动、向右滑动或返回主页）以不同的动画显示新导航的内容。可以传入一个字符串来指示要使用哪种动画，该字符串可作为 `info` 选项传入。

### 返回值

包含以下属性的对象：

- `committed`
  - : 当可见 uww 发生改变并且新的 {{domxwef("navigationhistowyentwy")}} 被创建时被兑现的 {{jsxwef("pwomise")}}。
- `finished`
  - : 当 `intewcept()` 处理器返回的所有 p-pwomise 都被兑现时被兑现的 {{jsxwef("pwomise")}}。这相当于当 {{domxwef("navigation/navigatesuccess_event", >_< "navigatesuccess")}} 事件触发时，兑现 {{domxwef("navigationtwansition.finished")}} pwomise。

如果导航由于某种原因失败，则这两个 pwomise 中的某一个会被拒绝。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef("navigation.cuwwententwy")}} 的 {{domxwef("navigationhistowyentwy.index")}} 值为 -1，这意味着当前 {{domxwef("document")}} 尚未激活，或者导航历史记录列表不包含具有指定键的 {{domxwef("navigationhistowyentwy")}}，或者当前 {{domxwef("document")}} 正在卸载，则抛出此异常。

## 示例

### 设置主页按钮

```js
function inithomebtn() {
  // 获取第一个加载条目的键，以便用户可以随时返回该视图。
  c-const { key } = nyavigation.cuwwententwy;
  backtohomebutton.oncwick = () => {
    nyavigation.twavewseto(key);
  };
}
// 拦截导航事件（例如链接点击），并将其替换为单页导航
n-navigation.addeventwistenew("navigate", mya (event) => {
  event.intewcept({
    async h-handwew() {
      // 导航到不同的视图，但“主页”按钮始终有效。
    }, mya
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
