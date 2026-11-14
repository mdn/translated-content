---
title: "`@property` CSS at 规则"
short-title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 4560e287e8c75c40aa5ecf40a0c9e8ecd0217c56
---

**`@property`** [CSS](/zh-CN/docs/Web/CSS) [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)用于显式定义 [CSS 自定义属性](/zh-CN/docs/Web/CSS/Reference/Properties/--*)，从而支持属性类型检查与约束、设定默认值，以及定义自定义属性是否可以继承值。

> [!NOTE]
> JavaScript 的 {{domxref('CSS.registerProperty_static', 'registerProperty()')}} 方法与 `@property` at 规则等价。

## 语法

```css
@property --canBeAnything {
  syntax: "*";
  inherits: true;
}

@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}

@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}
```

自定义属性名是以 `--` 开头、后跟有效用户定义标识符的 {{cssxref("dashed-ident")}}。该名称区分大小写。

### 描述符

- {{cssxref("@property/syntax","syntax")}}
  - : 描述已注册自定义属性所允许的值类型的字符串。
- {{cssxref("@property/inherits","inherits")}}
  - : 控制由 `@property` 指定的自定义属性注册是否默认继承的布尔值。
- {{cssxref("@property/initial-value","initial-value")}}
  - : 设置该属性起始值。

## 描述

`@property` at 规则属于 [CSS Houdini](/zh-CN/docs/Web/API/Houdini_APIs) API 集合的一部分。它允许开发者显式定义 [CSS 自定义属性](/zh-CN/docs/Web/CSS/Reference/Properties/--*)，从而支持属性类型检查与约束、设定默认值，以及定义自定义属性是否可以继承值。

`@property` 规则可直接在样式表中注册自定义属性，无需任何 JavaScript。有效的 `@property` 规则会生成已注册的自定义属性，效果等同于使用等效参数调用 {{domxref('CSS.registerProperty_static', 'registerProperty()')}}。

`@property` 规则要有效，必须满足以下条件：

- `@property` 规则必须同时包含 {{cssxref("@property/syntax","syntax")}} 和 {{cssxref("@property/inherits","inherits")}} 描述符。若缺少其中任一，整条 `@property` 规则无效并被忽略。
- `syntax` 可以是数据类型名（如 `<color>`、`<length>` 或 `<number>` 等），可带乘数（`+` 表示接受空格分隔列表，`#` 表示接受逗号分隔列表）和组合符（`|` 表示接受其中一种数据类型），也可以是自定义标识符，或通用语法定义（`*`，表示语法可以是任何有效的标记流）。其值是 {{cssxref("string")}}，因此必须加引号。
- 当 `syntax` 描述符的值是通用语法定义（`syntax: "*"`）时，{{cssxref("@property/initial-value","initial-value")}} 描述符是可选的。若需要 `initial-value` 描述符却省略了它，整条 `@property` 规则无效并被忽略。
- 若 `syntax` 描述符的值不是通用语法定义，则 {{cssxref("@property/initial-value","initial-value")}} 描述符必须是[计算独立](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent)的值。这意味着该值可以在不依赖其他值的情况下转换为计算值，但独立于 CSS 的“全局”定义除外。例如，`10px` 是计算独立的——转换为计算值时不会变化。`2in` 也有效，因为 `1in` 始终等价于 `96px`。但是 `3em` 无效，因为 `em` 的值依赖于父元素的 {{cssxref("font-size")}}。
- 未知描述符无效并会被忽略，但不会使整条 `@property` 规则失效。

若用同一名称定义了多条有效的 `@property` 规则，样式表中靠后的那条“胜出”。若同一名称同时通过 CSS 中的 `@property` 和 JavaScript 中的 `CSS.registerProperty()` 注册，则以 JavaScript 注册为准。

## 形式语法

{{csssyntax}}

## 示例

### 基本示例

本例用 `@property` at 规则声明两个自定义属性，然后在样式声明中使用它们。

#### HTML

```html
<p>你好，世界！</p>
```

#### CSS

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: rebeccapurple;
}

@property --myWidth {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

p {
  background-color: var(--myColor);
  width: var(--myWidth);
  color: white;
}
```

#### 结果

{{ EmbedLiveSample('基本示例', '100%', '60px') }}

该段落宽度应为 `200px`，背景为紫色，文字为白色。

### 为自定义属性值添加动画

本例用 `@property` 定义名为 `--progress` 的自定义属性：它接受 {{cssxref("percentage")}} 值，初始值为 `25%`。我们用 `--progress` 定义 {{cssxref("gradient/linear-gradient")}} 中色标的位置值，指定绿色在何处结束、黑色在何处开始。然后将 `--progress` 的值在 2.5 秒内动画到 `100%`，从而呈现进度条动画效果。

#### HTML

```html
<div class="bar"></div>
```

#### CSS

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 25%;
}

.bar {
  display: inline-block;
  --progress: 25%;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #00d230 var(--progress),
    black var(--progress)
  );
  animation: progressAnimation 2.5s ease infinite;
}

@keyframes progressAnimation {
  to {
    --progress: 100%;
  }
}
```

#### 结果

{{ EmbedLiveSample('为自定义属性值添加动画', '100%', '60px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("var")}}
- [自定义属性（--*）：CSS 变量](/zh-CN/docs/Web/CSS/Reference/Properties/--*)
- [注册 CSS 自定义属性](/zh-CN/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS 属性和值 API](/zh-CN/docs/Web/CSS/Guides/Properties_and_values_API)模块
- [CSS 属性和值 API](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API)文档
- [使用 CSS 自定义属性（变量）](/zh-CN/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)指南
- [CSS 自定义属性与层叠变量](/zh-CN/docs/Web/CSS/Guides/Cascading_variables)模块
