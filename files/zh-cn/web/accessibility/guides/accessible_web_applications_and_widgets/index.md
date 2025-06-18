---
title: 无障碍 Web 应用和微件概述
slug: Web/Accessibility/Guides/Accessible_web_applications_and_widgets
l10n:
  sourceCommit: acad5b9afc0a9e20144d49fd3fbb7f4fa92c9192
---

大多数 JavaScript 库提供了客户端微件（widget）库，模拟熟悉的桌面界面的行为。滑块、菜单栏、文件列表视图等可以通过 JavaScript、CSS 和 HTML 的组合来构建。由于 HTML4 规范不提供语义上描述这些微件的内置标签，因此开发人员通常会使用通用元素（如 {{HTMLElement('div')}} 和 {{HTMLElement('span')}}）。虽然这导致了一个看起来像桌面对应的组件，但标记中通常没有足够的辅助技术可用的语义信息。

## 问题

对于由于某种原因而无法查看屏幕的用户来说，Web 页面上的动态内容都很容易成为问题。股票行情、实时 twitter 消息更新、进度条和类似内容以辅助技术（AT）可能不知道的方式修改 DOM。那就是 [ARIA](/zh-CN/docs/Web/Accessibility/ARIA) 存在的意义。

_示例 1：没有使用 ARIA 标签（label）的标签页（tab）组件的标记（markup）。标记中没有足够的信息来描述组件的形式和功能。_

```html
<!-- 这是个标签页微件。只看 HTML 标记会知道作用如此吗？ -->
<ol>
  <li id="ch1Tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <div id="ch1Panel">第 1 章的内容在这里</div>
  <div id="ch2Panel">第 2 章的内容在这里</div>
  <div id="quizPanel">测验的内容在这里</div>
</div>
```

_示例 2：标签页微件的视觉样式。用户可能能够通过视觉识别，但是对于辅助技术来说，没有机器可读的语义信息。_

![标签页微件的截图](tabs_widget.png)

## ARIA

**ARIA**（无障碍富互联网应用）使开发者能够通过为标记添加特殊属性来更详细地描述微件。ARIA 旨在填补标准 HTML 标签与动态 Web 应用程序中的桌面样式控件之间的空白，它提供了角色和状态来描述大多数熟悉的 UI 微件的行为。

> [!WARNING]
> 其中的许多是在浏览器不完全支持现代 HTML 特性时添加的。**开发者应该始终优先使用正确的语义化 HTML 元素而不是使用 ARIA**。

ARIA 规范分为三种不同类型的属性（attribute）：角色、状态和属性（property）。角色描述了 HTML4 中没有的微件，例如滑块、菜单栏、标签页和对话框。属性描述了这些微件的特性，例如它们是否可拖动、是否有必填元素或是否有与之关联的弹出窗口。状态描述了元素的当前交互状态，通知辅助技术它是否繁忙、禁用、选中或隐藏。

ARIA 旨在由浏览器自动解释并转换为操作系统的原生无障碍 API。因此，具有 role="slider" 的元素的控制方式与操作系统上原生滑块的控制方式相同。

与上一代 Web 应用程序相比，这提供了更加一致的用户体验，因为辅助技术用户在使用基于 Web 的应用程序时可以应用他们对桌面应用程序的所有知识。

_示例 3：添加了 ARIA 属性的标签页微件的标记。_

```html
<!-- 现在*这些*是标签页了！ -->
<!-- 我们添加了角色属性来描述标签页列表以及每个标签页。 -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- 注意，我们添加了用于描述这些面板的角色（role）和 aria-labelledby 属性。 -->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">
    第 1 章的内容在这里
  </div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">
    第 2 章的内容在这里
  </div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">
    测验的内容在这里
  </div>
</div>
```

ARIA 被所有主流浏览器和许多辅助技术所[广泛支持](https://caniuse.com/#feat=wai-aria)。

### 表现变化

动态的表现（presentational）变化包括使用 CSS 来改变内容的外观（例如在无效数据周围使用红色边框，或者改变选中复选框的背景颜色），以及显示或隐藏内容。

#### 状态变化

ARIA 提供了用于声明 UI 微件当前状态的属性。例如（但不限于）：

- `aria-checked`
  - : 表示复选框或单选按钮的状态。
- `aria-disabled`
  - : 表示元素可见但不可编辑或无法操作。
- `aria-grabbed`
  - : 表示拖放操作中对象的“抓取”状态。

（有关 ARIA 状态的完整列表，请参阅 [ARIA 状态和属性列表](https://www.w3.org/TR/wai-aria-1.1/#introstates)。）

开发者应该使用 ARIA 状态来指示 UI 微件元素的状态，并使用 CSS 属性选择器以根据状态变化改变视觉外观（而不是使用脚本来更改元素上的类名）。

#### 可见性变化

当内容可见性发生变化时（即，元素被隐藏或显示），开发者应该改变 **`aria-hidden`** 属性的值。应该使用上面描述的技术来声明 CSS，使用 `display:none` 以在视觉上隐藏元素。

下面是一个使用 **`aria-hidden`** 来控制小提示可见性的示例。该示例展示了一个简单的 Web 表单，其中包含与输入字段关联的提示。

在该示例中，小提示的 HTML 标记如下所示。第 9 行将 **`aria-hidden`** 状态设置为 `true`。

```html
<div class="text">
  <label id="tp1-label" for="first">名字：</label>
  <input
    type="text"
    id="first"
    name="first"
    size="20"
    aria-labelledby="tp1-label"
    aria-describedby="tp1"
    aria-required="false" />
  <div id="tp1" class="tooltip" role="tooltip" aria-hidden="true">
    你的名字是可选的
  </div>
</div>
```

标记的 CSS 如下所示。请注意，没有使用自定义类名，只有第 1 行 **`aria-hidden`** 属性的状态。

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

用于更新 **`aria-hidden`** 属性的 JavaScript 如下所示。请注意，脚本只更新 **`aria-hidden`** 属性（第 2 行）；它不需要添加或删除自定义类名。

```js
function showTip(el) {
  el.setAttribute("aria-hidden", "false");
}
```

### 角色变化

ARIA 允许开发者在这个元素本身提供了错误语义或没有语义的情况下，为元素声明语义角色。不应改变元素的角色（**`role`**）。相反，请删除原始元素并用具有新的 **`role`** 的元素替换它。

例如，考虑一个“行内编辑”微件：一个允许用户在不切换上下文的情况下编辑文本的组件。该组件有一个“预览”模式，在该模式下，文本不可编辑，但可激活，以及一个“编辑”模式，在该模式下，文本可编辑。开发者可能会尝试使用只读文本类型的 {{ HTMLElement("input") }} 元素来实现“预览”模式，并将其 ARIA **`role`** 设置为 `button`，然后在“编辑”模式下使元素可写，并删除“编辑”模式下的 **`role`** 属性（因为 {{ HTMLElement("input") }} 元素具有自己的角色语义）。

请不要这样做。应该使用完全不同的元素来实现“预览”模式，例如具有 `button` **`role`** 的 {{ HTMLElement("div") }} 或 {{ HTMLElement("span") }}，并使用文本类型的 {{ HTMLElement("input") }} 元素来实现“编辑”模式。

### 异步内容变化

> [!NOTE]
> 正在施工中。请参见[实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)。

## 键盘导航

开发者在创建自定义微件时经常忽略对键盘的支持。为了让各种用户都能访问，Web 应用程序或微件的所有功能都应该可以通过键盘控制，而不需要鼠标。在实践中，这通常涉及遵循桌面上类似微件支持的约定，充分利用制表键（tab）、回车、空格和方向键。

传统意义上，Web 上的键盘导航仅限于制表键。用户按制表键将以线性顺序依次聚焦页面上的每个链接、按钮或表单，使用换档键 + 制表键则向后导航。这是一种一维导航形式——前进和后退，一次一个元素。在相当密集的页面上，仅使用键盘的用户通常需要按下制表键数十次才能访问所需的部分。在 Web 上实现桌面风格的键盘约定有可能显著加快许多用户的导航速度。

下面是 ARIA 启用的 Web 应用程序中键盘导航的摘要：

- 制表键应该将焦点放到整个微件上面。例如，导航到菜单栏时**不应该**将焦点放在菜单的第一个元素上。
- 方向键应该允许在微件内进行选择或导航。例如，使用左右方向键应该将焦点移动到上一个和下一个菜单项。
- 当微件不在表单内时，回车和空格都应该选择或激活控件。
- 若在表单内，空格键应该选择或激活控件，而回车键应该将表单提交到默认的地址（action）。
- 如果不确定，请模仿你正在创建的控件的标准桌面行为。

因此，对于上面的标签页微件示例，用户应该能够使用制表键和上档键 + 制表键导航到微件的容器（上面标记中的 {{HTMLElement('ol')}}）中并从其导航出来。一旦键盘焦点位于容器内，方向键应该允许用户在每个标签之间导航（{{HTMLElement('li')}} 元素）。从这里开始，约定因平台而异。在 Windows 上，当用户按下方向键时，下一个标签应该自动激活。在 macOS 上，用户可以按回车或空格键来激活下一个标签。[键盘导航的 JavaScript 微件](/zh-CN/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)的深入教程描述了如何使用 JavaScript 实现此行为。

## 参见

- [ARIA](/zh-CN/docs/Web/Accessibility/ARIA)
- [键盘导航的 JavaScript 微件](/zh-CN/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [WAI-ARIA 规范](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA 创作实践](https://www.w3.org/WAI/ARIA/apg/)
