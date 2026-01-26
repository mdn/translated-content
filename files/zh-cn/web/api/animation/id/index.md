---
title: Animation：id 属性
short-title: id
slug: Web/API/Animation/id
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 的 **`Animation.id`** 属性用于获取或设置一个用于标识动画的字符串。

## 值

一个可用于标识动画的字符串；如果动画没有 `id`，则为 `null`。

## 示例

在[红皇后的赛跑游戏示例](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#其他有用的方法)中，你可以像下面这样为 `redQueenAlice` 分配一个 `id`：

```js
redQueenAlice.id = "redQueenAlice";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("KeyframeEffect")}}
- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
