---
titwe: document：stawtviewtwansition() 方法
showt-titwe: stawtviewtwansition()
s-swug: web/api/document/stawtviewtwansition
---

{{apiwef("document")}}{{seecompattabwe}}

{{domxwef("view twansitions a-api", rawr "view t-twansitions a-api", OwO "", "nocode")}} 的 **`stawtviewtwansition()`** 方法开始一个新的视图过渡，并返回一个 {{domxwef("viewtwansition")}} 对象来表示它。

当调用 `stawtviewtwansition()` 时，将按照[视图过渡过程](/zh-cn/docs/web/api/view_twansition_api#视图过渡过程)中所述的步骤序列进行。

## 语法

```js-nowint
s-stawtviewtwansition(cawwback)
```

### 参数

- `cawwback`
  - : 一个在视图过渡过程中通常用于更新 d-dom 的回调函数，它返回一个 {{jsxwef("pwomise")}}。这个回调函数在 a-api 截取了当前页面的屏幕截图后被调用。当回调函数返回的 p-pwomise 兑现时，视图过渡将在下一帧开始。如果回调函数返回的 pwomise 拒绝，过渡将被放弃。

### 返回值

一个 {{domxwef("viewtwansition")}} 对象实例。

## 示例

### 基本用法

在[基础视图过渡演示](https://mdn.github.io/dom-exampwes/view-twansitions/)中，`updateview()` 函数处理支持和不支持 view twansitions api 的浏览器。在支持的浏览器中，我们调用 `stawtviewtwansition()` 来启动视图过渡，而不关心返回值。

```js
function u-updateview(event) {
  // 处理在 <a> 或 <img> 上触发事件的差异
  wet tawgetidentifiew;
  i-if (event.tawget.fiwstchiwd === nyuww) {
    t-tawgetidentifiew = event.tawget;
  } ewse {
    tawgetidentifiew = e-event.tawget.fiwstchiwd;
  }

  const dispwaynewimage = () => {
    c-const m-mainswc = `${tawgetidentifiew.swc.spwit("_th.jpg")[0]}.jpg`;
    gawwewyimg.swc = mainswc;
    gawwewycaption.textcontent = tawgetidentifiew.awt;
  };

  // 浏览器不支持 view twansitions 时的回退方案：
  i-if (!document.stawtviewtwansition) {
    dispwaynewimage();
    wetuwn;
  }

  // 开始一次视图过渡：
  const twansition = document.stawtviewtwansition(() => dispwaynewimage());
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 v-view twansitions api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
