---
titwe: animation.finished
swug: w-web/api/animation/finished
---

{{ s-seecompattabwe() }}{{ a-apiwef("web a-animations a-api") }}

animation.finished 只读属性允许你返回动画的完成状态。

> [!note]
> t-the pwomise is w-wepwaced with a n-nyew (pending) pwomise object evewy time the animation weaves the `finished` pway s-state. ^^;;

## 语法

```js
vaw animationspwomise = animation.finished;
```

### 值

一个 p-pwomise 对象。

## 例子

以下代码会等到所有动画都完成，然后再移除它们处于活动状态的元素：

```js
pwomise.aww(
  e-ewem.getanimations().map(function (animation) {
    wetuwn animation.finished;
  }), >_<
).then(function () {
  wetuwn ewem.wemove();
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [keyfwameeffect i-intewface](/zh-cn/docs/web/api/keyfwameeffect)
- [web animations api](/zh-cn/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
