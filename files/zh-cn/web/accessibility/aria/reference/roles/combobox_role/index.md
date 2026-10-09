---
title: ARIA：combobox 角色
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: d86426e69aaed1dbf19f09d92d78d1d320737733
---

`combobox` 角色将一个元素标识为 `input` 或 `button`，用于控制另一个元素（例如 `listbox` 或 `grid`），后者可以动态弹出，以帮助用户设置值。组合框（combobox）可以是可编辑的（允许文本输入），也可以是仅限选择的（只允许从弹出层中进行选择）。

## 描述

组合框是一种复合组件（composite widget），它将一个带有名称的输入字段与一个为该输入字段提供可能取值的弹出层结合在一起。这一组件的目的是改善用户体验：帮助用户无需输入完整的值即可选定一个值；并且，视支持的值是否受限而定，还可以防止用户输入无效或其他不受支持的值。

`combobox` 角色既可以设置在可编辑组合框所用的 input 元素上，也可以设置在仅限选择组合框所用的 button 元素上。该元素控制另一个元素（例如 listbox 或 grid），后者可以动态弹出，以帮助用户设置值。

具有 `combobox` 角色的元素可以是一个可编辑的单行文本字段（使用 {{HTMLElement('input')}} 元素，类似于带有 {{HTMLElement('datalist')}} 的输入框），也可以是一个仅限选择的元素（使用 `button` 元素），后者只显示当前值，不允许直接输入文本。

WAI-ARIA 组合框只需要一个属性：[`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)。然而，根据具体实现，通常还需要以下几个属性：[`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)、[`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)、[`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 和 [`aria-autocomplete`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)。

通常，组合框的初始状态为折叠状态，设置了 `aria-expanded="false"`。在折叠状态下，只有组合框元素以及可选的用于唤起弹出层的同级按钮是可见的。折叠时，必须将 [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 的值设置为 `false`，因为它向辅助技术表明该组件是可展开的。

当显示当前值的组合框元素及其关联的弹出元素都可见时，组合框处于展开状态。展开时必须设置 `aria-expanded="true"`。

与 `combobox` 关联的弹出元素可以是 [`listbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)、[`tree`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)、[`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) 或 [`dialog`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) 元素。

组合框具有隐式的 [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) 值 `listbox`，因此如果弹出层是 `listbox`，则可以省略该属性。如果组合框的弹出元素是 `tree`、`grid` 或 `dialog`（即 `listbox` 以外的任何元素），则必须设置 `aria-haspopup` 属性。`aria-haspopup` 的值必须是 `tree`、`grid`、`dialog` 或 `listbox` 角色。请注意，对于该属性，`true` 表示 `menu`，因此请确保其值与弹出层的角色相对应，而不是使用布尔值。

当组合框的弹出层显示时，请确保组合框元素上的 [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 属性被设置为弹出层 `listbox`、`tree`、`grid` 或 `dialog` 元素的 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id)。这就是具有 `combobox` 角色的元素与其所控制的弹出层之间的关系的表示方式。（注意：在较旧的 ARIA 规范中，使用的是 `aria-owns` 而非 `aria-controls`，因此你可能会在较旧的组合框实现中看到 `aria-owns`。代码中的 `aria-owns` 应当更新为 `aria-controls`！）

如果组合框的 UI 中包含一个可见控件（例如图标），用于通过指针和触摸事件控制弹出层的显示与隐藏，那么该控件应当是 {{HTMLElement('button')}}、类型为 `button` 的 {{HTMLElement('input')}}，或者 [`tabindex`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/tabindex) 为 `-1` 的 [`button`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) 角色元素。这样做可以让按钮可以被聚焦，但不包含在键盘 Tab 序列中。它绝不能是具有 `combobox` 角色的元素的后代。

为了实现键盘可访问性，必须通过编程实现键盘支持，以便在 `combobox` 元素与弹出层 `listbox`、`tree`、`grid` 或 `dialog` 中包含的元素之间移动焦点。一种常见的约定是，<kbd>下方向键</kbd> 将焦点从输入框移动到弹出元素的第一个可聚焦后代。

对于 DOM 焦点保留在组合框上的实现，可以使用 [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性来标识组合框弹出层中当前处于活动状态的元素，例如弹出 `listbox` 中的 `option`。如果在唤起弹出层时 DOM 焦点并不保留在组合框上，而是移动到了弹出层中（例如 dialog），那么可能不需要 `aria-activedescendant`。

如果组合框实现为可编辑的 {{HTMLElement('input')}} 元素，那么组合框的值就是该输入框的值。对于使用 `button` 元素实现的仅限选择组合框，其值来自弹出层中被选中的选项。

[`aria-autocomplete`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) 属性仅适用于支持文本输入的可编辑组合框。对于这类组合框，请将该属性设置为与所提供行为相对应的值：`inline`、`list` 或 `both`。该属性表明输入文本将触发显示一个或多个对用户意图值的预测，并指定这些预测的呈现方式。对于使用 `button` 元素的仅限选择组合框，不应使用 `aria-autocomplete`，因为无法进行文本输入。

每个 `combobox` 都必须具有一个无障碍名称，可以通过以下三种方式之一提供：

1. 对于 {{HTMLElement('input')}} 元素，使用与之关联的 {{HTMLElement('label')}}。
2. 如果 UI 中存在可见标签，使用 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 引用该标签元素的 `id`。
3. 如果没有可见标签，则使用 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)。

> [!NOTE]
> 这三种方法只能使用其中一种；不要将它们组合使用。

### 关联的 WAI-ARIA 角色、状态和属性

- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : 必需。标识组合框是打开（`true`）还是关闭（`false`）。
- [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : 隐含。如果省略，默认为 `listbox`。也支持 `tree`、`grid` 或 `dialog`。标识组合框具有弹出层，并指示其类型。

### 键盘交互

- <kbd>下方向键</kbd>
  - : 如果弹出层处于关闭状态，则将其打开，并将焦点移动到下一个选项；如果之前没有选中任何选项，则移动到第一个选项。

- <kbd>Alt</kbd> + <kbd>下方向键</kbd>（可选）
  - : 如果弹出层可用但未显示，则在不移动焦点的情况下显示弹出层。

- <kbd>上方向键</kbd>
  - : 如果弹出层处于关闭状态，则将其打开，并将焦点移动到上一个选项；如果之前没有选中任何选项，则移动到最后一个选项。

- <kbd>Alt</kbd> + <kbd>上方向键</kbd>（可选）
  - : 如果焦点位于弹出层上，则将焦点返回到组合框，否则关闭弹出层。

- <kbd>Escape</kbd>
  - : 如果弹出层处于打开状态，则将其关闭。如果弹出层已经关闭，则对于可编辑组合框，会清除组合框的值。

#### 可编辑组合框的键盘交互

- <kbd>Enter</kbd>
  - : 如果弹出层中选中了某条自动补全建议，则通过更新组合框的值并将输入光标置于末尾来接受该建议。
    也可能触发默认操作（例如，在即时通讯应用中，将被接受的值添加到收件人列表中）。

- <kbd>Tab</kbd>
  - : 接受当前值，并将焦点移动到下一个可聚焦元素。

#### 仅限选择组合框的键盘交互

- <kbd>Enter</kbd> 或 <kbd>空格</kbd>
  - : 当弹出层关闭时，打开弹出层。当弹出层打开且选中了某个选项时，将该选中选项作为组合框的值并关闭弹出层。

- <kbd>Tab</kbd>
  - : 接受当前选择，并将焦点移动到下一个可聚焦元素。

- <kbd>Home</kbd> 或 <kbd>End</kbd>
  - : 当弹出层打开时，分别将焦点移动到第一个或最后一个选项。

## 示例

```html
<label for="jokes">选择你喜欢的笑话类型</label>
<div class="combo-wrap">
  <input
    type="text"
    id="jokes"
    role="combobox"
    aria-controls="joketypes"
    aria-autocomplete="list"
    aria-expanded="false"
    data-active-option="item1"
    aria-activedescendant="" />
  <span aria-hidden="true" data-trigger="multiselect"></span>
  <ul id="joketypes" role="listbox" aria-label="笑话">
    <li class="active" role="option" id="item1">双关语</li>
    <li class="option" role="option" id="item2">谜语</li>
    <li class="option" role="option" id="item3">观察式幽默</li>
    <li class="option" role="option" id="item4">敲门笑话</li>
    <li class="option" role="option" id="item5">一句话笑话</li>
  </ul>
</div>
```

## 规范

{{Specifications}}

## 参见

- HTML {{HTMLElement('label')}} 元素
- HTML {{HTMLElement('select')}} 元素
- HTML {{HTMLElement('option')}} 元素
- HTML {{HTMLElement('input')}} 元素
- [ARIA：`listbox` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [ARIA：`option` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA：`list` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA：`listitem` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA 最佳实践 – 组合框](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Deque 的无障碍组合框模块](https://dequelabs.github.io/combobo/demo/)示例
