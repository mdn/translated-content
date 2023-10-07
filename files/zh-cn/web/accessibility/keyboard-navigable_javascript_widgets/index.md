---
title: 键盘导航的 JavaScript 组件
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("Web/Accessibility", 1)}}
</section>

### 概况

网页应用经常使用 JavaScript 来模拟桌面组件，比如菜单、树状视图、富文本以及标签面板等。网页中这些组件通常是由 {{ HTMLElement("div") }}和 {{ HTMLElement("span") }} 等元素组合而成，并不是原生的，也不会提供对应的桌面组件所拥有的键盘功能。本文档主要描述能让 JavaScript 组件通过键盘 access 的技术。

### 利用 tabindex

最初 tabindex 出现是做为 HTML4 的一部分，提供一种手段让开发人员定义元素的顺序，可以让用户通过键盘按此顺序来获取焦点。最新在 HTML5 草案里面针对 tabindex 的具体行为表现做了改动。所有主流浏览器都已经实现了这个修改后的设计。

下面表格阐述在主流浏览器里面 `tabindex` 的表现：

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th><code>tabindex</code> 属性</th>
      <th>
        可用鼠标或者 用 JavaScript 语句 <code>element.focus() 获取焦点</code>
      </th>
      <th>可使用 Tab 键导航获取焦点</th>
    </tr>
    <tr>
      <td>
        <p>not present</p>
        <p>（未设置）</p>
      </td>
      <td>
        遵循所在平台针对此元素的默认行为 (yes for form controls, links, etc.).
      </td>
      <td>遵循所在平台针对此元素的默认行为</td>
    </tr>
    <tr>
      <td>Negative (i.e. <code>tabindex="-1"</code>)</td>
      <td>Yes</td>
      <td>
        No; 必须通过
        <a href="/zh-CN/docs/Web/API/HTMLElement/focus"><code>focus()</code></a>
        来聚焦该元素。可以在方向键或者其他键的响应里面做。
      </td>
    </tr>
    <tr>
      <td>Zero (i.e. <code>tabindex="0"</code>)</td>
      <td>Yes</td>
      <td>tab 顺序对应于该元素在文档中的位置</td>
    </tr>
    <tr>
      <td>Positive (e.g. <code>tabindex="33"</code>)</td>
      <td>Yes</td>
      <td>
        <code>tabindex</code> 值决定了元素的 tab 顺序：通常这些带有正数值的
        tabindex 元素会排在 tabindex="0"和原生可以 tabable
        的元素前面；特别指出的是值越小越排在前面（举个例子，<code
          >tabindex="7"</code
        >
        会排在<code>tabindex="11"前面</code>)
      </td>
    </tr>
  </tbody>
</table>

#### 简单控件 Simple Controls

可以在 {{ HTMLElement("div") }} or {{ HTMLElement("span") }} 元素上设置 tabindex="0" 使得此简单控件变得可 tab 导航。这里有个 span-based checkbox 使用这个方法的例子。

_Example 1: A simple image-based checkbox widget using tabindex to allow keyboard access_

```html
<!-- 没有 tabindex 属性的话，这些 <span> 元素不会被键盘 focus 中 -->
<div>
  <span role="checkbox" aria-checked="true" tabindex="0">
    <img src="checked.gif" role="presentation" alt="" />
    Include decorative fruit basket
  </span>
</div>
<div>
  <span role="checkbox" aria-checked="true" tabindex="0">
    <img src="checked.gif" role="presentation" alt="" />
    Include singing telegram
  </span>
</div>
<div>
  <span role="checkbox" aria-checked="false" tabindex="0">
    <img src="unchecked.gif" role="presentation" alt="" />
    Require payment before delivery
  </span>
</div>
```

#### 组合控件 Grouping controls

针对像菜单、标签面板、树等这些组合控件，父元素应该在 tab 序列里面 (tabindex="0") 而每个后代选择/标签/单元/行应该从 tab 序列里面移除 (tabindex="-1")。用户应该可通过方向键来操控这些后代元素。(关于组件一般预期的键盘支持，可以查看 [DHTML Style Guide](http://access.aol.com/dhtml-style-guide-working-group/).)

下面这个组合菜单的例子展示了这种技术的使用。一旦键盘 focus 中容器 ul 元素，Javascript 开发人员需要在键盘事件里针对方向键的响应里管理里面元素的 focus 顺序。在组件里管理 focus 的办法，看下面这个 "在组合控件里管理 focus " 例子。

_范例 2: 一个使用 tabindex 控制键盘 access 的菜单控件_

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
    <ul id="justificationMenu" title="Justication" tabindex="-1">
      <li id="left" tabindex="-1">Left</li>
      <li id="center" tabindex="-1">Centered</li>
      <li id="right" tabindex="-1">Right</li>
      <li id="justify" tabindex="-1">Justify</li>
    </ul>
  </li>
</ul>
```

#### 失效控件

当一个自定义控件变成失效（disabled）状态时，通过设置 tabindex="-1" 把它从 tab 序列里面移除。注意在一个组合组件里面失效状态的子项（比如菜单控件里面某一个菜单项）应该在方向键的响应事件里面跳过它不让 focus 中。

### 在组合控件里面管理 focus

当用户从一个组件 tab 离开之后 focus 回来，焦点应该回到离开之时正被 focus 中的元素上，比如某个树节点或者网格单元。有两种办法完成这一点：

1. 流动 `tabindex`: 通过编程移动 focus
2. `aria-activedescendent`: 管理一个“虚拟”focus

#### 方法 1: 流动 tabindex

在被 focus 中元素上设置 `tabindex` 为 "0"，这样可以保证在用户在 tab 离开又返回后仍然选中组合组件中之前被选中的那项。注意在更改 tabindex 为“0”同时需要把之前选中过的那项设置`tabindex="-1"`。这个方法包含在键盘事件里面通过程序移动焦点以及更改 `tabindex` 到当前焦点中的那项上。需要做以下几步：

在每个元素上绑定 key down 事件，当捕捉到控制移动到另外元素的方向键时：

1. 通过编码把 focus 应用到新元素上，
2. 更改被 focus 中元素上的 tabindex 为“0”
3. 更改之前被 focus 中元素的 tabindex 为“-1”.

这里有个 WAI-ARIA tree view 的例子是使用这种方案的。

### 提示

#### 用 element.focus() 来设置焦点 focus

不要使用 `createEvent()`, `initEvent()` 和 `dispatchEvent()` 来发送焦点事件到元素上。DOM 的 focus 事件被认为仅是一种信息：当有事物被 focus 中的时候系统自动产生的，但是实际上没有用来设置焦点。用 `element.focus()` 来替代。

#### 用 onfocus 来追踪当前 focus

不要认为所有的焦点变化都来自于键盘和鼠标事件：像屏幕阅读器之类的辅助技术可以设置焦点到任意一个可 focus 中的元素上。用 onfocus 和 onblur 来追踪焦点。

`onfocus` 和 `onblur` 现在可以在每个元素上使用。没有标准的 DOM 接口来获取当前文档的 focus，所以如果你想追踪就需要保存追踪数据在 JavaScript 变量里。

#### 方法 2: aria-activedescendant

这个办法包含绑定一个单独的事件句柄到容器窗口组件上，运用 `aria-activedescendent` 属性来追踪一个 "虚拟" 焦点。（关于 ARIA 更多的信息，查看[可访问的 Web 应用程序和组件概述](/zh-CN/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)。）

`aria-activedescendant` 属性用来标识拥有虚拟焦点的后代元素的 ID。在窗口容器的事件句柄里面在键盘和鼠标事件响应更新 aria-activedescendant 值并且确保当前 The event handler on the container must respond to key and mouse events by updating the value of `aria-activedescendant` and ensuring that the current item is styled appropriately (for example, with a border or background color).

### Tips

#### scrollIntoView

Note that the use of this pattern requires the author to ensure that the current _focused_ widget is scrolled into view. You should be able to use the {{ domxref("element.scrollIntoView()") }} function, but we recommend confirming this works for you in your target browsers using the [quirksmode test](http://www.quirksmode.org/dom/tests/scrollintoview.html).

#### Issues

- [quirksmode reports problems in Opera, and Konqueror](http://www.quirksmode.org/dom/w3c_cssom.html)
- [Firefox 3.0.1 introduced bug](https://bugzilla.mozilla.org/show_bug.cgi?id=450405)

### 一般准则

#### 使用 onkeydown 来捕获的关键事件，而不是 onkeypress 事件

IE 不会触发非字母数字键的 `keypress` 事件。使用 `onkeydown` 替代。

#### 确保键盘和鼠标有相同的体验

为了确保不同输入设备的用户体验一致，键盘和鼠标事件处理程序在适当的情况下应该共享代码。例如，当用户使用方向键导航的时候，一些代码会更新相应元素的 `tabindex` 或风格，用鼠标点击也应该有同样的变化。

#### 确保键盘可以激活元素

要确保键盘可以激活元素，所有鼠标事件的绑定也同时要绑定到键盘事件上。例如，为了确保回车键能激活某个元素，如果你使用了 `onclick="DoSomething()"，` 你需要把 `doSomething()` 绑定到 key down 事件上：`onkeydown="return event.keyCode != 13 || doSomething();"`.

#### 不要使用 :focus 来设置焦点的样式（如果要兼容 IE7 及更早版本）

IE 7 及更早版本不支持 `:focus` 伪选择器，不要用它来设置焦点的样式。替代方法是在 `onfocus`事件处理程序中设置样式，例如，添加一个 CSS 样式到 `class` 属性中。

#### 始终用程序为 tabindex="-1" 的项和元素设置焦点样式

IE 不会自动为`tabindex="-1"`的元素绘制聚焦框。可以选择一种方法解决，比如通过 `this.style.backgroundColor="gray"` 改变选中项目的背景颜色，或通过 `this.style.border="1px dotted invert"` 添加虚线边框。如果使用虚线边框的，需要确保这些元素有隐含的一象素边框，这样，当聚焦的边框样式应用上去的时候，元素的大小才不会改变（边框会占用空间，而 IE 没有实现 CSS outline）。

#### 阻止浏览器的按键事件处理

如果你用自己的插件处理按键事件，可以通过事件处理程序的返回值来阻止浏览器的缺省处理（例如，响应方向键的滚动）。如果你的事件处理程序返回 `false`，事件就不会冒泡到处理程序外面。

例如：

```html
<span tabindex="-1" onkeydown="return handleKeyDown();"></span>
```

如果 `handleKeyDown()` 返回 `false`，将会结束事件处理，阻止浏览器继续处理按键行为。

#### 不要认为按键连发（repeat）有一致性

非常不幸，`onkeydown` 连发或不连发取决于代码执行的浏览器和操作系统。
