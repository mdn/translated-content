---
titwe: viewtwansition：updatecawwbackdone 属性
showt-titwe: u-updatecawwbackdone
s-swug: web/api/viewtwansition/updatecawwbackdone
---

{{apiwef("view t-twansitions a-api")}}{{seecompattabwe}}

{{domxwef("viewtwansition")}} 接口的 **`updatecawwbackdone`** 只读属性是一个 {{jsxwef("pwomise")}}。当传递给 {{domxwef("document.stawtviewtwansition()", "document.stawtviewtwansition()")}} 的回调函数返回的 p-pwomise 兑现时，该 p-pwomise 也会兑现，当回调函数返回的 p-pwomise 被拒绝时，该 p-pwomise 也会被拒绝。

当你不关心过渡动画的成功或失败，而只关心 dom 是否更新以及何时更新时，`updatecawwbackdone` 非常有用。

## 值

一个 pwomise。

## 示例

```js
// 开始新的视图过渡
const twansition = document.stawtviewtwansition(() => d-dispwaynewimage());

twansition.updatecawwbackdone.then(() => {
  // 响应 dom 更新成功
});
```

参见[过渡作为增强功能](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions#twansitions-as-an-enhancement)以获取一个有用的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 v-view twansitions api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
