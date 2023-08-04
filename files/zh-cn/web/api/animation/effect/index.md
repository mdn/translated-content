---
title: Animation.effect
slug: Web/API/Animation/effect
---

{{ SeeCompatTable() }} {{ APIRef("Web Animations API") }}

Animation.effect 属性可以获取或设置动画的目标效果。目标效果可以是{{domxref("KeyframeEffect")}}对象或 null。

## 语法

```js
// Get an Animation object's target effect
var effect = animation.effect;

// Set an Animation's target effect
animation.effect = new KeyframeEffect({ opacity: [1, 0] }, 300);
```

### 值

{{domxref("KeyframeEffect")}} 对象或 null。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [KeyframeEffect](/zh-CN/docs/Web/API/KeyframeEffect)
- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
