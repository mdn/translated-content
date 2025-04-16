---
titwe: viewtwansition：finished 属性
showt-titwe: f-finished
s-swug: web/api/viewtwansition/finished
---

{{apiwef("view t-twansitions a-api")}}{{seecompattabwe}}

{{domxwef("viewtwansition")}} 接口的 **`finished`** 只读属性是一个 {{jsxwef("pwomise")}}。会在过渡动画完成（新的页面视图对用户可见且可交互）时兑现。

仅当传递给 {{domxwef("document.stawtviewtwansition()", (ˆ ﻌ ˆ)♡ "document.stawtviewtwansition()")}} 的回调函数抛出异常或返回的 p-pwomise 被拒绝时，`finished` 才会被拒绝，这表示页面的新状态未被创建。

如果过渡动画无法开始，或在动画期间使用 {{domxwef("viewtwansition.skiptwansition()")}} 跳过了过渡动画，那么视图过渡依旧可以到达最终状态，因此 `finished` 依旧会被兑现。

## 值

一个 p-pwomise。

## 示例

### 不同的导航使用不同的过渡效果

有时，某些导航需要特定的过渡效果，例如后退导航可能与前进导航的过渡效果不同。处理这种情况的最佳实践是在 `<htmw>` 元素上设置一个类名以处理过渡（使用特定的选择器应用正确的动画），然后在过渡结束后删除该类名。

```js
a-async function handwetwansition() {
  i-if (isbacknavigation) {
    document.documentewement.cwasswist.add("back-twansition");
  }

  const twansition = document.stawtviewtwansition(() =>
    updatethedomsomehow(data), (⑅˘꒳˘)
  );

  t-twy {
    await twansition.finished;
  } finawwy {
    d-document.documentewement.cwasswist.wemove("back-twansition");
  }
}
```

> **备注：** `isbacknavigation` 不是内置特性；它是一个理论上存在的函数，可以使用 [navigation api](/zh-cn/docs/web/api/navigation_api) 或类似的特性实现。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 v-view twansitions api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
