---
title: CSS 参考
slug: Web/CSS/Reference
---

{{CSSRef}}

使用此 **CSS 参考**页面以浏览按[字母索引](#索引)的所有标准 [CSS](/zh-CN/docs/Web/CSS) 属性、[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)、[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)、[数据类型](/zh-CN/docs/Web/CSS/CSS_Types)、[功能表记](/zh-CN/docs/Web/CSS/CSS_Functions)以及[@ 规则](/zh-CN/docs/Web/CSS/At-rule)。你也可以浏览[CSS 关键概念](#概念)和[按类型排列的 CSS 选择器](#选择器)列表。还有一份简短的 [DOM-CSS / CSSOM 参考](#dom-css_cssom)。

## 基本规则语法

### 样式规则语法

```css
style-rule ::=
    selectors-list {
      properties-list
    }
```

其中：

```css
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

参阅后面的[_选择器_](#选择器)、[_伪元素_](#伪元素)、[_伪类_](#伪类)列表。每个指定*值*的语法取决于为每个指定*属性*定义的数据类型。

#### 样式规则示例

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

有关 CSS 选择器语法的初学者介绍，请参阅 [CSS 选择器教程](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)。注意，规则定义中的任何 [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)错误都将使整个规则无效，无效的规则将被浏览器忽略。注意 CSS 定义完全是[基于（ASCII）文本](https://www.w3.org/TR/css-syntax-3/#intro)的，而 DOM-CSS / CSSOM（规则管理系统）是[基于对象](https://www.w3.org/TR/cssom/#introduction)的。

### @规则语法

由于 @规则间的结构变化很大，请参阅 [@规则](/zh-CN/docs/Web/CSS/At-rule)以找到你所想要的特定规则语法。

## 索引

> **备注：** 此索引中的属性名称**不包括**与 CSS 标准名称不同的 [JavaScript 名称](#索引)。

{{CSS_Ref}}

## 选择器

以下是一些[选择器](/zh-CN/docs/Web/CSS/CSS_selectors)的列表，它们允许根据 DOM 内元素的各种特征对样式进行条件限制。

### 基本选择器

[基本选择器](/zh-CN/docs/Web/CSS/CSS_selectors#基本选择器)是选择器中最初级的，通常由它们的组合构成其他更复杂的选择器。

- [通配选择器](/zh-CN/docs/Web/CSS/Universal_selectors) `*`
- [元素选择器](/zh-CN/docs/Web/CSS/Type_selectors) `elementname`（元素名称）
- [类选择器](/zh-CN/docs/Web/CSS/Class_selectors) `.classname`（类名）
- [ID 选择器](/zh-CN/docs/Web/CSS/ID_selectors) `#idname`（ID 名）
- [属性选择器](/zh-CN/docs/Web/CSS/Attribute_selectors) `[attr=value]`（属性=值）

### 分组选择器

- [选择器列表](/zh-CN/docs/Web/CSS/Selector_list) `A, B`
  - : 指定同时选择 `A` 和 `B` 元素。这是一种选择多个匹配元素的分组方法。

### 组合选择器

组合选择器是在两个或多个简单选择器之间建立关系的选择器，例如“`A` 是 `B` 的子代”或“`A` 与 `B` 相邻”，它们构成了比较复杂的选择器。

- [相邻兄弟选择器](/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - : 指定 `A` 和 `B` 选择的元素具有相同的父元素，并且 `B` 选择的元素在水平方向上紧随 `A` 选择的元素。
- [普通兄弟选择器](/zh-CN/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - : 指定由 `A` 和 `B` 选择的元素共享相同的父元素，并指定 `A` 选择的元素在 `B` 选择的元素之前（但不一定紧接在 `B` 之前）。
- [子选择器](/zh-CN/docs/Web/CSS/Child_combinator) `A > B`
  - : 指定 `B` 选择的元素是 `A` 选择的元素的直接子元素。
- [后代选择器](/zh-CN/docs/Web/CSS/Descendant_combinator) `A B`
  - : 指定 `B` 选择的元素是 `A` 选择的元素的后代，但不一定是直接子代。
- [列选择器](/zh-CN/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : 指定 `B` 选择的元素在 `A` 指定的表格列中，跨越多列的元素被认为是所有这些列的成员。

### 伪类

- [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) `:`
  - : 指定了所选择元素特定的状态。
- [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) `::`
  - : 代表不包含在 HTML 中的实体。

> **标注：**
>
> 参见[标准 4 定义的选择器列表](https://www.w3.org/TR/selectors/#overview)。

## 概念

### 语法和语义

- [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
- [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
- [层叠](/zh-CN/docs/Web/CSS/Cascade)
- [注释](/zh-CN/docs/Web/CSS/Comments)
- [解释器](/zh-CN/docs/Glossary/CSS_Descriptor)
- [继承](/zh-CN/docs/Web/CSS/inheritance)
- [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
- [优先级](/zh-CN/docs/Web/CSS/Specificity)
- [值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
- [CSS 单位与取值类型](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 函数表记](/zh-CN/docs/Web/CSS/CSS_Functions)

### 值

- [实际值](/zh-CN/docs/Web/CSS/actual_value)
- [计算值](/zh-CN/docs/Web/CSS/computed_value)
- [初始值](/zh-CN/docs/Web/CSS/initial_value)
- [解析值](/zh-CN/docs/Web/CSS/resolved_value)
- [指定值](/zh-CN/docs/Web/CSS/specified_value)
- [使用值](/zh-CN/docs/Web/CSS/used_value)

### 布局

- [块级格式化上下文](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [包含块](/zh-CN/docs/Web/CSS/Containing_block)
- [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
- [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
- [层叠上下文](/zh-CN/docs/Web/Guide/CSS/Understanding_z-index/Stacking_context)
- [视觉格式化模型](/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### 主要对象类型

- {{DOMxRef("DocumentOrShadowRoot.styleSheets")}}
- `{{DOMxRef("StyleSheetList", "styleSheets", "", 1)}}[i].{{DOMxRef("CSSRuleList", "cssRules", "", 1)}}`
- `cssRules[i].{{DOMxRef("CSSRule.cssText", "cssText", "", 1)}}` （选择器 & 样式）
- `cssRules[i].{{DOMxRef("CSSStyleRule.selectorText", "selectorText", "", 1)}}`
- {{DOMxRef("HTMLElement.style")}}
- `HTMLElement.style.{{DOMxRef("CSSStyleDeclaration.cssText", "cssText", "", 1)}}`（仅样式）
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}

### 重要方法

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## 参见

- [Mozilla CSS 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)（以 `-moz` 前缀）
- [WebKit CSS 扩展](/zh-CN/docs/Web/CSS/WebKit_Extensions)（大多数时候以 `-webkit` 前缀）
- [Microsoft CSS 扩展](/zh-CN/docs/Web/CSS/Microsoft_CSS_extensions)（以 `-ms` 前缀）

## 外部链接

- [CSS 索引（w3.org）](https://www.w3.org/TR/CSS/#indices)
