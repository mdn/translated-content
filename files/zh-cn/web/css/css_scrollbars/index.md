---
title: CSS Scrollbars
slug: Web/CSS/CSS_Scrollbars
---

{{CSSRef}}{{SeeCompatTable}}

**CSS Scrollbars**标准化了由 ie5 引入的废弃的滚动条颜色属性

## 基础例子

在这个例子里 我们选择使用一个比较细的 滚动轨道为绿色，滚动块为紫色的滚动条

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
```

### HTML

```html
<div class="scroller">
Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
Dandelion cucumber earthnut pea peanut soko zucchini.
</div>
```

### Result

{{EmbedLiveSample("Example")}}

## Reference

### CSS Properties

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Specifications

{{Specifications}}

## Accessibility concerns

When you customize scrollbars, consider they have enough contrast and that their hit area is large enough for people who use touch input.

- [Baseline Rules for Scrollbar Usability | Adrian Roselli](http://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html)

## Browser compatibility

{{Compat}}
