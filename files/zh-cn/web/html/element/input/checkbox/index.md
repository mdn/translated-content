---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
---

{{HTMLSidebar}}

**`checkbox`** 类型的 {{htmlelement("input")}} 元素在默认情况下被呈现为激活时被选中（打勾）的方框，就像你在官方的政府文件表格中看到的那样。具体外观取决于浏览器运行的操作系统配置。一般来说，这是一个正方形，但它可能有圆角。复选框允许你在表格中选择单一的数值进行提交（或不提交）。

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **备注：** [单选按钮](/zh-CN/docs/Web/HTML/Element/Input/radio)与复选框类似，但有一个重要的区别——单选按钮被分组为一个集合，一次只能选择一个单选按钮；而复选框允许你选中/取消选中单个值。如果存在多个控件，单选按钮允许从它们中选择一个，而复选框则允许选择多个值。

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#值">值</a></strong></td>
      <td>
        一个代表该复选框值的字符串。
      </td>
    </tr>
    <tr>
      <td><strong>事件</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} 和 {{domxref("HTMLElement/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>支持的常用属性</strong></td>
      <td><code>checked</code></td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code><a href="#attr-checked">checked</a></code>、<code><a href="#attr-indeterminate">indeterminate</a></code> 和
        <code><a href="#attr-value">value</a></code>
      </td>
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

## 值

一个字符串，代表复选框的值。在客户端不显示，但在服务器上对应了给予该复选框的 `name` 的 `value` 值。以下面的例子为例：

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">要订阅报纸吗？</label>
  </div>
  <div>
    <button type="submit">订阅</button>
  </div>
</form>
```

{{EmbedLiveSample('值', 600, 60)}}

在这个例子中，我们的 `subscribe` 下具有的值为 `newsletter`。当表单被提交时，数据的键值对将是 `subscribe=newsletter`。

如果复选框的 `value` 属性被省略了，则它默认具有值 `on`，在这种情况下提交的数据将是 `subscribe=on`。

> **备注：** 如果一个复选框在其表单被提交时没有被选中，就不会有任何代表其未被选中的状态（例如 `value=unchecked`）的值被提交给服务器——该值根本就没有被提交给服务器！如果你想在复选框未被选中时提交一个默认值，你可以在表单中加入一个具有相同的 `name` 和 `value` 的 {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} 字段，它可以由 JavaScript 生成。

## 其他属性

除了 {{HTMLElement("input")}} 元素共有的属性外，`checkbox` 还支持以下属性：

- `checked`

  - : 一个布尔属性，表示该复选框是否被默认选中（当页面加载时）。它不表示这个复选框当前是否被选中：如果复选框的状态被改变，这个内容属性不反映这个变化。此时，只有 {{domxref("HTMLInputElement")}} 的 IDL 属性 `checked` 会更新。
    > **备注：** 与其他输入控件不同，复选框的值只有在复选框当前状态为 `checked` 时才会被包含在提交的数据中。如果它被选中，那么复选框的 `value` 属性的值就会被报告为输入的值。不像其他浏览器那样，Firefox 默认情况下在不同页面之间会[保持 `<input>` 动态选中的状态](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。请使用 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 属性来控制这个特性。

- `value`

  - : 所有的 {{HTMLElement("input")}} 元素都有 `value` 属性；但是，它对 `checkbox` 类型的输入有特殊作用：当表单被提交时，只有当前被选中的复选框会被提交给服务器，报告的值就是 `value` 属性的值。如果没有指定 `value`，默认为字符串 `on`。这在上面的[值](#值)部分有阐述。

## 使用复选框输入

我们已经介绍了复选框的最基本用途。现在让我们看看需要掌握的其他与复选框有关的常见功能和技术。

### 处理多个复选框

我们在上面看到的例子只包含一个复选框；在现实世界中，你可能会遇到多个复选框。如果它们完全不相关，那么你可以如上所示，分别处理它们。但是，如果它们都是相关的，事情就没那么容易了。

例如，在下面的演示中，我们包括多个复选框，让用户选择他们的兴趣（见[示例](#示例)部分的完整版本）。

```html
<fieldset>
  <legend>选择你的兴趣</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">编码</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">音乐</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('处理多个复选框', 600, 100)}}

在这个例子中，你会看到我们给每个复选框赋予了相同的 `name`。如果两个复选框都被选中，然后提交表单，你会得到这样一串键/值对：`interest=coding&interest=music`。当这个字符串到达服务器时，你需要把它解析成一个关联数组以外的东西，`interest` 的所有值都需要被捕获。有关 Python 使用的一种技术，参见[用一个服务器端变量处理多个复选框](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable)。

### 默认选中复选框

为了让复选框默认为选中状态，需要给它赋予 `checked` 属性。见如下例子：

```html
<fieldset>
  <legend>选择你的兴趣</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">编码</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">音乐</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('默认选中复选框', 600, 100)}}

### 为复选框提供稍大的点击区域

在上面的例子中，你可能已经注意到，你可以通过点击复选框相关的 {{htmlelement("label")}} 元素以及复选框本身来切换复选框的状态。这是 HTML 表单标签的一个非常有用的功能，使你更容易点击你想要的选项，特别是在智能手机等小屏幕设备上。

除了无障碍之外，这也是在表单上正确设置 `<label>` 元素的另外一个理由。

### 中间状态复选框

除了选中和未选中的状态外，复选框还有第三种状态：**不确定**。这是一种无法说清该选项是被打开还是关闭的状态。这是通过 JavaScript 设置的 {{domxref("HTMLInputElement")}} 对象的 `indeterminate` 属性（它不能用 HTML 属性设置）。

```js
inputInstance.indeterminate = true;
```

在大多数浏览器中，处于不确定状态的复选框在框中有一条横线（看起来有点像连字符或减号），而不是一个对勾。

这个属性的使用情况不多。最常见的是当一个复选框“拥有”一些子选项（也是复选框）的时候。如果所有的子选项都被选中，拥有的复选框也被选中，如果它们都没有被选中，拥有的复选框就没有被选中。如果任何一个或多个子选项的状态与其他选项不同，拥有的复选框就处于不确定的状态。

这可以在下面的例子中看到（感谢 [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) 提供的灵感）。在这个例子中，我们记录了为一个配方收集的原料。当你勾选或不勾选一个原料的复选框时，一个 JavaScript 函数会检查勾选的原料总数：

- 如果没有一项被选中，配方名称的复选框是未选中状态。
- 如果选中了一项或两项，配方名称的复选框是 `indeterminate`（中间）状态。
- 如果选中了全部三项，配方名称的复选框是 `checked`（已选中）状态。

在这种情况下，`indeterminate` 状态用来说明已经开始收集原料，但配方还没有完成。

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> **备注：** 如果你提交一个带有不确定复选框的表单，发生的情况与复选框不被选中的情况相同——没有代表复选框的数据提交给服务器。

## 验证方式

复选框支持提供给所有 {{HTMLElement("input")}} 元素的[验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)功能。然而，大部分的 {{domxref("ValidityState")}} 值将永远为 `false`。如果复选框具有 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性，但没有被选中，那么 {{domxref("ValidityState.valueMissing")}} 将为 `true`。

## 示例

下面的例子是我们在上面看到的“多个复选框”例子的扩展版本——它有更多的标准选项，还有一个“其他”复选框，当被选中时，会出现一个文本字段来输入“其他”选项的值。这是用一些简单的 JavaScript 代码实现的。这个例子还包括一些 CSS 来改善样式。

### HTML

```html
<form>
  <fieldset>
    <legend>选择你的兴趣</legend>
    <div>
      <input type="checkbox" id="coding" name="interest" value="coding" />
      <label for="coding">编码</label>
    </div>
    <div>
      <input type="checkbox" id="music" name="interest" value="music" />
      <label for="music">音乐</label>
    </div>
    <div>
      <input type="checkbox" id="art" name="interest" value="art" />
      <label for="art">艺术</label>
    </div>
    <div>
      <input type="checkbox" id="sports" name="interest" value="sports" />
      <label for="sports">体育</label>
    </div>
    <div>
      <input type="checkbox" id="cooking" name="interest" value="cooking" />
      <label for="cooking">烹饪</label>
    </div>
    <div>
      <input type="checkbox" id="other" name="interest" value="other" />
      <label for="other">其他</label>
      <input type="text" id="otherValue" name="other" />
    </div>
    <div>
      <button type="submit">提交表单</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

{{EmbedLiveSample('示例', '100%', 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通用 {{HTMLElement("input")}} 元素和用于操作该元素的接口 {{domxref("HTMLInputElement")}}
- 基于当前状态的 {{cssxref(":checked")}} 和 {{cssxref(":indeterminate")}} CSS 选择器，可供赋予样式
- [表单控件 CSS 兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
