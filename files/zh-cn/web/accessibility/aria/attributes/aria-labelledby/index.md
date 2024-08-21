---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Attributes/aria-labelledby
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`aria-labelledby` 属性标识用作应用到当前元素的标签的元素。

## 描述

`aria-labelledby` 属性使作者能够引用页面上的其他元素来定义无障碍名称。当使用不具有原生支持关联元素以提供无障碍名称的元素时，这非常有用。

一些元素的[无障碍名称](https://w3c.github.io/accname/#dfn-accessible-name)来源于它们的内部内容。例如，{{HTMLElement('button')}}、{{HTMLElement('a')}} 或 {{HTMLElement('td')}} 的无障碍名称来自其开和闭标签之间的文本。其他元素，例如 {{HTMLElement('textarea')}}、{{HTMLElement('fieldset')}} 和 {{HTMLElement('table')}}，它们的无障碍名称来自相关联的元素的内容；对于这些元素，无障碍名称分别来自带有 `for` 属性的 {{HTMLElement('label')}}、{{HTMLElement('legend')}} 和 {{HTMLElement('caption')}}。

所有可交互元素都必须具有无障碍名称。当一个元素的无障碍名称需要使用来自 DOM 其他位置的内容时，可以使用 `aria-labelledby` 引用另一个元素来定义其无障碍名称。

如果没有可以引用以创建无障碍名称的内容，则应使用 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性。

`aria-labelledby` 的目的与 `aria-label` 相同。它为交互元素提供可识别的无障碍名称。如果一个元素同时设置了这两个属性，那么 `aria-labelledby` 将被使用。`aria-labelledby` 优先于所有其他提供无障碍名称的方法，包括 `aria-label`、{{HTMLElement('label')}} 和元素的内部文本。

`aria-labelledby` 和 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)属性都引用其他元素来计算文本替代。`aria-labelledby` 应引用提供给元素无障碍名称的简短文本。`aria-describedby` 用于引用提供描述的较长内容。如果 DOM 中没有为交互元素提供适合作为无障碍名称的简短标签的元素，则使用 `aria-label` 来定义交互元素的无障碍名称。

> [!NOTE]
> 虽然在美式英语中会假定该属性的拼写为“labeledby”，但“labelledby”拼写已被确立，并且是无障碍 API 中使用的拼写。

以下示例使用 `aria-labelledby` 通过使用兄弟元素的文本内容为复选框输入提供无障碍名称：

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">我同意遵守条款和条件。</span>
```

请注意，虽然在这种情况下使用 `aria-labelledby` 与使用带有 `for` 属性的 HTML {{HTMLElement('label')}} 元素类似，但有一些非常重要的区别。`aria-labelledby` 属性仅定义无障碍名称。它不提供 `<label>` 的其他功能，例如点击标签元素激活与其关联的输入。这必须通过 JavaScript 添加回去。

幸运的是，具有 `type="checkbox"` 的 HTML {{HTMLElement('input')}} 可以与原生 `<label>` 配合使用。如果可行，请使用以下方法：

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  我同意遵守条款和条件。
</label>
<p><a href="tac.html">阅读我们的条款和条件</a>。</p>
```

### 优势（和缺点）

1. `aria-labelledby` 属性在浏览器计算无障碍名称时具有最高优先级。请注意，它会覆盖其他命名元素的方法，包括 `aria-label`、其他命名属性，甚至元素的内容。

   ```html
   <button aria-label="蓝色" aria-labelledby="color">红色</button>
   <span id="color">黄色</span>
   ```

   在此示例中，无障碍名称为“黄色”。

2. `aria-labelledby` 属性的值采用由空格分隔的 ID 引用列表，这意味着你可以将多个元素合并为单个无障碍名称。你可以包含元素自身的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 来引用其自身的内容。

   ```html
   <h2 id="attr" class="article-title">你需要了解的 13 个 ARIA 属性</h2>
   <p>
     有超过 50 个 ARIA 状态和属性，但其中 13 个突出……
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">阅读更多<a>
   </p>
   ```

   在此示例中，无障碍名称为“阅读更多 你需要了解的 13 个 ARIA 属性”。

3. `aria-labelledby` 属性值的顺序很重要。当 `aria-labelledby` 引用多个元素时，每个引用的元素的内容将按照它们在 `aria-labelledby` 值中的引用顺序进行组合。如果我们写成了 `aria-labelledby="attr rm13">`，无障碍名称将会是“你需要了解的 13 个 ARIA 属性 阅读更多”。
4. `aria-labelledby` 属性会忽略其值中重复的 `id`。如果一个元素被多次引用，只有第一个引用会被处理。`aria-labelledby="attr attr rm13 rm13"> `将被视为 `aria-labelledby="attr rm13">`。
5. `aria-labelledby` 属性的值可以包括不可见元素的内容。虽然你应该为辅助技术用户提供与所有其他用户相同的内容，但你可以在计算的名称字符串中包含具有 HTML [`hidden`](/zh-CN/docs/Web/HTML/Global_attributes#hidden) 属性、CSS [`display: none`](/zh-CN/docs/Web/CSS/display) 和 CSS [`visibility: hidden`](/zh-CN/docs/Web/CSS/visibility) 的元素的内容。
6. `aria-labelledby` 属性会合并输入元素的值。如果值引用了一个 `<input>`，则表单控件的当前值将包含在计算的名称字符串中，并在值更新时改变。
7. `aria-labelledby` 属性不能被链式使用。如果具有 `aria-labelledby` 的元素引用了另一个也具有 `aria-labelledby` 的元素，那么被引用元素上的 `aria-labelledby` 属性将被忽略。

> [!WARNING]
> 因为计算具有 `aria-labelledby` 的元素的名称可能会很复杂，而且会引用隐藏的内容，所以使用辅助技术进行测试以确保用户看到的是预期的名称非常重要。

## 值

- ID 引用列表
  - : 一个由一个或多个 ID 值组成的用空格分隔的列表，引用了作为当前元素的标签的元素。

## 相关角色

几乎被所有角色所使用（**除了**那些无法由作者提供无障碍名称的角色）。

`aria-labelledby` 属性**不**被以下元素所支持：

- [`code`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)

## 规范

{{Specifications}}

## 参见

- HTML {{HTMLElement('label')}} 元素
- HTML {{HTMLElement('legend')}} 元素
- HTML {{HTMLElement('caption')}} 元素
- [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
