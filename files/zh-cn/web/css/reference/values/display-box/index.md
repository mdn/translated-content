---
title: <display-box>
slug: Web/CSS/Reference/Values/display-box
---

这些关键词定义一个元素到底是否产生显示盒（display boxes）。

## 语法

有效的 `<display-box>` 值：

- `contents` {{Experimental_Inline}}
  - : 这些元素自己不显示。它们被它们的伪盒（pseudo-box）和子项盒（child boxes）取代。请注意 CSS 层次 3 显示规格定义的 `contents` 值应该怎样影响"非常见元素" - 即不由 CSS 渲染的元素（诸如被取代元素）。参考 [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) 以获取细节。

    由于浏览器中有个 bug，它会从无障碍树（accessibility tree）删除元素，屏幕阅读者会看不到里面内容。参考下方[无障碍考虑](#无障碍考虑)部分以获取细节。

- `none`
  - : 关闭元素的显示，不影响布局（文件中没有该元素）。所有子项的显示也被关闭。

    要一个元素占据空间（文件中存在），但不渲染，请使用 {{CSSxRef("visibility")}} 属性。

## 示例

在第一个例子中，带有 secret 类的段落，会被设置成 `display: none`; 该盒子和内容不会渲染。

### display: none

#### HTML

```html
<p>Visible text</p>
<p class="secret">Invisible text</p>
```

#### CSS

```css
p.secret {
  display: none;
}
```

#### 结果

{{EmbedLiveSample("display: none", "100%", 60)}}

### display: contents

在本例中，其外部 {{htmlelement("div")}} 有一个 2px 红色边框 和 300px 的宽度。然而，它有 `display: contents` 因而指定这个 `<div>` 不会渲染，边框和宽度都没有，其子元素会显示。

#### HTML

```html
<div class="outer">
  <div>Inner div.</div>
</div>
```

#### CSS

```css
.outer {
  border: 2px solid red;
  width: 300px;
  display: contents;
}

.outer > div {
  border: 1px solid green;
}
```

#### 结果

{{EmbedLiveSample("display: contents", 300, 60)}}

## 无障碍考虑

目前在大多数浏览器中的实现，是会从[无障碍树](/zh-CN/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#无障碍_api)中删除 `display` 属性值为 `contents` 的元素。这会引起该元素（在部分浏览器版本中）和其子项不读出来。这不符合 [CSSWG 规范](https://drafts.csswg.org/css-display/#the-display-properties)的行为要求。

- [More accessible markup with display: contents | Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [More accessible markup with display: contents — hiddedevries.nl](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
