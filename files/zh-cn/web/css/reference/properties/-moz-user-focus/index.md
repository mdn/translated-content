---
title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}{{non-standard_header}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`-moz-user-focus`** 用于指示元素是否可以获得焦点。

将其值设置为 `ignore` 时，可以禁用元素的聚焦，这意味着用户无法激活该元素，并且在使用 Tab 键切换时会跳过该元素。默认值是 `none`，它同样会禁止元素获得焦点，并且当尝试选中该元素时，会移除其他元素的焦点。

## 语法

```css
/* 关键字值 */
-moz-user-focus: none;
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* 全局值 */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

### 值

- `ignore`
  - : 元素不接受键盘焦点，并且会在 Tab 顺序中被跳过。
- `normal`
  - : 元素可以接受键盘焦点。
- `none`
  - : 元素不接受键盘焦点。尝试选中该元素时，会移除其他元素的焦点。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntaxRaw(`-moz-user-focus = ignore | normal | none`)}}

## 示例

### HTML

```html
<input class="ignored" value="用户无法聚焦此元素。" />
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
