---
title: 使用 JavaScript 发送表单
slug: Learn/Forms/Sending_forms_through_JavaScript
---

{{LearnSidebar}}

正如在[前面的文章](/zh-CN/docs/HTML/Forms/Sending_and_retrieving_form_data)中讲到的，HTML 表单可以声明式地发送一个 HTTP 请求。但也可以通过 JavaScript 来为表单准备用于发送的 HTTP 请求。本文探讨如何做到这一点。

## 表单不总是表单

在渐进式 Web 应用中，使用 [HTML 表单](/zh-CN/docs/Learn/Forms)而不是文字表单让人们来填写变得越来越普遍了——越来越多的开发人员正致力于控制传输数据。

### 获得整体界面的控制

标准的 HTML 表单提交会加载数据要发送到的 URL，这意味着浏览器窗口以整页加载进行导航。可以通过隐藏闪烁和网络滞后来避免整页加载以提供更平滑的体验。

许多现代用户界面只使用 HTML 表单来收集用户的输入。当用户尝试发送数据时，应用程序将在后台采取控制并且异步地传输数据，只更新 UI 中需要更改的部分。

异步地发送任何数据被称为 [AJAX](/zh-CN/docs/Web/Guide/AJAX)，它代表“**异步 JavaScript 和 XML**”（Asynchronous JavaScript And XML）。

### 表单提交和 AJAX 请求之间的区别？

{{domxref("XMLHttpRequest")}}（XHR）DOM 对象可以构造 HTTP 请求、发送它们，并获取请求结果。创建之初，{{domxref("XMLHttpRequest")}} 被设计用于将 [XML](/zh-CN/docs/Web/XML) 作为传输数据的格式获取和发送。不过，如今 [JSON](/zh-CN/docs/Glossary/JSON) 已经取代了 XML。但是 XML 和 JSON 都不适合对表单数据请求编码。表单数据（`application/x-www-form-urlencoded`）由 URL 编码的键/值对列表组成。为了传输二进制数据，HTTP 请求被重新整合成 `multipart/form-data` 形式。

AJAX 技术主要依靠 {{domxref("XMLHttpRequest")}} (XHR) DOM 对象。它

> **备注：** 如今 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 常用于取代 XHR——它是 XHR 的更现代、更新的版本，其工作原理类似，但具有一些有点。你将在本文中看到的大多数 XHR 代码都可以替换为 Fetch。

如果你控制前端（在浏览器中执行的代码）和后端（在服务器上执行的代码），则可以发送 JSON/XML 并根据需要处理它们。

但是，如果你想使用第三方服务，你就需要根据服务要求的格式发送数据。

那么如何发送这样的数据呢？下面介绍了你需要使用的不同技术。

## 发送表单数据

一共有三种方式来发送表单数据：包括两种传统的方法和一种利用 {{domxref("XMLHttpRequest/FormData","formData")}} 对象的新方法。让我们仔细看一下：

### 构建 XMLHttpRequest

{{domxref("XMLHttpRequest")}} 是进行 HTTP 请求的最安全和最可靠的方式。要使用 {{domxref("XMLHttpRequest")}} 发送表单数据，请通过对其进行 URL 编码来准备数据，并遵守表单数据请求的具体细节。

让我们重建之前的这个例子：

```html
<button type="button" onclick="sendData({test:'ok'})">点击我！</button>
```

正如你所看到的，HTML 实际上没什么改变。不过，JavaScript 变得截然不同了：

```js
function sendData(data) {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = "";
  var urlEncodedDataPairs = [];
  var name;

  // 将数据对象转换为URL编码的键/值对数组。
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + "=" + encodeURIComponent(data[name]),
    );
  }

  // 将配对合并为单个字符串，并将所有%编码的空格替换为
  // “+”字符；匹配浏览器表单提交的行为。
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // 定义成功数据提交时发生的情况
  XHR.addEventListener("load", function (event) {
    alert("耶！已发送数据并加载响应。");
  });

  // 定义错误提示
  XHR.addEventListener("error", function (event) {
    alert("哎呀！出问题了。");
  });

  // 建立我们的请求
  XHR.open("POST", "https://example.com/cors.php");

  // 为表单数据 POST 请求添加所需的 HTTP 头
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // 最后，发送我们的数据。
  XHR.send(urlEncodedData);
}
```

在线演示：

{{EmbedLiveSample("构建_xmlhttprequest", "100%", 50)}}

> **备注：** 当你想要往第三方网站传输数据时，使用{{domxref("XMLHttpRequest")}}会受到同源策略的影响。如果你需要执行跨域请求，你需要熟悉一下[CORS 和 HTTP 访问控制](/zh-CN/docs/HTTP/Access_control_CORS).

### 使用 XMLHttpRequest 和 the FormData object（表单数据对象）

手动建立一个 HTTP 请求非常困难。幸运的是，最近的 [XMLHttpRequest 规范](http://www.w3.org/TR/XMLHttpRequest/)提供了一种方便简单的方法 — 利用{{domxref("XMLHttpRequest/FormData","FormData")}}对象来处理表单数据请求。

{{domxref("XMLHttpRequest/FormData","FormData")}} 对象可以用来构建用于传输的表单数据，或是获取表单元素中的数据来管理它的发送方式。请注意，{{domxref("XMLHttpRequest/FormData","FormData")}} 对象是“只写”的，这意味着您可以更改它们，但不能检索其内容。

使用这个对象在[Using FormData Objects](/zh-CN/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)中有详细的介绍，不过这里有两个例子：

#### 使用一个独立的 FormData 对象

```html
<button type="button" onclick="sendData({test:'ok'})">点我！</button>
```

你应该会觉得那个 HTML 示例很熟悉。

```js
function sendData(data) {
  var XHR = new XMLHttpRequest();
  var FD = new FormData();

  // 把我们的数据添加到这个 FormData 对象中
  for (name in data) {
    FD.append(name, data[name]);
  }

  // 定义数据成功发送并返回后执行的操作
  XHR.addEventListener("load", function (event) {
    alert("Yeah! 已发送数据并加载响应。");
  });

  // 定义发生错误时执行的操作
  XHR.addEventListener("error", function (event) {
    alert("Oops! 出错了。");
  });

  // 设置请求地址和方法
  XHR.open("POST", "https://example.com/cors.php");

  // 发送这个 formData 对象，HTTP 请求头会自动设置
  XHR.send(FD);
}
```

在线演示：

{{EmbedLiveSample("使用一个独立的_FormData_对象", "100%", 50)}}

#### 使用绑定到表单元素上的 FormData

你也可以把一个 `FormData` 对象绑定到一个 {{HTMLElement("form")}} 元素上。这会创建一个代表表单中包含元素的 `FormData` 。

这段 HTML 是典型的情况：

```html
<form id="myForm">
  <label for="myName">告诉我你的名字：</label>
  <input id="myName" name="name" value="John" />
  <input type="submit" value="提交" />
</form>
```

但是 JavaScript 接管了这个表单：

```js
window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // 我们把这个 FormData 和表单元素绑定在一起。
    var FD = new FormData(form);

    // 我们定义了数据成功发送时会发生的事。
    XHR.addEventListener("load", function (event) {
      alert(event.target.responseText);
    });

    // 我们定义了失败的情形下会发生的事
    XHR.addEventListener("error", function (event) {
      alert("哎呀！出了一些问题。");
    });

    // 我们设置了我们的请求
    XHR.open("POST", "https://example.com/cors.php");

    // 发送的数据是由用户在表单中提供的
    XHR.send(FD);
  }

  // 我们需要获取表单元素
  var form = document.getElementById("myForm");

  // ...然后接管表单的提交事件
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
```

在线演示：

{{EmbedLiveSample("使用绑定到表单元素上的_FormData", "100%", 50)}}

你甚至可以通过使用表单的{{domxref("HTMLFormElement.elements", "elements")}} 属性来更多的参与此过程，来得到一个包含表单里所有数据元素的列表，并且逐一手动管理他们。想了解更多，请参见示例[访问表单控件](/zh-CN/docs/Web/API/HTMLFormElement/elements#访问表单控件)。

### 在隐藏的 iframe 中构建 DOM

最古老的异步发送表单数据方法是用 DOM API 构建表单，然后将其数据发送到隐藏的 {{HTMLElement("iframe")}}。要获得提交的结果，请获取{{HTMLElement("iframe")}}的内容。

> **警告：** 不要使用这项技术。有第三方服务的安全风险，因为它会使你暴露在 [脚本注入攻击](http://en.wikipedia.org/wiki/Cross-site_scripting) 中。如果你使用 HTTPS，它会影响 [同源策略](/zh-CN/docs/JavaScript/Same_origin_policy_for_JavaScript), 这可以使 {{HTMLElement("iframe")}} 内容无法访问。然而，该方法可能是你需要支持很古老的浏览器的唯一选择。

下面是个简单的例子：

```html
<button onclick="sendData({test:'ok'})">点击我！</button>
```

所有操作都在下面这段脚本里：

```js
// 首先创建一个用来发送数据的 iframe.
var iframe = document.createElement("iframe");
iframe.name = "myTarget";

// 然后，将 iframe 附加到主文档
window.addEventListener("load", function () {
  iframe.style.display = "none";
  document.body.appendChild(iframe);
});

// 下面这个函数是真正用来发送数据的。
// 它只有一个参数，一个由键值对填充的对象。
function sendData(data) {
  var name,
    form = document.createElement("form"),
    node = document.createElement("input");

  // 定义响应时发生的事件
  iframe.addEventListener("load", function () {
    alert("Yeah! Data sent.");
  });

  form.action = "http://www.cs.tut.fi/cgi-bin/run/~jkorpela/echo.cgi";
  form.target = iframe.name;

  for (name in data) {
    node.name = name;
    node.value = data[name].toString();
    form.appendChild(node.cloneNode());
  }

  // 表单元素需要附加到主文档中，才可以被发送。
  form.style.display = "none";
  document.body.appendChild(form);

  form.submit();

  // 表单提交后，就可以删除这个表单，不影响下次的数据发送。
  document.body.removeChild(form);
}
```

在线演示：

{{EmbedLiveSample("在隐藏的 iframe 中构建 DOM", "100%", 50)}}

## 处理二进制数据

如果你使用一个含有 `<input type="file">` 组件的表格的 {{domxref("XMLHttpRequest/FormData","FormData")}} 对象，传给代码的数据会被自动处理。但是要手动发送二进制数据的话，还有额外的工作要做。

在现代网络上，二进制数据有很多来源：例如{{domxref("FileReader")}} API、{{domxref("HTMLCanvasElement","Canvas")}} API、[WebRTC](/zh-CN/docs/WebRTC/navigator.getUserMedia) API，等等。不幸的是，一些过时的浏览器无法访问二进制数据，或是需要非常复杂的工作环境。这些遗留问题已经超出了本文的涵盖范围。如果你想了解更多关于 `FileReader` API 的知识，参阅：[如何在 web 应用程序中使用文件](/zh-CN/docs/Using_files_from_web_applications)。

在 {{domxref("XMLHttpRequest/FormData","formData")}} 的帮助下，发送二进制数据非常简单，使用 `append()` 方法就可以了。如果你必须手动进行，那确实会有一些棘手。

在下面的例子中，我们使用了{{domxref("FileReader")}} API 来访问二进制数据，然后手动构建多重表单数据请求：

```html
<form id="myForm">
  <p>
    <label for="i1">文本数据：</label>
    <input id="i1" name="myText" value="一些文本数据" />
  </p>
  <p>
    <label for="i2">文件数据：</label>
    <input id="i2" name="myFile" type="file" />
  </p>
  <button>提交！</button>
</form>
```

如你所见，这个 HTML 只是一个标准的 `<form>`。没有什么神奇的事情发生。“魔法”都在 JavaScript 里：

```js
// 因为我们想获取 DOM 节点，
// 我们在页面加载时初始化我们的脚本。
window.addEventListener("load", function () {
  // 这些变量用于存储表单数据
  var text = document.getElementById("i1");
  var file = {
    dom: document.getElementById("i2"),
    binary: null,
  };

  // 使用 FileReader API 获取文件内容
  var reader = new FileReader();

  // 因为 FileReader 是异步的，会在完成读取文件时存储结果
  reader.addEventListener("load", function () {
    file.binary = reader.result;
  });

  // 页面加载时，如果一个文件已经被选择，那么读取该文件。
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // 如果没有被选择，一旦用户选择了它，就读取文件。
  file.dom.addEventListener("change", function () {
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

    // 要构建我们的多重表单数据请求，
    // 我们需要一个 XMLHttpRequest 实例
    var XHR = new XMLHttpRequest();

    // 我们需要一个分隔符来定义请求的每一部分。
    var boundary = "blob";

    // 将我们的主体请求存储于一个字符串中
    var data = "";

    // 所以，如果用户已经选择了一个文件
    if (file.dom.files[0]) {
      // 在请求体中开始新的一部分
      data += "--" + boundary + "\r\n";

      // 把它描述成表单数据
      data +=
        "content-disposition: form-data; " +
        // 定义表单数据的名称
        'name="' +
        file.dom.name +
        '"; ' +
        // 提供文件的真实名字
        'filename="' +
        file.dom.files[0].name +
        '"\r\n';
      // 和文件的 MIME 类型
      data += "Content-Type: " + file.dom.files[0].type + "\r\n";

      // 元数据和数据之间有一条空行。
      data += "\r\n";

      // 将二进制数据添加到主体请求中
      data += file.binary + "\r\n";
    }

    // 文本数据更简单一些
    // 在主体请求中开始一个新的部分
    data += "--" + boundary + "\r\n";

    // 声明它是表单数据，并命名它
    data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
    // 元数据和数据之间有一条空行。
    data += "\r\n";

    // 添加文本数据到主体请求中
    data += text.value + "\r\n";

    // 一旦完成，“关闭”主体请求
    data += "--" + boundary + "--";

    // 定义成功提交数据执行的语句
    XHR.addEventListener("load", function (event) {
      alert("✌！数据已发送且响应已加载。");
    });

    // 定义发生错误时做的事
    XHR.addEventListener("error", function (event) {
      alert("哎呀！出现了一些问题。");
    });

    // 建立请求
    XHR.open("POST", "https://example.com/cors.php");

    // 添加需要的 HTTP 头部来处理多重表单数据 POST 请求
    XHR.setRequestHeader(
      "Content-Type",
      "multipart/form-data; boundary=" + boundary,
    );

    // 最后，发送数据。
    XHR.send(data);
  }

  // 访问表单…
  var form = document.getElementById("myForm");

  // …接管提交事件
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
```

在线演示：

{{EmbedLiveSample("处理二进制数据", "100%", 150)}}

## 总结

取决于不同的浏览器，通过 JavaScript 发送数据可能会很简单，也可能会很困难。{{domxref("XMLHttpRequest/FormData","FormData")}} 对象是通用的答案，所以请毫不犹豫的在旧浏览器上通过 polyfill 使用它：

- 此 [gist](https://gist.github.com/3120320) 通过 {{domxref("Using_web_workers","Web Worker")}} polyfill 了 `FormData`。
- [HTML5-formdata](https://github.com/francois2metz/html5-formdata) 试图 polyfill `FormData` 对象，但是它需要 [File API](http://www.w3.org/TR/FileAPI/)
- 这个 [polyfill](https://github.com/jimmywarting/FormData) 提供了 FormData 所有的大部分新方法（entries, keys, values, 以及对 `for...of` 的支持）
