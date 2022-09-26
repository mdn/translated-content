---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
---

{{CSSRef}}{{SeeCompatTable}}

**`scrollbar-width`** 属性允许开发者设置滚动条出现时的厚度

{{EmbedInteractiveExample("pages/css/scrollbar-width.html")}}

{{cssinfo}}

## Syntax

```css
/* Keyword values */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* Global values */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: unset;
```

### Values

- _\<scrollbar-width>_

  - : 将滚动条的宽度定义为数值宽度或者预定义宽度，当被定义为预定义宽度时，则必须为下列值之一：

    | `auto` | 系统默认的滚动条宽度                                   |
    | ------ | ------------------------------------------------------ |
    | `thin` | 系统提供的瘦滚动条宽度，或者比默认滚动条宽度更窄的宽度 |
    | `none` | 不显示滚动条，但是该元素依然可以滚动                   |

    注意：scrollbar-width 的长度值有可能从规范中删除，scrollbar-width 属性本身也是如此。 ([Issue 1958](https://github.com/w3c/csswg-drafts/issues/1958))

    > **备注：** User Agents must apply any `scrollbar-width` value set on the root element to the viewport.

### Formal syntax

{{CSSSyntax}}

## Example

### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
}
```

### HTML

```html
<div class="scroller">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</div>
```

### Result

{{EmbedLiveSample("Example")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("-ms-overflow-style")}}
- {{CSSxRef("::-webkit-scrollbar")}}
