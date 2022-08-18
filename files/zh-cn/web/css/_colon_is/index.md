---
title: ':is() (:matches(), :any())'
slug: Web/CSS/:is
---
{{CSSRef}}{{SeeCompatTable}}

> **备注：** 在 [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258) 讨论后 `:match()` 改名为 `:is()`。

The **`:is()`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) 函数将选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。

注意，许多浏览器通过一个更旧的、带前缀的伪类:any() 来支持这个功能，包括旧版本的 Chrome、Firefox 和 Safari。这与 `:is()` 的工作方式完全相同，只是它需要厂商前缀，不支持[复杂的选择器](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Selectors)。

```css
/* 选择 header, main, footer 里的任意一个悬浮状态的段落 (p 标签) */
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


/* 向后兼容的版本:-*-any()
 (It is not possible to group selectors into single rule,
   because presence of invalid selector would invalidate whole rule.)*/
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
```

## 语法

{{CSSSyntax}}

## 示例

### Cross-browser example

```html
<header>
  <p>This is my header paragraph</p>
</header>

<main>
  <ul>
    <li><p>This is my first</p><p>list item</p></li>
    <li><p>This is my second</p><p>list item</p></li>
  </ul>
</main>

<footer>
  <p>This is my footer paragraph</p>
</footer>
```

```
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
  matchedItems = document.querySelectorAll(':is(header, main, footer) p');
} catch(e) {
  try {
    matchedItems = document.querySelectorAll(':-webkit-any(header, main, footer) p');
  } catch(e) {
    try {
      matchedItems = document.querySelectorAll(':-moz-any(header, main, footer) p');
    } catch(e) {
      console.log('Your browser doesn\'t support :is() or :any()');
    }
  }
}

for(let i = 0; i < matchedItems.length; i++) {
  applyHandler(matchedItems[i]);
}

function applyHandler(elem) {
  elem.addEventListener('click', function(e) {
    alert('这是一个包含于' + e.target.parentNode.nodeName + '的段落');
  });
}
```

{{EmbedLiveSample('Cross-browser_example', '100%', '300')}}

### 简化列表选择器

`:is()` 伪类可以大大简化 CSS 选择器。例如，下面的 CSS:

```css
/* 3-deep (or more) unordered lists use a square */
ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,
ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,
ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,
ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,
ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,
ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,
menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,
menu ol menu, menu ul menu, menu menu menu, menu dir menu,
menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,
dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,
dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,
dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {
  list-style-type: square;
}
```

... 可以被替换为：

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}
```

但是，不要像下面那么做: (参见 [the section on performance](#Issues_with_performance_and_specificity) 。)

```css
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### Simplifying section selectors

`:is` 伪类在处理 HTML5 [sections and headings](/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document)特别有用。 由于 {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} 经常嵌套在一起，没有 `:is()`的话匹配其他元素将会很棘手。

例如，在没有 `:is()`的情况下，在不同深度对所有{{HTMLElement("h1")}} 素进行样式化可能非常复杂：

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
section h1, article h1, aside h1, nav h1 {
  font-size: 25px;
}
/* Level 2 */
section section h1, section article h1, section aside h1, section nav h1,
article section h1, article article h1, article aside h1, article nav h1,
aside section h1, aside article h1, aside aside h1, aside nav h1,
nav section h1, nav article h1, nav aside h1, nav nav h1, {
  font-size: 20px;
}
/* Level 3 */
/* ... don't even think about it! */
```

使用 `:is()`之后，它变的非常简单：

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
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 15px;
}
```

### Avoiding selector list invalidation

Unlike [selector lists](/zh-CN/docs/Web/CSS/Selector_list), the `:is()` pseudo-class doesn't get invalidated when one of the selectors passed to it isn't supported by the browser.

```
:is(:valid, :unsupported) {
  ...
}
```

Will still parse correctly and match `:valid` even in browsers which don't support `:unsupported`, whereas:

```
:valid, :unsupported {
  ...
}
```

Will be ignored in browsers which don't support `:unsupported` even if they support `:valid`.

## Notes

### any(): — Issues with performance and specificity

[Bug 561154](https://bugzilla.mozilla.org/show_bug.cgi?id=561154) tracks an issue with Gecko where the specificity of `:-moz-any()` is incorrect. The current (as of Firefox 12) implementation puts `:-moz-any()` in the category of universal rules, meaning using it as the rightmost selector will be slower than using an ID, class, or tag as the rightmost selector.

For example:

```css
.a > :-moz-any(.b, .c)
```

... is slower than:

```css
.a > .b, .a > .c
```

... and the following is fast:

```css
:-moz-any(.a, .d) > .b, :-moz-any(.a, .d) > .c
```

`:is()` aims to fix such problems.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("css.selectors.is")}}

## 参见

- {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} - Like `:is()`, but with 0 [specificity](/zh-CN/docs/Web/CSS/Specificity).
- [Selector list](/zh-CN/docs/Web/CSS/Selector_list)
- [Web components](/zh-CN/docs/Web/Web_Components)
