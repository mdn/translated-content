---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
---

{{HTMLSidebar}}

**`radio`** 类型的 {{htmlelement("input")}} 元素通常用于一个**单选组**中，其中包含一组描述一系列相关选项的单选按钮。

在给定单选组中，同时只可以选择一个选项。单选按钮通常渲染为小圆圈，当选中该选项时，圆圈被填充或高亮。

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

它们被称为单选按钮，因为它们的外观和操作方式与老式无线电上的按钮类似，如下图所示。

![旧时收音机上的按钮。](old-radio.jpg)

> **备注：** [复选框](/zh-CN/docs/Web/HTML/Element/Input/checkbox)类似于单选按钮，但是有个重要的区别——单选按钮为选择集合中的其中一项而设计，然而复选框允许决定单个值的选定情况。当多个控件存在时，单选按钮允许选择其中的一个，而多选按钮允许选择其中多个。

## 值

`value` 属性是包含该单选按钮值的字符串。这个值不会在{{Glossary("user agent","用户代理")}}显示，而是用于辨别单选组中所选的单选按钮。

### 定义一个单选按钮组

一个单选按钮组由具有相同 [`name`](/zh-CN/docs/Web/HTML/Element/input#name) 属性的单选按钮组成。一旦单选按钮组被建立，选择那按钮组的任何单选按钮将会自动取消同组当前选择的任何按钮。

你可以在一个页面上创建多个单选按钮组，只要每一组拥有唯一的 `name` 属性即可。

举个例子，如果你需要在表单中询问用户的首选联系方式，你可以创建三个 `name` 属性都为 `contact` 的单选按钮，只不过一个按钮的 `value` 属性为 `email` ，另一个的 `value` 属性为 `phone`，还有一个的 `value` 属性为 `mail`。用户不会看见 `value` 属性或 `name` 属性（除非你故意用代码显示它们）。

最终的 HTML 可能看起来像这样：

```html
<form>
  <fieldset>
    <legend>请选择首选的联系方式：</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">电子邮件</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">电话</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">邮件</label>
    </div>
    <div>
      <button type="submit">提交</button>
    </div>
  </fieldset>
</form>
```

你可以在这里看到三个单选按钮，每个按钮的 `name` 属性都设置为 `contact`，并且都含有在单选按钮组中唯一的 `value` 属性。每一个单选按钮也有一个给 {{HTMLElement("label")}} 元素的 [`for`](/zh-CN/docs/Web/HTML/Element/label#for) 属性使用的 {{domxref("Element.id", "id")}}，将标签（label）和单选按钮关联。

你可以在这里查看这个例子：

{{EmbedLiveSample('定义一个单选按钮组', 600, 130)}}

### 单选组的数据表示

当上面的表单在提交时选择了一个单选框，表单的数据就包括了 `contact=value` 项。例如，若用户点击“电话”单选按钮，然后提交表单，提交的数据中将包括 `contact=phone` 项。

如果你在 HTML 中省略了 `value` 属性，那么提交的表单数据就会将该值分配到 `on` 上。在这种情况下，如果用户选中了“电话”选项并提交了表单，提交的表单数据将是 `contact=on`，这并没有什么用。所以别忘了设置你的 `value` 属性！

> **备注：** 如果在提交表单时没有选择任何单选按钮，则提交的表单数据中根本不包括单选组，因为没有要报告的值。

在没有选择任何一组单选按钮的情况下提交表单的情况并不多见，所以通常明智的做法是让一个单选按钮默认为“选中”状态。参见下面的[默认选择单选按钮](#默认选择单选按钮)。

让我们给我们的例子添加一点代码，这样我们就可以检查这个表单所产生的数据。对 HTML 进行修改，增加一个 {{HTMLElement("pre")}} 块，将表单数据输出到其中：

```html
<form>
  <fieldset>
    <legend>请选择首选的联系方式：</legend>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label for="contactChoice1">电子邮件</label>
      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">电话</label>
      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">邮件</label>
    </div>
    <div>
      <button type="submit">提交</button>
    </div>
  </fieldset>
</form>
<pre id="log"></pre>
```

然后我们添加一些 [JavaScript](/zh-CN/docs/Web/JavaScript) 代码，设置监听 {{domxref("HTMLFormElement/submit_event", "submit")}} 事件的监听器，当用户点击“提交”按钮时会触发该事件：

```js
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
```

试试这个例子，会发现 `contact` 组的输出结果永远不会多于一个。

{{EmbedLiveSample("单选组的数据表示", 600, 130)}}

## 额外属性

除了所有 {{HTMLElement("input")}} 元素共通的属性外，`radio` 输入还支持以下属性：

- `checked`

  - : 一个布尔值属性，如果出现，代表这个单选按钮是组中被选中的那个。

    不像其他浏览器那样，Firefox 默认在不同页面之间[保持了 `<input>` 动态选择的状态](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。使用 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 属性来控制这个特性。

- `value`

  - : `value` 属性是所有 {{HTMLElement("input")}} 元素共有的属性之一；然而，对于 `radio` 类型的输入，有特殊用途：当表单提交时，只有当前选定的单选按钮才会提交到服务器，并且报告的值为 `value` 属性的值。如果没有指定 `value`，默认为字符串 `on`。这个行为已经在[值](#值)这一节中描述。

- `required`
  - : `required` 属性是所有 {{HTMLElement("input")}} 元素共有的属性之一。如果含有相同 name 的单选按钮组中任意一个按钮包含 `required` 属性，那么该组的单选按钮必须被选定，即使它并不需要应用该属性。

## 使用单选输入

我们已经说明了单选按钮的基本使用，现在来看看其他你可能需要知道的与单选按钮相关的特性和技术。

### 默认选择单选按钮

为了让单选按钮默认被选择，需要包含 `checked` 属性，就像这个修改过的示例一样：

```html
<form>
  <fieldset>
    <legend>请选择首选的联系方式：</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">电子邮件</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">电话</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">邮件</label>
    </div>
    <div>
      <button type="submit">提交</button>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample('默认选择单选按钮', 600, 130)}}

在这个示例中，第一个单选按钮默认是选择状态。

> **备注：** 如果你在多于一个单选按钮上指定了 `checked` 属性，后面的实例将覆盖前面的实例；也就是说，最后一个包含 `checked` 属性的单选按钮是当前选择的按钮。这是因为一个单选按钮组只能同时选取一个单选按钮，用户代理会在选择新的单选按钮时自动取消选择其他单选按钮。

### 为你的单选按钮提供一个较大的选择区域

在前述示例中，你可能会注意到，可以通过点击其关联的 {{htmlelement("label")}} 元素来选取一个单选按钮，与选取单选按钮本身表现一致。这是 HTML 表单标签的一个有用的特性，使用户更容易点击他们想要的选项，特别是在智能手机等小屏幕设备上。

除了无障碍之外，这也是在表单上正确设置 `<label>` 元素的另一个好理由。

## 验证

单选按钮不参与约束验证；它们没有真正的值可供约束。

## 为单选按钮添加样式

下面的示例显示了我们在文章中所看到的例子的一个稍微彻底的版本，有一些额外的样式，并且通过使用专门的元素建立了更好的语义。HTML 代码看起来像这样：

```html
<form>
  <fieldset>
    <legend>请选择首选的联系方式：</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">电子邮件</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">电话</label>

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label for="contactChoice3">邮件</label>
    </div>
    <div>
      <button type="submit">提交</button>
    </div>
  </fieldset>
</form>
```

这个示例中涉及到的 CSS 样式就比较重要：

```css
html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

这里最值得注意的是 {{cssxref("appearance")}} 属性的使用（为了支持某些浏览器，需要加前缀）。默认情况下，单选按钮（和[复选框](/zh-CN/docs/Web/HTML/Element/Input/checkbox)）的样式使用了操作系统对这些控件的本地样式。通过指定 `appearance: none`，你可以完全删除本地样式，并为它们创建自己的样式。这里我们使用了 {{cssxref("border")}} 和 {{cssxref("border-radius")}}，以及 {{cssxref("transition")}} 来创建一个漂亮的带动画单选。请注意 {{cssxref(":checked")}} 伪类是如何用来指定单选按钮被选中时的外观样式的。

> **备注：** 如果你想使用 {{cssxref("appearance")}} 属性，你需要小心测试。即使大多数流行浏览器都支持它，它的实现变化很广。在老式浏览器中，即使是关键字 `none`，不同浏览器之间差异也很大，有些浏览器根本不支持。在新的浏览器中，差别就会小得多。

{{EmbedLiveSample('为单选按钮添加样式', 600, 120)}}

注意，当点击单选按钮时，有一个流畅的渐入、渐出效果，此外，图例和提交按钮的风格和颜色都是自定义的，具有强烈的对比。这可能不是你在真正的 web 应用中想要的外观，但它展示了实现的可能性。

## 技术总结

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#值">值</a></strong></td>
      <td>
        代表单选按钮值的字符串。
      </td>
    </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("HTMLElement/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>支持的通用属性</strong></td>
      <td>
        <code><a href="#attr-checked">checked</a></code
        >、<code><a href="#attr-value">value</a></code> 和
        <code
          ><a href="/zh-CN/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>checked</code> 和 <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM 接口</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>方法</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("input")}} 和实现它的 {{domxref("HTMLInputElement")}} 接口。
- {{domxref("RadioNodeList")}}：描述一系列单选按钮的接口
- [CSS 属性兼容性](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
