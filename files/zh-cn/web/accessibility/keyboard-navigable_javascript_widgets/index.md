---
title: 键盘导航的 JavaScript 微件
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: 02e06e701230eb5c67caa00fc8d09604a07d5734
---

{{AccessibilitySidebar}}

网页应用经常使用 JavaScript 来模拟桌面组件，比如菜单、树状视图、富文本以及标签面板等。网页中这些微件通常是由 {{ HTMLElement("div") }} 和 {{ HTMLElement("span") }} 等元素组合而成，并不是原生的，也不会提供对应的桌面组件所拥有的键盘功能。本文档主要描述能让 JavaScript 微件使用键盘访问的技术。

## 利用 tabindex

默认情况下，当人们使用 tab 键浏览网页时，只有交互式元素（如链接、表单控件）才会被聚焦。通过 `tabindex` [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)，作者也可以使其他元素成为焦点。当设置为 `0` 时，元素可通过键盘和脚本聚焦。当设置为 `-1` 时，元素可被脚本聚焦，但不会成为键盘聚焦顺序的一部分。

使用键盘时，元素获得焦点的顺序默认为源顺序。在特殊情况下，作者可能希望重新定义顺序。为此，作者可以将 `tabindex` 设置为任意正数。

> [!WARNING]
> 避免为 `tabindex` 使用正值。具有正 `tabindex` 值的元素会被放在页面上默认的交互式元素之前，这意味着页面作者在使用一个或多个 `tabindex` 正值时，必须为页面上所有可聚焦元素设置（并维护）`tabindex` 值。

下面表格阐述主流浏览器中 `tabindex` 的行为：

<table>
  <tbody>
    <tr>
      <th><code>tabindex</code> 属性</th>
      <th>
        可用鼠标或 JavaScript 语句 <code>element.focus()</code> 获取焦点
      </th>
      <th>可使用 Tab 键导航获取焦点</th>
    </tr>
    <tr>
      <td>不存在</td>
      <td>
        遵循所在平台针对此元素的默认行为（表单控件、链接等）
      </td>
      <td>遵循所在平台针对此元素的默认行为</td>
    </tr>
    <tr>
      <td>负值（也就是说，<code>tabindex="-1"</code>）</td>
      <td>是</td>
      <td>
        否；作者必须使用 <a href="/zh-CN/docs/Web/API/HTMLElement/focus"><code>focus()</code></a>
        来聚焦该元素。可以在方向键或者其他键的响应里面做。
      </td>
    </tr>
    <tr>
      <td>零（也就是说，<code>tabindex="0"</code>）</td>
      <td>是</td>
      <td>相对于元素在文档中的位置，以 tab 顺序排列（请注意，交互式元素如 {{HTMLElement('a')}} 默认具有这种行为，它们不需要该属性）。</td>
    </tr>
    <tr>
      <td>正值（如 <code>tabindex="33"</code>）</td>
      <td>是</td>
      <td>
        <code>tabindex</code> 值决定了该元素在制表符顺序中的位置：值越小，元素在制表符顺序中的位置就越靠前（例如，<code>tabindex="7"</code> 将位于 <code>tabindex="11"</code> 之前）。
      </td>
    </tr>
  </tbody>
</table>

### 非原生控件

具有交互功能的原生 HTML 元素，如 {{ HTMLElement("a") }}、{{ HTMLElement("input") }} 和 {{ HTMLElement("select") }}，已经可以被键盘访问，因此使用其中之一是让组件与键盘配合使用的最快途径。

作者还可以为 {{ HTMLElement("div") }} 或 {{ HTMLElement("span") }} 添加为 `0` 的 `tabindex` 值，使其可以通过键盘访问。这对于使用 HTML 中不存在的交互式元素的组件尤其有用。

### 组合控件

对于菜单、选项卡列表、网格或树状视图等组合微件，父元素应处于选项卡顺序中（`tabindex="0"`），而每个子选项/选项卡/单元格/行都应从选项卡顺序中移除（`tabindex="-1"`）。用户应能使用箭头键浏览后代元素。（有关典型窗口微件通常需要的键盘支持的完整描述，请参阅 [WAI-ARIA 创作实践](https://www.w3.org/WAI/ARIA/apg/)）。

下面的示例展示了这种技术在嵌套菜单控件中的应用。一旦键盘焦点落在包含 {{ HTMLElement("ul") }} 的元素上，JavaScript 开发人员就必须以编程方式管理焦点并响应箭头键。有关在微件内管理焦点的技术，请参阅下面的“在组内管理焦点”。

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Font
    <ul id="fontMenu" title="Font" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Style
    <ul id="styleMenu" title="Style" tabindex="-1">
      <li id="italic" tabindex="-1">Italics</li>
      <li id="bold" tabindex="-1">Bold</li>
      <li id="underline" tabindex="-1">Underlined</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Justification
    <ul id="justificationMenu" title="Justification" tabindex="-1">
      <li id="left" tabindex="-1">Left</li>
      <li id="center" tabindex="-1">Centered</li>
      <li id="right" tabindex="-1">Right</li>
      <li id="justify" tabindex="-1">Justify</li>
    </ul>
  </li>
</ul>
```

#### 被禁用的控件

当一个自定义控件变成禁用（disabled）状态时，通过设置 `tabindex="-1"` 把它从 tab 序列里面移除。请注意，组合微件中禁用的项目（如菜单中的菜单项）仍可使用箭头键导航。

## 在组合控件里面管理焦点

当用户从一个微件 tab 离开之后聚焦回来，焦点应该回到离开之时正被聚焦的元素上，比如某个树节点或者网格单元。有两种办法完成这一点：

1. 流动 `tabindex`: 通过编程移动焦点
2. `aria-activedescendent`: 管理一个“虚拟”焦点

### 方法 1：流动 tabindex

在被聚焦的元素上设置 `tabindex` 为“0”，这样可以保证在用户在 tab 离开又返回后仍然选中组合微件中之前被选中的那项。注意在更改 `tabindex` 为“0”同时需要把之前选中过的那项设置 `tabindex="-1"`。这个方法包含在键盘事件里面通过程序移动焦点以及更改 `tabindex` 到当前焦点中的那项上。需要做以下几步：

在每个元素上绑定 key down 事件，当捕捉到控制移动到另外元素的方向键时：

1. 通过编码把 focus 应用到新元素上，
2. 更改被 focus 中元素上的 tabindex 为“0”，并且
3. 更改之前被 focus 中元素的 tabindex 为“-1”。

下面是一个使用这种技术的 [WAI-ARIA 树视图](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html)示例。

### 提示

#### 用 element.focus() 来设置焦点

不要使用 `createEvent()`、`initEvent()` 和 `dispatchEvent()` 来将焦点事件发送到元素上。DOM 焦点事件仅被视为信息性事件：由系统在某物被聚焦后生成，但实际上并不用于设置焦点。请使用 `element.focus()` 代替。

#### 用 onfocus 来追踪当前焦点

不要认为所有的焦点变化都来自于键盘和鼠标事件：像屏幕阅读器之类的辅助技术可以设置焦点到任意一个可聚焦元素上。用 `onfocus` 和 `onblur` 来追踪焦点。

`onfocus` 和 `onblur` 现在可以在每个元素上使用。没有标准的 DOM 接口来获取当前文档的焦点，如果要跟踪焦点状态，可以使用 [document.activeElement](/zh-CN/docs/Web/API/Document/activeElement) 来获取活动元素。还可以使用 [document.hasFocus](/zh-CN/docs/Web/API/Document/hasFocus) 来确定当前文档是否处于焦点状态。

### 方法 2：`aria-activedescendant`

这个办法包含绑定一个单独的事件句柄到容器窗口微件上，运用 `aria-activedescendent` 属性来追踪一个“虚拟”焦点。（关于 ARIA 更多的信息，查看[无障碍的 Web 应用程序和微件概述](/zh-CN/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)。）

`aria-activedescendant` 属性标识当前具有虚拟焦点的后代元素的 ID。容器上的事件处理程序必须通过更新 `aria-activedescendant` 属性的值来响应按键和鼠标事件，并确保当前项目的样式适当（例如，使用边框或背景色）。

## 一般准则

### 使用 onkeydown 来捕获键盘事件，而不是 onkeypress 事件

IE 不会触发非字母数字键的 `keypress` 事件。使用 `onkeydown` 替代。

### 确保键盘和鼠标有相同的体验

为了确保不同输入设备的用户体验一致，键盘和鼠标事件处理程序在适当的情况下应该共享代码。例如，当用户使用方向键导航的时候，一些代码会更新相应元素的 `tabindex` 或风格，用鼠标点击也应该有同样的变化。

### 确保键盘可以激活元素

为确保键盘可用于激活元素，与鼠标事件绑定的处理程序也应与键盘事件绑定。例如，为确保 Enter 键能激活元素，如果有一个 `onclick="doSomething()"`，则应将 `doSomething()` 也绑定到按键事件： `onkeydown="return event.keyCode !== 13 || doSomething();"`。

### 始终用程序为 tabindex="-1" 的项和元素设置焦点样式

对于以编程方式接收焦点的项目，IE 不会自动绘制焦点轮廓。可以选择通过 `this.style.backgroundColor = "gray";` 更改背景颜色，或通过 `this.style.border = "1px dotted invert"` 添加点状边框。在点状边框的情况下，需要确保这些元素一开始就有一个不可见的 1px 边框，这样在应用边框样式时元素就不会变大（边框会占用空间，而 IE 并没有实现 CSS 的轮廓）。

### 阻止浏览器的按键事件处理

如果你用自己的微件处理按键事件，可以通过事件处理程序的返回值来阻止浏览器的缺省处理（例如，响应方向键的滚动）。如果你的事件处理程序返回 `false`，事件就不会传播到处理程序之外。

例如：

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

如果 `handleKeyDown()` 返回 `false`，将会结束事件处理，阻止浏览器继续处理按键行为。

### 不要依赖于按键重复的一致行为

非常不幸，`onkeydown` 重复或不重复执行取决于代码执行的浏览器和操作系统。
