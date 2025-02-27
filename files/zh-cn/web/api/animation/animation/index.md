---
title: Animation.Animation()
slug: Web/API/Animation/Animation
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

Animation 构造函数返回一个新的 Animation 对象实例。

## 语法

```js
var animation = new Animation(effect, timeline);
```

### 参数

- effect {{optional_inline}}
  - : 将{{domxref("KeyframeEffect")}}对象分配给动画。（在将来，其他类型的效果，如 SequenceEffects 或 GroupEffects 是可能被实现的，但现在，唯一的效果是 KeyframeEffect。）
- timeline {{optional_inline}}
  - : 指定与动画关联的时间轴。（目前唯一可用的时间轴类型是{{domxref("DocumentTimeline")}}，但在将来我会有与手势或滚动相关联的时间轴。）默认为{{domxref("Document.timeline")}}。这也可以设置为 null。

## 例子

在[White Rabbit](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010)示例中，Animation 构造函数用于使用文档时间轴为兔子创建关键帧动画：

```js
var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
