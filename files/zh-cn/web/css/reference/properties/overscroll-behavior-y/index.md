---
title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
---

**`overscroll-behavior-y`** CSS 属性设置浏览器在到达滚动区域的垂直边界时的行为。

有关完整说明，请参阅 {{cssxref("overscroll-behavior")}}。

```css
/* 关键字值 */
overscroll-behavior-y: auto; /* 默认 */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* 全局值 */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

## 语法

`overscroll-behavior-y` 属性的值是从以下列表中选择的关键字。

### 取值

- `auto`
  - : 默认情况下，滚动溢出行为正常发生。
- `contain`
  - : 在设置了该值的元素内部会观察到默认滚动溢出行为（例如“回弹”效果或刷新），但相邻滚动区域不会发生滚动行为，例如底部元素不会滚动。
- `none`
  - : 相邻滚动区域不会发生滚动行为，并防止默认滚动溢出行为。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 阻止底部元素在垂直方向上滚动

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

有关完整示例和解释，请参阅 {{cssxref("overscroll-behavior")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [接管你的滚动：自定义下拉刷新和溢出效果](https://developer.chrome.google.cn/blog/overscroll-behavior#demo)
- 映射的逻辑属性：{{cssxref("overscroll-behavior-inline")}}、{{cssxref("overscroll-behavior-block")}}
