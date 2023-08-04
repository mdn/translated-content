---
title: Blob
slug: Web/API/Blob
---

{{APIRef("File API")}}

`Blob` 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 {{DOMxRef("ReadableStream")}} 来用于数据操作。

Blob 表示的不一定是 JavaScript 原生格式的数据。{{DOMxRef("File")}} 接口基于 `Blob`，继承了 blob 的功能并将其扩展以支持用户系统上的文件。

## 使用 blob

要从其他非 blob 对象和数据构造一个 `Blob`，请使用 {{DOMxRef("Blob.Blob", "Blob()")}} 构造函数。要创建一个 blob 数据的子集 blob，请使用 {{DOMxRef("Blob.slice()", "slice()")}} 方法。要获取用户文件系统上的文件对应的 `Blob` 对象，请参阅 {{DOMxRef("File")}} 文档。

接受 `Blob` 对象的 API 也被列在 {{DOMxRef("File")}} 文档中。

## 构造函数

- {{DOMxRef("Blob.Blob", "Blob()")}}
  - : 返回一个新创建的 `Blob` 对象，其内容由参数中给定的数组拼接组成。

## 实例属性

- {{DOMxRef("Blob.prototype.size")}} {{ReadOnlyInline}}
  - : `Blob` 对象中所包含数据的大小（字节）。
- {{DOMxRef("Blob.prototype.type")}} {{ReadOnlyInline}}
  - : 一个字符串，表明该 `Blob` 对象所包含数据的 MIME 类型。如果类型未知，则该值为空字符串。

## 实例方法

- {{DOMxRef("Blob.prototype.arrayBuffer()")}}
  - : 返回一个 promise，其会兑现一个包含 `Blob` 所有内容的二进制格式的 {{jsxref("ArrayBuffer")}}。
- {{DOMxRef("Blob.prototype.slice()")}}
  - : 返回一个新的 `Blob` 对象，包含了源 `Blob` 对象中指定范围内的数据。
- {{DOMxRef("Blob.prototype.stream()")}}
  - : 返回一个能读取 `Blob` 内容的 {{DOMxRef("ReadableStream")}}。
- {{DOMxRef("Blob.prototype.text()")}}
  - : 返回一个 promise，其会兑现一个包含 `Blob` 所有内容的 UTF-8 格式的字符串。

## 示例

### 创建一个 blob

{{DOMxRef("Blob.Blob", "Blob()")}} 构造函数可以通过其他对象创建 blob。例如，用一个 JSON 字符串构造一个 blob：

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### 创建一个指向类型化数组的 URL

以下代码创建了一个 JavaScript [类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)，并创建一个新的，包含类型化数组中的数据的 `Blob`。然后调用 {{DOMxRef("URL.createObjectURL()")}} 方法，将 blob 转换为一个 {{glossary("URL")}}。

#### HTML

```html
<p>
  此示例创建一个类型化数组，其中包含空格以及 A 到 Z 的 ASCII
  字符。然后将其转换为一个对象 URL。并创建一个打开该对象 URL
  的链接。点击这个链接以查看对象 URL 解码后的内容。
</p>
```

#### JavaScript

该示例代码片段的主要片段是 `typedArrayToURL()` 函数，其用于从给定的类型化数组创建一个 `Blob`，并返回该 `Blob` 的对象 URL。将数据转换为对象 URL 后，可通过多种方式使用，包括：作为 {{HTMLElement("img")}} 元素 [`src`](/zh-CN/docs/Web/HTML/Element/img#src) 属性的值（当然，假设给定的数据包含了一张图片）。

```js
function showViewLiveResultButton() {
  if (window.self !== window.top) {
    // 如果当前文档是否在一个 frame 中，则
    // 确保让用户在新的标签页或窗口中打开它。
    // 否则，此示例将无法正常演示。
    const p = document.querySelector("p");
    p.textContent = "";
    const button = document.createElement("button");
    button.textContent = "查看上面示例代码的渲染结果";
    p.append(button);
    button.addEventListener("click", () => window.open(location.href));
    return true;
  }
  return false;
}

if (!showViewLiveResultButton()) {
  function typedArrayToURL(typedArray, mimeType) {
    return URL.createObjectURL(
      new Blob([typedArray.buffer], { type: mimeType }),
    );
  }
  const bytes = new Uint8Array(59);

  for (let i = 0; i < 59; i++) {
    bytes[i] = 32 + i;
  }

  const url = typedArrayToURL(bytes, "text/plain");

  const link = document.createElement("a");
  link.href = url;
  link.innerText = "打开这个数组的 URL";

  document.body.appendChild(link);
}
```

#### 结果

{{EmbedLiveSample("创建一个指向类型化数组的 URL", 600, 200)}}

### 从 blob 中提取数据

一种从 `Blob` 中读取内容的方法是使用 {{DOMxRef("FileReader")}}。以下代码将 `Blob` 的内容作为类型化数组读取：

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result 包含被转化为类型化数组的 blob 中的内容
});
reader.readAsArrayBuffer(blob);
```

另一种读取 `Blob` 中内容的方式是使用 {{domxref("Response")}} 对象。下述代码将 `Blob` 中的内容读取为文本：

```js
const text = await new Response(blob).text();
```

或者，也可以使用 {{DOMxRef("Blob.prototype.text()")}}：

```js
const text = await blob.text();
```

通过使用 `FileReader` 的其他方法可以把 Blob 读取为字符串或者数据 URL。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("FileReader")}}
- {{DOMxRef("File")}}
- {{DOMxRef("URL.createObjectURL")}}
- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
