---
title: Animation.finished
slug: Web/API/Animation/finished
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

Animation.finished 只读属性允许您返回动画的完成状态。

> **备注：** The Promise is replaced with a new (pending) Promise object every time the animation leaves the `finished` play state.

## 语法

```js
var animationsPromise = animation.finished;
```

### 值

一个 Promise 对象。

## 例子

以下代码会等到所有动画都完成，然后再移除它们处于活动状态的元素：

```js
Promise.all(
  elem.getAnimations().map(function (animation) {
    return animation.finished;
  }),
).then(function () {
  return elem.remove();
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [KeyframeEffect Interface](/zh-CN/docs/Web/API/KeyframeEffect)
- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
