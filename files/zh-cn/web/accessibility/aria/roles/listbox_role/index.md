---
title: ARIA：listbox 角色
slug: Web/Accessibility/ARIA/Roles/listbox_role
---

`listbox` 角色用于列表，用户可以从中选择一个或多个静态选项，并且与 HTML {{HTMLElement("select")}} 元素不同，它可能包含图像。

## 描述

`listbox` 角色用于标识创建列表的元素，用户可以从中选择一个或多个静态选项，类似于 HTML {{HTMLElement("select")}} 元素。与 {{HTMLElement("select")}} 不同，`listbox` 可以包含图像。`listbox` 的每个子项都应该有一个 [`option`](https://www.w3.org/TR/2010/WD-wai-aria-20100916/roles#option) role。

强烈建议使用 HTML {{HTMLElement("select")}} 元素，如果只能选择一个选项，则使用一组单选按钮，如果可以选择多个选项，则使用一组复选框，因为有很多键盘交互来管理所有后代的焦点和原生 HTML 元素为您提供相关的功能。

具有 `listbox` 角色的元素含有隐式的 `aria-orientation` 和 `vertical` 值。

当一个列表被 tab 聚焦到时，如果没有其他内容，将会选择列表中的第一项。可以用 Up/Down 方向键在列表中导航，按 Shift + Up/Down 方向键将移动并扩展选择。键入一个或多个字母将在列表项中导航（相同的字母指向以那个开头的每个选项，不同的字母指向以整个字符串开头的第一个选项）。如果当前选项有关联的菜单，Shift+F10 将启动该菜单。如果项目可被勾选，Space 可用于切换 [`checkbox`](https://www.w3.org/TR/wai-aria-practices/#checkbox) role。对于可选择的列表项，Space 切换它们的选择，Shift+Space 可用于选择连续的项目，Ctrl+ 方向键 移动而不选择，Ctrl+Space 可用于选择非连续的项目。建议使用 checkbox、link 或其他方法来选择所有项目，为此可以使用 Ctrl+A 作为快捷键。

当 listbox 角色被添加到元素中，或含有它的元素变得可见时，屏幕阅读器会在 listbox 获得焦点时读出它的 label 和 role。如果列表中的 option 或选项获得焦点，则接下来会读出它，如果屏幕阅读器支持，则会在列表中指示选项的位置。当焦点在列表中移动时，屏幕阅读器会读出相关选项。

### 相关的 ARIA 角色、状态和属性

#### 相关角色

- [option](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)
  - : 需要一个或多个嵌套的 `option`。所有被选择的选项都含有 `aria-selected` 且值为 `true`。所有未选中的选项都含有 `aria-selected` 且值为 `false`。如果某个选项不可选择，`aria-selected` 会被忽略。
- [list](/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role)
  - : 包含 `listitem` 元素的部分

#### 状态和属性

- aria-activedescendant
  - : 保存 listbox 中当前活动元素的 `id` 字符串。如果这是一个 option 元素，那么这将是最近与之交互选项的 `id`，无论该选项是否具有值为 `true` 的 `aria-selected`。即使在多选列表框中，也只会有一个 `id`。如果 `id` 不引用 listbox 的 DOM 后代，则 `id` 必须包含在 `aria-owns` 属性中的 ID 中。
- aria-owns
  - : 这是一个以空格分隔的元素 ID 列表，它们不是 listbox 的 DOM 子元素。此处列出的 ID 也不能列在任何其他元素的 `aria-owns` 属性中。
- aria-multiselectable
  - : 如果用户可以选择多个选项，则存在并设置为 `true`。如果设置为 `true`，_每个_ 可选的选项都应包含 `aria-selected` 属性并设置为 `true` 或 `false`。 *不可选*的选项*不应该*具有`aria-selected`属性。如果值为 `false` 或被省略，那么仅当前选中的选项（如果有任何选项被选中）才需要`aria-selected`属性，而且必须设置为`true`。
- aria-required
  - : 一个布尔属性，指示必须选择具有非空字符串值的选项。
- aria-readonly
  - : 用户无法更改选择或取消选择，但 listbox 是可操作的。
- aria-label
  - : 一个可供人类阅读的字符串，用于标识 listbox。如果有可见标签，则应使用 `aria-labelledby` 来引用该标签。
- aria-labelledby
  - : 标识以空格分隔的元素 ID 列表中的一个或多个可见元素，这些元素标识 listbox。如果没有可见标签，则应该使用 `aria-label` 来包含标签。（注意：带有两个 L 的 "labelled" 是基于辅助功能 API 约定的正确拼写。）
- aria-roledescription
  - : 一个可供人类阅读的字符串，可以更清楚地标识 listbox 的作用。屏幕阅读器通常会在阅读标签（如果存在）后向用户阅读此值，而不是说“listbox”。

（有关更多详细信息以及 ARIA 状态和属性的完整列表，请参阅 [ARIA `listbox` (role)](https://www.w3.org/TR/wai-aria-1.1/#listbox) 文档。 )

### 键盘交互

- 当单选 listbox 获得焦点时：

  - 如果在 listbox 获得焦点之前没有选择任何选项，则第一个选项将获得焦点。（可选）可以自动选择第一个选项。
  - 如果在列表框获得焦点之前选择了一个选项，则焦点将设置在所选选项上。

- 当多选 listbox 获得焦点时：

  - 如果在列表框获得焦点之前没有选择任何选项，则焦点将设置在第一个选项上，并且选择状态不会自动更改。
  - 如果在列表框获得焦点之前选择了一个或多个选项，则焦点将设置在列表中选定的第一个选项上。

- <kbd>Down Arrow</kbd>

  : 将焦点移至下一个选项。（可选）在单选 listbox 中，选中的值也可以随焦点移动。

- <kbd>Up Arrow</kbd>

  : 将焦点移至上一个选项。（可选）在单选 listbox 中，选中的值也可以随焦点移动。

- <kbd>Home</kbd>

  (可选): 将焦点移至第一个选项。（可选）在单选列表框中，选中的值也可以随焦点移动。对于超过五个选项的列表，强烈建议支持此键。

- <kbd>End</kbd>

  (可选): 将焦点移至最后一个选项。（可选）在单选列表框中，选中的值也可以随焦点移动。对于超过五个选项的列表，强烈建议支持此键。

- 建议所有 listbox 都预先输入，尤其是那些有七个以上选项的列表框：

  - 键入字符时：焦点移至名称符合键入的字符开头的一项。
  - 快速连续键入多个字符时：焦点移至名称符合键入的字符串开头的一项。

- **多项选择**: 作者可以实现两种交互模型中的任何一种来支持多选：推荐模型，不需要用户在导航列表时按住修饰键，例如

  <kbd>Shift</kbd>

  或

  <kbd>Control</kbd>

  或者需要在导航时按住修饰键以避免丢失选择状态的替代模型。

  - 推荐的选择模型——不需要按住修饰键：

    - <kbd>Space</kbd>

      : 更改焦点选项的选择状态。

    - <kbd>Shift + Down Arrow</kbd>

      （可选）: 将焦点移动并切换到下一个选项的选定状态。

    - <kbd>Shift + Up Arrow</kbd>

      （可选）: 将焦点移动并切换到上一个选项的选定状态。

    - <kbd>Shift + Space</kbd>

      （可选）: 选择从最近选择的项目到焦点项目的连续项目。

    - <kbd>Control + Shift + Home</kbd>

      （可选）: 选择焦点选项和直到第一个选项的所有选项。（可选）将焦点移至第一个选项。

    - <kbd>Control + Shift + End</kbd>

      （可选）: 选择焦点选项和直到最后一个选项的所有选项。（可选）将焦点移到最后一个选项。

    - <kbd>Control + A</kbd>

      （可选）: 选择列表中的所有选项。（可选）如果选择了所有选项，它也可以取消选择所有选项。

### 所需的 JavaScript 功能

#### 在单选 listbox 中选择一个选项

当用户选择一个选项时，必须发生以下情况：

1. 取消选择先前选择的选项，将 aria-selected 设置为 false，或完全删除该属性，将新未选择的选项的外观更改为未选择的。
2. 选择新选择的选项，在该选项上设置 aria-selected="true" 并将新选择的选项的外观更改为选中。
3. 将列表框上的 `aria-activedescendant` 值更新为新选择的选项的 id
4. 可视化处理选项的丢焦、聚焦和选定状态

#### 在多选列表框中切换选项的状态

当用户点击一个选项、聚焦在一个选项时按下 <kbd>Space</kbd>或者以其他方式切换一个选项的状态，必须发生以下情况：

1. 切换当前聚焦选项的 aria-selected 状态，如果它是 false，则将 aria-selected 的状态更改为 true，如果为 true，则将其更改为 false。
2. 更改选项的外观以反映其选定状态
3. 将列表框上的 aria-activedescendant 值更新为用户刚刚与之交互的选项的 id，即使他们将选项切换为取消选择。

> **备注：** ARIA 使用的第一原则是您可以使用具有内置语义和行为的原生功能，而不是重新利用元素并**添加** ARIA 角色、状态或属性使其可访问。含有后代 {{HTMLElement("option")}} 元素的 {{HTMLElement("select")}} 元素带有所有需要的交互的原生处理方法。

## 例子

#### 例子 1: 使用 aria-activedescendant 的单个选择列表框

下面的代码片段显示了如何将列表框角色直接添加到 html 源代码中。

```html
<p id="listbox1label" role="label">Select a color:</p>
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-labelledby="listbox1label"
  onclick="return listItemClick(event);"
  onkeydown="return listItemKeyEvent(event);"
  onkeypress="return listItemKeyEvent(event);"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">
    Green
  </div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Red</div>
  <div role="option" id="listbox1-4">Blue</div>
  <div role="option" id="listbox1-5">Violet</div>
  <div role="option" id="listbox1-6">Periwinkle</div>
</div>
```

使用原生的 HTML {{HTMLElement("select")}} 和 {{HTMLElement("label")}} 元素可以更简单。

```html
<label for="listbox1">Select a color:</label>
<select id="listbox1">
  <option selected>Green</option>
  <option>Orange</option>
  <option>Red</option>
  <option>Blue</option>
  <option>Violet</option>
  <option>Periwinkle</option>
</select>
```

#### 更多例子

- [可滚动的 listbox 示例](https://w3c.github.io/aria-practices/examples/listbox/listbox-scrollable.html): 滚动显示更多选项的单选 listbox，类似于 HTML `select` 的 `size` 属性大于 1。
- [可折叠下拉 listbox 示例](https://w3c.github.io/aria-practices/examples/listbox/listbox-collapsible.html): 激活时展开的单选可折叠 listbox，类似于 HTML `select` 并且属性 `size="1"`。
- [具有可重新排列选项的 listbox 示例](https://w3c.github.io/aria-practices/examples/listbox/listbox-rearrangeable.html): 带有可以添加、移动和删除选项的附带工具栏的单选和多选 listbox 的示例。

## 最佳实践

- 为了便于键盘访问，作者应该对这个角色的所有后代进行 [焦点管理](https://www.w3.org/TR/wai-aria-1.1/#managingfocus)
- 建议作者在列表未聚焦时使用不同的样式进行选择，例如非活动选项通常以较浅的背景颜色显示。
- 如果 listbox 不是另一个组件的一部分，那么它应该具有 `aria-labelledby` 属性。
- 如果一个或多个条目不是 listbox 的 DOM 子项，则需要设置额外的 `aria-*` 属性（参见 [ARIA Best Practices](https://www.w3.org/TR/wai-aria-practices/#listbox_div))。
- 如果有理由 [展开](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) 列表框，[`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/combobox_role) 角色可能更合适。

## 规范

{{Specifications}}

## 参见

- {{HTMLElement("select")}} 元素
- {{HTMLElement("label")}} 元素
- {{HTMLElement("option")}} 元素
- [ARIA: `combobox` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `option` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role)
- [ARIA: `listitem` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/TR/wai-aria-practices/#Listbox)
- [ARIA Role Model – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)

<section id="Quick_links">

1. [**WAI-ARIA 角色**](/zh-CN/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/zh-CN/docs/Web/Accessibility/ARIA/Roles")}}

</section>
