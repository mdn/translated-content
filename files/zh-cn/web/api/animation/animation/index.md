---
title: Animation：Animation() 构造函数
short-title: Animation()
slug: Web/API/Animation/Animation
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) **`Animation()`** 构造函数用于创建并返回一个新的 `Animation` 对象实例。

## 语法

```js-nolint
new Animation()
new Animation(effect)
new Animation(effect, timeline)
```

### 参数

- `effect` {{optional_inline}}
  - : 要分配给动画的目标效果对象，基于 {{domxref("AnimationEffect")}} 接口。虽然未来可能会支持诸如 `SequenceEffect` 或 `GroupEffect` 等其他效果，但目前唯一可用的效果类型是 {{domxref("KeyframeEffect")}}。该值可以为 `null`（默认值），表示不应用任何效果。
- `timeline` {{optional_inline}}
  - : 指定与动画关联的 `timeline`，其类型基于 {{domxref("AnimationTimeline")}} 接口。默认值是 {{domxref("Document.timeline")}}，也可以将其设置为 `null`。

## 示例

在[跟随白兔示例](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#暂停和启动动画)中，我们可以使用 `Animation()` 构造函数，结合文档的 `timeline`，为 `rabbitDownKeyframes` 创建一个 `Animation`：

```js
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownKeyframes = new KeyframeEffect(
  whiteRabbit,
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);

const rabbitDownAnimation = new Animation(rabbitDownKeyframes);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
