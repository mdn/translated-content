---
title: Window.getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
---

{{APIRef("CSSOM")}}{{Non-standard_header}}

`getDefaultComputedStyle()` 给出元素的所有 CSS 属性的默认[计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)，忽略作者样式。也就是说，只考虑用户代理和用户风格。

## 语法及参数说明

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

- element
  - : 获取计算样式的元素
- pseudoElt {{optional_inline}}
  - : 指定匹配的伪类。通常情况下可以为空。

返回的样式是一个 [`CSSStyleDeclaration`](/zh-CN/docs/Web/API/CSSStyleDeclaration) 对象。

## 示例

```js
const elem1 = document.getElementById("elemId");
const style = window.getDefaultComputedStyle(elem1);
```

```html
<style>
  #elem-container {
    position: absolute;
    left: 100px;
    top: 200px;
    height: 100px;
  }
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>

<script>
  const elem = document.getElementById("elem-container");
  const theCSSprop = window.getDefaultComputedStyle(elem).position;
  document.getElementById("output").textContent = theCSSprop; // 将会输出“static”
</script>
```

## 描述

The returned object is of the same type as the object returned by [`getComputedStyle`](/zh-CN/docs/Web/API/Window/getComputedStyle), but only takes into account user-agent and user rules.

## 使用伪元素

`getDefaultComputedStyle` 同样可以从伪元素中获取属性 (比如，`::after`, `::before`).

```html
<style>
  h3:after {
    content: " rocks!";
  }
</style>

<h3>generated content</h3>

<script>
  var h3 = document.querySelector("h3"),
    result = getDefaultComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // 返回 'none'
</script>
```

## 备注

The returned value is, in certain known cases, expressly incorrect by deliberate intent. In particular, to avoid the so called CSS History Leak security issue, browsers may expressly "lie" about the used value for a link and always return values as if a user has never visited the linked site, and/or limit the styles that can be applied using the `:visited` pseudo-selector. See <http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/> and <http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/> for details of the examples of how this is implemented.

## 规范

Proposed to the CSS working group.

## 浏览器兼容性

{{Compat}}
