---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: c2a472faa513c29e43c014c76803fbb042c0a86b
---

{{CSSRef}}

**`scrollbar-color`** [CSS](/zh-CN/docs/Web/CSS) 属性设置滚动条轨道（track）和滑块（thumb）的颜色。

**轨道**是指滚动条的背景，其一般是固定且与滚动位置无关的。

**滑块**是指滚动条的滑动部分，其通常浮动于轨道的顶部。

当为文档的根元素设置了 `scrollbar-color` 值时，这些值将被应用于视口滚动条。

## 语法

```css
/* 关键字值 */
scrollbar-color: auto;

/* <color> 值 */
scrollbar-color: rebeccapurple green; /* 两个有效的颜色。
第一个应用于滚动条的滑块，第二个应用于轨道。 */

/* 全局值 */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: revert;
scrollbar-color: revert-layer;
scrollbar-color: unset;
```

### 值

- `<scrollbar-color>`

  - : 定义滚动条的颜色。

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            在没有任何其他相关滚动条颜色属性的情况下，滚动条的轨道部分的默认平台渲染。
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            将第一种颜色应用于滚动条滑块，第二种颜色应用于滚动条轨道。
          </td>
        </tr>
      </tbody>
    </table>

> **备注：** [`@media (forced-colors: active)`](/zh-CN/docs/Web/CSS/@media/forced-colors) 会将 {{cssxref("scrollbar-color")}} 设置为 `auto`。

## 无障碍考虑

当使用具有特定颜色值的 `scrollbar-color` 属性时，作者应确保指定的颜色之间具有足够的对比度。对于关键字值，用户代理应确保其使用的颜色具有足够的对比度。参见 [WCAG 2.0 的技术：G183：使用 3:1 的对比度](https://www.w3.org/TR/WCAG20-TECHS/G183.html)。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 为溢出滚动条配色

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: #007 #bada55;
}
```

#### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

#### 结果

{{EmbedLiveSample("为溢出滚动条配色")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 溢出](/zh-CN/docs/Web/CSS/CSS_overflow)模块
- [CSS 滚动条样式](/zh-CN/docs/Web/CSS/CSS_scrollbars_styling)模块
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
