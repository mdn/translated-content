---
title: 使用 XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

在该教程中，我们将使用{{domxref("XMLHttpRequest")}} 来发送 [HTTP](/zh-CN/docs/Web/HTTP) 请求以实现网站和服务器之间的数据交换。`XMLHttpRequest`常见和晦涩的使用情况都将包含在例子中。

发送一个 HTTP 请求，需要创建一个 `XMLHttpRequest` 对象，打开一个 URL，最后发送请求。当所有这些事务完成后，该对象将会包含一些诸如响应主体或 [HTTP status](/zh-CN/docs/Web/HTTP/Status) 的有用信息。

```js
function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
```

## 请求类型

通过 `XMLHttpRequest` 生成的请求可以有两种方式来获取数据，异步模式或同步模式。请求的类型是由这个 `XMLHttpRequest` 对象的 [open()](/zh-CN/docs/Web/API/XMLHttpRequest/open) 方法的第三个参数`async`的值决定的。如果该参数的值为 `false`，则该 `XMLHttpRequest`请求以同步模式进行，否则该过程将以异步模式完成。这两种类型请求的详细讨论和指南可以在[同步和异步请求](/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)页找到。

> **备注：** 由于对用户体验的负面影响，从 Gecko 30.0 版本开始，在主线程上的同步请求已经被弃用。

> **备注：** `XMLHttpRequest` 构造函数并不仅限于 XML 文档。它之所以使用“XML”开头是因为在它诞生之时，原先用于异步数据交换的主要格式便是 XML。

## 处理响应

W3C 规范定义了 {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} 对象的几种类型的[响应属性](https://xhr.spec.whatwg.org/)。这些属性告诉客户端关于 `XMLHttpRequest` 返回状态的重要信息。一些处理非文本返回类型的用例，可能包含下面章节所描述的一些操作和分析。

### 分析并操作 responseXML 属性

如果你使用 `XMLHttpRequest` 来获得一个远程的 XML 文档的内容，{{domxref("XMLHttpRequest.responseXML", "responseXML")}} 属性将会是一个由 XML 文档解析而来的 DOM 对象，这很难被操作和分析。这里有五种主要的分析 XML 文档的方式：

1. 使用 [XPath](/zh-CN/docs/Web/XPath) 定位到文档的指定部分。
2. 手动 [解析和序列化 XML](/zh-CN/docs/Web/Guide/Parsing_and_serializing_XML) 为字符串或对象。
3. 使用 [XMLSerializer](/zh-CN/docs/XMLSerializer) 把 DOM 树序列化成字符串或文件。
4. 如果你预先知道 XML 文档的内容，你可以使用 [RegExp](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。如果你用 `RegExp` 扫描时受到换行符的影响，你也许想要删除所有的换行符。然而，这种方法是"最后手段"，因为如果 XML 代码发生轻微变化，该方法将可能失败。

> **备注：** 在 W3C [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) 规范中允许 HTML 通过 XMLHttpRequest.responseXML 属性进行解析。更多详细内容请阅读 [HTML in XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) 。本条注意已在英文原文中更新。

> **备注：** `XMLHttpRequest` 现在可以使用 {{domxref("XMLHttpRequest.responseXML", "responseXML")}} 属性解释 HTML。请阅读 [HTML in XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) 这篇文章了解相关用法。

### 解析和操作包含 HTML 文档的 responseText 属性

如果使用 `XMLHttpRequest` 从远端获取一个 HTML 页面，则所有 HTML 标记会以字符串的形式存放在 responseText 属性里，这样就使得操作和解析这些标记变得困难。解析这些 HTML 标记主要有三种方式：

1. 使用 `XMLHttpRequest.responseXML` 属性。
2. 将内容通过 `fragment.body.innerHTML` 注入到一个 [文档片段](/zh-CN/docs/Web/API/DocumentFragment) 中，并遍历 DOM 中的片段。
3. 如果你预先知道 HTML 文档的内容，你可以使用 [RegExp](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。如果你用 RegExp 扫描时受到换行符的影响，你也许想要删除所有的换行符。然而，这种方法是"最后手段"，因为如果 HTML 代码发生轻微变化，该方法将可能失败。

## 处理二进制数据

尽管 {{domxref("XMLHttpRequest")}} 一般用来发送和接收文本数据，但其实也可以发送和接收二进制内容。有许多经过良好测试的方法来强制使用 `XMLHttpRequest` 发送二进制数据。利用 `XMLHttpRequest` 对象的 {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} 方法是一个解决方案，虽然它并不是一个标准方法。

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", url);
// 以二进制字符串形式检索未处理的数据
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

然而，自从 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性目前支持大量附加的内容类型后，已经出现了很多的现代技术，它们使得发送和接收二进制数据变得更加容易。

例如，考虑以下代码，它使用 `"arraybuffer"` 的 `responseType` 来将远程内容获取到一个存储原生二进制数据的 {{jsxref("ArrayBuffer")}} 对象中。

```js
var oReq = new XMLHttpRequest();

oReq.onload = function (e) {
  var arraybuffer = oReq.response; // 不是 responseText！
  /* ... */
};
oReq.open("GET", url);
oReq.responseType = "arraybuffer";
oReq.send();
```

更多示例请参考 [发送和接收二进制数据](/zh-CN/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)。

## 监测进度

`XMLHttpRequest` 提供了各种在请求被处理期间发生的事件以供监听。这包括定期进度通知、错误通知，等等。

支持 DOM 的 progress 事件监测之于 `XMLHttpRequest` 传输，遵循 Web API [进度事件规范](http://dev.w3.org/2006/webapi/progress/Progress.html)：这些事件实现了 {{domxref("ProgressEvent")}} 接口。

- [`progress`](/zh-CN/docs/Web/API/XMLHttpRequest/progress_event)
  - : 检索的数据量发生了变化。
- [`load`](/zh-CN/docs/Web/API/Window/load_event)
  - : 传输完成，所有数据保存在 `response` 中。

```js
var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open();

// ...

// 服务端到客户端的传输进程（下载）
function updateProgress(oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = (oEvent.loaded / oEvent.total) * 100;
    // ...
  } else {
    // 总大小未知时不能计算进程信息
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}
```

第 3-6 行为多种事件添加了事件监听，这些事件在使用 `XMLHttpRequest` 执行数据传输时被发出。

> **备注：** 你需要在请求调用 `open()` 之前添加事件监听。否则 `progress` 事件将不会被触发。

在上一个例子中，progress 事件被指定由 `updateProgress()` 函数处理，并接收到传输的总字节数和已经传输的字节数，它们分别在事件对象的 `total` 和 `loaded` 属性里。但是如果 `lengthComputable` 属性的值是 false，那么意味着总字节数是未知并且 total 的值为零。

progress 事件同时存在于下载和上传的传输。下载相关事件在 `XMLHttpRequest` 对象上被触发，就像上面的例子一样。上传相关事件在 `XMLHttpRequest.upload` 对象上被触发，像下面这样：

```js
var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress);
oReq.upload.addEventListener("load", transferComplete);
oReq.upload.addEventListener("error", transferFailed);
oReq.upload.addEventListener("abort", transferCanceled);

oReq.open();
```

> **备注：** progress 事件在使用 `file:` 协议的情况下是无效的。

> **备注：** 从 Gecko 9.0 开始，进度事件现在可以依托于每一个传入的数据块，包括进度事件被触发前在已经接受了最后一个数据包且连接已经被关闭的情况下接收到的最后一个块。这种情况下，当该数据包的 load 事件发生时 progress 事件会被自动触发。这使你可以只关注 progress 事件就可以可靠的监测进度。

> **备注：** 在 Gecko 12.0 中，当 `responseType` 为 "moz-blob" 时，如果你的 progress 事件被触发，则响应的值是一个包含了接收到的数据的 {{domxref("Blob")}} 。

使用 `loadend` 事件可以侦测到所有的三种加载结束条件（`abort`、`load`，或 `error`）：

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

需要注意的是，没有方法可以确切的知道 `loadend` 事件接收到的信息是来自何种条件引起的操作终止；但是你可以在所有传输结束的时候使用这个事件处理。

## 提交表单和上传文件

`XMLHttpRequest` 的实例有两种方式提交表单：

- 使用 AJAX
- 使用 {{domxref("XMLHttpRequest.FormData", "FormData")}} API

第二种方式（使用 `FormData` API）是最简单最快捷的，但是缺点是被收集的数据无法使用 [JSON.stringify()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 转换为一个 JSON 字符串。
只使用 AJAX 则更为复杂，但也更灵活、更强大。

### 仅使用 XMLHttpRequest

在大多数用例中，提交表单时即便不使用 `FormData` API 也不会要求其他的 API。唯一的例外情况是，**如果你要上传一个或多个文件**，你需要额外的 [`FileReader`](/zh-CN/docs/Web/API/FileReader) API。

#### 提交方法简介

一个 html {{ HTMLElement("form") }} 可以用以下四种方式发送：

- 使用 `POST` 方法，并将 `enctype` 属性设置为 `application/x-www-form-urlencoded` (默认)
- 使用 `POST` 方法，并将 `enctype` 属性设置为 `text/plain`
- 使用 `POST` 方法，并将 `enctype` 属性设置为 `multipart/form-data`
- 使用 `GET` 方法（这种情况下 `enctype` 属性会被忽略）

现在，我们提交一个表单，它里面有两个字段，分别被命名为 `foo` 和 `baz`。如果你用 `POST` 方法，那么服务器将会接收到一个字符串类似于下面三种情况之一，其中的区别依赖于你采用何种编码类型：

- 方法：`POST`；编码类型：`application/x-www-form-urlencoded`（默认）:

```plain
Content-Type: application/x-www-form-urlencoded

foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
```

- 方法：`POST`；编码类型：`text/plain`：

  ```plain
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- 方法：`POST`；编码类型：[`multipart/form-data`](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data)：

  ```plain
  Content-Type: multipart/form-data; boundary=---------------------------314911788813839

  -----------------------------314911788813839
  Content-Disposition: form-data; name="foo"

  bar
  -----------------------------314911788813839
  Content-Disposition: form-data; name="baz"

  The first line.
  The second line.

  -----------------------------314911788813839--
  ```

相反的，如果你用 `GET` 方法，像下面这样的字符串将被简单的附加到 URL：

```plain
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

#### 一个小框架

所有这些事情都是由浏览器在你提交一个 {{ HTMLElement("form") }} 的时候自动完成的。但是如果你想要用 JavaScript 做同样的事情，你不得不告诉解释器所有的事。那么，如何发送表单这件事在使用纯粹的 AJAX 时会复杂到无法在这里解释清楚。基于这个原因，我们提供一个完整的（但仍然教条的）框架，它可以使用所有的四种提交方式，甚至上传文件：

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Sending forms with pure AJAX &ndash; MDN</title>
    <script type="text/javascript">
      "use strict";

      /*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/zh-CN/docs/DOM/XMLHttpRequest#sendAsBinary()
\*/

      if (!XMLHttpRequest.prototype.sendAsBinary) {
        XMLHttpRequest.prototype.sendAsBinary = function (sData) {
          var nBytes = sData.length,
            ui8Data = new Uint8Array(nBytes);
          for (var nIdx = 0; nIdx < nBytes; nIdx++) {
            ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
          }
          /* send as ArrayBufferView...: */
          this.send(ui8Data);
          /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
        };
      }

      /*\
|*|
|*|  :: AJAX Form Submit Framework ::
|*|
|*|  https://developer.mozilla.org/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  https://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntax:
|*|
|*|   AJAXSubmit(HTMLFormElement);
\*/

      var AJAXSubmit = (function () {
        function ajaxSuccess() {
          /* console.log("AJAXSubmit - Success!"); */
          console.log(this.responseText);
          /* you can get the serialized data through the "submittedData" custom property: */
          /* console.log(JSON.stringify(this.submittedData)); */
        }

        function submitData(oData) {
          /* the AJAX request... */
          var oAjaxReq = new XMLHttpRequest();
          oAjaxReq.submittedData = oData;
          oAjaxReq.onload = ajaxSuccess;
          if (oData.technique === 0) {
            /* method is GET */
            oAjaxReq.open(
              "get",
              oData.receiver.replace(
                /(?:\?.*)?$/,
                oData.segments.length > 0 ? "?" + oData.segments.join("&") : "",
              ),
              true,
            );
            oAjaxReq.send(null);
          } else {
            /* method is POST */
            oAjaxReq.open("post", oData.receiver, true);
            if (oData.technique === 3) {
              /* enctype is multipart/form-data */
              var sBoundary =
                "---------------------------" + Date.now().toString(16);
              oAjaxReq.setRequestHeader(
                "Content-Type",
                "multipart\/form-data; boundary=" + sBoundary,
              );
              oAjaxReq.sendAsBinary(
                "--" +
                  sBoundary +
                  "\r\n" +
                  oData.segments.join("--" + sBoundary + "\r\n") +
                  "--" +
                  sBoundary +
                  "--\r\n",
              );
            } else {
              /* enctype is application/x-www-form-urlencoded or text/plain */
              oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
              oAjaxReq.send(
                oData.segments.join(oData.technique === 2 ? "\r\n" : "&"),
              );
            }
          }
        }

        function processStatus(oData) {
          if (oData.status > 0) {
            return;
          }
          /* the form is now totally serialized! do something before sending it to the server... */
          /* doSomething(oData); */
          /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
          submitData(oData);
        }

        function pushSegment(oFREvt) {
          this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
          this.owner.status--;
          processStatus(this.owner);
        }

        function plainEscape(sText) {
          /* How should I treat a text/plain form encoding?
       What characters are not allowed? this is what I suppose...: */
          /* "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
          return sText.replace(/[\s\=\\]/g, "\\$&");
        }

        function SubmitRequest(oTarget) {
          var nFile,
            sFieldType,
            oField,
            oSegmReq,
            oFile,
            bIsPost = oTarget.method.toLowerCase() === "post";
          /* console.log("AJAXSubmit - Serializing form..."); */
          this.contentType =
            bIsPost && oTarget.enctype
              ? oTarget.enctype
              : "application\/x-www-form-urlencoded";
          this.technique = bIsPost
            ? this.contentType === "multipart\/form-data"
              ? 3
              : this.contentType === "text\/plain"
              ? 2
              : 1
            : 0;
          this.receiver = oTarget.action;
          this.status = 0;
          this.segments = [];
          var fFilter = this.technique === 2 ? plainEscape : escape;
          for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
            oField = oTarget.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT"
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE" && oField.files.length > 0) {
              if (this.technique === 3) {
                /* enctype is multipart/form-data */
                for (nFile = 0; nFile < oField.files.length; nFile++) {
                  oFile = oField.files[nFile];
                  oSegmReq = new FileReader();
                  /* (custom properties:) */
                  oSegmReq.segmentIdx = this.segments.length;
                  oSegmReq.owner = this;
                  /* (end of custom properties) */
                  oSegmReq.onload = pushSegment;
                  this.segments.push(
                    'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"; filename="' +
                      oFile.name +
                      '"\r\nContent-Type: ' +
                      oFile.type +
                      "\r\n\r\n",
                  );
                  this.status++;
                  oSegmReq.readAsBinaryString(oFile);
                }
              } else {
                /* enctype is application/x-www-form-urlencoded or text/plain or
             method is GET: files will not be sent! */
                for (
                  nFile = 0;
                  nFile < oField.files.length;
                  this.segments.push(
                    fFilter(oField.name) +
                      "=" +
                      fFilter(oField.files[nFile++].name),
                  )
                );
              }
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              /* NOTE: this will submit _all_ submit buttons. Detecting the correct one is non-trivial. */
              /* field type is not FILE or is FILE but is empty */
              this.segments.push(
                this.technique === 3 /* enctype is multipart/form-data */
                  ? 'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"\r\n\r\n' +
                      oField.value +
                      "\r\n"
                  : /* enctype is application/x-www-form-urlencoded or text/plain or method is GET */
                    fFilter(oField.name) + "=" + fFilter(oField.value),
              );
            }
          }
          processStatus(this);
        }

        return function (oFormElement) {
          if (!oFormElement.action) {
            return;
          }
          new SubmitRequest(oFormElement);
        };
      })();
    </script>
  </head>
  <body>
    <h1>Sending forms with pure AJAX</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <form
      action="register.php"
      method="post"
      enctype="text/plain"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>Your name: <input type="text" name="user" /></p>
        <p>
          Your message:<br />
          <textarea name="message" cols="40" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" /><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          What do you prefer:
          <select name="image_type">
            <option>Books</option>
            <option>Cinema</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Post your photos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          Describe yourself:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

要测试它的话，创建一个名为 `register.php` 的页面（作为示例表单的 `action` 属性）并且只输入以下内容：

```php
<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTE: You should never use `print_r()` in production scripts, or
otherwise output client-submitted data without sanitizing it first.
Failing to sanitize can lead to cross-site scripting vulnerabilities.
*/

echo ":: data received via GET ::\n\n";
print_r($_GET);

echo "\n\n:: Data received via POST ::\n\n";
print_r($_POST);

echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Files received ::\n\n";
print_r($_FILES);
```

激活这些代码的语法很简单：

```
AJAXSubmit(myForm);
```

> **备注：** 该框架使用 {{domxref("FileReader")}} API 进行文件的上传。这是一个较新的 API 并且还未在 IE9 及以下版本的浏览器中实现。因此，使用 AJAX 上传仍是一项**实验性的技术**。如果你不需要上传 二进制文件，该框架在大多数浏览器中运行良好。

> **备注：** 发送二进制内容的最佳途径是通过 {{jsxref("ArrayBuffer", "ArrayBuffers")}} 或 {{domxref("Blob", "Blobs")}} 结合 {{domxref("XMLHttpRequest.send()", "send()")}} 方法甚至 `FileReader` API 的 {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} 方法。但是，自从该脚本的目的变成处理 [可字符串化](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 的原始数据以来，我们使用 {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}} 方法结合 `FileReader` API 的 {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} 方法。同样地，上述脚本仅当你处理小文件时行之有效。如果不打算上传二进制内容，就考虑使用 `FormData` API 来替代。

> **备注：** 非标准的 `sendAsBinary` 方法从 Gecko 31 开始将会废弃并且会很快被移除。标准方法 `send(Blob data)` 将会取而代之。

### 使用 FormData 对象

{{domxref("XMLHttpRequest.FormData", "FormData")}} 构造函数能使你编译一个键/值对的集合，然后使用 `XMLHttpRequest` 发送出去。其主要用于发送表格数据，但是也能被单独用来传输表格中用户指定的数据。传输的数据格式与表格使用 `submit()` 方法发送数据的格式一致，如果该表格的编码类型被设为 "multipart/form-data". FormData 对象可以被结合 `XMLHttpRequest` 的多种方法利用。例如，想了解如何利用 FormData 与 XMLHttpRequests，请转到 [Using FormData Objects](/zh-CN/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects) 页面。为了说教的目的，这里有一个早期的[例子](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#A_little_vanilla_framework)，被转译成了使用** `FormData` API** 的形式。注意以下代码片段：

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" charset="UTF-8" />
    <title>Sending forms with FormData &ndash; MDN</title>
    <script>
      "use strict";

      function ajaxSuccess() {
        console.log(this.responseText);
      }

      function AJAXSubmit(oFormElement) {
        if (!oFormElement.action) {
          return;
        }
        var oReq = new XMLHttpRequest();
        oReq.onload = ajaxSuccess();
        if (oFormElement.method.toLowerCase() === "post") {
          oReq.open("post", oFormElement.action);
          oReq.send(new FormData(oFormElement));
        } else {
          var oField,
            sFieldType,
            nFile,
            sSearch = "";
          for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT"
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE") {
              for (
                nFile = 0;
                nFile < oField.files.length;
                sSearch +=
                  "&" +
                  escape(oField.name) +
                  "=" +
                  escape(oField.files[nFile++].name)
              );
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
            }
          }
          oReq.open(
            "get",
            oFormElement.action.replace(
              /(?:\?.*)?$/,
              sSearch.replace(/^&/, "?"),
            ),
            true,
          );
          oReq.send(null);
        }
      }
    </script>
  </head>
  <body>
    <h1>Sending forms with FormData</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <p>The text/plain encoding is not supported by the FormData API.</p>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" /><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          What do you prefer:
          <select name="image_type">
            <option>Books</option>
            <option>Cinema</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Post your photos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          Describe yourself:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

> **备注：** 如之前所述，{{domxref("FormData")}} 对象并不是 [可字符串化 (stringifiable)](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 的对象。如果你想要字符串化一个提交数据，请使用这个 [早期的纯 AJAX 例子](#A_little_vanilla_framework). 同时也要注意，尽管这个例子中有一些 `file` {{ HTMLElement("input") }} 字段，**但当你通过** `FormData` API 提交一个表格时，也无须使用 {{domxref("FileReader")}} API: 文件被自动加载并上传。

## 获取最后修改日期

```js
function getHeaderTime() {
  console.log(
    this.getResponseHeader("Last-Modified"),
  ); /* 一个合法的 GMTString 日期或 null */
}

var oReq = new XMLHttpRequest();
oReq.open(
  "HEAD" /* 仅需要头部信息 (headers) 时请使用 HEAD! */,
  "yourpage.html",
);
oReq.onload = getHeaderTime;
oReq.send();
```

### 最后修改日期改变后的操作

先创建两个函数：

```js
function getHeaderTime() {
  var nLastVisit = parseFloat(
    window.localStorage.getItem("lm_" + this.filepath),
  );
  var nLastModif = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
    window.localStorage.setItem("lm_" + this.filepath, Date.now());
    isFinite(nLastVisit) && this.callback(nLastModif, nLastVisit);
  }
}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* 使用 HEAD - 我们仅需要头部信息 (headers)! */, sURL);
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}
```

And to test:

```js
/* 测试一下这个文件："yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log(
    "The page '" +
      this.filepath +
      "' has been changed on " +
      new Date(nModif).toLocaleString() +
      "!",
  );
});
```

如果你想要了解 **_当前页面是否发生了改变，_**请阅读这篇文章：{{domxref("document.lastModified")}}.

## 跨站的 XMLHttpRequest

现代浏览器可以通过执行 WebApps 工作小组通过的 [Access Control for Cross-Site Requests](/zh-CN/docs/Web/HTTP/Access_control_CORS) 标注来支持跨站请求。只要服务器端的配置允许您从您的 Web 应用发送请求，就可以使用 `XMLHttpRequest` 。否则，会抛出一个 `INVALID_ACCESS_ERR` 异常

## 绕过缓存

一般地，如果缓存中有相应内容， `XMLHttpRequest` 会试图从缓存中读取内容。绕过缓存的方法见下述代码：

```js
var req = new XMLHttpRequest();
req.open("GET", url, false);
req.channel.loadFlags |= Components.interfaces.nsIRequest.LOAD_BYPASS_CACHE;
req.send(null);
```

> **备注：** 这个方法只工作于基于 Gecko 内核的软件，也就是通道属性是 Gecko-specific.

还有一个跨浏览器兼容的方法，就是给 URL 添加时间戳。请确保你酌情地添加了 "?" or "&" 。例如，将：

```plain
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

因为本地缓存都是以 URL 作为索引的，这样就可以使每个请求都是唯一的，也就可以这样来绕开缓存。

你也可以用下面的方法自动更改缓存：

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
oReq.send(null);
```

## 安全性

要启用跨站脚本，推荐的做法是对 XMLHttpRequest 的响应使用 `Access-Control-Allow-Origin` 的 HTTP 头。

### XMLHttpRequests 被停止

如果你的 XMLHttpRequest 收到 `status=0` 和 `statusText=null` 的返回，这意味着请求无法执行。就是[无法发送](http://www.w3.org/TR/XMLHttpRequest/#dom-xmlhttprequest-unsent). 一个可能导致的原因是当 [`XMLHttpRequest` origin](http://www.w3.org/TR/XMLHttpRequest/#xmlhttprequest-origin) (创建的 XMLHttpRequest) 改变时，XMLHttpRequest 执行 `open()`.。这种情况是可能发生的，举个例子，我们在一个窗口的`onunload`事件中关闭 XMLHttpRequest，但实际上在即将关闭窗口时，之前创建的 XMLHttpRequest 仍然在那里，最后当这个窗口失去焦点、另一个窗口获得焦点时，它还是发送了请求（也就是`open()`）。最有效的避免这个问题的方法是为新窗口的 {{domxref("Element/DOMActivate_event", "DOMActivate")}} 事件设置一个监听器，一旦窗口关闭，它的[`unload`](/zh-CN/docs/Web/API/Window/unload_event)事件便触发。

## Worker

设置 `overrideMimeType` 后在 {{domxref("Worker")}} 中无法正常工作，详见 [Firefox bug 678057](https://bugzil.la/678057)。其他浏览器也许会以不同的手段处理。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
- [HTTP 访问控制](/zh-CN/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- ["Using the XMLHttpRequest Object" (jibbering.com)](https://jibbering.com/2002/4/httprequest.html)
- [The `XMLHttpRequest` object: WHATWG specification](https://xhr.spec.whatwg.org/)
