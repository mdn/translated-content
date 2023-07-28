---
title: <menuitem>
slug: Web/HTML/Element/menuitem
---

{{HTMLSidebar}}{{Deprecated_Header("HTML5.2")}}

用户可以通过**HTML `<menuitem>` 元素**生成一个弹出式菜单。这包括上下文菜单，以及按钮可能附带的菜单。

这个标签可以被显式定义，带有文本标签和可选图标来描述其外观，或者作为一个*间接命令*，其行为由一个单独的元素定义。命令还可以选择包含复选框或分组共享单选按钮。（`<input type="checkbox">` 和 `<input type="radio">`）

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容类别</a></th>
   <td>None.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>None，这是一个{{Glossary("empty element", "空元素")}}。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>必须有开始标签和结束标签。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>The {{HTMLElement("menu")}} element, where that element is in the <em>popup menu</em> state. (If specified, the <code>type</code> attribute of the {{HTMLElement("menu")}} element must be <code>popup</code>; if missing, the parent element of the {{HTMLElement("menu")}} must itself be a {{HTMLElement("menu")}} in the <em>popup menu</em> state.)</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{DOMxRef("HTMLMenuItemElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该标签支持[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)；特别地， `title` 常常用来描述命令，或者提供有用的注释。

- `checked`
  - : 布尔值，指示是否选择了命令。只能作为属性使用在 `checkbox` 或 `radio` 中。
- `command`
  - : 指定一个单独元素的 ID，指示要间接调用的命令。在包含属性的菜单项中也不能使用。`checked`、`disabled`、`icon`、`label`、`radiogroup` 或 `type`。
- `default`
  - : 布尔值，表示使用与菜单主题元素相同的命令。（如 `button` 或 `input`）。
- `disabled`
  - : 布尔值，表示命令在当前状态下不可用。请注意，禁用与隐藏不同；禁用的属性适用于任何环境变化可能导致命令相关的上下文中。
- `icon`
  - : 图片 URL，用于提供图片来表示命令。
- `label`
  - : 展示给用户一个命令的名字，当 `command` 属性不存在时是必须的。
- `radiogroup`
  - : 此属性指定要切换为单选按钮时，选定的一组命令的名称。只能作为 radio 的属性使用。
- `type`

  - : 这个属性指定命令的类型，可以为以下三个命令之一。

    - `command`：有关联动作的常规命令。这是缺少时的值默认值。
    - `checkbox`：代表一个命令可以在两个不同状态之间的切换。
    - `radio`：代表一组单选按钮，可切换为命令中的一个选择。

## 示例

### HTML

```html
<!-- A <div> element with a context menu -->
<div contextmenu="popup-menu">Right-click to see the adjusted context menu</div>

<menu type="context" id="popup-menu">
  <menuitem type="checkbox" checked>Checkbox</menuitem>
  <hr />
  <menuitem
    type="command"
    label="This command does nothing"
    icon="https://developer.mozilla.org/static/img/favicon144.png">
    Commands don't render their contents.
  </menuitem>
  <menuitem
    type="command"
    label="This command has javascript"
    onclick="alert('command clicked')">
    Commands don't render their contents.
  </menuitem>
  <hr />
  <menuitem type="radio" radiogroup="group1">Radio Button 1</menuitem>
  <menuitem type="radio" radiogroup="group1">Radio Button 2</menuitem>
</menu>
```

### CSS

```css
div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
```

### 结果

{{EmbedLiveSample("示例", '100%', 80)}}

## 规范

不属于任何现行的规范。

## 浏览器兼容性

不再被任何浏览器支持。唯一支持过该元素的浏览器 Firefox 在版本 85 时也移除了支持。

## 参见

- [HTML context menus in Firefox (Screencast and Code)](https://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/)
