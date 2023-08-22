---
title: 发送和接收二进制数据
slug: Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
---

## 使用 JavaScript 类型数组接受二进制数据

可以通过设置一个 XMLHttpRequest 对象的 `responseType`属性来改变一个从服务器上返回的响应的数据类型。可用的属性值为空字符串 (默认)，"arraybuffer"、"blob"、"document"、"json" 和 "text"。`response` 属性的值会根据 `responseType` 属性包含实体主体（entity body），它可能会是一个 `ArrayBuffer`、`Blob`、`Document`、`JSON`, string，或者为`NULL(如果请求未完成或失败)`

下例读取了一个二进制图像文件，并且由该文件的二进制原生字节创建了一个 8 位无符号整数的数组。注意，这不会解码图像，但会读取像素。你需要一个 png 解码库（[png decoding library](https://github.com/devongovett/png.js/)）。

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  var arrayBuffer = oReq.response; // 注意：不是 oReq.responseText
  if (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteArray.byteLength; i++) {
      // 对数组中的每个字节进行操作
    }
  }
};

oReq.send(null);
```

也可以通过给 responseType 属性设置为 `“blob”`，将二进制文件读取为 {{domxref("Blob")}} 类型的数据。

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "blob";

oReq.onload = function (oEvent) {
  var blob = oReq.response;
  // ...
};

oReq.send();
```

## 在老的浏览器中接受二进制数据

下面的`load_binary_resource()` 方法可以从指定的 URL 那里加载二进制数据，并将数据返回给调用者。

```js
function load_binary_resource(url) {
  var req = new XMLHttpRequest();
  req.open("GET", url, false);
  //XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.send(null);
  if (req.status != 200) return "";
  return req.responseText;
}
```

最为奇妙的操作在第五行，该行重写了默认的 MIME 类型，强制浏览器将该响应当成纯文本文件来对待，使用一个用户自定义的字符集。这样就是告诉了浏览器，不要去解析数据，直接返回未处理过的字节码。

```js
var filestream = load_binary_resource(url);
var abyte = filestream.charCodeAt(x) & 0xff; // 扔掉的高位字节 (f7)
```

上例从请求回来的二进制数据中得到偏移量为 x 处的字节。有效的偏移量范围是 0 到 `filestream.length-1`。

查看 [使用 XMLHttpRequest 下载文件](http://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) 了解详情，查看[下载文件](/zh-CN/Code_snippets/Downloading_Files)。

## 发送二进制数据

XMLHttpRequest 对象的 `send` 方法已被增强，可以通过简单的传入一个 [`ArrayBuffer`](/zh-CN/JavaScript_typed_arrays/ArrayBuffer)、{{ domxref("Blob") }} 或者 {{ domxref("File") }} 对象来发送二进制数据。

下例创建了一个文本文件，并使用 `POST` 方法将该文件发送到了服务器上。你也可以使用文本文件之外的其他二进制数据类型。

```js
var oReq = new XMLHttpRequest();
oReq.open("POST", url, true);
oReq.onload = function (oEvent) {
  // 上传完成后。
};

var bb = new BlobBuilder(); // 需要合适的前缀：window.MozBlobBuilder 或者 window.WebKitBlobBuilder
bb.append("abc123");

oReq.send(bb.getBlob("text/plain"));
```

## 将类型数组作为二进制数据发送

你可以将 JavaScript 类型数组作为二进制数据发送出去。

```js
var myArray = new ArrayBuffer(512);
var longInt8View = new Uint8Array(myArray);

for (var i = 0; i < longInt8View.length; i++) {
  longInt8View[i] = i % 255;
}

var xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(myArray);
```

上例新建了一个 512 字节的 8 比特整数的数组并发送它，当然，你也可以发送任意的二进制数据。

> **备注：** 从 Gecko 9.0 开始，添加了使用 XMLHttpRequest 发送 [`ArrayBuffer`](/zh-CN/JavaScript_typed_arrays/ArrayBuffer) 对象的功能。

## 提交表单和上传文件

请阅读[此文](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files)

## Firefox 私有方法

下面的例子使用了 `POST` 请求，用 Firefox 私有的非标准方法 `sendAsBinary()` 将二进制数据以异步模式传输了出去。

```js
var req = new XMLHttpRequest();
req.open("POST", url, true);
// 这里应该设置适当的 MIME 请求头
req.setRequestHeader("Content-Length", 741);
req.sendAsBinary(aBody);
```

第四行将 Content-Length 请求头设置为 741，表示发送的数据长度为 741 个字节。你应该根据你要发送的数据的大小改变这个值。

第五行使用 `sendAsBinary()` 方法发送这个请求。

你也可以通过将一个 `nsIFileInputStream` 对象实例传给 [`send()`](</zh-cn/DOM/XMLHttpRequest#send()>) 方法来发送二进制内容，这样的话，你不需要自己去设置 `Content-Length` 请求头的大小，程序会自动设置：

```js
// 新建一个文件流。
var stream = Components.classes[
  "@mozilla.org/network/file-input-stream;1"
].createInstance(Components.interfaces.nsIFileInputStream);
stream.init(file, 0x04 | 0x08, 0644, 0x04); // file 是一个 nsIFile 对象实例

// 设置文件的 MIME 类型
var mimeType = "text/plain";
try {
  var mimeService = Components.classes["@mozilla.org/mime;1"].getService(
    Components.interfaces.nsIMIMEService,
  );
  mimeType = mimeService.getTypeFromFile(file); // file 是一个 nsIFile 对象实例
} catch (oEvent) {
  /* 丢弃异常，使用默认的 text/plain 类型 */
}

// 发送
var req = Components.classes[
  "@mozilla.org/xmlextras/xmlhttprequest;1"
].createInstance(Components.interfaces.nsIXMLHttpRequest);
req.open("PUT", url, false); // 同步模式！
req.setRequestHeader("Content-Type", mimeType);
req.send(stream);
```

{{APIRef("XMLHttpRequest")}}
