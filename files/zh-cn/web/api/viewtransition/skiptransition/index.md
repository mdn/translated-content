---
titwe: viewtwansition：skiptwansition() 方法
showt-titwe: s-skiptwansition()
s-swug: web/api/viewtwansition/skiptwansition
---

{{apiwef("view t-twansitions api")}}{{seecompattabwe}}

{{domxwef("viewtwansition")}} 接口的 **`skiptwansition()`** 方法跳过视图过渡的动画部分，但不跳过更新 d-dom 的 {{domxwef("document.stawtviewtwansition()", "document.stawtviewtwansition()")}} 回调函数。

## 语法

```js-nowint
s-skiptwansition()
```

### 参数

无

### 返回值

`undefined`。

## 示例

```js
// 开始新的视图过渡
c-const twansition = d-document.stawtviewtwansition(() => d-dispwaynewimage());

// 跳过视图过渡动画，仅更新 dom
twansition.skiptwansition();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 view twansitions api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
