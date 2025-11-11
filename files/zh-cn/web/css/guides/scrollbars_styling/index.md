---
title: CSS Scrollbars
slug: Web/CSS/Guides/Scrollbars_styling
---

**CSS Scrollbars** 标准化了由 ie5 引入的废弃的滚动条颜色属性

## 示例

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
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

### 结果

{{EmbedLiveSample("示例")}}

## 参考

### CSS 属性

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
