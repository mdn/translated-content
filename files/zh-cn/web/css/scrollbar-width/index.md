---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
---

{{CSSRef}}

**`scrollbar-width`** 属性允许开发者在元素显示滚动条时设置滚动条的最大宽度。

## 语法

```css
/* 关键字值 */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* 全局值 */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: revert;
scrollbar-width: revert-layer;
scrollbar-width: unset;
```

### 取值

- _\<scrollbar-width>_

  - : 将滚动条的宽度定义为数值宽度或者预定义宽度，当被定义为预定义宽度时，则必须为下列值之一：

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>系统默认的滚动条宽度。</td>
        </tr>
        <tr>
          <td><code>thin</code></td>
          <td>系统提供的瘦滚动条宽度，或者比默认滚动条宽度更窄的宽度。</td>
        </tr>
        <tr>
          <td><code>none</code></td>
          <td>不显示滚动条，但是该元素依然可以滚动。</td>
        </tr>
      </tbody>
    </table>

    > [!NOTE]
    > 用户代理必须将应用于根元素的任何 `scrollbar-width` 值应用于视口。

## 无障碍考虑

请注意使用此属性时需谨慎。如果开发者未提供替代的滚动机制，将 `scrollbar-width` 设置为 `thin` 或 `none` 可能会使内容难以或无法滚动。虽然在这种情况下，滑动手势或鼠标滚轮可以启用滚动，但某些设备没有滚动替代方案。

WCAG 标准 2.1.1（键盘）已经存在很长时间，以便为基本键盘可访问性提供建议，并且这应该包括内容区域的滚动。在 WCAG 2.1 中引入的标准 2.5.5（目标大小）建议触摸目标的宽度和高度至少为 44 像素（尽管在高分辨率屏幕上这个问题会更严重，建议进行全面测试）。

- [MDN 理解 WCAG，指南 2.1 解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN 理解 WCAG，指南 2.5 解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [理解成功标准 2.1.1 | W3C 理解 WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [理解成功标准 2.5.5 | W3C 理解 WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 调整溢出滚动条的大小

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
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

{{EmbedLiveSample("调整溢出滚动条的大小")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("::-webkit-scrollbar")}}
