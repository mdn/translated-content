---
title: 使用 JavaScript 发送表单
slug: Learn/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 402d8cd44691881e55bf214a7c0cb02bcb817305
---

{{LearnSidebar}}

HTML 表单可以声明式地发送一个 [HTTP](/zh-CN/docs/Web/HTTP) 请求。但也可以通过 JavaScript 来为表单准备用于发送的 HTTP 请求（例如通过 `XMLHttpRequest`）。本文对这些方法进行了探讨。

## 表单不总是表单

在渐进式 Web 应用、单页应用和基于框架的应用中，通常会使用 [HTML 表单](/zh-CN/docs/Learn/Forms)来发送数据，而不会在收到响应数据时加载新文档。让我们先来谈谈为什么这需要一种不同的方法。

### 获得整体界面的控制

如前一篇文章所述，标准 HTML 表单提交会加载发送数据的 URL，这意味着浏览器窗口会以全页面加载的方式进行导航。避免全页面加载可以避免网络延迟和可能出现的视觉问题（如闪烁），从而提供更流畅的体验。

许多现代用户界面只使用 HTML 表单来收集用户输入，而不是用于数据提交。当用户尝试发送数据时，应用程序会控制并在后台异步传输数据，只更新用户界面中需要更改的部分。

异步发送任意数据一般称为 [AJAX](/zh-CN/docs/Web/Guide/AJAX)，它代表“**异步 JavaScript 和 XML**”。

### 表单提交和 AJAX 请求之间的区别？

{{domxref("XMLHttpRequest")}}（XHR）DOM 对象可以构建 HTTP 请求、发送请求并获取结果。从历史上看，{{domxref("XMLHttpRequest")}} 是为获取和发送 [XML](/zh-CN/docs/Web/XML) 作为交换格式而设计的，后来这种格式被 [JSON](/zh-CN/docs/Glossary/JSON) 所取代。但是，XML 和 JSON 都不适合表单数据请求编码。表单数据（`application/x-www-form-urlencoded`）由键/值对的 URL 编码列表组成。为了传输二进制数据，HTTP 请求被重塑为 `multipart/form-data`。

> **备注：** 如今 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 常用于取代 XHR——它是 XHR 的更现代、更新的版本，工作原理类似，但有一些优点。你在本文中看到的大部分 XHR 代码都可以换成 Fetch。

如果你控制了前端（在浏览器中执行的代码）和后端（在服务器上执行的代码），就可以发送 JSON/XML，并随心所欲地处理它们。

但如果要使用第三方服务，就需要按照服务要求的格式发送数据。

那么我们应该如何发送这些数据呢？下面将介绍所需要的不同技术。

## 发送表单数据

一共有三种方式来发送表单数据：

- 手工构建 `XMLHttpRequest`。
- 使用独立的 `FormData` 对象。
- 使用绑定到 `<form>` 元素的 `FormData`。

让我们仔细看一下。

### 手工构建 XMLHttpRequest

{{domxref("XMLHttpRequest")}} 是进行 HTTP 请求的最安全可靠的方式。要使用 {{domxref("XMLHttpRequest")}} 发送表单数据，请通过 URL 编码准备数据，并遵守表单数据请求的具体规定。

让我们看个示例：

```html
<button>点我！</button>
```

这是 JavaScript 代码部分：

```js
const btn = document.querySelector("button");

function sendData(data) {
  console.log("Sending data");

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  // 将数据对象转换为 URL 编码的键/值对数组。
  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    );
  }

  // 将配对合并为单个字符串，并将所有 % 编码的空格替换为
  // “+”字符；匹配浏览器表单提交的行为。
  const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // 定义成功数据提交时发生的情况
  XHR.addEventListener("load", (event) => {
    alert("耶！已发送数据并加载响应。");
  });

  // 定义错误提示
  XHR.addEventListener("error", (event) => {
    alert("哎呀！出问题了。");
  });

  // 建立我们的请求
  XHR.open("POST", "https://example.com/cors.php");

  // 为表单数据 POST 请求添加所需的 HTTP 头
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // 最后，发送我们的数据。
  XHR.send(urlEncodedData);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

这里是实时演示效果：

{{EmbedLiveSample("构建_xmlhttprequest", "100%", 50)}}

> **备注：** 当你想要往第三方网站传输数据时，使用 {{domxref("XMLHttpRequest")}} 会受到{{glossary('same-origin policy', '同源策略')}}的影响。如果你需要执行跨源请求，你需要熟悉一下 [CORS 和 HTTP 访问控制](/zh-CN/docs/Web/HTTP/CORS)。

### 使用 XMLHttpRequest 和 FormData 对象

手动建立一个 HTTP 请求非常困难。幸运的是，[XMLHttpRequest 规范](https://www.w3.org/TR/XMLHttpRequest/)提供了一种方便简单的方法——利用 {{domxref("FormData","FormData")}} 对象来处理表单数据请求。

{{domxref("FormData","FormData")}} 对象可以用来构建用于传输的表单数据，或是获取表单元素中的数据来管理它的发送方式。

该对象的使用详见[使用 FormData 对象](/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)，下面是两个示例：

#### 使用一个独立的 FormData 对象

```html
<button>点我！</button>
```

你应该会觉得那个 HTML 示例很熟悉，现在来展示 JavaScript 代码：

```js
const btn = document.querySelector("button");

function sendData(data) {
  const XHR = new XMLHttpRequest();
  const FD = new FormData();

  // 把我们的数据添加到这个 FormData 对象中
  for (const [name, value] of Object.entries(data)) {
    FD.append(name, value);
  }

  // 定义数据成功发送并返回后执行的操作
  XHR.addEventListener("load", (event) => {
    alert("耶！已发送数据并加载响应。");
  });

  // 定义发生错误时执行的操作
  XHR.addEventListener("error", (event) => {
    alert("Oops! 出错了。");
  });

  // 设置请求地址和方法
  XHR.open("POST", "https://example.com/cors.php");

  // 发送这个 formData 对象，HTTP 请求头会自动设置
  XHR.send(FD);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

这里是实时演示效果：

{{EmbedLiveSample("使用一个独立的_FormData_对象", "100%", 50)}}

#### 使用绑定到表单元素上的 FormData

你也可以把一个 `FormData` 对象绑定到一个 {{HTMLElement("form")}} 元素上。这会创建一个 `FormData` 对象，表示表单中包含的数据。

这段 HTML 是典型的情况：

```html
<form id="myForm">
  <label for="myName">告诉我你的名字：</label>
  <input id="myName" name="name" value="小明" />
  <input type="submit" value="提交" />
</form>
```

但是 JavaScript 接管了这个表单：

```js
window.addEventListener("load", () => {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // 我们把这个 FormData 和表单元素绑定在一起。
    const FD = new FormData(form);

    // 我们定义了数据成功发送时会发生的事件
    XHR.addEventListener("load", (event) => {
      alert(event.target.responseText);
    });

    // 我们定义了失败的情形下会发生的事件
    XHR.addEventListener("error", (event) => {
      alert("哎呀！出了一些问题。");
    });

    // 我们设置了我们的请求
    XHR.open("POST", "https://example.com/cors.php");

    // 发送的数据是由用户在表单中提供的
    XHR.send(FD);
  }

  // 获取表单元素
  const form = document.getElementById("myForm");

  // 接管表单的 submit 事件
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendData();
  });
});
```

这里是实时演示效果：

{{EmbedLiveSample("使用绑定到表单元素上的_FormData", "100%", 50)}}

你甚至可以通过使用表单的 {{domxref("HTMLFormElement.elements", "elements")}} 属性来更多的参与此过程，来得到一个包含表单里所有数据元素的列表，并且逐一手动管理它们。想了解更多，请参见示例[访问表单控件](/zh-CN/docs/Web/API/HTMLFormElement/elements#访问表单控件)。

## 处理二进制数据

如果你使用一个含有 `<input type="file">` 组件的 {{domxref("FormData","FormData")}} 表单对象，数据会被自动处理。但是要手动发送二进制数据的话，还有额外的工作要做。

在现代网络上，二进制数据有很多来源：例如 {{domxref("FileReader")}}、{{domxref("HTMLCanvasElement","Canvas")}}、[WebRTC](/zh-CN/docs/Web/API/Navigator/getUserMedia)，等等。不幸的是，一些过时的浏览器无法访问二进制数据，或是需要非常复杂的工作环境。这些遗留问题已经超出了本文的涵盖范围。如果你想了解更多关于 `FileReader` API 的知识，参见[如何在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)。

发送二进制数据最简单的方法是使用 {{domxref("FormData", "FormData")}} 的 `append()` 方法，如上图所示。如果必须手工操作，就比较麻烦了。

在下面的例子中，我们使用了{{domxref("FileReader")}} API 来访问二进制数据，然后手动构建多部分表单数据请求：

```html
<form id="myForm">
  <p>
    <label for="theText">文本数据：</label>
    <input id="theText" name="myText" value="一些文本数据" type="text" />
  </p>
  <p>
    <label for="theFile">文件数据：</label>
    <input id="theFile" name="myFile" type="file" />
  </p>
  <button>提交！</button>
</form>
```

如你所见，这个 HTML 只是一个标准的 `<form>`，没有什么神奇的事情。“魔法”都在 JavaScript 里：

```js
// 因为我们想获取 DOM 节点，
// 我们在页面加载时初始化我们的脚本。
window.addEventListener("load", () => {
  // 这些变量用于存储表单数据
  const text = document.getElementById("theText");
  const file = {
    dom: document.getElementById("theFile"),
    binary: null,
  };

  // 使用 FileReader API 获取文件内容
  const reader = new FileReader();

  // 因为 FileReader 是异步的，会在完成读取文件时存储结果
  reader.addEventListener("load", () => {
    file.binary = reader.result;
  });

  // 页面加载时，如果一个文件已经被选择，那么读取该文件。
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // 如果没有被选择，一旦用户选择了它，就读取文件。
  file.dom.addEventListener("change", () => {
    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // 发送数据是我们需要的主要功能
  function sendData() {
    // 如果存在被选择的文件，等待它读取完成
    // 如果没有，延迟函数的执行
    if (!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // 要构建我们的多部分表单数据请求，
    // 我们需要一个 XMLHttpRequest 实例
    const XHR = new XMLHttpRequest();

    // 我们需要一个分隔符来定义请求的每一部分。
    const boundary = "blob";

    // 将我们的主体请求存储于一个字符串中
    let data = "";

    // 所以，如果用户已经选择了一个文件
    if (file.dom.files[0]) {
      // 在请求体中开始新的一部分
      data += `--${boundary}\r\n`;

      // 把它描述成表单数据
      data +=
        "content-disposition: form-data; " +
        // 定义表单数据的名称
        `name="${file.dom.name}"; ` +
        // 提供文件的真实名字
        `filename="${file.dom.files[0].name}"\r\n`;
      // 和文件的 MIME 类型
      data += `Content-Type: ${file.dom.files[0].type}\r\n`;

      // 元数据和数据之间有一条空行。
      data += "\r\n";

      // 将二进制数据添加到主体请求中
      data += file.binary + "\r\n";
    }

    // 文本数据更简单一些
    // 在主体请求中开始一个新的部分
    data += `--${boundary}\r\n`;

    // 假设这是表单数据，并命名它
    data += `content-disposition: form-data; name="${text.name}"\r\n`;
    // 元数据和数据之间有一条空行。
    data += "\r\n";

    // 添加文本数据到主体请求中
    data += text.value + "\r\n";

    // 一旦完成，“关闭”主体请求
    data += `--${boundary}--`;

    // 定义成功提交数据执行的语句
    XHR.addEventListener("load", (event) => {
      alert("耶！已发送数据并加载响应。");
    });

    // 定义发生错误时做的事
    XHR.addEventListener("error", function (event) {
      alert("哎呀！出现了一些问题。");
    });

    // 建立请求
    XHR.open("POST", "https://example.com/cors.php");

    // 添加需要的 HTTP 头部来处理多部分表单数据 POST 请求
    XHR.setRequestHeader(
      "Content-Type",
      `multipart/form-data; boundary=${boundary}`,
    );

    // 最后，发送数据。
    XHR.send(data);
  }

  // 获取表单元素
  const form = document.getElementById("theForm");

  // 添加 submit 事件处理器
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });
});
```

这里是实时演示效果：

{{EmbedLiveSample("处理二进制数据", "100%", 150)}}

## 总结

取决于不同的浏览器和正在处理数据的类型，通过 JavaScript 发送数据可能会很简单，也可能会很困难。{{domxref("FormData","FormData")}} 对象是通用的答案，所以请毫不犹豫地在旧浏览器上通过 [polyfill](https://github.com/jimmywarting/FormData) 使用它：

## 参见

### 学习路径

- [你的第一个 HTML 表单](/zh-CN/docs/Learn/Forms/Your_first_form)
- [如何构建 HTML 表单](/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form)
- [原生表单控件](/zh-CN/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 输入（input）类型](/zh-CN/docs/Learn/Forms/HTML5_input_types)
- [其他表单控件](/zh-CN/docs/Learn/Forms/Other_form_controls)
- [UI 伪类](/zh-CN/docs/Learn/Forms/UI_pseudo-classes)
- [样式化 HTML 表单](/zh-CN/docs/Learn/Forms/Styling_web_forms)
- [表单数据校验](/zh-CN/docs/Learn/Forms/Form_validation)
- [发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)

### 更进一步

- **使用 JavaScript 发送表单**
- [如何构建自定义表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [旧式浏览器的 HTML 表单](/zh-CN/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [进一步为 HTML 表单添加样式](/zh-CN/docs/Learn/Forms/Advanced_form_styling)
- [表单控件兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
