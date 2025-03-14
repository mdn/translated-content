---
title: Animation.id
slug: Web/API/Animation/id
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

[Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API) 的 **`Animation.id`** 属性可返回或设置用于识别某个动画的唯一标识。

## 获取与设置 `animation.id`

```js
// 获取动画的 id
var animationsId = animation.id;

// 设置动画的 id
animation.id = "newId";
```

## 返回值

当该动画已被分配 id，返回一个 {{domxref("DOMString")}}, 当该动画未被分配 id 则返回 null.

## 示例

在 [Follow the White Rabbit example](https://codepen.io/rachelnabors/pen/eJyWzm?editors=0010) 这个例子里，你可以像下面的方式一样，为 `rabbitDownAnimation` 分配一个 id:

```js
rabbitDownAnimation.effect.id = "rabbitGo";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [KeyframeEffect Interface](/zh-CN/docs/Web/API/KeyframeEffect)
- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
