---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement`** 接口表示 DOM 中的 {{HTMLElement("form")}} 元素。它允许访问和（在某些情况下）修改表单的各个方面，以及访问其组成元素。

{{InheritanceDiagram}}

## 实例属性

_此接口还从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLFormElement.elements")}} {{ReadOnlyInline}}
  - : 包含所有属于此表单元素的表单控件的 {{domxref("HTMLFormControlsCollection")}}。
- {{domxref("HTMLFormElement.length")}} {{ReadOnlyInline}}
  - : 反映表单中控件的数量的 `long` 值。
- {{domxref("HTMLFormElement.name")}}
  - : 反映表单的 [`name`](/zh-CN/docs/Web/HTML/Reference/Elements/form#name) HTML 属性值的字符串，包含表单的名称。
- {{domxref("HTMLFormElement.method")}}
  - : 反映表单的 [`method`](/zh-CN/docs/Web/HTML/Reference/Elements/form#method) HTML 属性值的字符串，表示用于提交表单的 HTTP 方法。只能设置特定的值。
- {{domxref("HTMLFormElement.target")}}
  - : 反映表单的 [`target`](/zh-CN/docs/Web/HTML/Reference/Elements/form#target) HTML 属性值的字符串，表示用于显示提交表单的结果的位置。
- {{domxref("HTMLFormElement.action")}}
  - : 反映表单的 [`action`](/zh-CN/docs/Web/HTML/Reference/Elements/form#action) HTML 属性值的字符串，包含处理表单提交的信息的程序的 URI。
- {{domxref("HTMLFormElement.encoding")}} 或 {{domxref("HTMLFormElement.enctype")}}
  - : 反映表单的 [`enctype`](/zh-CN/docs/Web/HTML/Reference/Elements/form#enctype) HTML 属性值的字符串，表示用于将表单传输到服务器的内容类型。只能设置特定的值。这两个属性是同义词。
- {{domxref("HTMLFormElement.acceptCharset")}}
  - : 反映表单的 [`accept-charset`](/zh-CN/docs/Web/HTML/Reference/Elements/form#accept-charset) HTML 属性值的字符串。
- {{domxref("HTMLFormElement.autocomplete")}}
  - : 反映表单的 [`autocomplete`](/zh-CN/docs/Web/HTML/Reference/Elements/form#autocomplete) HTML 属性值的字符串，表示此表单中的控件是否可以由浏览器自动填充其值。
- {{domxref("HTMLFormElement.noValidate")}}
  - : 反映表单的 [`novalidate`](/zh-CN/docs/Web/HTML/Reference/Elements/form#novalidate) HTML 属性值的布尔值，表示是否不应对表单进行验证。

具名输入会被作为属性添加到其所属表单的实例中，且如果它们共享相同的名称（例如，具有名为 `action` 的输入的表单将使其 `action` 属性返回该输入，而不是表单的 [`action`](/zh-CN/docs/Web/HTML/Reference/Elements/form#action) HTML 属性）。

## 实例方法

_此接口还从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}}
  - : 如果元素的子控件受到[约束验证](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)并满足这些约束，则返回 `true`；如果某些控件不满足其约束，则返回 `false`。在不满足其约束的任何控件上触发名为 {{domxref("HTMLInputElement/invalid_event", "invalid")}} 的事件；如果未取消事件，则这些控件被视为无效。由程序员决定如何响应 `false`。
- {{domxref("HTMLFormElement.reportValidity", "reportValidity()")}}
  - : 如果元素的子控件满足其[验证约束](/zh-CN/docs/Web/HTML/Guides/Constraint_validation)，则返回 `true`。当返回 `false` 时，将为每个无效的子控件触发可取消的 {{domxref("HTMLInputElement/invalid_event", "invalid")}} 事件，并将验证问题报告给用户。
- {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}
  - : 请求使用指定的提交按钮及其相应的配置来提交表单。
- {{domxref("HTMLFormElement.reset", "reset()")}}
  - : 将表单重置为其初始状态。
- {{domxref("HTMLFormElement.submit", "submit()")}}
  - : 将表单提交至服务器。

## 事件

使用 `addEventListener()` 或将事件监听器赋值给此接口的 `oneventname` 属性来监听这些事件。

- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
  - : 在构建表示表单数据的条目列表之后触发 `formdata` 事件。
- {{domxref("HTMLFormElement/reset_event", "reset")}}
  - : 在表单重置时触发 `reset` 事件。
- {{domxref("HTMLFormElement/submit_event", "submit")}}
  - : 在表单提交时触发 `submit` 事件。

## 使用说明

### 获得表单元素对象

要获取 `HTMLFormElement` 对象，你可以使用 [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)和 {{domxref("Document.querySelector", "querySelector()")}}，或者使用文档的 {{domxref("Document.forms", "forms")}} 属性获取文档中所有表单的列表。

{{domxref("Document.forms")}} 返回 `HTMLFormElement` 对象数组，其中列出了页面上的每个表单。然后，你可以使用以下任何语法来获取单个表单：

- `document.forms[index]`
  - : 返回数组中指定索引（`index`）的表单。
- `document.forms[id]`
  - : 返回 ID 为 `id` 的表单。
- `document.forms[name]`
  - : 返回 `name` 属性值为 `name` 的表单。

### 访问表单的元素

你可以通过检查表单的 {{domxref("HTMLFormElement.elements", "elements")}} 属性来访问表单中用于包含数据的元素列表。这将返回一个 {{domxref("HTMLFormControlsCollection")}}，其中列出了表单的所有用户数据输入元素，包括 `<form>` 的后代元素，以及使用其 `form` 属性而成为表单成员的元素。

你也可以通过将表单元素 `name` 属性作为 `form` 的键来获取该表单的元素，但使用 `elements` 是一个更好的方法——它*只*包含表单的元素，并且不能与 `form` 的其他属性混合使用。

### 元素命名问题

有些名称会干扰 JavaScript 访问表单的属性和元素。

例如：

- `<input name="id">` 会优先于 `<form id="…">`。这意味着 `form.id` 不会引用表单的 id，而是引用名称为 `"id"` 的元素。这也适用于其他表单属性，例如 `<input name="action">` 或 `<input name="post">`。
- `<input name="elements">` 会使表单的 `elements` 集合无法访问。引用 `form.elements` 现在将引用单个元素。

要避免这些元素名称的问题，你应该：

- *始终*使用 `elements` 集合来避免元素名称和表单属性之间的歧义。
- *切勿*将 `"elements"` 作为元素名称。

如果你不使用 JavaScript，这不会造成问题。

### 被视为表单控件的元素

`HTMLFormElement.elements` 和 `HTMLFormElement.length` 包含以下元素：

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}（但由于历史原因，[`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#type) 为 `"image"` 的元素会被忽略）
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

`elements` 返回的列表不包含其他元素，这使得它成为处理表单时获取最重要元素的绝佳方法。

## 示例

创建一个新的表单元素，修改其属性，然后提交：

```js
const f = document.createElement("form"); // 创建表单
document.body.appendChild(f); // 将其添加到文档主体
f.action = "/cgi-bin/some.cgi"; // 添加 action 和 method 属性
f.method = "POST";
f.submit(); // 调用表单的 submit() 方法
```

从 `<form>` 元素中提取信息并设置一些属性：

```html
<form name="formA" action="/cgi-bin/test" method="post">
  <p>点击“信息”以获得表单详细信息，或点击“设置”以改变这些信息。</p>
  <p>
    <button type="button" onclick="getFormInfo();">信息</button>
    <button type="button" onclick="setFormInfo(this.form);">设置</button>
    <button type="reset">重置</button>
  </p>

  <textarea id="form-info" rows="15" cols="20"></textarea>
</form>

<script>
  function getFormInfo() {
    // 通过表单名称获取对其的引用
    const f = document.forms["formA"];
    // 我们感兴趣的表单属性
    const properties = [
      "elements",
      "length",
      "name",
      "charset",
      "action",
      "acceptCharset",
      "action",
      "enctype",
      "method",
      "target",
    ];
    // 迭代这些属性，将它们转换为一个字符串，以便我们可以显示给用户
    const info = properties
      .map((property) => `${property}：${f[property]}`)
      .join("\n");

    // 设置表单的 <textarea> 以显示表单的属性
    document.forms["formA"].elements["form-info"].value = info; // 也可以使用 document.forms["formA"]['form-info'].value
  }

  function setFormInfo(f) {
    // 参数应该是表单元素的引用。
    f.action = "a-different-url.cgi";
    f.name = "a-different-name";
  }
</script>
```

在新窗口中提交表单（`<form>`）：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>在新窗口提交表单的示例</title>
  </head>
  <body>
    <form action="test.php" target="_blank">
      <p>
        <label>名字：<input type="text" name="first-name" /></label>
      </p>
      <p>
        <label>姓氏：<input type="text" name="last-name" /></label>
      </p>
      <p>
        <label><input type="password" name="pwd" /></label>
      </p>

      <fieldset>
        <legend>宠物偏好</legend>

        <p>
          <label><input type="radio" name="pet" value="cat" />猫</label>
        </p>
        <p>
          <label><input type="radio" name="pet" value="dog" />狗</label>
        </p>
      </fieldset>

      <fieldset>
        <legend>拥有的车辆</legend>

        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Bike" />自行车</label
          >
        </p>
        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Car" />汽车</label
          >
        </p>
      </fieldset>

      <p><button>提交</button></p>
    </form>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("form")}}。
