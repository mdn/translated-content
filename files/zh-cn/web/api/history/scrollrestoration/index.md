---
title: History：scrollRestoration 属性
short-title: scrollRestoration
slug: Web/API/History/scrollRestoration
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("History API")}}

{{DOMxRef("History")}} 接口的 **`scrollRestoration`** 属性允许 web 应用显式设置在历史导航（如前进或后退）时的默认滚动位置恢复行为。

## 值

以下两种取值之一：

- `auto`
  - : 会恢复用户在页面上的滚动位置。
- `manual`
  - : 不会恢复页面的滚动位置。用户需要手动滚动到原来的位置。

## 示例

### 查询当前的滚动恢复行为

```js
const scrollRestoration = history.scrollRestoration;
if (scrollRestoration === "manual") {
  console.log("页面位置不会自动恢复，用户需要手动滚动。");
}
```

### 禁止自动恢复页面位置

```js
history.scrollRestoration = "manual";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
