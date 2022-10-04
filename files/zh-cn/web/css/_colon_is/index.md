---
title: ':is() (:matches(), :any())'
slug: Web/CSS/:is
---

{{CSSRef}}

> **备注：** 在 [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258) 讨论后 `:match()` 改名为 `:is()`。

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) **`:is()`** 函数将选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。

```css
/* 选择 header、main、footer 里的任意一个悬浮状态的段落 */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* 以上内容相当于以下内容 */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
```

伪元素在 `:is()` 的选择器列表中无效。

### 区分 :is() 和 :where()

两者的区别在于 `:is()` 计入整体选择器的优先级（它接受优先级最高参数的优先级），而 [`:where()`](/zh-CN/docs/Web/CSS/:where) 的优先级为 0。[参考 `:where()` 页面上的示例](/zh-CN/docs/Web/CSS/:where#示例)，它证明了这一点。

### 容许解析错误的选择器

规范指定了 `:is()` 和 `:where()` 可以接受一个[有错误的选择器列表](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)。

在 CSS 中使用选择器列表时，如果任何选择器无效，则整个列表被视为无效。当使用 `:is()` 或 `:where()` 而不是整个选择器列表时，如果某个选择器无法解析，则被视为无效，不正确或不受支持的选择器将被忽略，其他选择器将被使用。

```css
:is(:valid, :unsupported) {
  /* … */
}
```

即使在不支持 `:unsupported` 的浏览器中，仍将正确解析 `:valid`，而：

```css
:valid,
:unsupported {
  /* … */
}
```

在不支持 `:unsupported` 浏览器中即使它们支持 `:valid`，仍将忽略。

## 示例

### Cross-browser example

```html
<header>
  <p>This is my header paragraph</p>
</header>

<main>
  <ul>
    <li>
      <p>This is my first</p>
      <p>list item</p>
    </li>
    <li>
      <p>This is my second</p>
      <p>list item</p>
    </li>
  </ul>
</main>

<footer>
  <p>This is my footer paragraph</p>
</footer>
```

```css
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

```js
let matchedItems;

try {
  matchedItems = document.querySelectorAll(":is(header, main, footer) p");
} catch (e) {
  try {
    matchedItems = document.querySelectorAll(
      ":matches(header, main, footer) p"
    );
  } catch (e) {
    try {
      matchedItems = document.querySelectorAll(
        ":-webkit-any(header, main, footer) p"
      );
    } catch (e) {
      try {
        matchedItems = document.querySelectorAll(
          ":-moz-any(header, main, footer) p"
        );
      } catch (e) {
        console.log(
          "Your browser doesn't support :is(), :matches(), or :any()"
        );
      }
    }
  }
}

matchedItems.forEach(applyHandler);

function applyHandler(elem) {
  elem.addEventListener("click", (e) => {
    alert(`This paragraph is inside a ${e.target.parentNode.nodeName}`);
  });
}
```

{{EmbedLiveSample('Cross-browser_example', '100%', '300')}}

### 简化列表选择器

`:is()` 伪类可以大大简化 CSS 选择器。例如，下面的 CSS:

```css
/* 3-deep (or more) unordered lists use a square */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

你可以将其替换为：

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### 简化段落选择器

`:is()` 伪类在处理[段落和标题](/zh-CN/docs/Web/HTML/Element/Heading_Elements)时特别有用。由于 {{HTMLElement("section")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}} 和 {{HTMLElement("nav")}} 通常嵌套在一起，如果没有 `:is()`，将它们设置为相互匹配很棘手。

例如，没有 `:is()`，在不同的深度对所有 {{HTMLElement("h1")}} 元素进行样式化可能是非常复杂的：

```css
/* Level 0 */
h1 {
  font-size: 30px;
}

/* Level 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}

/* Level 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}

/* Level 3 */
/* don't even think about it! */
```

然而，使用 `:is()` 将容易的多：

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### :is() 不能选择伪元素

`:is()` 伪类不匹配伪元素。所以这样不行：

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

这样可以

```css example-good
some-element::before,
some-element::after {
  display: block;
}
```

## 语法

```
:is( <forgiving-selector-list> )
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":where", ":where()")}}——类似于 `:is()`，但是其[优先级](/zh-CN/docs/Web/CSS/Specificity)为 0。
- [选择器列表](/zh-CN/docs/Web/CSS/Selector_list)
- [Web component](/zh-CN/docs/Web/Web_Components)
