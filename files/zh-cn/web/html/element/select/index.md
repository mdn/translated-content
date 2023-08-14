---
title: <select>
slug: Web/HTML/Element/select
---

{{HTMLSidebar}}

**HTML `<select>` 元素**表示一个提供选项菜单的控件：

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

上述例子展示了 `<select>` 的典型用法。元素中设置了 `id` 属性以将其与 {{htmlelement("label")}} 元素关联在一起，提高可及性（accessibility）。`name` 属性表示提交到服务器的相关数据点的名字。每个菜单选项由 `<select>` 中的一个 {{htmlelement("option")}} 元素定义。

每个 `<option>` 元素都应该有一个 [`value`](/zh-CN/docs/Web/HTML/Element/option#value) 属性，其中包含被选中时需要提交到服务器的数据值。如果不含 `value` 属性，则 `value` 值默认为元素中的文本。你可以在 `<option>` 元素中设置一个 [`selected`](/zh-CN/docs/Web/HTML/Global_attributes#selected) 属性以将其设置为页面加载完成时默认选中的元素。

`<select>` 元素有一些用于控制元素的特有属性，例如 `multiple` 规定了能不能同时选中多个选项，`size` 规定了一次性显示多少选项。这个元素也支持大多数常见的表单输入元素属性，如 `required`, `disabled`, `autofocus` 等。

你还可以将 `<option>` 元素放在 {{htmlelement("optgroup")}} 元素中以为下拉菜单创建不同的选项分组。

在 [原生表单部件](/zh-CN/docs/Learn/HTML/Forms/The_native_form_widgets) 中查看更多示例。

## 属性

包括下列[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `autocomplete`
  - : 一个 {{domxref("DOMString")}}，为 {{Glossary("user agent", "用户代理")}} 提供自动填充功能的线索。关于该值的完整列表以及如何使用自动填充的详细信息，请参阅 [HTML 自动完成属性](/zh-CN/docs/Web/HTML/Attributes/自动完成属性)。
- `autofocus`
  - : 这个布尔值属性能够让一个对象在页面加载的时候获得焦点。一个文档中只有一个对象可以有这个属性。
- `disabled`
  - : 这个布尔值的属性表示用户不能与该表单控件交互。如果没有声明这个属性，则从它的父元素继承，例如 `fieldset`；如果没有父元素设置了 `disabled` 属性，那么默认该表单对象可用。
- `form`
  - : `<select>` 所关联的{{HTMLElement("form")}} (它的"表单拥有者")。其值必须是在同一文档中的 `<form>` 元素的[`id`](/zh-CN/docs/Web/HTML/Global_attributes#id)（如果没有设置这个属性， `<select>` 元素则与其任何存在的祖先 `<form>` 元素关联）。
    这个属性让你将 `<select>` 元素与文档中任意位置的 `<form>` 元素相关联，而不仅仅是包含 `<select>` 元素的 `<form>` 元素。这个属性还可以覆盖元素的祖先 `<form>` 元素。
- `multiple`
  - : 这个布尔值属性表示列表中的选项是否支持多选。没有声明该值时，一次只能选中一个选项。声明这个属性后，大多数浏览器都会显示一个可滚动的列表框，而非一个下拉菜单。
- `name`
  - : 该属性规定了控件的名称。
- `required`
  - : 一个布尔值属性，表示必须选中一个有非空字符串值的选项。
- `size`
  - : 如果控件显示为滚动列表框（如声明了 `multiple`），则此属性表示为控件中同时可见的行数。浏览器不需要将选择元素呈现为滚动列表框。默认值为 0。

> **备注：** 根据 HTML5 规范，默认值应该为 1；但是，在实践中，这样会影响到一些网站，同时其他浏览器也没有那么处理，所以 Mozilla 在 Firefox 中选择继续使用默认值 0。

## 使用笔记

### 选择多个选项

在桌面电脑中，有几种方式在设置了 `multiple` 属性的 `<select>` 元素中选中多个选项：

鼠标用户可以按住 <kbd>Ctrl</kbd>, <kbd>Command</kbd>, 或 <kbd>Shift</kbd> 键（取决于你的操作系统）然后点击不同选项以选择或取消选择。

> **警告：** 以下所述的通过键盘选择多个不连续选项的方法目前只在 Firefox 有效（译者注：Chrome 81 也已支持）。**另请注意**：在 macOS 中， <kbd>Ctrl</kbd> + <kbd>Up</kbd> 和 <kbd>Ctrl</kbd> + <kbd>Down</kbd> 组合键会与系统默认用于任务管理和应用窗口的组合键冲突。所以如果要使用这些组合键，你需要关掉系统默认的组合键。

键盘用户可以这样选中多个连续的选项：

- 聚焦于 `<select>` 元素（如使用

  <kbd>Tab</kbd>

  ）

- 使用

  <kbd>Up</kbd>

  和

  <kbd>Down</kbd>

  方向键以从下向上或从上向下选择选项。

- 按住

  <kbd>Shift</kbd>

  键然后使用

  <kbd>Up</kbd>

  和

  <kbd>Down</kbd>

  方向键来增加或减少选中的方向。

键盘用户还可以这样选中多个不连续的选项：

- 聚焦于 `<select>` 元素（例如使用

  <kbd>Tab</kbd>

  ）。

- 按住

  <kbd>Ctrl</kbd>

  键，然后使用

  <kbd>Up</kbd>

  和

  <kbd>Down</kbd>

  方向键来改变聚焦的选项，聚焦的选项使用虚线轮廓高亮，和使用键盘聚焦链接的方式一样。

- 按下

  <kbd>Space</kbd>

  以选择或取消选择聚焦的选项。

## 应用 CSS 样式

众所周知，`<select>`元素很难用 CSS 进行高效的设计。你可以像其他元素一样改变某些方面——例如，调整 [盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)、[显示的字体](/zh-CN/docs/Web/CSS/CSS_fonts) 等，你还可以使用 {{cssxref("appearance")}} 属性来去除默认的系统外观。

但是，这些属性的表现在不同浏览器之间并不一致，而且有些事情难以很好地处理，例如在一列中顺序排列不同类型的表单元素。 `<select>`元素的内部结构复杂，难以控制。如果你想完全控制，你应该考虑使用一个在修改表单部件样式方面拥有强大能力的库，或者尝试使用非语义元素和 JavaScript 来制作下拉菜单，再使用 [WAI-ARIA](/zh-CN/docs/learn/Accessibility/WAI-ARIA_basics) 来提供语义。

有关样式`<select>`的更多有用信息，请参阅：

- [Styling HTML forms](/zh-CN/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Advanced styling for HTML forms](/zh-CN/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)

## 示例

### 基本选择

```html
<!-- 第二项会默认选中 -->
<select name="select">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
```

#### 结果

{{EmbedLiveSample("基本选择", "", "100")}}

### 使用多选的进阶选择

下面的例子更加复杂，展示了可用在 `<select>` 元素上的更多功能：

```html
<label
  >Please choose one or more pets:
  <select name="pets" multiple size="4">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
```

{{EmbedLiveSample("使用多选的进阶选择", "", "100")}}

你会看见：

- 可选中多个选项，因为我们使用了 `multiple` 属性。
- `size` 属性导致一次只有 4 行能显示；你可以滚动查看所有选项。
- 我们在其中使用了 {{htmlelement("optgroup")}} 元素来将选项分成不同组别。这单纯是视觉上的分组，一般来说，分组由加粗的组名和缩进的选项组成。
- "Hamster"选项使用了`disabled` 属性，因此不能被选中。

## 技术概览

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Interactive_content">interactive content</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Form_listed">listed</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Form_labelable">labelable</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Form_resettable">resettable</a>, and <a href="/zh-CN/docs/Web/HTML/Content_categories#Form_submittable">submittable</a> <a href="/zh-CN/docs/Web/HTML/Content_categories#Form-associated_">form-associated </a>element</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>Zero or more {{HTMLElement("option")}} or {{HTMLElement("optgroup")}} elements.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Implicit ARIA role</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> with <strong>no</strong> <code>multiple</code> attribute and <strong>no</strong> <code>size</code> attribute greater than 1, otherwise <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> with <strong>no</strong> <code>multiple</code> attribute and <strong>no</strong> <code>size</code> attribute greater than 1, otherwise no <code>role</code> permitted</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLSelectElement")}}</td>
  </tr>
 </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他表单对象：{{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("option")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} 和 {{HTMLElement("meter")}}。
- 由 `<select>` 触发的事件： {{domxref("HTMLElement/change_event", "change")}}, {{domxref("HTMLElement/input_event", "input")}}
