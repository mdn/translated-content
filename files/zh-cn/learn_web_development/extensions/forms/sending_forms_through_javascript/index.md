---
title: 使用 JavaScript 发送表单
slug: Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 4414bc297a05373570250fe1fb154eab197f29ca
---

当用户提交 HTML 表单（如通过点击{{glossary("Submit_button", "提交按钮")}}）时，浏览器会发出 [HTTP](/zh-CN/docs/Web/HTTP) 请求，来发送表单中的数据。但是，web 应用有时会使用 JavaScript API（如 {{domxref("Window/fetch", "fetch()")}}），以编程方式将数据发送到期望提交表单的端点，而不是采用这种声明式方法。本文将解释为什么这是一个重要的用例，并说明如何实现它。

## 为什么使用 JavaScript 提交表单数据？

根据文章[发送表单数据](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)中的描述，标准 HTML 表单提交会加载发送数据的目标 URL，这意味着浏览器窗口将以加载整个页面的方式进行导航。

然而，许多 web 应用（特别是{{glossary("progressive web apps","渐进式 web 应用")}}和{{glossary("SPA","单页面应用")}}）都使用 JavaScript API 向服务器请求数据，并更新页面的相关部分，从而避免加载整个页面的开销。

因此，当这些 web 应用想要提交表单数据时，仅使用 HTML 表单来收集用户输入，而不提交数据。当用户尝试发送数据时，应用会接管控制权并使用 JavaScript API（如 {{domxref("Window/fetch", "fetch()")}}）来发送数据。

## JavaScript 表单提交的问题

如果 Web 应用的服务器端点由开发人员控制，那么他们可以选择任意方式发送表单数据，例如以 JSON 对象的形式。

然而，如果服务器端点希望提交表单，web 应用就必须以特定方式对数据进行编码。例如，如果数据仅为文本，则可以由 URL 编码的键/值对列表组成，并以 `application/x-www-form-urlencoded` 的 {{httpheader("Content-Type")}} 发送。如果表单包含二进制数据，则必须使用 `multipart/form-data` 内容类型发送。

{{domxref("FormData")}} 接口以上述方式对数据进行编码，在本文的其余部分，我们将对 `FormData` 进行简要介绍。更多详情，请参阅[使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)指南。

## 手动创建 `FormData` 对象

可以为要添加的每个字段调用其 {{domxref("FormData.append()", "append()")}} 方法（传入字段的名称和值），以此来填充 `FormData` 对象。对于文本字段，值可以是字符串；对于二进制字段（包括 {{domxref("File")}} 对象），值可以是 {{domxref("Blob")}}。

在下面的示例中，当用户点击按钮时，将以表单提交的形式发送数据：

```js
async function sendData(data) {
  // 构建一个 FormData 实例
  const formData = new FormData();

  // 添加一个文本字段
  formData.append("name", "Pomegranate");

  // 添加一个文件
  const selection = await window.showOpenFilePicker();
  if (selection.length > 0) {
    const file = await selection[0].getFile();
    formData.append("file", file);
  }

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // 将 FormData 实例设置为请求正文
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

const send = document.querySelector("#send");
send.addEventListener("click", sendData);
```

1. 首先，构建一个新的、空的 `FormData` 对象。
2. 接下来，调用 `append()` 两次，向 `FormData` 对象添加两个项目：一个文本字段和一个文件。
3. 最后，我们使用 `fetch()` API 发出 {{httpmethod("POST")}} 请求，并将 `FormData` 对象设置为请求体。

请注意，不必设置 {{httpheader("Content-Type")}} 标头：当将 `FormData` 对象传入 `fetch()` 时，会自动设置正确的标头。

## 关联 `FormData` 对象和 `<form>`

如果提交的数据来自 {{htmlelement("form")}}，则可以通过将表单传入 `FormData` 构造函数来填充 `FormData` 实例。

假设我们的 HTML 声明了一个 `<form>` 元素：

```html
<form id="userinfo">
  <p>
    <label for="username">输入你的姓名：</label>
    <input type="text" id="username" name="username" value="Dominic" />
  </p>
  <p>
    <label for="avatar">选择一个头像</label>
    <input type="file" id="avatar" name="avatar" required />
  </p>
  <input type="submit" value="Submit" />
</form>
```

表单包含一个文本输入、一个文件输入和一个提交按钮。

JavaScript 如下：

```js
const form = document.querySelector("#userinfo");

async function sendData() {
  // 将 FormData 对象与表单元素关联起来
  const formData = new FormData(form);

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // 将 FormData 实例设置为请求正文
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// 接管表单提交
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
```

为表单元素添加了一个提交事件处理程序。首先调用 {{domxref("Event.preventDefault()", "preventDefault()")}} 阻止浏览器内置的表单提交，这样我们就可以接手了。然后，调用 `sendData()` 来获取表单元素并将其传递给 `FormData` 构造函数。

之后，我们使用 `fetch()` 以 HTTP `POST` 请求的形式发送 `FormData` 实例。

## 参见

### 学习路径

- [你的第一个 HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [如何构建 HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [原生表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5 输入（input）类型](/zh-CN/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [其他表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI 伪类](/zh-CN/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [样式化 HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [表单数据校验](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [发送表单数据](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### 更进一步

- **使用 JavaScript 发送表单**
- [如何构建自定义表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [旧式浏览器的 HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [进一步为 HTML 表单添加样式](/zh-CN/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- [表单控件兼容性列表](/zh-CN/docs/Learn_web_development/Extensions/Forms)
