---
title: ":lang()"
slug: Web/CSS/:lang
---

{{CSSRef}}

**`:lang()`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)基于元素语言来匹配页面元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-function-lang.html", "tabbed-shorter")}}

> **备注：** 在 HTML 中，语言是通过 [`lang`](/zh-CN/docs/Web/HTML/Global_attributes#lang) 属性和 {{HTMLElement("meta")}} 元素的组合来决定的，也可能是通过协议的信息来确定（例如 HTTP 标头）。对于其他文档类型，也可能存在其他用于确定语言的方法。

## 语法

### 形式语法

```css-nolint
:lang(<language-code>) {
  /* ... */
}
```

### 参数

- `<language-code>`
  - : {{cssxref("&lt;string&gt;")}} 代表了你想定位的语言。可接受的值是 [HTML](/zh-CN/docs/Web/HTML) 规范中指定的值。

## 示例

在这个例子中，`:lang()` 伪类使用[子组合器](/zh-CN/docs/Web/CSS/Child_combinator)来匹配引用元素 ({{htmlElement("q")}}) 的父元素。需要注意的是，此处演示的方法并不是唯一的，最好的方法需要依据文档类型来确定。还需要注意的是，{{glossary("Unicode")}} 值用于指定一些特殊字符的引用。

### HTML

```html
<div lang="en">
  <q>This English quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="fr">
  <q>This French quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="de">
  <q>This German quote has a <q>nested</q> quote inside.</q>
</div>
```

### CSS

```css
:lang(en) > q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(de) > q {
  quotes: "»" "«" "\2039" "\203A";
}
```

### 结果

{{EmbedLiveSample('示例', 350)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 语言相关伪类：{{ cssxref(":lang") }}、{{ cssxref(":dir") }}
- HTML [`lang`](/zh-CN/docs/Web/HTML/Global_attributes#lang) 属性
- HTML [`translate`](/zh-CN/docs/Web/HTML/Global_attributes#translate) 属性
- {{RFC(5646, "用于标识语言的标签（也称为 BCP 47）")}}
