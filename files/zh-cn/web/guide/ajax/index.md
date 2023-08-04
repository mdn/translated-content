---
title: Ajax
slug: Web/Guide/AJAX
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide")}}
</section>

**异步 JavaScript 和 XML**，或 [**Ajax**](https://www.semanticscholar.org/paper/Ajax%3A-A-New-Approach-to-Web-Applications-Garrett/c440ae765ff19ddd3deda24a92ac39cef9570f1e?p2df) 本身不是一种技术，而是一种将一些现有技术结合起来使用的方法，包括：[HTML](/zh-CN/docs/Web/HTML) 或 [XHTML](/zh-CN/docs/Glossary/XHTML)、[CSS](/zh-CN/docs/Web/CSS)、[JavaScript](/zh-CN/docs/Web/JavaScript)、[DOM](/zh-CN/docs/Web/API/Document_Object_Model)、[XML](/zh-CN/docs/Web/XML)、[XSLT](/zh-CN/docs/Web/XSLT)、以及最重要的 {{domxref("XMLHttpRequest")}} 对象。当使用结合了这些技术的 Ajax 模型以后，网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。Ajax 最吸引人的特性是它的“异步”性质，这意味着它可以与服务器通信、交换数据并更新页面，而无需刷新页面。

尽管 Ajax 中的 X 代表 XML，但是 {{glossary("JSON")}} 才是首选，因为它更加轻量，而且是用 JavaScript 编写的。在 Ajax 模型中，JSON 和 XML 都被用来包装信息。

## 示例

本节为你提供了一些简单的实践示例来帮助你入门。

## 第一步——发送 HTTP 请求

为了使用 JavaScript 向服务器发送一个 [HTTP](/zh-CN/docs/Web/HTTP) 请求，你需要一个包含必要函数功能的对象实例。这就是为什么会有 `XMLHttpRequest` 的原因。

```js
const httpRequest = new XMLHttpRequest();
```

发送一个请求后，你会收到响应。在这一阶段，你要告诉 `XMLHttpRequest` 对象由哪一个 JavaScript 函数处理响应，在设置了对象的 `onreadystatechange` 属性后给它命名，当请求状态改变时调用函数，像这样：

```js
function handler() {
  // 在这里处理服务器响应。
}

httpRequest.onreadystatechange = handler;
```

要注意的是，函数名后没有括号和参数，因为这是把一个引用赋值给了函数，而不是真正的调用了它。此外，如果不使用函数名的方式，你还可以用 JavaScript 的匿名函数响应处理的动作，就像下面这样：

```js
httpRequest.onreadystatechange = () => {
  // 在这里处理服务器响应。
};
```

接下来，声明当你接到响应后要做什么，你要通过调用 HTTP 请求对象的 `open()` 和 `send()` 方法发送一个实际的请求，像下面这样：

```js
httpRequest.open("GET", "http://www.example.org/some.file", true);
httpRequest.send();
```

- `open()` 的第一个参数是 HTTP 请求方法——GET，POST，HEAD 以及服务器支持的其他方法。根据 HTTP 标准的要求，保证这些方法一定要是大写字母，否则其他一些浏览器（比如 FireFox）可能无法处理这个请求。更多关于 HTTP 的请求方法，可以查看[相关标准](https://www.rfc-editor.org/rfc/rfc9110.html#name-methods)。
- 第二个参数是你要发送请求的 URL。由于安全原因，默认不能调用第三方 URL 域名。确保你在页面中使用的是正确的域名，否则在调用 `open()` 方法时会有 "permission denied" 错误提示。一个容易犯的错误是你企图通过 `domain.tld` 访问网站，而不是使用 `www.domain.tld`。如果你真的需要向另一个域名发送请求，可以参考 [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)。
- 第三个参数是可选的，用于设置请求是否是异步的。如果设为 `true`（默认值），即开启异步，JavaScript 就不会在此语句阻塞，使得用户能在服务器还没有响应的情况下与页面进行交互。这就是 AJAX 中的第一个 A。

`send()` 方法的参数可以是任何你想发送给服务器的内容，如果是 `POST` 请求的话。发送表单数据时应该用服务器可以解析的格式，像查询字符串：

```
"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"
```

或者使用其他格式，类似 `multipart/form-data`、JSON、XML 等。

如果你使用 `POST` 数据，那就需要设置请求的 MIME 类型。比如，在调用 `send()` 方法获取表单数据前要有下面这个：

```js
httpRequest.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded",
);
```

## 第二步——处理服务器响应

在发送请求时，你提供的 JavaScript 函数名负责处理响应：

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

这个函数应该做什么？首先，函数要检查请求的状态。如果状态的值是 `XMLHttpRequest.DONE` （对应的值是 4），意味着服务器响应收到了并且是没问题的，然后就可以继续执行。

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
  // 很好，服务器已经接收到了响应。
} else {
  // 还没准备好。
}
```

全部 `readyState` 状态值都在 [XMLHTTPRequest.readyState](/zh-CN/docs/Web/API/XMLHttpRequest/readyState) 文档中有所记载，如下所示：

- 0（未初始化）或（**请求还未初始化**）
- 1（正在加载）或（**已建立服务器链接**）
- 2（已加载）或（**请求已接收**）
- 3（交互）或（**正在处理请求**）
- 4（完成）或（**请求已完成并且响应已准备好**）

接下来，检查 HTTP 响应的[响应状态码](/zh-CN/docs/Web/HTTP/Status)。在下面的例子中，我们通过检查响应码 [`200 OK`](/zh-CN/docs/Web/HTTP/Status#成功响应) 判断 AJAX 调用有没有成功。

```js
if (httpRequest.status === 200) {
  // 完美！
} else {
  // 请求有问题。
  // 比如，响应可能是 404 (Not Found)
  // 或 500 (Internal Server Error) 响应码。
}
```

在检查完请求状态和 HTTP 响应码后，你就可以用服务器返回的数据做任何你想做的了。你有两个方法去访问这些数据：

- `httpRequest.responseText`：以文本字符串的方式返回服务器响应。
- `httpRequest.responseXML`：以 `XMLDocument` 对象的形式返回服务器响应，你可以使用 JavaScript DOM 函数来遍历它。

注意上面这一步只在你发起异步请求时有效（即 `open()` 的第三个参数未特别指定或设为 `true`）。如果你发起的是**同步**请求则不必使用函数，但是非常不推荐这样做，它的用户体验很糟糕。

## 第三步——简单的示例

让我们把所有的知识都集中起来做一个简单的 HTTP 请求。这个 JavaScript 会请求一个 HTML 文档 `test.html`，包含文本内容“I'm a test”。然后我们 `alert()` 响应的内容。注意这个例子我们只是用了原生 JavaScript，没有用 jQuery。而且，HTML、XML 和 PHP 文件都要放在同一个目录下。

```html
<button id="ajaxButton" type="button">发送请求</button>

<script>
  (() => {
    let httpRequest;
    document
      .getElementById("ajaxButton")
      .addEventListener("click", makeRequest);
    function makeRequest() {
      httpRequest = new XMLHttpRequest();
      if (!httpRequest) {
        alert("放弃了 :( 不能创建 XMLHTTP 实例");
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open("GET", "test.html");
      httpRequest.send();
    }
    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert("请求遇到了问题。");
        }
      }
    }
  })();
</script>
```

在这个示例中：

- 用户点击“发送请求”按钮；
- 事件处理器调用 `makeRequest()` 函数；
- 请求已通过然后（`onreadystatechange`）传给 `alertContents()` 执行。
- `alertContents()` 检查返回的响应是否 OK，然后 `alert()` 文件 `test.html` 的内容。

> **备注：** 如果不设置响应头 `Cache-Control: no-cache` 浏览器将会把响应缓存下来而且再也无法重新提交请求，这会使得调试过程异常艰难。你也可以添加一个总是不同的 GET 参数，比如时间戳或者随机数（详情见[绕过缓存](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#绕过缓存)）。

> **备注：** 如果变量 `httpRequest` 在全局范围内使用，它会在 `makeRequest()` 函数中被相互覆盖，从而导致资源竞争。为了避免这个情况，请在包含 AJAX 函数的[闭包](/zh-CN/docs/Web/JavaScript/Closures)中声明 `httpRequest` 变量。

在通信错误的事件中（例如服务器宕机），在访问响应状态 onreadystatechange 方法中会抛出一个 exception。为了缓和这种情况，可以使用 `try...catch` 把 `if...else` 语句包裹起来。

```js
function alertContents() {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert("请求遇到了问题。");
      }
    }
  } catch (e) {
    alert(`遇到了 exception：${e.description}`);
  }
}
```

## 第四步——处理 XML 响应

在上一个例子中，在收到 HTTP 请求的响应后我们会使用对象的 `responseText` 属性，包含 `test.html` 文件的内容。现在我们试试 `responseXML` 属性。

首先，我们创建一个稍后将要请求的有效的 XML 文档。文档（`test.xml`）包含以下内容：

```html
<?xml version="1.0" ?>
<root> 我是测试文字。 </root>
```

然后，在 `makeRequest()` 函数中，我们需要把 `text.html` 换成我们刚创建的 XML 文件：

```js
httpRequest.open("GET", "test.xml");
```

然后在 `alertContents()` 里，我们把 `alert(httpRequest.responseText);` 改为：

```js
const xmldoc = httpRequest.responseXML;
const root_node = xmldoc.querySelector("root");
alert(root_node.firstChild.data);
```

这部分代码采用 `responseXML` 提供的 `XMLDocument` 对象，并使用 DOM 方法访问 XML 文档中包含的一些数据。

## 第五步——处理数据

最后，我们发送一个数据给服务器并收到响应。这次我们用 JavaScript 请求动态页面 `test.php` 并返回一个计算后的字符串——“你好，\[user data]”，并 `alert()` 出来。

首先要添加一个文本到 HTML 中以方便用户输入名字：

```html
<label>
  你的名字：
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  发出请求
</span>
```

我们还将在事件处理程序中添加一行，从文本框中获取用户的数据，并将其与服务器端脚本的 URL 一起发送给 `makeRequest()` 函数：

```js
document.getElementById("ajaxButton").onclick = () => {
  const userName = document.getElementById("ajaxTextbox").value;
  makeRequest("test.php", userName);
};
```

我们还要修改 `makeRequest()` 让它接受用户数据并将其发给服务器。把请求方法从 `GET` 改为 `POST`，把数据作为参数让 `httpRequest.send()` 调用。

```js
function makeRequest(url, userName) {
  // …

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open("POST", url);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  httpRequest.send(`userName=${encodeURIComponent(userName)}`);
}
```

`alertContents()` 函数可以使用第三步中的相同函数写，而服务器会返回计算后的内容和原内容。所以，如果用户在输入框中输入“Jane”，那服务器就会返回如下内容：

```json
{ "userData": "Jane", "computedString": "Hi, Jane!" }
```

为了在 `alertContents()` 中使用这个数据，我们可不能只是 alert `responseText`，我们要解析它并 alert `computedString`，这才是我们想要的属性：

```js
function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert("请求出现了问题。");
    }
  }
}
```

`test.php` 文件应该包含以下内容：

```php
$name = $_POST['userName'] ?? 'no name';
$computedString = "Hi, " . $name . "!";
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

想获取更多 DOM 方法，可以查看[文档对象模型（DOM）](/zh-CN/docs/Web/API/Document_Object_Model)文档。

## 简单的计时 XHR 示例

下面是另一个简单的例子，这里我们通过 XHR 加载一个文本文件，其结构假设是这样的：

```
TIME: 312.05
TIME: 312.07
TIME: 312.10
TIME: 312.12
TIME: 312.14
TIME: 312.15
```

一旦文本文件被加载，我们在每个换行符（`\n`，基本上是文本文件中每个换行符的位置）处将项目 `split()` 放入一个数组，然后将完整的时间戳列表和最后一个时间戳打印到页面上。

每 5 秒重复一次，使用 `setInterval()` 调用。我们的想法是，服务器端的某种脚本将不断地用新的时间戳更新文本文件，而我们的 XHR 代码将被用来在客户端报告最新的时间戳。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>XHR 时间记录</title>
    <style></style>
  </head>
  <body>
    <p id="writeData" class="data">离线</p>
    <p id="lastStamp">还没有数据</p>

    <script>
      const fullData = document.getElementById("writeData");
      const lastData = document.getElementById("lastStamp");
      function fetchData() {
        console.log("正在获取数据更新。");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "time-log.txt", true);
        xhr.onload = () => {
          updateDisplay(xhr.response);
        };
        xhr.send();
      }
      function updateDisplay(text) {
        fullData.textContent = text;
        const timeArray = text.split("\n");
        // 有些文件系统总是在文本文件的末尾包括一个空行。
        if (timeArray[timeArray.length - 1] === "") {
          timeArray.pop();
        }
        lastData.textContent = timeArray[timeArray.length - 1];
      }
      setInterval(fetchData, 5000);
    </script>
  </body>
</html>
```

## 相关技术

虽然 Ajax 仍然有用，但自 2005 年以来，已经开发了可以实现类似功能的其他 API，包括 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 和[服务端发送事件](/zh-CN/docs/Web/API/Server-sent_events)。

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
  - : Fetch API 提供了一个获取资源的接口。对于使用过 {{domxref("XMLHTTPRequest")}} 的人来说非常熟悉，但这个 API 提供了一个更强大和灵活的功能集。
- [服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events)
  - : 传统上，一个网页必须向服务器发送请求以接收新数据；也就是说，网页向服务器请求数据。有了服务器发送的事件，服务器就有可能在任何时候向网页发送新的数据，通过推送消息给网页。这些传入的消息可以被视为网页内部的[_事件_](/zh-CN/docs/Web/API/Event) _+ 数据_。也请参见[使用服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)。

## 参见

- [使用 XMLHttpRequest API](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - : {{domxref("XMLHttpRequest")}} API 是 Ajax 的核心。本文将解释如何使用一些 Ajax 技术，比如：
    - [分析和操纵服务器响应](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#处理响应)
    - [监控请求过程](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#监控请求过程)
    - [提交表单或者上传二进制文件](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#提交表单和上传文件)，使用*纯* Ajax 或者 {{domxref("FormData")}} 对象
    - 在 [Web worker](/zh-CN/docs/Web/API/Worker) 中使用 Ajax
- [_纯 Ajax_ 导航示例](/zh-CN/docs/Web/API/History_API/Example)
  - : 本文提供了一个仅由三个页面组成的*纯 Ajax* 网站的（最小）工作示例。
- [发送和接收二进制数据](/zh-CN/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : `XMLHttpRequest` 对象的 `responseType` 属性可以被设置来改变服务器的预期响应类型。可能的值是空字符串（默认）、`arraybuffer`、`blob`、`document`、`json` 和 `text`。`response` 属性将根据 `responseType` 包含，作为一个 `ArrayBuffer`、`Blob`、`Document`、`JSON` 或字符串的实体主体。这篇文章将展示一些 Ajax I/O 技术。
- [XML](/zh-CN/docs/Glossary/XML)
  - : **可扩展标记语言**（Extensible Markup Language，XML）是 W3C 推荐的一种专用于创建专用标记语言的通用标记语言。它是 SGML 的简化子集，能够描述许多不同类型的数据。其主要目的是促进在不同的系统，尤其是通过互联网连接的系统间的数据共享。
- [解析和序列化 XML](/zh-CN/docs/Web/Guide/Parsing_and_serializing_XML)
  - : 如何从字符串、文件或通过 JavaScript 解析 XML 文档，以及如何将 XML 文档序列化为字符串或文件。
- [XPath](/zh-CN/docs/Web/XPath)
  - : XPath 代表 **X**ML **Path** Language，它使用非 XML 语法，提供了一种灵活的方式来寻址（指向）[XML](/zh-CN/docs/Web/XML) 文档的不同部分。除此之外，它还可以用于测试文档中的寻址节点，以确定它们是否匹配模式。
- {{domxref("FileReader")}} API
  - : `FileReader` API 允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓存）的内容，使用 {{domxref("File")}} 或 {{domxref("Blob")}} 对象指定要读取的文件或数据。文件对象可以从用户选择文件后的 {{HTMLElement("input")}} 元素的 {{domxref("FileList")}} 对象中获取，也可以从拖放操作的 {{domxref("DataTransfer")}} 对象获取。
- [XMLHttpRequest 对 HTML 的支持](/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - : W3C [XMLHttpRequest](https://xhr.spec.whatwg.org/) 规范向 {{domxref("XMLHttpRequest")}} 添加了 HTML 解析支持，XMLHttpRequest 原本只支持 XML 解析。此功能允许 Web 应用程序使用 `XMLHttpRequest` 获取 HTML 资源作为解析的 DOM。
- [XMLHttpRequest 规范](https://xhr.spec.whatwg.org/)
  - : WHATWG 动态标准
